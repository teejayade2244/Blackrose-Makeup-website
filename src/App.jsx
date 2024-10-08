import "./App.css"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Courses from "./pages/Courses/Courses"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses" element={<Courses />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
