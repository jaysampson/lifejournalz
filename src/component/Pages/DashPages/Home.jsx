import React from 'react'
import save from "../../../Images/save.png";
import add from "../../../Images/add.png";
import "../../../styles/dash.scss";


export const Home = () => {
    return (
        <div>
            <h1>Hey David - <span>Welcome to your dashboard</span></h1>
            <div className="contents">
                <div className="all">
                    <div className="all-title">
                        <h2>All Journals</h2>
                        <button><img src={save} alt="" /><span>save to files</span></button>
                    </div>
                    <div className="journalz-border-wrap">
                        <div className="journalz">
                            <div className="journalz-main">
                                <div className="sort">
                                    <select className='select'>
                                        <option value="" disabled selected hidden>Sort by</option>
                                        <option value="Alphabet">Alphabet</option>
                                        <option value="Recent">Recent</option>
                                    </select>
                                </div>
                                <div className="books">
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>New <img src={add} alt="" /></button>
                </div>
            </div>
        </div>
    )
}
