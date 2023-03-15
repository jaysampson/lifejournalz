import React from 'react'
import "../../../styles/shared.scss";

export const Shared = () => {
  return (
    <div>
      <div className='shared'>
        <div className="shared-con">
          <h2>Shared Journals</h2>
          <p>Select a category</p>
          <div className="shared-main">
            <div className="shared-container">
              <div className="shared-journalz">
                <p>No shared Journals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
