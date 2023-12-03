import { fr } from "@codegouvfr/react-dsfr";

export interface StatTileProps {
  description?: React.ReactNode | string;
  stats: number | string;
  title: string;
}

export const StatTile = (props: StatTileProps): JSX.Element => {
  return (
    <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
      <div className={fr.cx("fr-card", "fr-card--no-arrow")}>
        <div className={fr.cx("fr-card__body")}>
          <strong className={fr.cx("fr-display--md")}>{props.stats}</strong>
          <h2 className={fr.cx("fr-card__title", "fr-mb-4w")}>{props.title}</h2>
          {props.description && (
            <div className={fr.cx("fr-card__desc")}>
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
