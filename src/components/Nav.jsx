import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link to='/about'>About me</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    )
}

export default Nav