import { Box } from '@mui/material';
import React from 'react';
import SearchBar from '../form/searchBar';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

function AddOrderModal(props) {
    return (
        <Box>
            <Box pb={1} width={"100%"} sx={{borderBottom:"1px solid black"}}>
                <Heading color="black" sx={{fontSize:"1rem", fontWeight:"bold"}} text="Add product from Sysco's Catalog" />
            </Box>
            <Paragraph mb="1rem" sx={{mt:"1rem"}} color="gray" text="Search products from Sysco's catalog and add quantity" />
            <Box width={"30%"}><SearchBar  /></Box>
        </Box>
    );
}

export default AddOrderModal;