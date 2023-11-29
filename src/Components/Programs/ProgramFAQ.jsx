/* eslint-disable react/prop-types */

import { Accordion } from "react-bootstrap";

const ProgramFAQ = () => {
  return (
    <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Bisakah saya mengakses program dari jarak jauh, dan format materi pembelajarannya apa?</Accordion.Header>
            <Accordion.Body>
            Bisa, semua program tersedia online. Materi pembelajaran mencakup modul membaca dan konten video, memastikan pengalaman belajar yang komprehensif dan menarik. Peserta dapat mengakses materi dari jarak jauh sesuai kenyamanan mereka, memungkinkan pembelajaran yang fleksibel dan personal.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Apa yang terjadi jika saya mengalami masalah teknis atau memerlukan bantuan selama program berlangsung?</Accordion.Header>
            <Accordion.Body>
            Kami memahami bahwa masalah teknis mungkin timbul. Tim dukungan kami yang berdedikasi siap membantu Anda. Anda dapat menghubungi kami dikontak yang disediakan untuk bantuan segera melalui email ataupun telpon. Selain itu, kami menawarkan panduan terperinci dan FAQ untuk memecahkan masalah umum, memastikan pengalaman belajar yang lancar selama program berlangsung.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Bagaimana saya bisa berinteraksi dengan instruktur atau peserta lain untuk pengalaman belajar yang lebih menarik?</Accordion.Header>
            <Accordion.Body>
            Untuk saat ini Platform kami masih dalam proses membangun feature tersebut agar mendorong interaksi dan keterlibatan peserta. Sehingga Anda dapat berpartisipasi dalam forum diskusi, mengajukan pertanyaan, dan berbagi wawasan baik dengan instruktur maupun sesama peserta. Selain itu, kami nantinya juga berencana menyediakan sesi tanya jawab langsung atau webinar untuk berinteraksi dengan Konselor. Sehingga Pendekatan kolaboratif ini nantinya dapat memastikan lingkungan belajar yang dinamis.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Bisakah saya mengakses program di perangkat yang berbeda, dan bagaimana platform memastikan pengalaman yang ramah pengguna?</Accordion.Header>
            <Accordion.Body>
            Tentu! Platform Website kami dirancang agar dapat diakses di berbagai perangkat, seperti laptop, tablet, dan ponsel pintar. Platform ini dioptimalkan untuk kemudahan penggunaan, memastikan pengalaman yang lancar, apa pun perangkatnya. Anda dapat beralih antar perangkat sambil mempertahankan kemajuan Anda, menjadikan pembelajaran nyaman untuk gaya hidup Anda.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Apakah ada jadwal khusus untuk berpartisipasi, atau bisakah saya belajar sesuai kecepatan saya sendiri?</Accordion.Header>
            <Accordion.Body>
            Salah satu keuntungan utama dari program kami adalah fleksibilitas. Jadwal belajar yang tidak kaku, peserta dapat belajar dengan kecepatan mereka sendiri. Materi pembelajaran, termasuk modul membaca dan video, tersedia 24/7. Fleksibilitas ini memungkinkan Anda menyesuaikan pengalaman belajar agar sesuai dengan jadwal dan preferensi pribadi Anda. Akan tetapi nantinya untuk jadwal interaksi dengan instruktur atau konselor terbatas dengan durasi Program yang sudah tertera terhitung setelah dilakukannya pendaftaran Program.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
};

export default ProgramFAQ;
