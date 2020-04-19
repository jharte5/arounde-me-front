import React, {Component} from 'react'
import Search from './Search'
import {searchIt} from '../services/search'


class App extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: '',

        }
    };
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value}, () => {
            console.log(this.state.searchTerm)
        });
    };

    render() {
        return (
            <div style={{
				marginTop:'100px', 
				display:'flex', 
				justifyContent:'center', 
				alignItems:'center', 
				flexDirection:'column'}}>
                <Search/>
            </div>
        )
    }
}
export default App