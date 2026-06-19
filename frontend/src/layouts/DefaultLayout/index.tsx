import Header from '../components/Header';
import Footer from '../components/Footer';
function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}
export default DefaultLayout;
