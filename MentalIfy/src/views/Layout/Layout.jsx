import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContentProvider } from "../../contexts/UserContext";
import { ChatContextProvider } from "../../contexts/ChatContext"

export function Layout() {
  return (
    <main>

      <UserContentProvider>
        <ChatContextProvider>
          <Navbar />

          <section className="body">
            <Outlet />
          </section>
        </ChatContextProvider>
      </UserContentProvider>

    </main>
  );
}
