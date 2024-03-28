import React from "react";

const Videos = ({ serverData }) => {
  return (
    <div className="videos">
      {serverData?.items?.map((video, index) => (
        <div key={index}>
          <h2>Latest Video</h2>
          <a
            href={`https://youtube.com/shorts/${video.id.videoId}`}
            _target="blank"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Videos;
