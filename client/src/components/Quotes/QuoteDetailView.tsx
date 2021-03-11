import React from "react";

import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import CommuteRoundedIcon from "@material-ui/icons/CommuteRounded";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";

import "./QuoteDetailView.css";
import { Quote } from "../../types";

interface Props {
  selectedQuote: Quote | null;
  dropdownView?: boolean;
}

function QuoteDetailView({ selectedQuote, dropdownView = false }: Props) {
  function getDate(dateTime: string) {
    const date = new Date(dateTime);
    return date.toLocaleDateString("en-US");
  }

  return (
    <div
      className={
        !dropdownView ? "quoteDetailContainer" : "quoteDetailContainer dropdown"
      }
    >
      {!dropdownView && (
        <div className="detailHeader">
          <InfoOutlinedIcon className="detailHeaderIcon" fontSize="large" />
          <div className="detailHeaderTitle">Selected quote details</div>
        </div>
      )}
      {!selectedQuote ? (
        <div className="noSelectedQuoteContainer">
          Please select a quote to view its details.
        </div>
      ) : (
        <div className="selectedQuoteContainer">
          <div className="idDetail">ID #{selectedQuote.id}</div>

          <div className="detailRow">
            <div className="doubleDetailRow">
              <div className="detailIconContainer">
                <FlightTakeoffIcon className="detailIcon" />
              </div>
              {selectedQuote.departure_location}
            </div>
            <div className="doubleDetailRow">
              <div className="detailIconContainer">
                <FlightLandIcon className="detailIcon" />
              </div>
              {selectedQuote.destination_location}
            </div>
          </div>

          <div className="detailRow">
            <div className="doubleDetailRow">
              <div className="detailIconContainer">
                <EventRoundedIcon className="detailIcon" />
              </div>
              Depart: {getDate(selectedQuote.departure_date_time)}
            </div>
            <div className="doubleDetailRow">
              Return: {getDate(selectedQuote.return_date_time)}
            </div>
          </div>

          <div className="detailRow">
            <div className="doubleDetailRow">
              <div className="detailIconContainer">
                <PersonOutlineRoundedIcon className="detailIcon" />
              </div>
              {selectedQuote.num_travellers}
              {selectedQuote.num_travellers === 1 ? " traveler" : " travellers"}
            </div>
            <div className="doubleDetailRow">
              <div className="detailIconContainer">
                <CommuteRoundedIcon className="detailIcon" />
              </div>
              {selectedQuote.transportation}
            </div>
          </div>

          <div className="detailRow">
            <div className="singleDetailRow">
              <div className="detailIconContainer">
                <LocalAtmRoundedIcon className="detailIcon" />
              </div>
              ${selectedQuote.price.toFixed(2)}
            </div>
          </div>

          <div className="detailRow">
            <div className="doubleDetailRow">
              <div className="detailIconContainer">
                <ContactMailRoundedIcon className="detailIcon" />
              </div>
              {selectedQuote.contact_name}
            </div>
            <div className="doubleDetailRow">
              Email: {selectedQuote.contact_email}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteDetailView;
