import React, { useEffect, useState } from "react";
import keycloak from "./keycloak";
import { storeKeycloakInfo, loadKeycloakInfo } from "./functions";

const OIDAuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  console.log(keycloak);

  useEffect(() => {
    if (loadKeycloakInfo()) {
      setUserInfo(loadKeycloakInfo());
    } else {
      keycloak
        .init()
        .then((user) => {
          setUserInfo(user);
          storeKeycloakInfo(user);
        })
        .catch((err) => console.log("redirecting to keycloak"));
    }
  }, []);

  return <>{userInfo ? children : <div>Logando...</div>}</>;
};

export default OIDAuthProvider;
