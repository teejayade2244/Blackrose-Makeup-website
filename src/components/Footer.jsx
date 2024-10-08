import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { HiOutlinePhone } from "react-icons/hi2"
import { TfiLocationPin } from "react-icons/tfi"
import { SiGmail } from "react-icons/si"
import { motion } from "framer-motion"
import { IoIosArrowDropup } from "react-icons/io"
import logo from "../images/logo.png"
import { BsClock } from "react-icons/bs"
import { IoPerson } from "react-icons/io5"

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className="bg-[#131819] text-[#c6c8be]">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-start p-5 lg:px-0 gap-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="lg:w-1/3 px-2 lg:inline-block flex flex-col justify-center items-center md:px-7 md:mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-x-3 mb-3">
                        <IoPerson className="w-6 h-6" />
                        <h1 className="md:text-2xl font-semibold text-[20px] font-spectral mb-1">
                            About us
                        </h1>
                    </div>

                    <p className="font-Roboto text-center lg:text-start text-[15px] leading-relaxed">
                        Passionate makeup brand dedicated to enhancing natural
                        beauty with artistry. Specializing in personalized looks
                        for confident self-expression.
                    </p>
                    <motion.div
                        className="flex items-center gap-x-5 mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="h-10 w-10 bg-black flex items-center justify-center rounded-full">
                            <BsInstagram className="text-white h-6 w-6 cursor-pointer" />
                        </div>
                        <div className="h-10 w-10 bg-black flex items-center justify-center rounded-full">
                            <BsWhatsapp className="text-white h-6 w-6  cursor-pointer" />
                        </div>
                        <div className="h-10 w-10 bg-black flex items-center justify-center rounded-full">
                            <AiOutlineTwitter className="text-white h-6 w-6  cursor-pointer" />
                        </div>
                        <div className="h-10 w-10 bg-black flex items-center justify-center rounded-full">
                            <FaFacebookF className="text-white  h-6 w-6  cursor-pointer" />
                        </div>
                    </motion.div>
                </motion.div>
                <div className="border lg:hidden border-[#929090]"></div>
                <motion.div
                    className="lg:w-1/2 px-2 lg:inline-block flex flex-col justify-center items-center md:px-7 md:mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex items-center gap-x-3 mb-4">
                        <BsClock className="h-6 w-6 self-center" />
                        <h1 className="md:text-2xl font-semibold text-[20px] font-spectral mb-1">
                            Opening Hours
                        </h1>
                    </div>

                    <div className="flex items-center gap-x-4 ">
                        <p className="font-Roboto text-[15px] leading-relaxed">
                            Monday - Friday
                        </p>
                        <div className="border-dotted border w-[50px] md:w-[130px]"></div>
                        <p>8:00 AM - 7:00 PM</p>
                    </div>
                    <div className="flex items-center gap-x-4 ">
                        <p className="font-Roboto text-[15px] leading-relaxed">
                            Saturday & Sunday
                        </p>
                        <div className="border-dotted border w-[30px] md:w-[120px]"></div>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                </motion.div>
                <div className="border lg:hidden border-[#929090]"></div>
                <motion.div
                    className="lg:w-1/2 px-2 lg:inline-block flex flex-col justify-center items-center md:px-7"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h1 className="md:text-2xl font-semibold text-[20px] font-spectral mb-1">
                        Contact
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <TfiLocationPin className="h-5 w-6" />
                            <p className="font-Roboto text-[15px] leading-relaxed">
                                2, Piccadilly street lekki Lagos state Nigeria
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <HiOutlinePhone className="h-5 w-6" />
                            <a
                                href="tel:+2342202937636"
                                className="font-Roboto text-[15px] leading-relaxed"
                            >
                                +2342202937636
                            </a>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <SiGmail className="h-5 w-6" />
                            <a
                                href="mailto:Blackrosemakeupartistry@gmail.com"
                                className="font-Roboto text-[15px] leading-relaxed"
                            >
                                Blackrosemakeupartistry@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
                <div className="border lg:hidden border-[#929090]"></div>
            </motion.div>
            <div className="flex justify-between mx-4 md:mx-10 md:py-3 py-3t ">
                <div className="flex items-center gap-x-6">
                    <img
                        className="h-12 w-12 object-contain cursor-pointer"
                        src={logo}
                        alt=""
                    />
                    <p className="text-[13px]">
                        Copyright © 2024. All Rights Reserved.
                    </p>
                </div>

                <IoIosArrowDropup
                    className="h-9 w-9 md:h-10 md:w-10 animate-bounce cursor-pointer "
                    onClick={scrollToTop}
                />
            </div>
        </div>
    )
}

export default Footer
