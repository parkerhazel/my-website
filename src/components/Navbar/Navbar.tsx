const destinations = [
  { name: "Parker Hazel", href: "/#" },
  { name: "Home", href: "/#intro" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://www.github.com/parkerhazel",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/parker-hazel",
    target: "_blank",
  },
  { name: "Email", href: "mailto:parkerhazell@gmail.com", target: "_blank" },
];

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-50 flex w-full items-center justify-between bg-background px-8 py-4 text-textSecondary">
        <ul className="hidden gap-4 sm:flex">
          {destinations.map((destination) => (
            <li key={destination.name}>
              <a href={destination.href}>{destination.name}</a>
            </li>
          ))}
        </ul>
        <ul className="ml-auto flex justify-end gap-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a href={social.href} target={social.target}>
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
