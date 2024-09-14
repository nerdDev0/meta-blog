import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}
