import DetailLayout from "../../components/Layouts/DetailLayout";
import ArticleDetail from "../../components/ArticleDetail/Detail";

function Detail() {
  return <DetailLayout content={<h1>Detail</h1>}></DetailLayout>;
  return <DetailLayout content={<ArticleDetail />}></DetailLayout>;
}

export default Detail;