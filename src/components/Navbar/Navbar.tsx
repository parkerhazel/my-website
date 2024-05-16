import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}