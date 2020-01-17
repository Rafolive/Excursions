import React from "react";
import Logo from "../../images/logo.svg";
import { useTranslation } from "react-i18next";
import "./header.scss";

const Header = props => {
  const handleLangChange = e => {
    const lang = e.target.value;
    if (lang && lang !== i18n.language) {
      throw new Promise(resolve => {
        i18n.changeLanguage(lang, () => {
          resolve(lang);
          props.setLanguage(lang);
        });
      });
    }
  };

  const { i18n } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className="header">
          <img src={Logo} className="logo" alt="Mouzenidis Travel" />
          <div>
            <img
              className="flag"
              src={`/flags/${i18n.language}.svg`}
              alt={`Flag of ${i18n.language}`}
              width="15px"
            />
            <select
              className="header-select"
              onChange={handleLangChange}
              value={i18n.language}
            >
              ><option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
