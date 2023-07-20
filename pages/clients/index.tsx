import Link from "next/link";

export default function Client() {
  return (
    <div>
      <h1>Client Page</h1>
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
