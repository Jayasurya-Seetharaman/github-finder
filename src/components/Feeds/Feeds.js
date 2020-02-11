import React from 'react'
import FeedItem from './FeedItem';
import Spinner from '../layout/Spinner';

const Feeds = ({ feeds, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={cardStyle}>
                {feeds.map((feed, index) => {
                    return <FeedItem key={index} feed={feed} />
                })}
            </div>
        )
    }

}

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'
}

export default Feeds;
