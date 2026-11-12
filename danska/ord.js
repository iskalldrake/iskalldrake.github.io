// =====================================================================
// ord.js – DIN ORDLISTA
// =====================================================================
// Här lägger du till, tar bort och ändrar ord. Resten av programmet
// (danska_ord.html) läser in den här filen automatiskt när sidan öppnas.
//
// Så här ser ett ord ut:
//   {da:"hus", sv:"hus"}
//     da   = danska ordet        (måste vara skrivet precis rätt)
//     sv   = svenska översättningen
//     tips = valfritt tips som visas efter att du svarat, t.ex.
//   {da:"rolig", sv:"lugn", tips:"Falsk vän!"}
//
// REGLER (annars slutar allt fungera):
//   1. Ett komma efter varje ord – UTOM det sista ordet i listan.
//   2. Använd raka citattecken " ", inte snirkliga.
//   3. Ändra aldrig ett danskt ord som du redan övat på om du vill behålla
//      dina framsteg: lådorna hör ihop med just det danska ordet.
//
// En rad per ord gör det lätt att hitta och ändra. Lägg nya ord sist,
// före raden med ];
//
// Orden låses upp 10 åt gången i den ordning de står här, så de
// enklaste och viktigaste orden bör ligga först. Nya ord läggs SIST,
// så att ordningen på de ord du redan låst upp inte ändras.
// =====================================================================
const ORD = [
  {da:"tak", sv:"tack"},
  {da:"undskyld", sv:"förlåt"},
  {da:"godmorgen", sv:"god morgon"},
  {da:"farvel", sv:"hej då"},
  {da:"velkommen", sv:"välkommen"},
  {da:"hus", sv:"hus"},
  {da:"bil", sv:"bil"},
  {da:"bog", sv:"bok"},
  {da:"vand", sv:"vatten"},
  {da:"brød", sv:"bröd"},
  {da:"mælk", sv:"mjölk"},
  {da:"kaffe", sv:"kaffe"},
  {da:"smør", sv:"smör"},
  {da:"ost", sv:"ost"},
  {da:"æble", sv:"äpple"},
  {da:"fisk", sv:"fisk"},
  {da:"kød", sv:"kött"},
  {da:"frokost", sv:"lunch"},
  {da:"aftensmad", sv:"middag"},
  {da:"dreng", sv:"pojke"},
  {da:"pige", sv:"flicka"},
  {da:"mand", sv:"man"},
  {da:"kvinde", sv:"kvinna"},
  {da:"barn", sv:"barn"},
  {da:"ven", sv:"vän"},
  {da:"familie", sv:"familj"},
  {da:"mor", sv:"mamma"},
  {da:"far", sv:"pappa"},
  {da:"bror", sv:"bror"},
  {da:"søster", sv:"syster"},
  {da:"hund", sv:"hund"},
  {da:"kat", sv:"katt"},
  {da:"dag", sv:"dag"},
  {da:"nat", sv:"natt"},
  {da:"uge", sv:"vecka"},
  {da:"måned", sv:"månad"},
  {da:"år", sv:"år"},
  {da:"i dag", sv:"idag"},
  {da:"i morgen", sv:"imorgon"},
  {da:"arbejde", sv:"arbete"},
  {da:"penge", sv:"pengar"},
  {da:"by", sv:"stad"},
  {da:"gade", sv:"gata"},
  {da:"skole", sv:"skola"},
  {da:"læge", sv:"läkare"},
  {da:"stor", sv:"stor"},
  {da:"lille", sv:"liten"},
  {da:"rolig", sv:"lugn", tips:"Falsk vän: 'rolig' betyder lugn på danska, inte rolig!"},
  {da:"varm", sv:"varm"},
  {da:"kold", sv:"kall"},
  {da:"jeg", sv:"jag"},
  {da:"at gøre", sv:"göra"},
  {da:"at sige", sv:"säga"},
  // --- Ord 54–100 (tillagda 2026-10-18) ---
  {da:"hej", sv:"hej"},
  {da:"ja", sv:"ja"},
  {da:"nej", sv:"nej"},
  {da:"ikke", sv:"inte"},
  {da:"og", sv:"och"},
  {da:"også", sv:"också"},
  {da:"du", sv:"du"},
  {da:"han", sv:"han"},
  {da:"hun", sv:"hon"},
  {da:"vi", sv:"vi"},
  {da:"at være", sv:"vara"},
  {da:"at have", sv:"ha"},
  {da:"at gå", sv:"gå"},
  {da:"at spise", sv:"äta"},
  {da:"at drikke", sv:"dricka"},
  {da:"at sove", sv:"sova"},
  {da:"at tale", sv:"tala"},
  {da:"at komme", sv:"komma"},
  {da:"at købe", sv:"köpa"},
  {da:"at hedde", sv:"heta", tips:"Jeg hedder Hannes = Jag heter Hannes."},
  {da:"hvad", sv:"vad"},
  {da:"hvem", sv:"vem"},
  {da:"hvor", sv:"var", tips:"hvor = var (plats). Hvor bor du? = Var bor du?"},
  {da:"hvorfor", sv:"varför"},
  {da:"her", sv:"här"},
  {da:"der", sv:"där"},
  {da:"nu", sv:"nu"},
  {da:"i går", sv:"igår"},
  {da:"aften", sv:"kväll"},
  {da:"godnat", sv:"god natt"},
  {da:"god", sv:"bra", tips:"god = bra eller god. Det er godt = Det är bra."},
  {da:"dårlig", sv:"dålig"},
  {da:"ny", sv:"ny"},
  {da:"gammel", sv:"gammal"},
  {da:"dyr", sv:"dyr", tips:"dyr betyder både dyr (kostar mycket) och djur."},
  {da:"billig", sv:"billig"},
  {da:"sjov", sv:"rolig", tips:"Falsk vän: 'sjov' betyder rolig/kul. Danskt 'rolig' betyder lugn!"},
  {da:"meget", sv:"mycket"},
  {da:"lidt", sv:"lite"},
  {da:"to", sv:"två"},
  {da:"tre", sv:"tre"},
  {da:"fire", sv:"fyra"},
  {da:"fem", sv:"fem"},
  {da:"tog", sv:"tåg"},
  {da:"butik", sv:"affär"},
  {da:"seng", sv:"säng"},
  {da:"vindue", sv:"fönster"}
];
