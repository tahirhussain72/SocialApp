import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img
            className="shareprofileimg"
            src="/assets/person/1.jpeg  "
            alt="no pic"
          ></img>
          <input
            placeholder="What's in your mind Safak?"
            className="shareinput"
          ></input>
        </div>
        <hr className="sharehr" />
        <div className="sharebotton">
          <div className="shareoptions">
            <div className="shareoption">
            <i class="fa-solid fa-photo-film" ></i>
              <span className="shareoptiontext">Photo or Video</span>
            </div>
            <div className="shareoption">
            <i class="fa-solid fa-tag"></i>
              <span className="shareoptiontext" >Tag</span>
            </div>
            <div className="shareoption">
            <i class="fa-solid fa-location-dot" ></i>
              <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
            <i class="fa-solid fa-face-smile"></i>
              <span className="shareoptiontext">Feelings</span>
            </div>
          </div>
          <button className="sharebutton"> Share</button>
        </div>
      </div>
    </div>
  );
}
