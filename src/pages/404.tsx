import { push } from "@socialgouv/matomo-next";
import { type NextPage } from "next";
import { useEffect } from "react";

const NotFound: NextPage = () => {
  useEffect(() => {
    push(["trackEvent", "404", "Page non trouvée"]);
  }, []);

  return (
    <div className="fr-container fr-my-6w">
      <h1>404 - Page non trouvée</h1>
    </div>
  );
};

export default NotFound;
