import styles from './Navbar.module.css';

const destinations = [
  { name: 'Parker Hazel', href: '/#'},
  { name: 'Home', href: '/#intro' },
  { name: 'About', href: '/#about'},
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
];

const socials = [
  { name: 'GitHub', href: 'https://www.github.com/parkerhazel', target: '_blank' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/parker-hazel', target: '_blank'},
  { name: 'Email', href: 'mailto:parkerhazell@gmail.com', target: '_blank'},
]

export const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <ul className={styles.NavbarList}>
          {destinations.map((destination) => (
            <li key={destination.name} className={styles.NavbarListItem}>
              <a href={destination.href}>{destination.name}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.SocialsList}>
          {socials.map((social) => (
            <li key={social.name} className={styles.SocialsListItem}>
              <a href={social.href} target={social.target}>{social.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}