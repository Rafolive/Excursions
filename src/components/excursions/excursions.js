import React from "react";
import Button from "../button/button";
import { useTranslation } from "react-i18next";
// import Icon from "../icons/icons";
// import LocaleContext from "../../contexts/locale";
import "./excursions.scss";

// const cdn = "https://icdn-a.mouzenidis.com"; // process.env.REACT_APP_PHOTOS_CDN;

const Excursions = ({ excursions, fetching }) => {
  return (
    <div className="container">
      <div className="row">
        {excursions &&
          excursions.items &&
          excursions.items.map(item => {
            return <ExcursionsItem key={item.id} excursion={item} />;
          })}
        {fetching && <Fetching />}
      </div>
    </div>
  );
};

export default Excursions;

const ExcursionsItem = props => {
  const { excursion } = props;
  const { t, i18n } = useTranslation();
  const description =
    excursion &&
    excursion.description &&
    excursion.description.replace(
      /(<p>[\s]*<\/p>|<strong>[\s]*<\/strong>)/g,
      ""
    );
  return (
    <div key={excursion.id} className="col-md-12">
      <div className="excursions-item">
        <div
          className="excursions-item-image"
          style={{
            backgroundImage: `url(${excursion.photo}?w=320&h=220&mode=crop&quality=75`
          }}
        ></div>
        <div className="excursions-item-info">
          <div className="excursions-item-info-title">
            {excursion.name ? excursion.name : "Excursion"}
          </div>
          <div className="excursions-item-info-country">
            {excursion.country && excursion.country.name},{" "}
            {excursion.region && excursion.region.name}
          </div>
          {description && (
            <div
              dangerouslySetInnerHTML={{
                __html: description
              }}
              className="excursions-item-info-description"
            />
          )}
          {/* <Icon icon="group" />
          <Icon icon="time" /> */}
          <div>
            <Button
              tag="a"
              href={`${
                i18n.language === "ru"
                  ? "https://www.mouzenidis-travel.ru/excursions/"
                  : "https://www.mouzenidis.com/en-us/excursions/"
              }${excursion.seoUrl}`}
              size="small"
              label="Button"
              theme="alternative"
              target="_blank"
            >
              {t("Booking")}
            </Button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

const Fetching = () => {
  return (
    <div className="col-md-12">
      <div className="excursions-item">
        <div className="loading-row">
          <div className="avatar loading-animate"></div>
          <div className="loading-row-text">
            <div className="text w-70 loading-animate"></div>
            <div className="text w-100 loading-animate"></div>
            <div className="text w-60 loading-animate"></div>
            <div className="text w-100 loading-animate"></div>
            <div className="text w-50 loading-animate"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
