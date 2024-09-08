import { Col, Container, Row } from "react-bootstrap";
import ClientsCard from "./ClientsCard";


export default function Clients(){
    const data=[
        {
            name:"John Duo",
            img:require('./../assist/author_03.png'),
            text: "Nam facilisis id metus non mollis. Curabitur euismod in augue eu efficitur. Etiam imperdiet pretium nulla quis egestas. Aliquam ac bibendum erat, sed fermentum urna. Pellentesque vel dictum libero."
        },
        {
            name:"Mark Kokol",
            img:require('./../assist/author_02.png'),
            text: "Nam facilisis id metus non mollis. Curabitur euismod in augue eu efficitur. Etiam imperdiet pretium nulla quis egestas. Aliquam ac bibendum erat, sed fermentum urna. Pellentesque vel dictum libero."
        },
        {
            name:"Dax Flex ",
            img:require('./../assist/author_01.png'),
            text: "Nam facilisis id metus non mollis. Curabitur euismod in augue eu efficitur. Etiam imperdiet pretium nulla quis egestas. Aliquam ac bibendum erat, sed fermentum urna. Pellentesque vel dictum libero."
        }
    ]
    const show=data.map((card,index)=> <ClientsCard key={index} name={card.name} img={card.img} text={card.text}></ClientsCard>)
    return(
        <section className="clients">
            <Container>
                <Row>
                    <h1 className="title">What Our Clients Are Saying</h1>
                    <Col>
                    <div className="d-flex flex-wrap gap-3 flex-row">
                        {show}
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}