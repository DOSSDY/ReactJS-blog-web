import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className="Navbar">
           <h1>
               The doss blog
           </h1>
           <div className="links">
               <Link to="/" style={{color: "whitesmoke", backgroundColor:"#f1356d", borderRadius : "8px"}}>
                   Home
               </Link>
               <Link to="/create" style={{color: "whitesmoke", backgroundColor:"#f1356d", borderRadius : "8px"}}>
                   NewBlog
               </Link>
           </div>
       </nav>
    );
}
 
export default Navbar;