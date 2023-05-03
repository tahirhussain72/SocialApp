import "./topbar.css"

export default function Topbar() {
  return (
    
      <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="topbarLogo">Social App</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="search friends, post or video" className="searchinput"></input>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                <span className="topbarlink">Homepage</span>
                <span className="topbarlink">Timeline</span>
            </div>
            <div className="topbaricon">
                <div className="topbariconitem">
                <i class="fa-solid fa-user-group"></i>
                <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitem">
                <i class="fa-solid fa-message"></i>
                <span className="topbariconbadge">2</span>
                </div>
                <div className="topbariconitem">
                <i class="fa-solid fa-bell"></i>
                <span className="topbariconbadge">1</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" className="topbarimg"></img>
        </div>
      </div>

  )
}
