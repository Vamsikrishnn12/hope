export const SITE_URL = "https://hopetrustvellore.in";
export const SITE_NAME = "Hope Trust Vellore";
export const SITE_PHONE = "+91 88255 00905";
export const SITE_PHONE_ALT = "+91 94427 56140";
export const SITE_DESCRIPTION =
  "Hope Trust is a registered charitable trust in Katpadi, Vellore providing medical support, education support, welfare programmes and volunteer-led community outreach.";
export const SITE_ADDRESS =
  "First Floor, No. 91, K.R. Complex, Vallimalai Road, opposite Vinayagar Temple, Kumarappan Nagar, KRS Nagar, Katpadi, Vellore, Tamil Nadu 632007";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function pageSeo({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["NGO", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Hope Trust",
  alternateName: "Hope Trust Vellore",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: [SITE_PHONE, SITE_PHONE_ALT],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "First Floor, No. 91, K.R. Complex, Vallimalai Road, opposite Vinayagar Temple, Kumarappan Nagar, KRS Nagar",
    addressLocality: "Katpadi, Vellore",
    addressRegion: "Tamil Nadu",
    postalCode: "632007",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Vellore" },
    { "@type": "AdministrativeArea", name: "Katpadi" },
    { "@type": "State", name: "Tamil Nadu" },
  ],
  knowsAbout: [
    "Medical camps in Vellore",
    "Education sponsorship",
    "Women welfare",
    "Elder care",
    "Community outreach",
    "Volunteer programmes",
  ],
  nonprofitStatus: "NonprofitType",
  foundingLocation: {
    "@type": "Place",
    name: "Katpadi, Vellore",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_PHONE,
    contactType: "community support",
    areaServed: "IN",
    availableLanguage: ["en", "ta"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};
