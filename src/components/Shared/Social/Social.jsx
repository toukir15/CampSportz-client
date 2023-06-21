import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Social() {
  const { googleSignIn, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          role: "User",
        };
        navigate("/");
        //make user api
        fetch(`${import.meta.env.VITE_livesite_url}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
      })
      .catch((error) => {
        setError(error?.message);
        // setLoading(false);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={26} />
      <p>Continue with Google</p>
    </div>
  );
}
