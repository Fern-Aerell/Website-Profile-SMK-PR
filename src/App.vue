<script setup lang="ts">

import logo_image_svg from '../public/assets/logo.svg';

import facebook_black_icon_image_webp from '../public/assets/images/icons/social_media/facebook_black_icon.webp';
import facebook_icon_image_webp from '../public/assets/images/icons/social_media/facebook_icon.webp';
import github_black_icon_image_webp from '../public/assets/images/icons/social_media/github_black_icon.webp';
import github_icon_image_webp from '../public/assets/images/icons/social_media/github_icon.webp';
import instagram_black_icon_image_webp from '../public/assets/images/icons/social_media/instagram_black_icon.webp';
import instagram_icon_image_webp from '../public/assets/images/icons/social_media/instagram_icon.webp';
import twitter_black_icon_image_webp from '../public/assets/images/icons/social_media/twitter_black_icon.webp';
import twitter_icon_image_webp from '../public/assets/images/icons/social_media/twitter_icon.webp';
import gedung_smk_image_webp from "../public/assets/images/backgrounds/gedung_smk.webp";
import kebakaran_image_webp from "../public/assets/images/backgrounds/kebakaran.webp";
import ruang_kelas_image_webp from "../public/assets/images/backgrounds/ruang_kelas.webp";
import rumah_sakit_image_webp from "../public/assets/images/backgrounds/rumah_sakit.webp";
import animation_icon_image_webp from "../public/assets/images/icons/majors/animasi_icon.webp";
import illustration_icon_image_webp from "../public/assets/images/icons/majors/dkv_icon.webp";
import programmer_icon_image_webp from "../public/assets/images/icons/majors/pplg_icon.webp";
import ruangan_kantin_image_webp from "../public/assets/images/backgrounds/ruangan_kantin.webp"; 
import ruangan_kelas_image_webp from "../public/assets/images/backgrounds/ruangan_kelas.webp"; 
import ruangan_lab_image_webp from "../public/assets/images/backgrounds/ruangan_lab.webp"; 

import NavbarElement from './app/components/NavbarElement.vue';
import HeaderElement from './app/components/HeaderElement.vue';
import HistoryElement from './app/components/HistoryElement.vue';
import VisionAndMissionElement from './app/components/VisionAndMissionElement.vue';
import MajorElement from './app/components/majors/MajorElement.vue';
import MajorCard from './app/components/majors/MajorCard.vue';
import RegisterElement from './app/components/RegisterElement.vue';
import ContactElement from './app/components/ContactElement.vue';
import FooterElement from './app/components/footers/FooterElement.vue';
import FooterCopyright from './app/components/footers/FooterCopyright.vue';
import FooterList from './app/components/footers/FooterList.vue';
import FooterLogo from './app/components/footers/FooterLogo.vue';
import FacilityElement from './app/components/FacilityElement.vue';

import NavbarButtonModel from './app/models/NavbarButtonModel';
import SocialMediaModel from './app/models/SocialMediaModel';
import HistoryCardModel from './app/models/HistoryCardModel';
import FacilityModel from './app/models/FacilityModel';

const navbarButtonData =[
  new NavbarButtonModel("Sejarah", "#sejarah"),
  new NavbarButtonModel("Visi Dan Misi", "#visidanmisi"),
  new NavbarButtonModel("Jurusan", "#jurusan"),
  new NavbarButtonModel("Fasilitas", "#fasilitas"),
  new NavbarButtonModel("Pendaftaran", "#pendaftaran"),
  new NavbarButtonModel("Kontak", "#kontak"),
];

const socialMediaData =[
  new SocialMediaModel("instagram","",instagram_icon_image_webp,instagram_black_icon_image_webp),
  new SocialMediaModel("twitter","",twitter_icon_image_webp,twitter_black_icon_image_webp),
  new SocialMediaModel("facebook","",facebook_icon_image_webp,facebook_black_icon_image_webp),
  new SocialMediaModel("github","",github_icon_image_webp,github_black_icon_image_webp),
];

