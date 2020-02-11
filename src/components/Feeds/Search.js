import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter title to search', 'light');
        } else {
            this.props.searchFeeds(this.state.text);
            this.setState({ text: '' });
        }
    }

    static propTypes = {
        searchFeeds: PropTypes.func.isRequired
    }

    changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { showClear, clearFeeds } = this.props;
        return (
            <div>
                <form onSubmit={this.submitHandler} className="form flexR768 flexAlignItemsCenter flexJustifyBetween" >
                    <input
                        type="text"
                        name="text"
                        placeholder="Search feeds.."
                        value={this.state.text}
                        onChange={this.changeHandler}
                        className="flex3" />
                    <div className="flexGap"></div>
                    <input
                        type="submit"
                        className="btn btn-dark btn-block flex1"
                        value="Search" />
                    {showClear && (
                        <Fragment>
                            <div className="flexGap"></div>
                            <div>
                                <button type="button" className="btn btn-block flex1"
                                    onClick={clearFeeds}>Clear</button>
                            </div>
                        </Fragment>)}
                </form>
            </div>
        )
    }
}

export default Search;