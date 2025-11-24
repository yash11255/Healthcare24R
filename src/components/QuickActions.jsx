import { Link } from "react-router-dom";
import { quickActions } from "../data/content.js";

const QuickActions = () => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const isExternal = action.to.startsWith("tel");
          const Wrapper = isExternal ? "a" : Link;
          return (
            <Wrapper
              key={action.label}
              href={isExternal ? action.to : undefined}
              to={!isExternal ? action.to : undefined}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-alt p-3">
                  <img src={action.icon} alt="" className="h-full w-full object-contain" />
                </div>
                {action.pill && (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {action.pill}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-secondary group-hover:text-primary">
                {action.label}
              </h3>
            </Wrapper>
          );
        })}
      </div>
    </div>
  </section>
);

export default QuickActions;

