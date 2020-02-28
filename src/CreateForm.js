import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from "@material-ui/core/Tooltip"
import "./styles/FormDialog.css";

function FormDialog(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [newItemName, setNewItemName] = useState('');

  const openDialog = () => {
    setIsOpened(true);
  }

  const closeDialog = () => {
    setIsOpened(false);
  }

  const saveItem = (event) => {
    event.preventDefault();
    closeDialog();
    props.onItemAdded(newItemName);
    setNewItemName('');
  }

  if (!props.isToDoTab) {
    return (<div></div>)
  }

  return (
    <div>
      <Tooltip title="Add new task">
        <Button onClick={openDialog} className="add-button">
          <AddCircleIcon className="add-item-icon" />
        </Button>
      </Tooltip>
      <Dialog open={isOpened} onClose={closeDialog} aria-labelledby="form-dialog-title" maxWidth={false}>
        <form style={{width: 500}} className="dialog-form" onSubmit={saveItem}> 
          <DialogTitle id="form-dialog-title">Add new task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please, enter new task name:
            </DialogContentText>
            <TextField
              inputProps={{
                maxLength: 100
              }}
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" disabled={!newItemName.trim().length}>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default FormDialog
