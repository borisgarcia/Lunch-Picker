import React, { Component } from 'react'
import { Button } from 'react-bulma-components/full'
import './App.css'
import logo from './unnamed.png'

export default class App extends Component {
  constructor (props) {
    super()
    this.state = {
      restaurants: [],
      filter: 'all',
      sortBy: 'SortedByName',
      error: false
    }
    this.handleCuisineChange = this.handleCuisineChange.bind(this)
    this.handleSortByChange = this.handleSortByChange.bind(this)
    this.loadAllRestaurants = this.loadAllRestaurants.bind(this)
  }

  loadAllRestaurants () {
    fetch('https://tranquil-dusk-66828.herokuapp.com/restaurants/' + this.state.sortBy + '/' + this.state.filter)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ restaurants: responseJson.data })
      })
  }

  handleCuisineChange () {
    if (this.refs.all.checked) {
      this.setState({ filter: 'all' })
    } else if (this.refs.american.checked) {
      this.setState({ filter: 'American' })
    } else if (this.refs.cafe.checked) {
      this.setState({ filter: 'Cafe' })
    } else if (this.refs.international.checked) {
      this.setState({ filter: 'International' })
    } else if (this.refs.hamburger.checked) {
      this.setState({ filter: 'Hamburgers' })
    } else if (this.refs.mediterranean.checked) {
      this.setState({ filter: 'Mediterranean' })
    } else if (this.refs.pizza.checked) {
      this.setState({ filter: 'Pizza' })
    } else if (this.refs.seafood.checked) {
      this.setState({ filter: 'Seafood' })
    } else if (this.refs.sushi.checked) {
      this.setState({ filter: 'Sushi' })
    }
  };

  handleSortByChange () {
    if (this.refs.name.checked) {
      this.setState({ sortBy: 'SortedByName' })
    } else if (this.refs.cuisine.checked) {
      this.setState({ sortBy: 'SortedByCuisine' })
    } else if (this.refs.rating.checked) {
      this.setState({ sortBy: 'SortedByRating' })
    }
  };

  render () {
    return (
      <div>
        <div className="Header">
          <img src={logo} alt="logo" className="appLogo"/>
          <p className="Bar"> </p>
          <h1 className="Titulo">Lunch Picker</h1>
          <div className="buttons">
            <div className="dropdown">
              <Button className="is-medium is-rounded is-focused"><span className="textS">Cuisine</span></Button>
              <div className="dropdown-content">
                <div>
                  <input type="radio" name="cuisine" ref="all" onChange={this.handleCuisineChange}></input>&emsp;All
                  <br></br>
                  <input type="radio" name="cuisine" ref="american" onChange={this.handleCuisineChange}></input>&emsp;American
                  <br></br>
                  <input type="radio" name="cuisine" ref="cafe" onChange={this.handleCuisineChange}></input>&emsp;Cafe
                  <br></br>
                  <input type="radio" name="cuisine" ref="international" onChange={this.handleCuisineChange}></input>&emsp;International
                  <br></br>
                  <input type="radio" name="cuisine" ref="hamburger" onChange={this.handleCuisineChange}></input>&emsp;Hamburger
                  <br></br>
                  <input type="radio" name="cuisine" ref="mediterranean" onChange={this.handleCuisineChange}></input>&emsp;Mediterranean
                  <br></br>
                  <input type="radio" name="cuisine" ref="pizza" onChange={this.handleCuisineChange}></input>&emsp;Pizza
                  <br></br>
                  <input type="radio" name="cuisine" ref="seafood" onChange={this.handleCuisineChange}></input>&emsp;Seafood
                  <br></br>
                  <input type="radio" name="cuisine" ref="sushi" onChange={this.handleCuisineChange}></input>&emsp;Sushi
                </div>
              </div>
            </div>
            <div className="dropdown">
              <Button className="is-medium is-rounded is-outlined is-focused"><span className="textS">Sort By</span></Button>
              <div className="dropdown-content">
                <input name="sort" type="radio" ref="name" onChange={this.handleSortByChange}></input>&emsp;Name
                <br></br>
                <input name="sort" type="radio" ref="cuisine" onChange={this.handleSortByChange}></input>&emsp;Cuisine
                <br></br>
                <input name="sort" type="radio" ref="rating" onChange={this.handleSortByChange}></input>&emsp;Rating
              </div>
            </div>
            <div className="dropdown">
              <Button className="is-medium is-rounded is-focused" onClick={this.loadAllRestaurants}><span className="textS">Search</span></Button>
            </div>
          </div>
        </div>
        <div>{(() => {
          if (!this.state.error) {
            return ((this.state.restaurants || []).map(item => (
              <div className="row" key={item._id}>
                <div className="box" >
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={item.image} alt="image"></img>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src={item.pic} alt="pic"></img>
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="_m_title">{item.name}</p>
                          <br></br>
                          <p className="_subt">{item.cuisine}</p>
                        </div>
                      </div>
                      <div className="media-content">
                        <p className="_title">Address: </p> <p className="_subt">{item.address}</p>
                        <br></br>
                        <p className="_title">Opening Hours: </p> <p className="_subt">{item.hours}</p>
                        <br></br>
                        <p className="_title">Rating: </p> <p className="_subt">{item.rating} de 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )))
          }
        })()}
        </div>
      </div>
    )
  }
}
