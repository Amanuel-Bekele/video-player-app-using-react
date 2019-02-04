import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {

    if (!video) {
        return <div>Loading...</div>
    }
    return (

        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">{   video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem;

