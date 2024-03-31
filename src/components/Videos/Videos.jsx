import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Videos = ({ serverData }) => {
  if (!serverData?.items) {
    return null;
  }

  return (
    <div className="videos">
      {serverData?.items?.map((video, index) => (
        <div key={index}>
          <h2>Latest Video</h2>
          <a
            href={`https://youtube.com/shorts/${video.id.videoId}`}
            alt={video.snippet.title}
            _target="blank"
          >
            <GatsbyImage
              image={getImage(video.snippet.thumbnails.high)}
              alt={video.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Videos;
