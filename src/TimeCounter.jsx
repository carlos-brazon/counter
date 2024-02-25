import { useState, useEffect } from 'react';

function TimeCounter() {
  const [startDatePast] = useState(new Date('2023-05-09T21:24:00'));
  const [startDateFuture] = useState(new Date('2024-05-09T21:24'));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateTimeDifference = (start, end) => {
    const differenceMillis = Math.abs(end - start);
    const differenceSeconds = differenceMillis / 1000;

    const seconds = Math.floor(differenceSeconds % 60);
    const minutes = Math.floor((differenceSeconds / 60) % 60);
    const hours = Math.floor((differenceSeconds / 3600) % 24);
    const days = Math.floor(differenceSeconds / 86400);

    return { days, hours, minutes, seconds };
  };

  const pastTime = calculateTimeDifference(startDatePast, currentTime);
  const futureTime = calculateTimeDifference(currentTime, startDateFuture);

  return (
    <div>
      <h2>Contador de tiempo transcurrido</h2>
      <p>Han pasado {pastTime.days} días, {pastTime.hours} horas, {pastTime.minutes} minutos y {pastTime.seconds} segundos.</p>

      <h2>Contador de regreso</h2>
      <p>Faltan {futureTime.days} días, {futureTime.hours} horas, {futureTime.minutes} minutos y {futureTime.seconds} segundos.</p>
    </div>
  );
}

export default TimeCounter;
