import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated && user ? (
        <div className="w-[50%] flex flex-wrap m-auto mt-10 p-10 bg-white">
          <div className="w-[25%] border-r-4 p-5">
            <img className="rounded-full" src={user?.picture} alt="picture" />
          </div>
          <div>
            <div className="ml-2 border-b-4 flex flex-col p-7">
              <h1>Name: {user?.name}</h1>
              <h1>Email: {user?.email}</h1>
            </div>

            <div className="p-5">
              <button
                className="bg-orange-500 p-3 w-32 text-white"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>User not logged in</h1>
          <NavLink to="/login">Go to page</NavLink>
        </div>
      )}
    </div>
  );
}

export default Profile;