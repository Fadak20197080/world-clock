import React, { useState, useEffect } from "react";

function Clock({ timeZone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h3>{time.toLocaleTimeString("en-GB", { timeZone })}</h3>
    </div>
  );
}

export default Clock;
