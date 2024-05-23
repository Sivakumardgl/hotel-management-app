import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1 id="h1">Welcome To My Hotel</h1>

      <div className="parent">
        <div>
          <img
            id="img1"
            src="https://content3.jdmagicbox.com/comp/sivaganga/i7/9999p4575.4575.181112121214.v2i7/catalogue/hotel-sri-annapoorani-sivaganga-restaurants-650helgcsn.jpg"
            style={{ height: "250px" }}

          />
        </div>
        <div>
          <h2 id="h2">About Us</h2>
          <p id="p">
            Over the years, Annapoorna Catering Services <br></br>has created
            healthful, customized experiences<br></br> that honor fresh and
            flavorful cuisine. With Mr.<br></br> Hemant Shetty at the helm, the
            company has <br></br>evolved to become a award-winning Catering
            <br></br> Service. Contact us to find out how we can
            <br></br> cater your next event.
          </p>
        </div>
      </div>
      <div className="about">
        <h1> WHAT A PEOPLES SAY ABOUT US</h1>
        <hr></hr>
        <div className="anna">
        <p>We recently had Annapoorna as the catering service provider for<br></br> a family event.  To say that the 
        food was excellent would be an<br></br> understatement.  The starters, the momos, and the main course <br></br>were all fantastic.  Everyone of us enjoyed the food and the<br></br> service provided.  There was always someone available to attend<br></br> to us.<br></br>
         I would recommend Annapoorna Catering services to anyone<br></br> who’s looking to have great food.<br></br><br></br>
         MR SIVA KUMAR<br></br><br></br>
         <hr></hr><br></br><br></br>
         <h4 id="drop">DROP AS A LINE</h4><br></br><br></br><br></br>
         <hr></hr><br/>

         </p>
         </div>
         <div>
          <center>
  <form className='form'>
  <input type='text' placeholder='NAME'></input><br></br><br></br>
  <input type='text' placeholder='PHONE'></input><br></br><br></br>
  <input type='text' placeholder='Email'></input><br></br><br></br>
  <h2>What are you celebrating?</h2><br></br>
  <input type='radio'></input>  Birthday<br></br>
  <input type='radio'></input>  Wedding<br></br>
  <input type='radio'></input>  Corparate Event<br></br>
  <input type='radio'></input>  Other<br></br>
  <button>Submit Now</button>
  
  </form></center><br></br><br></br>
  <hr></hr>

         </div>
         
      </div>
    </div>
  );
}
