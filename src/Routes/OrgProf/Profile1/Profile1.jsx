import React from "react";
import "./Profile1.css";
import { photo } from "../../../assets";
import { account } from "../../../config/appwrite";
import { useEffect, useState } from "react";

const Profile1 = () => {
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
    <div class="profile1">
      <button class="delete">Delete</button>
      <button class="upload-photo">Upload</button>
      <b class="text">ORGANIZATION </b>
      <img class="photo-icon" alt="" src={photo} />
      <b class="o-name">
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
      <div class="phone">
        {userinfo ? (
          <>
            <i>{userinfo.phone}</i>
          </>
        ) : (
          <i>user info loading...</i>
        )}
      </div>
      <div class="time">Eastern European Time (EET), Cairo UTC +3</div>
    </div>
  );
};

export default Profile1;
