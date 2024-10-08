import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../images/logo.png"
import { RiMenu3Fill } from "react-icons/ri"
import { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("menu-open")
        } else {
            document.body.classList.remove("menu-open")
        }
    }, [showMenu])

    const menuVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.1 },
        },
    }

    return (
        <div className="bg-black py-3 px-3 sticky top-0 z-10">
            <div className="flex relative justify-between items-center md:px-10">
                <Link to={"/"}>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:h-16 md:w-16 h-16 w-16 object-contain"
                        src={logo}
                        alt="Logo"
                    />
                </Link>

                <div>
                    <RiMenu3Fill
                        onClick={() => setShowMenu(true)}
                        className="md:hidden flex text-white h-8 w-8"
                    />
                </div>
                <AnimatePresence>
                    {showMenu && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            className="md:hidden z-10 fixed bg-black text-white w-full inset-0 py-3"
                        >
                            <div className="flex justify-end px-3 py-2">
                                <AiOutlineClose
                                    onClick={() => setShowMenu(false)}
                                    className="md:hidden flex text-white h-7 w-7"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-y-10 mt-9">
                                <motion.div variants={itemVariants}>
                                    <NavLinks to={"/"} name={"Home"} />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <NavLinks to={"/about"} name={"About"} />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <NavLinks
                                        to={"/services"}
                                        name={"Services"}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <NavLinks
                                        to={"/contact"}
                                        name={"Contact"}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <NavLinks
                                        to={"/courses"}
                                        name={"Courses"}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <nav className="md:flex items-center hidden gap-x-10">
                    <NavLinks to={"/"} name={"Home"} />
                    <NavLinks to={"/about"} name={"About"} />
                    <NavLinks to={"/services"} name={"Services"} />
                    <NavLinks to={"/contact"} name={"Contact"} />
                    <NavLinks to={"/courses"} name={"Courses"} />
                </nav>
            </div>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function NavLinks({ to, name }) {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <NavLink
                to={to}
                className={`text-white font-Playfair font-light text-[20px] md:text-[18px] cursor-pointer relative nav ${
                    isActive ? "active" : ""
                }`}
            >
                {name}
            </NavLink>
        </motion.div>
    )
}

export default NavBar
