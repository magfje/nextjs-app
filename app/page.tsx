import { SanityDocument } from "next-sanity";
import Posts from "@/app/_components/Posts";
import { frontpageQuery, postsQuery } from "@/sanity/lib/queries";
import { customersQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "./_components/PreviewPosts";
import PreviewProvider from "./_components/PreviewProvider";
import Customer from "./_components/Customer";
import Customers from "./_components/Customers";

export default async function Home(props) {
  const { hero, textWithIllustration, gallery } = props;
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const customers = await sanityFetch<SanityDocument[]>({
    query: customersQuery,
  });
  const frontPage = await sanityFetch<SanityDocument[]>({
    query: frontpageQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }
  console.log("frontPage Log", frontPage[0].pageBuilder);
  // console.log("Posts", posts);
  console.log("hero", frontPage);

  return (
    <main className="items-center justify-center min-h-screen">
      <p>lol</p>
      {/* <Customers customers={customers} /> */}
      {/* <Posts posts={posts} />; */}
    </main>
  );
}
