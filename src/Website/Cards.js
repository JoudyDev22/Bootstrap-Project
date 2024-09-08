import Card from 'react-bootstrap/Card';
import { Star } from 'react-bootstrap-icons';

export default function Cards(props) {
    return (
    <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title className='text'>{props.title}</Card.Title>
        <Card.Text style={{fontWeight:"bold"}}><Star style={{color:"#fe771c",fontSize:"18px"}}></Star> {props.point}  $ <span style={{color:"#fe771c"}}>{props.price}</span></Card.Text>
        </Card.Body>
    </Card>
    );
}

