import axios from "axios";

const SERVER_URL = "https://test.gift-group.ir";

// @desc Get All Categories
export const getAllCategories = () => {
    const url = `${SERVER_URL}/api/product/getrows`;
    return axios.post(url)
}

// @desc Get All Sliders
export const getAllSliders = () => {
    const url = "https://gift-group.ir/api/product/getrows";
    return axios.post(url)
}

// @desc Get Top Products
export const getTopProducts = () => {
    const url = `${SERVER_URL}/api/product/getTopProducts`;
    return axios.post(url, {headers: {["Content-Type"]:["application/json"]}})
}

// @desc Get Store Products
export const getStoreProducts = () => {
    const url = `${SERVER_URL}/api/product/getStoreProducts`;
    return axios.post(url)
}