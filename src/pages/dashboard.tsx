import { destroyCookie } from "nookies";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authcontext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSRRAuth } from "../utils/withSRRAuth";

export default function DashBoard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return <h1>{user?.email}</h1>;
}
export const getServerSideProps = withSRRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
