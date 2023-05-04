import "./sidebar.css";
import {Users} from "../../DummyData"
import CloseFriend from "../closeFriend/CloseFriend";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <i class="fa-solid fa-rss"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <i class="fa-solid fa-message"></i>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <i class="fa-solid fa-play"></i>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <i class="fa-solid fa-user-group"></i>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <i class="fa-solid fa-bookmark"></i>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <i class="fa-sharp fa-regular fa-question"></i>
            <span className="sidebarListItemText">Questions</span>
          </li>
          
          <li className="sidebarListItem">
          <i class="fa-solid fa-calendar"></i>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <i class="fa-sharp fa-solid fa-graduation-cap"></i>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            {Users.map(u=>(
              <CloseFriend key={u.id } user={u}/>
            ))}
           
        </ul>
      </div>
    </div>
  );
}

