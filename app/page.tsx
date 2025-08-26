export default function Home() {
  return (
    <main className="py-16 space-y-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Oluwatobi Olajide</h1>
        <p className="text-slate-600">
          I like building from first principles. Give me a protocol, a messy spec, or a blank folder, and I will
          turn it into a working system that you can run, test, and understand. I enjoy the parts of software that
          touch real constraints: network timeouts, disk layouts, message formats. I try to write code that is simple
          to trace and easy to change later.
        </p>
        <p className="text-slate-600">
          Last summer I worked as a Software Engineer intern at Microsoft. I learned how to ship inside a large
          codebase, review with intention, and land changes that other people depend on. That experience made me
          sharper about tradeoffs and clearer in how I communicate. I still take the same approach on my personal
          projects. Keep the loop tight. Measure early. Prove it works.
        </p>
        <p className="text-slate-600">
          On GitHub I keep a mix of learning builds and tools. You can find me at
          {' '}<a className="underline decoration-slate-300 hover:decoration-slate-500" href="https://github.com/tobibytes" target="_blank" rel="noreferrer">@tobibytes</a>.
          My profile links to my site and LinkedIn, and it highlights the kinds of repos I want you to see first.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">Selected Projects</h2>
        <article className="space-y-2">
          <h3 className="font-medium">BitTorrent client in Rust</h3>
          <p className="text-slate-600">
            I built a BitTorrent client to learn the protocol end to end and to get more comfortable with Rust. The repo
            shows a focused, test-guided build with Rust as the main language and a small shell wrapper for running steps.
            You will see the usual project scaffolding, a src folder, a sample torrent for local testing, and a
            CodeCrafters config that keeps the progression honest. This project taught me a lot about message framing,
            parsing, and state management under network pressure.
          </p>
        </article>
        <article className="space-y-2">
          <h3 className="font-medium">Redis clone in Python</h3>
          <p className="text-slate-600">
            This is a simple Redis-style server built to practice protocol handling, request routing, and small
            performance decisions in Python. The code is mostly Python with a tiny bit of shell to drive execution.
            It lives in a clean directory layout with an app folder and a straightforward README. I like projects like
            this because they force clear interfaces and help me practice writing code that is both minimal and testable.
          </p>
        </article>
        <article className="space-y-2">
          <h3 className="font-medium">Talvra</h3>
          <p className="text-slate-600">
            Talvra is my learning management system project. It is a monorepo that brings a modern stack together so
            students can process course content and generate study aids with AI. The repo uses a pnpm workspace with a
            React frontend, and a services layer planned in Node and Python. For storage and messaging I set up Neon
            Postgres, Redis Streams, and Azure Blob Storage. Docs in the repo outline the task plan, contributor
            workflow, and a Canvas LMS integration path. The README also spells out path aliases, local infra with Docker
            Compose, and health checks so you can run each piece in isolation.
          </p>
        </article>
        <p className="text-slate-600">
          See more on my GitHub profile:
          {' '}<a className="underline decoration-slate-300 hover:decoration-slate-500" href="https://github.com/tobibytes" target="_blank" rel="noreferrer">github.com/tobibytes</a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">What I’m into right now</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Systems programming and protocol work in Rust and Python</li>
          <li>Clean CLIs and small utilities that do one job well</li>
          <li>Turning rough ideas into running software that someone else can pick up</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Find me online</h2>
        <ul className="text-slate-600 space-y-1">
          <li>GitHub: <a className="underline decoration-slate-300 hover:decoration-slate-500" href="https://github.com/tobibytes" target="_blank" rel="noreferrer">@tobibytes</a></li>
          <li>LinkedIn: linked from my GitHub profile</li>
          <li>Personal site: linked from my GitHub profile</li>
        </ul>
      </section>
    </main>
  )
}
