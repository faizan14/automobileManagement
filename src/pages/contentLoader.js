import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoderComponent = () => (
  <ContentLoader width={360} height={200} speed={2} ariaLabel="Loading cars...">
    <rect x="42.84" y="9.93" rx="0" ry="0" width="65" height="47" />
    <rect x="122.84" y="9.67" rx="0" ry="0" width="148.72" height="12.12" />
    <rect x="122.84" y="25.67" rx="0" ry="0" width="89" height="12" />
    <rect x="122.84" y="42.67" rx="0" ry="0" width="32" height="12" />
  </ContentLoader>
);

export default ContentLoderComponent;
