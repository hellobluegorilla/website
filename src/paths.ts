// Maps the prototype's page identifiers to real routes.
export const PAGE_PATHS = {
  home: '/',
  services: '/services',
  sectors: '/sectors',
  markets: '/markets',
  about: '/about',
  contact: '/contact',
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

export const pathToPageKey = (pathname: string): PageKey => {
  const match = (Object.entries(PAGE_PATHS) as [PageKey, string][]).find(
    ([, p]) => p === pathname,
  );
  return match ? match[0] : 'home';
};
