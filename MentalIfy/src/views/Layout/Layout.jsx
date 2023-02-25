import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContentProvider } from "../../contexts/UserContext";

export function Layout() {
  return (
      <main>
        <UserContentProvider>
        <Navbar />

        <section className="body">
          <Outlet />
        </section>
        </UserContentProvider>
      </main>
  );
}
