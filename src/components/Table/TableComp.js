import {
  Alert,
  AlertTitle, Chip, Box, IconButton, Skeleton,
  TablePagination
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import ModalButton from "../Button/modalButton";
import AlertModal from "../Modal/AlertModal";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import imm from '../../images/Avocado Hass.jpg'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
}));

const TableComp = (props) => {

  return (
    <Paper sx={{ mb: 4 }}>
      <TableContainer
        sx={{
          ml: "0 important",
        }}
        component={Paper}
      >
        <Table
          sx={{ minWidth: props.minWidth || 700 }}
          aria-label="customized table"
          stickyHeader={true}
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: props.tableheadColor,
              }}
            >
              {props.tbheader.map((head, index) => (
                <TableCell
                  align={props.textAlign || "left"}
                  sx={{
                    color: "gray",

                    lineHeight: 1.25,
                    fontSize: props.fontSize,
                    backgroundColor: "white",
                  }}
                  key={index}
                >
                  {head.header}
                </TableCell>
              ))}
              {props.action && (
                <TableCell
                  align={props.textAlign || "left"}
                  sx={{
                    color: "gray",

                    lineHeight: 1.25,
                    fontSize: props.fontSize,
                    backgroundColor: "white",
                  }}
                >
                  
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.isLoading ? (
              new Array(11).fill(0).map((val, index) => (
                <TableRow key={index}>
                  <TableCell
                    colSpan={
                      props.page === "config"
                        ? props.tbheader?.length + 2
                        : props.tbheader?.length + 1
                    }
                    sx={{ p: 0, border: "none" }}
                  >
                    <Skeleton
                      animation="wave"
                      sx={{
                        backgroundColor: "#d7d9db",
                        mb: 0.5,
                        ":after": {
                          background:
                            "linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.20),transparent)",
                        },
                      }}
                      variant="rectangular"
                      width="100%"
                      height={60}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : props.error ? (
              <TableRow>
                <TableCell
                  colSpan={
                    props.page === "config"
                      ? props.tbheader?.length + 2
                      : props.tbheader?.length + 1
                  }
                  sx={{ p: 0, border: "none" }}
                >
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error in fetching data —{" "}
                    <strong>check it out!</strong>
                  </Alert>
                </TableCell>
              </TableRow>
            ) : props.tbrows?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={props.tbheader?.length}
                  sx={{ p: 0, border: "none" }}
                >
                  <Alert severity="info">
                    <AlertTitle>Data Not Found </AlertTitle>
                    Please select other type
                  </Alert>
                </TableCell>
              </TableRow>
            ) : (
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    
              props?.tbrows?.length > 0 &&
              props?.tbrows
                .map((row, index) => (
                  <StyledTableRow key={index}>
                    {/* {row.item.map((item, index) => {
                return ( */}
                    {props.tbheader.map((head, index) => (
                      <TableCell
                        sx={{
                          color: "gray",
                          backgroundColor:head.key === "status" ? "#f1f1f1" : "white",
                          width:
                            head.width || `${100 / props?.tbheader?.length}%`,
                        }}
                        key={index}
                      >
                        
                        {head.key === "status" && row[head.key] ?
                        <Box display="flex" justifyContent={"space-between"}>
                        
                          <Box width={"50%"} sx={{textAlign:"center"}}>
                            <Chip whiteSpace ='normal' sx={{maxWidth:"9rem",py:2}} color={row[head.key] === "Missing-Urgent" ? "error" : row[head.key] === "Missing" ?  "warning" : "success"}  label={row[head.key]} />
                          </Box> 
                          <Box display={"flex"}>
                            <IconButton><DoneIcon sx={{fill:row[head.key].includes('Missing') ? "gray" : "green" }} /></IconButton>
                            <AlertModal icon={<CloseIcon sx={{fill:row[head.key] === "Missing-Urgent" ? "red" : row[head.key] === "Missing" ?  "orangered" : "gray"}}/>}></AlertModal>
                            <ModalButton editData={row} modalName="editOrder"  variant="standard" text="Edit" />
                            </Box>
                        </Box> 
                        
                          :
                          head.type === "image" ?
                            <Box>
                              <img width={50} height={50} src={imm} alt="avocado" />
                            </Box>
                            :
                          row[head.key]
                        } 
                      </TableCell>
                    ))}
                  
                  </StyledTableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    
    </Paper>
  );
};

export default React.memo(TableComp);
