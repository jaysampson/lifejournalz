import React from 'react'
import "../../styles/dash.scss";
import bell from "../../Images/bell.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faBriefcase, faClock, faFolderMinus, faHouse, faStar, faTag, faList, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import plus from "../../Images/plus.png";
import { useState } from 'react';
import { Home } from './DashPages/Home';
import { Categories } from './DashPages/Categories';
import {Pricing} from './DashPages/Pricing';
import { Favourite } from './DashPages/Favourite';
import { Shared } from './DashPages/Shared';
import { Recent } from './DashPages/Recent';
import { Storage } from './DashPages/Storage';
import { Terms } from './DashPages/Terms';


const Dashboard = () => {
    const [selected, setSelected] = useState(0)
    const toggleMenu = (index) => {
        setSelected(index)
    }
    const [activeComponent, setActiveComponent] = useState('Component1');
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
                                <div className={selected === 0 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(0); setActiveComponent('Component1') }}>
                                    <FontAwesomeIcon icon={faHouse} />
                                    <span>Dashboard</span>
                                </div>


                                <div className={selected === 1 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(1); setActiveComponent('Component2') }}>
                                    <FontAwesomeIcon icon={faList} />
                                    <span>Categories</span>
                                </div>

                                <div className={selected === 2 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(2); setActiveComponent('Component3') }}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <span>Favourites</span>
                                </div>

                                <div className={selected === 3 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(3); setActiveComponent('Component4') }}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                    <span>Shared</span>
                                    <div className="num">24</div>
                                </div>


                                <div className={selected === 4 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(4); setActiveComponent('Component5') }}>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>Recently added</span>
                                    <div className="num-2">59</div>
                                </div>

                                <div className={selected === 5 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(5); setActiveComponent('Component6') }}>
                                    <FontAwesomeIcon icon={faFolderMinus} />
                                    <span>Storage</span>
                                </div>

                                <div className={selected === 6 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(6); setActiveComponent('Component7') }}>
                                    <FontAwesomeIcon icon={faTag} />
                                    <span>Pricing</span>
                                    <div className="new">
                                        new
                                    </div>
                                </div>
                                <div className={selected === 7 ? 'icon2' : 'icon'} onClick={() => { toggleMenu(7); setActiveComponent('Component8') }}>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <span>Terms of Service</span>
                                </div>
                                <button> <img src={plus} alt="" /> <span>Create New Journal</span></button>
                            </div>
                            <div className="premium">
                                <div className="premium-content">
                                    <p>
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
                        {/* <h1>Hey David - <span>Welcome to your dashboard</span></h1>
                        <div className="contents">
                            <div className="all">
                                <div className="all-title">
                                    <h2>All Journals</h2>
                                    <button><img src={save} alt="" /><p>save to files</p></button>
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
                        </div> */}
                        {activeComponent === 'Component1' ? <Home /> : null}
                        {activeComponent === 'Component2' ? <Categories /> : null}
                        {activeComponent === 'Component3' ? <Favourite /> : null}
                        {activeComponent === 'Component4' ? <Shared /> : null}
                        {activeComponent === 'Component5' ? < Recent/> : null}
                        {activeComponent === 'Component6' ? < Storage/> : null}
                        {activeComponent === 'Component7' ? < Pricing/> : null}
                        {activeComponent === 'Component8' ? < Terms/> : null}
                    </div>
                </div>
            </>
        </div >
    )
}

export default Dashboard