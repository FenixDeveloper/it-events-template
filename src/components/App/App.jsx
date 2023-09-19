import React from "react";
import { FiltersProvider } from "../../utils/context/SearchFilterContext";
import { EventsProvider } from "../../utils/context/EventsContext";

function App({ children }) {
  return (
    <EventsProvider>
      <FiltersProvider>{children}</FiltersProvider>
    </EventsProvider>
  );
}
export default App;
