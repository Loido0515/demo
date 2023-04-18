import {useEffect, useState} from "react";
import axios from "axios";
import productService from "../../../../common/api/productService";
import productAdminService from "../../../../common/api/productAdminService";
import {Button, Col, Modal, Row, Table} from "react-bootstrap";
import ProductRowItem from "../ProductRowItem/productRowItem";
import Paging from "../../../../common/components/Pagination/pagination";
import AddProductForm from "../AddProductForm/addProductForm";
import {useNavigate} from "react-router-dom";


const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [reload, setReload] = useState(false);
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        console.log('Token: ', localStorage.getItem("token"));
        productAdminService.getProducts(page, 10)
            .then(response => {
                const products = response.data.content;
                console.log(response.data)
                const totalPage = response.data.totalPages;
                setProducts(products);
                setTotalPage(totalPage);
                // if(totalPage <= page){
                //     setPage(totalPage-1);
                // }
            })
            .catch(error => {
                alert('Da xay ra loi vui long thu lai sau');
            })
    }, [page, reload]);

    const handleDeleteProduct = (productId) => {
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')){
            productAdminService.deleteProduct(productId)
                .then(response => {
                    alert('Xóa thành công!');
                    setReload(!reload);
                })
                .catch(error => {
                    alert('Đã xảy ra lỗi vui lòng thử lại sau');
                })
        }
    }

    const handleCreateProductButtonClicked = () => {
        const product = {
            productName: 'Samsung galaxy',
            price: 20000000,
            image: "https://cdn.tgdd.vn/Products/Images/522/269327/ipad-pro-m1-11-inch-wifi-1tb-2021-bac-thumb-600x600.jpeg",
            rated: 2,
        };

        productAdminService.createProduct(product)
            .then(response => {
                setReload(!reload);
            })
            .catch(error => {
                alert('Them loi');
            })
    }

    const handleCreateProduct = (product) => {
        console.log(product);
        productAdminService.createProduct(product)
            .then(response => {
                alert('Thêm thành công');
                setShow(false);
                setReload(!reload);
            })
            .catch(error => {
                alert('Them loi');
            })
    }


    return (
        <div>
            <Row>
                <Col>
                    <Button onClick={handleShow}>Thêm sản phẩm</Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Hình ảnh</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {
                    products.map(product => {
                        return <ProductRowItem
                            onDeleteButtonClicked={handleDeleteProduct}
                            product={product}
                            key={product.id}/>
                    })
                }
                </tbody>
            </Table>
            <Row>
                <Paging page={page + 1}
                        totalPage={totalPage}
                        onPageClick={(page) => {setPage(page - 1)}}
                />
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProductForm onCreateProductClicked={handleCreateProduct}/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProductTable;
