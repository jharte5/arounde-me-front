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
        searchTerm: "Find Services Here",
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
            console.log('API',data)
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
            // "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&limit=5&bookable_first=false&subcategory=36&location_id=60763",
            "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=mi&limit=15&location_id=60763",
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
        this.getFood()
        this.getAttraction()
        this.getAuto()
    }

    render() {
        console.log('Food', this.state.food)
    return (
        <div>
            <div>
            <div style = {{
                backgroundColor:'green'
            }}>
            <h1>Welcome To New York.</h1>
                <p>Random Food Services on the Left</p>
                <p>New York's Hottest Attractions on the Right</p>
                <p>Automotive Services in the middle</p>
            </div>
                <div
                style={{
                    backgroundColor:'gray',
                    color:'red',
                    height:'100vh',
                    width:'100vw',
                    // marginTop: "100px",
                    // marginBottom:"100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    fontFamily:'Lucida Console, Monaco, monospace',
                    fontStyle:'oblique',
                    fontVariant:'small-caps',
                    textTransform:'capitalize'
                }}>
                <Food 
                style={{}} 
                food= {this.state.food}
                />
                <div style={{
                    color:'red',
                    display:'flex',
                    flexDirection:'column'
                }}>
                <Search 
                searchTerm={this.state.searchTerm} 
                handleChange={this.handleChange}
                />
                <Auto 
                style={{
                    display:'flex',
                    flexDirection:"column",
                    flexWrap:"wrap",
                    marginTop:"100px",
                    marginBottom:"100px"
                }} 
                autos= {this.state.autos} 
                searchTerm={this.state.searchTerm}
                />
                </div>
                <Attractions 
                attraction={this.state.attraction} 
                />
                </div>
            </div>
        </div>
    );
    }
}
export default App;

// style={{
//     backgroundColor:"green"
// }}