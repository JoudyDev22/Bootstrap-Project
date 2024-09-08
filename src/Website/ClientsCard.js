import Card from 'react-bootstrap/Card';
export default function ClientsCard(props){
    return(
        <Card>
        <Card.Header><img src={props.img}></img> {props.name}</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
            {' '}
            {props.text}
            {' '}
            </p>
            </blockquote>
        </Card.Body>
        </Card>
    )
}