import Link from "next/link";

export default function Error404Page(props: {
  products: { link: string; name: string }[];
}) {
  const { products } = props;
  return (
    <div>
      <h1>404 Page</h1>
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
  return {
    props: {
      products: [
        { name: "Porfolio", link: "portfolio" },
        { name: "Clients", link: "clients" },
        { name: "About", link: "about" },
        { name: "Blog", link: "blog" },
      ],
    },
  };
}
