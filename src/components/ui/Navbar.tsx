'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Link as ScrollLink } from 'react-scroll';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/Sheet';

export default function Navbar() {
  const pathname = usePathname();

  const routes = [
    {
      id: '#aboutSection',
      href: `/about`,
      label: 'About',
      active: pathname === `/about`,
    },
    {
      id: '#howItWorksSection',
      href: `/how-it-works`,
      label: 'How it works?',
      active: pathname === `/how-it-works`,
    },
    {
      id: '#featuresSection',
      href: `/features`,
      label: 'Features',
      active: pathname === `/features`,
    },
    {
      id: '#cardsSection',
      href: `/cards`,
      label: 'Cards',
      active: pathname === `/cards`,
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-[72px] border-b border-border-color bg-pure-white text-black-color">
      <div className="md:w-10/12 lg:w-10/12 w-11/12 max-w-screen-2xl flex justify-between items-center mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/logo/Logo.png"
              alt={'Logo'}
              width={86}
              height={36}
              className="block"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-5 items-center ml-auto">
          {routes.map((route) => (
            <li
              key={route.href}
              className={cn(
                'transition-opacity hover:opacity-75',
                route.active
                  ? 'text-black-color font-medium'
                  : 'text-muted-foreground',
              )}
            >
              <ScrollLink
                to={route.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                className="cursor-pointer"
              >
                {route.label}
              </ScrollLink>
            </li>
          ))}
          <li className="relative">
            <Link
              href={'/cart'}
              className="border border-border-color  rounded-md px-3 py-2 bg-white-color text-black-color flex gap-2 items-center"
            >
              Cart
              <Image
                src="/icons/Cart.svg"
                width={24}
                height={24}
                alt={'Shopping Cart'}
              />
              <div className="w-[10px] h-[10px] rounded-full bg-primary absolute right-[10px] top-[6px]"></div>
            </Link>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger>
            <Image
              src="/icons/BurgerMenu.svg"
              width={24}
              height={24}
              alt="Mobile Menu"
              className="lg:hidden md:w-9 md:h-9"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col justify-start items-center w-full bg-pure-white gap-4 pt-20 ">
                  {routes.map((route) => (
                    <li
                      key={route.href}
                      className={cn(
                        'text-left md:text-[28px] sm:text-2xl border-t border-border md:w-11/12 w-full text-2xl pt-10',
                        route.active
                          ? 'text-black-color font-medium'
                          : 'text-muted-foreground',
                      )}
                    >
                      <ScrollLink
                        to={route.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={50}
                        className="cursor-pointer"
                      >
                        <SheetTrigger>{route.label}</SheetTrigger>
                      </ScrollLink>
                    </li>
                  ))}
                  <hr className="w-full border-border md:w-11/12" />
                  <ul className=" flex items-center gap-5 text-left w-11/12 pt-4">
                    <li>
                      <Link
                        href={'https://www.facebook.com/home.php'}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src="/social-icons/facebook.svg"
                          width={24}
                          height={24}
                          alt={'Facebook'}
                          priority={true}
                          className="mr-auto"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'https://www.instagram.com'}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src="/social-icons/instagram.svg"
                          width={24}
                          height={24}
                          alt={'Instagram'}
                          priority={true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'https://www.linkedin.com'}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src="/social-icons/linkedin.svg"
                          width={24}
                          height={24}
                          alt={'Linkedin'}
                          priority={true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/telegram'}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src="/social-icons/telegram.svg"
                          width={24}
                          height={24}
                          alt={'Telegram'}
                          priority={true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'https://www.youtube.com'}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src="/social-icons/youtube.svg"
                          width={24}
                          height={24}
                          alt={'YouTube'}
                          priority={true}
                        />
                      </Link>
                    </li>
                  </ul>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
