// =====================================================================
// FIREBASE-INSTÄLLNINGAR (för det frivilliga kontot i Danska ord)
// =====================================================================
// Klistra in värdena från Firebase här (se LASMIG.md, steg 5).
// Så länge raderna är tomma ("") fungerar appen ändå: framstegen sparas
// i webbläsaren, och knappen för att logga in visas inte.
//
// Är det farligt att apiKey ligger i en publik fil? Nej. Den är INGEN
// hemlighet, den säger bara vilket Firebase-projekt sidan hör till (alla
// sidor som använder Firebase har den synlig). Det som skyddar datan är
// reglerna i Firestore, som gör att var och en bara når sina egna framsteg.
// Lägg ALDRIG in något annat här, t.ex. ett lösenord eller en "service account".
window.FIREBASE = {
  apiKey: "AIzaSyDwWsmtVS6Ciebg680QZ4nIix9Gp9BPunE",       // t.ex. "AIzaSy..."
  projectId: "danska-ord",    // t.ex. "danska-ord-12345"
};
