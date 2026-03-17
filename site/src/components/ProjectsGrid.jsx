import { useState } from 'react';

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

export default function ProjectsGrid({ projects }) {
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
