# Danska ord (publik version)

Den här mappen är danska-appen som ligger på https://iskalldrake.github.io/danska/.

* **Utan konto:** framstegen sparas automatiskt i webbläsarens `localStorage`. Inget att göra.
* **Med konto (frivilligt):** menyn → *Inställningar: spara i molnet* → *Logga in eller skapa konto*.
  Framstegen sparas då också i Firebase, följer med mellan enheter och finns kvar om man rensar webbläsaren.

| Fil | Vad den gör |
|---|---|
| `index.html` | Appen. Avsnitt 8 i koden är kontot och molnet. |
| `ord.js`, `ord-teman.js` | Orden och temana (samma som i den privata versionen). |
| `firebase-installning.js` | `apiKey` och `projectId` från Firebase. Tomma = inloggningen syns inte. |
| `firestore-regler.txt` | Reglerna som klistras in i Firebase, så att var och en bara når sina egna framsteg. |

Ingen gist-kod och inga hemligheter här. `apiKey` är ingen hemlighet (den säger bara vilket
projekt det är); det är reglerna som skyddar datan.

## Koppla på Firebase (en gång)

1. Gå till https://console.firebase.google.com och logga in med ditt Google-konto.
2. **Create a new Firebase project**, döp det till t.ex. `danska-ord`. Stäng av Google Analytics (behövs inte). Klicka Create project.
3. Vänstermenyn **Build → Authentication → Get started**. Fliken **Sign-in method → Email/Password → Enable** (bara den översta knappen) → Save.
4. **Build → Firestore Database → Create database**. Välj en plats i Europa (t.ex. `eur3`) och **Start in production mode** → Create.
   Gå till fliken **Rules**, ta bort allt, klistra in hela `firestore-regler.txt` → **Publish**.
5. Kugghjulet uppe till vänster → **Project settings → General**. Längst ner under *Your apps*: klicka webb-ikonen `</>`,
   döp appen till `Danska ord`, kryssa INTE i Firebase Hosting → Register app.
   I rutan med `firebaseConfig` kopierar du `apiKey` och `projectId` in i `firebase-installning.js`.
6. Spara, committa och pusha. Testa på https://iskalldrake.github.io/danska/ (vänta en minut efter push).

Valfritt:
* **Svenska mejl:** Authentication → Templates → kugghjulet vid språket → Swedish. Då blir mejlet för *Glömt lösenordet* på svenska.
* **Lås nyckeln till din sida:** https://console.cloud.google.com → välj projektet → APIs & Services → Credentials →
  *Browser key (auto created by Firebase)* → Application restrictions: **Websites** → lägg till `https://iskalldrake.github.io/*` → Save.
  Då fungerar inloggningen bara från din sida (inte från en kopia av filen på datorn).

## Gratis?

Firebase gratisplan (Spark) kräver inget kort. Den räcker till 50 000 läsningar och 20 000 skrivningar per dag.
Appen läser och skriver en gång när sidan öppnas och en gång per paus när man övar (10 sekunder efter senaste svaret).

## Ser hur det går

* Firebase → Authentication → Users: alla konton (bara mejl och datum).
* Firebase → Firestore Database → Data → `framsteg`: ett dokument per konto, döpt efter användar-id.
