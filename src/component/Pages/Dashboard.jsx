import React from 'react'
import "../../styles/dash.scss";
import bell from "../../Images/bell.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faBriefcase, faClock, faFolderMinus, faHouse, faStar, faTag, faList, faGear, faArrowRightFromBracket, faHeart, faCalendar, faXmark } from '@fortawesome/free-solid-svg-icons';
import plus from "../../Images/plus.png";
import { useState } from 'react';
import { Home } from './DashPages/Home';
import { Categories } from './DashPages/Categories';
import { Pricing } from './DashPages/Pricing';
import { Favourite } from './DashPages/Favourite';
import { Shared } from './DashPages/Shared';
import { Recent } from './DashPages/Recent';
import { Storage } from './DashPages/Storage';
import { Terms } from './DashPages/Terms';
import { Calender } from './DashPages/Calender';
import { Setting } from './DashPages/Setting';

const MenuItem = ({ icon, label, isSelected, onClick, num, update }) => {
    return (
        <div className={isSelected ? 'icon2' : 'icon'} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
            {num && (
                <span style={{
                    height: "20px",
                    width: "30px",
                    borderRadius: "10px",
                    backgroundColor: "gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    marginLeft: "79px",
                }}>{num}</span>
            )}
            {update && (
                <span style={{
                    height: "20px",
                    width: "40px",
                    borderRadius: "10px",
                    backgroundColor: "#c3e4d9",
                    display: "flex",
                    color: "#10B982",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "73px"
                }}>{update}</span>
            )}
        </div>
    );
};

const Menu = ({ activeComponent, setActiveComponent, selected, setSelected }) => {
    const toggleMenu = (index) => {
        setSelected(index);
    };

    return (
        <div className="menu">

            <MenuItem
                icon={faHouse}
                label="Dashboard"
                isSelected={selected === 0}
                onClick={() => {
                    toggleMenu(0);
                    setActiveComponent('Component1');
                }}
            />
            <MenuItem
                icon={faList}
                label="Categories"
                isSelected={selected === 1}
                onClick={() => {
                    toggleMenu(1);
                    setActiveComponent('Component2');
                }}
            />
            <MenuItem
                icon={faStar}
                label="Favourites"
                isSelected={selected === 2}
                onClick={() => {
                    toggleMenu(2);
                    setActiveComponent('Component3');
                }}
            />
            <MenuItem
                icon={faArrowUpFromBracket}
                label="Shared"
                num="24"
                isSelected={selected === 3}
                onClick={() => {
                    toggleMenu(3);
                    setActiveComponent('Component4');
                }}
            />
            <MenuItem
                icon={faClock}
                label="Recently added"
                isSelected={selected === 4}
                num="59"
                onClick={() => {
                    toggleMenu(4);
                    setActiveComponent('Component5');
                }}
            />
            <MenuItem
                icon={faFolderMinus}
                label=" Storage"
                isSelected={selected === 5}
                onClick={() => {
                    toggleMenu(5);
                    setActiveComponent('Component6');
                }}
            />
            <MenuItem
                icon={faTag}
                label="Pricing"
                update="new"
                isSelected={selected === 6}
                onClick={() => {
                    toggleMenu(6);
                    setActiveComponent('Component7');
                }}
            />
            <MenuItem
                icon={faBriefcase}
                label="Terms Service"
                isSelected={selected === 7}
                onClick={() => {
                    toggleMenu(7);
                    setActiveComponent('Component8');
                }}
            />
        </div>
    );
};

