// src/app/head.tsx
import { seoConfig } from "@/data/seoConfig";

export default function Head() {
  const {
    siteUrl,
    title,
    description,
    image,
    author,
    twitterHandle,
  } = seoConfig;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* JSON-LD Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: seoConfig.siteName,
            url: siteUrl,
            sameAs: Object.values(seoConfig.socialLinks),
            jobTitle: "AI Engineer & Software Developer",
          }),
        }}
      />
    </>
  );
}
