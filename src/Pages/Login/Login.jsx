import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbFidgetSpinner } from "react-icons/tb";
import Social from "../../components/Shared/Social/Social";

export default function Login() {
  const { login, user, loading } = useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [visible, setVisible] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    // login
    login(email, password)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
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
                {...register("password", { required: true })}
                type={`${visible ? "text" : "password"}`}
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#36d7b7] bg-gray-200 text-gray-900"
              />
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
            {error ? <p className="text-red-500 mt-2">{error}</p> : ""}
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-[#36d7b7] text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        {/* social component  */}
        <Social />

        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-[#36d7b7] text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
