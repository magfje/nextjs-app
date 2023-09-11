import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const textWithIllustrationType = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Text with illustration",
        media: image || BlockContentIcon,
      };
    },
  },
});
