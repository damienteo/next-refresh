import { useRouter } from "next/router";

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Portfolio Page {router.query.id}</h1>
    </div>
  );
}
