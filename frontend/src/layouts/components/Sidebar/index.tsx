import { Home as HomeIcon, Newspaper as NewsIcon, UserPen } from 'lucide-react';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <aside className="h-screen sticky top-16 border-r w-24 md:w-48 flex flex-col items-center py-6">
            <Link
                to="/"
                className="flex items-center justify-center gap-4  w-full h-8 md:h-12 hover:bg-gray-200 hover:[-webkit-text-stroke:0.5px_black] border-t border-b"
            >
                <HomeIcon />
                <h3 className="">Home</h3>
            </Link>

            <Link
                to="/news"
                className="flex items-center justify-center gap-4  w-full h-8 md:h-12 hover:bg-gray-200 hover:[-webkit-text-stroke:0.5px_black] border-t border-b"
            >
                <NewsIcon />
                <h3 className="">News</h3>
            </Link>

            <Link
                to="/profile"
                className="flex items-center justify-center gap-4  w-full h-8 md:h-12 hover:bg-gray-200 hover:[-webkit-text-stroke:0.5px_black] border-t border-b"
            >
                <UserPen />
                <h3 className="">Profile</h3>
            </Link>
        </aside>
    );
}

export default Sidebar;
