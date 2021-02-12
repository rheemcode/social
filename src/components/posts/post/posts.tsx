import React, { useEffect } from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import {PostMessage} from "../../../types"
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPosts, likePost} from "../../../actions/posts"
 

declare interface Props {
 post: PostMessage;   
 setCurrentId : Function;
}

const Post = (props: Props) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state : any) => state.posts)

    useEffect(() => { dispatch(getPosts());}, [])

    return(
        <Card className={classes.card}>
            
            <CardMedia className={classes.media} image={props.post.selectedFile} title={props.post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{props.post.creator}</Typography>
                <Typography variant="body2">{moment(props.post.createdDate).fromNow()}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button style={{color : "white"}} size="small" onClick={()=> {props.setCurrentId(props.post.id)}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{props.post.tags.split(",").map((t : string) => `#${t}`).join("")}</Typography>
            </div>
            
            <Typography className={classes.title} variant="h5" gutterBottom={true}>{props.post.title}</Typography>
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{props.post.message}</Typography> 
            </CardContent>
            
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(props.post.id))}>
                    <ThumbUpAltIcon fontSize="small"/>
                     &nbsp; Likes {props.post.likeCount} 
                </Button>
                <Button size="small" color="primary" onClick={() => {dispatch(deletePost(props.post.id))}}>
                    <DeleteIcon fontSize="small">Delete</DeleteIcon>
                </Button>
            </CardActions>           
        
        </Card>
    );
}

export default Post