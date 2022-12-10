import React from "react";
import Row from "./Row";

import { API_REQUESTS } from "../api/requests";

const Rows = () => {
  return (
    <div>
      <Row rowId="1" title="Trending" fetchURL={API_REQUESTS.Trending} />
      <Row rowId="2" title="Upcoming" fetchURL={API_REQUESTS.TopUpcoming} />
      <Row rowId="3" title="Top Rated" fetchURL={API_REQUESTS.TopRated} />
      <Row rowId="4" title="Sci Fi" fetchURL={API_REQUESTS.SciFi} />
      <Row rowId="5" title="War" fetchURL={API_REQUESTS.War} />
      <Row rowId="6" title="Crime" fetchURL={API_REQUESTS.Crime} />
      <Row rowId="7" title="Animation" fetchURL={API_REQUESTS.Animation} />
      <Row rowId="8" title="Horror" fetchURL={API_REQUESTS.Horror} />
      <Row rowId="9" title="Comedy" fetchURL={API_REQUESTS.Comedy} />
      <Row rowId="10" title="Drama" fetchURL={API_REQUESTS.Drama} />
      <Row rowId="11" title="Adventure" fetchURL={API_REQUESTS.Adventure} />
    </div>
  );
};

export default Rows;
