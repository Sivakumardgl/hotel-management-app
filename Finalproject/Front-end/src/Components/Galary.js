import React from 'react'
import "./Galary.css";
export default function Galary() {
  return (
    
    <div className='picture'>
      
      <div>
      <img src='https://www.seymourhotels.com/media/6014/buffet-mains-08.jpg?width=530&height=382&mode=crop' style={{ height: "250px" }}/>

      </div>
      <div>
        <img src='https://www.gayacentre.com/wp-content/uploads/2017/09/gayacentre-hotel-food-40.jpg' style={{ height: "250px" }}/>
      </div>
      <div>
        <img src='https://expressinnindia.com/wp-content/uploads/2023/03/PY001589-scaled.jpg'style={{ height: "250px" }}/>
      </div><br/>
      <div className='picture1'>
      <div>
        <img src='https://thumbs.dreamstime.com/b/all-you-need-waitress-uniform-delivering-tray-food-room-hotel-room-service-focus-tableware-waitress-174457737.jpg'style={{ height: "250px" }}/>
      </div>
      </div>
    </div>
  )
}
