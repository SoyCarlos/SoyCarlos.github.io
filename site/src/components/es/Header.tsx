import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@components/ui/button";

const navigation = [
  { name: "CV", href: "/es/resume" },
  { name: "Blog", href: "/es/blog" },
  { name: "Notas", href: "/es/notes" },
  { name: "Proyectos", href: "/es/projects" },
];

export default function Header({
  currentPath = "/es",
}: {
  currentPath?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Convert current path to English version
  const englishPath =
    currentPath === "/es" ? "/" : currentPath.replace("/es", "");

  return (
    <header className="border-b-2 border-yellow-500 border-dashed">
      <nav className="relative container lg:w-2/3 mx-auto py-5 px-6 xxl:w-2/4">
        {/* Flex Container */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Button size="lg" className="text-2xl" render={<a href="/es" />}>
            Carlos Ortega
          </Button>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/* Menu Items */}
            {navigation.map((item) => (
              <Button key={item.name} render={<a href={item.href} />}>
                {item.name}
              </Button>
            ))}
            {/* Language Toggle */}
            <Button render={<a href={englishPath} title="English" />}>
              <span className="text-base">🇺🇸</span> EN
            </Button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Button size="lg" className="text-xl" render={<a href="/es" />}>
              Carlos E. Ortega
            </Button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-3 py-6">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    className="w-full justify-start"
                    render={<a href={item.href} />}
                  >
                    {item.name}
                  </Button>
                ))}
                {/* Language Toggle for Mobile */}
                <Button
                  className="w-full justify-start"
                  render={<a href={englishPath} />}
                >
                  <span className="text-base">🇺🇸</span> English
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
