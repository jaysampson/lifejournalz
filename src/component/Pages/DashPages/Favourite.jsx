import React from 'react'
import "../../../styles/favourite.scss";

export const Favourite = () => {
  return (
    <div>
      <div className='favourite'>
        <div className="fav-con">
          <h2>Favourite</h2>
          <p>Choose Favourites</p>
          <div className="fav-main">
            <div className="fav-container">
              <div className="fav-journalz">
                <p>No Favourite Journals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
