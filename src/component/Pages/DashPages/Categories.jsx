import React from 'react'
import "../../../styles/categories.scss";

export const Categories = () => {
  return (
    <div>
      <>
        <div className='cat-con'>
          <div className="cat-content">
            <h2>Categories</h2>
            <p>Select a category</p>
            <div className="cat-journalz">
              <select name="" id="">
                <option value="" disabled selected>Select Category</option>
                <option value="" >Personal</option>
                <option value="" >Family</option>
                <option value="" >Vacation</option>
              </select>
              <div className="cat-main">
                <div className="catj-con">
                  <p>You don't any Journals yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
