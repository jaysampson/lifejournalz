import React from 'react'
import "../../styles/dash.scss";
import bell from "../../Images/bell.png";
import save from "../../Images/save.png";
import add from "../../Images/add.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faBriefcase, faClock, faFolderMinus, faHouse, faStar, faTag, faList, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import plus from "../../Images/plus.png";


const Dashboard = () => {
    return (
        <div>
            <>
                <div className="dash-nav">
                    <div className="search">
                        <input type="text" placeholder='Search in Categories' className='nav-search' />
                        <select className='cat' placeholder='All categories'>
                            <option value="" disabled selected hidden>All Categories</option>
                        </select>
                        <button>Search</button>
                    </div>

                    <div className="nav-images">
                        <div className="notify">
                            <img src={bell} alt="" />
                            <div className="count">7</div>
                        </div>
                        <div className='prof-pic'></div>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="side-bar">
                        <div className="sidebar-contents">
                            <div className="content">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <span>Dashboard</span>
                                </div>


                                <div className="icon">
                                    <FontAwesomeIcon icon={faList} />
                                    <span>Categories</span>
                                </div>

                                <div className="icon">
                                    <FontAwesomeIcon icon={faStar} />
                                    <span>Favourites</span>
                                </div>

                                <div className="icon">
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                    <span>Shared</span>
                                    <div className="num">24</div>
                                </div>

                                <div className="icon">
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>Recently added</span>
                                    <div className="num-2">59</div>
                                </div>

                                <div className="icon">
                                    <FontAwesomeIcon icon={faFolderMinus} />
                                    <span>Storage</span>
                                </div>

                                <div className="icon">
                                    <FontAwesomeIcon icon={faTag} />
                                    <span>Pricing</span>
                                    <div className="new">
                                        new
                                    </div>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <span>Terms of Service</span>
                                </div>
                                <button> <img src={plus} alt="" /> <span>Create New Journal</span></button>
                            </div>
                            <div className="premium">
                                <div className="premium-content">
                                    <p className='icon-p'>
                                        GO PREMUIM
                                    </p>
                                    <span>
                                        Explore unlimited usage of the journalz with membership
                                    </span>
                                </div>
                            </div>
                            <div className="log-set">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faGear} />
                                    <span>Settings</span>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    <span>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-contents">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button>New <img src={add} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div >
    )
}

export default Dashboard