import ArticleList from "../Articles/articleContent/ArticleList";

function Artikel() {
    return (
      <>

        <section className="artikelbox p-0 m-4">
            <div className="artikelphrase">
                <div className="artikelphrase1">Eksplorasi Artikel dari Para Ahli</div>
                <div className="artikelphrase2">
                Kami bekerjasama dengan penulis dari kalangan profesional yang Ahli
                pada bidangnya
                </div>
            </div>
            <ArticleList/>
        </section>
        
      </>
    );
  }

  
  export default Artikel;
  