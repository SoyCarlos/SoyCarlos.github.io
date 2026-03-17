import { useState } from 'react';

const projects = [
  // — SoyCarlos personal projects —
  {
    name: "openqr",
    org: "SoyCarlos",
    description: "A free, privacy-first QR code generator with full visual customization. Generate, style, and download QR codes as high-resolution PNG or SVG — no account, no tracking.",
    tags: ["Open Source", "Web App", "Vibe Coded"],
    language: "TypeScript",
    github: "https://github.com/SoyCarlos/openqr",
    website: null,
  },
  {
    name: "SoyCarlos.github.io",
    org: "SoyCarlos",
    description: "My personal portfolio and blog — the site you're on right now. Built with Astro and Tailwind CSS with bilingual (EN/ES) support.",
    tags: ["Personal", "Web App"],
    language: "Astro",
    github: "https://github.com/SoyCarlos/SoyCarlos.github.io",
    website: "https://carlos.soy",
  },
  {
    name: "EnQueTrabajas",
    org: "SoyCarlos",
    description: "A T3 Stack web app built with Next.js, Prisma, Tailwind CSS, and tRPC.",
    tags: ["Personal", "Web App", "Vibe Coded"],
    language: "TypeScript",
    github: "https://github.com/SoyCarlos/EnQueTrabajas",
    website: "https://en-que-trabajas.vercel.app",
  },
  {
    name: "homelab",
    org: "SoyCarlos",
    description: "A curated catalog of self-hosted services and homelab tooling. Covers analytics, media servers, smart home automation, VPN, monitoring, and more.",
    tags: ["Personal", "Homelab"],
    language: "Shell",
    github: "https://github.com/SoyCarlos/homelab",
    website: null,
  },
  {
    name: "iMessage-Analysis",
    org: "SoyCarlos",
    description: "Exploratory data analysis of my personal iMessage conversations, examining communication patterns and trends.",
    tags: ["Data Science", "Research"],
    language: "Jupyter Notebook",
    github: "https://github.com/SoyCarlos/iMessage-Analysis",
    website: "https://carlos.soy/2019/07/30/show-me-your-phone",
  },
  {
    name: "SUSA-Research-MusicMoods",
    org: "SoyCarlos",
    description: "NLP analysis of Billboard's Top 100 songs, exploring whether melancholic music has dominated radio over time. Research conducted at UC Berkeley's SAAS.",
    tags: ["Research", "Data Science"],
    language: "Jupyter Notebook",
    github: "https://github.com/SoyCarlos/SUSA-Research-MusicMoods",
    website: "https://carlos.soy/2018/12/08/have-sadbois-taken-over-the-radio",
  },
  {
    name: "CensusSummer2019",
    org: "SoyCarlos",
    description: "Work from my Data Science Civic Digital Fellowship at the U.S. Census Bureau, Summer 2019, under the supervision of Keith Finlay and Elizabeth Willhide.",
    tags: ["CivicTech", "Data Science"],
    language: "Python",
    github: "https://github.com/SoyCarlos/CensusSummer2019",
    website: null,
  },
  {
    name: "dh-link-creator",
    org: "SoyCarlos",
    description: "UC Berkeley DataHub Link Creator — generates shareable links that let students duplicate GitHub repositories directly into their DataHub workspace.",
    tags: ["Open Source", "Education"],
    language: "HTML",
    github: "https://github.com/SoyCarlos/dh-link-creator",
    website: "https://soycarlos.github.io/dh-link-creator/",
  },
  {
    name: "AdventOfSQL2025",
    org: "SoyCarlos",
    description: "My solutions to the Advent of SQL 2025 daily SQL challenges.",
    tags: ["Personal"],
    language: "SQL",
    github: "https://github.com/SoyCarlos/AdventOfSQL2025",
    website: null,
  },
  // — OpenPatterson civic tech projects —
  {
    name: "openpatterson.org",
    org: "OpenPatterson",
    description: "The OpenPatterson civic technology organization website, serving the city of Patterson, CA.",
    tags: ["CivicTech", "Web App"],
    language: "TypeScript",
    github: "https://github.com/OpenPatterson/openpatterson.org",
    website: "https://openpatterson.org",
  },
  {
    name: "bpcs",
    org: "OpenPatterson",
    description: "Better Patterson Council Site — scrapes City Council meeting dates, agendas, and links to provide a more accessible civic experience for Patterson residents.",
    tags: ["CivicTech", "Web App"],
    language: "TypeScript",
    github: "https://github.com/OpenPatterson/bpcs",
    website: "https://council.openpatterson.org/",
  },
  {
    name: "bpcs-backend",
    org: "OpenPatterson",
    description: "Go programs deployed to AWS Lambda that scrape Patterson City Council meeting data, extract agendas to markdown, and sync content to the BPCS frontend.",
    tags: ["CivicTech", "Backend"],
    language: "Go",
    github: "https://github.com/OpenPatterson/bpcs-backend",
    website: null,
  },
  {
    name: "civvy",
    org: "OpenPatterson",
    description: "A civic technology application for community engagement in Patterson, CA.",
    tags: ["CivicTech"],
    language: null,
    github: "https://github.com/OpenPatterson/civvy",
    website: null,
  },
  {
    name: "civvy-bot",
    org: "OpenPatterson",
    description: "An AI-powered civic chatbot for OpenPatterson, built to help residents navigate local government information.",
    tags: ["CivicTech", "AI"],
    language: "Python",
    github: "https://github.com/OpenPatterson/civvy-bot",
    website: null,
  },
  {
    name: "cotty-bot",
    org: "OpenPatterson",
    description: "LLM-powered civic chatbot using Pinecone vector search and LangChain for retrieval-augmented generation over city documents.",
    tags: ["CivicTech", "AI"],
    language: "Python",
    github: "https://github.com/OpenPatterson/cotty-bot",
    website: null,
  },
  {
    name: "ezPDF",
    org: "OpenPatterson",
    description: "A lightweight Python utility for PDF manipulation, developed for civic use cases.",
    tags: ["CivicTech", "Open Source"],
    language: "Python",
    github: "https://github.com/OpenPatterson/ezPDF",
    website: null,
  },
];

function ProjectCard({ name, org, description, tags, language, github, website }) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 flex flex-col gap-3 hover:border-yellow-500 transition-colors">
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{org}</div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold hover:underline"
        >
          {name}
        </a>
      </div>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-yellow-500 rounded px-2 py-0.5 text-xs"
          >
            {tag}
          </span>
        ))}
        {language && (
          <span className="border border-gray-300 rounded px-2 py-0.5 text-xs text-gray-500">
            {language}
          </span>
        )}
      </div>
      <div className="flex gap-4 text-sm font-medium">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub →
        </a>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="w-4/5 mx-auto py-10">
      <div className="text-4xl font-bold py-10 text-center">Projects</div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`border rounded px-3 py-1 text-sm transition-colors ${
            !activeTag
              ? 'bg-yellow-500 border-yellow-500'
              : 'border-yellow-500 hover:bg-slate-300'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`border rounded px-3 py-1 text-sm transition-colors ${
              activeTag === tag
                ? 'bg-yellow-500 border-yellow-500'
                : 'border-yellow-500 hover:bg-slate-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.github} {...project} />
        ))}
      </div>
    </div>
  );
}
