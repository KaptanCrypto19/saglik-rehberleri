# Sağlık Rehberleri QR Platformu

T.C. Sağlık Bakanlığı rehberlerine QR kod ile kolay erişim sağlayan web platformu.

## 🚀 Özellikler

- 📱 QR kod ile hızlı erişim
- 🔍 Arama ve filtreleme
- 🌙 Karanlık mod
- ⭐ Favoriler
- 🕐 Son görüntülenenler
- 🖨️ Yazdırma modları (tek QR, poster)
- 📊 Görüntülenme istatistikleri
- 📱 PWA (offline destek, ana ekrana ekleme)

## 📦 Kurulum

```bash
npm install
```

## 🛠️ Geliştirme

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🗄️ Supabase Kurulumu

Görüntülenme istatistikleri için Supabase kullanılır:

1. [supabase.com](https://supabase.com) adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni proje oluşturun
4. SQL Editor'de şu komutu çalıştırın:

```sql
-- Görüntülenme tablosu
CREATE TABLE guide_views (
  id SERIAL PRIMARY KEY,
  guide_id INTEGER NOT NULL,
  viewed_at TIMESTAMP DEFAULT NOW()
);

-- Görüntülenme sayısı view'ı
CREATE VIEW guide_view_counts AS
SELECT guide_id, COUNT(*) as view_count
FROM guide_views
GROUP BY guide_id;

-- RLS (Row Level Security) - Herkese okuma/yazma izni
ALTER TABLE guide_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all" ON guide_views
  FOR ALL USING (true) WITH CHECK (true);
```

5. Proje URL ve anon key'i .env dosyasına ekleyin:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 🚀 Deployment (Vercel)

1. GitHub'a push edin
2. [vercel.com](https://vercel.com) adresine gidin
3. "Import Project" → GitHub repo'yu seçin
4. Environment Variables ekleyin (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
5. Deploy!

## 📝 Lisans

MIT

---

Created by **Alper YILDIRIM**
