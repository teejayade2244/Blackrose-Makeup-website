import Footer from "./Footer"
import NavBar from "./Navbar"

// Layout.js
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
