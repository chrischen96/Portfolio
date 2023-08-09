import la from '../assets/la.jpeg'
import portrait from "../assets/portrait.jpg"

const About = () => {
    return (
        <article className="home mb-4" id="home">
            <img src={la} alt="" />
            <div className="content ">
                <div className="infocard card rounded-0 p-4 justify-content-center">
                    <div className='d-flex'>
                        <div className="card-body">
                            <h2 className="card-title">About Me</h2>
                            <p className="card-text fs-5">
                                As a software engineer with a background in geographical information science, I am passionate about building software that empowers people to solve problems, have bigger potential, and do great things in their lives. I am a quick learner and a team player, always eager to learn new technologies and skills.
                            </p>
                        </div>
                        <div className="card-body" id='invis-port'>
                            <img src={portrait} alt="" className='card-portrait'/>
                            <h4 className="card-title mt-3">Xin Chen</h4>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default About