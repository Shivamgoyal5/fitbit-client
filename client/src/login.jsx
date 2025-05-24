// import React from "react";

// const CLIENT_ID = "23QCJS";
// const REDIRECT_URI = "https://fitbit-app-frontend.vercel.app/callback";  
// const FITBIT_AUTH_URL = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`;

// function Login() {
//     const handleLogin = () => {
//         window.location.href = FITBIT_AUTH_URL;
//     };

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Login with Fitbit</h1>
//             <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
//                 Login with Fitbit
//             </button>
//         </div>
//     );
// }

// export default Login;
import React from "react";

const CLIENT_ID = "23QCJS";
const REDIRECT_URI = "https://fitbit-app-frontend.vercel.app/callback";

const FITBIT_AUTH_URL = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`;

function Login() {
  const handleLogin = () => {
    window.location.href = FITBIT_AUTH_URL;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Connect with Fitbit</h1>
        <p className="text-gray-600 mb-8">Access your health and activity data by connecting your Fitbit account.</p>
        <button
          onClick={handleLogin}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 ease-in-out hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Connect to Fitbit
        </button>
      </div>
    </div>
  );
}

export default Login;
