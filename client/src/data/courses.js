const courses = [
    {
        id: 1,
        title: "React Mastery",
        instructor: "Love Babbar",
        category: "Frontend",
        price: 999,
        rating: 4.8,
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        students: 1245,
        duration: "32 Hours",
        description: "Master React from beginner to advanced with real-world projects.",
        curriculum: [
            "Components",
            "Props",
            "State",
            "Hooks",
        ],
        lessons: [
            { id: 1, title: "Introduction to React" },
            { id: 2, title: "Components" },
            { id: 3, title: "Props" },
            { id: 4, title: "State" },
        ],
    },
    {
        id: 2,
        title: "Node.js Bootcamp",
        instructor: "Hitesh Choudhary",
        category: "Backend",
        price: 1499,
        rating: 4.7,
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        students: 980,
        duration: "28 Hours",
        description: "Learn backend development using Node.js and Express.",
        curriculum: [
            "Node Basics",
            "Express",
            "REST APIs",
            "Authentication",
        ],
        lessons: [
            { id: 1, title: "Node Introduction" },
            { id: 2, title: "Modules" },
            { id: 3, title: "Express Basics" },
            { id: 4, title: "REST APIs" },
        ],
    },
    {
        id: 3,
        title: "Full Stack Development",
        instructor: "Animesh Bhardwaj",
        category: "Full Stack",
        price: 2999,
        rating: 4.9,
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        students: 2100,
        duration: "52 Hours",
        description: "Complete MERN stack journey from beginner to deployment.",
        curriculum: [
            "React",
            "Node",
            "MongoDB",
            "Deployment",
        ],
        lessons: [
            { id: 1, title: "Course Overview" },
            { id: 2, title: "Frontend Setup" },
            { id: 3, title: "Backend Setup" },
            { id: 4, title: "Deployment" },
        ],
    },
    {
        id: 4,
        title: "PostgreSQL Masterclass",
        instructor: "Neha Sharma",
        category: "Backend",
        price: 1999,
        rating: 4.8,
        thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
        students: 1450,
        duration: "24 Hours",
        description: "Learn PostgreSQL from basics to production-ready database design.",
        curriculum: [
            "SQL Basics",
            "Joins",
            "Indexes",
            "Database Design"
        ],
        lessons: [
            { id: 1, title: "Introduction" },
            { id: 2, title: "Tables" },
            { id: 3, title: "Joins" },
            { id: 4, title: "Indexes" }
        ]
    },
    {
        id: 5,
        title: "Docker for Developers",
        instructor: "Akshay Saini",
        category: "Backend",
        price: 2499,
        rating: 4.9,
        thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
        students: 2200,
        duration: "18 Hours",
        description: "Containerize and deploy applications using Docker.",
        curriculum: [
            "Containers",
            "Images",
            "Docker Compose",
            "Deployment"
        ],
        lessons: [
            { id: 1, title: "Docker Basics" },
            { id: 2, title: "Images" },
            { id: 3, title: "Containers" },
            { id: 4, title: "Compose" }
        ]
    },
    {
        id: 6,
        title: "System Design Fundamentals",
        instructor: "Gaurav Sen",
        category: "Full Stack",
        price: 3499,
        rating: 4.9,
        thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
        students: 3100,
        duration: "40 Hours",
        description: "Learn scalable architecture and system design fundamentals.",
        curriculum: [
            "Scalability",
            "Caching",
            "Load Balancing",
            "Databases"
        ],
        lessons: [
            { id: 1, title: "Scalability" },
            { id: 2, title: "Caching" },
            { id: 3, title: "Load Balancers" },
            { id: 4, title: "Database Scaling" }
        ]
    }
];

export default courses;