import React, { useEffect, useState } from "react";
import Axios from "../../../axios/Axios";
import axios from "axios";
import './restaurant.css'
function Restaurant() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        seats: ""
    });

    useEffect(() => {
        Axios.get("/Shops/AllShops")
            .then((response) => {
                setRestaurants(response.data.Allshops);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleBooking = async (id) => {
        if (!formData.date || !formData.time || !formData.seats) {
            alert("Please complete all booking details");
            return;
        }
        
        try {
            const response = await axios.post("/Users/SeatBooking", {
                Id: id,
                Date: formData.date,
                StartingTime: formData.time,
                Nofseats: formData.seats
            });
            
            alert("Booking confirmed!");
        } catch (error) {
            alert("Unable to complete booking. Please try again.");
        }
    };

    const timeOptions = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", 
        "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
    ];

    return (
        <div className="banner">
            {/* Include Banner component at the top */}
            
            <div className="container">
                <h1 className="section-title">Available Restaurants</h1>
                <p className="section-description">Select a restaurant and book your table today</p>
                
                {loading ? (
                    <div className="loading-state">
                        <p>Loading restaurants...</p>
                    </div>
                ) : (
                    <div className="restaurant-grid">
                        {restaurants.length > 0 ? (
                            restaurants.map((restaurant, index) => (
                                <div className="restaurant-card" key={index}>
                                    <div className="card-header">
                                        <h2>{restaurant.name || restaurant.Name}</h2>
                                    </div>
                                    
                                    <div className="card-info">
                                        <p><i className="icon-location"></i> {restaurant.Name}</p>
                                        <p><i className="icon-email"></i> {restaurant.email}</p>
                                    </div>
                                    
                                    <div className="booking-form">
                                        <div className="form-row">
                                            <input
                                                type="date"
                                                aria-label="Select date"
                                                onChange={(e) => handleChange("date", e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        
                                        <div className="form-row">
                                            <select 
                                                onChange={(e) => handleChange("time", e.target.value)}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select time</option>
                                                {timeOptions.map((time, idx) => (
                                                    <option key={idx} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <div className="form-row">
                                            <input
                                                type="number"
                                                placeholder="Number of seats"
                                                min="1"
                                                max="20"
                                                onChange={(e) => handleChange("seats", e.target.value)}
                                            />
                                        </div>
                                        
                                        <button 
                                            className="book-button" 
                                            onClick={() => handleBooking(restaurant.Id)}
                                        >
                                            Book a Table
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-state">
                                <p>No restaurants available</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            {/* You can import and include Footer component here */}
            {/* <Footer /> */}
        </div>
    );
}

export default Restaurant;