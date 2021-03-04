
import { Card, } from 'react-bootstrap'

const Cart = (props) => {

    return (
        <div className="col-lg-5 col-md-6 col-12 my-2">
            <Card style={{width:"100%"}}>
                <Card.Img variant="top" src={props.news.urlToImage}/>
                <Card.Body>
                    <Card.Title>{props.news.title}</Card.Title>
                    <Card.Text>
                        {props.news.content}
                    </Card.Text>
                    <p className='my-2'>Published At {props.news.publishedAt}</p>
                    <a href={props.news.url} className="btn btn-outline-secondary">For more information</a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;