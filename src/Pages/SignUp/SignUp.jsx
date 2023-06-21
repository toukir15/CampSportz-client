import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbFidgetSpinner } from "react-icons/tb";
import Social from "../../components/Shared/Social/Social";

export default function SignUp() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  // const location = useLocation();
  const [error, setError] = useState("");
  const { user, createUser, updateUserProfile, loading } =
    useContext(AuthContext);
  console.log(loading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, confirm } = data;

    if (password !== confirm) {
      setError("don't match password");
      return;
    }

    const imageData = data?.image[0];
    const formData = new FormData();
    formData.append("image", imageData);
    reset();

    fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_img_upload_key
      } `,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // create user with email and password
        createUser(email, password)
          .then((result) => {
            console.log(result);

            // update user profile
            updateUserProfile(name, data.data.display_url)
              .then(() => {
                //make users api
                const user = { name, email, role: "User" };
                fetch(`${import.meta.env.VITE_livesite_url}/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(user),
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data));
                navigate("/");
              })
              .catch((userUpdateError) => {
                setError(userUpdateError.message);
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      });
  };
  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to CampSports</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#36d7b7] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                {...register("image", { required: true })}
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#36d7b7] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                type={`${confirmVisible ? "text" : "password"}`}
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#36d7b7] bg-gray-200 text-gray-900"
              />{" "}
              <div onClick={() => setVisible(!visible)}>
                {visible ? (
                  <>
                    <AiOutlineEye
                      size={22}
                      className="absolute right-2 bottom-3 cursor-pointer "
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineEyeInvisible
                      size={22}
                      className="absolute right-2 bottom-3 cursor-pointer "
                    />
                  </>
                )}
              </div>
              <div onClick={() => setConfirmVisible(!confirmVisible)}>
                {confirmVisible ? (
                  <>
                    <AiOutlineEye
                      size={22}
                      className="absolute right-2 bottom-3 cursor-pointer "
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineEyeInvisible
                      size={22}
                      className="absolute right-2 bottom-3 cursor-pointer "
                    />
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Confirm Password
                </label>
              </div>
              <input
                {...register("confirm", { required: true })}
                type={`${visible ? "text" : "password"}`}
                name="confirm"
                id="confirm"
                required
                placeholder="*******"
                className="w-full  px-3 py-2 border rounded-md border-gray-300 focus:outline-[#36d7b7] bg-gray-200 text-gray-900"
              />
              <div onClick={() => setConfirmVisible(!confirmVisible)}>
                {confirmVisible ? (
                  <>
                    <AiOutlineEye
                      size={22}
                      className="absolute right-2 bottom-3 cursor-pointer "
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineEyeInvisible
                      size={22}
                      className="absolute right-2 bottom-3 cursor-pointer "
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              disabled={user}
              type="submit"
              className="bg-[#36d7b7] w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <p className="">
                  <TbFidgetSpinner className="animate-spin m-auto" size="24" />
                </p>
              ) : (
                "Continue"
              )}
            </button>

            {/* error message  */}
            <div className="mt-2">
              {error ? <p className="text-red-500 mt-2">{error}</p> : ""}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase and one special character
                </p>
              )}
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <Social />
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#36d7b7] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
