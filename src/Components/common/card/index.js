import React from "react";
import "./index.scss";
import { Card } from "antd";
const ProfileCard = ({ item }) => {
  return (
    <>
      <Card id="profileCard">
        <div
          className="profilePic"
          style={{
            color: `rgb(${item.color})`,
            background: `rgba(${item.color}, 0.2)`,
          }}
        >
          {`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
        </div>
        <h3>{`${item.firstName} ${item.lastName}`}</h3>
        <p>{item.phoneNumber}</p>
        <p>{item.email}</p>
        <div className="appointment">APPOINTMENT 22 JULY 14:00</div>
        {item.bids.flag && (
          <div className="bidsFlag">{`${item.bids.cost} $`}</div>
        )}
      </Card>
    </>
  );
};

export default ProfileCard;
