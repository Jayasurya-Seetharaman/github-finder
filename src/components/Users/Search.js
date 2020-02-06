import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.text);
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
               <form onSubmit={this.submitHandler} className="form" >
                   <input
                    type="text"
                    name="text"
                    placeholder="Search users.."
                    value={this.state.text}
                    onChange={this.changeHandler} />
                   <input 
                    type="submit" 
                    className="btn btn-dark btn-block" 
                    value="Search"/>
               </form>
            </div>
        )
    }
}

export default Search;