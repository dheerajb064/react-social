import "./post.css"
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import React from "react"


export default function Post(props) {
    const user = Users.filter((element) => {
        return element.id === props.post.id
    })
    const [like, setLike] = React.useState(props.post.like);
    const [isLiked, setIsLiked] = React.useState(false);
    function handleClick() {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user[0].profilePicture} alt="" className="postProfilePicture" />
                        <span className="postProfileName">{user[0].username}</span>
                        <span className="postDate">{props.post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{props.post.desc}</span>
                    <img src={props.post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={handleClick} />
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={handleClick} />
                        <span className="postLikeCounter">{like} people liked this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{props.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
