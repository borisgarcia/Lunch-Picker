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
      error: false
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
    return (
      <div>
        <div>

        </div>

        <div>{(() => {
          if(!this.state.error)
          {
            return((this.state.restaurants || []).map(item => (
              <div className="Hola" key={item._id}>
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
                        <p className="title is-4">{item.name}</p>
                        <p className="subtitle is-6">{item.cuisine}</p>
                      </div>
                    </div>
                    <div className="media-content">
                        <p className="_title">Address: </p> <p className="_subt">{item.address}</p>
                        <p></p>
                        <p className="_title">Opening Hours:</p>  <p className="_subt">{item.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            )))
          }
        })()}</div>
      </div>
    );
  }
  componentDidMount() {
    this.loadAllRestaurants();
  }
}