const prisma = require("../src/config/prisma");

const DEFAULT_VIDEO =
    "https://www.youtube.com/embed/dGcsHMXbSOA";

async function main() {
    await prisma.$executeRawUnsafe(`
        TRUNCATE TABLE
            "LessonProgress",
            "Lesson",
            "Enrollment",
            "Course"
        RESTART IDENTITY CASCADE;
    `);

    await prisma.course.create({
        data: {
            title: "React Mastery",

            instructor:
                "Love Babbar",

            category:
                "Frontend",

            price: 999,

            rating: 4.8,

            thumbnail:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

            students: 1245,

            duration:
                "32 Hours",

            description:
                "Master modern React from fundamentals to advanced concepts while building production-ready applications.",

            lessons: {
                create: [
                    {
                        title:
                            "Introduction to React",

                        description:
                            "Understand React and why it exists.",

                        order: 1,

                        duration:
                            "12 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "JSX Fundamentals",

                        description:
                            "Learn JSX syntax and rendering.",

                        order: 2,

                        duration:
                            "18 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "Components & Props",

                        description:
                            "Build reusable UI components.",

                        order: 3,

                        duration:
                            "24 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "State & Events",

                        description:
                            "Manage state and user interaction.",

                        order: 4,

                        duration:
                            "26 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "React Router",

                        description:
                            "Implement client-side routing.",

                        order: 5,

                        duration:
                            "22 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },
                ],
            },
        },
    });

    await prisma.course.create({
        data: {
            title:
                "Node.js Bootcamp",

            instructor:
                "Hitesh Choudhary",

            category:
                "Backend",

            price: 1499,

            rating: 4.7,

            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

            students: 980,

            duration:
                "28 Hours",

            description:
                "Learn Node.js, Express and backend development from scratch.",

            lessons: {
                create: [
                    {
                        title:
                            "Node Basics",

                        description:
                            "Introduction to Node.js runtime.",

                        order: 1,

                        duration:
                            "15 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "Express.js",

                        description:
                            "Build REST APIs with Express.",

                        order: 2,

                        duration:
                            "23 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "REST APIs",

                        description:
                            "Design scalable REST endpoints.",

                        order: 3,

                        duration:
                            "21 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "Authentication",

                        description:
                            "Secure applications using JWT.",

                        order: 4,

                        duration:
                            "28 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },
                ],
            },
        },
    });

    await prisma.course.create({
        data: {
            title:
                "Full Stack Development",

            instructor:
                "Animesh Bhardwaj",

            category:
                "Full Stack",

            price: 2999,

            rating: 4.9,

            thumbnail:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

            students: 2100,

            duration:
                "52 Hours",

            description:
                "Build complete production-ready MERN applications from frontend to deployment.",

            lessons: {
                create: [
                    {
                        title:
                            "HTML & CSS",

                        description:
                            "Build responsive layouts.",

                        order: 1,

                        duration:
                            "18 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "JavaScript",

                        description:
                            "Master modern JavaScript.",

                        order: 2,

                        duration:
                            "30 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "React",

                        description:
                            "Develop scalable frontend apps.",

                        order: 3,

                        duration:
                            "34 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "Node.js",

                        description:
                            "Create backend APIs.",

                        order: 4,

                        duration:
                            "27 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "MongoDB",

                        description:
                            "Work with NoSQL databases.",

                        order: 5,

                        duration:
                            "20 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },

                    {
                        title:
                            "Deployment",

                        description:
                            "Deploy full-stack applications.",

                        order: 6,

                        duration:
                            "25 min",

                        videoUrl:
                            DEFAULT_VIDEO,
                    },
                ],
            },
        },
    });

    console.log(
        "✅ Database Seeded Successfully"
    );
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });