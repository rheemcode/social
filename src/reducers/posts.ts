import Posts from "../components/posts/Posts";
import { PostMessage, ActionType } from "../types";

const reducer = (posts: any[] = [], action: ActionType): any[] => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    // because `updating` and `liking` post is the same they both share thesame procedure
    case "UPDATE":
    case "LIKE":
      return posts.map((post: any) =>
        post.id === action.payload.id ? action.payload : post
      );

    case "DELETE":
      console.log(action.id);
      // console.log(posts.filter((post) => post.id == action.payload.id));
      return posts.filter((post) => post.id !== action.id);

    default:
      return posts;
  }
};

export default reducer;
