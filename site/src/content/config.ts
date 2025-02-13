import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type:'content',
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
        hero_image_location_url: z.string().url().optional(),
    })
}); 

const notesCollection = defineCollection({
    type:'content',
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        publishDate: z.string(),
        updatedDate: z.string(),
        videoID: z.string().optional(),
        videoLink: z.string().url().optional(),
        tags: z.array(z.string()),
    })
}); 

const experienceCollection = defineCollection({
    type:'content',
    schema: z.object({
        org: z.string(),
        website: z.string().url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
    }),

});

const educationCollection = defineCollection({
    type:'data',
    schema: z.object({
        school: z.string(),
        website: z.string().url(),
        degree: z.string(),
        graduation_date: z.string(),
        course_work: z.array(z.string()),
    }),
});

const volunteerCollection = defineCollection({
    type:'content',
    schema: z.object({
        org: z.string(),
        website: z.string().url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const skillsCollection = defineCollection({
    type:'data',
    schema: z.object({
        category: z.string(),
        skills_list: z.string(),
    }),

});


export const collections = {
    blog: blogCollection,
    notes: notesCollection,
    experience: experienceCollection,
    education: educationCollection,
    volunteer: volunteerCollection,
    skills: skillsCollection,
};