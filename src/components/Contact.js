import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./theme";
import Header from "./Header.jsx";
import CurrentUser from '../model/CurrentUser'
import Contact from "../model/Contact";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useCallback } from "react";

async function fetchdata (account_id){
    let data = await Contact.getByAcountId(account_id)
    return (
      data.body
    )
}


const ContactList = () => {
  const currentuser = new CurrentUser()
  currentuser.parse()
  const [data, setdata] = useState("");
  useEffect( () => {
    fetchdata(currentuser.account_id).then(function(result){
      setdata(result)
      return result})
  }, [])



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedRows, setSelectedRows] = useState([]);
  var columns = [
    { field: "contact_id", headerName: "ID" },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable:true,
    },
    {
      field: "edit",
      headerName:"Edit",
      flex:1,
      renderCell: (params)=>{
        return (
          <Button
            onClick={(e) => onButtonEditClick(e, params.row)}
            variant="contained"
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName:"delete",
      flex:1,
      renderCell: (params)=>{
        return (
          <Button
            onClick={(e) => onButtonDeleteClick(e, params.row)}
            variant="contained"
          >
            Delete
          </Button>
        );
      },
    },
];

const onButtonDeleteClick = async (e, row) => {
  e.stopPropagation();
  let response = await Contact.delete(row.contact_id)
        console.log(response)
        response = await Contact.getByAcountId(row.contact_id)
}
const handleRowEditCommit = useCallback(
  (params) => {
      const id = params.id;
      const key = params.field;
      const value = params.value; },
  []
);

const onButtonEditClick = async (e, row) => {
  e.preventDefault();
  let response = await Contact.update(row.contact_id, row.email, row.phone, row.address)
        console.log(response)
        response = await Contact.getByAcountId(row.contact_id)
};



  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Button
            buttonStyle='btn--primary'
            buttonSize='btn--medium'
            link='/addcontact'
          >
              Add
          </Button>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
        getRowId={(row: any) => row.contact_id} 
        rows={data} 
        columns={columns} 
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditCommit={handleRowEditCommit}
        />          
      </Box>
    </Box>
  );
};

export default ContactList;