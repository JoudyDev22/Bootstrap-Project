import { Container,Row,Col} from "react-bootstrap";
import food from './../assist/food.png';
import NavBar from "../Components/NavBar";
import fastfood from './../assist/fast-food-icon.png';
import desert from './../assist/desert-icon.png';
import glass from './../assist/glass-icon.png';
import nonveg from './../assist/non-veg-icon.png';
import About from "./About";
import Menu from "./Menu";
import ShowAbout from "./ShowAbout";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";





export default function HomePage(){
    return(
        <>
        <NavBar></NavBar>
        <section className="home" id="home">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col lg={6} sm={7} >
                    <h1 className="display-2 fw-bold">Enjoy Our Delicious Meal </h1>
                    <p className="my-4 fw-bold">Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac rutrum neque, vel congue tellus duis venenatis nisi ligulavarius.</p>
                    </Col>
                    <Col lg={6} sm={4} >
                    <img src={food} alt="food" className="img-fluid"></img>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center " >
                    <Col>
                    <div className="d-flex flex-row mb-3 justify-content-between flex-wrap gap-2 ">
                    <div className="px-5 py-4 fs-5 shadow-lg text-center fw-bold  rounded-pill"><img src={nonveg} alt="photo2"></img> Non-Veg</div>
                    <div className="px-5 py-4 fs-5 shadow-lg text-center fw-bold  rounded-pill"><img src={fastfood} alt="photo1"></img>Fast Food</div>
                    <div className="px-5 py-4 fs-5 shadow-lg text-center fw-bold  rounded-pill"><img src={desert} alt="photo3"></img> Dessert</div>
                    <div className="px-5 py-4 fs-5 shadow-lg text-center fw-bold  rounded-pill"><img src={glass} alt="photo4"></img>  Cocktails</div>
                    </div>
                    </Col>
                </Row>
            </Container>
                <About></About>
                <Menu></Menu>
                <ShowAbout></ShowAbout>
                <Clients></Clients>
                <Contact></Contact>
                <Footer></Footer>
        </section>
        </>
    )
}