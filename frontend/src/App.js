import React, { Component } from 'react'
import { Button } from 'react-bulma-components/full'
import './App.css'


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
    fetch('http://localhost:3001/restaurants/' + this.state.sortBy + '/' + this.state.filter)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ restaurants: responseJson.data })
      })
  }

  handleCuisineChange () {
    if (this.refs.italian.checked) {
      this.setState({ filter: 'American' })
    }
    else if (this.refs.pizza.checked) {
      this.setState({ filter: 'Adios' })
    }
  };

  handleSortByChange () {
    if (this.refs.name.checked) {
      this.setState({ sortBy: 'SortedByName' })
    }
    else if (this.refs.cuisine.checked) {
      this.setState({ sortBy: 'SortedByCuisine' })
    }
    else if (this.refs.rating.checked) {
      this.setState({ sortBy: 'SortedByRating' })
    }
  };

  render () {
    return (
      <div className="body">
        <div>
          <div className="buttons">
            <div className="dropdown">
              <Button className="is-medium is-rounded"> Cuisine</Button>
              <div className="dropdown-content">
                <div>
                  <label>
                    <input type="radio" name="cuisine" ref="italian" onChange={this.handleCuisineChange}></input>
                    &emsp;Italian
                  </label>
                  <br></br>
                  <label>
                    <input type="radio" name="cuisine" ref="pizza" onChange={this.handleCuisineChange}></input>
                    &emsp;Italian
                  </label>
                </div>
              </div>
            </div>
            
            <div className="dropdown">
              <Button className="is-medium is-rounded is-outlined">Sort by</Button>
              <div className="dropdown-content">
                <label>
                  <input name="sort" type="radio" ref="name" onChange={this.handleSortByChange}></input>&emsp;Name
                </label>
                <br></br>
                <label>
                  <input name="sort" type="radio" ref="cuisine" onChange={this.handleSortByChange}></input>&emsp;Cuisine
                </label>
                <br></br>
                <label>
                  <input name="sort" type="radio" ref="rating" onChange={this.handleSortByChange}></input>&emsp;Rating
                </label>
              </div>
            </div>
            <div className="dropdown">
              <Button className="is-medium is-rounded" onClick={this.loadAllRestaurants}>Search</Button>
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
                        <img src={item.image}></img>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src={item.pic}></img>
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
