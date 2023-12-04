"use client";

import { useEffect, useState } from "react";

import { StatTile } from "@/components/StatTile";
import { Grid } from "@/dsfr";
import { fetchMatomoData, type MatomoResult } from "@/lib/matomo";

export const StatsContent = () => {
  const [matomoData, setMatomoData] = useState<MatomoResult>({
    nbPageViews: 0,
    nbVisits: 0,
    nbUniqPageViews: 0,
  });

  useEffect(() => {
    void (async () => {
      const data = await fetchMatomoData();
      setMatomoData(data);
    })();
  }, []);

  return (
    <Grid haveGutters>
      <StatTile
        title="Nombre de visites"
        stats={matomoData.nbVisits}
        description="C'est le nombre de visites total du site sur les 12 derniers mois"
      />
      <StatTile
        title="Nombre de pages vues (total)"
        stats={matomoData.nbPageViews}
        description="C'est le nombre de pages vues au total sur le site sur les 12 derniers mois"
      />
      <StatTile
        title="Nombre de pages vues (uniques)"
        stats={matomoData.nbUniqPageViews}
        description="C'est le nombre de pages vues uniques sur le site sur les 12 derniers mois"
      />
    </Grid>
  );
};
