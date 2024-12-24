import LatestArticles from "./components/beranda-components/LatestArticles";
import FourArticlesPick from './components/beranda-components/FourArticlesPick';
import InsightArticles from "./components/beranda-components/InsightArticles";

export default function Beranda() {
  return (
    <div className="p-5 sm:p-20">
      <LatestArticles />
      <FourArticlesPick />
      <InsightArticles />
    </div>
  );
}