const historyData =[
  new HistoryCardModel("Sejarah Awal sebagai Rumah Sakit", rumah_sakit_image_webp,["Pada tahun 1890, di Pekanbaru, terletak sebuah rumah sakit yang dikenal sebagai \"Rumah Sakit Aja\" Rumah sakit ini didirikan sebagai tempat perawatan bagi warga kota yang sakit dan membutuhkan perawatan medis. Selama beberapa dekade, rumah sakit ini menjadi salah satu pusat perawatan kesehatan terkemuka di daerah tersebut."], 1),
  new HistoryCardModel("Kebakaran dan Bangunan Kosong", kebakaran_image_webp,["Pada tahun 1920, nasib tragis menimpa rumah sakit ini ketika sebuah kebakaran besar melanda dan menghancurkan sebagian besar bangunan. Kebakaran itu mengakibatkan evakuasi cepat pasien dan personel, sementara sebagian besar bangunan rusak parah dan tidak dapat ditempati lagi. Dengan anggaran terbatas dan sumber daya yang terbatas, keputusan diambil untuk tidak membangun kembali rumah sakit tersebut.","Selama beberapa tahun, bangunan yang tersisa menjadi terbengkalai dan dibiarkan kosong. Ini adalah periode yang menegangkan dalam sejarah bangunan, di mana bangunan rumah sakit yang dulu ramai menjadi hantu dan tempat yang tidak berpenghuni."], 2),
  new HistoryCardModel("Transformasi menjadi SMK", gedung_smk_image_webp,["Pada tahun 1945, pemerintah daerah bersama-sama dengan pendidik dan masyarakat setempat mencapai kesepakatan untuk memanfaatkan bangunan bekas rumah sakit yang terbengkalai ini. Mereka memiliki visi untuk mendirikan sebuah sekolah yang akan memberikan pendidikan kejuruan kepada generasi muda dan membantu mereka mempersiapkan masa depan mereka di dunia kerja.","Bangunan bekas rumah sakit yang rusak akhirnya direnovasi dan diubah menjadi Sekolah Menengah Kejuruan (SMK) yang diberi nama \"SMK Pekanbaru Ravengers.\" Sekolah ini fokus pada berbagai program kejuruan seperti rekayasa perangkat lunak, dkv dan animasi, dengan tujuan memberikan pelatihan praktis kepada siswa-siswanya."], 3),
  new HistoryCardModel("Warisan", ruang_kelas_image_webp,["SMK Pekanbaru Ravengers berkembang menjadi sebuah lembaga pendidikan yang dihormati di Pekanbaru. Bangunan yang pernah kosong dan hancur telah menjadi tempat yang produktif dan bermanfaat untuk masyarakat. Sejarahnya yang unik sebagai rumah sakit yang terbakar dan kemudian menjadi sekolah kejuruan menggambarkan ketekunan dan tekad masyarakat lokal untuk memberikan peluang pendidikan yang lebih baik bagi generasi mendatang."], 4),
];

const facilityData = [
  new FacilityModel(ruangan_kelas_image_webp,'Ruangan Kelas','Fasilitas kelas ruangan kelas mencakup meja, kursi, papan tulis, proyektor, peralatan audiovisual, pustaka, pencahayaan, pendingin udara, ruang penyimpanan, akses internet, dan dekorasi inspiratif. Semua elemen ini membantu menciptakan lingkungan pembelajaran yang efektif dan nyaman bagi siswa dan guru.'),
  new FacilityModel(ruangan_kantin_image_webp,'Ruangan Kantin','Kantin sekolah adalah tempat di mana siswa dan staf dapat makan dan bersantai. Di dalamnya terdapat meja, kursi, menu makanan, mesin penjual otomatis, dan loket pemesanan. Kantin juga harus bersih, terjangkau, dan memiliki jam operasional sesuai dengan jadwal sekolah. Staf kantin bertanggung jawab atas pelayanan kepada pengunjung.'),
  new FacilityModel(ruangan_lab_image_webp,'Ruangan Lab','Ruangan lab adalah ruang khusus di sekolah atau institusi pendidikan yang digunakan untuk eksperimen, penelitian, dan praktik ilmiah. Beberapa komponen kunci ruangan lab meliputi peralatan eksperimen, meja kerja, kursi, alat keamanan, sistem ventilasi, dan akses ke sumber daya digital. Ruangan lab dirancang untuk mendukung pembelajaran praktis dan eksplorasi ilmiah bagi siswa.'),
];

