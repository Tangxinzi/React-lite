import React, { Component } from 'react'
import Manage from './Manage'
import { BrowserRouter as Router, Route } from 'react-router-dom' // Link

class Notes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentences: [],
      lite: {
      	"title": null,
      	"sub_title": null,
      	"theme": "每日语法",
      	"custom": null,
      	"description": null
      }
    }

    this.fetchSentenceDate()
  }

  fetchSentenceDate() {
    fetch('http://localhost:3000/api/lite/')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          'sentences': responseData.sentences
        })
      })
      .catch((error) => {
        console.log('err:', error)
      })
  }

  render () {
    const Sentences = () => (
      this.state.sentences.map( (sentence, index) =>
        <div key={ sentence.id } className="block">
          <div className="image">
            <div className="header">
              <h3>{ sentence.title }</h3>
            </div>
            <img src={ sentence.image } />
          </div>
          <div className="content">
            <div className="text">
              <h4 className="sub_header">{ sentence.theme } ・ { sentence.custom }</h4>
              <div className="time">{ sentence.time }</div>
            </div>
            <div className="play">

            </div>
          </div>
        </div>
      )
    )

    return (
      <Router>
        <div className="ui container lite">
          <h4 className="ui horizontal divider header">
            <i className="paw icon"></i>
            Ferer Applications Lites App - React.js
          </h4>
          {/* <Link to="/">Sentences</Link>
          <Link to="/manage">Manage</Link> */}
          <div className="ui divided items">
            <Route exact path="/" component={ Sentences } />
          </div>
          <div className="ui divided items">
            <Route path="/manage" component={ Manage } />
          </div>
        </div>
      </Router>
    )
  }
}

export default Notes
