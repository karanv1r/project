import React,{useState} from 'react';
import style from "./recipe.module.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


function Recipe(props){
    const [Press1,setPress1]=useState(false);
    const [Press2,setPress2]=useState(false);
    const[bookmark,setBookmark]=useState(false);
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    return (<div className={style.recipe}  >
        <button style={{float:"right"}} onClick={()=>{setBookmark(!bookmark)}}>{bookmark?<BookmarkIcon/>:<BookmarkBorderIcon/>}</button>

    <div>
    <h1 >{props.title}</h1>
    </div>
    <ol>
        {props.ingredients.map(ingredient=>(
            
            <li>{ingredient.text}</li>
        ))}
    </ol>
<p>{props.calories}</p>
<img src={props.img} className={style.image} alt="recipe" />
{/* <button><ThumbUpIcon/> </button> */}
<div>
<div className={style.recipe_button}>
<Button
        variant="contained"
        color={Press1?"primary":"default"}
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
      onClick={()=>{
          setPress2(false);
          setPress1(!Press1)
      }}>
       <ThumbUpIcon/> Like
      </Button>
</div>
<div className={style.recipe_button}>
      <Button
        variant="contained"
        color={Press2?"secondary":"default"}
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
      onClick={()=>{
          setPress1(false)
          setPress2(!Press2)
      }}>
       <ThumbDownIcon/> Dislike
      </Button>
      </div>
      </div>
    </div>)
}
export default Recipe;