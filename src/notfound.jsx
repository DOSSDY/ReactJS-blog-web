import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>
                sorry
            </h2>
            <p>
                not found
            </p>
            <Link to="/">
                Back to home page dog
            </Link>
        </div>
     );
}
 
export default NotFound;