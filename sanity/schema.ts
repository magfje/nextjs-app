import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import customer from "./schemas/customer";
import { formType } from "./schemas/formType";
import { heroType } from "./schemas/heroType";
import { imageGalleryType } from "./schemas/imageGallery";
import { pageType } from "./schemas/pageType";
import { promotionType } from "./schemas/promotionType";
import { textWithIllustrationType } from "./schemas/textWithIllustration";
import { videoType } from "./schemas/videoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    customer,
    formType,
    heroType,
    imageGalleryType,
    pageType,
    promotionType,
    textWithIllustrationType,
    videoType,
  ],
};
