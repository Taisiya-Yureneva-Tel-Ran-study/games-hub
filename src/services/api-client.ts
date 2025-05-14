import axios from "axios";

export default axios.create({
    baseURL: "https://rawg.io/api",
    params: {
        key: 'f34b3ca23cd442618055b893c371ebcd',
    },
})