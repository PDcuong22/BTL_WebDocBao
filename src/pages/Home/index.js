import HomeLayout from "../../components/Layouts/HomeLayout";
import Content from "../../components/Home/Content";
function Home() {
  return <HomeLayout content={<Content />}></HomeLayout>;
}

export default Home;
