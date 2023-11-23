import profile from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';
const Hero = () => {
    return (
        <div id='' className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={profile} alt="profile" className='h-56 w-56 mx-auto rounded-full ' />
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <h3>I'm Addaboy</h3>
                    <p className="py-6"> I'm Addisu Biyana Full-stack engineer and network designer  working on several year .</p>
                    <a href={resume} target='_blank' download={true} className="btn btn-primary">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Hero