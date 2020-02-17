import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
        {/* //loop */}
        {videoItems} 
        {/* //this variable will end up as an array of videos*/}
        </ul>
    );
}

export default VideoList;