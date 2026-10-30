export const SITE_URL = "https://hopetrustvellore.in";
export const SITE_NAME = "Hope Trust Vellore";
export const LEGAL_NAME = "HOPE TRUST";
export const SITE_PHONE = "+91 88255 00905";
export const SITE_PHONE_ALT = "+91 94427 56140";
export const SITE_DESCRIPTION =
  "Hope Trust is a registered charitable trust in Katpadi, Vellore providing medical support, education assistance, family welfare and volunteer-led community outreach.";
export const SITE_ADDRESS =
  "First Floor, No. 91, K.R. Complex, Vallimalai Road, opposite Vinayagar Temple, Kumarappan Nagar, KRS Nagar, Katpadi, Vellore, Tamil Nadu 632007";
export const DEFAULT_SOCIAL_IMAGE = "/og-cover.jpg";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function pageSeo({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: SITE_NAME },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:secure_url", content: imageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Illustration of Hope Trust Vellore community medical, education and welfare support",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      {
        name: "twitter:image:alt",
        content:
          "Illustration of Hope Trust Vellore community medical, education and welfare support",
      },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en-IN", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SITE_URL}/#organization`,
  name: "Hope Trust",
  legalName: LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/hope-trust-logo.png"),
    contentUrl: absoluteUrl("/hope-trust-logo.png"),
    width: 1536,
    height: 319,
  },
  image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
  description: SITE_DESCRIPTION,
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Dr. Lavanya Jayakumar",
    jobTitle: "President, Hope Trust",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "Trust registration number",
    value: "B4/28/2026",
  },
  telephone: [SITE_PHONE, SITE_PHONE_ALT],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "First Floor, No. 91, K.R. Complex, Vallimalai Road, opposite Vinayagar Temple, Kumarappan Nagar, KRS Nagar, Katpadi",
    addressLocality: "Vellore",
    addressRegion: "Tamil Nadu",
    postalCode: "632007",
    addressCountry: "IN",
  },
  location: {
    "@type": "Place",
    name: "Hope Trust, Katpadi, Vellore",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Katpadi",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  hasMap: "https://maps.app.goo.gl/jiKyDZm3U3EfHq5C7",
  areaServed: [
    { "@type": "City", name: "Vellore" },
    { "@type": "AdministrativeArea", name: "Katpadi" },
    { "@type": "State", name: "Tamil Nadu" },
  ],
  knowsAbout: [
    "Community medical support in Vellore",
    "Physiotherapy and rehabilitation guidance",
    "Education assistance",
    "Women and elder welfare",
    "Family relief",
    "Community volunteering",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE_PHONE,
      contactType: "community support and donations",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
    {
      "@type": "ContactPoint",
      telephone: SITE_PHONE_ALT,
      contactType: "general enquiries",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
  ],
  potentialAction: {
    "@type": "DonateAction",
    recipient: { "@id": `${SITE_URL}/#organization` },
    target: {
      "@type": "EntryPoint",
      urlTemplate: absoluteUrl("/donate"),
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Hope Trust",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(DEFAULT_SOCIAL_IMAGE) },
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
