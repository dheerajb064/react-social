import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css";
import {Posts} from "../../dummyData";

export default function Feed() {
    return (
        <div className="feed">
            <Share/>
            {Posts.map((post , index)=>{
                return <Post key={index} post={post} />
            })}
        </div>
    )
}
