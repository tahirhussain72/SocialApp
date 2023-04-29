import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <i class="fa-solid fa-rss"></i>
            <span className="sidebarlistitemtext">feed</span>
          </li>
          <li className="sidebarlistitem">
          <i class="fa-solid fa-message"></i>
            <span className="sidebarlistitemtext">chat</span>
          </li>
          <li className="sidebarlistitem">
            <i class="fa-solid fa-rss"></i>
            <span className="sidebarlistitemtext">feed</span>
          </li>
          <li className="sidebarlistitem">
            <i class="fa-solid fa-rss"></i>
            <span className="sidebarlistitemtext">feed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
