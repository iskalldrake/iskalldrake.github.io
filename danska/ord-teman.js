// =====================================================================
// ord-teman.js – TEMAN (läses in av danska_ord.html)
// =====================================================================
// Teman är små ordpaket som är ÖPPNA DIREKT. De låses inte upp 10 åt
// gången som orden i ord.js, utan du väljer själv ett tema och övar på det.
//
// Varje tema har:
//   namn = namnet på knappen
//   ikon = en emoji som visas på knappen
//   ord  = orden, i samma form som i ord.js: {da:"...", sv:"...", tips:"..."}
//
// Lådorna hör ihop med det danska ordet, precis som i ord.js. Står ett ord
// både här och i ord.js (t.ex. "to" = två) delar de alltså på samma låda.
// Det är meningen: kan du ordet i ett tema kan du det överallt.
//
// Samma regler som i ord.js: komma efter varje ord utom det sista,
// och raka citattecken " ".
//
// Vill du lägga till ett eget tema? Kopiera ett helt block { namn: ... }
// och sätt ett kommatecken mellan blocken.
// =====================================================================
const TEMAN = [
  {
    namn: "Siffror", ikon: "🔢",
    ord: [
      {da:"nul", sv:"noll"},
      {da:"en", sv:"ett", tips:"en eller et beroende på ordet, precis som en/ett på svenska."},
      {da:"to", sv:"två"},
      {da:"tre", sv:"tre"},
      {da:"fire", sv:"fyra"},
      {da:"fem", sv:"fem"},
      {da:"seks", sv:"sex"},
      {da:"syv", sv:"sju"},
      {da:"otte", sv:"åtta"},
      {da:"ni", sv:"nio"},
      {da:"ti", sv:"tio"},
      {da:"elleve", sv:"elva"},
      {da:"tolv", sv:"tolv"},
      {da:"tyve", sv:"tjugo"},
      {da:"tredive", sv:"trettio"},
      {da:"fyrre", sv:"fyrtio"},
      {da:"halvtreds", sv:"femtio", tips:"Danska tiotal från 50 räknas i 'tjugotal'. halvtreds = 2,5 × 20 = 50."},
      {da:"tres", sv:"sextio", tips:"tres = 3 × 20 = 60."},
      {da:"halvfjerds", sv:"sjuttio", tips:"halvfjerds = 3,5 × 20 = 70."},
      {da:"firs", sv:"åttio", tips:"firs = 4 × 20 = 80."},
      {da:"halvfems", sv:"nittio", tips:"halvfems = 4,5 × 20 = 90."},
      {da:"hundrede", sv:"hundra"}
    ]
  },
  {
    namn: "Färger", ikon: "🎨",
    ord: [
      {da:"rød", sv:"röd"},
      {da:"blå", sv:"blå"},
      {da:"grøn", sv:"grön"},
      {da:"gul", sv:"gul"},
      {da:"sort", sv:"svart", tips:"Falsk vän: sort betyder svart!"},
      {da:"hvid", sv:"vit"},
      {da:"brun", sv:"brun"},
      {da:"grå", sv:"grå"},
      {da:"lyserød", sv:"rosa", tips:"lyserød = ljusröd, alltså rosa."},
      {da:"lilla", sv:"lila"},
      {da:"orange", sv:"orange"}
    ]
  },
  {
    namn: "Veckodagar", ikon: "📅",
    ord: [
      {da:"mandag", sv:"måndag"},
      {da:"tirsdag", sv:"tisdag"},
      {da:"onsdag", sv:"onsdag"},
      {da:"torsdag", sv:"torsdag"},
      {da:"fredag", sv:"fredag"},
      {da:"lørdag", sv:"lördag"},
      {da:"søndag", sv:"söndag"},
      {da:"weekend", sv:"helg"},
      {da:"uge", sv:"vecka"},
      {da:"i dag", sv:"idag"},
      {da:"i morgen", sv:"imorgon"},
      {da:"i går", sv:"igår"}
    ]
  },
  {
    namn: "Årstider och tid", ikon: "🍂",
    ord: [
      {da:"forår", sv:"vår", tips:"forår = 'föråret', alltså våren."},
      {da:"sommer", sv:"sommar"},
      {da:"efterår", sv:"höst", tips:"efterår = 'efteråret', alltså hösten."},
      {da:"vinter", sv:"vinter"},
      {da:"morgen", sv:"morgon"},
      {da:"formiddag", sv:"förmiddag"},
      {da:"eftermiddag", sv:"eftermiddag"},
      {da:"aften", sv:"kväll"},
      {da:"time", sv:"timme", tips:"En time = en timme. (Tid heter tid.)"},
      {da:"minut", sv:"minut"},
      {da:"klokken", sv:"klockan", tips:"Hvad er klokken? = Vad är klockan?"}
    ]
  },
  {
    namn: "Meningar", ikon: "💬",
    ord: [
      {da:"Hvad hedder du?", sv:"Vad heter du?"},
      {da:"Jeg hedder Hannes.", sv:"Jag heter Hannes."},
      {da:"Hvor bor du?", sv:"Var bor du?"},
      {da:"Jeg bor i Sverige.", sv:"Jag bor i Sverige."},
      {da:"Jeg forstår ikke.", sv:"Jag förstår inte."},
      {da:"Taler du engelsk?", sv:"Talar du engelska?"},
      {da:"Hvor meget koster det?", sv:"Hur mycket kostar det?"},
      {da:"Kan du hjælpe mig?", sv:"Kan du hjälpa mig?"},
      {da:"Hvordan har du det?", sv:"Hur mår du?", tips:"Ordagrant: Hur har du det?"},
      {da:"Jeg har det godt.", sv:"Jag mår bra."},
      {da:"Tak for mad.", sv:"Tack för maten."},
      {da:"Undskyld, hvor er toilettet?", sv:"Ursäkta, var är toaletten?"},
      {da:"Det ved jeg ikke.", sv:"Det vet jag inte."},
      {da:"God weekend!", sv:"Trevlig helg!"}
    ]
  }
];
