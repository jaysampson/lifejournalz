import React from "react";
import "../../DashPages/SettingPages/Styles/Accountset.scss";

export const AccountSettings = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="account-main">
        <div className="account">
          <div className="profimg-con">
            <div className="prof-img">
              <p>user.img</p>
            </div>
          </div>
          <div className="account-con">
            <div className="user">
              <h3>Email</h3>
              <p>user.email</p>
            </div>

            <section>
              <h3>Username</h3>
              <input type="text" placeholder=" New Username" />
            </section>
            <section>
              <h3>Current Password</h3>
              <section>
                <h6>Password</h6>
                <input type="text" placeholder=" Old Password" />
              </section>
              <section>
                <h6>New Password</h6>
                <input type="text" placeholder=" New Password" />
              </section>
              <section>
                <h6>Confirm New Password</h6>
                <input type="text" placeholder=" New Password" />
              </section>
            </section>
          </div>
        </div>
        <button>Update Profile</button>
        <div className="delete-con">
          <h3>Delete Account</h3>
          <p>
            This will immediately delete all of your data including saved
            Journalz and more. This can’t be undone.
          </p>
          <button>Delete Account</button>
        </div>
      </div>
    </div>
  );
};
