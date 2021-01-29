import React, { Component } from 'react';
import Form from './components/Form/Form';
import EmojiContainer from './components/EmojiContainer/EmojiContainer'


export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: null,
      term: ''
    };
    this.loadData();
  }

  loadData() {
    fetch('https://raw.githubusercontent.com/sulemanof/js-lectures/master/react/emojiList.json')
    .then((response) => {
      return response.json()})
    .then(emojiList => {
      this.initialData = emojiList;
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(data) {
    this.setState(data);
  }

  render() {
    return (
      <div>
        <Form term={this.state.term} data={this.state.data} update={this.updateData.bind(this)} />
        <EmojiContainer />
      </div>
    )
  }

};
