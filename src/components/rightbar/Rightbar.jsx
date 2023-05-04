import "./rightbar.css"
import {Users} from "../../DummyData"
import Online from "../online/Online"

export default function Rightbar(profile) {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
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
      </div>
    </div>
  )
}
