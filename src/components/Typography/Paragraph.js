import { Typography } from "@mui/material";
import React from "react";

const Paragraph = (props) => {
  return (
    <Typography
      variant={props.paragraphvariant || "body2"}
      paragraph
      gutterBottom
      align={props.align}
      color={props.white ? "white" : props.color}
      display={props.display}
      sx={{ ...props.sx, mb: props.mb || 0 }}
      className={props.className}
    >
      {props.children1}
      {props.text}
      {props.children}
    </Typography>
  );
};

export default React.memo(Paragraph);
