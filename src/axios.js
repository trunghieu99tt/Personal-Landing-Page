import axios from "axios";

const instance = axios.create({
	baseURL: "https://portfolio-f24e2.firebaseio.com/",
});

export default instance;
