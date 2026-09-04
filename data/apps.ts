export interface Gem {
  title: string;
  tag: "Hız" | "Kısayol" | "Gizlilik" | "Püf Noktası";
  action: string;
  detail: string;
}

export interface AppItem {
  id: string;
  name: string;
  category: string;
  version: string;
  badgeText: string;
  headline: string;
  highlightPoints: string[];
  missed_gems: Gem[];
}

export const APPS_DATA: AppItem[] = [
  {
    id: "chrome",
    name: "Google Chrome",
    category: "Tarayıcı",
    version: "v128",
    badgeText: "Büyük Güncelleme",
    headline: "Sekmelerinizi artık telefonunuzla senkronize edebilir ve sayfadan ayrılmadan Google Lens ile görsel arayabilirsiniz.",
    highlightPoints: [
      "Sekme grupları otomatik olarak mobildeki Chrome'unuza da gelir.",
      "Adres çubuğundaki Lens butonuyla ekrandaki her şey tek tıkla taranır."
    ],
    missed_gems: [
      {
        title: "Kapatılan son sekmeyi anında geri getirme",
        tag: "Kısayol",
        action: "Ctrl + Shift + T (Mac: Cmd + Shift + T)",
        detail: "Yanlışlıkla kapattığınız sekme veya pencereyi tüm geçmişiyle birlikte anında açar."
      },
      {
        title: "Arka plandaki uyuyan sekmeleri dondurma",
        tag: "Hız",
        action: "Ayarlar > Performans > Bellek Tasarrufu",
        detail: "Kullanmadığınız sekmelerin RAM tüketmesini engelleyerek tarayıcıyı hafifletir."
      },
      {
        title: "Ses çıkaran sekmeyi tek tıkla susturma",
        tag: "Püf Noktası",
        action: "Sekmeye sağ tıkla > 'Siteyi Sustur'",
        detail: "Otomatik video başlatan sitelerdeki gürültüyü tek tıkla keser."
      },
      {
        title: "Adres çubuğunu hesap makinesi olarak kullanma",
        tag: "Hız",
        action: "URL kısmına doğrudan işlem yazın (ör: 450 * 1.2)",
        detail: "Enter'a basmadan sonucu anında adres çubuğunun altında gösterir."
      },
      {
        title: "Belirli sitelerde şifreleri tek tıkla paylaşma",
        tag: "Püf Noktası",
        action: "Şifre yöneticisi > İlgili site > Paylaş",
        detail: "Aile veya Google grubunuzdaki kişilere şifreyi güvenle iletir."
      },
      {
        title: "Sekmeleri gruplayıp tek renkte toplama",
        tag: "Püf Noktası",
        action: "Sekmeye sağ tıkla > 'Sekmeyi yeni gruba ekle'",
        detail: "İş, alışveriş veya araştırma sekmelerini katlayıp ekranı temiz tutar."
      },
      {
        title: "Tarayıcı kilitlendiğinde dahili Görev Yöneticisi",
        tag: "Gizlilik",
        action: "Shift + Esc",
        detail: "Chrome'u yavaşlatan spesifik sekmeyi veya eklentiyi tespit edip sonlandırır."
      },
      {
        title: "Bağlantıyı direkt vurgulanan metne yönlendirme",
        tag: "Püf Noktası",
        action: "Metni seç > Sağ tık > 'Vurgulanan kısma bağlantıyı kopyala'",
        detail: "Karşı taraf linke tıkladığında doğrudan o cümlenin üzerine kaydırır ve sarıya boyar."
      },
      {
        title: "Gizli sekmede uzantıları seçici çalıştırma",
        tag: "Gizlilik",
        action: "Uzantılar > Yönet > 'Gizli modda izin ver'",
        detail: "Yalnızca şifre yöneticinizi gizli pencerede aktif bırakmanızı sağlar."
      },
      {
        title: "Sekmeler arasında klavyeyle uçuş",
        tag: "Kısayol",
        action: "Ctrl + 1 ile 8 arası (Mac: Cmd + 1-8)",
        detail: "Açık olan ilk 8 sekmeye mouse kullanmadan doğrudan atlar."
      }
    ]
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Mesajlaşma",
    version: "2026.3",
    badgeText: "Yeni Görünüm",
    headline: "Sohbetler artık özel listelere ayrılıyor; tüm medya gönderimleri için tek tıkla HD varsayılan yapılabiliyor.",
    highlightPoints: [
      "İş, Aile, Müşteriler gibi özel sekmeler oluşturup filtreleyin.",
      "Gönderilen her fotoğraf otomatik HD çözünürlükte gider."
    ],
    missed_gems: [
      {
        title: "Varsayılan HD yükleme ayarı",
        tag: "Püf Noktası",
        action: "Ayarlar > Depolama ve Veriler > Medya Yükleme Kalitesi > HD",
        detail: "Her fotoğrafta tek tek HD butonuna basma zorunluluğunu kaldırır."
      },
      {
        title: "Gönderilen mesajı sonradan düzeltme",
        tag: "Hız",
        action: "Mesaja basılı tutun > Düzenle (İlk 15 dakika)",
        detail: "Yazım hataları için mesajı silip baştan yazma derdini bitirir."
      },
      {
        title: "Kendinize mesaj atarak not tutma",
        tag: "Hız",
        action: "Yeni Sohbet > En üstte kendi adınızı seçin",
        detail: "Telefondan bilgisayara hızlı link ve dosya aktarımı için en pratik yöntem."
      },
      {
        title: "Önemli mesajları yıldızlayıp kaydetme",
        tag: "Püf Noktası",
        action: "Mesaja basılı tut > Yıldızla (Yıldızlı Mesajlar sekmesinden bakın)",
        detail: "Adres, IBAN veya şifreleri sohbet geçmişinde kaybetmezsiniz."
      },
      {
        title: "Okundu bilgisini (Mavi Tik) seçici kapatma",
        tag: "Gizlilik",
        action: "Ayarlar > Gizlilik > Okundu Bilgisi",
        detail: "Mesajı ne zaman okuduğunuzu karşı taraftan gizler."
      },
      {
        title: "Fotoğrafları tek seferlik görüntüleme modunda açma",
        tag: "Gizlilik",
        action: "Göndermeden önce alt kısımdaki '1' butonuna tıklayın",
        detail: "Görsel karşı tarafın galerisine kaydedilmez ve bir kez açılınca kaybolur."
      },
      {
        title: "Sohbeti arşivde sessize alarak gizleme",
        tag: "Püf Noktası",
        action: "Ayarlar > Sohbetler > 'Sohbetleri arşivde tut'",
        detail: "Gereksiz gruplardan yeni mesaj gelse bile ana ekranınıza düşmez."
      },
      {
        title: "Metinleri kalın ve italik yazma",
        tag: "Kısayol",
        action: "*kalın* veya _italik_ şeklinde yazın",
        detail: "Önemli tarihleri veya rakamları mesaj içinde öne çıkarır."
      },
      {
        title: "Grup içinde gizlice ayrılma",
        tag: "Gizlilik",
        action: "Grup Bilgisi > Gruptan Çık",
        detail: "Gruptan çıktığınızda tüm üyelere bildirim gitmez, yalnızca yöneticiler görür."
      },
      {
        title: "Sesli mesajları 1.5x ve 2x hızla dinleme",
        tag: "Hız",
        action: "Ses kaydı oynatılırken avatarın yanındaki hız butonuna basın",
        detail: "Uzun açıklamaları yarı sürede dinlemenizi sağlar."
      }
    ]
  },
  {
    id: "notion",
    name: "Notion",
    category: "Verimlilik",
    version: "v2.44",
    badgeText: "Üretkenlik",
    headline: "Doğrudan tablolarınıza veri toplayan resmi form desteği ve gelişmiş otomasyon motoru yayında.",
    highlightPoints: [
      "Üçüncü parti form araçlarına gerek kalmadan `/form` ile anket oluşturun.",
      "Veritabanı girişleri tetiklendiğinde Slack veya Webhook uyarısı atın."
    ],
    missed_gems: [
      {
        title: "Hızlı komut satırı ile her şeye erişim",
        tag: "Kısayol",
        action: "Ctrl + K veya Ctrl + P",
        detail: "Tüm Notion içinde sayfalar, başlıklar ve son aramalar arasında anında geçiş yapın."
      },
      {
        title: "Eşzamanlı içerik blokları (Synced Blocks)",
        tag: "Püf Noktası",
        action: "Bloğu seç > 'Turn into Synced Block'",
        detail: "Bir sayfada düzenlediğiniz bilginin ekli olduğu diğer 20 sayfada otomatik güncellenmesini sağlar."
      },
      {
        title: "Boş sayfada anında tablo veya şablon açma",
        tag: "Kısayol",
        action: "Boş satırda `/` tuşuna basıp aramaya başlayın",
        detail: "Mouse kullanmadan takvim, başlık, kod bloğu veya form ekler."
      },
      {
        title: "Kritik sayfaları favorilere sabitleme",
        tag: "Hız",
        action: "Sayfanın sağ üstündeki yıldız butonuna basın",
        detail: "Sol kenar çubuğunun en tepesinde sabit klasör olarak tutar."
      },
      {
        title: "Tüm çalışma alanını tek tıkla HTML/PDF olarak yedekleme",
        tag: "Gizlilik",
        action: "Settings > Export all workspace content",
        detail: "Verilerinizi her an yerel diskinize indirebilmenizi sağlar."
      },
      {
        title: "Tablo sütunlarında otomatik matematiksel hesaplama",
        tag: "Püf Noktası",
        action: "Tablonun altındaki 'Calculate' alanına tıklayın",
        detail: "Toplam harcama, ortalama veya boş olmayan hücre sayısını anında çıkarır."
      },
      {
        title: "Bağlantıyı direkt önizleme kartına çevirme",
        tag: "Hız",
        action: "URL'yi yapıştırın > 'Create Bookmark' seçin",
        detail: "Makaleleri ve siteleri şık bir kartvizit formatında sayfaya gömer."
      },
      {
        title: "Geriye dönük sayfa geçmişi kurtarma",
        tag: "Püf Noktası",
        action: "Sağ üst üç nokta > Page History",
        detail: "Yanlışlıkla silinen paragrafları veya tabloları dakikalar önceki haline çevirir."
      },
      {
        title: "Satırları iki yana bölerek sütun yapma",
        tag: "Püf Noktası",
        action: "Bloğu tutup diğer bloğun en sağına sürükleyin",
        detail: "Sayfayı dergi veya dashboard düzenine sokar."
      },
      {
        title: "Web Clipper ile internetteki yazıları kaydetme",
        tag: "Hız",
        action: "Chrome Notion Eklentisi > İlgili veritabanını seç",
        detail: "Okuduğunuz blog yazısını reklamsız olarak doğrudan Notion sayfanıza kopyalar."
      }
    ]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Yapay Zeka",
    version: "2026 Pro",
    badgeText: "Yeni Özellik",
    headline: "Proje çalışma alanları ile izole hafıza ve derin doküman analiz motoru devreye alındı.",
    highlightPoints: [
      "Her konu için özel talimatlar ve kaynak dosyalar yükleyip ayrı bir proje alanı açın.",
      "Büyük CSV ve Excel dosyalarını arka planda Python kodlarıyla hatasız hesaplatın."
    ],
    missed_gems: [
      {
        title: "Kalıcı Özel Talimatlar (Custom Instructions)",
        tag: "Hız",
        action: "Profil > Custom Instructions",
        detail: "Mesleğinizi ve sevdiğiniz cevap tarzını (ör: 'Kısa ve maddeli yanıt ver') sürekli hatırlar."
      },
      {
        title: "Kodları ve yazıları Canvas modunda düzenleme",
        tag: "Püf Noktası",
        action: "Yazı yazarken sağ tarafta açılan Canvas penceresini kullanın",
        detail: "Tüm metni baştan üretmeden spesifik bir paragrafı veya kod satırını revize ettirir."
      },
      {
        title: "Geçici sohbet başlatma (Hafızaya kaydetmeme)",
        tag: "Gizlilik",
        action: "Model seçicinin yanındaki 'Geçici Sohbet' anahtarını açın",
        detail: "Konuşma geçmişe kaydedilmez ve modelin genel eğitiminde kullanılmaz."
      },
      {
        title: "Grafik ve veri analitiğini tek tıkla çalıştırma",
        tag: "Hız",
        action: "Excel veya CSV dosyasını ataç ikonundan sürükleyip bırakın",
        detail: "Dosyayı analiz eder, temizler ve indirilebilir görsel grafikler üretir."
      },
      {
        title: "Cevabın ortasında tonu değiştirme",
        tag: "Püf Noktası",
        action: "'Bunu bir 10 yaşındaki çocuğa anlatır gibi basitleştir' deyin",
        detail: "Karmaşık teknik jargonları anında sade benzetmelere çevirir."
      },
      {
        title: "Yazılan prompt'u sonradan düzenleme",
        tag: "Kısayol",
        action: "Gönderdiğiniz mesajın yanındaki kalem ikonuna tıklayın",
        detail: "Sohbeti baştan başlatmadan parametreleri değiştirip yeni bir cevap yolu açar."
      },
      {
        title: "Uzun makaleleri 3 can alıcı maddeye indirgeme",
        tag: "Hız",
        action: "Metni yapıştırıp: 'Bunu 3 madde ve 1 eylem adımı olarak özetle' yazın",
        detail: "Gereksiz giriş-çıkış cümlelerini atıp doğrudan sonuca odaklar."
      },
      {
        title: "Görsel yükleyip frontend kodunu çıkarma",
        tag: "Püf Noktası",
        action: "Bir ekran görüntüsü yükleyip 'Bunu Tailwind ve React ile yaz' deyin",
        detail: "Arayüzün prototip kodunu saniyeler içinde ayağa kaldırır."
      },
      {
        title: "Sesli sohbet moduyla fikir fırtınası yapma",
        tag: "Hız",
        action: "Mobilde mikrofon/kulaklık ikonuna tıklayın",
        detail: "Yazmak yerine yürüyüş yaparken sesli olarak strateji tartışabilirsiniz."
      },
      {
        title: "Kendi özel GPT asistanınızı oluşturma",
        tag: "Püf Noktası",
        action: "Explore GPTs > Create a GPT",
        detail: "Sadece sizin PDF'lerinizi okuyan ve sizin kurallarınızla çalışan mini bir bot üretir."
      }
    ]
  }
];
