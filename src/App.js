import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Feeds from './components/Feeds/Feeds';
import Feed from './components/Feeds/Feed';
import Search from './components/Feeds/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    feeds: [],
    feed: [],
    loading: false,
    alert: null,
    showClear: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://www.reddit.com/r/pics/.json');

    this.setState({
      feeds: res.data.data.children.map(d => {
        return {
          title: d.data.title.replace(/&amp;/g, '&'),
          author: d.data.author,
          url: d.data.url,
          thumbnail: d.data.thumbnail
        };
      }),
      loading: false
    })
  }

  // Search Feed
  searchFeeds = async (text) => {
    let res = await this.state.feeds.filter(feed => feed.title.includes(text));
    if (res.length !== 0) {
      this.setState({
        feeds: res,
        showClear: true
      });
    }
  }

  // Get Feed
  getFeed = async (author) => {
    this.setState({ loading: true });
    let res = {};
    res = await this.state.feeds.filter(feed => feed.author.includes(author));
    if (res !== ' ') {
      this.setState({
        feed: res,
        loading: false
      });
    }
  }

  // Clear Feeds
  clearFeeds = async () => {
    this.setState({ loading: true });
    const res = await axios.get('https://www.reddit.com/r/pics/.json');

    this.setState({
      feeds: res.data.data.children.map(d => {
        return {
          title: d.data.title.replace(/&amp;/g, '&'),
          author: d.data.author,
          url: d.data.url,
          thumbnail: d.data.thumbnail
        };
      }),
      loading: false,
      showClear: false
    })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 2000);
  }

  render() {
    const { feeds, feed, loading, alert, showClear } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchFeeds={this.searchFeeds}
                    clearFeeds={this.clearFeeds}
                    setAlert={this.setAlert}
                    showClear={showClear} />
                  <Feeds
                    loading={loading} feeds={feeds} />
                </Fragment>
              )} />
              <Route exact path="/feed/:author" render={props => (
                <Feed {...props}
                  getFeed={this.getFeed}
                  loading={loading}
                  feed={feed} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;