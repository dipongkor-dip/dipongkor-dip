import {ExternalLink, Github} from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl pb-20 px-5 text-foreground max-md:py-10">
      <h2 className="text-2xl font-bold text-center mb-10 max-md:mb-2 max-md:text-xl max-md:text-start px-8">3. Featured Projects</h2>

      <div className="space-y-10 max-md:space-y-5">
        <div className="hacker-panel flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0 rounded-xl">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-3xl max-md:text-xl font-bold">3.1 Local Guide Platform</h2>
            <p className="text-justify leading-relaxed tracking-wide max-md:text-sm">
              A full-stack booking system where verified local guides are onboarded through eligibility checks and tourists can discover, compare, and reserve
              trusted experts. The flow prioritizes secure onboarding and reliable service matching.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Next.js", "Express", "Prisma", "PostgreSQL", "Stripe"].map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <Image
              src="https://i.ibb.co.com/pjG1zdpN/Screenshot-from-2025-12-22-12-32-05.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />

            <div className="absolute bottom-3 right-5 flex gap-5">
              <a href="https://github.com/dipongkorroy000/l2-project-008" target="_blank" rel="noopener noreferrer" className="transition-colors">
                <Github className="text-muted-foreground hover:text-chart-3" />
              </a>
              <a href="https://l2-assignment-008-frontend-577l.vercel.app" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                <ExternalLink className="text-muted-foreground hover:text-chart-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="hacker-panel flex flex-col-reverse md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-2 md:space-y-0 rounded-xl">
          <div className="relative flex-1 max-md:mt-5">
            <Image
              src="https://i.ibb.co.com/h1ymJjZ0/Screenshot-from-2025-12-22-14-04-22.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />

            <div className="absolute bottom-3 left-5 flex gap-5">
              <a href="https://github.com/dipongkorroy000/l2-project-006" target="_blank" rel="noopener noreferrer" className="transition-colors">
                <Github className="text-muted-foreground hover:text-chart-3" />
              </a>
              <a href="https://l2-assignment-006.vercel.app/" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                <ExternalLink className="text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-3xl max-md:text-xl font-bold">3.2 Parcel Delivery Web Application</h2>
            <p className="text-justify leading-relaxed tracking-wide max-md:text-sm">
              A role-based logistics platform for parcel submission, rider verification, shipment tracking, and delivery confirmation. Built to keep package
              operations transparent, secure, and fast for both customers and agents.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Redux", "Express", "MongoDB", "SSLCommerz"].map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hacker-panel flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0 rounded-xl">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-3xl max-md:text-xl font-bold">3.3 TaskNet Web Application</h2>
            <p className="text-justify leading-relaxed tracking-wide max-md:text-sm">
              A freelancing-style operations hub powered by Node.js, Firebase, Stripe, and MongoDB. Supports Admin, Buyer, and Worker roles with hardened auth,
              task orchestration, and payment workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Firebase", "Node.js", "MongoDB", "Stripe"].map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <Image
              src="https://i.ibb.co.com/84LnsZdr/Screenshot-from-2025-12-22-14-00-43.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />

            <div className="absolute bottom-3 right-5 flex gap-5">
              <a href="https://github.com/dipongkorroy000/l1-project-012" target="_blank" rel="noopener noreferrer" className="transition-colors">
                <Github className="text-muted-foreground hover:text-chart-3" />
              </a>
              <a href="https://project-012-client.vercel.app" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                <ExternalLink className="text-muted-foreground hover:text-chart-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
