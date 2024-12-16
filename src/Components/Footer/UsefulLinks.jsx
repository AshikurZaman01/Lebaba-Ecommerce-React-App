import { Link } from "react-router-dom"

const UsefulLinks = () => {
    return (
        <div className="footer__col">

            <h4>USEFUL LINKS</h4>

            <div>
                <Link to={'/'}>Help</Link>
                <Link to={'/'}>Track My Order</Link>
                <Link to={'/'}>Men</Link>
                <Link to={'/'}>Women</Link>
                <Link to={'/'}>Dresses</Link>
            </div>

        </div>
    )
}

export default UsefulLinks