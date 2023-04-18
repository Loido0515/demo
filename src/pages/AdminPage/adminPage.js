import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../../common/components/Header/header";
import {Button, Col, Container, Row} from "react-bootstrap";
import Banner from "../../common/components/Banner/banner";
import ProductList from "../ProductPage/components/ProductList/productList";
import ProductTable from "./components/ProductTable/productTable";
import productAdminService from "../../common/api/productAdminService";


const AdminPage = () => {
    const navigate = useNavigate();
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login');
        }else {
            setReady(true);
        }
    }, []);

    console.log('isReady: ', isReady)

    return (
        <div>
            {
                isReady &&
                <div>
                    <Header/>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Quản lý danh sách sản phẩm</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProductTable />
                            </Col>
                        </Row>
                    </Container>
                </div>
            }

        </div>
    )
}

export default AdminPage
