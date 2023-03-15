import React from 'react'
import "../../../styles/recent.scss";

export const Recent = () => {
  return (
    <div>
      <div className='favourite'>
        <div className="fav-con">
          <h2>Recently Added</h2>
          <p>View recently read journals</p>
          <div className="fav-main">
            <div className="fav-container">
              <div className="fav-journalz">
                <p>No recently created Journals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
