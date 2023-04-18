import React from "react";
import {Container, Row} from "react-bootstrap";
import Header from "../../common/components/Header/header";
import Banner from "../../common/components/Banner/banner";
import './style.css'
import ProductList from "./components/ProductList/productList";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Banner/>
                    </Row>
                    <Row>
                        <ProductList />
                    </Row>
                </Container>
            </div>
        )
    }
};



export default ProductPage;
