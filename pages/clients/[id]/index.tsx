import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Client(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { params } = props;
  console.log({ params });
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]/[name]",
              query: { id: "apple", name: "still" },
            }}
          >
            apple
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]/[name]",
              query: { id: "banana", name: "checking" },
            }}
          >
            banana
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]/[name]",
              query: { id: "cherry", name: "trying" },
            }}
          >
            cherry
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;

  return {
    props: { params },
  };
};
