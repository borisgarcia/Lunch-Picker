import React, {Component} from 'react';
import { Button } from "react-bulma-components/full";
import './App.css';


export default class App extends Component{
  constructor(props){
    super();
    this.state = {
      restaurants: [],
      filter: 'all',
      sortBy: '',
    }   
  }

  loadAllRestaurants(){
    fetch("http://localhost:3001/restaurants/"+this.state.filter)
    .then(response => response.json())
    .then( responseJson=> {
      this.setState({ restaurants:responseJson.data });
    })
  }
  render(){
    return (this.state.restaurants || []).map(item => (
      <div className="Hola" key={item._id}>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={item.image}></img>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={item.pic}></img>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{item.name}</p>
                <p class="subtitle is-6">{item.cuisine}</p>
              </div>
            </div>
            <div class="media-content">
                <p class="title is-6">Address: {item.address}</p>
                <p class="subtitle is-6">Opening Hours: {item.schedule}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  componentDidMount() {
    this.loadAllRestaurants();
  }
}