</script>

<template>
  <NavbarElement :logo="logo_image_svg" title="SMK PR" :list="navbarButtonData"></NavbarElement>

  <HeaderElement id="home" title="PEKANBARU RAVENGERS" moto="Sekolah Unggulan, Generasi Penerus Hebat Banget" :social_media_data="socialMediaData"></HeaderElement>

  <HistoryElement id="sejarah" :data="historyData"></HistoryElement>

  <VisionAndMissionElement id="visidanmisi" title="VISI DAN MISI" :text="'Menjadi pusat pendidikan kejuruan yang unggul, berorientasi pada teknologi, dan berkomitmen untuk menciptakan lulusan yang siap bersaing di dunia kerja global.'" :list="['Memberikan Pendidikan Berkualitas','Mengembangkan Keahlian Kejuruan','Pemberdayaan Siswa','Kemitraan Industri','Pengembangan Karakter','Pengembangan Potensi Diri','Penggunaan Teknologi','Kesetaraan Kesempatan','Ketahanan Terhadap Perubahan','Kontribusi Terhadap Kemajuan Masyarakat']"></VisionAndMissionElement>

  <MajorElement id="jurusan" title="JURUSAN">
    <MajorCard title="ANIMASI" :icon="animation_icon_image_webp" description="Jurusan ini mempelajari dan mendalami cara-cara dan teknik pembuatan animasi, melibatkan penciptaan gambar bergerak yang dapat digunakan dalam berbagai konteks, dan media digital lainnya."></MajorCard>
    <MajorCard title="DKV" :icon="illustration_icon_image_webp" description="Jurusan ini mempelajari dan mendalami cara-cara merancang pesan visual yang efektif, memahami prinsip desain, dan menguasai alat-alat desain seperti perangkat lunak grafis, fotografi, dan seni digital."></MajorCard>
    <MajorCard title="PPLG" :icon="programmer_icon_image_webp" description="Jurusan ini mempelajari dan mendalami cara-cara mengembangkan perangkat lunak. Mulai dari pembuatan, pemeliharaan, manajemen kualitas, dan manajemen organisasi pengembangan perangkat lunak."></MajorCard>
  </MajorElement>

  <!-- <FacilityElement id="fasilitas" title="FASILITAS SEKOLAH" :data="facilityData"></FacilityElement> -->

  <RegisterElement id="pendaftaran"></RegisterElement>

  <ContactElement id="kontak" location="pekanbaru" :zoom="15"></ContactElement>

  <FooterElement id="footer">
    <template v-slot:top>
      <FooterLogo
        :logo="logo_image_svg"
        title="SMK PEKANBARU RAVENGERS"
        subtitle="Tugas PW&PB kelompok 3"
      ></FooterLogo>
      <FooterList
        title="Dibuat oleh"
        :list="['Aerell', 'Azra', 'Eric', 'Iqbal', 'Ranny', 'Angel']"
      ></FooterList>
      <FooterList
        title="Kontak Kami"
        :list="['Pekanbaru, Riau, Indonesia', 'contact@smkpr.sch.id', 'Telp : +62 0666 140302']"
      ></FooterList>
    </template>
    <template v-slot:bottom>
      <FooterCopyright
        year="2023"
        name="SMK Pekanbaru Ravengers"
        license="All Rights Reserved"
      />
    </template>
  </FooterElement>

</template>

<style scoped></style>