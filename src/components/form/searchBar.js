import React from 'react';
import {TextField } from '@mui/material';import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchBar(props) {
    const [searched, setSearched] = useState('')

    const searchIconStyle = {
        marginRight: '8px',
        color: '#ccc',
    };
    
    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            InputProps={{
            endAdornment: <SearchIcon style={searchIconStyle} />,
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius:"25px"
                }
            }}
            inputProps={{
                sx: {
                color: "gray",
                fontSize: ".9rem",
                height: ".5rem",
                // backgroundColor: props.disabled ? "common.gray4" : "white",
              },
            }}
            
      />
    );
}

export default SearchBar;