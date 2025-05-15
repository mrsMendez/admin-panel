import { useContext } from "react";
import {GoogleLogin} from "@react-oauth/google"
import { AuthContext } from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";

export default function Login(){
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    return(
        
        <div className="min-h-screen flex">
            <div className="hidden md:flex w-1/2 bg-cover bg-center"
                style ={{
                    backgroundColor: "#3498db", 
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <div className="bg-black bg-opacity-50 w-full flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold px-4">
                        Bienvenido a Bytecode
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-blue-50">
                <div className="w-full max-w-md p.8">
                    <div className="flex justify-center mb-6">
                        {/*COMPONENTE DE react-icon*/}
                        <FaUserCircle className="text-7xl text-gray-700" />
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Inicia sesión
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Accede a tu panel de control con tu cuenta de Google
                    </p>
                    <div className="flex justify-center">
                        <GoogleLogin
                            onSuccess={(res) => {
                                if(res.credential){
                                    login(res.credential);
                                    navigate("/");
                                }
                            }}
                            onError={() =>
                                alert("Fallo al iniciar sesión")
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

