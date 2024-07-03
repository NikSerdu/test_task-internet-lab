import { AnimatePresence, motion } from "framer-motion";
import { FC, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { useClickOutside } from "../../hooks/useClickOutside";
const menuItems = [
  {
    id: 1,
    text: "Как это работает",
    href: "how-it-work",
  },
  {
    id: 2,
    text: "3-й блок",
    href: "statistics",
  },
  {
    id: 3,
    text: "Вопросы и ответы",
    href: "qa",
  },
  {
    id: 4,
    text: "Форма",
    href: "form",
  },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isMenuOpen) setTimeout(() => setIsMenuOpen(false), 50);
  });

  return (
    <header
      id="/"
      className="container mx-auto flex justify-between items-center py-7 absolute top-7 w-full left-0 right-0"
    >
      <AnchorLink href={"#"} className="logo">
        <img src="logo.png" alt="Логотип компании test lab" />
      </AnchorLink>
      <nav className="hidden md:flex" ref={menuRef}>
        <ul className="flex gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <AnchorLink
                href={`#${item.href}`}
                className="body-16 text-white p-2 hover:cursor-pointer border-transparent hover:border-white border-b transition duration-200"
              >
                {item.text}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white mb-2"></div>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-black text-white z-50 flex flex-col items-center pt-20 md:hidden"
          >
            <ul className="flex flex-col gap-6 items-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <AnchorLink
                    onClick={() => setIsMenuOpen(false)}
                    href={`#${item.href}`}
                    className="body-16 p-2 hover:cursor-pointer border-transparent hover:border-white border-b transition duration-200"
                  >
                    {item.text}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
