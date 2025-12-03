# 🚔 Szpont OS

> System bekowej kontroli społeczeństwa - Generator dokumentów do celów rozrywkowych

## 📋 Opis

**Szpont OS** to interaktywna aplikacja webowa do generowania humorystycznych dokumentów kontrolnych. System umożliwia tworzenie profesjonalnie wyglądających Kart Stałego Konfidenta z możliwością personalizacji i eksportu jako obraz.

## ✨ Funkcjonalności

### 🎫 Generator Karty Konfidenta
- **Dodawanie własnego zdjęcia** - kliknij w pole zdjęcia i wybierz obraz z dysku
- **Personalizacja danych:**
  - Imię i nazwisko
  - Numer karty
  - Automatyczna pieczęć Komendy Policji w Smajlandii
- **Export do obrazu** - pobierz gotową kartę jako plik PNG w wysokiej jakości
- **Responsywny design** - działa na komputerach, tabletach i telefonach

### 📄 Mandacik (w przygotowaniu)
- Generator mandatów za Nadmierną Piękność

## 🎨 Technologie

- **HTML5** - struktura strony
- **CSS3** - nowoczesny design z gradientami i animacjami
  - CSS Variables (Custom Properties)
  - Flexbox & Grid
  - Responsywność bez media queries (clamp, min, max)
- **JavaScript (ES6+)** - interaktywność
- **html2canvas** - konwersja HTML do obrazu
- **Google Fonts** - czcionki Segoe UI

## 🚀 Instalacja i uruchomienie

### Wymagania
- Przeglądarka internetowa (Chrome, Firefox, Edge, Safari)
- Brak wymagań serwerowych - działa lokalnie

### Uruchomienie

1. **Pobierz projekt:**
```bash
git clone https://github.com/twoj-username/szpont-os.git
cd szpont-os
```

2. **Otwórz w przeglądarce:**
   - Kliknij dwukrotnie na plik `index.html`
   - LUB przeciągnij plik do okna przeglądarki
   - LUB użyj lokalnego serwera (opcjonalnie)

## 📁 Struktura projektu

```
projekcik/
├── index.html              # Główny plik strony
├── README.md              # Dokumentacja
└── src/
    ├── css/
    │   ├── style.css      # Style główne (navbar, sekcje)
    │   └── cards.css      # Style kart i modali
    ├── img/
    │   ├── favicon-32x32.png
    │   ├── logo2-png.png
    │   └── smajlandia polcie.png
    └── js/
        └── main.js        # Logika aplikacji
```

## 🎯 Jak używać

### Generowanie Karty Konfidenta

1. **Otwórz generator:**
   - Kliknij przycisk "Generuj Kartę" w sekcji Kreator

2. **Dodaj zdjęcie:**
   - Kliknij na pole "Kliknij aby dodać zdjęcie"
   - Wybierz obraz z dysku (JPG, PNG, itp.)

3. **Wypełnij dane:**
   - Wpisz imię i nazwisko
   - Zmień numer karty (domyślnie #0001)

4. **Pobierz kartę:**
   - Kliknij "Pobierz jako obrazek"
   - Karta zostanie zapisana jako PNG na dysku

## 🎨 Motywy kolorystyczne

System używa ciemnego motywu z niebieskimi akcentami:

```css
--bgdefault: #1a1a1a        /* Tło główne */
--bgsection: #222222        /* Tło sekcji */
--textdefault: #FFFFFF      /* Tekst główny */
--textpolice: #3A7DFF       /* Niebieski akcent */
--cardBg: #2a2a2a          /* Tło kart */
```

## 🔧 Konfiguracja

### Zmiana pieczęci
Podmień plik `src/img/smajlandia polcie.png` na własny obraz pieczęci.

### Personalizacja kolorów
Edytuj zmienne CSS w `src/css/style.css`:
```css
* {
    --textpolice: #3A7DFF;  /* Zmień na swój kolor */
    --bgdefault: #1a1a1a;   /* Zmień tło */
}
```

## ⚠️ Uwaga prawna

**Wszystkie dokumenty generowane przez Szpont OS są wyłącznie do celów rozrywkowych i bekowania.**

System nie ponosi odpowiedzialności za niewłaściwe użycie wygenerowanych materiałów. Dokumenty nie mają żadnej wartości prawnej i nie mogą być wykorzystywane jako oficjalne dokumenty.

## 🤝 Współpraca

Projekt jest otwarty na sugestie i ulepszenia! 

## 📜 Licencja

© 2024 Szpont OS. Wszelkie prawa zastrzeżone.

Powered by [m-code](https://github.com/Miameekk)

## 🐛 Znane problemy i rozwiązania

### Problem: Zdjęcie nie ładuje się
- Upewnij się, że plik to obraz (JPG, PNG, GIF)
- Sprawdź rozmiar pliku (zalecane < 5MB)

### Problem: Export nie działa
- Sprawdź konsolę przeglądarki (F12)
- Upewnij się, że html2canvas załadował się z CDN
- Wyczyść cache przeglądarki (Ctrl+F5)

---

**Baw się dobrze i pamiętaj - to tylko bekowanie! 😄**
