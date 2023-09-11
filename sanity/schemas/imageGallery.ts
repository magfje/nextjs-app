import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const imageGalleryType = defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  icon: ImagesIcon,
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Gallery",
        media: image || ImagesIcon,
      };
    },
  },
});
