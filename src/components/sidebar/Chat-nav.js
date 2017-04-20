import React, { Component } from 'react';
import './Sidebar.css';

class ChatNav extends Component {
  constructor(props){
    super(props)
    this.FilterTextInputChange = this.FilterTextInputChange.bind(this);
  }
  
  ///fuction which is called when search input changed
  FilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    let menuId = 'menu';
    return (
      <nav className="navbar">
        <span className="navbar__arrow" onClick={this.props.buttonClick}></span>

        <form className="navbar__search">
          <input type="search" className="navbar__search__input" name="search" value={this.props.filterText}  onChange={this.FilterTextInputChange}/>
          <i className="fa fa-search"></i>
         </form>
  
          <input id={menuId} type="checkbox"/>
            <span className="line"></span>
            <label htmlFor={menuId}>
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </label>
            <ul className="navbar__menu">
              <li>
                <a href="">new chat</a>
              </li>
              <li>
                <a href="">chat item1</a>
              </li>
              <li>
                <a href="">chat item2</a>
              </li>
            </ul>
    </nav>
          );
  }
}

export default ChatNav;
