import axios from "axios";

const url = "http://localhost:5000/post";

export const fetchPost = () => axios.get(`${url}/getPosts`);
export const createPost = (newPost) => axios.post(`${url}/createPost`, newPost);
