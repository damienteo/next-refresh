import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  const slug = Array.isArray(router.query.slug)
    ? router.query.slug.join("-")
    : router.query.slug;

  return (
    <div>
      <h1>Blog Page {slug}</h1>
    </div>
  );
}
