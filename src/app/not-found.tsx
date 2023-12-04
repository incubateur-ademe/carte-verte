import Link from "next/link";

import { MatomoPush } from "@/components/utils/MatomoPush";
import { CenteredContainer } from "@/dsfr";

const NotFound = () => (
  <CenteredContainer my="4w">
    <MatomoPush event={["trackEvent", "404", "Page non trouvée"]} />
    <h2>Page non trouvée</h2>
    <p>La page que vous cherchez n'existe pas.</p>
    <Link href="/">Retourner à l'accueil</Link>
  </CenteredContainer>
);

export default NotFound;
