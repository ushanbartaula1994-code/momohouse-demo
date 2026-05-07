import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  if (isAuthenticated) return <h1>You are already logged in!</h1>;

  return (
    <div className="w-96 m-auto p-10 bg-white space-y-4 mt-10">
      <h2 className="text-center text-xl font-bold">Login</h2>

      <button
        className="border w-full flex items-center justify-center gap-2 p-2"
        onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
      >
        <FcGoogle size={20} />
        Login with Google
      </button>

      <button
        className="bg-amber-700 w-full p-2 text-white"
        onClick={() => loginWithRedirect()}
      >
        Login with Email/Password
      </button>
    </div>
  );
}

export default Login