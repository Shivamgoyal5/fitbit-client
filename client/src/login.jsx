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
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-sm w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Login with Fitbit</h1>
        <motion.button
          onClick={handleLogin}
          className="bg-pink-500 hover:bg-pink-600 transition-all duration-200 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          Connect to Fitbit
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Login;
