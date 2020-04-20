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
    }
    }

    handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
        console.log(this.state.searchTerm);
    });
    };

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
                food: []
            })
        })
        .catch((err) => {
        console.log(err);
        });
    };

    componentDidMount(){
        // this.getFood()
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
                    padding:"35px"
                }}>
                <Food />

                <Auto />

                <Attractions />
                </div>
            </div>
        </div>
    );
    }
}
export default App;
