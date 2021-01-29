import React, { Component } from 'react';
import Form from './components/Form/Form';
import EmojiContainer from './components/EmojiContainer/EmojiContainer'


export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [],
			visibleData: [],
      term: ''
    };
  }

  componentDidMount() {
  	this.loadData();
	}

	loadData() {
    fetch('https://raw.githubusercontent.com/sulemanof/js-lectures/master/react/emojiList.json')
    .then((response) => {
      return response.json()
    })
    .then(emojiList => {
      this.setState({
        data: emojiList,
				visibleData: emojiList.slice(0, 15),
      });
    });
  }

  updateData = (event) => {
  	const { data } = this.state
  	const value = event.target.value.toLowerCase();
		const filter = data.filter(emoji => {
			return emoji.title.toLowerCase().includes(value)
		}).slice(0, 15)
		this.setState({
			visibleData: filter,
			term: value
		});
  }

  render() {
    return (
      <div>
        <Form term={this.state.term} update={this.updateData} />
        <EmojiContainer data={this.state.visibleData} />
      </div>
    )
  }

};
