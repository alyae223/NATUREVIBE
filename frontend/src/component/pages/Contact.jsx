import React, { useState } from 'react';
import ph1 from "./logo/map2.png";
import ph2 from "./logo/appel2.png";
import ph3 from "./logo/email 2.png";
import './Contact.css'
 
function Contact() {
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("");
  const [mail, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    console.log(nom, email, message);
    alert('Message envoyé ! Nous vous contacterons bientôt.');
  }

  return (
  <div className="contact"> 
    <div className="content">
      <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="info">
          <div className="p1">
            <img src={ph1} width={30} alt="map" />
            <h3>ADDRESS</h3>
            <p>BV MOUNEM RUE 18 N20</p>
          </div>
          <div className="p2">
            <img src={ph2} width={30} alt="" />
            <h3>PHONE</h3>
            <p>+212 456 78905080</p>
          </div>
          <div className="p3">
            <img src={ph3} width={30} alt="" />
            <h3>EMAIL</h3>
            <p>NATUREVIBE@GMAIL.COM</p>
          </div>
        </div>
        
      </div>
      <div className="contactForm">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <h2>Send Message</h2> */}
         
          <div className="inputbox">
            
          <div>{first}<input type="text" id='inp' name="Name" placeholder='FIRST NAME' onChange={(e) => {setNom(e.target.value) ;setFirst('First Name');if (e.target.value=="") {
            setFirst("")
          }}} /></div>
          <div>{last}<input type="text" name="Name" placeholder='LAST NAME' onChange={(e) => {setNom(e.target.value) ;setlast('Last Name');if (e.target.value==""){
            setlast("")
          }}} /> <br /></div>
           </div>
          
          <div className="inputbox">
         <div>{mail}<input type="Email" name='email' placeholder='EMAIL' onChange={(e) => {setEmail(e.target.value) ;setemail('Email');if (e.target.value==""){
            setemail("")
          }}} /> <br /></div>
            
          <div>{phone}<input type="tel" name="Phone" placeholder='PHONE' onChange={(e) => {setphone(e.target.value) ;setphone('phone');if (e.target.value==""){
            setphone("")
          }}} /> <br /></div></div> 
        <div className="inputbox">
          <textarea name="message" id="" placeholder='MESSAGE' onChange={(e) => setMessage(e.target.value)}></textarea> <br />
          </div><br />

          <button type='submit'  >Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
