import LatestArticles from "./components/beranda-components/LatestArticles";
import FourArticlesPick from './components/beranda-components/FourArticlesPick';
import InsightArticles from "./components/beranda-components/InsightArticles";
import TwoCategoryPick from "./components/beranda-components/TwoCategoryPick";
import SliderArticles from "./components/beranda-components/SliderArticles";

export default function Beranda() {
  return (
    <div >
      <div className="px-5 py-5 sm:p-5 lg:px-20">
        <LatestArticles />
        <FourArticlesPick />
      </div>
      <InsightArticles />
      <TwoCategoryPick/>
      <SliderArticles />
    </div>
  );
}
