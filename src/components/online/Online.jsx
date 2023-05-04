import "./online.css"

export default function Online({user}) {
  return (
     
    <li className="rightbarfriend">
            <div className="rightbarprofileimgcountainer">
              <img className="rightbarprofileimg" src={user.profilePicture}></img>
              <span className="rightbaronline"></span>
            </div>
            <span className="">{user.username}</span>
          </li>
   
  )
}
