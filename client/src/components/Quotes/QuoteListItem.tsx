import React from "react";

import Collapse from "@material-ui/core/Collapse";
import { ListItem } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import "./QuoteListItem.css";
import QuoteDetailView from "./QuoteDetailView";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Quote } from "../../types";

interface Props {
  quote: Quote;
  onSelect: (quoteId: number) => void;
  selected: boolean;
}

function QuoteListItem({ quote, selected, onSelect }: Props) {
  const [openDropdownDetails, setOpenDropdownDetails] = React.useState(
    selected
  );
  const { width } = useWindowDimensions();

  return (
    <>
      <ListItem
        button
        className="listItemRow"
        onClick={() => {
          onSelect(quote.id);
          setOpenDropdownDetails(!openDropdownDetails);
        }}
        selected={selected}
      >
        <div className="listItemRowField">{quote.id}</div>
        <div className="listItemRowField">{quote.contact_name}</div>
        <div className="listItemRowField">
          {quote.destination_location.toUpperCase()}
        </div>
        <div className="listItemRowField">${quote.price.toFixed(2)}</div>
        {width < 900 &&
          (openDropdownDetails && selected ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {width < 900 && (
        <Collapse in={openDropdownDetails && selected}>
          <div className="quoteDetailDropdown">
            <QuoteDetailView selectedQuote={quote} dropdownView={true} />
          </div>
        </Collapse>
      )}
    </>
  );
}

export default QuoteListItem;
