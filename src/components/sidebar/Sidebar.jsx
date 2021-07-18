import "./sidebar.css"
import { RssFeed, Group, Bookmark, PlayCircleFilled, HelpOutline, WorkOutline, Event, School, Chat } from "@material-ui/icons"
import { Users } from "../../dummyData";
import Friend from "../friend/Friend";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListIcon" />
                        <span className="sidebarListName">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListIcon" />
                        <span className="sidebarListName">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarListIcon" />
                        <span className="sidebarListName">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarListIcon" />
                        <span className="sidebarListName">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarListIcon" />
                        <span className="sidebarListName">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarListIcon" />
                        <span className="sidebarListName">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarListIcon" />
                        <span className="sidebarListName">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListIcon" />
                        <span className="sidebarListName">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarListIcon" />
                        <span className="sidebarListName">Courses</span>
                    </li>
                </ul>
                <button className="sidebarListButton">Show More</button>
                <hr className="sidebarListHr" />
                <ul className="sidebarFriendList">
                    {Users.map((user) => {
                        return <Friend key={user.id} user={user} />
                    })}
                </ul>
            </div>
        </div>
    )
}
