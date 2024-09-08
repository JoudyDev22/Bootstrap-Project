import { Container,Row,Col } from "react-bootstrap";
import step1 from './../assist/step_01.png';
import step2 from './../assist/step_02.png';
import step3 from './../assist/step_03.png';
import step4 from './../assist/step_04.png';

export default function About(){
    return(
        <>
        <section id="about">
        <Container>
            <Row className="justify-content-center align-items-center ">
                <h1 className="title">Easy Order Steps</h1>
                <Col>
                <div  className="d-flex flex-row flex-wrap gap-1 p-2 ">
                <div>
                    <p className="fw-bold text-dark fs-5 text-center">Select your Restaurant</p>
                    <img src={step1} className="img-fluid" alt="one"></img>
                </div>
                <div>
                    <img src={step2} className="img-fluid" alt="tow"></img>
                    <p className="fw-bold text-dark fs-5 text-center">Select your Dish</p>
                </div>
                <div>
                    <p className="fw-bold text-dark fs-5 text-center">Pay Cash/Online</p>
                    <img src={step3} className="img-fluid" alt="three"></img>
                </div>
                <div>
                    <img src={step4} className="img-fluid" alt="four"></img>
                    <p className="fw-bold text-dark fs-5 text-center">Enjoy Your Meal</p>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
        </>
    )
}