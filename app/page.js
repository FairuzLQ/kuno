import LatestArticles from "./components/beranda-components/LatestArticles";
import FourArticlesPick from './components/beranda-components/FourArticlesPick';

export default function Beranda() {
  return (
    <div className="p-5 sm:p-20">
      <LatestArticles />
      <FourArticlesPick />
    </div>
  );
}
