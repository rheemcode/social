import axios from "axios";
import { PostMessage } from "../types";
const url: string = "https://memories-react-project-rheem.herokuapp.com/posts";

export const fetchPosts = async () => await axios.get(url);
//export const createPosts = (data: PostMessage) => axios.post(url, data);

export const createPosts = async (data: PostMessage) =>
  await axios.post(url, data);

export const updatePosts = async (id: string | number,updatedPost: PostMessage) => await axios.patch(`${url}/${id}`, updatedPost);
export const deletePosts = async (id: string | number | undefined) => await axios.delete(`${url}/${id}`);
export const likePost = async(id: string | number | undefined) => await axios.patch(`${url}/${id}/likePost`)
