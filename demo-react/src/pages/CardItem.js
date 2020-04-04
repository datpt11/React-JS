import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import './Products.css';
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
                    <Button>Add to cart</Button>
                </CardBody>
            </Card>
        );
    }
}
export default CardItem;