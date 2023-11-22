function Banner() {
    return (
      <>

        <section className="bannerbox">
            <div className="imagebanner">
                <img src="/homepage/Ellipse-BG.png" alt="elipse" className="imgelipse" />
                <img src="/homepage/doctor-with-tablet-and-phone.png" alt="doctor" className="imgdoctor" />
            </div>
            <div className="textbanner">
                <div className="ctaphrase">
                Konsultasi Bersama Konsultan Nutrikid yang Berpengalaman
                </div>
                <div className="cta">
                <div className="ctatext"><a href="konsultasi" className="ctatext">Konsultasi Sekarang</a></div>
                </div>
            </div>
        </section>
        
      </>
    );
  }

  
  export default Banner;
  