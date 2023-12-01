import Accordion from "react-bootstrap/Accordion";
function About() {
  return (
    <>
      <h1 className="text-center m-4 fw-bold">About Nutrikid</h1>
      <div className="container col-lg-6">
        <div className="row mx-2">
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Apa itu Nutrikid ?</Accordion.Header>
              <Accordion.Body>
                Nutrikid adalah sebuah platform aplikasi web yang memiliki
                tujuan untuk memberikan informasi dan edukasi seputar gizi
                khususnya untuk para ibu hamil dan menyusui, anak - anak, bayi,
                dan balita. Aplikasi ini dirancang untuk memberikan informasi
                dan dukungan kepada orang tua, pengasuh dan seluruh masyarakat
                Indonesia dalam memenuhi kebutuhan gizi anak - anak mereka agar
                dapat mencegah dan terhindar dari stunting, serta memberikan
                pemahaman lebih dalam tentang pentingnya pemenuhan gizi yang
                baik selama masa kehamilan dan masa pertumbuhan anak.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Kenapa Harus Memilih Nutrikid?
              </Accordion.Header>
              <Accordion.Body>
                Nutrikid berkomitmen untuk terus memberikan informasi dan
                edukasi seputar gizi untuk masyarakat Indonesia khususnya untuk
                para ibu hamil, ibu menyusui, anak, bayi dan balita. Untuk
                mengakomodasi informasi - informasi gizi tersebut Nutrikid,
                menghadirkan beberapa fitur untuk menyampikan informasi -
                informasi gizi tersebut melalui fitur - fitur yang ada seperti :
                <ol>
                  <li>
                    <span className="fw-bold">Artikel</span>, Nutrikid
                    menyediakan fitur artikel yang mana masyarakat dapat membaca
                    informasi dan hal - hal yang berkaitan dengan kesehatan dan
                    gizi.
                  </li>
                  <li>
                    <span className="fw-bold">Webinar dan Program</span>, Fitur
                    webinar dan program khusus memberikan pengguna akses ke
                    pengetahuan yang mendalam dari narasumber profesional di
                    bidang gizi dan kesehatan anak.
                  </li>
                  <li>
                    <span className="fw-bold">Konsultasi</span>, Nutrikid
                    menyediakan fitur konsultasi melalui chat dan panggilan,
                    memungkinkan pengguna untuk dengan mudah menghubungi dokter
                    atau ahli gizi untuk menjawab keluhan dan hal - hal terkait
                    gizi lainnya.
                  </li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Langkah - langkah untuk Menghubungi Dokter Melalui Nutrikid
              </Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>
                    Buat akun Anda terlebih dahulu di Nutrikid, atau jika sudah
                    punya akun silakan Login dengan akun yang telah terdaftar.
                  </li>
                  <li>Masuk ke halaman konsultasi</li>
                  <li>
                    Pilih dokter atau ahli gizi yang muncul pada halaman
                    konsultasi yang tersedia untuk konsultasi.
                  </li>
                  <li>
                    Nutrikid menyediakan dua layanan konsultasi, yaitu melalui
                    pesan atau panggilan. Pilih jenis konsultasi yang
                    diinginkan.
                  </li>
                  <li>Selesaikan pembayaran</li>
                  <li>
                    Masuk ke sesi konsultasi dengan dokter atau ahli gizi dan
                    ajukan pertanyaan atau diskusikan masalah kesehatan atau
                    gizi yang dihadapi.
                  </li>
                  <li>
                    Dengan Nutrikid, Anda dapat menerima nasihat instan dan
                    solusi terkait dengan kebutuhan gizi anak atau ibu hamil.
                  </li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Keamanan Data pada Nutrikid</Accordion.Header>
              <Accordion.Body>
                Kami di Nutrikid sepenuhnya berkomitmen untuk melindungi privasi
                dan keamanan data pengguna kami. Keamanan data merupakan
                prioritas utama kami, dan kami telah menerapkan serangkaian
                langkah-langkah untuk memastikan bahwa setiap informasi yang
                Anda berikan dijamin keamanannya.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default About;
