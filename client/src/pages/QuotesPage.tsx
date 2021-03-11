import React, { useEffect, useState } from "react";

import Axios from "axios";
import { Container } from "@material-ui/core";

import "./QuotesPage.css";
import HeaderBar from "../components/HeaderBar";
import QuoteDetailView from "../components/Quotes/QuoteDetailView";
import QuotesList from "../components/Quotes/QuotesList";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Quote } from "../types";

function QuotesPage() {
  const [quotesList, setQuotesList] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  const { width } = useWindowDimensions();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setQuotesList(response.data);
    });
  });

  return (
    <Container component="div" disableGutters={true} className="background">
      <HeaderBar />
      <div className="quotesContainer">
        <div className="quoteListContainer">
          <QuotesList
            quotes={quotesList}
            onSelectQuote={(quote) => {
              setSelectedQuote(quote);
            }}
          />
        </div>

        {width > 900 && <QuoteDetailView selectedQuote={selectedQuote} />}
      </div>
    </Container>
  );
}

export default QuotesPage;
