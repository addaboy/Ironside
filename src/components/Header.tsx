import { useState } from 'react'
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
export default function Header() {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "#" },
        { title: "Experience", path: "#experience" },
        { title: "Showcases", path: "#showcase" },
        { title: "About", path: "#about" },
        { title: "Contact", path: "#contact" }
    ]

    return (
        <nav className=" w-full shadow md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src={profile}
                            width={50}
                            height={50}
                            alt="Profile picture"
                            className='rounded-full'
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-400 outline-none p-2 rounded-md transition-all duration-200 delay-100"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                {/* links section  */}

                <div className={`flex-1 justify-self-center ml-4  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <motion.li key={idx} className="text-gray-300 hover:text-indigo-600"
                                        initial={{
                                            opacity: 0,
                                            x: -100
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        transition={{
                                            delay: idx / 30 * 10,
                                            duration: 0.4
                                        }}
                                    >
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="hidden md:inline-block">
                    <a href='https://github.com/addaboy' target='_blank' className='btn btn-primary'>Github</a>
                </div>
            </div>
        </nav>
    )
}