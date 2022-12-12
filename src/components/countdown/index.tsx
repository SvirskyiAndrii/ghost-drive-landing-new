import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const getCountdownTime = (timestamp: number) => {
  if (timestamp < 0) {
    return { days: '0', hours: '0', minutes: '0', seconds: '0' };
  }
  let seconds = (timestamp / 1000).toFixed(0);
  let minutes = '--';
  let hours = '--';
  let days = '--';

  if (+seconds > 60) {
    minutes = `${Math.floor(+seconds / 60)}`;
    seconds = `${+seconds - +minutes * 60}`;
  }
  if (minutes) {
    hours = `${Math.floor(+minutes / 60)}`;
    minutes = `${+minutes - +hours * 60}`;
  }
  if (hours) {
    days = `${Math.floor(+hours / 24)}`;
    hours = `${+hours - +days * 24}`;
  }
  days = +days < 10 ? '0' + days : days;
  hours = +hours < 10 ? '0' + hours : hours;
  minutes = +minutes < 10 ? '0' + minutes : minutes;
  seconds = +seconds < 10 ? '0' + seconds : seconds;

  return { days, hours, minutes, seconds };
};
type Time = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};
export const CountDown = ({ timestamp }: { timestamp: number }) => {
  const [time, setTime] = useState<Time>({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const countdownTimestamp = timestamp - currentTime;
      setTime(getCountdownTime(countdownTimestamp));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timestamp]);
  const { days, hours, minutes, seconds } = time;
  return (
    <div className={styles.countdown}>
      {`Days ${days}:${hours}:${minutes}:${seconds}`}
    </div>
  );
};
