import { useContext } from "react";
import { Link } from "react-router";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  )
}

const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
            Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-bold">
            Register
          </Link>
      </p>
    );
} else {
  return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
  );
}
}
export default AuthLayouts;