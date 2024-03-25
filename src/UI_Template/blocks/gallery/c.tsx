import React from "react";
import PropTypes from "prop-types";

function LightGalleryC(props: any) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <pre className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom.
          </pre>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative w-full h-56">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative w-full h-56">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />

            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative w-full h-56">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
              
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative w-full h-56">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
              
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative w-full h-56">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
              
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative w-full h-56">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightGalleryC.defaultProps = {
  theme: 'indigo'
};

LightGalleryC.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightGalleryC;
