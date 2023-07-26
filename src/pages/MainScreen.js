
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { approveProduct, markMissing } from '../redux/reducers/productsSlice';
import { Box, Card,Grid,styled } from '@mui/material';
import GridWrapper from '../components/wrapper/GridWrapper';
import Paragraph from '../components/Typography/Paragraph';
import TableView from '../components/TableView';


const StyledHeading= styled(Paragraph)(({theme}) => ({
    fontSize: ".8rem",
    fontWeight: "bold",
    color:"gray"
}));

export { StyledHeading }

const StyledParagraph = styled(Paragraph)(({theme}) => ({
    fontSize: "1rem",
  fontWeight: "bold",
  color:"black"
  }));
  
export { StyledParagraph }
  
const StyledBox = styled(Paragraph)(({ theme }) => ({
    borderRight: "1px solid lightgray",
    height: "100%",
  }));
  
  export { StyledBox }

const MainScreen = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleApprove = (productId) => {
    dispatch(approveProduct({ productId }));
  };

  const handleMarkMissing = (productId, urgent) => {
    dispatch(markMissing({ productId, urgent }));
  };

  
    return (
        <Box px="6rem" py="2rem" sx={{overflow:"auto", height:"calc(100vh - 15rem)", mt:".8rem"}}>
            <Card sx={{boxShadow:'none', border:"1px solid lightgray", borderRadius:2}}>
                <GridWrapper sx={{py:2,px:"3rem"}} justifyContent="space-between" textAlign="left">
                    <Grid item sm={2}>
                        <StyledBox>
                        <StyledHeading className={"oderDetailsHeadText"} text="Supplier" />
                            <StyledParagraph className={"oderDetailsText"} text="East coasts fruits & vegetables" />
                            </StyledBox>
                    </Grid>
                    <Grid item sm={2}>
                    <StyledBox>
                        <StyledHeading className={"oderDetailsHeadText"} text="Shipping Dates" />
                        <StyledParagraph className={"oderDetailsText"} text="Thu, Feb 10" />
                        </StyledBox>
                    </Grid>
                    <Grid item sm={2}>
                    <StyledBox>
                        <StyledHeading className={"oderDetailsHeadText"} text="Total" />
                        <StyledParagraph className={"oderDetailsText"} text="$15,0280.3" />
                    </StyledBox>
                    </Grid>
                    <Grid item sm={2}>
                        <StyledBox>
                        <StyledHeading className={"oderDetailsHeadText"} text="Category" />
                        <StyledParagraph className={"oderDetailsText"} text="$15,0280.3" />
                        </StyledBox>
                    </Grid>
                <Grid item sm={2}>
                        <StyledBox>
                        <StyledHeading className={"oderDetailsHeadText"} text="Department" />
                        <StyledParagraph className={"oderDetailsText"}  text="300-444-678" />
                        </StyledBox>
                    </Grid>
            <Grid item sm={2}>
            <StyledBox sx={{border:"none"}}>
                        <StyledHeading className={"oderDetailsHeadText"} text="Status" />
                        <StyledParagraph className={"oderDetailsText"} text="Awaiting your approval" />
                        </StyledBox>
                    </Grid>
                </GridWrapper>
            </Card>
            <TableView />
        </Box>


    // <div>
    //   <h1>Main Page</h1>
    //   <div>
    //     {products.map((product) => (
    //       <div key={product.id}>
    //         <span>{product.name}</span>
    //         <span>{product.status}</span>
    //         <button onClick={() => handleApprove(product.id)}>Approve</button>
    //         <button onClick={() => handleMarkMissing(product.id, false)}>Mark Missing</button>
    //         <button onClick={() => handleMarkMissing(product.id, true)}>Mark Missing - Urgent</button>
    //         <button>Edit</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default MainScreen;
