import React from "react";

const listHouses = 'https://ancient-taiga-31359.herokuapp.com/api/houses'

class HouseAPI {
    get = async () => {
        try {
            const response = await fetch(listHouses, {
                mode: 'no-cors'
            });
            //const data = await response.json();

            return response.body || [];
        } catch (e){
            console.log('error in get:', e);
            return [];
        }
    }
    put = async (house) => {
        try {
            const response = await fetch(`${listHouses}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });  
            return await response.json();
        }
        catch (e){
           return null;
        }
    }
}
export const houseAPI = new HouseAPI();