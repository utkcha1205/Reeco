import { Divider, Grid } from "@mui/material";
import React from "react";

const GridWrapper = (props) => {
  return (
    <React.Fragment>
      {props.divider && <Divider variant="fullWidth" />}
      <Grid
        container
        spacing={props.spacing || { xs: 5, sm: 4, md: 3.5 }}
        justifyContent={props.justifyContent || "center"}
        alignItems={props.alignItems}
        direction={props.direction || "row"}
        textAlign={props.textAlign}
        sx={{ py: 5, ...props.sx }}
        columnSpacing={props.columnSpacing}
        rowSpacing={props.rowSpacing}
      >
        {props.children}
      </Grid>
    </React.Fragment>
  );
};

export default React.memo(GridWrapper);
