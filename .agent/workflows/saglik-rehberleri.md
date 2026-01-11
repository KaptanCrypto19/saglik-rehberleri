---
description: Sağlık Rehberleri QR Platformu geliştirme ve deploy workflow
---

# Sağlık Rehberleri QR Platformu Workflow

## Proje Bilgileri
- **Konum**: `/Users/milyoner/.gemini/antigravity/scratch/saglik-rehberleri`
- **GitHub**: https://github.com/KaptanCrypto19/saglik-rehberleri
- **Canlı Site**: https://saglik-rehberleri.vercel.app
- **Supabase**: https://vdfaxgksswgcipmgdwee.supabase.co

## Geliştirme

### Dev server başlat
// turbo
```bash
cd /Users/milyoner/.gemini/antigravity/scratch/saglik-rehberleri && npm run dev
```

### Değişiklikleri deploy et
```bash
cd /Users/milyoner/.gemini/antigravity/scratch/saglik-rehberleri
git add .
git commit -m "Değişiklik açıklaması"
git push
```
Vercel otomatik olarak deploy eder.

## Yeni Rehber Ekleme

1. `src/data/guides.js` dosyasını aç
2. `guides` array'ine yeni rehber ekle:
```javascript
{
  id: 19, // sıradaki ID
  categoryId: 'tuberkuloz',
  title: 'Rehber Tam Adı',
  titleShort: 'Kısa Ad',
  subcategory: 'patient', // patient, forms, medical, guidelines
  language: 'tr', // tr, ar, fa, fr, en, ru, ps
  languageLabel: 'Türkçe',
  url: 'https://...'
}
```
3. Deploy et

## Yeni Kategori Ekleme

1. `src/data/guides.js` dosyasında `categories` array'ine ekle:
```javascript
{
  id: 'yeni-kategori',
  name: 'Kategori Adı',
  icon: '🆕',
  description: 'Açıklama'
}
```
2. Yeni kategoriye ait rehberleri `guides` array'ine ekle
3. Deploy et

## Önemli Dosyalar
- `src/data/guides.js` - Tüm rehber verileri
- `src/pages/Home.jsx` - Ana sayfa
- `src/components/PatientSection.jsx` - Hasta bilgilendirme bölümü
- `src/components/GuideCard.jsx` - Rehber kartı
- `src/styles/index.css` - Tüm stiller
- `.env` - Supabase credentials (git'e push edilmez)

## Supabase (İstatistikler)
Görüntülenme istatistikleri Supabase'de saklanıyor.
- Tablo: `guide_views`
- View: `guide_view_counts`

## Vercel Environment Variables
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
