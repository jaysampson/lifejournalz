import React from 'react'
import "../../../styles/Setting.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowRightFromBracket, faBell, faLock, faQuestionCircle, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

export const Setting = () => {
  return (
    <div>
      <div className="setting-con">
        <div className="setting-body">
          <h4>Settings</h4>
          <div className="setting-content">
            <main>
              <h5>Premium Membership</h5>
              <span>Upgrade for more features</span>
            </main>
          </div>
          <div className="setting-sub1">
            <div className="setting-subcon">
              <h5>
                Account
              </h5>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Profile</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faLock} />
                  <span>Password</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faBell} />
                  <span>Notifications</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            <div className="setting-sub2">
              <h5>
                More
              </h5>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faStar} />
                  <span>Rate & Review</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <span>Help</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            <div className='logout-btn'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
