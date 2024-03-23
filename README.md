# web sitesini ziyaret etmek isterseniz linki 
- https://ubiquitous-paprenjak-32b569.netlify.app


# clth_e-commerce

Bu proje, React kullanılarak oluşturulmuş bir e-ticaret web sitesidir. Kullanıcılar, giyim ürünlerini görüntüleyebilir, sepete ekleyebilir ve satın alabilir. Firebase Authentication ve Firestore kullanılarak kullanıcı hesapları yönetilir ve veritabanı işlemleri gerçekleştirilir.

## Kullanılan Teknolojiler

- React (useState, useEffect, useContext)
- Firebase Firestore
- Firebase Authentication

## Kurulum

1. Proje dosyalarını klonlayın:
2. Proje dizinine gidin:
3. Gerekli paketleri yükleyin:
4. Firebase yapılandırması için:
- Firebase Console'da bir proje oluşturun ve Firebase Authentication ve Firestore'u etkinleştirin.
- Firebase projenizin web konfigürasyon bilgilerini `.env` dosyasına ekleyin:
  ```
  REACT_APP_FIREBASE_API_KEY="your-api-key"
  REACT_APP_FIREBASE_AUTH_DOMAIN="your-auth-domain"
  REACT_APP_FIREBASE_PROJECT_ID="your-project-id"
  REACT_APP_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
  REACT_APP_FIREBASE_APP_ID="your-app-id"
  ```
5. Projeyi başlatın:
6. Web tarayıcınızda [localhost:3000](http://localhost:3000) adresine gidin.

## Katkıda Bulunma

Eğer projeye katkı sağlamak isterseniz:
- Fork yapın.
- Yeni bir branch oluşturun (`git checkout -b feature/fooBar`).
- Değişikliklerinizi kaydedin (`git commit -am 'Add some fooBar'`).
- Branch'inizi push edin (`git push origin feature/fooBar`).
- Pull request oluşturun.
