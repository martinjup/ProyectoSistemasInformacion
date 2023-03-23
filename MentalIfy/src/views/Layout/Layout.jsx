import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContentProvider } from "../../contexts/UserContext";
import { ChatContextProvider } from "../../contexts/ChatContext"
import { DoctorContextProvider } from "../../contexts/DoctorsContext";

export function Layout() {
  return (
    <UserContentProvider>
      <main>


        <ChatContextProvider>
          <DoctorContextProvider>
            <Navbar />

            <section className="body">
              <Outlet />
            </section>
          </DoctorContextProvider>
        </ChatContextProvider>


      </main>
    </UserContentProvider>
  );
}
