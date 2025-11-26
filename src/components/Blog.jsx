import SectionHeading from "./SectionHeading.jsx";
import { blogPosts } from "../data/content.js";

const Blog = () => (
  <section id="blog" className="bg-alt py-16 lg:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeading
        eyebrow="Insights"
        title="Guides written by HealthCare24Hr clinicians."
        description="Proactive tips, research-backed explainers, and new care models from our providers."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src={post.image} alt="" className="h-56 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {post.date}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-secondary">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary"
              >
                Read more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;

