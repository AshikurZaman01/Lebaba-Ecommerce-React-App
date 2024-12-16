import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center md:justify-start gap-4 flex-wrap'>

            {/* Days */}
            <div className='h-[80px] w-[80px] grid place-content-center text-center bg-[var(--white)] rounded-full shadow-[5px_5px_20px_rgba(0,_0,_0,_0.1)] font-semibold'>
                <h4 className='mb-0 text-xl text-[var(--text-dark)]'>{timeLeft.days}</h4>
                <p className='mb-0 font-medium text-[var(--text-dark)]'>Days</p>
            </div>

            {/* Hours */}
            <div className='h-[80px] w-[80px] grid place-content-center text-center bg-[var(--white)] rounded-full shadow-[5px_5px_20px_rgba(0,_0,_0,_0.1)] font-semibold'>
                <h4 className='mb-0 text-xl text-[var(--text-dark)]'>{timeLeft.hours}</h4>
                <p className='mb-0 font-medium text-[var(--text-dark)]'>Hours</p>
            </div>

            {/* Minutes */}
            <div className='h-[80px] w-[80px] grid place-content-center text-center bg-[var(--white)] rounded-full shadow-[5px_5px_20px_rgba(0,_0,_0,_0.1)] font-semibold'>
                <h4 className='mb-0 text-xl text-[var(--text-dark)]'>{timeLeft.minutes}</h4>
                <p className='mb-0 font-medium text-[var(--text-dark)]'>Min</p>
            </div>

            {/* Seconds */}
            <div className='h-[80px] w-[80px] grid place-content-center text-center bg-[var(--white)] rounded-full shadow-[5px_5px_20px_rgba(0,_0,_0,_0.1)] font-semibold'>
                <h4 className='mb-0 text-xl text-[var(--text-dark)]'>{timeLeft.seconds}</h4>
                <p className='mb-0 font-medium text-[var(--text-dark)]'>Secs</p>
            </div>

        </div>
    );
};

export default Countdown;
