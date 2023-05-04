import "./rightbar.css"
import {Users} from "../../DummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
          <div className="brithdaycontainer">
        <img src="/assets/gift.png" className="brithdayimg"></img>
        <span className="brithdaytext"> <b>Asif </b>and <b>5 other friends</b> have a brithday today.</span>
         </div>
         <img src="/assets/ad.png" className="rightbarad"></img>
         <h4 className="rightbartitle"> Online Friends </h4>
         <ul className="rightbarfriendlist">
         
          {Users.map(u=>(
              <Online key={u.id} user={u}/>
          ))}
         </ul>
      </>
    )
  }
  const ProfileRighrbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Islamabad</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Parachinar</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="/assets/person/1.jpeg"></img>
              <span className="rightbarFollowingName">Jane Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="/assets/person/2.jpeg"></img>
              <span className="rightbarFollowingName">Jane Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="/assets/person/3.jpeg"></img>
              <span className="rightbarFollowingName">Jane Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="/assets/person/4.jpeg"></img>
              <span className="rightbarFollowingName">Jane Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="/assets/person/5.jpeg"></img>
              <span className="rightbarFollowingName">Jane Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="/assets/person/6.jpeg"></img>
              <span className="rightbarFollowingName">Jane Carter</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
     {profile ? <ProfileRighrbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
