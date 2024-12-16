import image1 from '../../../src/assets/images/instagram-1.jpg'
import image2 from '../../../src/assets/images/instagram-2.jpg'
import image3 from '../../../src/assets/images/instagram-3.jpg'
import image4 from '../../../src/assets/images/instagram-4.jpg'
import image5 from '../../../src/assets/images/instagram-5.jpg'
import image6 from '../../../src/assets/images/instagram-6.jpg'

const InstagramFooter = () => {
    return (
        <div className="footer__col">

            <h4>INSTAGRAM</h4>

            <div className='instagram__grid'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image6} alt="" />
            </div>

        </div>
    )
}

export default InstagramFooter