# 📂 Drive (file-manager)

Modern, minimal ve hızlı bir **kişisel bulut sürücü / dosya yöneticisi**.  
Dosyalarını yükle, düzenle, ara ve yönet — hepsi Next.js + Convex + Tailwind altyapısı ile.

> 🔗 **Canlı Demo:** https://file-bilaltm.vercel.app

---

## ✨ Özellikler

- 📁 **Dosya Yükleme & Yönetme**  
  Hızlı yükleme, boyut bilgisi, detaylar ve listeleme.

- 🔍 **Gerçek Zamanlı Arama**  
  Dosyaları anında filtrele, hızlı eriş.

- ⚡ **Convex Backend**  
  API, veri ve işlemler tamamen reaktif. Sayfa yenilemeye gerek yok.

- 🎨 **Modern Arayüz**  
  Tailwind + shadcn/ui (opsiyonel) ile temiz, responsive UI.

- 🌓 **Aydınlık / Karanlık Tema (opsiyonel)**

- 📤 **Geliştirilmesi Planlananlar**
  - Shared with me (Benimle paylaşılanlar)
  - Klasör yapısı
  - Landing Page
  - Gelişmiş izin sistemi

---

## 🧱 Teknoloji Yığını

| Teknoloji | Açıklama |
|----------|----------|
| **Next.js 14+** | App Router ile modern full-stack yapı |
| **TypeScript** | Tip güvenli proje |
| **Convex** | Reaktif, serverless backend |
| **Tailwind CSS** | Modern utility-first stil |
| **shadcn/ui** (opsiyonel) | Minimal UI componentleri |

---

## 📁 Proje Yapısı

```txt
file-manager/
├─ convex/           # Convex backend: queries, mutations, schema
├─ public/           # Statik dosyalar
├─ src/
│  ├─ app/          # Next.js App Router sayfaları
│  ├─ components/   # Ortak UI bileşenleri
│  ├─ lib/          # Yardımcı fonksiyonlar
│  └─ styles/       # Global stiller
├─ components.json   # shadcn/ui config
├─ tailwind.config.ts
├─ next.config.mjs
├─ package.json
└─ README.md
```

---

## 🚀 Kurulum

### 1️⃣ Depoyu klonla

```bash
git clone https://github.com/TMBilalTM/file-manager.git
cd file-manager
```

### 2️⃣ Bağımlılıkları yükle

```bash
npm install
# veya
yarn
# veya
pnpm install
```

### 3️⃣ Convex başlat

```bash
npm install -g convex
npx convex dev
```

Gerekirse `.env.local` oluştur:

```env
NEXT_PUBLIC_CONVEX_URL=...
CONVEX_DEPLOYMENT=...
```

### 4️⃣ Çalıştır

```bash
npm run dev
```

Tarayıcıda → http://localhost:3000

---

## 📜 Script’ler

```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🗺️ Roadmap

- [ ] Shared with me  
- [ ] Folder system  
- [ ] File preview (PDF/Image)  
- [ ] Drag & drop upload  
- [ ] Quota / Storage usage  
- [ ] Landing Page  

---

## 🤝 Katkıda Bulunma

1. Forkla  
2. Yeni branch oluştur  
3. Commit →  
   ```bash
   git commit -m "feat: yeni özellik eklendi"
   ```
4. Push et → PR aç

---

## 🛡️ Güvenlik

Herhangi bir güvenlik sorunu bulursanız public issue yerine gizli bir iletişim yöntemini tercih edin.  
Detaylar için: `SECURITY.md`

---

## 📄 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır.  
`LICENSE` dosyasına bakabilirsiniz.

---

## 👤 İletişim

**@TMBilalTM**  
https://github.com/TMBilalTM
