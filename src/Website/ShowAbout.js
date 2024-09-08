import { Col, Container, Row } from "react-bootstrap";
import foodplate from './../assist/food_plate.png';
import RandomNumber from "./RandomNumber";


export default function ShowAbout(){
    return(
        <>
        <section id='show' style={{padding:"60px 0"}}> 
        <Container>
        <Row>
            <Col md={6} sm={4}>
            <img src={foodplate} alt="foodplate" className="img-fluid"></img>
            </Col>
            <Col md={6} sm={4}>
            <h1 className="title display-6 fw-bold">Food Is An Important Part Of Balance Diet</h1>
            <p className="fs-5">Vivamus convallis, justo eu convallis vehicula, erat mauris porttitor diam, sed aliquet lacus orci eget odio. Nulla ullamcorper ac lorem id maximus. Vestibulum nisi odio, ultrices accumsan semper et, faucibus ut quam.
            Aliquam ullamcorper aliquet accumsan. Quisque bibendum suscipit viverra. Aliquam nec sapien luctus, scelerisque diam et, consequat purus. Fusce quis velit vel enim elementum egestas sit amet eu mauris. Suspendisse quis lectus leo. In congue lacus pharetra dolor volutpat porta.</p>
            <div className="d-flex flex-wrap gap-3">
            <div className="p-4 ms-4 shadow-lg rounded fw-bold" style={{color:"#fe771c"}}>{<RandomNumber></RandomNumber>}<span>Food Deliverd</span></div>
            <div className="p-4 ms-4 shadow-lg rounded fw-bold" style={{color:"#fe771c"}}>{<RandomNumber></RandomNumber>}<span>Satisfied</span></div>
            <div className="p-4 ms-4 shadow-lg rounded fw-bold" style={{color:"#fe771c"}}>{<RandomNumber></RandomNumber>}<span>Experience</span></div>
            </div>
            </Col>
        </Row>
        </Container>
        </section>
        </>
    )
}