import React from "react";
import AddHouse from "./AddHouse";
import {House} from './House';
import {houseAPI} from "./HouseAPI";

export class HouseList extends React.Component {
    constructor() {
        super();
        this.state = {
            houses: []
        };
    }
    componentDidMount(){
        this.fetchHouses();
    };
    fetchHouses = async () => {
        const houses = await houseAPI.get();
        this.setState({houses});
    };
    updateHouse = async (updateHouse) => {
        await houseAPI.put(updateHouse);
        this.fetchHouses();
    };
    // add button that calls AddHouse(/* some data object */) with the data input from a form
    render() {
        return (
            <div>
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
                <form>
                    <h3>Add a new house</h3>
                    <input
                    type='text'
                    placeholder='House name'
                    onChange={(e) => AddHouse(e.target.value)}
                    // value={house}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
