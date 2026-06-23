import { useState, useEffect } from 'react';
import { X, Trash2Icon, Trash } from 'lucide-react';

import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '~/components/ui/sheet';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
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
    const [deletedCourses, setDeletedCourses] = useState([]);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

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

    const handleOpenTrash = () => {
        setIsSheetOpen(true);
        fetch('http://localhost:3000/api/courses/deleted-courses')
            .then((res) => res.json())
            .then((data) => setDeletedCourses(data))
            .catch((err) => {
                alert('Failure to read deleted courses!');
                console.log('Failure to read deleted courses! ', err);
            });
    };

    const handleDelete = (courseId) => {
        fetch(`http://localhost:3000/api/courses/${courseId}`, {
            method: 'DELETE',
        }).then(() => {
            alert('Delete successfully!!!');
            setCourses(courses.filter((course: any) => course._id !== courseId));
        });
    };

    const handleRestore = (courseId) => {
        fetch(`http://localhost:3000/api/courses/restore/${courseId}`, {
            method: 'PATCH',
        }).then(() => {
            alert('Restore successfully!!!');
            setDeletedCourses(deletedCourses.filter((course: any) => course._id !== courseId));
        });
    };
    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => {
                alert('Failure to read courses!');
                console.log('Failure to read courses! ', err);
            });
    }, [deletedCourses]);

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
                <Button type="submit" className="cursor-pointer">
                    Save Course
                </Button>
            </form>

            <div className="flex justify-between items-center mt-6 md:mr-20">
                <h2 className="text-2xl font-bold">Created Courses: </h2>

                <Button variant="outline" className="w-12 h-12 cursor-pointer" onClick={handleOpenTrash}>
                    <Trash />
                </Button>
            </div>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Your Trash</SheetTitle>
                        <SheetDescription>Manage deleted courses</SheetDescription>
                    </SheetHeader>

                    <div className="mt-6 flex flex-col gap-4">
                        {deletedCourses.map((course: any) => (
                            <div key={course._id} className="flex justify-between items-center border p-3 rounded-lg">
                                <div>
                                    <p className="font-semibold">{course.title}</p>
                                    <p className="text-sm text-gray-500">{course.price}$</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="cursor-pointer"
                                        onClick={() => handleRestore(course._id)}
                                    >
                                        Restore
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {deletedCourses.length === 0 && (
                            <p className="text-center text-gray-500 mt-10">The trash is empty</p>
                        )}
                    </div>
                </SheetContent>
            </Sheet>

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
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button className="text-white cursor-pointer  hover:-translate-y-0.5 transition-all">
                                                <X />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent size="sm">
                                            <AlertDialogHeader>
                                                <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                                                    <Trash2Icon />
                                                </AlertDialogMedia>
                                                <AlertDialogTitle>Delete chat?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This will permanently delete this course {course.title}.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel variant="outline" className="cursor-pointer">
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    variant="destructive"
                                                    onClick={() => handleDelete(course._id)}
                                                    className="cursor-pointer"
                                                >
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
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
