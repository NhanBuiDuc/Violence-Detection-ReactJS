// import React from 'react'
// import CurrentUser from '../model/CurrentUser'
// import './UserProfile.css'
// // import avatar from '../images/blank-profile-picture-gd7806bc02_1280.png'
// import { Button } from './Button'

// class UserProfile extends React.Component {
//     currentuser = new CurrentUser()
//   protect_email = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted =user_email.split("@")
//     part1 = splitted[0];
//     avg = part1.length /2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 =  splitted[1];
//     return part1 + "***@" + part2;
//   }
//   render () {
//     if(this.currentuser.loggedIn == true ) {
//       return (
//         <div className='profile-page'>
//           <h1> USER INFORMATION </h1>
//           <div className='profile-container' >
//             <div className='profile-card'>
//               <div className='upper-container'>
//                 <div className='profile-img'>
//                   {/* <img src={avatar} alt="" height="100px" width="100px" /> */}
//                 </div>
//               </div>
//               <div className='lower-container'>
//                 <h3> {this.currentuser.name} </h3>
//                 <h3> {this.protect_email(this.currentuser.email)} </h3>
//                 <h3> {this.currentuser.phone} </h3>
//                 <h3> {this.currentuser.address} </h3>
//                 <h3> {this.currentuser.role} </h3>
//                 <Button
//           className='btns'
//           buttonStyle='btn--purchase'
//           buttonSize='btn--medium'
//         >
//         Edit
//         </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }
// }

// export default UserProfile

// // // import { Box, Typography, useTheme } from "@mui/material";
// // // import { DataGrid } from "@mui/x-data-grid";
// // // import { tokens } from "../components/theme";

// // // import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// // // import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// // // import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// // // import Header from "../components/Header.jsx";
// // // import CurrentUser from '../model/CurrentUser'



// // // const Team = () => {
// // //   const currentuser = new CurrentUser()
// // //   const userdata = [currentuser]
// // //   console.log(userdata)
// // //   const theme = useTheme();
// // //   const colors = tokens(theme.palette.mode);
// // //   const columns = [
// // //     { field: "account_id", headerName: "ID" },
// // //     {
// // //       field: "name",
// // //       headerName: "Name",
// // //       flex: 1,
// // //       cellClassName: "name-column--cell",
// // //     },
// // //     {
// // //       field: "age",
// // //       headerName: "Age",
// // //       type: "number",
// // //       headerAlign: "left",
// // //       align: "left",
// // //     },
// // //     {
// // //       field: "phone",
// // //       headerName: "Phone Number",
// // //       flex: 1,
// // //     },
// // //     {
// // //       field: "email",
// // //       headerName: "Email",
// // //       flex: 1,
// // //     },
// // //   ];
// // //   return (
// // //     <Box m="20px">
// // //       <Header title="TEAM" subtitle="Managing the Team Members" />
// // //       <Box
// // //         m="40px 0 0 0"
// // //         height="75vh"
// // //         sx={{
// // //           "& .MuiDataGrid-root": {
// // //             border: "none",
// // //           },
// // //           "& .MuiDataGrid-cell": {
// // //             borderBottom: "none",
// // //           },
// // //           "& .name-column--cell": {
// // //             color: colors.greenAccent[300],
// // //           },
// // //           "& .MuiDataGrid-columnHeaders": {
// // //             backgroundColor: colors.blueAccent[700],
// // //             borderBottom: "none",
// // //           },
// // //           "& .MuiDataGrid-virtualScroller": {
// // //             backgroundColor: colors.primary[400],
// // //           },
// // //           "& .MuiDataGrid-footerContainer": {
// // //             borderTop: "none",
// // //             backgroundColor: colors.blueAccent[700],
// // //           },
// // //           "& .MuiCheckbox-root": {
// // //             color: `${colors.greenAccent[200]} !important`,
// // //           },
// // //         }}
// // //       >
// // //         <DataGrid getRowId={(row: any) => row.account_id} checkboxSelection rows={userdata} columns={columns} />
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Team;


// // import { Box, Button, TextField } from "@mui/material";
// // import { Formik } from "formik";
// // import useMediaQuery from "@mui/material/useMediaQuery";
// // import Header from "../components/Header"
// // const Form = () => {
// //   const isNonMobile = useMediaQuery("(min-width:600px)");

// //   const handleFormSubmit = (values) => {
// //     console.log(values);
// //   };

