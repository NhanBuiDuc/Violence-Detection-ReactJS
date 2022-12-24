import { Link } from "react-router-dom";

export const cameraListRows = [
  {
      "working_camera_id": "822224633106104321",
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427056_sd.jpg;maxHeight=640;maxWidth=550",
      "membership": "basic",
      "end_date": "2023-02-13T21:50:44.757Z",
      "expired": false,
      "connection_string": "1",
      "model_number": "8SC1S9-WEN0",
      "subcription_id": "822224633067700225"
  },
]
export const cameraListComlumns = [
    {
        field: "image",
        headerName: "Image",
        width: 230,
        renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.image} alt="avatar" />
                {params.row.model_number}
              </div>
            );
        },
    },
    {
        field: "membership",
        headerName: "Type",
        width: 150
    },
    {
        field: "end_date",
        headerName: "Expiration",
        width: 300,
        renderCell: (params) => {
            // const [status, setStatus] = useState("Active");
            // const [styleStatus, setStyleStatus] = useState("active")
            var dt = new Date(params.row.end_date).toUTCString()
            let status = "Active"
            let styleStatus = "active"
            if(params.row.expipred){
                status = "Expired"
                styleStatus = "passive"
            }
            else{
                status = "Available"
            }
            return (
              <div className={`cellWithStatus ${styleStatus}`}>
                {
                  (dt)
                }
                {/* {status} */}
              </div>
            );
          },
    },
    {
        field: "connection_string",
        headerName: "Key",
        with: 250
    },
    {
        field: "working_camera_id",
        headerName: "ID",
        width: 200
    }
]

export const cameraListActionColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={
                {
                  pathname: "/manage/stream/"+ params.row.working_camera_id, 
                }
              } 
              style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];