import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Search as SearchIcon, CircleX } from 'lucide-react';
import { useState, useRef } from 'react';

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const handleDelete = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div className="relative hidden sm:flex items-center gap-2 w-48 md:w-96 md:h-12">
            <Input
                placeholder="Search Courses"
                className="rounded-full h-full w-full pl-5 pr-20 focus-visible:ring-0 focus-visible:border-gray-300"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                ref={inputRef}
            />
            {searchValue.length > 0 && (
                <CircleX
                    className="w-4 h-4 right-12 absolute text-gray-400 top-1/2 -translate-y-1/2 flex items-center cursor-pointer "
                    onClick={handleDelete}
                />
            )}
            <div className="h-full flex items-center absolute right-0 top-1/2 -translate-y-1/2">
                <Button
                    className={`h-full bg-transparent w-12 hover:bg-gray-200 cursor-pointer rounded-r-full active:!translate-y-0 group
                        ${searchValue.length > 0 ? 'text-black' : 'text-gray-400'}`}
                >
                    <SearchIcon className="w-4 h-full group-active:translate-y-px" />
                </Button>
            </div>
        </div>
    );
}

export default Search;
