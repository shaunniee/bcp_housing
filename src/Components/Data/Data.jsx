import React from "react";
import { FaPersonCane, FaPersonShelter } from "react-icons/fa6";
import { SiWorldhealthorganization } from "react-icons/si";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

import "./Data.scss";
function Data() {
  return (
    <div className="stats">
      <h2 className="stats-head">Why agefriendly Ireland?</h2>
      <div className="stats-data">
        <div className="stats-data_item">
          <div className="stats-data_item--icon stats-data_item--icon--1">
            <FaPersonCane></FaPersonCane>
          </div>
          <div className="stats-data_item--value">15%</div>
          <p className="stats-data_item--desc">
            Of the Irish population is <b>age 65 years and older</b> ...and this
            number is growing
          </p>
        </div>

        <div className="stats-data_item">
          <div className="stats-data_item--icon stats-data_item--icon--2">
            <FaPersonShelter />
          </div>
          <div className="stats-data_item--value">25%</div>
          <p className="stats-data_item--desc">
            Of the above 65 population live alone
          </p>
        </div>

        <div className="stats-data_item">
          <div className="stats-data_item--icon stats-data_item--icon--3">
            <SiWorldhealthorganization />
          </div>
          <div className="stats-data_item--value">3 out of 4</div>
          <p className="stats-data_item--desc">
            Of the above 65 population have bad health conditions
          </p>
        </div>
      </div>
     

    </div>
  );
}

export default Data;
