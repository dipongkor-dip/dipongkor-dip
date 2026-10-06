import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl py-20 px-5 text-foreground max-md:py-10">
      <h2 className="text-xl font-bold text-center mb-4 max-md:mb-2 max-md:text-lg max-md:text-start px-8">1. About Me</h2>
      <p className="text-center max-md:text-start text-sm text-muted-foreground mb-6 max-w-2xl mx-auto max-md:mx-0">
        National University, Bangladesh · Full-Stack Engineering · Self-directed upskilling
      </p>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border">
          <Image
            src="https://i.ibb.co.com/dy9vNVx/image-1.png"
            alt="Dipongkor Roy"
            width={160}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="hacker-panel max-w-4xl flex-1 space-y-4 rounded-lg p-5 text-sm leading-relaxed md:p-6">
          <p>
            I&apos;m Dipongkor, a full-stack developer studying at National University, Bangladesh. Since 2022, I&apos;ve been growing my skills through
            self-directed study and hands-on web development projects.
          </p>

          <p>
            My work spans frontend development with React, Next.js, and TypeScript, alongside backend services built with Node.js and Express, Python and FastAPI,
            and Go with Echo. I work with PostgreSQL and MongoDB, and use tools such as Prisma, SQLAlchemy, GraphQL, and Docker across development and deployment.
          </p>

          <p>
            I care about clear architecture, thoughtful user experiences, and maintainable code. I also practice data structures and algorithms in C, C++, and Python
            to keep strengthening my problem-solving and software engineering fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
