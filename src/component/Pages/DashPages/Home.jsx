import React from 'react'
import save from "../../../Images/save.png";
import add from "../../../Images/add.png";
import "../../../styles/dash.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import bookicon from "../../../Images/bookicon.png"
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import NavLink from 'react-bootstrap';
import { Calender } from './Calender';
import addpic from "../../../Images/addpic.png"

export const Home = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState("Event");
    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

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
                                    <div className="books-list">
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                        <div className='books-con'>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}><img src={bookicon} alt="" /> Journal.title</div>
                                            <p style={{ display: "flex", gap: "30%", alignItems: "center" }}>11/12/2022<FontAwesomeIcon icon={faEllipsisV} color={"gray"} /> <input type="checkbox" style={{}} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleModal}>New<img src={add} alt="" /></Button>
                </div>
                <Modal show={showModal} onHide={handleModal} backdrop={"static"}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Journal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>
                            Title
                        </h5>
                        <input className='journal-title' type="text" name="" id="" placeholder='Title of new Journal' style={{ border: "1px solid gray", borderRadius: "5px", height: "40px" }} />
                        <div className='title-count' style={{ float: "right", marginRight: "32%" }}>0/30</div>
                        <div className="headers" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "50px", cursor: "pointer" }}>
                            <p className={activeTab === "Event" ? "active-tab" : ""}
                                onClick={() => handleTabClick("Event")} style={{ padding: "5px 30px 5px 40px", marginBottom: "0px" }}>Event</p>
                            <p className={activeTab === "Calendar" ? "active-tab" : ""}
                                onClick={() => handleTabClick("Calendar")} style={{ padding: "5px 30px 5px 40px", marginBottom: "0px" }}>Calendar</p>
                        </div>
                        <div>
                            {activeTab === "Event" &&
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" }}>
                                        <p style={{ marginBottom: "0px" }}>Color</p>
                                        <div style={{ height: "20px", width: "20px", borderRadius: "50%", border: "1px solid black", background: "purple" }}></div>
                                        <div style={{ height: "20px", width: "20px", borderRadius: "50%", border: "1px solid black", background: "blue" }}></div>
                                        <div style={{ height: "20px", width: "20px", borderRadius: "50%", border: "1px solid black", background: "green" }}></div>
                                        <div style={{ height: "20px", width: "20px", borderRadius: "50%", border: "1px solid black", background: "orange" }}></div>
                                        <div style={{ height: "20px", width: "20px", borderRadius: "50%", border: "1px solid black", background: "red" }}></div>
                                        <div style={{ height: "20px", width: "20px", borderRadius: "50%", border: "1px solid black", background: "yellow" }}></div>
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <h5 style={{ marginBottom: "10px" }}>Description</h5>
                                        <textarea name="" id="" cols="30" rows="5" style={{ width: "100%", border: "1px solid gray" }} placeholder={"Details about event"}></textarea>
                                    </div>
                                    <div style={{ marginBottom: "15px" }}>
                                        <h5 style={{ marginBottom: "10px" }}>Add a Photo</h5>
                                        <div style={{ height: "fit-content", width: "fit-content", padding: "5px", border: "1px gray solid", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                            <img src={addpic} alt="" style={{ height: "33%", width: "33%" }} />
                                            <p style={{ marginBottom: "10px" }}>(upload png,svg,gif)</p>
                                            <button style={{ display: "flex", justifyContent: "center", gap: "10px", borderRadius: "5px", alignItems: "center", padding: "5px 0px 5px 0px", width: "90%", background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", color: "white" }}>Upload <FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Date & Time</h5>
                                        <input type="datetime-local" style={{ height: "40px", width: "100%", border: "1px gray solid", borderRadius: "5px", marginBottom: "10px" }} />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <input type="checkbox" />
                                        <p style={{ marginBottom: "0px" }}>Add to favourites</p>
                                    </div>
                                </div>}
                            {activeTab === "Calendar" && <Calender />}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModal}>
                            Close
                        </Button>
                        <Button variant='primary' style={{ backgroundColor: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)" }}>Create Journal</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
