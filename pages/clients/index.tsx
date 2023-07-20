import Link from "next/link";

import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();

  const handleLoadPage = () => {
    // router.push("/clients/load/page");

    router.push({
      pathname: "/clients/[id]/[name]",
      query: { id: "load", name: "page" },
    });
  };
  return (
    <div>
      <h1>Client Page</h1>

      <button onClick={handleLoadPage}>Load Page</button>
      <ul>
        <li>
          <Link href="/clients/apple/pollo">apple</Link>
        </li>
        <li>
          <Link href="/clients/banana/hermano">banana</Link>
        </li>
        <li>
          <Link href="/clients/cherry/boffo">cherry</Link>
        </li>
      </ul>
    </div>
  );
}
