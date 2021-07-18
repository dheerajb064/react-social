import {Search , Person , Notifications , Chat} from '@material-ui/icons';
import "./topbar.css"


export default function Topbar(){
    return <div>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">FaceBook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search here" className="searchInput" />
                </div>

            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarItemBadge">1</span>  
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarItemBadge">2</span>  
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarItemBadge">1</span>  
                    </div>
                </div>
                <img src="/assets/person/person1.jpg" alt="" className="topbarImg" />
            </div>           
        </div>
    </div>
}