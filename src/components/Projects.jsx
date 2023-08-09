import mygallery from '../assets/mygallery.png'
import calski from '../assets/calski.png'
import calskihome from '../assets/calski-home.png'
import gotrip from '../assets/gotrip.png'

const Projects = () => {
    return (
        <article className="projects mb-3" id="projects">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title mt-5 mb-4">Projects</h1>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-12">
                        <h2 className="section-subtitle my-4">MyGallery</h2>
                        <p className='text-start px-4'>
                            MyGallery is a website developed with React, Node.js, Python, Django, PostgreSQL, GitHub, AWS, Figma, and Lucidchart that allows users to register and login to explore a collection of exclusively selected photos that I have taken in the last few years. Each photo is attached with its camera parameters and location, users can purchase photos that they like.
                        </p>
                        <p className='text-start px-4'>
                            The frontend (React), backend (Django), and database (PostgreSQL) are all hosted to Railway. The backend is connected to PostgreSQL and AWS S3. Each time a photo record (row) is created, automatically the posted photo will be uploaded to the AWS S3 Bucket as static file and the file link will be stored to the database. The frontend is connected to the backend through RESTful API. And it is responsive to different screen sizes.
                        </p>
                        <p className='text-start px-4'>
                            Deployed website: <a href='https://gallery-production.up.railway.app/' target='_blank' rel="noreferrer">MyGallery</a> <br />
                            Github: <a href='https://github.com/chrischen96/MyGallery' target='_blank' rel="noreferrer">MyGallery repo</a>
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="resume-pic mb-5">
                            <img className='w-100' src={mygallery} alt="" />
                        </div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-12">
                        <h2 className="section-subtitle my-4">CalSki</h2>
                        <p className='text-start px-4'>
                            CalSki is a single page application built with MERN stack. By utilizing React, MongoDB, Express.js, Node.js, Lucidchart, GitHub, and AWS, this app provides skiers everything they need to carefully plan their next ski vacation.
                        </p>
                        <p className='text-start px-4'>
                            The data is stored in MongoDB Atlas, a fully-managed cloud database that handles all the complexity of deploying and managing. The backend server built with Express.js is deployed to a virtual computer provided by Amazon Elastic Compute Cloud (AWS EC2) to keep it running, and the frontend webpage is hosted to AWS S3, making it a fulling functional professional website.
                        </p>
                        <p className='text-start px-4'>
                            Deployed website: <a href='http://calski.s3-website-us-west-1.amazonaws.com/' target='_blank' rel="noreferrer">Calski</a> <br />
                            Github: <a href='https://github.com/chrischen96/CalSki' target='_blank' rel="noreferrer">CalSki repo</a>
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="resume-pic mb-5">
                            <img className='w-100' src={calskihome} alt="" />
                        </div>
                        <div className="resume-pic mb-5">
                            <img className='w-100' src={calski} alt="" />
                        </div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-12">
                        <h2 className="section-subtitle my-4">GoTrip</h2>
                        <p className='text-start px-4'>
                            GoTrip is a project that I built with Vanilla JavaScript, CSS, Node.js, Express.js, MongoDB, and AWS. It is a full-stack web application that allows users to search for national parks around the country and get detailed information about them. Users can also create their own trips and add parks to their trips.
                        </p>
                        <p className='text-start px-4'>
                            It is a practice that utilize Node.js and Express.js to build a RESTful API to handle HTTP requests and responses. The data is stored in MongoDB Atlas and the web is hosted to AWS EC2 and AWS S3.
                        </p>
                        <p className='text-start px-4'>
                            Deployed website: <a href='http://go-trip.s3-website-us-west-1.amazonaws.com/' target='_blank' rel="noreferrer">GoTrip</a> <br />
                            Github: <a href='https://github.com/chrischen96/GoTrip' target='_blank' rel="noreferrer">GoTrip repo</a>
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="resume-pic mb-5">
                            <img className='w-100' src={gotrip} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-12">
                        <h2 className="section-subtitle my-4">TrachePass</h2>
                        <p className='text-start px-4'>
                            TrachePass is a mobile app that supports young patients who had tracheotomy surgery to receive better medical care. It is a project that I worked for the Great Ormond Street Hospital for Children (GOSH) in London when I was anticipating the UCL industry exchange program.
                        </p>
                        <p className='text-start px-4'>
                            Github: <a href='https://github.com/chrischen96/TrachePass' target='_blank' rel="noreferrer">TrachePass repo</a>
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="resume-pic d-flex align-items-center mb-5">
                            <iframe width="100%" height="550" src="https://www.youtube.com/embed/Ak0II9Px32o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default Projects