// //   return (
// //             <Box
// //               display="grid"
// //               gap="30px"
// //               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
// //               sx={{
// //                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
// //               }}
// //             >
// //               <TextField
// //                 fullWidth
// //                 variant="filled"
// //                 type="text"
// //                 label="First Name"
// //                 // onBlur={handleBlur}
// //                 // onChange={handleChange}
// //                 // value={values.firstName}
// //                 // name="firstName"
// //                 // error={!!touched.firstName && !!errors.firstName}
// //                 // helperText={touched.firstName && errors.firstName}
// //                 sx={{ gridColumn: "span 2" }}
// //               />
// //               <TextField
// //                 fullWidth
// //                 variant="filled"
// //                 type="text"
// //                 label="Last Name"
// //                 // onBlur={handleBlur}
// //                 // onChange={handleChange}
// //                 // value={values.lastName}
// //                 // name="lastName"
// //                 // error={!!touched.lastName && !!errors.lastName}
// //                 // helperText={touched.lastName && errors.lastName}
// //                 sx={{ gridColumn: "span 2" }}
// //               />
// //               <TextField
// //                 fullWidth
// //                 variant="filled"
// //                 type="text"
// //                 label="Email"
// //                 // onBlur={handleBlur}
// //                 // onChange={handleChange}
// //                 // value={values.email}
// //                 // name="email"
// //                 // error={!!touched.email && !!errors.email}
// //                 // helperText={touched.email && errors.email}
// //                 sx={{ gridColumn: "span 4" }}
// //               />
// //               <TextField
// //                 fullWidth
// //                 variant="filled"
// //                 type="text"
// //                 label="Contact Number"
// //                 // onBlur={handleBlur}
// //                 // onChange={handleChange}
// //                 // value={values.contact}
// //                 // name="contact"
// //                 // error={!!touched.contact && !!errors.contact}
// //                 // helperText={touched.contact && errors.contact}
// //                 sx={{ gridColumn: "span 4" }}
// //               />
// //               <TextField
// //                 fullWidth
// //                 variant="filled"
// //                 type="text"
// //                 label="Address 1"
// //                 onBlur={handleBlur}
// //                 onChange={handleChange}
// //                 value={values.address1}
// //                 name="address1"
// //                 error={!!touched.address1 && !!errors.address1}
// //                 helperText={touched.address1 && errors.address1}
// //                 sx={{ gridColumn: "span 4" }}
// //               />
// //               <TextField
// //                 fullWidth
// //                 variant="filled"
// //                 type="text"
// //                 label="Address 2"
// //                 onBlur={handleBlur}
// //                 onChange={handleChange}
// //                 value={values.address2}
// //                 name="address2"
// //                 error={!!touched.address2 && !!errors.address2}
// //                 helperText={touched.address2 && errors.address2}
// //                 sx={{ gridColumn: "span 4" }}
// //               />
// //             </Box>
// //             <Box display="flex" justifyContent="end" mt="20px">
// //               <Button type="submit" color="secondary" variant="contained">
// //                 Create New User
// //               </Button>
// //             </Box>
// //           </form>
// //         )}
// //       </Formik>
// //   );
// // };

// // const phoneRegExp =
// //   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// // const initialValues = {
// //   firstName: "",
// //   lastName: "",
// //   email: "",
// //   contact: "",
// //   address1: "",
// //   address2: "",
// // };

// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../components/Header"
// const Form = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Formik>
//       {(
//           <form>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="First Name"
//                 // onBlur={handleBlur}
//                 // onChange={handleChange}
//                 // value={values.firstName}
//                 // name="firstName"
//                 // error={!!touched.firstName && !!errors.firstName}
//                 // helperText={touched.firstName && errors.firstName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Last Name"
//                 // onBlur={handleBlur}
//                 // onChange={handleChange}
//                 // value={values.lastName}
//                 // name="lastName"
//                 // error={!!touched.lastName && !!errors.lastName}
//                 // helperText={touched.lastName && errors.lastName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 // onBlur={handleBlur}
//                 // onChange={handleChange}
//                 // value={values.email}
//                 // name="email"
//                 // error={!!touched.email && !!errors.email}
//                 // helperText={touched.email && errors.email}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Contact Number"
//                 // onBlur={handleBlur}
//                 // onChange={handleChange}
//                 // value={values.contact}
//                 // name="contact"
//                 // error={!!touched.contact && !!errors.contact}
//                 // helperText={touched.contact && errors.contact}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               {/* <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 1"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address1}
//                 name="address1"
//                 error={!!touched.address1 && !!errors.address1}
//                 helperText={touched.address1 && errors.address1}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 2"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address2}
//                 name="address2"
//                 error={!!touched.address2 && !!errors.address2}
//                 helperText={touched.address2 && errors.address2}
//                 sx={{ gridColumn: "span 4" }}
//               /> */}
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create New User
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//   );
// };

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: "",
//   address1: "",
//   address2: "",
// };

// export default Form;
