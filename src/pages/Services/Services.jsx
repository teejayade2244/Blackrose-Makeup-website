import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import { motion } from "framer-motion"
import hair from "../../images/bg-2.jpg"
import makeup from "../../images/bg-3.jpg"
import bridal from "../../images/bridal 1.jpg"
import beauty from "../../images/bg-5.jpg"
import { AiOutlineGift } from "react-icons/ai"
import Modal from "react-modal"
import bridal2 from "../../images/bridal 2.jpg"
import bridal3 from "../../images/bridal 3.jpg"
import bridal4 from "../../images/bridal 4.jpg"
import bridal5 from "../../images/bridal 5.jpg"
import face1 from "../../images/bg-1.jpg" // Add images for face makeup
import face2 from "../../images/bg-2.jpg"
import face3 from "../../images/bg-1.jpg"
import eye1 from "../../images/bg-1.jpg" // Add images for eye makeup
import eye2 from "../../images/bg-2.jpg"
import eye3 from "../../images/bg-7.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { CgClose } from "react-icons/cg"

Modal.setAppElement("#root") // Set app element for accessibility

const bridalImages = [bridal, bridal2, bridal3, bridal4, bridal5]
const faceImages = [face1, face2, face3]
const eyeImages = [eye1, eye2, eye3]

function Services() {
    const [isBridalModalOpen, setIsBridalModalOpen] = useState(false)
    const [isFaceModalOpen, setIsFaceModalOpen] = useState(false)
    const [isEyeModalOpen, setIsEyeModalOpen] = useState(false)

    useEffect(() => {
        if (isBridalModalOpen || isFaceModalOpen || isEyeModalOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isBridalModalOpen, isFaceModalOpen, isEyeModalOpen])

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    }

    const openBridalModal = () => {
        setIsBridalModalOpen(true)
    }

    const closeBridalModal = () => {
        setIsBridalModalOpen(false)
    }

    const openFaceModal = () => {
        setIsFaceModalOpen(true)
    }

    const closeFaceModal = () => {
        setIsFaceModalOpen(false)
    }

    const openEyeModal = () => {
        setIsEyeModalOpen(true)
    }

    const closeEyeModal = () => {
        setIsEyeModalOpen(false)
    }

    return (
        <Layout>
            <div className="bg-black py-7 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <h1 className="text-white md:text-3xl text-2xl font-cinzel">
                            <span className="font-semibold font-cinzel">
                                OUR MAKEUP
                            </span>{" "}
                            <span className="font-light">SERVICES</span>
                        </h1>
                    </div>
                    <div className="flex text-[#70716f] justify-center lg:mb-5 items-center gap-x-4 px-12">
                        <div className="border border-[#504e4e] w-full"></div>
                        <AiOutlineGift className="w-16 h-16" />
                        <div className="border border-[#504e4e] w-full"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-7 gap-y-6 px-6 md:px-0">
                        {[
                            {
                                img: makeup,
                                title: "FACE MAKEUP",
                                desc: "Transform your look with expert face makeup services from Blackrose. We specializes in creating stunning looks tailored to enhance your natural features and bring out your unique beauty.",
                                onClick: openFaceModal,
                            },
                            {
                                img: hair,
                                title: "EYE MAKEUP",
                                desc: "Discover the artistry of our skilled makeup artist specializing in exquisite eye makeup. From sultry smoky eyes to elegant natural looks, our artist transforms your eyes into captivating focal points.",
                                onClick: openEyeModal,
                            },
                            {
                                img: bridal,
                                title: "BRIDAL MAKEUP",
                                desc: "On your special day, every detail matters. Our expert bridal makeup services ensure you look radiant and beautiful, just as you’ve always dreamed.",
                                onClick: openBridalModal,
                            },
                            {
                                img: beauty,
                                title: "HAIR MAKEUP",
                                desc: "Experience the artistry of our talented makeup artist who specializes in hair makeup. From bridal glam to red carpet elegance, our artist brings creativity and expertise to every hairstyle.",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="w-full md:max-w-xs max-w-96 p-4 border bg-gray-900 cursor-pointer border-[#524e4f]"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                onClick={service.onClick}
                            >
                                <div className="md:h-64 h-80 md:mb-7 mb-4 overflow-hidden">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-center text-white">
                                    <h1 className="text-lg font-bold">
                                        {service.title}
                                    </h1>
                                    <h3 className="text-sm font-thin">
                                        {service.desc}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isBridalModalOpen}
                onRequestClose={closeBridalModal}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
                shouldCloseOnOverlayClick={true}
            >
                <div className="bg-black lg:w-[600px] h-[600px] py-3 rounded-lg relative">
                    <div
                        onClick={closeBridalModal}
                        className="absolute top-2 right-2 z-50"
                    >
                        <CgClose className="h-6 w-6 text-white" />
                    </div>

                    <Carousel
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        interval={2000}
                        className="mt-6 max-w-[600px] max-h-[600px]"
                    >
                        {bridalImages.map((image, index) => (
                            <div
                                className="w-full max-w-[600px] max-h-[600px]"
                                key={index}
                            >
                                <img
                                    src={image}
                                    alt={`Bridal Makeup ${index + 1}`}
                                    className="w-full max-w-[600px] max-h-[600px] object-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Modal>

            <Modal
                isOpen={isFaceModalOpen}
                onRequestClose={closeFaceModal}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
                shouldCloseOnOverlayClick={true}
            >
                <div className="bg-black lg:w-[600px] h-[600px] py-3 rounded-lg relative">
                    <div
                        onClick={closeFaceModal}
                        className="absolute top-2 right-2 z-50"
                    >
                        <CgClose className="h-6 w-6 text-white" />
                    </div>

                    <Carousel
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        interval={2000}
                        className="mt-6 max-w-[600px] max-h-[600px]"
                    >
                        {faceImages.map((image, index) => (
                            <div
                                className="w-full max-w-[600px] max-h-[600px]"
                                key={index}
                            >
                                <img
                                    src={image}
                                    alt={`Face Makeup ${index + 1}`}
                                    className="w-full max-w-[600px] max-h-[600px] object-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Modal>

            <Modal
                isOpen={isEyeModalOpen}
                onRequestClose={closeEyeModal}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
                shouldCloseOnOverlayClick={true}
            >
                <div className="bg-black lg:w-[600px] h-[600px] py-3 rounded-lg relative">
                    <div
                        onClick={closeEyeModal}
                        className="absolute top-2 right-2 z-50"
                    >
                        <CgClose className="h-6 w-6 text-white" />
                    </div>

                    <Carousel
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        interval={2000}
                        className="mt-6 max-w-[600px] max-h-[600px]"
                    >
                        {eyeImages.map((image, index) => (
                            <div
                                className="w-full max-w-[600px] max-h-[600px]"
                                key={index}
                            >
                                <img
                                    src={image}
                                    alt={`Eye Makeup ${index + 1}`}
                                    className="w-full max-w-[600px] max-h-[600px] object-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Modal>
        </Layout>
    )
}

export default Services
