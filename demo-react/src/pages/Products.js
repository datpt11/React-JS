import React, { Component } from 'react';
import axios from 'axios';
import {
    Container, Row, Col
} from 'reactstrap';
import './Products.css';
import CardItem from './CardItem';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/products').then(res => {
            this.setState({
                products: res.data
            });
        });
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <Row>
                    {
                        products.map((product, i) => (
                            <Col sm="4">
                                <CardItem key={i} product={product} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}
export default Products;