import { useEffect, useRef } from 'react';

const INACTIVITY_TIMEOUT = 20 * 60 * 1000; // 20 minutes in milliseconds

const useInactivityTimer = (onInactivity) => {
    const timerRef = useRef(null);

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(onInactivity, INACTIVITY_TIMEOUT);
    };

    useEffect(() => {
        const events = ['mousedown', 'keypress', 'scroll', 'mousemove'];
        events.forEach((event) => document.addEventListener(event, resetTimer));

        resetTimer();

        return () => {
            events.forEach((event) =>
                document.removeEventListener(event, resetTimer),
            );
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return null;
};

export default useInactivityTimer;
