// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Profile() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//     const token = localStorage.getItem("access_token"); // or the key you're using
//     if (!token) return console.error("Access token not found in localStorage");

//     axios.get("https://fitbit-app-backend.vercel.app/profile", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         withCredentials: true
//     })
//     .then(response => setData(response.data))
//     .catch(error => console.error("Error fetching profile:", error));
// }, []);


//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Fitbit Profile</h1>
//             {data ? (
//                 <div>
//                     <h2>Name: {data.profile.user.fullName}</h2>
//                     <p>Age: {data.profile.user.age}</p>
//                     <p>Height: {data.profile.user.height} cm</p>
//                     <p>Weight: {data.profile.user.weight} kg</p>
//                     <p>Gender: {data.profile.user.gender}</p>
//                     <h2>Steps Today: {data.steps["activities-steps"]?.[0]?.value || "N/A"}</h2>
//                     <h2>Calories Burned Today: {data.calories.caloriesOut || "N/A"} kcal</h2>
//                     <h2>Distance Walked: {
//                         data.calories?.distances?.find(d => d.activity === "total")?.distance ?? "N/A"
//                     } km</h2>
//                     <h2>Running distance: {
//                         data.calories?.distances?.find(d => d.activity === "veryActive")?.distance ?? "N/A"
//                     } km</h2>
//                 <h2>Cycling: {
//                         data.calories?.distances?.find(d => d.activity === "moderatelyActive")?.distance ?? "N/A"
//                     } km</h2>

//                 <h2>Challenge Today: {data.groupInfo.challenge}</h2>
//  <h2>Challenge Today: {data.groupInfo.quote}</h2>
//  <h2>Challenge Today: {data.groupInfo.tips}</h2>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }


// export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/joy/CircularProgress';
import { AiOutlineEye } from 'react-icons/ai';
import './profile.css';

function Profile() {
    const [data, setData] = useState(null);
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) return console.error("Access token not found in localStorage");

        axios.get("https://fitbit-app-backend.vercel.app/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        })
        .then(response => {
            const res = response.data;
            setData(res);

            // Build metric boxes from response data
            const temp = [
                {
                    name: 'Steps',
                    value: parseInt(res.steps["activities-steps"]?.[0]?.value || 0),
                    unit: 'steps',
                    goal: 10000,
                    goalUnit: 'steps',
                },
                {
                    name: 'Calories Burned',
                    value: parseInt(res.calories.caloriesOut || 0),
                    unit: 'kcal',
                    goal: 2500,
                    goalUnit: 'kcal',
                },
                {
                    name: 'Distance Walked',
                    value: parseFloat(res.calories?.distances?.find(d => d.activity === "total")?.distance || 0),
                    unit: 'km',
                    goal: 8,
                    goalUnit: 'km',
                },
                {
                    name: 'Running',
                    value: parseFloat(res.calories?.distances?.find(d => d.activity === "veryActive")?.distance || 0),
                    unit: 'km',
                    goal: 5,
                    goalUnit: 'km',
                },
                {
                    name: 'Cycling',
                    value: parseFloat(res.calories?.distances?.find(d => d.activity === "moderatelyActive")?.distance || 0),
                    unit: 'km',
                    goal: 10,
                    goalUnit: 'km',
                },
                {
                    name: 'Weight',
                    value: parseFloat(res.profile.user.weight || 0),
                    unit: 'kg',
                    goal: 70,
                    goalUnit: 'kg',
                },
            ];
            setMetrics(temp);
        })
        .catch(error => console.error("Error fetching profile:", error));
    }, []);

    function simplifyFraction(numerator, denominator) {
        function gcd(a, b) {
            return b === 0 ? a : gcd(b, a % b);
        }
        const commonDivisor = gcd(numerator, denominator);
        return [Math.round(numerator / commonDivisor), Math.round(denominator / commonDivisor)];
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Fitbit Profile</h1>
            {data ? (
                <>
                    <h2 style={{ margin: "20px 0" }}>Welcome, {data.profile.user.fullName}</h2>
                    <div className="meters">
                        {metrics.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="card-header">
                                    <div className="card-header-box">
                                        <div className="card-header-box-name">{item.name}</div>
                                        <div className="card-header-box-value">
                                            {item.value} {item.unit}
                                        </div>
                                    </div>
                                    <div className="card-header-box">
                                        <div className="card-header-box-name">Target</div>
                                        <div className="card-header-box-value">
                                            {item.goal} {item.goalUnit}
                                        </div>
                                    </div>
                                </div>

                                <CircularProgress
                                    color="neutral"
                                    determinate
                                    variant="solid"
                                    size="lg"
                                    value={(item.value / item.goal) * 100}
                                >
                                    <span className="textincircle">
                                        {simplifyFraction(item.value, item.goal)[0]} / {simplifyFraction(item.value, item.goal)[1]}
                                    </span>
                                </CircularProgress>

                                <button
                                    onClick={() => {
                                        window.location.href = `/report/${item.name}`;
                                    }}
                                >
                                    Show Report <AiOutlineEye />
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;




