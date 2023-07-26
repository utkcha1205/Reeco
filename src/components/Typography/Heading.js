import { Typography } from "@mui/material";
import React from "react";

const Heading = (props) => {
  return (
    <Typography
      variant={props.headingvariant || "h4"}
      textAlign={props.textAlign}
      color={props.white ? "white" : props.color || "primary"}
      sx={{ ...props.sx }}
      className={props.className}
      noWrap={props.noWrap}
      
    >
      {props.text}
      {props.children}
    </Typography>
  );
};

export default React.memo(Heading);
