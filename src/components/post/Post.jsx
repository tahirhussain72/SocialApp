import "./post.css"
import {Users} from "../../DummyData"

export default function Post({Post}) {
   
  return (
    <div className="post">
    <div className="postwrapper">
        <div className="posttop">
            <div className="posttopleft">
                <img src={Users.filter((u) => u.id === Post?.userId)[0].profilePicture} className="postprofileimg"></img>
                <span className="postusername">{Users.filter((u) => u.id === Post?.userId)[0].username}</span>
                <span className="postdate">{Post.date} </span>
            </div>
            <div className="posttopright">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
        <div className="postcenter">
            <span className="posttext"> {Post?.desc}</span>
            <img src={Post.photo} className="postimg"></img>
        </div>
        <div className="postbottom">
            <div className="postbottomleft">
                <img src="/assets/like.png"  className="likeicon"></img>
                <img src="/assets/heart.png" className="likeicon"></img>
                <span className="postlikecounter"> {Post.like} people like it</span>
            </div>
            <div className="postbottomright">
                <span className="postcommenttext"> {Post.comment} comments</span>
            </div>
        </div>
    </div>
      
    </div>
  )
}
