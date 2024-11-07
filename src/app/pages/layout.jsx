import Nav from "@/components/Nav";

function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[url(/fondo-code.webp)] bg-no-repeat bg-cover bg-center bg-image pt-10 px-12 text-white grid grid-rows-[10vh,1fr]">
        <Nav />
        {children}
    </div>
  );
}

export default Layout;
