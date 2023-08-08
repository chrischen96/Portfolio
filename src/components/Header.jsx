import portrait from "../assets/portrait.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav id="homenav" className="d-flex flex-wrap justify-content-between">
                    <div className="d-flex align-items-center py-2">
                        <img src={portrait} alt="avatar" className="logo" />
                        <h2 className="m-0 px-3">Xin Chen</h2>
                    </div>
                    <div className="fs-5 d-flex align-items-center py-2">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href='#home'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#edu'>Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#exp'>Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#projects'>Projects</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header