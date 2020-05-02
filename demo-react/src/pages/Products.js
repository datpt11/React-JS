import React, { Component } from 'react';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
    Container, Row, Col, Card
} from 'reactstrap';
import './Products.css';
import CardItem from './CardItem';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentPage: 1,
            perPage: 3
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    componentDidMount() {
        axios.get('http://localhost:8080/products').then(res => {
            this.setState({
                products: res.data
            });
        });
    }
    render() {
        const { products, currentPage, perPage } = this.state;
        const end = currentPage * perPage;
        const start = end - perPage;
        const currentProducts = products.slice(start, end);
        const renderProducts = currentProducts.map((product, i) => {
            return <Col sm="4">
                <CardItem key={i} product={product} />
            </Col>
        });
        const pageNumbers = [];
        for (let i = 1; i < Math.ceil(products.length / perPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return <PaginationItem>
                <PaginationLink id={number} key={number} onClick={this.onChangePage}>
                    {number}
                </PaginationLink>
            </PaginationItem>
        });
        return (
            <Container>
                <Row>
                    {renderProducts}
                </Row>
                <Row style={{ marginTop:"20px" }}>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        {renderPageNumbers}
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                    </Pagination>
                </Row>
            </Container>
        );
    }
}
export default Products;