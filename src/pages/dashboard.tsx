import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authcontext";
import { api } from "../services/api";

export default function DashBoard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);

  return <h1>{user?.email}</h1>;
}
