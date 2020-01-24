import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../scss/Search.scss';
import logo from '../assets/logo_ml.png';

class Header extends Component {
  
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  onChangeSearch = (e) => {
    this.setState({search: e.target.value})
  }

  onClick = () => {
    this.props.search(this.state.search)
  }

  defaultSearch = (e) => {
    this.setState({search: ''})
  }

  render() {
    const {search} = this.state
    const {onChangeSearch, onClick, defaultSearch} = this
    return (
      <div className="background-banner">
          <form className="search-container">
              <NavLink
                to='/'
              >
                <img src={logo} alt="Mercado Libre" onClick={defaultSearch} className={'ml-img'} />
              </NavLink>            
              <input
                className={'search-input'}
                name="search"
                type="text"
                value={search}
                onChange={onChangeSearch}
                placeholder="Nunca dejes de buscar"
              />
              <NavLink
                to={'/items?search=' + search}
                className='search-nav'
              >
                <button
                  onClick={onClick}
                  type="submit"
                  className='search-btn'
                />
              </NavLink> 
          </form>
      </div>
    )
  }
}

export default Header;
