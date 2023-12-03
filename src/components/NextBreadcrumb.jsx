'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  return (
    <div
      className={
        paths === '/'
          ? 'hidden'
          : 'container mx-auto flex flex-col justify-start py-5 '
      }
    >
      <h1 className=' ml-7 text-5xl font-semibold text-black'>
        {pathNames.map((link, index) => {
          return capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
        })}
      </h1>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <div key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
