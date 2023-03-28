import React from "react";
import "../../../styles/favourite.scss";
git;
import hat from "../../../Images/Hat.png";

export const Favourite = () => {
  return (
    <div>
      <div className="favourite">
        <div className="fav-con">
          <h2>Favourite</h2>
          <p>Choose Favourites</p>
          <div className="fav-main">
            <div className="fav-container">
              <div className="fav-journalz">
                <div className="one-by-one">
                  <div className="image-con">
                    <img src={hat} alt="" />
                  </div>
                  <div className="text-con">
                    <p>Graduation</p>
                  </div>
                </div>
                <div className="one-by-one">
                  <div className="image-con">
                    <img src={hat} alt="" />
                  </div>
                  <div className="text-con">
                    <p>Graduation</p>
                  </div>
                </div>
                <div className="one-by-one">
                  <div className="image-con">
                    <img src={hat} alt="" />
                  </div>
                  <div className="text-con">
                    <p>Graduation</p>
                  </div>
                </div>
                <div className="one-by-one">
                  <div className="image-con">
                    <img src={hat} alt="" />
                  </div>
                  <div className="text-con">
                    <p>Graduation</p>
                  </div>
                </div>
                <div className="one-by-one">
                  <div className="image-con">
                    <img src={hat} alt="" />
                  </div>
                  <div className="text-con">
                    <p>Graduation</p>
                  </div>
                </div>
                <div className="one-by-one">
                  <div className="image-con">
                    <img src={hat} alt="" />
                  </div>
                  <div className="text-con">
                    <p>Graduation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
