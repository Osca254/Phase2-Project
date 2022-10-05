import React from "react";
import "./ViewHouse.css"
function Viewhouse({filteredHouses,handleChangeByHouseType,handleChangeByHouseLocation,handleChangeByNumberofBedrooms}){
    const displayHouses = filteredHouses.map((element)=>
    {   return( 
        <div class="col-md-3">
            <div class="card p-2">
                <div class="text-right"> <small>{element.typeofHouse}, Number of Bedrooms : {element.numberOfBedrooms}</small> </div>
                <div class="text-center mt-2 p-3"> <img src={element.pictureLink} width="250" height="200"/> <span class="d-block font-weight-bold">{element.houseLocation}</span>
                    <hr/> <span>{element.name}</span>
                    <div class="d-flex flex-row align-items-center justify-content-center"> <i class="fa fa-map-marker"></i> <small class="ml-1">{element.phonenumber}</small> </div>
                    <div class="d-flex justify-content-between mt-3"> <span>{element.estimatedCost}</span> </div>
                </div>
            </div>
           
        </div>

    )})

    return (<div>
        <div className="selectCriteria">
            <form>
                <label> Filter by type of house
                <select onChange={handleChangeByHouseType}>
                    <option value="All">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Mansion">Mansion</option>
                </select>
                </label>
                <label>
                    Filter by Location
                    <select onChange={handleChangeByHouseLocation}>
                        <option value="All place">All places</option>
                        <option value="Nairobi">Nairobi</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Nakuru">Nakuru</option>
                        <option value="Eldoret">Eldoret</option>
                    </select>
                </label>
                <label> Filter by number of Bedrooms  
                    <select onChange={handleChangeByNumberofBedrooms}>
                    <option value="Any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6 and more">6 and more</option>
                    </select>
                </label>
            </form>
            </div>
            {/* <h3 style={{textAlign:"center"}}>Please recall to view contacts before buying house</h3> */}
        <div class="row mt-2 g-1">
            {displayHouses}
            </div>
        </div>
    )
}
export default Viewhouse;