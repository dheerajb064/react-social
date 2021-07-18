import "./friend.css"

export default function Friend(props) {
    return (
        <li className="sidebarFriendItem">
            <img src={props.user.profilePicture} alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">{props.user.username}</span>
        </li>
    )
}
