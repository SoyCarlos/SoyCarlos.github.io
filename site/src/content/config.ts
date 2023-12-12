import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type:'content',
    schema: z.object({
        isDraft: z.boolean(),
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
    type:'data',
    schema: z.object({
        org: z.string(),
        website: z.string().url(),
        position: z.string(),
        location: z.string(),
        duration: z.string(),
        summary: z.array(z.string()),
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
    experience: experienceCollection,
    education: educationCollection,
    volunteer: volunteerCollection,
    skills: skillsCollection,
};