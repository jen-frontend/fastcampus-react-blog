import Footer from "components/Footer";
import Header from "components/Header";
import PostList from "components/PostList";

export default function PostsPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
