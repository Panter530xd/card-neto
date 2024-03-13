'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './Button';

export default function Footer() {
  const pathname = usePathname();
  const routes = [
    {
      href: `/about`,
      label: 'About Us',
      active: pathname === `/about`,
    },
    {
      href: `/how-it-works`,
      label: 'How it works?',
      active: pathname === `/how-it-works`,
    },
    {
      href: `/features`,
      label: 'Features',
      active: pathname === `/features`,
    },
    {
      href: `/shop`,
      label: 'Shop',
      active: pathname === `/shop`,
    },
    {
      href: 'https://share-card.netlify.app/cards',
      label: 'Our MVP',
      active: false,
    },
  ];

  return (
    <footer className="mt-auto text-black items-center py-5 bg-white border-t border-border">
      <div className="flex flex-col lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto justify-center py-2">
        <Image
          src="/logo/Footer-logo.png"
          width={128}
          height={52}
          alt={'Logo'}
        />
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:justify-between justify-between lg:pb-10">
          <ul className="lg:flex lg:gap-5 md:grid md:grid-cols-2 md:gap-4 flex gap-7 md:justify-start flex-wrap md:flex-nowrap w-full">
            {routes.map((route, index) => (
              <div key={route.href} className="flex">
                <li
                  className={cn(
                    'transition-opacity hover:opacity-75 lg:pt-14 pt-4 text-lg',
                    route.active
                      ? 'text-black-color font-medium'
                      : 'text-muted-foreground',
                    {
                      'w-full pt-0 md:pt-4 -mt-5 md:-mt-0 md:w-auto':
                        index >= routes.length - 2,
                    },
                  )}
                >
                  <Link href={route.href}>{route.label}</Link>
                </li>
              </div>
            ))}
          </ul>

          <form className=" md:w-9/12 w-full mx-auto md:mx-0 md:ml-auto py-4 md:pt-8 lg:pt-4">
            <label className="lg:text-xl text-lg font-medium" htmlFor="text">
              Stay up to date
            </label>
            <div className="flex items-center pt-4">
              <Input
                id="text"
                type="email"
                placeholder="Enter your Email"
                className="border-border rounded-r-none h-[48px] placeholder:text-black"
              />
              <Button
                type="submit"
                className="text-pure-white text-base font-normal bg-black rounded-l-none md:w-1/3 h-[48px]"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="items-center flex flex-col md:grid md:grid-cols-2 md:justify-between w-full gap-5 ">
          <h4 className="text-lg mr-auto md:mr-0 md:whitespace-nowrap">
            © 2024 cardneto. All rights reserved.
          </h4>
          <div className="flex flex-wrap gap-5 items-center md:flex-nowrap mr-auto md:mr-0 md:ml-auto">
            <Link
              href={'/terms'}
              className="transition-opacity hover:opacity-75"
            >
              Terms
            </Link>
            <Link
              href={'/privacy'}
              className="transition-opacity hover:opacity-75"
            >
              Privacy
            </Link>
            <Link
              href={'/cookies'}
              className="transition-opacity hover:opacity-75"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
