import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";

export default function Home() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}
