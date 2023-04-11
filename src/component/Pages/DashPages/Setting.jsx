// import React, { useState } from "react";
// import "../../../styles/Setting.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleRight,
//   faArrowCircleLeft,
//   faArrowRightFromBracket,
//   faBell,
//   faLock,
//   faQuestionCircle,
//   faStar,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { AccountSettings } from "./SettingPages/AccountSettings";

// const Profile = () => {
//   return (
//     <div>
//       <div>profile</div>
//     </div>
//   );
// };

// const Notifications = () => {
//   return <div>Notifications Page</div>;
// };

// const RateAndReview = () => {
//   return <div>Rate & Review Page</div>;
// };

// const Help = () => {
//   return <div>Help Page</div>;
// };

// export const Setting = () => {
//   const [currentPage, setCurrentPage] = useState(null);

//   const handlePageClick = (pageName) => {
//     setCurrentPage(pageName);
//   };

//   const getContent = () => {
//     if (currentPage === "profile") {
//       return <Profile />;
//     } else if (currentPage === "accountSettings") {
//       return (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="accountset-con">
//             <FontAwesomeIcon
//               icon={faArrowCircleLeft}
//               onClick={() => setCurrentPage(null)}
//               size="2x"
//               style={{ cursor: "pointer" }}
//             >
//               Back
//             </FontAwesomeIcon>
//             <AccountSettings />
//           </div>
//         </div>
//       );
//     } else if (currentPage === "notifications") {
//       return <Notifications />;
//     } else if (currentPage === "rateAndReview") {
//       return <RateAndReview />;
//     } else if (currentPage === "help") {
//       return <Help />;
//     } else {
//       return (
//         <div>
//           <div className="setting-con">
//             <div className="setting-body">
//               <h4>Settings</h4>
//               <Link to="/price" style={{ textDecoration: "none" }}>
//                 <div className="setting-content">
//                   <main>
//                     <h5>Premium Membership</h5>
//                     <span>Upgrade for more features</span>
//                   </main>
//                 </div>
//               </Link>

//               <div className="setting-sub1">
//                 <div className="setting-subcon">
//                   <h5>Account</h5>
//                   <div className="con-main">
//                     <div
//                       className="con"
//                       onClick={() => handlePageClick("profile")}
//                     >
//                       <FontAwesomeIcon icon={faUser} />
//                       <span>Profile</span>
//                     </div>
//                     <FontAwesomeIcon icon={faAngleRight} />
//                   </div>
//                   <div
//                     className="con-main"
//                     onClick={() => handlePageClick("accountSettings")}
//                   >
//                     <div className="con">
//                       <FontAwesomeIcon icon={faLock} />
//                       <span>Account Settings</span>
//                     </div>
//                     <FontAwesomeIcon icon={faAngleRight} />
//                   </div>
//                   <div
//                     className="con-main"
//                     onClick={() => handlePageClick("notifications")}
//                   >
//                     <div className="con">
//                       <FontAwesomeIcon icon={faBell} />
//                       <span>Notifications</span>
//                     </div>
//                     <FontAwesomeIcon icon={faAngleRight} />
//                   </div>
//                 </div>
//                 <div className="setting-sub2">
//                   <h5>More</h5>
//                   <div
//                     className="con-main"
//                     onClick={() => handlePageClick("rateAndReview")}
//                   >
//                     <div className="con">
//                       <FontAwesomeIcon icon={faStar} />
//                       <span>Rate & Review</span>
//                     </div>
//                     <FontAwesomeIcon icon={faAngleRight} />
//                   </div>
//                   <div
//                     className="con-main"
//                     onClick={() => handlePageClick("help")}
//                   >
//                     <div className="con">
//                       <FontAwesomeIcon icon={faQuestionCircle} />
//                       <span>Help</span>
//                     </div>
//                     <FontAwesomeIcon icon={faAngleRight} />
//                   </div>
//                 </div>
//                 <div className="logout-btn">
//                   <FontAwesomeIcon icon={faArrowRightFromBracket} />
//                   <div>Logout</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   };
//   return <div>{getContent()}</div>;
// };

import React, { useEffect, useState } from "react";
import "./SettingPages/Styles/Accountset.scss";
import { useDispatch, useSelector } from "react-redux";
import { auth, storage } from "../../../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateUserDoc } from "../../../redux/authUserSlice/authUserFirebaseApi";

export const Setting = () => {
  const dispatch = useDispatch();
  const authUser = auth.currentUser;

  //useState
  const [file, setFile] = useState(null);
  const [uploaded, setuploaded] = useState("");
  const [percentage, setPercentage] = useState("");
  const [form, setForm] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    address: "",
    // file:"",
  });

  const {
    getUsersInfo: { getUsersInfoData },
  } = useSelector((state) => state.authUser);

  const findUser = getUsersInfoData?.find((user) => user?.id === authUser?.uid);

  console.log(findUser, "findUser");

  useEffect(() => {
    if (findUser) {
      setForm((prev) => {
        return {
          ...prev,
          email: findUser.email || authUser.email,
          name: findUser.displayName || authUser.displayName,
          phoneNumber: findUser?.phoneNumber || null,
          address: findUser?.address || null,
          file: findUser?.file || null,
          // file: form.file || uploaded,
        };
      });
    }
  }, []);

  //   console.log(form.email, "email");
  const onSubmitUpdateUser = (e) => {
    e.preventDefault();

    //  console.log(form.email, form.name, form.phoneNumber, form.address,form.file || uploaded, authUser.uid, "44444")

    updateUserDoc(
      {
        email: form.email,
        name: form.name,
        phoneNumber: form.phoneNumber,
        address: form.address,
        file: form.file || uploaded,
      },
      authUser.uid,
      dispatch
    );
  };
  useEffect(() => {
    const uploadImage = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // setFile(downloadURL);
            setuploaded(downloadURL);
          });
        }
      );
    };
    file && uploadImage();
  }, [file]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="account-main" onSubmit={onSubmitUpdateUser}>
        <div className="account">
          <div className="profimg-con">
            <div className="prof-img">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : form.file ||
                      "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
                style={{ width: "50%" }}
              />
            </div>

            <input
              // className="modal-input"
              style={{ width: "110px" }}
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="account-con">
            <div className="user">
              <h3>Personal Details</h3>
            </div>
            <div className="details">
              <div className="dets">
                <h5>Email</h5>
                <input
                  type="text"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="dets">
                <h5>Name</h5>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="dets">
                <h5>Phone Number</h5>
                <input
                  type="number"
                  value={form.phoneNumber}
                  onChange={(e) =>
                    setForm({ ...form, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="dets">
                <h5>Address</h5>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button>Update Profile</button>
        {/* <div className="delete-con">
            <h3>Delete Account</h3>
            <p>
              This will immediately delete all of your data including saved
              Journalz and more. This can’t be undone.
            </p>
            <button>Delete Account</button>
          </div> */}
      </form>
    </div>
  );
};
