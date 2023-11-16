import axios from "axios";

const SERVER_URL = "https://test.gift-group.ir";

// @desc Get All Categories
// @route GET http://localhost:3000
export const getAllCategories = () => {
    const url = `${SERVER_URL}/api/product/getrows`;
    return axios.post(url)
}

// @desc Get All Sliders
// @route GET http://localhost:3000
export const getAllSliders = () => {
    const url = "https://gift-group.ir/api/product/getrows";
    return axios.post(url)
}