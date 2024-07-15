import React from "react";
import { useState, useEffect } from "react";

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [ countDown, setCountDown ] = useState (
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000 );
        return () => clearInterval(interval);
    }, [countDownDate] );

    return getReturnValues(countDown);
}

const getReturnValues = (countDown) => {
    //calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor( (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    const minutes = Math.floor( (countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor( (countDown % (1000 * 60)) / (1000) );

    return [days, hours, minutes, seconds];
}

const CountdownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    }

    else {
        return (
            <ShowCounter
                days = {days}
                hours = {hours}
                minutes = {minutes}
                seconds = {seconds}
            />
        );
    }
};

const ExpiredNotice = () => {
    return (
        <div className = "expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time</p>
        </div>
    );
};

const ShowCounter = ({days, hours, minutes, seconds}) => {
    return (
        <div className="show-counter">
            <a
               target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeDisplay value = {days} type = {'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value = {hours} type = {'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value = {minutes} type = {'Minutes'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value = {seconds} type = {'Seconds'} isDanger={false} />
            </a>
        </div>
    );
};

const DateTimeDisplay =({value, type, isDanger}) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default CountdownTimer;