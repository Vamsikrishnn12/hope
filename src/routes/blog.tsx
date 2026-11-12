import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, pageSeo, webPageJsonLd } from "@/lib/seo";

const photo = "/child-medical-support.jpeg";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageSeo({
      title: "Stories of Care | Hope Trust Vellore Blog",
      description:
        "Updates on Hope Trust's community support and the people receiving care in Vellore.",
      path: "/blog",
      image: photo,
    }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Layout>
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/blog",
            name: "Hope Trust Vellore Blog",
            description: "Updates on community support and care in Vellore.",
            type: "CollectionPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <section className="bg-hero-gradient border-b border-border/60">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Hope Trust stories
          </p>
          <h1 className="font-display text-5xl text-balance md:text-6xl">Updates from our work</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Stories about care, support and the people in our community.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
        <article className="overflow-hidden rounded-3xl border border-border bg-card">
          <img
            src={photo}
            alt="A young child receiving support during ongoing medical care"
            width={726}
            height={1600}
            className="max-h-[42rem] w-full bg-secondary/40 object-contain object-center"
          />
          <div className="p-7 md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Medical support · Vellore
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Supporting a young girl through treatment</h2>
            <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                She is a 5-year-old girl with mild autism and bilateral foot deformity. Her treatment
                is currently ongoing at Christian Medical College (CMC), Vellore.
              </p>
              <p>
                Hope Trust is sharing this update to raise awareness of her ongoing care journey. We
                wish her and her family strength and support as treatment continues.
              </p>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
