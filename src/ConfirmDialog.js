import React from "react"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";

function ConfirmDialog(props) {
  return (
    <div>
      <Dialog open={props.isDialogOpened} onClose={props.onCloseDialog} aria-labelledby="form-dialog-title" maxWidth={false}>
        <div style={{width: 500}} className="dialog-container">
          <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onCloseDialog} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={props.onItemStateChanged}>
              {props.actionButton}
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}

export default ConfirmDialog

