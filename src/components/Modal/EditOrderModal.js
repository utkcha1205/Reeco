
import { Box,Button,Chip,Grid } from '@mui/material';
import React from 'react';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import GridWrapper from '../wrapper/GridWrapper';
import avocadoImage from '../../images/Avocado Hass.jpg';

function EditOrderModal(props) {
    const {editData, handleClose} = props
    return (
        <Box sx={{p:2}}>
            <Heading sx={{fontSize:"1rem",fontWeight:"bold"}} color="black" text={editData.name} />
            <Paragraph sx={{fontSize:"1rem",fontWeight:"bold"}} color="gray" text={editData.brand} />
            <GridWrapper justifyContent="start" alignItems="center" sx={{pb:0}} >
                <Grid item sm={4}>
                    <div>
                        <img width={150} height={150} src={avocadoImage} alt="avocado"  />
                    </div>
                </Grid>
                <Grid item sm={8}>
                <GridWrapper justifyContent="start" >
                    <Grid item sm={4}>
                        <Paragraph text="Price" />
                    </Grid>
                    <Grid item sm={4}>
                        <Paragraph text={editData.price} />
                    </Grid>
               </GridWrapper>
                <GridWrapper justifyContent="start">
                    <Grid item sm={4}>
                        <Paragraph text="Quantity" />
                    </Grid>
                    <Grid item sm={4}>
                        <Paragraph text={editData.quantity} />
                    </Grid>
               </GridWrapper>
                <GridWrapper justifyContent="start">
                    <Grid item sm={4}>
                        <Paragraph text="Total" />
                    </Grid>
                    <Grid item sm={4}>
                        <Paragraph text={editData.total} />
                    </Grid>
               </GridWrapper>
                </Grid>
            </GridWrapper>
            <Box>
                <Paragraph sx={{fontSize:".8rem",fontWeight:"bold"}}>
                    Choose Reason <span style={{color:"gray"}}>(Optional)</span>
                </Paragraph>
                <GridWrapper justifyContent="start" sx={{py:2}}>
                    <Grid item>
                        <Chip variant='outlined'  label="Missing Product" />
                    </Grid>
                    <Grid item>
                    <Chip variant='outlined' label="Quality is not the same" />
                    </Grid>
                    <Grid item>
                    <Chip variant='outlined' label="Price is not the same" />
                    </Grid>
                    <Grid item>
                    <Chip variant='outlined' label="Other" />
                    </Grid>
                </GridWrapper>
            </Box>
            <GridWrapper justifyContent={'end'}>
                <Grid item>
                    <Button sx={{borderRadius:"50px"}} color='success' variant='outlined'>Cancel</Button>
                </Grid>
                <Grid item>
                    <Button sx={{borderRadius:"50px"}} variant='contained' color='success' >Save</Button>
                </Grid>
            </GridWrapper>
        </Box>
    );
}

export default EditOrderModal;