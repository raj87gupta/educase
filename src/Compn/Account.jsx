import React from "react";
import "../Style/Account.css";
import img1 from "../Style/Ellipse 114@2x.png";
import img2 from "../Style/Group 1585.svg";
const Account = () => {
  return (
    <div className="container" id="account">
      <div className="heading1">Account Settings</div>
      <img className="img1" src={img1} alt="" />
      <img className="img2" src={img2} alt="" />
      <h3>Marry Doe</h3>
      <p>Marry@Gmail.com</p>
      <div className="lorem">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam
        dolores qui sit tempora perspiciatis, dolorum, non explicabo dolorem
        saepe necessitatibus eos accusamus ab, quidem pariatur dicta. Magni,
        reprehenderit voluptate. Atque autem earum illo assumenda modi sunt
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Account;
