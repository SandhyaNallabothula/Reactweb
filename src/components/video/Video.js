import React , {useState,useEffect} from "react";
//import videos from "../../model/videoData.json";
function Video() {
  const [videos,setvideos] = useState([])
  useEffect(() =>{
  fetch("videoData.json")
  .then(response => response.json())
  .then(data => setvideos(data))
  .catch(error => console.error("problem with fetching data!", error))
},[])
  return (
    <div className="container">
      <div className="row">
        {videos.map((video,key) => (
          <div key={key} className="col-md=4">
            <a href={`https://youtube.com/watch?v=${video.img_id}`}>
            <div class="card">
              <img
                src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                class="img-thumbnail"
                alt={video.title}
              />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.channelName}</p>
                <small>
                  {video.viewsCount}views-{video.likeCount} like-{" "}
                  {video.duration}m
                </small>
              </div>
            </div>
            </a>
          </div>
        
        ))
        }
      </div>
    </div>
  )
}

export default Video
