import { useEffect, useState } from 'react';
import CourseCard from '~/components/CourseCard';
function Home() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
            });
    }, []);


    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((course, index) => {
                return (
                    <CourseCard
                        title={course.title}
                        price={course.price}
                        imgUrl={course.imgUrl}
                        description={course.description}
                        key={course._id}
                    />
                );
            })}
        </div>
    );
}

export default Home;
