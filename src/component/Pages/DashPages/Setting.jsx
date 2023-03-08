import React from 'react'
import "../../../styles/Setting.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowRight, faArrowRightFromBracket, faBell, faLock, faPerson, faQuestionCircle, faStar } from '@fortawesome/free-solid-svg-icons';

export const Setting = () => {
  return (
    <div>
      <div className="setting-con">
        <div className="setting-body">
          <h3>Settings</h3>
          <div className="setting-content">
            <main>
              <h4>Premium Membership</h4>
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
                  <FontAwesomeIcon icon={faPerson}  />
                  <span>Profile</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faLock} />
                  <span>Profile</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faBell}  />
                  <span>Profile</span>
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
                  <span>Profile</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div className="con-main">
                <div className="con">
                  <FontAwesomeIcon icon={faQuestionCircle}/>
                  <span>Profile</span>
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
