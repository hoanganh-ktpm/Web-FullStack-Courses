import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="z-50 bg-white shadow-sm  sticky top-0">
                    <Header />
                </div>
                <div className="flex max-w-[1920px] mx-auto w-full flex-1">
                    <Sidebar />
                    <main className="flex-1 p-6 bg-gray-50 min-h-[2000px]">{children}</main>
                </div>
            </div>
        </>
    );
}
export default DefaultLayout;
