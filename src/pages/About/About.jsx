/* eslint-disable react/no-unescaped-entities */
import Layout from "../../components/Layout"
import image2 from "../../images/founder.jpg"
import image3 from "../../images/team1.jpg"
import image1 from "../../images/team 3.jpg"
import image6 from "../../images/team2.jpg"
// import image5 from "../../images/founder.jpg"
// import { ImQuotesLeft } from "react-icons/im"
import { BiSolidQuoteAltRight } from "react-icons/bi"
// Updated path to video
import { motion } from "framer-motion"
// import ReactPlayer from "react-player"
import "./About.css"

const testimonials = [
    {
        text: "Blackrose is fantastic! From someone who is very particular about their make up, Blackrose gave me the best makeover I could have imagined, and all worries flew away.",
        name: "Emily Betty",
        title: "Teacher at Uni",
        image: image2,
    },
    {
        text: "Blackrose is fantastic! From someone who is very particular about their make up, Blackrose gave me the best makeover I could have imagined, and all worries flew away.",
        name: "Betty Don",
        title: "Stylist at COA",
        image: image2,
    },
    {
        text: "Blackrose is fantastic! From someone who is very particular about their make up, Blackrose gave me the best makeover I could have imagined, and all worries flew away.",
        name: "Olivia Brown",
        title: "Fashion Artist",
        image: image2,
    },
]

function About() {
    return (
        <Layout>
            <div className="w-full bg-black text-white -z-40 flex flex-col gap-y-7 justify-center px-4 overflow-hidden min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col shadow-lg rounded-md md:flex-row max-w-7xl mx-auto px-3 py-3 mt-5 md:py-10 md:px-7"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="md:hidden flex justify-center md:justify-end px-3 rounded-lg border-2 shadow-lg py-5 mb-5"
                    >
                        <div className="bg-gray-800 overflow-hidden rounded-lg w-full max-w-md h-auto sm:w-96 sm:h-[500px]">
                            <img
                                src={image2}
                                alt="Akande Grace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4 }}
                        className="text-center md:text-left md:mb-0 md:pr-8"
                    >
                        <h2 className="md:text-xl text-[20px] font-light md:mb-5 text-[#9d9a9a]">
                            MEET THE FOUNDER
                        </h2>
                        <h1 className="text-4xl font-spectral md:text-3xl lg:text-5xl font-bold mt-2 md:mb-4">
                            FASANYA OLUWATOBI
                        </h1>
                        <p className="mt-4 leading-relaxed font-Sedan text-[16px] md:text-[20px]">
                            "Welcome to the world of Blackrose, where makeup
                            isn't just about aesthetics, but a transformative
                            journey towards self-expression and confidence.
                            Blackrose specializes in creating bespoke looks
                            tailored to accentuate your unique features, while
                            embracing your individuality."
                        </p>
                        <p className="mt-4 font-Sans mb-5 font-light leading-relaxed">
                            Join Blackrose in redefining beauty standards and
                            embracing your true essence, one brushstroke at a
                            time.
                        </p>
                        <button className="text-black bg-white shadow-md text-[20px] font-Belleza uppercase mt-3 md:mt-9 animate-pulse border py-2 px-8 rounded-md">
                            Get in Touch
                        </button>
                    </motion.div>

                    <div className="md:flex justify-center md:justify-end lg:px-3 py-3 hidden">
                        <div className="w-full max-w-md md:w-[350px] md:h-[400px] lg:w-96 lg:h-[500px] overflow-hidden border-4 border-[#939794]">
                            <motion.img
                                initial={{ y: "-100vw" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 2 }}
                                src={image2}
                                alt="Akande Grace"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="border border-[#434141]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="rounded-md max-w-7xl mx-auto w-full lg:px-5 md:px-5"
                >
                    <div className="flex items-center justify-center">
                        <div>
                            <h1 className="font-cinzel md:text-3xl text-[22px] md:mb-4 mb-2">
                                THE BLACKROSE MAKEUP TEAM
                            </h1>
                        </div>
                    </div>
                    <p className="md:text-[16px] text-[14px] text-center mb-7 font-light font-Belleza  ">
                        Our team of exceptional artists specializes in makeup
                        and hairstyling, bringing the highest levels of
                        expertise to each client. Renowned for their
                        professionalism and calm demeanor.
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-x-2 gap-y-16 md:gap-y-5 items-center">
                        <div className="relative cursor-pointer">
                            <div className="border-4 border-[#939794] transform transition-transform duration-300 ease-in-out hover:scale-105 ">
                                <img
                                    src={image2}
                                    alt="Monalisa"
                                    className="md:w-[270px] w-[300px]  h-[350px] md:h-[200px] lg:h-[350px] object-cover "
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute -bottom-5 md:left-6 left-9 border border-[#9b98aa]">
                                <h2 className="bg-black  py-3 px-4 w-56 text-white text-[12px] text-center cursor-pointer">
                                    Blackrose / Creative Director & Educator
                                </h2>
                            </div>
                        </div>
                        <div className="relative cursor-pointer">
                            <div className="border-4 border-[#939794] transform transition-transform duration-300 ease-in-out hover:scale-105">
                                <img
                                    src={image6}
                                    alt="Monalisa"
                                    className="md:w-[270px] w-[300px]  h-[350px] md:h-[200px] lg:h-[350px] "
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute -bottom-5 md:left-6 left-9 border border-[#9b98aa]">
                                <h2 className="bg-black  py-3 px-4 w-56 text-white text-[12px] text-center cursor-pointer">
                                    Grace / Graphics Designer & Multimedia
                                    Designer
                                </h2>
                            </div>
                        </div>

                        <div className="relative cursor-pointer">
                            <div className="border-4 border-[#939794] transform transition-transform duration-300 ease-in-out hover:scale-105">
                                <img
                                    src={image3}
                                    alt="Monalisa"
                                    className="md:w-[270px] w-[300px]  h-[350px] md:h-[200px] lg:h-[350px] "
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute -bottom-5 md:left-6 left-9 border border-[#9b98aa]">
                                <h2 className="bg-black  py-3 px-4 w-56 text-white text-[12px] text-center cursor-pointer">
                                    Ayomide / Makeup Artist
                                </h2>
                            </div>
                        </div>

                        <div className="relative cursor-pointer">
                            <div className="border-4 border-[#939794] transform transition-transform duration-300 ease-in-out hover:scale-105">
                                <img
                                    src={image1}
                                    alt="Monalisa"
                                    className="md:w-[270px] w-[300px]  h-[350px] md:h-[200px] lg:h-[350px] object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute -bottom-5 md:left-6 left-9 border border-[#9b98aa]">
                                <h2 className="bg-black py-3 px-4 w-56 text-white text-[12px] text-center cursor-pointer">
                                    Natalie / Secretary
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="border mt-6  border-[#434141]"
                ></motion.div>
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-cinzel md:text-3xl text-[22px] mb-2">
                            TESTIMONIALS
                        </h1>
                        <p className="text-[15px] text-center font-light font-Belleza  ">
                            SOME USERS FEEDBACK
                        </p>
                    </div>
                </div>

                <div className="bg-black text-white mb-7">
                    <div className="flex md:flex-row flex-col gap-y-5 justify-center gap-x-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-8 rounded-lg max-w-md"
                            >
                                <p className="mb-4 text-[14px]">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mr-4 mt-2 object-cover"
                                    />
                                    <div>
                                        <h3 className="text-[15px]">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-pink-500">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-end">
                                    <BiSolidQuoteAltRight className="h-10 w-10 text-gray-" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
