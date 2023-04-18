import {Col} from "react-bootstrap";
import './style.css'
import ProductRating from "../ProductRating/productRating";

function ProductItem(props){
    const {productName, price, image, brand, rated} = props;

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }

    return (
        <Col lg={3} xl={3} md={3} sm={4}>
            <div className="product">
                <div className="product__img-container">
                    <img className="product__img" src={image} alt=""/>
                </div>
                <ProductRating star={rated}/>
                <p className="product__name">{productName}</p>
                <p className="product__brand">Thương hiệu: {brand}</p>
                <p className="product__price">{formatCurrency(price)}</p>
            </div>
        </Col>
    );
};

export default ProductItem;
