import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import Heading from "../components/heading/heading";
import Excursions from "../components/excursions/excursions";
import axios from "axios";
import i18n from "i18next";
import "./app.scss";

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState();
  const [language, setLanguage] = useState("en");

  const triggerFetch = async () => {
    setFetching(true);
    const result = await axios.get(
      `/excursions/${
        i18n.language === "ru" ? "excursions" : "excursions.en"
      }.json`
    );
    setFetchedData(result);
    setFetching(false);
  };

  useEffect(() => {
    triggerFetch();
  }, [language]);

  return (
    <>
      <Header setLanguage={setLanguage} />
      <section className="mt-30">
        <Heading />
        {fetchedData && fetchedData.data && (
          <Excursions fetching={fetching} excursions={fetchedData.data.data} />
        )}
      </section>
    </>
  );
};

export default App;
