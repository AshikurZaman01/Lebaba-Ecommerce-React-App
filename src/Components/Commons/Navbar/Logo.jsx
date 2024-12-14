import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="text-[2rem] font-[800] text-text-dark md:-ml-20 ml-0 ">
            <Link to={'/'}>Lebaba<span className="text-primary-dark">.</span></Link>
        </div>
    )
}

export default Logo