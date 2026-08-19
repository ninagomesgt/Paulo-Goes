import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export default function SiteLayout(props: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </>
  );
}