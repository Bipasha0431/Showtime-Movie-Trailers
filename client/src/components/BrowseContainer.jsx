import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'
import { useSelector } from 'react-redux'

const BrowseContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayMovies);

    if (!movie) return;
    const { overview, id, title } = movie[4];

    return (
        <div>
            <VideoTitle title={title} desc={overview} />
            <VideoBg id={id} />
        </div>
    )
}

export default BrowseContainer