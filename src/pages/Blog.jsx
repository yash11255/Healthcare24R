import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { blogPosts } from "../data/content.js";

const BlogPage = () => (
  <>
    <PageHero
      eyebrow="Insights"
      title="Clinical perspectives, proactive ideas."
      description="Articles from HealthCare24Hr physicians, researchers, and care navigators."
    />
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Latest stories"
          title="Stay ahead of your health decisions."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={post.image} alt="" className="h-56 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {post.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-secondary">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary"
                >
                  Continue reading
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BlogPage;

