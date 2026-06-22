import CourseCard from "../components/CourseCard";

function Courses() {
    const courses = [
        {
            id: 1,
            title: "React Mastery",
            instructor: "Love Babbar",
            price: 999,
            rating: 4.8,
        },
        {
            id: 2,
            title: "Node.js Bootcamp",
            instructor: "Hitesh Choudhary",
            price: 1499,
            rating: 4.7,
        },
        {
            id: 3,
            title: "Full Stack Development",
            instructor: "Animesh Bhardwaj",
            price: 2999,
            rating: 4.9,
        },
    ];

    return (
        <>
            <h1>Courses Page</h1>

            

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={ course.id}
                    title={course.title}
                    instructor={course.instructor}
                    price={course.price}
                    rating={course.rating}
                />
            ))}
        </>
    );
}

export default Courses;