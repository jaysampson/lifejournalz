import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../../../styles/SingleJournal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';


const SingleJournal = () => {
    const { id } = useParams();

    return (
        <div>
            <div className="singleJournal">
                <div className="singlejournal-con">
                    <div className="header">
                        <h2>posts.title</h2>
                        <span>item.text.replace/^+/g, "".slice(0, 30) + "...</span>
                    </div>
                    <div className="journal-con">
                        <button>
                            <FontAwesomeIcon icon={faPencil} />
                            <span>Edit Journal</span>
                        </button>
                        <img src="" alt="post.img" />
                        <div className='journal-content' contenteditable="false">
                            <h2>post.title</h2>
                            <span>post.text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleJournal