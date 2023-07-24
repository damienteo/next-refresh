import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function ClientPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { params } = props;
  console.log({ params });
  const router = useRouter();

  // More for when actual entry from db not found
  if (!router.query.id) return { notFound: true };

  return (
    <div>
      <h1>Client Page {router.query.id}</h1>
      <h2>Name: {router.query.name}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  const details = [
    { id: "apple", name: "pollo" },
    { id: "banana", name: "hermano" },
    { id: "cherry", name: "boffo" },
  ];

  const paths = details.map(({ id, name }) => ({
    params: { id, name },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  console.log({ params });
  return {
    props: { params },
  };
};
