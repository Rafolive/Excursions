import React from "react";
import { useTranslation } from "react-i18next";

import "./heading.scss";

const Heading = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading">{t("Available excursions")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Heading;
