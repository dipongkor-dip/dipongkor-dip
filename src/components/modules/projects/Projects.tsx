import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

function ProjectLinks({
  backend,
  frontend,
  live,
}: {
  backend: string;
  frontend: string;
  live: string;
}) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      <a
        href={backend}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Server repository"
        className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <Github size={14} /> Server
      </a>
      <a
        href={frontend}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Client repository"
        className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <Github size={14} /> Client
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live project"
        className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ExternalLink size={14} /> Live
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl pb-20 px-5 text-foreground max-md:py-10">
      <h2 className="text-xl font-bold text-center mb-10 max-md:mb-2 max-md:text-lg max-md:text-start px-8">
        3. Featured Projects
      </h2>

      <div className="space-y-10 max-md:space-y-5">
        <div className="hacker-panel flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0 rounded-xl">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-2xl max-md:text-lg font-bold">
              3.1 CallNow Dispatch
            </h2>
            <p className="text-sm text-justify leading-relaxed tracking-wide max-md:text-xs">
              A patient transport platform for ambulance discovery, ride
              requests, and dispatch coordination. Role-based passenger, driver,
              and admin workspaces support fleet management, trip tracking, and
              payment processing.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "FastAPI",
                "SQLAlchemy",
                "MySQL",
                "React",
                "Redux Toolkit",
                "SSLCommerz",
              ].map((tech) => (
                <span key={tech} className="text-xs font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
            <ProjectLinks
              backend="https://github.com/dipongkor-dip/fastapi/tree/master/em-ambulance-dispatch-system"
              frontend="https://github.com/dipongkor-dip/ambulance-dispatch-frontend"
              live="https://embulance-dispatch-frontend.vercel.app/"
            />
          </div>

          <div className="flex-1">
            <Image
              src="https://embulance-dispatch-frontend.vercel.app/ambulancia.svg"
              alt="CallNow ambulance illustration"
              width={1200}
              height={800}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="hacker-panel flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0 rounded-xl">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-2xl max-md:text-lg font-bold">
              3.2 Local Guide Platform
            </h2>
            <p className="text-sm text-justify leading-relaxed tracking-wide max-md:text-xs">
              A full-stack booking system where verified local guides are
              onboarded through eligibility checks and tourists can discover,
              compare, and reserve trusted experts. The flow prioritizes secure
              onboarding and reliable service matching.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Next.js", "Express", "Prisma", "PostgreSQL", "Stripe"].map(
                (tech) => (
                  <span key={tech} className="text-xs font-medium text-primary">
                    {tech}
                  </span>
                ),
              )}
            </div>
            <ProjectLinks
              backend="https://github.com/dipongkorroy000/L2-Assignment-008-backend-prisma-6"
              frontend="https://github.com/dipongkorroy000/L2-Assignment-008-frontEnd-deploy"
              live="https://l2-assignment-008-frontend-577l.vercel.app"
            />
          </div>

          <div className="flex-1">
            <Image
              src="https://i.ibb.co.com/pjG1zdpN/Screenshot-from-2025-12-22-12-32-05.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="hacker-panel flex flex-col-reverse md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-2 md:space-y-0 rounded-xl">
          <div className="flex-1 max-md:mt-5">
            <Image
              src="https://i.ibb.co.com/h1ymJjZ0/Screenshot-from-2025-12-22-14-04-22.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>

          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-2xl max-md:text-lg font-bold">
              3.3 Parcel Delivery Web Application
            </h2>
            <p className="text-sm text-justify leading-relaxed tracking-wide max-md:text-xs">
              A role-based logistics platform for parcel submission, rider
              verification, shipment tracking, and delivery confirmation. Built
              to keep package operations transparent, secure, and fast for both
              customers and agents.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Redux", "Express", "MongoDB", "SSLCommerz"].map(
                (tech) => (
                  <span key={tech} className="text-xs font-medium text-primary">
                    {tech}
                  </span>
                ),
              )}
            </div>
            <ProjectLinks
              backend="https://github.com/dipongkorroy000/L2-Assignment-006-backend"
              frontend="https://github.com/dipongkorroy000/L2-Assignment-006-client"
              live="https://l2-assignment-006.vercel.app/"
            />
          </div>
        </div>

        <div className="hacker-panel flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0 rounded-xl">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-2xl max-md:text-lg font-bold">
              3.4 TaskNet Web Application
            </h2>
            <p className="text-sm text-justify leading-relaxed tracking-wide max-md:text-xs">
              A freelancing-style operations hub powered by Node.js, Firebase,
              Stripe, and MongoDB. Supports Admin, Buyer, and Worker roles with
              hardened auth, task orchestration, and payment workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Firebase", "Node.js", "MongoDB", "Stripe"].map(
                (tech) => (
                  <span key={tech} className="text-xs font-medium text-primary">
                    {tech}
                  </span>
                ),
              )}
            </div>
            <ProjectLinks
              backend="https://github.com/dipongkorroy000/project_012_server"
              frontend="https://github.com/dipongkorroy000/project_012_client"
              live="https://project-012-client.vercel.app"
            />
          </div>

          <div className="flex-1">
            <Image
              src="https://i.ibb.co.com/84LnsZdr/Screenshot-from-2025-12-22-14-00-43.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
