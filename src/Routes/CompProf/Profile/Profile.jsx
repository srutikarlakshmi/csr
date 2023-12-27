import React from "react";
import "./Profile.css";
import { photo } from "../../../assets";
import { account } from "../../../config/appwrite";
import { useEffect, useState } from "react";

const Profile = () => {

  const [userinfo, setUserinfo] = useState();

  useEffect(() => {
    const userData = account.get();
    userData.then(
      function (response) {
        setUserinfo(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  
  return (
    <div className="profile">
      <button className="upload-photo">Upload Photo</button>
      <button className="delete">Delete</button>
      <b className="text">User Profile</b>
      <img className="line-icon" alt="" src="line.png" />
      <div className="wrapper-photo">
        <img className="photo-icon" alt="" src={photo} />
      </div>
      <b className="c-name">
        {userinfo ? (
          <>
            <i>
              <b>{userinfo.name}</b>
            </i>
            <br />
            {userinfo.email}
          </>
        ) : (
          <i>user info loading...</i>
        )}
      </b>
      <div className="phone">
        {userinfo ? (
          <>
            <i>{userinfo.phone}</i>
          </>
        ) : (
          <i>user info loading...</i>
        )}
      </div>
      <div className="time">Eastern European Time (EET), Cairo UTC +3</div>
    </div>
  );
};

export default Profile;
