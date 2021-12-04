import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div>
            <header className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.items}><Link href="/">Home</Link></li>
                    <li className={styles.items}><Link href="/blog">Blog</Link></li>
                    <li className={styles.items}><Link href="/users">User</Link></li>
                </ul>
            </header>
        </div>
    )
}