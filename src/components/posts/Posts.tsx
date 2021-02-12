import Post from "./post/posts"
import {useSelector} from "react-redux";
import React from "react";
import useStyles from "./styles"
import {PostMessage} from "../../types"
import {Grid, CircularProgress} from "@material-ui/core"

interface Props{
    currentId?: string | number,
    setCurrentId: Function;
}

const Posts  =  (props : Props) =>{
    const classes = useStyles();
    const posts : PostMessage[] = useSelector((state:any) => state.posts);
    console.log(posts.length);
    return(
       !posts.length ? <CircularProgress aria-describedby = "progressBar"/> :
       <Grid className={classes.mainContainer} container={true} alignItems="stretch">
           {
               posts.map((post : PostMessage) =>{
                    return (<Grid item key={post.id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={props.setCurrentId} />
                    </Grid>);
               }) 
           }
       </Grid>
    );
}

export default Posts;