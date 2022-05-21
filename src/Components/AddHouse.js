import { HouseAPI } from "./HouseAPI";

const listHouses = 'https://ancient-taiga-31359.herokuapp.com/api/houses'

export default function AddHouse (houseData){
    
    fetch(listHouses, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(houseData)
    });
}