import React, { Component } from "react";
import Search from "./Search";
// import { searchIt } from "../services/search";
import Auto from "./Auto";
import Food from './Food';
import Attractions from "./Attractions";
import axios from 'axios'


class App extends Component {
    constructor() {
    super();
    this.state = {
        searchTerm: "",
        food:[],
        attraction:[],
        autos:[],
    }
    }

    handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
        console.log(this.state.searchTerm);
    });
    };
    getAuto = () => {
        const url = '/autos';
        axios.get(url).then((autos) =>{
            this.setState({autos: [...autos.data]})
        })
    }

    getFood = () => {
    fetch(
        "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=60763&lunit=mi&restaurant_tagcategory=10591&limit=5&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=60763",
        {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "eac3225223msh551076a7ef7b5b0p18786djsn511b4fa87136"
        },
        }
    )
        .then((response) => {
            console.log(this.state)
            return response.json();
        })
        .then((data)=> {
            this.setState({
                food: data.data
            })
        })
        .catch((err) => {
        console.log(err);
        });
    };

    getAttraction = () =>{
        fetch(
            "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&limit=5&bookable_first=false&subcategory=36&location_id=60763",
        {
            "method": "GET",
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "eac3225223msh551076a7ef7b5b0p18786djsn511b4fa87136"
            }
})
.then(response => {
	return response.json();
})
.then((data) => {
    this.setState({
        attraction: data.data
    })
})
.catch(err => {
	console.log(err);
});
    }

    componentDidMount(){
        // this.getFood()
        // this.getAttraction()
        this.getAuto()
    }

    render() {
        console.log(this.state.auto)
    return (
        <div>
            <div>
            <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
                <div
                style={{
                    marginTop: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}>
                <Food style={{padding:"350px"}} food= {this.state.food}/>

                <Auto style={{paddingRight:"350px"}} autos= {this.state.autos} searchTerm={this.state.searchTerm}/>

                <Attractions attraction={this.state.attraction} searchTerm={this.state.searchTerm}/>
                </div>
            </div>
        </div>
    );
    }
}
export default App;
