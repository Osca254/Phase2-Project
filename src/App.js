import React,{useState,useEffect} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import {Route,Switch} from "react-router-dom"
import About from "./About/About"
import Contacts from './Contacts/Contacts';
import Viewhouse from "./ViewHouse/Viewhouse"
import Registerhouse from './RegisterHouse/Registerhouse';
function App() {
  const[houseInfo, sethouseInfo] = useState([])
  const [housetype, setHouseType] = useState ("All")
  const [houseLocation , setHouseLocation] = useState("All place")
  const [numberOfBedrooms, setNumberofBedrooms] = useState ("Any")
useEffect(()=>
{
    fetch("https://tasha-homes-api.herokuapp.com/housesdata")
    .then((response)=> response.json())
    .then((data)=>sethouseInfo(data))
},[])
function addingHouse(newHouse)
{
  sethouseInfo([...houseInfo,newHouse])
}
function handleChangeByHouseType(event){
setHouseType(event.target.value)
}
function handleChangeByHouseLocation(event)
{
  setHouseLocation(event.target.value)
}
function handleChangeByNumberofBedrooms(event)
{
  setNumberofBedrooms(event.target.value)
}
// function handleClick(houseId)
// {
//   fetch(`https://tasha-homes-api.herokuapp.com/housesdata/${houseId}`,{
//     method : "DELETE",
//   }).then((response)=> response.json())
//   .then((data)=> console.log(data))
//   const updatedHouseInfo = houseInfo.filter((item)=>
//   {
//    return(item.id !== houseId) 
//   })
//   sethouseInfo(updatedHouseInfo)
// }
const filteredHouses = houseInfo.filter((item)=> {if (housetype === "All" || housetype === item.typeofHouse)
{
  return true
}}).filter((item)=> {
  if(houseLocation === "All place" || houseLocation === item.houseLocation)
  {
    return true;
  }
}).filter((item)=> {
  if(numberOfBedrooms === "Any" || numberOfBedrooms === item.numberOfBedrooms)
  {
    return true;
  }
})

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <About />
        </Route >
        <Route exact path="/registerhouse">
          <Registerhouse onAddingHouse={addingHouse}/>
        </Route>
        <Route exact path="/viewhouse">
          <Viewhouse filteredHouses={filteredHouses}
           handleChangeByHouseType={handleChangeByHouseType} handleChangeByHouseLocation={handleChangeByHouseLocation} handleChangeByNumberofBedrooms={handleChangeByNumberofBedrooms} 
          />
        </Route>
      </Switch>
      <Contacts />
    </div>
  );
}

export default App;
