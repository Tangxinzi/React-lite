import React, { Component } from 'react'

class Manage extends Component {
  handleThemeClick (event) {
    let lite = {
      'title': this.refs.title.value,
      "sub_title": this.refs.sub_title.value,
      "theme": this.refs.theme.value,
      "custom": this.refs.custom.value,
      "description": this.refs.description.value
    }
    fetch('http://localhost:3000/api/lite/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(lite)
    })
    .then(response => response.json())
    .then(responseData => {
      let formData = new FormData();
      formData.append('theme', document.getElementById('theme').files[0])
      fetch('http://localhost:3000/api/lite/themes/profile', {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
      })
      .catch((error) => {
        console.log('err:', error)
      })

      formData.append('audio', document.getElementById('audio').files[0])
      fetch('http://localhost:3000/api/lite/audios/profile', {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
      })
      .catch((error) => {
        console.log('err:', error)
      })
    })
    .catch((error) => {
      console.log('err:', error)
    })
  }

  handleSentenceClick (event) {
    let sentence = {
    	"japanese": this.refs.japaneseSentence.value,
    	"chinese": this.refs.chineseSentence.value
    }
    fetch('http://localhost:3000/api/lite/sentence', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(sentence)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
    })
    .catch((error) => {
      console.log('err:', error)
    })
  }

  handleWordClick (event) {
    let word = {
    	"japanese": this.refs.japaneseWord.value,
    	"chinese": this.refs.chineseWord.value
    }
    fetch('http://localhost:3000/api/lite/word', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(word)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
    })
    .catch((error) => {
      console.log('err:', error)
    })
  }

  render () {
    return (
      <div className="ui form">
        <div className="ui items theme">
          <h4 className="ui dividing header">主题 Theme</h4>
          <div className="field">
            <div className="three fields">
              <div className="field">
                <label>标题</label>
                <input type="text" ref="title" defaultValue="" placeholder="请在这里输入标题" autoFocus />
              </div>
              <div className="field">
                <label>子主题</label>
                <input type="text" ref="sub_title" defaultValue="" placeholder="子标题" />
              </div>
              <div className="field">
                <label>Theme 图片</label>
                <input style={{ 'fontSize': '12px' }} id="theme" type="file" ref="file" />
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>主题</label>
                <input type="text" ref="theme" defaultValue="每日语法" placeholder="默认为：每日语法" />
              </div>
              <div className="field">
                <label>主题说明</label>
                <input type="text" ref="custom" defaultValue="" placeholder="输入 custom 内容" />
              </div>
              <div className="field">
                <label>Theme 音频</label>
                <input style={{ 'fontSize': '12px' }} id="audio" type="file" ref="file" />
              </div>
            </div>
            <div className="field">
              <label>描述</label>
              <textarea type="text" ref="description" defaultValue="" placeholder="关于主题的描述" />
            </div>
          </div>
          <button className="ui button" onClick={ this.handleThemeClick.bind(this) }>Submit</button>
        </div>
        <div className="ui items sentence">
          <h4 className="ui dividing header">语法 Sentence</h4>
          <div className="field">
            <div className="second fields">
              <div className="field">
                <label>列句</label>
                <input type="text" ref="japaneseSentence" defaultValue="" placeholder="请在这里输入列句" />
              </div>
              <div className="field">
                <label>说明</label>
                <input type="text" ref="chineseSentence" defaultValue="" placeholder="说明" />
              </div>
            </div>
          </div>
          <button className="ui button" onClick={ this.handleSentenceClick.bind(this) }>Submit</button>
        </div>
        <div className="ui items word">
          <h4 className="ui dividing header">词汇 Word</h4>
          <div className="field">
            <div className="second fields">
              <div className="field">
                <label>词汇</label>
                <input type="text" ref="japaneseWord" defaultValue="" placeholder="请在这里输入列句" />
              </div>
              <div className="field">
                <label>说明</label>
                <input type="text" ref="chineseWord" defaultValue="" placeholder="说明" />
              </div>
            </div>
          </div>
          <button className="ui button" onClick={ this.handleWordClick.bind(this) }>Submit</button>
        </div>
      </div>
    )
  }
}

export default Manage
