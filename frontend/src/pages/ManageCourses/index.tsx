import { useState, useEffect } from 'react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { X } from 'lucide-react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table';
function ManageCourses() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState<number | string>(0);
    const [courses, setCourses] = useState([]);

    const handleSetPrice = (value) => {
        if (value === '') {
            setPrice('');
        } else {
            setPrice(Number(value) || price);
        }
    };
    const handleAddCourse = (e: any) => {
        e.preventDefault();

        const newCourse = {
            title: title,
            description: desc,
            imgUrl: imgUrl,
            price: price,
        };

        fetch('http://localhost:3000/api/courses/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCourse),
        })
            .then((res) => res.json())
            .then((data) => {
                alert('Great!!! Adding new course successfully!!!!');
                setTitle('');
                setDesc('');
                setImgUrl('');
                setPrice(0);
            })
            .catch((err) => alert('Failure in adding new course!!!!'));
    };

    const handleDelete = (courseId) => {
        fetch(`http://localhost:3000/api/courses/${courseId}`, {
            method: 'DELETE',
        }).then(() => alert('Delete successfully!!!'));
        setCourses(courses.filter((course: any) => course._id !== courseId));
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => {
                alert('Failure to read courses!');
                console.log('Failure to read courses! ', err);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Create New Course</h2>
            <form onSubmit={handleAddCourse} className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder="Course Title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Course Description"
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Course Image URL"
                    required
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Course Price"
                    required
                    value={price}
                    onChange={(e) => handleSetPrice(e.target.value)}
                />
                <Button type="submit">Save Course</Button>
            </form>

            <h2 className="text-2xl font-bold mt-6">Created Courses: </h2>

            <form>
                <Table className="mt-12 border-t">
                    <TableCaption>A list of your recent courses.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">id</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Created at</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courses.map((course, index) => (
                            <TableRow key={course._id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{course.title}</TableCell>
                                <TableCell>{course.price}</TableCell>
                                <TableCell>{new Date(course.createdAt).toLocaleDateString('vi-VN')}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleDelete(course._id)}
                                        className="text-white cursor-pointer  hover:-translate-y-0.5 transition-all"
                                    >
                                        <X />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default ManageCourses;
