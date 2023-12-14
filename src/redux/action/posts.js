import * as api from "../../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log("Error in getPosts :", err);
  }
};

export const createPost = (post) => async (dispatch) => {
  console.log("create post in action :", post);
  try {
    const { data } = await api.createPost(post);
    console.log("response data from ourBackEnd :", data);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log("Error in createPost", err);
  }
};
