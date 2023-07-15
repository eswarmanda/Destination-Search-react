import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-card">
            <input
              className="input"
              type="search"
              placeholder="Search..."
              onChange={this.onChangeSearchInput}
            />
            <div className="search-card">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
              />
            </div>
          </div>

          <ul className="ul-list">
            {searchResult.map(eachItem => (
              <DestinationItem itemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
