import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import './Products.css';
import CardContext from '../contexts/CardContext';
class CardItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <Card>
                <CardImg
                    top width="100%"
                    src={product.imageUrl}
                    alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text1line">{product.name}</CardTitle>
                    <CardText className="text2line">{product.description}</CardText>
                    <CardContext.Consumer>
                        {({ addToCard }) =>
                            <Button onClick={() => addToCard(product)}>Add to cart</Button>
                        }
                    </CardContext.Consumer>
                </CardBody>
            </Card>
        );
    }
}
export default CardItem;