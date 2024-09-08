import { Link } from "react-router-dom";
import one from './../assist/02.jpg';
import two from './../assist/03.jpg';
import three from './../assist/05.jpg';
import { Heart } from "react-bootstrap-icons";
export default function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="container">
                <div className="box">
                    <h1 className='food'>Food<span style={{color:"#fe771c"}}>or.</span></h1>
                    <p className="text">Curabitur posuere felis in massa pulvinar, nec mollis nibh eleifend. Maecenas turpis mi. Vivamus pulvinar lobortis vehicula pellentesque. </p>
                </div>
                <div className="box">
                    <ul className="links">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
                <div className="box">
                    <ul className="d-flex gap-2">
                        <li><img src={one} alt="1"></img></li>
                        <li><img src={two} alt="2"></img></li>
                        <li><img src={three} alt="3"></img></li>
                    </ul>
                    <ul className="d-flex gap-2">
                        <li><img src={one} alt="1"></img></li>
                        <li><img src={two} alt="2"></img></li>
                        <li><img src={three} alt="3"></img></li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Made With {<Heart></Heart>} By Joudy Dawalibi</p>
        </div>
    )
}
    