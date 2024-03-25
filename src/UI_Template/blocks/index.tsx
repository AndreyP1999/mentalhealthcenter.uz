
import { IRoutesMap } from "@/interface/RouterTemplate";

import LightBlogD from './blog/d';
import LightContentB from './content/b';

import LightContentE from './content/e';
import LightContentF from './content/f';
import LightEcommerceB from './ecommerce/b';
import LightGalleryA from './gallery/a';
import LightGalleryB from './gallery/b';
import LightGalleryC from './gallery/c';


import LightTestimonialA from './testimonial/a';
import LightTestimonialB from './testimonial/b';
import LightTestimonialC from './testimonial/c';


export const getBlock = ({ theme = 'indigo', darkMode = false }): IRoutesMap => {
  return {

    BlogD: <LightBlogD theme={theme} />,
    ContentB: <LightContentB theme={theme} />,
    ContentE: <LightContentE theme={theme} />,
    ContentF: <LightContentF theme={theme} />,
    EcommerceB: <LightEcommerceB theme={theme} />,
    GalleryA: <LightGalleryA theme={theme} />,
    GalleryB: <LightGalleryB theme={theme} />,
    GalleryC: <LightGalleryC theme={theme} />,

    TestimonialA: <LightTestimonialA theme={theme} />,
    TestimonialB: <LightTestimonialB theme={theme} />,
    TestimonialC: <LightTestimonialC theme={theme} />,
  } as IRoutesMap
}

