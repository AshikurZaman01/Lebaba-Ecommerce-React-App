import { FaStar } from "react-icons/fa6";

const RatingStar = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar
                key={i}
                className={`transition-all duration-300 ease-in-out ${i < rating ? "text-yellow-500" : "text-gray-300"
                    } hover:text-yellow-400 cursor-pointer text-xl`}
            />
        );
    }

    return (
        <div>
            <div className="flex justify-center mt-4 mb-2">
                {stars}
            </div>
        </div>
    );
};

export default RatingStar;
