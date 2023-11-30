function Program() {
  return (
    <>
      <section className="programbox">
        <div className="programphrase">
          <div className="programphrase1">
            Eksplorasi Berbagai Program Nutrikid
          </div>
          <div className="programphrase2">
            Program kami akan menemani perkembangan buah hati anda
          </div>
        </div>
        <div className="card-group contentprogram ">
          <div className="card program1 col-md-6">
            <img
              src="/homepage/100days.png"
              className="card-img-top imgpg1"
              alt="Baby"
            />
            <div className="card-body">
              <h5 className="card-title titleprogram1">
                1000 Hari Pertama : Panduan Mengasuh
              </h5>
              <p className="card-text textisi">
                Perawatan terbaik selama 1000 hari pertama.
              </p>
            </div>
            <div className="card-footer harga">
              <small className="text-body-secondary">Rp 500.000</small>
            </div>
          </div>
          <div className="card program1">
            <img
              src="/homepage/baby-food.jpg"
              className="card-img-top imgpg1"
              alt="Baby food"
            />
            <div className="card-body">
              <h5 className="card-title titleprogram1">
                Makanan Sehat untuk Anak
              </h5>
              <p className="card-text textisi">
                Merencanakan dan menyiapkan makanan bergizi untuk anak-anak.
              </p>
            </div>
            <div className="card-footer harga">
              <small className="text-body-secondary">Rp 300.000</small>
            </div>
          </div>
          <div className="card program1">
            <img
              src="/homepage/nutrisi-ibu.jfif"
              className="card-img-top imgpg1"
              alt="Pregnant mom"
            />
            <div className="card-body">
              <h5 className="card-title titleprogram1">
                Pemenuhan Nutrisi Pascapersalinan dan perawatan diri
              </h5>
              <p className="card-text textisi">
                Cara memenuhi kebutuhan nutrisi ibu dan pemulihan pasca
                melahirkan.
              </p>
            </div>
            <div className="card-footer harga">
              <small className="text-body-secondary">Gratis</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Program;
