
import { IRoutesMap } from "@/interface/RouterTemplate";

import BlogD from './blog/d';
import ContentB from './content/b';

import ContentE from './content/e';
import ContentF from './content/f';
import EcommerceB from './ecommerce/b';
import GalleryA from './gallery/a';
import GalleryB from './gallery/b';
import GalleryC from './gallery/c';

import TestimonialA from './testimonial/a';
import TestimonialB from './testimonial/b';
import TestimonialC from './testimonial/c';



export const getIcons = () => {
  return {
    BlogD: <BlogD />,
    ContentB: <ContentB />,
    ContentE: <ContentE />,
    ContentF: <ContentF />,
    EcommerceB: <EcommerceB />,
    GalleryA: <GalleryA />,
    GalleryB: <GalleryB />,
    GalleryC: <GalleryC />,
    TestimonialA: <TestimonialA />,
    TestimonialB: <TestimonialB />,
    TestimonialC: <TestimonialC />,
  } as IRoutesMap

}
