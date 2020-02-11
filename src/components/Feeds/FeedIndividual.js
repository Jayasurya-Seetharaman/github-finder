import React from 'react';
import PropTypes from 'prop-types';

const FeedIndividual = ({ feed }) => {
    return feed.map((feed, key) => (
        <div className="card" key={key}>
            <div className="">
                <img
                    src={feed.url}
                    className=""
                    alt=''
                    style={{}}
                />
                <h1>{feed.title}</h1>
                <p><b>Author: </b> {feed.author}</p>
            </div>
        </div>
    ))
}

FeedIndividual.propType = {
    repos: PropTypes.array.isRequired
}

export default FeedIndividual;