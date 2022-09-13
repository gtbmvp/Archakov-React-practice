import { Navigate, useOutletContext } from "react-router-dom";

const Profile = () => {
  const [appToken, setAppToken] = useOutletContext();

  if (localStorage.getItem("token") !== appToken) return <Navigate to="/" />;

  return <h1>Authorized profile page</h1>;
};

export default Profile;
