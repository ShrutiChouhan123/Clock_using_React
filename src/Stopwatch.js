import React, { useState, useEffect } from "react";
import './App.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);


    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;


    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
    };
    return (
        <div className="stopwatch-container">
            <div class="card" style={{ width: "26rem", border: "1px solid black", marginLeft: "310px", marginTop: "70px", fontSize: "50px" }}>
                <div class="card-body3">
                    <p className="stopwatchtime" style={{ marginLeft: "100px" }}>
                        {hours}:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                        {milliseconds.toString().padStart(2, "0")}
                    </p>
                    
                </div>
            </div>
            <div className="btn_container">
            <div className="stopwatchbuttons">
                        <button className="button-85" onClick={startAndStop}>
                            {isRunning ? "Stop" : "Start"}
                        </button>
                        <button className="button-85"  onClick={reset}>
                            Reset
                        </button>
           </div>
           </div>

        </div>
    );
};

export default Stopwatch;