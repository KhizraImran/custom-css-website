import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer'>    
            <h2 className='info'>Information</h2>   
      <div className='address'>Address: Near Bushra Parlour, Taha & <br /> Humayun, First Floor
          Shahrah-e-Quaideen, <br /> P.E.C.H.S Block 2,
          Karachi, Karachi City, Sindh
     <br />
     <br />
      Phone: +92 1234566
     <br />
      Email: info@xxxyyzz.com
      <br />
      <ul className='icons'>
  <li>
    <FaFacebook style={{ color: 'black', fontSize: '25px' }} />
  </li>
  <li>
    <AiFillTwitterCircle style={{ color: 'black', fontSize: '28px' }} />
  </li>
</ul>
      </div>
        <ul className='bottom'>
            <li>Home</li>
            <li>Online Store</li>
            <li>Promotion</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li> Sitemap</li>
            <li>Support</li>
        </ul>
      </div>
  );
}

export default Footer;
