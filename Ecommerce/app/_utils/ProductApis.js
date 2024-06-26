import  axiosClient from "./axiosClient";


const getLatestProducts = () => axiosClient.get('/products?populate=*').then(res => res.data)

const getProductByID = (id) => axiosClient.get(`/products/${id}?populate=*`).then(res => res.data)

const getRelatedProductByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`).then(res => res.data)


export default {
    getLatestProducts,
    getProductByID,
    getRelatedProductByCategory
}