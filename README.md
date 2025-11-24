# STAAU - İçerikle Geleceği Şekillendiriyoruz

STAAU için modern, kullanıcı dostu ve responsive web sitesi. Bu site, şirketin tüm üretim alanlarını (STAAU Çocuk Yayınevi, YouTube kanalları, mobil uygulamalar, dijital projeler) tanıtmak, markanın vizyonunu aktarmak ve ziyaretçileri doğru platformlara yönlendirmek amacıyla tasarlanmıştır.

## 🎯 Özellikler

- **Modern Tasarım**: STAAU marka renkleriyle çekici ve profesyonel arayüz
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **One-Page Layout**: Tek sayfa üzerinde tüm içerik
- **Gradient Effects**: Renk geçişleri ve modern efektler
- **Hero Background**: Gerçek görselle desteklenmiş ana bölüm
- **Smooth Animations**: Yumuşak geçişler ve scroll animasyonları
- **Interactive Elements**: Hover efektleri ve interaktif bileşenler
- **Dual Language Support**: TR/EN dil desteği
- **Mobile Navigation**: Mobil cihazlar için hamburger menü
- **SEO Friendly**: Arama motoru optimizasyonu

## 📁 Proje Yapısı

```
staau.tr/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum

1. Projeyi klonlayın veya indirin
2. `index.html` dosyasını bir web tarayıcısında açın
3. Veya bir local server kullanarak çalıştırın

### Local Server ile Çalıştırma

```bash
# Python 3 ile
python -m http.server 8000

# Node.js ile (http-server paketi gerekli)
npx http-server

# PHP ile
php -S localhost:8000
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary Gradient**: #6366f1 → #8b5cf6 → #d946ef → #ec4899 → #f43f5e
- **Publishing Gradient**: #10b981 → #06b6d4 → #3b82f6
- **Digital Gradient**: #8b5cf6 → #d946ef → #ec4899
- **Text Primary**: #0f172a (Slate-900)
- **Text Secondary**: #64748b (Slate-500)

### Tipografi
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animasyonlar
- Hero parallax effect
- Fade-in animations on scroll
- Icon hover effects with rotation
- Smooth scrolling between sections
- Gradient transitions
- Progress bar indicator
- Loading screen with spinner

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Özelleştirme

### Renkleri Değiştirme
CSS dosyasındaki `:root` bölümündeki değişkenleri düzenleyin:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #d946ef 50%, #ec4899 75%, #f43f5e 100%);
    --publishing-gradient: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%);
    --digital-gradient: linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #ec4899 100%);
    /* ... diğer renkler */
}
```

### İçerik Güncelleme
- `index.html` dosyasında metinleri düzenleyin
- Emoji'leri değiştirin
- Sosyal medya linklerini güncelleyin

### Animasyon Hızını Ayarlama
CSS dosyasında animasyon sürelerini düzenleyin:

```css
.floating-element {
    animation: float 6s ease-in-out infinite; /* 6s süresini değiştirin */
}
```

## 📧 İletişim

İletişim sayfası şu bilgileri içerir:
- **E-posta**: info@staau.com.tr
- **Sosyal Medya**: Instagram ve YouTube linkleri

Gerçek bir iletişim formu backend entegrasyonu için:
1. Form HTML'ini ekleyin
2. Backend endpoint'inizi yapılandırın
3. CSRF token ekleyin (gerekirse)
4. Email servisi entegrasyonu yapın

## 🌐 Sosyal Medya

Sosyal medya linkleri:
- **Instagram**: [@staaucocuk](https://www.instagram.com/staaucocuk/)
- **YouTube**: [@staaucocuk](https://www.youtube.com/@staaucocuk)

Sosyal medya linklerini güncellemek için `index.html` dosyasındaki ilgili bölümleri düzenleyin:

```html
<a href="https://www.instagram.com/staaucocuk/" target="_blank" rel="noopener noreferrer" class="social-link">
    <span class="fab fa-instagram"></span> Instagram
</a>
```

## 📊 Performans Optimizasyonu

- **Debounced scroll events**: Performans için scroll olayları optimize edildi
- **Lazy loading**: Görsel yüklemeleri optimize edildi
- **Minified assets**: Üretim için CSS ve JS dosyaları minify edilebilir
- **Image optimization**: Görseller optimize edilmeli

## 🔒 Güvenlik

- **XSS Protection**: Form input'ları sanitize edildi
- **CSRF Protection**: Backend entegrasyonu için CSRF token eklenebilir
- **Content Security Policy**: CSP header'ları eklenebilir

## 📈 SEO Optimizasyonu

- **Meta tags**: Title, description, keywords
- **Semantic HTML**: Anlamlı HTML yapısı
- **Alt text**: Görseller için alt metinler
- **Structured data**: Schema.org markup eklenebilir

## 🚀 Deployment

### GitHub Pages
1. Repository'yi GitHub'a yükleyin
2. Settings > Pages bölümünden GitHub Pages'i aktifleştirin
3. Source olarak main branch'i seçin

### Netlify
1. Netlify hesabı oluşturun
2. "New site from Git" seçin
3. Repository'nizi bağlayın
4. Build settings'i yapılandırın

### Vercel
1. Vercel hesabı oluşturun
2. "Import Project" seçin
3. Repository'nizi bağlayın
4. Deploy edin

## 🐛 Hata Ayıklama

### Yaygın Sorunlar

1. **Font yüklenmiyor**: İnternet bağlantısını kontrol edin
2. **Animasyonlar çalışmıyor**: JavaScript'in etkin olduğundan emin olun
3. **Responsive sorunları**: Viewport meta tag'ini kontrol edin

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 İletişim

- **E-posta**: info@staau.com.tr
- **Website**: [staau.com.tr](https://staau.com.tr)
- **Instagram**: [@staaucocuk](https://www.instagram.com/staaucocuk/)
- **YouTube**: [@staaucocuk](https://www.youtube.com/@staaucocuk)

## 🎨 Tasarım Notları

- Hero bölümünde `children-playing-grass.jpg` görseli kullanılmaktadır
- Gradient overlay ile marka renklerine uygun görünüm sağlanmıştır
- Mobil cihazlarda parallax etkisi performans için kapatılmıştır
- Dil değişimi localStorage ile kaydedilmektedir

---

**STAAU** - İçerikle Geleceği Şekillendiriyoruz 🎨📚✨ 