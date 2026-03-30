import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@components/ui/button";

const navigation = [
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Notes", href: "/notes" },
  { name: "Projects", href: "/projects" },
];

export default function Header({
  currentPath = "/",
}: {
  currentPath?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const spanishPath = currentPath === "/" ? "/es" : `/es${currentPath}`;

  return (
    <header className="border-b-2 border-yellow-500 border-dashed">
      <nav className="relative container lg:w-2/3 mx-auto py-5 px-6 xxl:w-2/4">
        {/* Flex Container */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Button size="lg" className="text-2xl" nativeButton={false} render={<a href="/" />}>
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
              <Button key={item.name} nativeButton={false} render={<a href={item.href} />}>
                {item.name}
              </Button>
            ))}
            {/* Language Toggle */}
            <Button nativeButton={false} render={<a href={spanishPath} title="Español" />}>
              <span className="text-base">🇲🇽</span> ES
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Button size="lg" className="text-xl" nativeButton={false} render={<a href="/" />}>
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
                    nativeButton={false}
                    render={<a href={item.href} />}
                  >
                    {item.name}
                  </Button>
                ))}
                {/* Language Toggle for Mobile */}
                <Button
                  className="w-full justify-start"
                  nativeButton={false}
                  render={<a href={spanishPath} />}
                >
                  <span className="text-base">🇲🇽</span> Español
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
