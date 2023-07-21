import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import { json } from "stream/consumers";

export default function Home(props: {
  products: { link: string; name: string }[];
}) {
  const { products } = props;
  console.log({ products });
  return (
    <div>
      <h1>Hello world</h1>
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
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      products: data.products,
    },
  };
}
