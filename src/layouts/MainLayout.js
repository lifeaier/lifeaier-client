import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="page-layout">
            <Header />

            <main>
                <Outlet /> {/* Page content appears here */}
            </main>

            <Footer />
        </div>
    );
}