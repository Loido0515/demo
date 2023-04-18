import {Col, Container, Row} from "react-bootstrap";
import './loginPage.css'
import LoginForm from "./components/LoginForm/loginForm";
import authService from "../../common/api/authService";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            navigate('/admin');
        }
    }, []);

    const handleLoginSubmitted = (username, password) => {
        authService.login(username, password)
            .then(response => {
                const data = response.data;
                localStorage.setItem('token', data.accessToken);
                navigate('/admin')
            })
            .catch(error => {
                alert('Đã xảy ra lỗi! Vui lòng điền thông tin đăng nhập và thử lại!');
            })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className={"login-title"}>ADMIN LOGIN</h2>
                </Col>
            </Row>

            <Row>
                <div className={"login-form-container"}>
                    <LoginForm
                        onSubmit={handleLoginSubmitted}
                    />
                </div>
            </Row>

        </Container>
    );
};

export default LoginPage;
