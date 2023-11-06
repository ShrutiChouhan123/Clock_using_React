import React, { useState, useEffect } from "react";
import './App.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [reverse, setreverseTime] = useState(true)

    useEffect(() => {
        let intervalId;
        if (!reverse) {
            if (isRunning) {
                intervalId = setInterval(() => setTime(time - 1), 10);
                return () => clearInterval(intervalId);
            }
        }
        else {
            if (isRunning) {
                intervalId = setInterval(() => setTime(time + 1), 10);
                return () => clearInterval(intervalId);
            }
        }

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
        setreverseTime(true)
    };

    const reverseStop = (i) => {
        setTime(i)
        setreverseTime(false)
    }
    return (
        <div className="stopwatch-container">
            <div className="card" style={{ width: "26rem", border: "1px solid black", marginLeft: "310px", marginTop: "70px", fontSize: "50px" }}>
                <div className="card-body3">
                    <p className="stopwatchtime" style={{ marginLeft: "100px" }} data-testid='time'>
                        {hours}:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}:
                        {milliseconds.toString().padStart(2, "0")}
                    </p>

                </div>
            </div>
            <div className="btn_container" data-testid='main' >
                <div className="stopwatchbuttons">
                    <button className="button-85" onClick={startAndStop} data-testid="button-up">  
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button className="button-85" onClick={reset} data-testid='reset' >
                        Reset
                    </button>
                    <button className="button-85" onClick={() => reverseStop(30000)}>
                        5 minit
                    </button>
                    <button className="button-85" onClick={() => reverseStop(60000)}>
                        10 minit
                    </button>
                    <button className="button-85" onClick={() => reverseStop(90000)}>
                        15 minit
                    </button>
                    <button className="button-85" onClick={() => reverseStop(120000)}>
                        20 minit
                    </button>
                    <button className="button-85" onClick={() => reverseStop(150000)}>
                        25 minit
                    </button>
                    <button className="button-85" onClick={() => reverseStop(180000)}>
                        30 minit
                    </button>
                  
                </div>
            </div>

        </div>
    );
};

export default Stopwatch;