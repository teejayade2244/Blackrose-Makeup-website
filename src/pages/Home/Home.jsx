import { useEffect } from "react"
import { motion } from "framer-motion"
import "./Home.css" // Ensure you import the CSS file
import NavBar from "../../components/Navbar"
import { useNavigate } from "react-router-dom"
function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        // Prevent scrolling
        document.body.style.overflow = "hidden"
        // Cleanup to re-enable scrolling on component unmount
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return (
        <div className="home-container">
            <div className="slider">
                <div className="overlay"></div>
                <NavBar />
                <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center main-content">
                    <motion.div
                        className="flex flex-col gap-y-4 justify-center items-center mt-[10px] md:mt-[100px] md:py-[70px] md:px-10 py-5 px-3"
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-white flex flex-col justify-center items-center">
                            <p className="text-center text-[24px] font-cinzel">
                                Welcome to
                            </p>
                            <h1 className="font-Sedan uppercase font-bold md:text-5xl text-4xl text-center mb-4 mt-2">
                                Black Rose MUA
                            </h1>
                            <p className="text-center font-light text-[11px] md:text-[13px] lg:text-[20px] font-Sans mb-3">
                                We believe in beauty that empowers. Our makeup
                                skills are designed to enhance your natural
                                beauty <br className="hidden md:inline" />
                                while nourishing your skin. Join us on our
                                journey to redefine beauty standards.
                            </p>
                            <button
                                onClick={() => navigate("/contact")}
                                className="text-white shadow-md border-none bg-[#636262] text-[20px] font-Belleza mt-3 animate-pulse border py-2 px-8 rounded-md"
                            >
                                BOOK AN APPOINTMENT!
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home


