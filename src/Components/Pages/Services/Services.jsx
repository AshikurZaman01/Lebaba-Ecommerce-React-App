import { FaTruck, FaRegMoneyBillAlt, FaHeart } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Free Delivery",
            desc: "Free delivery on all orders over $100",
            icon: <FaTruck className="text-4xl text-green-500" />
        },
        {
            id: 2,
            title: "100% Money Back Guarantee",
            desc: "Get your money back if you're not satisfied with the product",
            icon: <FaRegMoneyBillAlt className="text-4xl text-blue-500" />
        },
        {
            id: 3,
            title: "Customer Love",
            desc: "We put customers first and make sure you're satisfied",
            icon: <FaHeart className="text-4xl text-red-500" />
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-6 py-20 bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 rounded-lg shadow-lg">
            
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
            
            
            <p className="text-lg text-center text-gray-600 mb-10">Explore the services we offer to make your experience better!</p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Service Icon */}
                        <div className="flex justify-center items-center mb-6">
                            {service.icon}
                        </div>
                        
                        {/* Service Title */}
                        <h3 className="text-2xl font-semibold text-gray-800 text-center">{service.title}</h3>
                        
                        {/* Service Description */}
                        <p className="text-gray-600 text-center mt-4">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
