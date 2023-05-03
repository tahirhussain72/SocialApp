import Share from "../share/Share"
import Post from "../post/Post"
import {Posts} from "../../DummyData"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share/>
       {Posts.map((p)=>(
        <Post key={p.id} Post={p}/>
       ))}
       
      </div>
    </div>
  )
}
