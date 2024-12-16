import { FiMapPin, FiPhone } from "react-icons/fi"
import { MdMailOutline } from "react-icons/md"

const ContactInfo = () => {
    return (
        <div className="footer__col">
            <h4>CONTACT INFO</h4>

            <p className="flex items-center">
                <span><FiMapPin /></span>
                123, Khan Thuy, Ha Noi
            </p>

            <p className="flex items-center">
                <span><MdMailOutline /></span>
                support@gmail.com
            </p>

            <p className="flex items-center">
                <span><FiPhone /></span>
                +84 987 654 321
            </p>
        </div>
    )
}

export default ContactInfo