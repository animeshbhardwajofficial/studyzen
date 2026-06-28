const prisma = require("../src/config/prisma");

async function main() {
    await prisma.$executeRawUnsafe(`
        TRUNCATE TABLE "Lesson", "Enrollment", "Course"
        RESTART IDENTITY CASCADE;
    `);

    await prisma.course.create({
        data: {
            title: "React Mastery",
            instructor: "Love Babbar",
            category: "Frontend",
            price: 999,
            rating: 4.8,
            thumbnail:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            students: 1245,
            duration: "32 Hours",
            description:
                "Master React from beginner to advanced.",

            lessons: {
                create: [
                    { title: "Introduction to React" },
                    { title: "JSX Fundamentals" },
                    { title: "Components & Props" },
                    { title: "State & Events" },
                    { title: "React Router" },
                ],
            },
        },
    });

    await prisma.course.create({
        data: {
            title: "Node.js Bootcamp",
            instructor: "Hitesh Choudhary",
            category: "Backend",
            price: 1499,
            rating: 4.7,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            students: 980,
            duration: "28 Hours",
            description:
                "Learn Node.js and Express from scratch.",

            lessons: {
                create: [
                    { title: "Node Basics" },
                    { title: "Express.js" },
                    { title: "REST APIs" },
                    { title: "Authentication" },
                ],
            },
        },
    });

    await prisma.course.create({
        data: {
            title: "Full Stack Development",
            instructor: "Animesh Bhardwaj",
            category: "Full Stack",
            price: 2999,
            rating: 4.9,
            thumbnail:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            students: 2100,
            duration: "52 Hours",
            description:
                "Complete MERN Stack Development.",

            lessons: {
                create: [
                    { title: "HTML & CSS" },
                    { title: "JavaScript" },
                    { title: "React" },
                    { title: "Node.js" },
                    { title: "MongoDB" },
                    { title: "Deployment" },
                ],
            },
        },
    });

    console.log("Database Seeded Successfully");
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });