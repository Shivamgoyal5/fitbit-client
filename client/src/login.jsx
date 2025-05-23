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
// import React from "react";
// import { FaHeartbeat } from "react-icons/fa";

// const CLIENT_ID = "23QCJS";
// const REDIRECT_URI = "https://fitbit-app-frontend.vercel.app/callback";

// const FITBIT_AUTH_URL = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
//   REDIRECT_URI
// )}&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`;

// function Login() {
//   const handleLogin = () => {
//     window.location.href = FITBIT_AUTH_URL;
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//       style={{
//         backgroundImage:
//           "linear-gradient(to bottom right, rgba(79,70,229,0.8), rgba(219,39,119,0.8)), url('/back.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Decorative Blurred Circles */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

//       {/* Main Card */}
//       <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md text-center z-10">
//         <div className="flex justify-center mb-6 text-pink-500">
//           <FaHeartbeat className="text-5xl animate-bounce" />
//         </div>
//         <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
//           Connect with Fitbit
//         </h1>
//         <p className="text-gray-700 text-sm mb-8 leading-relaxed">
//           Sync your health and wellness data with our app. Monitor your heart rate, sleep, activity, and more in one place.
//         </p>
//         <button
//           onClick={handleLogin}
//           className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300"
//         >
//           Connect to Fitbit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React from "react";
import { FaHeartbeat } from "react-icons/fa";

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
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      {/* Main Card */}
      <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-lg w-full max-w-md text-center z-10">
        <div className="flex justify-center mb-6 text-[#00b4d8]">
          <FaHeartbeat className="text-5xl" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Connect with Fitbit
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sync your health and wellness data with our app. Monitor your heart rate, sleep, activity, and more in one place.
        </p>
        
        <button
          onClick={handleLogin}
          className="bg-[#0077b6] hover:bg-[#023e8a] text-white px-8 py-3 rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Connect to Fitbit
        </button>
        
        <div className="mt-6 text-xs text-gray-500">
          <p>RFC Fatouma</p>
          <p className="mt-2">{new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