const Dashboard = () => {
    const [selected, setSelected] = useState(0)
    const toggleMenu = (index) => {
        setSelected(index)
        if (index === 0) {
            setActiveComponent('Component1');
        } else if (index === 1) {
            setActiveComponent('Component2');
        } else if (index === 2) {
            setActiveComponent('Component3');
        } else if (index === 3) {
            setActiveComponent('Component4');
        } else if (index === 4) {
            setActiveComponent('Component5');
        } else if (index === 5) {
            setActiveComponent('Component6');
        } else if (index === 6) {
            setActiveComponent('Component7');
        } else if (index === 7) {
            setActiveComponent('Component8');
        }
    };


    const [selectedItem, setSelectedItem] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [activeComponent, setActiveComponent] = useState('Component1');
    return (
        <div>
            <>
                <div className="nav-images-M">
                    <div className='prof-pic'>
                        {/* <img src={user.picture}></img> */}
                    </div>
                    <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg viewBox="0 0 70 27" width="40">
                            <rect width="40" height="6"></rect>
                            <rect y="10" width="40" height="6"></rect>
                            <rect y="20" width="40" height="6"></rect>
                        </svg>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="burg-con">
                        <FontAwesomeIcon icon={faXmark} size={'2x'} style={{ marginLeft: "90%", marginBottom: "40px" }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="canc" />
                        <div className="profile">
                            <p>Profile</p>
                            <div className="profile-con" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <div className="prof-pic">
                                    {/* <img src={} alt="" /> */}
                                </div>
                                <div className="prof-det">
                                    <span style={{ color: "black" }}>user.name</span>
                                    <span style={{ color: "GrayText" }}>user.email</span>
                                </div>
                            </div>
                        </div>
                        <button><img src={plus} alt="" /> <span>Create New Journal</span></button>
                        <p>Menu</p>
                        <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} activeComponent={activeComponent} setActiveComponent={setActiveComponent} selected={selected} setSelected={setSelected} />
                        <p style={{ display: "flex", alignItems: "center", justifyContent: 'center', textAlign: "center", color: "black", gap: "4px", marginBottom: "30px", marginTop: "30px" }}><FontAwesomeIcon icon={faArrowRightFromBracket} /> <span>Logout</span></p>
                    </div>
                )}
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
                        <div className='prof-pic'>
                            {/* <img src={user.picture}></img> */}
                        </div>
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
                                    <span className='go'>
                                        GO PREMUIM
                                    </span> <br />
                                    <span>
                                        Explore unlimited usage of the journalz with membership
                                    </span>
                                </div>
                            </div>
                            <div className="log-set">
                                <div className='icon' onClick={() => { setActiveComponent('Component10'); toggleMenu(10) }}>
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
                        {activeComponent === 'Component1' ? <Home /> : null}
                        {activeComponent === 'Component2' ? <Categories /> : null}
                        {activeComponent === 'Component3' ? <Favourite /> : null}
                        {activeComponent === 'Component4' ? <Shared /> : null}
                        {activeComponent === 'Component5' ? < Recent /> : null}
                        {activeComponent === 'Component6' ? < Storage /> : null}
                        {activeComponent === 'Component7' ? < Pricing /> : null}
                        {activeComponent === 'Component8' ? < Terms /> : null}
                        {activeComponent === 'Component9' ? < Calender /> : null}
                        {activeComponent === 'Component10' ? < Setting /> : null}
                    </div>
                </div>
                <div className="downbar-contents">
                    <div className="content">

                        <div className={selected === 2 ? 'icon2-d' : 'icon-d'} onClick={() => { toggleMenu(2); setActiveComponent('Component3') }}>
                            <FontAwesomeIcon icon={faHeart} size={"2x"} />
                        </div>

                        <div className={selected === 1 ? 'icon2-d' : 'icon-d'} onClick={() => { toggleMenu(1); setActiveComponent('Component2') }}>
                            <FontAwesomeIcon icon={faList} size={"2x"} />
                        </div>

                        <div className={selected === 0 ? 'icon2-d' : 'icon-d'} onClick={() => { toggleMenu(0); setActiveComponent('Component1') }}>
                            <FontAwesomeIcon icon={faHouse} size={"2x"} />
                        </div>


                        <div className={selected === 9 ? 'icon2-d' : 'icon-d'} onClick={() => { toggleMenu(9); setActiveComponent('Component9') }}>
                            <FontAwesomeIcon icon={faCalendar} size={"2x"} />
                        </div>


                        <div className={selected === 10 ? 'icon2-d' : 'icon-d'} onClick={() => { toggleMenu(10); setActiveComponent('Component10') }}>
                            <FontAwesomeIcon icon={faGear} size={"2x"} />
                        </div>
                    </div>
                </div>
            </>
        </div >
    )
}

export default Dashboard