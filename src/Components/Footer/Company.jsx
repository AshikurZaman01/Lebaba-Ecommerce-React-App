import { Link } from "react-router-dom"

const Company = () => {
    return (
        <div className="footer__col">

            <h4>COMPANY</h4>

            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About Us</Link>
                <Link to={'/'}>Work With Us</Link>
                <Link to={'/'}>Our Blogs</Link>
                <Link to={'/'}>Terms & Conditions</Link>
                <Link to={'/'}>About Us</Link>
            </div>

        </div>
    )
}

export default Company