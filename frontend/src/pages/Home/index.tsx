import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';
import { Link } from 'react-router-dom';
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
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
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

            <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger asChild>
                    <Link to={'/courses/create'} className="flex justify-center items-center fixed bottom-10 right-10">
                        <Button className="w-14 h-14 rounded-full text-2xl shadow-xl hover:scale-110 hover:-translate-y-2 transition-all">
                            +
                        </Button>
                    </Link>
                </HoverCardTrigger>
                <HoverCardContent
                side='left'
                sideOffset={15}
                className="flex w-64 flex-col gap-0.5">
                    <div className="font-semibold">Add New Course</div>
                    <div>Click here to add new course!!!!</div>
                    <div className="mt-1 text-xs text-muted-foreground">created June 2026</div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}

export default Home;
