import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import burger from './../assist/burger-icon.png';
import meat from './../assist/meat-icon.png';
import potato from './../assist/potato-icon.png';
import fish from './../assist/fish-icon.png';
import Cards from './Cards';


const group1=[
    {
    image:require("./../assist/food_01.jpg"),
    title:"Chicken And Olive Pizza",
    point:"4.5",
    price:"19.00"
    },
    {
    image:require("./../assist/food_02.jpg"),
    title:"Chicken Masala",
    point:"4.5",
    price:"19.00"
    },
    {
    image:require("./../assist/food_03.jpg"),
    title:"Rosted Chicken",
    point:"4.5",
    price:"19.00"
    },
    {
    image:require("./../assist/food_04.jpg"),
    title:"Chicken Wings",
    point:"4.5",
    price:"19.00"
    },
]
const group2=[
    {
        image:require("./../assist/food_02.jpg"),
        title:"Chicken Masala",
        point:"4.5",
        price:"19.00"
    },
    {
        image:require("./../assist/food_03.jpg"),
        title:"Rosted Chicken",
        point:"4.5",
        price:"19.00"
    },
    {
    image:require("./../assist/food_01.jpg"),
    title:"Chicken And Olive Pizza",
    point:"4.5",
    price:"19.00"
    },
    {
    image:require("./../assist/food_04.jpg"),
    title:"Chicken Wings",
    point:"4.5",
    price:"19.00"
    },
]
const group3=[
    {
        image:require("./../assist/food_02.jpg"),
        title:"Chicken Masala",
        point:"4.5",
        price:"19.00"
    },
    {
    image:require("./../assist/food_04.jpg"),
    title:"Chicken Wings",
    point:"4.5",
    price:"19.00"
    },
    {
        image:require("./../assist/food_03.jpg"),
        title:"Rosted Chicken",
        point:"4.5",
        price:"19.00"
    },
    {
    image:require("./../assist/food_01.jpg"),
    title:"Chicken And Olive Pizza",
    point:"4.5",
    price:"19.00"
    },
]
const group4=[
    {
        image:require("./../assist/food_04.jpg"),
        title:"Chicken Wings",
        point:"4.5",
        price:"19.00"
    },
    {
        image:require("./../assist/food_03.jpg"),
        title:"Rosted Chicken",
        point:"4.5",
        price:"19.00"
    },
    {
        image:require("./../assist/food_02.jpg"),
        title:"Chicken Masala",
        point:"4.5",
        price:"19.00"
    },
    {
    image:require("./../assist/food_01.jpg"),
    title:"Chicken And Olive Pizza",
    point:"4.5",
    price:"19.00"
    },
]


const show1=group1.map((card,index)=>
<Cards key={index} image={card.image} title={card.title} point={card.point} price={card.price}></Cards>)


const show2=group2.map((card,index)=>
<Cards key={index} image={card.image} title={card.title} point={card.point} price={card.price}></Cards>)
const show3=group3.map((card,index)=>
<Cards key={index} image={card.image} title={card.title} point={card.point} price={card.price}></Cards>)
const show4=group4.map((card,index)=>
<Cards key={index} image={card.image} title={card.title} point={card.point} price={card.price}></Cards>)

export default function Menu(){
    return(
        <>
        <section id="menu" className="bg-body-tertiary">
        <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <h1 className='title'>Quick Pick Food</h1>
        <Row>
        <Col sm={3}>
        <Nav variant="tabs" className="flex-column gap-4">
            <Nav.Item>
                <Nav.Link eventKey="first" className='px-3 py-3 fs-5 shadow-sm text-center fw-bold  rounded-pill select'><img src={meat} alt='meat'></img> All Chiken Dish</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second" className='px-3 py-3 fs-5 shadow-sm text-center fw-bold  rounded-pill select'><img src={fish} alt='fish'></img> All Seafood Dish</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third" className='px-3 py-3 fs-5 shadow-sm text-center fw-bold  rounded-pill select'><img src={burger} alt='burger'></img> Burger & Fries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="fourth" className='px-3 py-3 fs-5 shadow-sm text-center fw-bold  rounded-pill select'><img src={potato} alt='potato'></img >Value Combo Back</Nav.Link>
            </Nav.Item>
            </Nav>
        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="first">
                <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"space-evenly"}}>{show1}</div>
                </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"space-evenly"}}>{show2}</div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"space-evenly"}}>{show3}</div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"space-evenly"}}>{show4}</div>
            </Tab.Pane>
            </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
    </Container>
        </section>
        </>
    )
}