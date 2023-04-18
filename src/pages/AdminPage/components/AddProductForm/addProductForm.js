import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProductForm = ({onCreateProductClicked}) => {
    const [productInput, setProductInput] = useState({
       productName: '',
       price: '',
       image: '',
       trademark:'',
       rated: '',
    });

    const handleInputChange = (e) => {
        const field = e.target.id;
        const value = e.target.value;
        setProductInput({...productInput, [field]: value});
    };

    const handleAddButtonClicked = () => {
        console.log('Clicked')
        if(onCreateProductClicked){
            onCreateProductClicked(productInput)
        }
    }
    return (
        <div>
            <Form.Group className="mb-3" controlId={"productName"}>
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control type="email" placeholder="Tên sản phẩm" value={productInput.productName} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId={"price"}>
                <Form.Label>Giá</Form.Label>
                <Form.Control type="email" placeholder="Giá sản phẩm" value={productInput.price} onChange={handleInputChange}/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId={"rated"}>
                <Form.Label>Thương hiệu</Form.Label>
                <Form.Control type="email" placeholder="Tên thương hiệu" value={productInput.trademark} onChange={handleInputChange}/>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId={"image"}>
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control type="email" placeholder="Hình ảnh" value={productInput.image} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId={"rated"}>
                <Form.Label>Số vote</Form.Label>
                <Form.Control type="email" placeholder="Đánh giá" value={productInput.rated} onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="primary" onClick={handleAddButtonClicked}>
                Thêm
            </Button>
        </div>
    )
}

export default AddProductForm;
