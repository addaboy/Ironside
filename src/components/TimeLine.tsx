import { motion } from "framer-motion"
const TimeLine = () => {
    return (
        <div>
            <ul className="timeline timeline-vertical py-12">
                <li>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box"> React </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/color/25/react-native.png" alt="react-native" />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />

                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/color/25/network.png" alt="network" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Network Design</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Web development</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/color/25/domain--v1.png" alt="domain--v1" />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <img width="30" height="30" src="https://img.icons8.com/offices/30/php-logo.png" alt="php-logo" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">PHP</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/fluency/25/node-js.png" alt="node-js" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Node Runtime</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/fluency/25/my-sql.png" alt="my-sql" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">MongoDB and MySQL</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Android Development</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/color/25/android-os.png" alt="android-os" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">.NET Frameworks</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/fluency/25/visual-studio.png" alt="visual-studio" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">version Control</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/25/external-version-control-game-development-flaticons-lineal-color-flat-icons.png" alt="external-version-control-game-development-flaticons-lineal-color-flat-icons" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TimeLine