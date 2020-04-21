import React, { Component } from "react";
import Search from "./Search";
// import { searchIt } from "../services/search";
import Auto from "./Auto";
import Food from './Food';
import Attractions from "./Attractions";


class App extends Component {
    constructor() {
    super();
    this.state = {
        searchTerm: "",
        food:[],
        attraction:[],
        auto:[],
    }
    }

    handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
        console.log(this.state.searchTerm);
    });
    };
    getAuto = () => {
        
    }

    getFood = () => {
    fetch(
        "https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=12.91285&longitude=100.87808",
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
            "https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&currency=USD&limit=30&distance=5&lang=en_US&longitude=100.87808&latitude=12.91285",
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
        attraction:[]
    })
})
.catch(err => {
	console.log(err);
});
    }

    componentDidMount(){
        // this.getFood()
        // this.getAttraction()
    }

    render() {
    return (
        <div>
            <div>
            <Search />
                <div
                style={{
                    marginTop: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}>
                <Food style={{padding:"350px"}} food= {this.state.food}/>

                <Auto style={{paddingRight:"350px"}}/>

                <Attractions />
                </div>
            </div>
        </div>
    );
    }
}
export default App;
