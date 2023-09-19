import React from "react";

export { default as App } from "./components/App/App";
export { Card } from "./components/Card/Card";

export { CardList } from "./components/CardList/CardList";
export { DescriptionTabs } from "./components/DescriptionTabs/DescriptionTabs";
export { EventDescription } from "./components/EventDescription/EventDescription";
export { Event } from "./components/Event/Event";
export { Footer } from "./components/Footer/Footer";
export { Header } from "./components/Header/Header";
export { LeftFilterBar } from "./components/LeftFilterBar/LeftFilterBar";
export { SortBar } from "./components/SortBar/SortBar";
export { TagSection } from "./components/TagSection/TagSection";
export { TopFilterBar } from "./components/TopFilterBar/TopFilterBar";
export { Layout } from "./Layout/Layout";

export {
   InputCheckbox,
   InputRadio,
   InputDate,
   SearchInput,
   SearchField,
   PrimaryButton,
   Loader,
   PageTitle,
   PopupLink,
   PaddingWrapper,
   TagButton,
} from "./UI-kit";

export { apiEvents } from "./utils/api";

export {
   parsePrice,
    parseDate,
    parseMonth,
    parseEventDate,
   formatDate,
    formatTimeRange,
    getRandomEvents,
   handleCopyLink,
   getCurrentEvents,
   getPastEvents
} from "./utils/helperFunctions";

export {useEventsContext} from "./utils/context/EventsContext";
export {useFiltersContext} from "./utils/context/SearchFilterContext";
export {useFilter} from "./utils/hooks/useFilter";

export {EventsProvider} from "./utils/context/EventsContext";
export {FiltersProvider} from "./utils/context/SearchFilterContext";

export { default as useFilters } from "./utils/hooks/useFilters";
export { default as useIsMobileResolution } from "./utils/hooks/useIsMobileResolution";
