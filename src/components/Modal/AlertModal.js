import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  TextareaAutosize,
  TextField,
  Tooltip,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import Paragraph from "../Typography/Paragraph";

const Transition = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton disabled={props.disabled} onClick={() => handleClickOpen()}>
        <Tooltip title={props.title} arrow>
          {props.icon}
        </Tooltip>
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={props.modal === "widthdrawal" ? true : false}
        maxWidth="sm"
      >
     
        <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{ mb: 2 }}
              >
                Missing Product
              </DialogContentText>
              <Paragraph text="Is Breasts Fillets, Boneless....Urgent?" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Yes</Button>

            <Button onClick={handleClose}>No</Button>
         
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default React.memo(AlertModal);
