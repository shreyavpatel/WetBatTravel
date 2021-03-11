import React from "react";

import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";
import { List, ListItem } from "@material-ui/core";

import "./QuotesList.css";
import QuoteListItem from "./QuoteListItem";
import { Quote } from "../../types";

interface Props {
  quotes: Quote[];
  onSelectQuote: (quote: Quote) => void;
}

function QuotesList({ quotes, onSelectQuote }: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleSelectQuote = (quoteId: number, index: number) => {
    const quote = quotes.find(({ id }) => {
      return id === quoteId;
    });

    if (quote) {
      onSelectQuote(quote);
      setSelectedIndex(index);
    }
  };

  return (
    <div className="quotesTableContainer">
      <List
        className="quotesTable"
        component="div"
        subheader={
          <div className="listHeader">
            <FormatQuoteRoundedIcon
              className="listHeaderIcon"
              fontSize="large"
            />
            <div className="listHeaderTitle">Quotes</div>
          </div>
        }
      >
        <ListItem className="listHeaderRow">
          <div className="listHeaderRowField">ID #</div>
          <div className="listHeaderRowField">NAME</div>
          <div className="listHeaderRowField">DESTINATION</div>
          <div className="listHeaderRowField">PRICE</div>
        </ListItem>
        {quotes.length > 0 ? (
          quotes.map((value, index) => {
            return (
              <QuoteListItem
                key={index}
                quote={value}
                selected={selectedIndex === index}
                onSelect={(quoteId) => handleSelectQuote(quoteId, index)}
              />
            );
          })
        ) : (
          <div className="emptyListLabel">
            There are no quotes available to currently view.
          </div>
        )}
      </List>
    </div>
  );
}

export default QuotesList;
