import Search from '~/layouts/components/Search';
function Header() {
    return (
        <header className="shadow-sm border-b h-16 items-center flex">
            <div className="container mx-auto w-full px-12 lg:px-24 flex items-center justify-between ">
                {/* Logo */}
                <a href="/">
                    <h2 className="font-bold text-sm md:text-xl md:text-2xl">Kid Courses</h2>
                </a>
                <Search />
                {/* Action */}

                <div className="flex items-center gap-4 font-medium">Action</div>
            </div>
        </header>
    );
}

export default Header;
