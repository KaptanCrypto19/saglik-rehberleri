export const categories = [
  {
    id: 'tuberkuloz',
    name: 'Tüberküloz',
    icon: '🦠',
    description: 'Verem hastalığı rehberleri ve formları'
  }
  // Gelecekte yeni kategoriler buraya eklenecek
  // { id: 'asilama', name: 'Aşılama', icon: '💉', description: '...' },
];

export const subcategories = [
  { id: 'all', name: 'Tümü', icon: '📋' },
  { id: 'patient', name: 'Hasta Bilgilendirme', icon: '👤' },
  { id: 'forms', name: 'Formlar', icon: '📝' },
  { id: 'medical', name: 'Tıbbi Rehberler', icon: '⚕️' },
  { id: 'guidelines', name: 'Kılavuzlar', icon: '📖' }
];

export const languages = [
  { id: 'all', name: 'Tüm Diller', flag: '🌍' },
  { id: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { id: 'ar', name: 'العربية', flag: '🇸🇦' },
  { id: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { id: 'fr', name: 'Français', flag: '🇫🇷' },
  { id: 'en', name: 'English', flag: '🇬🇧' },
  { id: 'ru', name: 'Русский', flag: '🇷🇺' },
  { id: 'ps', name: 'پښتو', flag: '🇦🇫' }
];

export const guides = [
  {
    id: 1,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi',
    titleShort: 'Hasta Bilgilendirme (Türkçe)',
    subcategory: 'patient',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 2,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi (Arapça)',
    titleShort: 'Hasta Bilgilendirme (Arapça)',
    subcategory: 'patient',
    language: 'ar',
    languageLabel: 'العربية',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Arapca_Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 3,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi (Farsça)',
    titleShort: 'Hasta Bilgilendirme (Farsça)',
    subcategory: 'patient',
    language: 'fa',
    languageLabel: 'فارسی',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Farsca_Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 4,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi (Fransızca)',
    titleShort: 'Hasta Bilgilendirme (Fransızca)',
    subcategory: 'patient',
    language: 'fr',
    languageLabel: 'Français',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Fransizca_Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 5,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi (İngilizce)',
    titleShort: 'Hasta Bilgilendirme (İngilizce)',
    subcategory: 'patient',
    language: 'en',
    languageLabel: 'English',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Ingilizce_Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 6,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi (Rusça)',
    titleShort: 'Hasta Bilgilendirme (Rusça)',
    subcategory: 'patient',
    language: 'ru',
    languageLabel: 'Русский',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Rusca_Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 7,
    categoryId: 'tuberkuloz',
    title: 'Verem/Tüberküloz Hastaları Bilgilendirme Rehberi (Peştuca)',
    titleShort: 'Hasta Bilgilendirme (Peştuca)',
    subcategory: 'patient',
    language: 'ps',
    languageLabel: 'پښتو',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Pestuca_Verem_Tuberkuloz_Hastalarini_Bilgilendirme_Rehberi.pdf'
  },
  {
    id: 8,
    categoryId: 'tuberkuloz',
    title: 'Bilgilendirme ve Rıza Formu (Hasta Kopyası)',
    titleShort: 'Rıza Formu - Hasta',
    subcategory: 'forms',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/BILGILENDIRME_VE_RIZA_FORMU_Hasta_Kopyasi.pdf'
  },
  {
    id: 9,
    categoryId: 'tuberkuloz',
    title: 'Bilgilendirme ve Rıza Formu (Sağlık Kurumu Kopyası)',
    titleShort: 'Rıza Formu - Kurum',
    subcategory: 'forms',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/BILGILENDIRME_VE_RIZA_FORMU_VSD-Saglik_Kurumu_Kopyasi.pdf'
  },
  {
    id: 10,
    categoryId: 'tuberkuloz',
    title: 'Hasta Bilgilendirme ve Taahhüt Formu',
    titleShort: 'Taahhüt Formu',
    subcategory: 'forms',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Hasta_Bilgilendirme_ve_Taahhut_Formu.pdf'
  },
  {
    id: 11,
    categoryId: 'tuberkuloz',
    title: 'Tüberküloz Hastalarina Yönelik Şartlı ve Düzenli Nakdi Sosyal Yardım Kılavuzu',
    titleShort: 'Sosyal Yardım Kılavuzu',
    subcategory: 'guidelines',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Ek-Tuberkuloz_Hastalarina_Yonelik_Sartli_ve_Duzenli_Nakdi_Sosyal_Yardim_Kilavuzupdf.pdf'
  },
  {
    id: 12,
    categoryId: 'tuberkuloz',
    title: 'Ulusal Tüberküloz Kontrol Programı',
    titleShort: 'Ulusal TB Kontrol Programı',
    subcategory: 'guidelines',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Ulusal_Tuberkuloz_Kontrol_Programi.pdf'
  },
  {
    id: 13,
    categoryId: 'tuberkuloz',
    title: 'VSD Kayıt ve Raporlama Sistemi Rehberi (2021)',
    titleShort: 'VSD Kayıt Rehberi',
    subcategory: 'guidelines',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/VSD_Kayit_ve_Raporlama_Sistemi_Rehberi-2021.pdf'
  },
  {
    id: 14,
    categoryId: 'tuberkuloz',
    title: 'Tüberküloz Kontrol Faaliyetleri',
    titleShort: 'TB Kontrol Faaliyetleri',
    subcategory: 'guidelines',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Tberkloz_Kontrol_F_Ek_809af975-ae5a-405f-8829-35954e46d1fe.pdf'
  },
  {
    id: 15,
    categoryId: 'tuberkuloz',
    title: 'DSÖ 2030 Yılına Kadar Tüberkülozu Sona Erdirme Süreci',
    titleShort: 'DSÖ 2030 Çerçevesi',
    subcategory: 'guidelines',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/DSO_2030_Yilina_Kadar_Tuberkulozu_Sona_Erdirme_Surecini_Hizlandirmak_Icin_Cok_Sektorlu_Sorumluluk_Cercevesi_dokumani.pdf'
  },
  {
    id: 16,
    categoryId: 'tuberkuloz',
    title: 'Tüberküloz Tanı ve Tedavi Rehberi',
    titleShort: 'Tanı ve Tedavi Rehberi',
    subcategory: 'medical',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Tuberkuloz_Tani_ve_Tedavi_Rehberi.pdf'
  },
  {
    id: 17,
    categoryId: 'tuberkuloz',
    title: 'Anti-TNF Kullanan Hastalarda Tüberküloz Rehberi',
    titleShort: 'Anti-TNF TB Rehberi',
    subcategory: 'medical',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/Anti-TNF_Kullanan_Hastalarda_TB_Rehberi.pdf'
  },
  {
    id: 18,
    categoryId: 'tuberkuloz',
    title: 'Verem Bilgilendirme Rehberi (Kapak ve İç Sayfalar)',
    titleShort: 'Bilgilendirme Rehberi',
    subcategory: 'patient',
    language: 'tr',
    languageLabel: 'Türkçe',
    url: 'https://hsgm.saglik.gov.tr/depo/birimler/tuberkuloz-db/Dokumanlar/Rehberler/verem_bilgilendirme_rehberi_kapak__ic_sayfalar.pdf'
  }
];
