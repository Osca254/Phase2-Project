import React,{useRef, useState} from "react";
import "./RegisterHouse.css";
function Registerhouse({onAddingHouse}){
    const form = useRef()
    const [formData,setformData] = useState({
        name:"",
        age:"",
        phonenumber:"",
        typeofHouse: "Apartment",
        houseLocation:"Nairobi",
        numberOfRooms:"1",
        numberOfBedrooms :"1",
        preferedViewDay:"sunday",
        pictureLink:"https://media.istockphoto.com/photos/evening-view-of-a-modern-large-house-with-swimming-pool-picture-id1151832961?k=20&m=1151832961&s=612x612&w=0&h=srMuULiXVtHDUskK7PTvBnxvuRHV3r0jQs1gWGh3aeI="
    })
    function handleChange(event){
        setformData({...formData,[event.target.name]: event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("https://tasha-homes-api.herokuapp.com/housesdata",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(
      {
        name : formData.name,
        age:formData.age,
        phonenumber:formData.phonenumber,
        typeofHouse: formData.typeofHouse,
        houseLocation:formData.houseLocation,
        numberOfRooms:formData.numberOfRooms,
        numberOfBedrooms :formData.numberOfBedrooms,
        estimatedCost:formData.estimatedCost,
        preferedViewDay:formData.preferedViewDay,
        pictureLink : formData.pictureLink
    })
    }).then((response)=> response.json())
    .then((newHouse)=> onAddingHouse(newHouse))
    form.reset();
    }
    
return (
<div>
    <section className="registerHouse" >
        <div className="registerHouseA">
            <div className="register-box">
                <div className="left"></div>
                    <div className="right">
                        <form className="myForm" ref={form} onSubmit={handleSubmit}> 
                             <h2>Register with Us</h2>
                             <input type="text" onChange={handleChange}className="field" placeholder="Your Name" name="name" value={formData.name}/>
                             <input type="text" onChange={handleChange} className="field" placeholder="Your Age" name="age" value={formData.age}/>
                             <input type="tel" onChange={handleChange} className="field" placeholder="Phone Number" name="phonenumber" value={formData.phonenumber} />
                             <label>Type of House
                             <select onChange={handleChange} name="typeofHouse">
                                <option value="Apartment">Apartment</option>
                                <option value="Bungalow">Bungalow</option>
                                <option value="Mansion">Mansion</option>
                            </select>
                            </label>
                            <br />
                            <label>House Location
                            <select onChange={handleChange} name="houseLocation">
                                <option value="Nairobi">Nairobi</option>
                                <option value="Mombasa">Mombasa</option>
                                <option value="Nakuru">Nakuru</option>
                                <option value="Eldoret">Eldoret</option>
                            </select>
                            </label>
                            <br />
                            <label>Number of rooms
                            <select onChange={handleChange} name="numberOfRooms">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6 and more">6 and more</option>
                            </select>
                            </label>
                            <br />
                            <label>Number of Bedrooms
                            <select onChange={handleChange} name="numberOfBedrooms">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6 and more">6 and more</option>
                            </select>
                            </label>
                            <label>Preffered View day
                            <select onChange={handleChange} name="preferedViewDay">
                                <option value="sunday">Sunday</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                            </select>
                            </label>
                            <input type="text" name="estimatedCost" onChange={handleChange} className="field" placeholder="Estimated Cost" value={formData.estimatedCost}/> 
                            <input type="text" name="pictureLink" onChange={handleChange} className="field" placeholder="Copy link of a picture of the house" value={formData.pictureLink}/>
                            <input type="submit" className="registerbtn"/>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}
export default Registerhouse;