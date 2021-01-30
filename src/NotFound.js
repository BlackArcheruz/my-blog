import NotFoundImg from '../src/img/Not_Found.png';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={NotFoundImg} alt="Not Found"/>
            <h2>Sorry</h2>
            <p>That page can't be found</p>
            <br/>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
 
export default NotFound;