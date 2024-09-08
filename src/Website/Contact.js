import {  Col, Container, Row } from "react-bootstrap";
import contact from './../assist/mobile_apps.png';
import { Apple } from "react-bootstrap-icons";
import { Google } from "react-bootstrap-icons";
export default function Contact(){
    return(
        <section id="contact" style={{padding:"80px 0"}}> 
        <Container>
            <Row className="justify-content-center align-items-center ">
                <Col sm={4} md={5}>
                <img src={contact} alt="n" className="img-fluid"></img>
                </Col>
                <Col sm={4} md={7}>
                <h1 className="title">Get More Feature With Our Mobile Application</h1>
                <p className="py-4 fw-bold text-body-secondary ">Donec vitae porta felis. Donec est est, pretium sit amet nibh sed, blandit tincidunt urna. Donec laoreet eu felis et tristique. Morbi pretium convallis mauris. Quisque iaculis dolor sollicitudin est consectetur.</p>
                <div className="d-flex flex-column  gap-3">
                    <div className="d-flex gap-2 ">
                        <div className="circle"> 1</div> 
                        <p className="fw-bold fs-5"> Follow Delivery Status</p> 
                        </div>
                    <div className="d-flex gap-2 ">
                        <div className="circle"> 2</div> 
                        <p className="fw-bold fs-5">  Order From Any Location</p> 
                        </div>
                    <div className="d-flex gap-2 ">
                        <div className="circle"> 3</div> 
                        <p className="fw-bold fs-5">  Get Important Notices</p> 
                        </div>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                    <button className="btn  py-2 shadow px-2 my-4 s"> <Apple className="apple"></Apple> Available On App Store</button>
                    <button className="btn  py-2 px-2 shadow my-4 goo"> <Google className="apple"></Google> Available On Google Store</button>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}