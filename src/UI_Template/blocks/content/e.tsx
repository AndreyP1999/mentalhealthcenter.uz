import React from "react";
import PropTypes from  "prop-types";

function LightContentE(props:any) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
          Kickstarter Actually Pinterest Brunch Bitters Occupy
        </h2>
        <div className="md:w-3/5 md:pl-6">
        <pre className="leading-relaxed text-base">
            Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
            axe four dollar toast truffaut, direct trade kombucha brunch
            williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
            vinegar tacos.
         </pre>
          <div className="flex md:mt-4 mt-6">
      
          </div>
        </div>
      </div>
    </section>
  );
}

LightContentE.defaultProps = {
  theme: 'indigo'
};

LightContentE.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightContentE;
