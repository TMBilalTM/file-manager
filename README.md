📂 Drive (file-manager)

Modern, minimal bir kişisel bulut sürücü / dosya yöneticisi.
Dosyalarını tarayıcı üzerinden yükle, listele, ara ve yönet – hepsi Next.js + Convex altyapısı ile.

🔗 Canlı Demo: https://file-bilaltm.vercel.app

✨ Özellikler

📁 Dosya yükleme & listeleme
Dosyaları hızlıca yükleyebilir, isim, tarih veya türlerine göre görüntüleyebilirsin.

🔍 Arama & filtreleme
Gerçek zamanlı arama ile dosyaları kolayca bul.

⚡ Reaktif backend (Convex)
Veri güncellemeleri anında arayüzde görünür — ekstra refresh gerekmez.

🎨 Modern UI
Next.js App Router + Tailwind CSS (ve opsiyonel shadcn/ui) ile temiz, minimalist tasarım.

🌓 (Opsiyonel) Karanlık / aydınlık tema
Tailwind temaları ile tamamen özelleştirilebilir.

🔐 (Planlanan) Paylaşılan dosyalar & klasörler

“Shared with me” sayfası

Klasör desteği

Landing page

🧭 Bu repo şu an fonksiyonel bir “Drive” temeli sunar; TODO kısmındaki maddeler ile genişletilebilir.

🧱 Teknoloji Yığını

Next.js — Modern full-stack React framework

TypeScript — Güçlü tip güvenliği

Convex — Reaktif ve serverless veri katmanı

Tailwind CSS — Hızlı, utility-tabanlı stil

(Opsiyonel) shadcn/ui — Modern UI component kütüphanesi

📁 Proje Yapısı
file-manager/
├─ convex/           # Convex backend (schema, queries, mutations)
├─ public/           # Statik dosyalar (ikonlar, görseller)
├─ src/
│  ├─ app/          # Next.js App Router sayfaları
│  ├─ components/   # UI bileşenleri
│  ├─ lib/          # Yardımcı fonksiyonlar / clientlar
│  └─ styles/       # Global stil dosyaları
├─ .github/          # Github Actions veya template’ler
├─ components.json   # shadcn/ui config
├─ tailwind.config.ts
├─ next.config.mjs
├─ package.json
└─ README.md

🚀 Kurulum & Çalıştırma
1. Depoyu klonla
git clone https://github.com/TMBilalTM/file-manager.git
cd file-manager

2. Bağımlılıkları yükle
npm install
# veya
yarn
# veya
pnpm install
# veya
bun install

3. Convex yapılandırması

Convex kullanımı için bir deployment oluştur:

npm install -g convex
npx convex dev


Gerekirse .env.local içine:

NEXT_PUBLIC_CONVEX_URL=...
CONVEX_DEPLOYMENT=...


Daha fazla bilgi: https://docs.convex.dev

4. Geliştirme sunucusu
npm run dev
# veya yarn dev / pnpm dev / bun dev


Tarayıcıda aç →
👉 http://localhost:3000

🧪 Script’ler
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

🗺️ Yol Haritası

 Shared with me sayfası

 Folder system (klasörler, alt klasörler)

 Landing Page

 Paylaşım izinleri

 Quota / depolama takibi

 Drag & drop yükleme

 Dosya önizlemeleri (image/pdf)

🤝 Katkıda Bulunma

Bu repoyu forkla

Yeni bir branch aç:

git checkout -b feature/yeni-ozellik


Değişikliklerini commit et:

git commit -m "feat: yeni özellik eklendi"


Branch’i push’la

GitHub üzerinden Pull Request aç

🛡️ Güvenlik

Güvenlik politikaları için SECURITY.md dosyasına bakabilirsin.
Açık bulursan, public issue yerine güvenli bir kanaldan iletmen tavsiye edilir.

📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.
Detaylı bilgi için → LICENSE

🙋‍♂️ İletişim

Proje sahibi: @TMBilalTM
GitHub: https://github.com/TMBilalTM
