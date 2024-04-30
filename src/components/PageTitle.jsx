import React from "react";
import {Helmet} from "react-helmet";
const PageTitle = ({title}) => {
  return (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            
        </Helmet>
        ...
    </div>
  );
};

export default PageTitle;
