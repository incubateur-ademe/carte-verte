import styles from "./Stats.module.scss";

export const StatsContent = () => {
  return (
    <iframe
      title="Statistiques de Carte Verte"
      className={styles["stats-iframe"]}
      src="https://notion.incubateur.ademe.fr/ebd/2256523d57d7801b8b48d419308b9bb3"
      width="100%"
      height="600"
      allowFullScreen
    />
  );
};
