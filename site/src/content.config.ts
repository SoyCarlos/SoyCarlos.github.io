import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        subtitle: z.string(),
        reading_duration: z.number(),
        publishDate: z.string(),
        blurb: z.string(),
        hero_image: z.string(),
        hero_image_owner: z.string().optional(),
        hero_image_owner_url: z.string().optional(),
        hero_image_location: z.string().optional(),
        hero_image_location_url: z.url().optional(),
    })
});

const blogCollectionES = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog-es' }),
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        subtitle: z.string(),
        reading_duration: z.number(),
        publishDate: z.string(),
        blurb: z.string(),
        hero_image: z.string(),
        hero_image_owner: z.string().optional(),
        hero_image_owner_url: z.string().optional(),
        hero_image_location: z.string().optional(),
        hero_image_location_url: z.url().optional(),
    })
});

const notesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        publishDate: z.string(),
        updatedDate: z.string(),
        videoID: z.string().optional(),
        videoLink: z.url().optional(),
        tags: z.array(z.string()),
    })
});

const notesCollectionES = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/notes-es' }),
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        publishDate: z.string(),
        updatedDate: z.string(),
        videoID: z.string().optional(),
        videoLink: z.url().optional(),
        tags: z.array(z.string()),
    })
});

const experienceCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
    schema: z.object({
        org: z.string(),
        website: z.url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const experienceCollectionES = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/experience-es' }),
    schema: z.object({
        org: z.string(),
        website: z.url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const educationCollection = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/education' }),
    schema: z.object({
        school: z.string(),
        website: z.url(),
        degree: z.string(),
        graduation_date: z.string(),
        course_work: z.array(z.string()),
    }),
});

const educationCollectionES = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/education-es' }),
    schema: z.object({
        school: z.string(),
        website: z.url(),
        degree: z.string(),
        graduation_date: z.string(),
        course_work: z.array(z.string()),
    }),
});

const volunteerCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/volunteer' }),
    schema: z.object({
        org: z.string(),
        website: z.url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const volunteerCollectionES = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/volunteer-es' }),
    schema: z.object({
        org: z.string(),
        website: z.url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const skillsCollection = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/skills' }),
    schema: z.object({
        category: z.string(),
        skills_list: z.string(),
    }),
});

const skillsCollectionES = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/skills-es' }),
    schema: z.object({
        category: z.string(),
        skills_list: z.string(),
    }),
});

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
    schema: z.object({
        draft: z.boolean().optional(),
        name: z.string(),
        org: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        language: z.string().nullable().optional(),
        github: z.url(),
        website: z.url().nullable().optional(),
    }),
});

const certificatesCollection = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/certificates' }),
    schema: z.object({
        org: z.string(),
        website: z.url().optional(),
        items: z.array(z.object({
            name: z.string(),
            duration: z.string(),
        })),
    }),
});

export const collections = {
    blog: blogCollection,
    'blog-es': blogCollectionES,
    notes: notesCollection,
    'notes-es': notesCollectionES,
    experience: experienceCollection,
    'experience-es': experienceCollectionES,
    education: educationCollection,
    'education-es': educationCollectionES,
    volunteer: volunteerCollection,
    'volunteer-es': volunteerCollectionES,
    skills: skillsCollection,
    'skills-es': skillsCollectionES,
    projects: projectsCollection,
    certificates: certificatesCollection,
};
