import React from 'react';
import Camera from '../model/Camera'
import { useEffect,useState } from 'react';
import CurrentUser from '../model/CurrentUser';
import './CameraCard.css'

async function fetchdata (account_id){
    let data = await Camera.getCameraByAcountId(account_id)
    return (
      data.body
    )
}
const Demo = () => {
    const currentuser = new CurrentUser()
    currentuser.parse()
    const [data, setdata] = useState("");
    useEffect( () => {
      fetchdata(currentuser.account_id).then(function(result){
        setdata(result)
        return result})
    
    }, [])
  return (
    <div className='card-container'>
      <article className="card">
        <div className="upper-container">
          <div className="img-container">
            <img src={data && data[0].image} alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3> Name: {data && data[0].name} </h3>
          <h3> Brand: {data && data[0].brand} </h3>
          <h3> Model: {data && data[0].model_number} </h3>
        </div>
      </article>
      <article className="card">
        <div className="upper-container">
          <div className="img-container">
            <img src={data && data[1].image} alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3> Name: {data && data[1].name} </h3>
          <h3> Brand: {data && data[1].brand} </h3>
          <h3> Model: {data && data[1].model_number} </h3>
        </div>
      </article>
      <article className="card">
        <div className="upper-container">
          <div className="img-container">
            <img src={data && data[2].image} alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3> Name: {data && data[2].name} </h3>
          <h3> Brand: {data && data[2].brand} </h3>
          <h3> Model: {data && data[2].model_number} </h3>
        </div>
      </article>
      <article className="card">
        <div className="upper-container">
          <div className="img-container">
            <img src={data && data[3].image} alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3> Name: {data && data[3].name} </h3>
          <h3> Brand: {data && data[3].brand} </h3>
          <h3> Model: {data && data[3].model_number} </h3>
        </div>
      </article>
    </div>
    )
}

export default Demo;