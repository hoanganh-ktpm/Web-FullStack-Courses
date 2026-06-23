interface CourseCardProps {
    title: string;
    description: string;
    imgUrl: string;
    price: number;
}

function CourseCard({ title, description, imgUrl, price }: CourseCardProps) {
    return (
        <div
            className="bg-white border flex flex-col h-full border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            title={title}
        >
            <img src={imgUrl} className="w-full aspect-video object-cover" />
            <div className="flex flex-col flex-1 pb-4">
                <div className="flex justify-between items-center px-4 mt-2 md:mt-4  gap-4 ">
                    <h2 className="font-semibold text-lg text-gray-800 flex-1 truncate">{title}</h2>
                    <span className="text-lg font-semibold text-gray-800 shrink-0">{price}$</span>
                </div>
                <p className="px-4 mt-1 text-grey-500 line-clamp-2 leading-relaxed ">{description}</p>
            </div>
        </div>
    );
}

export default CourseCard;
