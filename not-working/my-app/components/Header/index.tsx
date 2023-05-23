import Link from "next/link";
import styles from "./index.module.scss";

export const Header = async () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="https://www.google.pl/">Google</Link>
        </li>
        <li>
          <Link href="https://nextjs.org/">Next.js</Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/">Facebook</Link>
        </li>
      </ul>
    </div>
  );
};
