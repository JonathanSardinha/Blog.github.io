import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link></div>
              
                <Link  to="/create" className="contact">Contact Us</Link>
            
        </nav>
      );
}
 
export default Navbar;
