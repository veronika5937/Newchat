import React, { Component } from 'react';
import './Sidebar.css';
import ChatList from './Chat-list';
import ChatNav from './Chat-nav';



class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      class: '',
      filterText: '',
    }
    this.FilterTextInput = this.FilterTextInput.bind(this);
  }

  isOpen() {
    if (this.state.isOpen) {
      return this.setState({ isOpen: false, class: '' })
    } else {
      return this.setState({ isOpen: true, class: 'open' })
    }
  }

 FilterTextInput(filterText) {
     this.setState({
      filterText: filterText
    });
  }

  render() {
    let classes = `sidebar ${this.state.class}`;
    return (
      <aside className={classes}>
        <ChatNav buttonClick={this.isOpen.bind(this)} filterText={this.state.filterText} onFilterTextInput={this.FilterTextInput}/>
        <ChatList chats={this.props.chats} filterText={this.state.filterText} func={this.props.func} />
      </aside>
    );
  }
}

export default Sidebar;
