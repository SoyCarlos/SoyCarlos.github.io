import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Notes & Ramblings", href: "/notes" },
  { name: "Projects", href: "/projects" },
];

export default function Header({ currentPath = "/" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Convert current path to Spanish version
  console.log("currentPath", currentPath);
  const spanishPath = currentPath === "/" ? "/es" : `/es${currentPath}`;

  return (
    <header className="border-b-2 border-yellow-500">
      <nav className="relative container lg:w-2/3 mx-auto py-3 px-6 xxl:w-2/4">
        {/* Flex Container */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-left text-2xl">
            <a href="/">Carlos Ortega</a>
          </div>
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
          <div className="hidden md:flex items-center space-x-4">
            {/* Menu Items */}
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-3 px-6 py-3 hover:bg-primary hover:underline"
              >
                {item.name}
              </a>
            ))}
            {/* Language Button */}
            <a
              href={spanishPath}
              className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              title="Español"
            >
              <span className="text-xl">🇲🇽</span>
              <span className="text-sm font-medium">ES</span>
            </a>
          </div>
        </div>
      </nav>    
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="">Carlos E. Ortega</span>
            </a>
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
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                {/* Language Button for Mobile */}
                <a
                  href={spanishPath}
                  className="-mx-3 flex items-center space-x-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <span className="text-xl">🇲🇽</span>
                  <span>Español</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
