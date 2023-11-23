import {createContext} from "react";

export const AppContext = createContext({
    loading: false, setLoading: () => {},
    isOverflowHidden: false, setIsOverflowHidden: () => {},
    categories: {}, setCategories: () => {},
    sliders: {}, setSliders: () => {},
    topProducts: {}, setTopProducts: () => {},
    stopBodyScrolling: () => {},
})