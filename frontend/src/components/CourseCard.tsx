interface CourseCardProps {
    title: string;
    description: string;
    imgUrl: string;
    price: number;
}

function CourseCard({ title, description, imgUrl, price }: CourseCardProps) {
    return (
        <div className="bg-white border h-48 md:h-64 border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <img src={imgUrl} alt={`img-course-${title}`} className="w-full h-1/2 object-cover" />
            <div className="flex justify-between items-center px-4 mt-2 md:mt-4 ">
                <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
                <span className="text-lg font-semibold text-gray-800">{price}$</span>
            </div>
            <p className="px-4 mt-1 text-grey-500 line-clamp-2 leading-relaxed ">{description}</p>
        </div>
    );
}

export default CourseCard;
