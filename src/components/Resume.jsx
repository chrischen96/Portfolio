const Resume = () => {
    return (
        <article className="resume" id="resume">
            <div className="container-fluid p-0">

                <h1 className="section-title my-5 mb-4">Resume</h1>

                <div className="edu mb-5" id="edu">
                    <div className="filter">
                        <h2 className="section-subtitle mb-4 py-3 fs-1">Education</h2>

                        <div className="resume-item text-start">
                            <h4 className="resume-title">University College London</h4>
                            <h5 className="resume-subtitle">MSc Computer Science</h5>
                            <p className="resume-date">2020 - 2021 London, UK</p>
                            <p className="resume-desc">The Computer Science MSc at UCL provides students with a strong foundation in computer science theory and practical software engineering skills, including teamwork for industrial or research clients. Students will complement their first degree with computer science knowledge, which can lead to interdisciplinary industrial positions</p>
                        </div>

                        <div className="resume-item text-start mt-5">
                            <h4 className="resume-title">Wuhan University</h4>
                            <h5 className="resume-subtitle">BSc Geographical Information Science</h5>
                            <p className="resume-date">2014 - 2019 Wuhan, China</p>
                            <p className="resume-desc">This program cultivates innovative students to master the solid theoretical knowledge of geographical science, environmental science and engineering, geographic information system, remote sensing and other relevant subjects. It equips students with international perspective, critical thinking, and innovative spirit to adapt to various industry fields.</p>
                        </div>
                    </div>

                </div>

                <div className="exp" id="exp">
                    <div className="filter">
                        <h2 className="section-subtitle py-3 mb-4 fs-1">Experience</h2>

                        <div className="resume-item text-start mt-5">
                            <h4 className="resume-title">General Assembly</h4>
                            <h5 className="resume-subtitle">Position: Software Engineering Immersive Fellow</h5>
                            <p className="resume-date">2023 Los Angeles, CA</p>
                            <p className="resume-desc">12-week long 500 hours full-time and full-stack web development program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies including HTML, CSS, SASS, JavaScript, Node.JS, React.JS, MongoDB, Mongoose, SQL, Python, and Django.</p>
                        </div>

                        <div className="resume-item text-start mt-5">
                            <h4 className="resume-title">Great Ormond Street Hospital for Children</h4>
                            <h5 className="resume-subtitle">Postion: Web Application Developer</h5>
                            <p className="resume-date">2022 London, UK</p>
                            <p className="resume-desc">Initialized a mobile app project that supported young patients who had tracheotomy surgery to receive better medical care. Designed the prototype by conducting case study and interviewing patients, doctors, and caregivers. Communicated with team members regarding project logistics; scheduled the workflow and timeline; distributed workload reasonably; monitored project progress and wrote bi-weekly report.
                            </p>
                            <p className="resume-desc">
                                Implemented the app with 2 software developers using Angular, Node.js, Ionic, TypeScript, GitHub, Android Studio and Xcode. Deployed the app to Android and iOS, tested and ran on physical devices.
                            </p>
                        </div>



                        <div className="resume-item text-start mt-5">
                            <h4 className="resume-title">Avanade</h4>
                            <h5 className="resume-subtitle">Position: Application Engineer</h5>
                            <p className="resume-date">2021 London, UK</p>
                            <p className="resume-desc">
                                Developed a HoloLens app using Unity and Mixed Reality Toolkit to investigate the potential of using HoloLens in the manufacturing industry. The app allows users to view the 3D model and interact with it by using voice commands and gestures.
                            </p>
                            <p className="resume-desc">
                                Designed a controlled experiment and recruited 30 participants to conduct the experiment to test if the HoloLens increases the performance of users to finish technical tasks. Analysed the data collected from the experiment with independent two-sample T-test method using SPSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Resume