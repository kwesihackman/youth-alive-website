"use client";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("2024-03-09T09:00:00").getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center  bg-blue-800 py-8">
      <div className="timer-section__right-info lgx-countdown-area lgx-countdown-simple container mx-auto">
        <h2 className="text-4xl text-white text-center font-bold ">
          9th March, 2024
        </h2>
        <div
          id="lgx-countdown"
          data-date="2024-03-09T09:00:00"
          className="text-center container mx-auto mt-12 lg:pt-0"
        >
          <span className="lgx-days">
            {timeLeft.days} <i>Days</i>
          </span>
          <span className="lgx-hr">
            {timeLeft.hours} <i>Hour</i>
          </span>
          <span className="lgx-min">
            {timeLeft.minutes} <i>Min</i>
          </span>
          <span className="lgx-sec">
            {timeLeft.seconds} <i>Sec</i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Timer;
