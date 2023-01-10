import React from 'react'
import moment from 'moment';
const Card = ({ data }) => {
  // console.log(data);
  // let time=new Date(data.start_time).toLocaleDateString();
  // console.log(time);
  // let currtime=new Date(time).toJSON().slice(1,14)
  // console.log(currtime);
  // let currenttime=new Date(data.start_time);
  // var hour = currenttime.getHours();
  // console.log(hour);
  // var seconds = currenttime.getSeconds();
  // console.log(seconds);
  // var minutes = currenttime.getMinutes();
  // console.log(minutes);
  // console.log(hour+":"+minutes+":"+seconds);

  let StartDate = moment(new Date(data.start_time)).format("YYYY-MM-DD hh:mm A"); // 12H clock (AM/PM)

  // console.log(StartDate);

  let EndDate = moment(new Date(data.end_time)).format("YYYY-MM-DD hh:mm A"); // 12H clock (AM/PM)

  // console.log(EndDate);

  return (
    <>
      <div className="main-Card">

        <div className="card">

          <p>{data.name}</p>
          <p>Start Date : {StartDate}</p>
          <p>End Date: {EndDate}</p>
          <hp>Duration: {data.duration}</hp>
          <div className="web">
            <div className="link1">
              <p>Website</p>
              <p>Status</p>

            </div>
            <div className="link2">
             <a href='img'><p>{data.site}</p></a> 
              <p>{data.status}</p>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card