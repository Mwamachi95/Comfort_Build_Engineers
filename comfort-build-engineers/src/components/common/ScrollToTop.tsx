import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    const currentPathname = pathname;

    // Check if we're navigating within Projects pages (filter changes)
    const isProjectsToProjects =
      (prevPathname === '/projects' || prevPathname.startsWith('/projects/')) &&
      (currentPathname === '/projects' || currentPathname.startsWith('/projects/'));

    // Only scroll to top if we're not just changing filters on Projects page
    if (!isProjectsToProjects) {
      window.scrollTo(0, 0);
    }

    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;