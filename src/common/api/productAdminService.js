import axiosClient from "./axiosClient";


const BASE_PATH = "/api/admin/v1/products"

const getHeaderConfig = () => {
    return {
        headers: {
            token: localStorage.getItem("token")
        }
    };
}



const getProducts = (page, size) => {
    return axiosClient.get(BASE_PATH + `?page=${page}&size=${size}`, getHeaderConfig());
}

const deleteProduct = (productId) => {
    return axiosClient.delete(BASE_PATH + `/${productId}`, getHeaderConfig());
}

const createProduct = (product) => {
    return axiosClient.post(BASE_PATH, product, getHeaderConfig());
}

const updateProduct = (productId, product) => {
    return axiosClient.put(BASE_PATH + `/${productId}`, product, getHeaderConfig());
}


const productAdminService = {
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct
};

export default productAdminService;