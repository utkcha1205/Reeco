import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Grid } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Heading from "./Typography/Heading";
import Paragraph from "./Typography/Paragraph";
import GridWrapper from "./wrapper/GridWrapper";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/reducers/cartSlice';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function TopNavBar(props) {

  const count = useSelector((state) => state.counter.count);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{ backgroundColor: "green" }}
        position="fixed"
        open={props.open}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            px: "6rem !important",
          }}
        >
          <GridWrapper sx={{ p: 0 }} justifyContent="start" alignItems="center">
            <Grid item>
              <Heading
                sx={{ fontSize: "2rem" }}
                headingvariant="h4"
                white
                text="Reeco"
              />
            </Grid>
            <Grid item>
              <Paragraph white text="Store" />
            </Grid>
            <Grid item>
              <Paragraph white text="Orders" />
            </Grid>
            <Grid item>
              <Paragraph white text="Analytics" />
            </Grid>
          </GridWrapper>
          <GridWrapper sx={{ p: 0 }} justifyContent="end" alignItems="center">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                //   onClick={handleDrawerOpen}
                edge="start"
              >
                              <Badge
                                  sx={{
                                      "& .MuiBadge-badge": {
                                          backgroundColor: "limegreen",
                                          fontSize: ".7rem",
                                          minWidth: 15,
                                          height:18
                                  }}}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  badgeContent={count || 1}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                id="basic-button"
                size="large"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openProfile ? "true" : undefined}
                onClick={handleClick}
                sx={{ float: "right", pointerEvents: "none" }}
              >
                <Paragraph white text={"Hello, James" || ""} />
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </GridWrapper>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default React.memo(TopNavBar);
