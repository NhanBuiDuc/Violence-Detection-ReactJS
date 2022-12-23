import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const CameraListDataTable = (props) => {
  const [data, setData] = useState(props.data);
  const [columns, setColumns] = useState(props.columns)
  const [id, setId] = useState(props.id)
  // const [data, setData] = useState(props.data);
  const [isAddNew, setIsAddNew] = useState(props.isAddNew)
  const [title, setTitle] = useState(props.title)

  return (
    <div className="datatable">
      <div className="datatableTitle">
      <p>{title}</p>
        {
          isAddNew?
          <>

            <Link to="/users/new" className="link">
              Add New
            </Link>
          </>
          :
          null
        }
      </div>
      <DataGrid
        className="datagrid"
        getRowId={
          (row: any) =>  
          row.working_camera_id
        }
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default CameraListDataTable;
