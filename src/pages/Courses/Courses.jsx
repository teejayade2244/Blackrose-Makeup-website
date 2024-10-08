/* eslint-disable react/no-unescaped-entities */
import Layout from "../../components/Layout"
import ReactPlayer from "react-player"
import image1 from "../../images/students 1.jpg"
import { useTypewriter } from "react-simple-typewriter"
import { IoCheckmarkDoneSharp } from "react-icons/io5"

function Courses() {
    const [text] = useTypewriter({
        words: [
            "  Discover the artistry and techniques that will elevate your makeup skills to a professional levelwith BlackRose Makeup's accredited training courses. Our comprehensive curriculum is designed to cater to all levels, from beginners to advanced artists, ensuring that every student can achieve their full potential.",
        ],
        typeSpeed: 30,
        loop: 1,
    })
    return (
        <Layout>
            <div className="bg-black">
                <div className="flex flex-col w-full md:flex-row items-center justify-evenly py-3 px-3 text-white ">
                    <div className="flex flex-col items-center md:w-[60%] py-4 md:px-6 px-2">
                        <h2 className="font-cinzel font-semibold md:text-2xl text-[17px] text-center md:text-left mb-2">
                            JOIN BLACKROSE MAKEUP'S ACCREDITED CLASSROOM
                            TRAINING
                        </h2>
                        <h3 className="text-[12px] font-Playfair md:text-[15px] text-center  mb-4">
                            {text}
                        </h3>
                        <ul className="text-center md:text-left mb-4 space-y-2 text-[12px] md:text-[15px] font-spectral">
                            <div className="flex items-center gap-x-3">
                                <IoCheckmarkDoneSharp className="h-5 w-5" />
                                <li>ACCREDITED TRAINING PROGRAMME</li>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <IoCheckmarkDoneSharp className="h-5 w-5" />
                                <li className="">
                                    BLACKROSE MAKEUP CERTIFICATION
                                </li>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <IoCheckmarkDoneSharp className="h-5 w-5" />
                                <li>FLEXIBLE PAYMENT OPTIONS</li>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <IoCheckmarkDoneSharp className="h-5 w-5" />
                                <li>CAREER PATHWAYS</li>
                            </div>
                        </ul>
                        <button className="text-black border bg-[#cccfd2] py-2 px-4 rounded">
                            EXPLORE OUR TRAINING PACKAGES
                        </button>
                    </div>
                    <div className="mt-6 md:mt-0 mx-5 md:w-[40%] border-4 border-[#939794]">
                        <img
                            src={image1}
                            alt="Classroom"
                            className="w-[600px] h-[400px] object-cover shadow-md"
                        />
                    </div>
                </div>
                <div className="border border-[#434141] mt-4"></div>
                <h2 className="text-center text-[18px] md:text-[22px] font-cinzel uppercase mt-8 mb-2 text-white">
                    See What Our Students Have to Say
                </h2>
                <p className="text-center text-[13px] md:text-[17px] font-Playfair mb-6 text-gray-300 px-4 md:px-20">
                    Our students come from diverse backgrounds and skill levels,
                    but they all share one thing in common - a passion for
                    makeup. Watch these testimonials and behind-the-scenes
                    videos to see how BlackRose Makeup's training has
                    transformed their skills and careers.
                </p>
                <div className="mt-5 w-full flex md:flex-row gap-x-7 px-5 gap-y-5 md:px-6 md:py-4 flex-col">
                    <div className="md:w-[50%]  bg-[#dee3de]/20 border-4 border-[#939794]">
                        <ReactPlayer
                            width="100%"
                            controls={true}
                            playing={true}
                            muted={true}
                            url="/Videos/testimonial 1.mp4"
                            loop={true}
                        />
                    </div>

                    <div className="md:w-[50%] bg-[#dee3de]/20 border-4 border-[#939794]">
                        <ReactPlayer
                            width="100%"
                            controls={true}
                            playing={true}
                            muted={true}
                            url="/Videos/video 4.mp4"
                            loop={true}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Courses
