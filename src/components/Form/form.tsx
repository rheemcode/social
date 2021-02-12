import React, {useState, useEffect} from "react";
import useStyles from "./stlyes"
import {TextField, Typography, Button, Paper} from "@material-ui/core";
import FileBase from "../base64"
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../actions/posts"

// TODO: keep code dry and move this into a declaration file
declare interface PropsType{
    currentId?: string | number | null,
    setCurrentId : Function;
}

const Form = (props: PropsType) :JSX.Element =>{
    const [postData, setpostData] = useState({creator: "",title: "", message: "", tags: "", selectedFile: "",});
    const classes = useStyles();
    const post = useSelector((state: any) => props.currentId ? state.posts.find((p: any)=> p.id === props.currentId ) : null)
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setpostData(post);
        console.log(props.currentId);
    }, [post])

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        if (props.currentId){
            dispatch(updatePost(props.currentId, postData));
            
        } else{
            dispatch(createPost(postData));
        }

        clear()

    };

    const clear = () => {
        props.setCurrentId(null);
        setpostData({creator: "",title: "", message: "", tags: "", selectedFile: "",})
    };

    return(
        <Paper className ={classes.paper}>
            
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{props.currentId ? "Editing" : "Creating"} Creating a post</Typography>
            
            <TextField name= "creator" variant="outlined" label="Creator" fullWidth={true} value={postData.creator} onChange={(e) => setpostData({...postData, creator: e.target.value})}/>
            <TextField name= "title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setpostData({...postData, title: e.target.value})}/>
            <TextField name= "message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setpostData({...postData, message: e.target.value})}/>
            <TextField name= "tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setpostData({...postData, tags: e.target.value})}/>
            
            <div className={classes.fileInput}>
                <FileBase multiple={false}  onDone={({base64} :any) => setpostData({...postData, selectedFile: base64})}></FileBase>
            </div>
        
            <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth={true}>Submit</Button>
            <Button className={classes.buttonSubmit} variant="contained" size="small" color="primary" onClick={clear} fullWidth={true}>Clear</Button>

            </form>
        </Paper>
        );
}
export default Form;
