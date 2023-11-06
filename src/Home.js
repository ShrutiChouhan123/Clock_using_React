import React from 'react';
import { useEffect, useState } from 'react';
import moment from "moment-timezone";
import './index.css'

function Home() {
    const [zone, setTimeZones] = useState("Asia/Kolkata")
    const [Time, setTime] = useState(moment().tz(zone).format("LTS"));
    const [currentPage, setCurrentPage] = useState(0);
    const TimeZones = moment.tz.names()
    const itemsPerPage = 20;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedTimeZones = TimeZones.slice(startIndex, endIndex);



     useEffect(() => {
        let clear = setInterval(() => {
            setTime(moment().tz(zone).format("LTS"))
        });

        return () => clearInterval(clear);

    },[zone])

    const handleTimeZone = (i) => {
        // setTimeZones(moment().tz(i).format("LTS"))
        setTimeZones(i)
    }


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
        {/* <h1>hello</h1> */}
            <div  data-testid = 'todo-1' className="card" style={{ width: "26rem", border: "1px solid black", marginLeft: "350px", marginTop: "70px", fontSize: "30px" }}>
                <div className="CurrentTime">
                    <h6 style={{ marginLeft: "120px", fontSize: "20px" }}>{zone}</h6>
                    <h5 className="card-title" style={{ marginLeft: "100px", fontSize: "50px" }}>{Time}</h5>
                </div>
            </div>
            <div className="card" style={{ width: "60rem", border: "1px solid black", marginLeft: "19px", marginTop: "70px", fontSize: "30px",background:"#08123f"}}>


                <div className='card-body1'>
                    {displayedTimeZones.map((name) => <button className="Btn" onClick={() => handleTimeZone(name)}>{name}</button>)}
                </div>

                <div>
                    {TimeZones.length > itemsPerPage && (
                        <div className='Btns'> 
                            <button className='btn1'  data-testid='page1'
                              onClick={() => handlePageChange(currentPage - 1)} 
                                disabled={currentPage === 0}
                            >
                                <i className="fa fa-arrow-circle-left" style={{fontSize:"49px"}}></i>
                            </button>
                            <button className='btn2' key="name"  data-testid='page2'
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={endIndex >= TimeZones.length}
                            >
                             <i className="fa fa-arrow-circle-right" style={{fontSize:"49px"}}></i>

                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;