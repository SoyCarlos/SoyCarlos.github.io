const navigation = [
  { name: 'Resume', href: '/resume' },
  { name: 'Blog', href: '/blog' },
  { name: 'Notes & Ramblings', href: '/notes' },
  { name: 'Projects', href: '/projects' },
]

export default function Header() {
  return (
    <div className="border-b-2 border-yellow-500">
      <nav className="relative container lg:w-2/3 mx-auto py-3 px-6 md:px-0 xxl:w-2/4">
        {/* Flex Container */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-left text-2xl">
            <a href="/">Carlos EOS</a>
          </div>
          <div className="hidden md:flex space-x-4">
          {/* Menu Items */}
          {navigation.map((item) => (
            <a
              href={item.href}
              className="hidden md:block p-3 px-6 py-3 hover:bg-primary hover:underline"
            >
              {item.name}
            </a>
          ))}
          </div>

          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block text-right hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col hidden text-right mt-0 pr-2 space-y-4 bg-white w-24 right-4 border-black-100 border-2"
          >
            {navigation.map((item) => (
              <a href={item.href}>{item.name}</a>
            ))}
          </div>
        </div>
      </nav>
      <script>
        {`
          const btn = document.getElementById("menu-btn");
          const nav = document.getElementById("menu");

          btn.addEventListener("click", () => {
            btn.classList.toggle("open");
            nav.classList.toggle("flex");
            nav.classList.toggle("hidden");
          });
        `}
      </script>

      <style>
        {`
          /* Hamburger Menu */
          .hamburger {
            cursor: pointer;
            width: 24px;
            height: 24px;
            transition: all 0.25s;
            position: relative;
          }

          .hamburger-top,
          .hamburger-middle,
          .hamburger-bottom {
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 2px;
            background: #000;
            transform: rotate(0);
            transition: all 0.5s;
          }

          .hamburger-middle {
            transform: translateY(7px);
          }

          .hamburger-bottom {
            transform: translateY(14px);
          }

          .open {
            transform: rotate(90deg);
            transform: translateY(0px);
          }

          .open .hamburger-top {
            transform: rotate(45deg) translateY(6px) translate(6px);
          }

          .open .hamburger-middle {
            display: none;
          }

          .open .hamburger-bottom {
            transform: rotate(-45deg) translateY(6px) translate(-6px);
          }
        `}
      </style>
    </div>
  );
}
