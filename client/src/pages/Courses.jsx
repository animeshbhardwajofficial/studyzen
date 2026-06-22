import CourseCard from "../components/CourseCard";

function Courses() {
    const courses = [
        {
            id: 1,
            title: "React Mastery",
            instructor: "Love Babbar",
            price: 999,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            students: 1245,
            duration: "32 Hours",
            description: "Master React from beginner to advanced with real-world projects."
        },
        {
            id: 2,
            title: "Node.js Bootcamp",
            instructor: "Hitesh Choudhary",
            price: 1499,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
            students: 2310,
            duration: "45 Hours",
            description: "Build robust backend applications using Node.js, Express, and MongoDB."
        },
        {
            id: 3,
            title: "Full Stack Development",
            instructor: "Animesh Bhardwaj",
            price: 2999,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            students: 4520,
            duration: "80 Hours",
            description: "Become a job-ready full stack developer with hands-on MERN stack training."
        },
        {
            id: 4,
            title: "JavaScript Essentials",
            instructor: "Akshay Saini",
            price: 699,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
            students: 5890,
            duration: "25 Hours",
            description: "Deep dive into the core concepts of JavaScript, closures, prototypes, and async JS."
        },
        {
            id: 5,
            title: "Next.js Production Ready",
            instructor: "Hitesh Choudhary",
            price: 1899,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1618477388954-7852f32655ec",
            students: 1840,
            duration: "35 Hours",
            description: "Learn Server Components, SSR, SSG, and deployment strategies using Next.js."
        },
        {
            id: 6,
            title: "Python for Data Science",
            instructor: "Shradha Khapra",
            price: 1199,
            rating: 4.6,
            thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
            students: 3120,
            duration: "40 Hours",
            description: "Master Python fundamentals along with Pandas, NumPy, and Matplotlib."
        },
        {
            id: 7,
            title: "DevOps & Cloud Architecture",
            instructor: "Sandeep Das",
            price: 3499,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
            students: 980,
            duration: "60 Hours",
            description: "Implement CI/CD pipelines using Docker, Kubernetes, AWS, and Jenkins."
        },
        {
            id: 8,
            title: "UI/UX Design Fundamentals",
            instructor: "Ansh Mehra",
            price: 899,
            rating: 4.5,
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
            students: 1450,
            duration: "20 Hours",
            description: "Learn wireframing, prototyping, and visual hierarchies using Figma."
        },
        {
            id: 9,
            title: "SQL & Database Management",
            instructor: "Kunal Kushwaha",
            price: 799,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
            students: 2100,
            duration: "28 Hours",
            description: "Master relational databases, complex queries, indexing, and optimization."
        },
        {
            id: 10,
            title: "TypeScript Deep Dive",
            instructor: "Love Babbar",
            price: 999,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1516116211223-5c359a36298a",
            students: 1670,
            duration: "18 Hours",
            description: "Bring static typing to your JavaScript projects with advanced TypeScript features."
        },
        {
            id: 11,
            title: "Data Structures & Algorithms",
            instructor: "Love Babbar",
            price: 2499,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
            students: 7430,
            duration: "120 Hours",
            description: "Crack product-based companies with extensive DSA practice in C++ and Java."
        },
        {
            id: 12,
            title: "Machine Learning A-Z",
            instructor: "Animesh Bhardwaj",
            price: 2799,
            rating: 4.6,
            thumbnail: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
            students: 1390,
            duration: "55 Hours",
            description: "Build predictive models using Scikit-Learn, Regression, and Classification algorithms."
        },
        {
            id: 13,
            title: "Tailwind CSS Workshop",
            instructor: "Hitesh Choudhary",
            price: 499,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
            students: 3110,
            duration: "12 Hours",
            description: "Design highly responsive and beautiful websites fast using Tailwind CSS utilities."
        },
        {
            id: 14,
            title: "Git & GitHub Crash Course",
            instructor: "Kunal Kushwaha",
            price: 299,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1618401471353-b98aedd07871",
            students: 8900,
            duration: "8 Hours",
            description: "Master version control, branching strategies, and open-source contributions."
        },
        {
            id: 15,
            title: "GraphQL APIs with Node.js",
            instructor: "Akshay Saini",
            price: 1299,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
            students: 1120,
            duration: "22 Hours",
            description: "Replace REST APIs with powerful, flexible GraphQL queries and mutations."
        },
        {
            id: 16,
            title: "Docker for Developers",
            instructor: "Sandeep Das",
            price: 899,
            rating: 4.6,
            thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
            students: 2450,
            duration: "15 Hours",
            description: "Containerize your local dev environments and microservices like a pro."
        },
        {
            id: 17,
            title: "Cyber Security Basics",
            instructor: "Ankit Fadia",
            price: 1599,
            rating: 4.4,
            thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
            students: 1780,
            duration: "30 Hours",
            description: "Understand network security, penetration testing, and ethical hacking essentials."
        },
        {
            id: 18,
            title: "Mobile App Dev with Flutter",
            instructor: "Shradha Khapra",
            price: 1999,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            students: 2890,
            duration: "50 Hours",
            description: "Build beautiful cross-platform native apps for iOS and Android using Dart."
        },
        {
            id: 19,
            title: "Web3 & Blockchain Blueprint",
            instructor: "Animesh Bhardwaj",
            price: 3499,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
            students: 750,
            duration: "42 Hours",
            description: "Write Solidity smart contracts and build decentralized applications (dApps)."
        },
        {
            id: 20,
            title: "Clean Code & Architecture",
            instructor: "Akshay Saini",
            price: 1199,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            students: 1990,
            duration: "16 Hours",
            description: "Learn design patterns, SOLID principles, and writing maintainable code systems."
        },
        {
            id: 21,
            title: "Advanced CSS & Animations",
            instructor: "Ansh Mehra",
            price: 599,
            rating: 4.6,
            thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
            students: 1320,
            duration: "14 Hours",
            description: "Master Flexbox, CSS Grid, 3D transforms, and complex keyframe animations."
        },
        {
            id: 22,
            title: "Golang Backend Masterclass",
            instructor: "Hitesh Choudhary",
            price: 1799,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1529101091764-c3526ddd385f",
            students: 1040,
            duration: "38 Hours",
            description: "Build concurrent and highly scalable backend APIs using the Go programming language."
        },
        {
            id: 23,
            title: "Kubernetes in Practice",
            instructor: "Sandeep Das",
            price: 2199,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1667372393086-9d4001d51417",
            students: 860,
            duration: "26 Hours",
            description: "Orchestrate container deployments, scaling, and networking configurations."
        },
        {
            id: 24,
            title: "Linux Command Line Mastery",
            instructor: "Kunal Kushwaha",
            price: 399,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
            students: 5400,
            duration: "10 Hours",
            description: "Get comfortable with terminal navigation, shell scripting, and user permissions."
        },
        {
            id: 25,
            title: "Deep Learning with PyTorch",
            instructor: "Animesh Bhardwaj",
            price: 2899,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
            students: 920,
            duration: "48 Hours",
            description: "Build and train Artificial Neural Networks (ANNs) and Convolutional Networks (CNNs)."
        },
        {
            id: 26,
            title: "Testing React with Jest & RTL",
            instructor: "Love Babbar",
            price: 899,
            rating: 4.7,
            thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
            students: 1150,
            duration: "18 Hours",
            description: "Secure your frontends by writing robust Unit, Integration, and Component tests."
        },
        {
            id: 27,
            title: "AWS Cloud Practitioner",
            instructor: "Sandeep Das",
            price: 1499,
            rating: 4.6,
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            students: 3400,
            duration: "30 Hours",
            description: "Prepare thoroughly for the AWS Cloud Practitioner certification exam."
        },
        {
            id: 28,
            title: "Redis & Caching Strategies",
            instructor: "Akshay Saini",
            price: 1099,
            rating: 4.8,
            thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
            students: 1620,
            duration: "15 Hours",
            description: "Optimize application speed through advanced caching patterns using Redis."
        },
        {
            id: 29,
            title: "System Design for Scale",
            instructor: "Love Babbar",
            price: 2599,
            rating: 4.9,
            thumbnail: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
            students: 4100,
            duration: "35 Hours",
            description: "Learn High-Level (HLD) and Low-Level Design (LLD) architectures for millions of users."
        },
        {
            id: 30,
            title: "Product Management 101",
            instructor: "Ansh Mehra",
            price: 1299,
            rating: 4.5,
            thumbnail: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83",
            students: 1980,
            duration: "24 Hours",
            description: "Bridge the gap between design, technology, and business to ship great software."
        }
    ];

    return (
        <>
            <h1>Courses Page</h1>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    price={course.price}
                    rating={course.rating}
                    thumbnail={course.thumbnail}
                    students={course.students}
                    duration={course.duration}
                    description={course.description}
                />
            ))}
        </>
    );
}

export default Courses;