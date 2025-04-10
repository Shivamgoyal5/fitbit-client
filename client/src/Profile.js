import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [data, setData] = useState(null);

    useEffect(() => {
    const token = localStorage.getItem("access_token"); // or the key you're using
    if (!token) return console.error("Access token not found in localStorage");

    axios.get("https://fitbit-app-backend.vercel.app/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        withCredentials: true
    })
    .then(response => setData(response.data))
    .catch(error => console.error("Error fetching profile:", error));
}, []);


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Fitbit Profile</h1>
            {data ? (
                <div>
                    <h2>Name: {data.profile.user.fullName}</h2>
                    <p>Age: {data.profile.user.age}</p>
                    <p>Height: {data.profile.user.height} cm</p>
                    <p>Weight: {data.profile.user.weight} kg</p>
                    <p>Gender: {data.profile.user.gender}</p>
                    <h2>Steps Today: {data.steps["activities-steps"]?.[0]?.value || "N/A"}</h2>
                    <h2>Calories Burned Today: {data.calories.caloriesOut || "N/A"} kcal</h2>
                    <h2>Distance Walked: {
                        data.calories?.distances?.find(d => d.activity === "total")?.distance ?? "N/A"
                    } km</h2>
                    <h2>Running distance: {
                        data.calories?.distances?.find(d => d.activity === "veryActive")?.distance ?? "N/A"
                    } km</h2>
                <h2>Cycling: {
                        data.calories?.distances?.find(d => d.activity === "moderatelyActive")?.distance ?? "N/A"
                    } km</h2>
                
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}


export default Profile;



