import React, {useEffect, useState} from "react";
// import LikeButton from "./LikeButton"
import LikeButtonHook from "./LikeButtonHook";
const ArticleHook = (props) => {
    const [isPublished,togglePublisfed] = useState(false);

    return (
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態</label>
            <input type ="checkbox" 
            checked ={isPublished} 
            id = "check"　
            onClick={()=>togglePublisfed(!isPublished)}/>
            {/* <LikeButton count = {props.count} /> */}
            <LikeButtonHook />
        </div>

    )
};
export default ArticleHook;
