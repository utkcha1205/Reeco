import React from "react";
import {
  Box,
  Grid,
  Link,
  Breadcrumbs,
  ButtonGroup,
    Button,
    Card
} from "@mui/material";
import MainScreen from "./MainScreen";
import GridWrapper from "../components/wrapper/GridWrapper"; 
import  Paragraph from "../components/Typography/Paragraph";
import  Heading from "../components/Typography/Heading";

const Home = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Orders
    </Link>,
    <Link
      underline="true"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Order 32457ABC
    </Link>
  ];
    
  return (
    <Box sx={{position:"fixed",top:70}}>
      <Card  sx={{boxShadow:"2px 4px 6px 1px lightgrey",px:"6rem"}}>
        <GridWrapper sx={{py:2}} justifyContent="space-between" alignItems="end">
          <Grid item>
            <Breadcrumbs sx={{fontSize:".8rem",mb:2}} separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
            <Heading color="black"  sx={{m:0, fontSize:"1.2rem", fontWeight:"bold"}} text="Order 32457ABC" />
          </Grid>
          <Grid item >
            <Box display={"flex"}>
              <Button sx={{textTransform:"none",mr:2, borderRadius:20,py:.5, fontWeight:"bold", fontSize:".75rem", borderWidth:"2px"}} color="success" variant="outlined" >Back</Button>
              <Button  variant="standard" 
                sx={{textTransform:"none", backgroundColor: "green", borderRadius:20, color:"white",py:.5, fontWeight:"bold", fontSize:".75rem"}}>Approve Order</Button>
            </Box>
          </Grid>
        </GridWrapper>
      </Card>
      <MainScreen />
    </Box>
  );
};

export default Home;
