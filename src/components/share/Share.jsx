import "./share.css"
import {PermMedia , Label  ,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/person1.jpg" alt="" className="shareProfilePicture" />
                    <input placeholder="Whats on your mind?" className="shareInputText" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareOptionIcon" />
                            <span className="shareOptionText">Photo / Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareOptionIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareOptionIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon" />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
