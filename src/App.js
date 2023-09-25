import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pulicComponents } from "./routes";
import DefaultLayout from "./layout/DefaultLayout";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        pulicComponents.map((route, index) => {
                            let Page = route.element;
                            let Layout = route.layout === null ? Fragment : DefaultLayout;
                            return <Route
                                        key={index}
                                        path={route.path} 
                                        element={
                                            <Layout>
                                                <Page/> 
                                            </Layout>
                                        }
                                    />
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
