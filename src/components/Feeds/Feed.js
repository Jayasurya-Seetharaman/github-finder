import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeedIndividual from './FeedIndividual';
import Spinner from '../layout/Spinner';

class Feed extends Component {

    componentDidMount() {
        this.props.getFeed(this.props.match.params.author);
    }

    static propTypes = {
        loading: PropTypes.bool,
        feed: PropTypes.array.isRequired,
        getFeed: PropTypes.func.isRequired
    }

    render() {

        const { loading, feed } = this.props;

        if (loading) return <Spinner />;
        return (
            <Fragment>
                <Link to="/" className="btn btn-dark">Back To Feed</Link>
                <FeedIndividual feed={feed} />
            </Fragment>
        )
    }
}

export default Feed;