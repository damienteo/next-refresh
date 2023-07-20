import { useRouter } from "next/router";

export default function ClientPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Client Page {router.query.id}</h1>
      <h2>Name: {router.query.name}</h2>
    </div>
  );
}
