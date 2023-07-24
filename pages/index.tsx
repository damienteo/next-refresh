import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import { useRef } from "react";

export default function Home(props: {
  products: { link: string; name: string }[];
  count: number;
}) {
  const { products } = props;

  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailInputRef.current?.value || "";
    const feedback = feedbackInputRef.current?.value || "";

    fetch("/api/feedback", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        feedback,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log({ data }));
  };

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="Homepage" content="Main Info" />
      </Head>

      <h1>Hello world</h1>

      <form onSubmit={submitFormHandler}>
        <input name="email" ref={emailInputRef} />
        <input name="feedback" ref={feedbackInputRef} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {products?.map((product: { link: string; name: string }) => (
          <li key={product.link}>
            <Link href={`/` + product.link}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log("------ Re-validating ------");
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  if (!data)
    return {
      redirect: { destination: "/clients" },
    };

  if (data.products.length === 0)
    return {
      notFound: true,
    };

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
