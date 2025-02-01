import { useState, useEffect } from "react";
interface Props {
  offset: number;
}
export default function TimeUTCNow(p: Props) {
  const [time, setTime] = useState(getFormatDate());

  function getCurrentUTC(offset: number) {
    const now = new Date();
    now.setHours(now.getUTCHours() + offset);
    return now;
  }

  function getFormatDate() {
    const now = getCurrentUTC(p.offset);
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // This will format the time in 12-hour format with AM/PM
    };

    let formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
    if (p.offset < 0) formattedTime += " UTC" + p.offset.toString();
    else formattedTime += " UTC+" + p.offset.toString();

    return formattedTime;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormatDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <div>{time}</div>;
}
