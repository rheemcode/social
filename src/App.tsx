import React, {useEffect, useState} from 'react';
import Posts from "./components/posts/Posts";
import {getPosts} from "./actions/posts"
import {useDispatch, useSelector} from "react-redux";
import Form from "./components/Form/form";
import {Container, AppBar, Typography, Grid, Grow} from "@material-ui/core"
import useStyles from "./styles";

const App  = () =>{
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state : any) => state.posts)

 useEffect(()=>{ dispatch(getPosts());}, []);
  

 // this is because i can't nest jsx elements normally with @material-ui in typescript so i have to put them as a child
  let childA :JSX.Element= <><AppBar position="static" color="inherit" className={classes.appBar}>
                <Typography variant="h2" align="center" className={classes.heading}>Social</Typography>
                </AppBar>
                <Grow in={true} children={
                <Container maxWidth="lg" children={
                <Grid container={true} justify="space-between" alignItems="stretch" spacing={3} children={<>
                <Grid item={true} xs={12} sm={7} children={
                <Posts setCurrentId={setCurrentId}/>}/>
                <Grid item={true} xs={12} sm={4} children={
                <Form currentId={currentId} setCurrentId={setCurrentId}/>}/>
                </>
                }/>
                }/>
                }/>
                </>
  return(
    <Container maxWidth="lg" children={childA}/>
  );
  
}

export default App;
