import styled from "styled-components";
import Link from "next/link";
import { getAllPosts } from "../infra/getAllPosts";
import Avatar from "../components/Avatar"

export default function Home({ allPosts }) {
  return (
    <div>
      <header>
        <Avatar/>
        <h1>Blog de teste</h1>
      </header>

      <section>

        {allPosts.map((post) => (
          <article key={post.slug} className="postsContainer__post">
            <Link href={`posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts(["title", "slug", "excerpt"]);
  return {
    props: { allPosts },
  };
}
