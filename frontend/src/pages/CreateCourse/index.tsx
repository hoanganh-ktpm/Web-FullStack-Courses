import { useState } from 'react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
function CreateCourse() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState(0);

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
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Button type="submit">Save Course</Button>
            </form>
        </div>
    );
}

export default CreateCourse;
