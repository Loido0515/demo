import './productRowItem.css'
import {Button} from "react-bootstrap";

const ProductRowItem = ({product, onDeleteButtonClicked}) => {

    const handleDeleteButtonClicked = () => {
        if(onDeleteButtonClicked){
            onDeleteButtonClicked(product.id)
        }
    }

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>
                <img className={"admin-product-image"} src={product.image} alt=""/>
            </td>
            <td>
                <Button onClick={handleDeleteButtonClicked} variant="danger">Xóa</Button>
            </td>
        </tr>
    );
};

export default ProductRowItem;