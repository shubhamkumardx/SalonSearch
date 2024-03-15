import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ProtectedRoute(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = sessionStorage.getItem("user");


    if (!userToken || userToken === "undefined") {
      setisLoggedIn(false);
      return navigate("/");
    }
    setisLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? props.children : null}</>;
}

export default ProtectedRoute;
