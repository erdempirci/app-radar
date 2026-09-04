export interface Feature {
  title: string;
  summary: string;
  how_to: string;
  gain: string;
}

export interface Gem {
  title: string;
  description: string;
  tip: string;
}

export interface AppItem {
  id: string;
  name: string;
  category: string;
  version: string;
  headline: string;
  features: Feature[];
  missed_gems: Gem[];
}

export const APPS_DATA: AppItem[] = [
  {
    id: "chrome",
    name: "Google Chrome",
    category: "Tarayıcı",
    version: "v128",
    headline: "Sekme gruplarını cihazlar arası senkronize etme ve gelişmiş AI araçları.",
    features: [
      {
        title: "Sekme Gruplarını Senkronize Etme",
        summary: "Masaüstünde açtığınız sekmeleri gruplayıp mobilden kaldığınız yerden devam edin.",
        how_to: "Sekme grubuna sağ tıklayın -> 'Grubu Kaydet'i seçin.",
        gain: "Cihazlar arası geçişte sekmelerin kaybolmasını önler."
      }
    ],
    missed_gems: [
      {
        title: "Dahili Bellek Tasarrufu Modu",
        description: "Kullanılmayan sekmeleri otomatik dondurarak RAM tüketimini %40 düşürür.",
        tip: "Ayarlar -> Performans -> Bellek Tasarrufu'nu açın."
      }
    ]
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "İletişim",
    version: "2026.3",
    headline: "Gelişmiş sohbet listeleri ve HD medya varsayılan ayarları.",
    features: [
      {
        title: "Özel Sohbet Listeleri",
        summary: "Sohbetlerinizi 'İş', 'Aile', 'Arkadaşlar' şeklinde özel filtrelere ayırın.",
        how_to: "Sohbetler sekmesinin en üstündeki '+' simgesine basın.",
        gain: "Önemli mesajların kalabalıkta kaybolmasını engeller."
      }
    ],
    missed_gems: [
      {
        title: "Varsayılan HD Medya Gönderimi",
        description: "Fotoğraf ve videoları her seferinde HD seçmeden direkt yüksek kalite gönderin.",
        tip: "Ayarlar -> Depolama ve Veriler -> Medya Yükleme Kalitesi -> HD Kalitesi."
      }
    ]
  },
  {
    id: "notion",
    name: "Notion",
    category: "Verimlilik",
    version: "v2.44",
    headline: "Doğrudan veritabanına bağlanan yerleşik form desteği.",
    features: [
      {
        title: "Yerleşik Notion Formları",
        summary: "Dışarıdan veri toplamak için form oluşturup anında tabloya çekin.",
        how_to: "Boş sayfada '/form' yazın ve alanları ekleyin.",
        gain: "3. parti form araçlarına gerek bırakmaz."
      }
    ],
    missed_gems: [
      {
        title: "Eşzamanlı Bloklar (Synced Blocks)",
        description: "Bir sayfada düzenlediğiniz bilginin ekli olduğu her yerde anında güncellenmesi.",
        tip: "Bloğu seçin -> 'Turn into Synced Block' deyin."
      }
    ]
  },
  {
    id: "spotify",
    name: "Spotify",
    category: "Müzik",
    version: "v8.9",
    headline: "Akıllı şarkı sıralama ve kuyruk yönetimi.",
    features: [
      {
        title: "Akıllı Sıralama (Smart Shuffle)",
        summary: "Çalma listenize dinamik olarak stilinize uygun şarkılar önerir.",
        how_to: "Karışık çal simgesine ikinci kez basarak parıltı ikonunu açın.",
        gain: "Yeni müzikler keşfetmek için liste bitirmek gerekmez."
      }
    ],
    missed_gems: [
      {
        title: "Şarkılar Arası Yumuşak Geçiş (Crossfade)",
        description: "Şarkılar biterken sessizlik olmadan birbirine bağlanmasını sağlar.",
        tip: "Ayarlar -> Çalma -> Şarkılar arası geçiş süresini 5 saniye yapın."
      }
    ]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Yapay Zeka",
    version: "Web",
    headline: "Projeler çalışma alanı ve özel talimatlar.",
    features: [
      {
        title: "Özel Projeler Sekmesi",
        summary: "Her konu için ayrı dosyalar ve izole sohbet geçmişi belirleyin.",
        how_to: "Sol menüden 'Projects' -> 'New Project' seçin.",
        gain: "Her sohbette tekrar bağlam yükleme zahmetini bitirir."
      }
    ],
    missed_gems: [
      {
        title: "Özel Talimatlar (Custom Instructions)",
        description: "Yapay zekanın mesleğinizi ve yanıt tarzınızı her zaman hatırlaması.",
        tip: "Profil -> Custom Instructions üzerinden ekleyin."
      }
    ]
  }
];
