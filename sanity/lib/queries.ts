import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const customersQuery = groq`*[_type == "customer" ]{
  _id, name, link, image
}`;

export const frontpageQuery = groq`*[_type == "page" && title == "Frontpage"]{
  pageBuilder[]{
    // "hero" in an "object" from which we can "pick" fields
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
    // "callToAction" is a "reference"
    // We can resolve "itself" with the @ operator
    _type == "gallery" => {
      _type,
      images
    },
    // ...continue for each unique "_type"
    _type == "textWithIllustration" => {
      _type,
      heading,
      tagline,
      excerpt,
      image
    }
  },
}`;
