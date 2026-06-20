import './App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment } from 'react/jsx-runtime';
import { Input } from './components/ui/input';
function App() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout: any = DefaultLayout;
                if (route.layout != null) {
                    Layout = route.layout;
                } else {
                    Layout = Fragment;
                }
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
