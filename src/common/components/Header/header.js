import './header.css'
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function Header(){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const handleGoToAdminPage = () => {
        navigate("/admin");
    }

    const isLoggedIn = localStorage.getItem("token");

    return (
        <div className={"header-container"}>
            <div className={"header__left"}>
                <Link to={"/"}>
                    <h3>TRANG CHỦ</h3>
                </Link>
            </div>
            <div className={"header__right"}>
                <Button onClick={handleGoToAdminPage}>
                    Admin Page
                </Button>
                {
                    isLoggedIn &&
                    <Button onClick={handleLogout}>
                        Đăng xuất
                    </Button>
                }
            {/* <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i class="fab fa-youtube"></i></a>
                    </div> */}
            </div>
        </div>
    )
};

export default Header;
