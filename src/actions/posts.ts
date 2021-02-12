import * as api from "../api";
import { PostMessage } from "../types";

//Action creators

export const getPosts = (): Function => async (dispatch: Function) => {
  try {
    const { data }: any = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createPost = (post: PostMessage): Function => async (
  dispatch: Function
) => {
  try {
    const { data }: any = await api.createPosts(post);
    console.log(data);
    dispatch({ type: "CREATE", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const updatePost = (
  id: string | number,
  post: PostMessage
): Function => async (dispatch: Function) => {
  try {
    const { data } = await api.updatePosts(id, post);
    console.log(data);
    dispatch({ type: "UPDATE", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id: string | number | undefined): Function => async (
  dispatch: Function
) => {
  try {
    await api.deletePosts(id);
    dispatch({ type: "DELETE", id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: string | number | undefined): Function => async (
  dispatch: Function
) => {
  try {
    console.log(id);
    const { data } = await api.likePost(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (e) {
    console.log(e);
  }
};
