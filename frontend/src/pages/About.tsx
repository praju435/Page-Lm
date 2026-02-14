import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full px-4 lg:pl-28 lg:pr-4">
      <div className="flex-1 flex flex-col items-center justify-start pt-16 pb-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/IMG_20251113_061747.jpg"
              alt="G S Tejas"
              className="w-36 h-36 rounded-full object-cover ring-2 ring-sky-500/70 ring-offset-2 ring-offset-black shadow-xl"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mt-2">
              G S Tejas | <span className="text-sky-400">Demon King</span>
            </h1>
            <a
              href="https://gs-tejas-hub.github.io/Demon-s-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-300 hover:text-white underline decoration-sky-600/60"
              title="Open Portfolio in new tab"
            >
              Developed by Demon King
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6">
            <section className="rounded-2xl bg-stone-950/80 border border-stone-900 p-6 text-left">
              <h2 className="text-lg font-semibold text-white mb-2">Our Story & Vision — Why DemonLM?</h2>
              <p className="text-stone-300 leading-relaxed">
                We built DemonLM to help students focus and learn smarter. The goal is simple: turn study
                materials into clear, interactive experiences — with short, memorable explanations, quick
                quizzes, podcasts, and notes that actually stick. No clutter. No noise. Just crisp guidance to keep
                momentum high.
              </p>
            </section>

            <section className="rounded-2xl bg-stone-950/80 border border-stone-900 p-6 text-left">
              <h2 className="text-lg font-semibold text-white mb-2">About Tejas</h2>
              <p className="text-stone-300 leading-relaxed">
                I&apos;m a Computer Science & Engineering student passionate about
                AI and full‑stack development. I love turning ideas into working products fast from an
                AI‑powered companion app to an image generator and planning tools. I&apos;ve shipped responsive
                UIs into real prototypes & prototypes into working products in weeks, collaborating closely with teams to deliver value quickly.
              </p>
              <ul className="mt-3 text-stone-300 list-disc pl-6 space-y-1">
                <li>Strong in Python, JS/TS, React, Node; good grasp of ML and RAG systems</li>
                <li>Comfortable building MVPs end‑to‑end and iterating rapidly</li>
                <li>Fluent in English, Kannada, Telugu, Hindi; team‑oriented and curious</li>
              </ul>
            </section>

            <section className="rounded-2xl bg-stone-950/80 border border-stone-900 p-6 text-left">
              <h2 className="text-lg font-semibold text-white mb-2">Explore</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gs-tejas-hub.github.io/Demon-s-Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-600/90 hover:bg-sky-500 text-white text-sm transition-colors"
                >
                  Visit Portfolio
                </a>
                <Link
                  to="/"
                  className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-sm transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

