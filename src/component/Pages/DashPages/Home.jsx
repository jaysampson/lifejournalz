import React from 'react'
import save from "../../../Images/save.png";
import add from "../../../Images/add.png";
import "../../../styles/home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faCheck, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import bookicon from "../../../Images/bookicon.png"
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import addpic from "../../../Images/addpic.png"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

export const Home = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState("Event");
    const [selectedDate, setSelectedDate] = useState(null);
    const [text, setText] = useState('');
    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [title, setTitle] = useState('');
    const handleTitleChange = (event) => {
        if (event.target.value.length <= 30) {
            setTitle(event.target.value);
        }
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
                        <h5>Title</h5>
                        <input
                            className='journal-title'
                            type="text"
                            name=""
                            id=""
                            placeholder="Title of new journal"
                            style={{ border: "1px solid gray", borderRadius: "5px", height: "40px" }}
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <div className='title-count' style={{ float: "right", marginRight: "32%" }}>{title.length}/30</div>
                        <div className="headers" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "50px", cursor: "pointer" }}>
                            <p className={activeTab === "Event" ? "active-tab" : ""}
                                onClick={() => handleTabClick("Event")} style={{ padding: "5px 30px 5px 40px", marginBottom: "10px" }}>Event</p>
                        </div>
                        <div>
                            {activeTab === "Event" &&
                                <div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <h5 style={{ marginBottom: "10px" }}>Description</h5>
                                        <ReactQuill
                                            value={text}
                                            onChange={setText}
                                            modules={{
                                                toolbar: [
                                                    [{ 'header': [1, 2, false] }],
                                                    ['bold', 'italic', 'underline'],
                                                    [{ 'color': [] }, { 'background': [] }],
                                                    [{ 'align': [] }]
                                                ]
                                            }}
                                        />
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
                                        <h5>Date</h5>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText='Select Date Publish'
                                            className="my-datepicker"
                                        />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                                        <input type="checkbox" />
                                        <p style={{ marginBottom: "0px" }}>Add to favourites</p>
                                    </div>
                                </div>}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModal}>
                            Close
                        </Button>
                        <Button variant='primary' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}><FontAwesomeIcon icon={faCheck} />Create Journal</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
