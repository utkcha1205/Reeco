import PrintIcon from '@mui/icons-material/Print';
import { Box, Card, Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import ModalButton from './Button/modalButton';
import SearchBar from './form/searchBar';
import TableComp from './Table/TableComp';
import { tableHeaders } from './Table/tableHeaders';
import GridWrapper from './wrapper/GridWrapper';
import { orderStaticData } from '../data/reecoData';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderData } from '../redux/reducers/orderSlice';


function TableView(props) {
    const orderData = useSelector(state => state.order);
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Fetch data and store it in the Redux store
      const data = orderStaticData;
      dispatch(setOrderData(data));
    }, [dispatch]);


    return (
        <Card sx={{boxShadow:'none', border:"1px solid lightgray", borderRadius:2, mt:5,px:"1.4rem"}}>
            <GridWrapper justifyContent="space-between">
                <Grid item sm={5}>
                    <SearchBar />
                </Grid>
                <Grid item>
                    <Box display={"flex"}>
                        <ModalButton modalName="addOrder" variant="outlined" color="success" text="Add item" sx={{borderWidth:2, fontWeight:"bold", borderRadius:"50px", px:2,py:0}} />
                        <IconButton color='success'><PrintIcon /> </IconButton>
                    </Box>
                </Grid>
            </GridWrapper>

            <TableComp
            
                tbheader={tableHeaders.mainPageTable}
                // action= "Status"
        tbrows={orderData}
        isLoading={false}
            />
       </Card>
    );
}

export default TableView;