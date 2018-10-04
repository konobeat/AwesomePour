import React, { Component } from 'react';
import API from '../utils/api';


    class Drinks extends Component {
        state = {
            drinks: []
        }


        componentDidMount() {
            this.loadDrinks();
        }

        loadDrinks = () => {
            API.getDrinks()
                .then (res => this.setState({ drinks: res.data }))
                .catch(err => console.log(err));
        };

        render() {
            return(
                <div>
                   {/* {JSON.stringify(this.state.drinks)} */}
                {this.state.drinks.map(drink =>(
                    <img src = {drink.image} className='drink_image'></img>
                ))}
                </div>
            )
        }
    }

export default Drinks;