import React, { useEffect, useState } from "react";
import Axios from "../../../axios/Axios";
import "./banner.css";
import axios from "axios";

function Banner() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("/Shops/AllShops")
            .then((response) => {
                console.log(response.data);
                setProducts(response.data.Allshops);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const checkseats = (Id) =>{
        try {
            console.log("clicked",Id)
            axios.post("/Users/AvailablityCheck").then((response)=>{
                console.log(response.data,"data")
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="banner">
            <div className="imgbox">
                <img className="bannerimg" src="./Pictures/bannerimg.jpg" alt="Banner" />
                <div className="overlay-text">
                    <h1>Happiness is homemade – and served at Yummy!</h1>
                </div>
            </div>

            <div className="cardbox">
                {products.map((shop, index) => (
                    <div className="card" key={index}>
                        <h2>{shop.name}</h2>
                        <div className="inner-card">
                            <p><strong>Name:</strong> {shop.Name}</p>
                            <p><strong>ID:</strong> {shop.Id}</p>
                            <p><strong>Email:</strong> {shop.email}</p>
                        </div>
                        <div className="card_bottom">                            
                           
                            <form className="form">
                                <label><strong>Date</strong></label>
                                <input type="date" /><br /><br />
                                <label><strong>Time</strong></label>
                                <select>
                                 {[
                                   "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
                                    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
                                    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
                                    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
                                  "09:00 PM", "09:30 PM", "10:00 PM"
                                 ].map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                                  ))}
                                </select>
                            </form>
                            <div className="availability_button">
                                <button className="availability_btn" onClick={()=>checkseats(shop.Id)}> Availability</button>
                            </div>
                        </div>
                           
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
