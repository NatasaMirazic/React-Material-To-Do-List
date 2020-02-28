import React, {useState} from "react"
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import RestoreIcon from '@material-ui/icons/Restore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ConfirmDialog from "./ConfirmDialog"
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Tooltip from "@material-ui/core/Tooltip";
import "./styles/Item.css";

function Item(props) {
  const [isDeleteDialogOpened, setIsDeleteDialogOpened] = useState(false)
  const [isRestoreDialogOpened, setIsRestoreDialogOpened] = useState(false)
  const [isItemChecked, setIsItemChecked] = useState(props.item.isDone)

  const handleItemIsDoneChange = (event) => {
    setIsItemChecked(event.target.checked);
    props.onItemIsDoneChanged(props.item);
  }

  const removeItem = () => {
    props.onItemDeleted(props.item)
  }

  const openDeleteDialog = () => {
    setIsDeleteDialogOpened(true);
  }

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpened(false);
  }

  const openRestoreDialog = () => {
    setIsRestoreDialogOpened(true);
  }

  const closeRestoreDialog = () => {
    setIsRestoreDialogOpened(false);
  }

  const restoreItem = () => {
    props.onItemIsDoneChanged(props.item)
  }

  return (
    <div>
      <Card className="card">
        <CardHeader
          avatar={
            <FormControlLabel
              control={
                <Tooltip title="Mark as Done">
                  <Checkbox
                    disabled = {props.item.isDone}
                    checked={isItemChecked}
                    onChange={handleItemIsDoneChange}
                    value="checked"
                    color="primary"
                    name="checked"
                  />
                </Tooltip>
              }
            />
          }
          action={
            <div className="actions-container"> 
              {(props.item.isDone) &&
              <div>
                <Tooltip title="Restore">   
                  <IconButton aria-label="restore" onClick={openRestoreDialog} className="restore-button">
                    <RestoreIcon />
                  </IconButton>
                </Tooltip>
                <ConfirmDialog 
                  isDialogOpened={isRestoreDialogOpened}
                  closeDialog={closeRestoreDialog}
                  changeItemState={restoreItem}
                  title = "Restore task?"
                  content = "You are about to restore this task from Done tasks. Are you sure you want to make this change?"
                  actionButton = "Restore"
                />
              </div>
              }
              <Tooltip title="Delete">       
                <IconButton aria-label="delete" onClick={openDeleteDialog} className="delete-button" >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>    
              <ConfirmDialog 
                isDialogOpened={isDeleteDialogOpened}
                title = "Delete task?"
                content = "You are about to delete this task from your list. Are you sure you want to make this change?"
                actionButton = "Delete"
                onItemStateChanged={removeItem}
                onCloseDialog={closeDeleteDialog}
              />
              <Tooltip title="Move">
                <IconButton aria-label="drag" className="drag-button">
                  <DragIndicatorIcon />
                </IconButton>
              </Tooltip>
          </div>
          }
          title={props.item.title}
        />
      </Card>  
    </div>
  )
}

export default Item