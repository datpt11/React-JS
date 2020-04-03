import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                "id": "4e256896-52a1-4d4f-b317-92ffca647315",
                "name": "Gingerale - Schweppes, 355 Ml",
                "description": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "d84066b8-1b08-4989-960f-be1ade255bf5",
                "name": "Bread - Italian Roll With Herbs",
                "description": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "a063af25-5e57-411d-8202-c9b87cadb68c",
                "name": "Cheese - Brie Roitelet",
                "description": "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "f6135e38-9761-439b-a0a4-dfaf24c70b8f",
                "name": "Cauliflower",
                "description": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "1ca24bc0-4374-4781-86e7-a93b8adff7a9",
                "name": "Crab Meat Claw Pasteurise",
                "description": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "b3ec588e-10a9-4341-b6bb-f6fa4e09bf33",
                "name": "Wine - Alicanca Vinho Verde",
                "description": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "5b493ef7-500c-49e8-836d-f65c79bd7c85",
                "name": "Veal - Ground",
                "description": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "b334ae86-d8d5-4626-bdea-955f00be2d41",
                "name": "Cheese - Roquefort Pappillon",
                "description": "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "71fdf716-d349-4004-a0ec-f7e9050e4dec",
                "name": "Lychee - Canned",
                "description": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "ec11cd0c-4838-4596-85da-7b5da39866b5",
                "name": "Bols Melon Liqueur",
                "description": "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "3259dfab-658d-4f56-8813-f4fb2d3a349c",
                "name": "Veal - Provimi Inside",
                "description": "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "5462d1b4-1c21-402f-a619-efdcc379334b",
                "name": "Flour - All Purpose",
                "description": "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "893f2feb-5414-41db-af9c-8822531c1e8f",
                "name": "Wine - Jaboulet Cotes Du Rhone",
                "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "371908d1-cd77-4e7b-9b32-6ad1bdb29723",
                "name": "Tea - Orange Pekoe",
                "description": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "cacb4632-9719-41a9-991d-6ed4a3eab613",
                "name": "Tomatoes - Hot House",
                "description": "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "af8fe32e-c58d-47bd-8672-d84aa7f1794f",
                "name": "Squash - Pattypan, Yellow",
                "description": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "17107c99-b8e4-455e-9b6d-5df8186cebd6",
                "name": "Tomatoes - Roma",
                "description": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "e8049f67-6546-4ac5-85af-727bf10eb272",
                "name": "Filter - Coffee",
                "description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "0eb1a98a-da1a-4d5e-9910-61def5da5e42",
                "name": "Cheese - Havarti, Salsa",
                "description": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "311b85a2-77d9-486b-b1d1-d8507600f340",
                "name": "Steel Wool",
                "description": "sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }]
        };
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <Row>
                    {
                        products.map(product => (
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        top width="100%"
                                        src={product.imageUrl}
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{product.name}</CardTitle>
                                        <CardText>{product.description}</CardText>
                                        <Button>Add to cart</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}
export default Products;