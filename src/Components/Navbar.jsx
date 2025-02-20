import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
    return (
        <>
          <div className="nav">
            <h2 className="nav-brand">Gadgets Blog</h2>
            <ul className="menu">
            <li><Link to="/" style={{textDecoration: "none"}} className="menu-btn">Home</Link></li>
            {/* <li><Link to="/newblog" style={{textDecoration: "none"}} className="menu-btn">New Blog</Link></li> */}
            <li><Link to="/exchangerates" style={{textDecoration: "none"}} className="menu-btn">Exchange Rates</Link></li>
            </ul>
          </div>
        </>
    )
}

export default Navbar;