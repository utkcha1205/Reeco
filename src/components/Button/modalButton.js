import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { useTheme } from '@mui/material/styles';
import EditOrderModal from "../Modal/EditOrderModal";
import AddOrderModal from "../Modal/AddOrderModal";

// import { theme } from "../../theme";
import Paragraph from "../Typography/Paragraph";

const ModalButton = (props) => {
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Grid
        item
        container
        justifyContent={props.justifyContent || "center"}
        width="auto"
        alignItems={props.alignItems}
      >
        <Button
          onClick={props.onClick || handleClickOpen}
          variant={props.variant || "contained"}
                  disabled={props.disabled}
          color={props.color || "secondary"}
                  sx={{
              textTransform:"none",
            fontSize: "12px",
            minWidth: props.minWidth || "50px",
            ...props.sx,
            justifyContent: props.justifycontent || "center",
          }}
        >
          {props.text}
        </Button>
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
        maxWidth={props.formmodal ? "sm" : "md"}
        sx={{ zIndex: 2000 }}
      >
        <Box position="relative">
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: "1rem", top: "1rem" }}
          >
            <CloseIcon sx={{ color: "common.gray2" }} fontSize="medium" />
          </IconButton>
        </Box>
        <Box padding={3} paddingBottom={0}>
          {props.modalName === "editOrder" ?
            <EditOrderModal editData={props.editData} handleClose={handleClose} />
            :
            <AddOrderModal />
            
         }
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default React.memo(ModalButton);
