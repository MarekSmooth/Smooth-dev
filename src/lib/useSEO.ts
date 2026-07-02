import { useEffect } from 'react';

const SITE_URL = 'https://smooth-development.com';

interface SEOOptions {
  title: string;
  description: string;
  path: string;
}

// Client-side-only meta management (this is a plain CSR SPA, no SSR) — swaps the tags
// index.html ships by default for the active route/language and restores them on unmount,
// so Header/Footer siblings on the same layout never see a flash of the wrong page's meta.
export function useSEO({ title, description, path }: SEOOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      const tag = document.querySelector(selector);
      const previous = tag?.getAttribute('content') ?? null;
      tag?.setAttribute('content', value);
      return previous;
    };

    const url = `${SITE_URL}${path}`;
    const previousDescription = setMeta('meta[name="description"]', description);
    const previousOgTitle = setMeta('meta[property="og:title"]', title);
    const previousOgDescription = setMeta('meta[property="og:description"]', description);
    const previousOgUrl = setMeta('meta[property="og:url"]', url);
    const previousTwitterTitle = setMeta('meta[name="twitter:title"]', title);
    const previousTwitterDescription = setMeta('meta[name="twitter:description"]', description);

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalExisted = !!canonicalTag;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    const previousCanonicalHref = canonicalTag.href;
    canonicalTag.href = url;

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) document.querySelector('meta[name="description"]')?.setAttribute('content', previousDescription);
      if (previousOgTitle !== null) document.querySelector('meta[property="og:title"]')?.setAttribute('content', previousOgTitle);
      if (previousOgDescription !== null) document.querySelector('meta[property="og:description"]')?.setAttribute('content', previousOgDescription);
      if (previousOgUrl !== null) document.querySelector('meta[property="og:url"]')?.setAttribute('content', previousOgUrl);
      if (previousTwitterTitle !== null) document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', previousTwitterTitle);
      if (previousTwitterDescription !== null) document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', previousTwitterDescription);
      if (canonicalExisted) {
        canonicalTag!.href = previousCanonicalHref;
      } else {
        canonicalTag?.remove();
      }
    };
  }, [title, description, path]);
}
