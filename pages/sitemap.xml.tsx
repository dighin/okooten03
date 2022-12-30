
import { postSlugsQuery } from 'lib/queries';

const createSitemap = (slugs) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://leerob.io/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;


export default function Sitemap() {
  return null;
}
