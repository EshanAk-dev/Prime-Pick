import UserInfo from "./UserInfo";
import OrderHistoryItemContainer from "./OrderHistoryItemContainer";
import { useEffect, useState } from "react";
import api from "../../api";
import Spinner from "../ui/Spinner";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    api
      .get("user_info")
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <section style={{ backgroundColor: "#f4f4f9" }}>
      <div className="container">
        <UserInfo userInfo={userInfo} />

        <OrderHistoryItemContainer />
      </div>
    </section>
  );
};

export default UserProfilePage;
