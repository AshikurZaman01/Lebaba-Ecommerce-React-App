import { Link } from 'react-router-dom';
import cardImage01 from '../../../../assets/images/card-1.png';
import cardImage02 from '../../../../assets/images/card-2.png';
import cardImage03 from '../../../../assets/images/card-3.png';

const HeroSection = () => {
    const cards = [
        { id: 1, title: "Womens Shirt", trend: "2024 Trend", image: cardImage01 },
        { id: 2, title: "Womens Dress", trend: "2024 Trend", image: cardImage02 },
        { id: 3, title: "Womens Casuals", trend: "2024 Trend", image: cardImage03 },
    ];

    return (
        <div className="max-w-[var(--max-width-1400)] mx-auto py-20 px-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    cards.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden group rounded-lg shadow-lg transform transition-all duration-300 "
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-80"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60  transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 px-6 py-4 text-center text-white">

                                <p className="text-sm uppercase  font-semibold tracking-wider text-gray-600">{item.trend}</p>


                                <h4 className="mt-2 text-2xl font-semibold text-yellow-400">{item.title}</h4>

                                {/* Discover More Link */}
                                <Link
                                    to="#"
                                    className="mt-4 inline-block text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-all duration-200"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default HeroSection;
