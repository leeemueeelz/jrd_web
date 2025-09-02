import { useEffect, useState } from "react";

const useCountdownTimer = ({ launchDateUTC, startDateUTC }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    const launchDate = new Date(Date.UTC(2025, 8, 13, 5, 0, 0)); // 00:00 GMT-5 (Texas)
    const startDate = new Date(Date.UTC(2025, 7, 30, 5, 0, 0));
    const totalDuration = launchDate.getTime() - startDate.getTime();

    useEffect(() => {
        let interval;

        fetch("https://timeapi.io/api/Time/current/zone?timeZone=America/Chicago")
        .then((res) => res.json())
        .then((data) => {
        const { dateTime } = data;
        const apiNow = new Date(dateTime);
        const syncNow = Date.now();

        interval = setInterval(() => {
            const now = Date.now();
            const elapsed = now - syncNow + apiNow.getTime();
            const distance = launchDate.getTime() - elapsed;


            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            const newProgress = ((elapsed - startDate.getTime()) / totalDuration) * 100;
            setProgress(Math.min(Math.max(newProgress, 0), 100));


            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setProgress(100);
            }

            setLoading(false);
            }, 1000);
        })
        .catch((err) => {
            console.error("Failed to fetch time from API", err);
            setLoading(false);
        });

        return () => clearInterval(interval);
    }, [launchDateUTC, startDateUTC]);

        return { timeLeft, progress, loading };
};

export default useCountdownTimer;