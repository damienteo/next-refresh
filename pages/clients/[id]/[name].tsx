import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function ClientPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { params } = props;
  console.log({ params });
  const router = useRouter();

  return (
    <div>
      <h1>Client Page {router.query.id}</h1>
      <h2>Name: {router.query.name}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "apple", name: "pollo" } },
      { params: { id: "banana", name: "hermano" } },
      { params: { id: "cherry", name: "boffo" } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  console.log({ params });
  return {
    props: { params },
  };
};
