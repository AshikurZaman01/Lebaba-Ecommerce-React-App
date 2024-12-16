import dealsImage from '../../../../src/assets/images/deals.png';
import Countdown from './Countdown';

const DealSection = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    return (
        <div className="max-w-[var(--max-width-1400)] mx-auto py-20 my-20 px-4 bg-red-100 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

            {/* Image */}
            <div className='h-full relative sm:block hidden'>
                <img src={dealsImage} alt="deal image" className='absolute left-1/2 bottom-[-5rem] -translate-x-1/2 max-w-[550px]' />
            </div>

            {/* Text and Countdown */}
            <div className='max-w-[600px] mr-auto text-center sm:text-left'>

                <h5 className='mb-4 text-4xl font-medium text-primary-dark'>Get Up To 20% Discount</h5>

                <h4 className='mb-4 text-2xl font-medium text-primary-dark'>Deals Of This Month</h4>

                <p className='mb-8 text-[var(--text-light)]'>Take advantage of this limited-time offer and enjoy amazing discounts on your favorite products! Whether you're looking for the latest gadgets, stylish apparel, or home essentials, we have something for everyone. Don't miss out on the opportunity to save big! Act fast—this deal ends soon, so grab your items before it's too late!</p>

                <Countdown targetDate={targetDate} />
            </div>
        </div>
    );
};

export default DealSection;
    