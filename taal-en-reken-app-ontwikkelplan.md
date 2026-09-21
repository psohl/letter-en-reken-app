# Ontwikkelplan: Letter en Cijfer-app

Versie 2.0 · 21 september 2026

> **Status (10 sept 2026):** **Alle fases 0 t/m 12 zijn afgerond** ✅. De app heet **Letter en Cijfer-app** (zo staat het in `index.html`, `manifest.webmanifest` en `README.md`) en staat als Git-repository op GitHub: **github.com/psohl/letter-en-reken-app** (openbaar). Lokaal is dat de map `letter-en-reken-app/`; start met dubbelklik op `index.html`. Online draait dezelfde app via GitHub Pages op **psohl.github.io/letter-en-reken-app/** (voor tablet en telefoon). Fontkeuze: **Lusletters (standaardhelling) met stylistic set ss01**. Fase 12 (10 sept) voegt een derde onderdeel toe: **Vis**, woorden lezen (§5.5, `woordenlijst-vis.md`). Zie §9 en het voortgangslog in §13.
>
> **Status (14 sept 2026):** **fase 14 is gebouwd** ✅. De app heeft nu **vier onderdelen**: het vierde is **Mier**, woorden bouwen met het bewegend alfabet (§5.6). Het kind ziet een plaatje en typt het woord in klankvakjes — één vakje per klank, dus *maan* is m + aa + n. Het menu heeft daarmee vier knoppen in een 2×2-raster. Zie §9 en het voortgangslog in §13.
>
> **Status (21 sept 2026):** **fase 16 is gebouwd** ✅. Elk onderdeel heeft nu een **wereld die meegroeit** met de goede antwoorden: het aapje klimt een tak hoger in de boom, de raket vliegt naar een volgende planeet, het visje zwemt verder door een rif met koraal en waterplanten, en de mier loopt een kamer verder door zijn **ondergrondse nest** terwijl hij een kunstje doet (zeven nieuwe kunstjes, tien in totaal). Elk tiende antwoord is een finale en daarna begint een nieuwe ronde. Het ontwerp staat in §7.6, de opbouw in §9 (fase 16), de tests in §10 en het bouwverslag in §13.
>
> *Aapje*, *Raketje*, *Vis* en *Mier* zijn in dit plan de namen van de vier onderdelen (letters, sommen, woorden lezen en woorden bouwen); Aapje en Raketje zijn overgenomen van de klasprogramma's, Vis en Mier zijn eigen namen. Het zijn geen namen van de app.

---

## 1. Doel en doelgroep

Een vrolijke, kleurrijke oefen-app voor kinderen van 6-7 jaar op een Montessori-basisschool: de **Letter en Cijfer-app**.
De app bestaat uit vier onderdelen; de eerste twee sluiten aan bij de programma's die in de klas worden gebruikt, het derde (fase 12) en het vierde (fase 14) bouwen op Aapje voort:

| Onderdeel | Klasprogramma | Wat het kind oefent |
|-----------|---------------|---------------------|
| **Aapje** | Taal | Letter herkennen (schrijfletter, eventueel hoofdletter of blokletter) en intoetsen op het toetsenbord |
| **Raketje** | Rekenen | Sommen met kleine getallen (+, −, ×, ÷) intoetsen |
| **Vis** | Taal (vervolg op Aapje) | Woorden lezen: bij een woord het juiste plaatje kiezen, of bij een plaatje het juiste woord (§5.5) |
| **Mier** | Taal (bewegend alfabet) | Woorden bouwen: bij een plaatje het woord intoetsen in klankvakjes, één vakje per klank (§5.6) |

Randvoorwaarden:

- Draait volledig in de browser vanaf een lokale pc (dubbelklik op `index.html`), geen internet en geen installatie nodig. Dezelfde bestanden staan ook online (GitHub Pages, §4.5) voor tablet en telefoon.
- Volledig bedienbaar met muis **en** toetsenbord; sinds fase 10 ook met een aanraakscherm (tablet of telefoon, §4.5).
- Alle bediening via grote, vrolijke, cartooneske iconen; het kind hoeft niet te kunnen lezen.
- Montessori-uitgangspunten: zelfstandig werken, geen straf bij fouten, eigen tempo, rustige beloning.

---

## 2. Gemaakte keuzes (afgestemd op 8 sept 2026)

| Onderwerp | Keuze | Toelichting |
|-----------|-------|-------------|
| Schrijfletters | Gratis Nederlands schoolschrift-font | Zie §4.3 voor de fontkeuze en de controle t.o.v. `letters.png`. |
| Kleur letters | Klinkers blauw, medeklinkers rood/roze | Zoals de schuurpapieren letters en `letters.png`. |
| Geluid | Alleen geluidseffecten, geen spraak | Vrolijk geluidje bij goed, zacht neutraal geluidje bij fout, geluid bij animatie. Aan/uit-icoon. |
| Rekenbereik | Instelbaar niveau: klein / groot / super (fase 9), vrij te combineren (14 sept 2026) | Klein: uitkomst t/m 10, tafels 1-5. Groot: uitkomst t/m 20, tafels 1-10. Super: plus en min t/m 100, tafels 1-10. Meerdere niveaus tegelijk aan mag; de sommen komen dan door elkaar. |
| Antwoord bevestigen | Automatisch controleren | Geen Enter nodig; zie §5.2 voor de regels. |
| Fouten | Neutraal schudden, hint na 2 fouten | Hint = juiste toets licht op in een klein virtueel toetsenbord onderin. |
| Voortgang | Sessieteller, niets opslaan | Bananen (Aapje) / sterren (Raketje) tellen op tijdens de sessie. Elke start is schoon. |
| Iconen | Alles zelf tekenen als SVG | Eén consistente stijl, geen licenties van derden, alles animeerbaar. |
| Letterset | 26 letters in vier soorten: kleine/hoofd schrijfletter en kleine/hoofd blokletter | Vier vrij te combineren schakelaars in de balk (§5.2); minstens één soort staat aan, welke maakt niet uit. Later optioneel: tweetekenklanken (ee, oe, ui, ij, ...). |
| Visueel hulpmiddel bij rekenen | Montessori-kralen, met schakelaar, standaard uit (fase 8) | De som in kralenstaafjes onder de som; het kind telt en typt zelf (§5.3). |
| Tablet en telefoon | Dezelfde app, met een aanraakstand: toetsenbord op het scherm (fase 10) | Staat vanzelf aan op een tablet of telefoon, op de pc verandert niets. Voor gebruik op een telefoon moet de map online staan (§4.5). |
| Woorden bouwen (Mier, fase 14) | Eén vakje per **klank**, niet per letter | Bij een plaatje typt het kind het woord in klankvakjes; een tweetekenklank (aa, ui, eeuw) is één vakje waarin twee of drie toetsen gaan. Drie niveaus met de woordenlijsten van Vis, schrijf- of blokletters, en het **voorbeeldwoord** als hulpmiddel (standaard uit). Fout wist niet wat al goed staat. Omdat alle letters antwoord zijn, staan de schakelaars op de cijfers `1`-`6` (§5.6). |
| Woorden lezen (Vis, fase 12) | Kiezen uit drie, niet typen | Woord → plaatje en plaatje → woord als twee spelvormen (beide aan/uit, minstens één aan). Drie niveaus (kleine vis, grote vis, haai) volgens de leerlijn lezen van groep 3; 56 woorden per niveau, elk met een eigen SVG-tekening. Schrijf- en blokletters (alleen kleine letters), klinkers blauw en medeklinkers rood. Niveaus en lettersoorten zijn sinds 14 sept 2026 net als de spelvormen vrij te combineren (meerdere tegelijk aan, minstens één aan). Zie §5.5 en `woordenlijst-vis.md`. |
| Beloning die meegroeit (fase 16, ✅ gebouwd 21 sept 2026) | Per onderdeel een **wereld** die met de goede antwoorden meegroeit, in rondes van tien | Aapje klimt een boom in, Raketje reist van planeet naar planeet, Vis zwemt door een rif, Mier doet circuskunstjes. De stand van de wereld volgt uit de sessieteller (niets opslaan), de beloning blijft 1,4 s en rustig, de opgave blijft het middelpunt. Geen eigen schakelaar: de balken zijn vol; wijst de kindtest uit dat het decor afleidt, dan komt er een knop in het menu (§7.6). |

---

## 3. Onderzoek en inspiratie (samenvatting)

- **Aapje / Raketje**: niet publiek gedocumenteerd; we bouwen op de beschrijving uit de klas.
- **Montessori-taalmateriaal**: schuurpapieren letters in schrijfschrift, klinkers op blauw, medeklinkers op roze. Het kind leert de *klank*, niet de letternaam. Onze app volgt dezelfde kleurcode.
- **Tikketakketoetsenbord.nl** (Vlaams, gratis): letters herkennen en intoetsen voor kleuters. Sterke punten die we overnemen: geen inlog, direct beginnen, elke toetsaanslag geeft visuele en auditieve feedback, bewust heel simpel gehouden.
- **Letterapps (Juf Jannie, LetterSchool, Lollige Letters)**: één ding per scherm, grote letter centraal, direct belonen, korte animaties (1-2 s) zodat het tempo hoog blijft.
- **Rekenapps (Rekenraket, Rekenkoning, Rekenspelletjes)**: operatoren apart aan/uit te zetten, kleine getallen eerst, geen negatieve uitkomsten, alleen opgaande delingen.
- **Fonts** (syboor.eu, Juffrouw Femke, Juf Maike): er bestaan gratis Nederlandse verbonden-schrift-fonts, zie §4.3. Geen enkel font is officieel "Montessori"; visuele controle tegen `letters.png` is nodig.
- **Leerlijn lezen groep 3** (fase 12, voor Vis): alle methodes (Veilig leren lezen kim-versie, Lijn 3) en de AVI-niveaus bouwen hetzelfde op: eerst klankzuivere (m)k(m)-woorden met korte en lange klinkers (AVI Start/M3: *vis, maan, boom*), dan tweetekenklanken en medeklinkerclusters (M3/E3: *klap, strand, lamp, school*), dan twee- en drielettergrepige woorden en samenstellingen (E3/M4: *voetbal, konijn, paraplu*). Dat zijn precies de drie niveaus van Vis. Uitgewerkt met bronnen in `woordenlijst-vis.md`.

Bronnen staan in §12.

---

## 4. Technische architectuur

### 4.1 Uitgangspunt: geen build, geen server

- Pure HTML + CSS + JavaScript ("vanilla"), geen framework, geen npm, geen bundler.
- Werkt vanaf `file://` in Chrome, Edge en Firefox. Daarom:
  - **Geen ES-modules** (`type="module"` wordt door Chrome geblokkeerd op `file://`). We gebruiken gewone `<script>`-tags in vaste volgorde.
  - **Font en SVG-iconen inline of als data-URI** in de CSS/HTML, zodat er geen cross-origin-problemen ontstaan op `file://`.
  - **Geluid gesynthetiseerd met Web Audio API** (geen audiobestanden nodig). Een klik of toets van de gebruiker start de AudioContext (browservereiste).
- ✅ Fase 11: uitleveren als Git-repository op GitHub (`psohl/letter-en-reken-app`). De repo *is* de app-map: klonen of als zip downloaden van GitHub en `index.html` openen. De losse zip-opleveringen van fase 7 t/m 10 zijn hiermee vervallen. Optioneel later: alles samenvoegen tot één `index.html`.
- ✅ Fase 10 en 11: dezelfde map staat online via GitHub Pages (§4.5) voor tablet en telefoon; `manifest.webmanifest` maakt de app dan op het beginscherm te zetten. Op de pc blijft `file://` het uitgangspunt.

### 4.2 Mappenstructuur

```
letter-en-reken-app/           (GitHub-repo psohl/letter-en-reken-app)
├── index.html                 startpunt, bevat de vijf schermen (menu, Aapje, Raketje, Vis, Mier); titel "Letter en Cijfer-app"
├── README.md                  uitleg voor ouders/leerkracht (heette t/m fase 10 LEESMIJ.md) ✅ fase 7 (tablet/telefoon fase 10, hernoemd fase 11, Vis fase 12, Mier fase 14)
├── manifest.webmanifest       web-app-manifest: naam, iconen, standalone (beginscherm) ✅ fase 10
├── taal-en-reken-app-ontwikkelplan.md   dit plan
├── woordenlijst-vis.md        de 168 woorden van Vis per niveau, met onderbouwing en bronnen ✅ fase 12
├── letters.png                referentie-afbeelding van de schrijfletters uit de klas (voor test/fontproef.html)
├── css/
│   ├── base.css               reset, kleuren, typografie, grote knoppen, wereldlaag ✅ fase 0 (wereld fase 16)
│   ├── menu.css               hoofdmenu met vier grote knoppen in een 2×2-raster  ✅ fase 0 (drie knoppen fase 12, vier fase 14)
│   ├── aapje.css              letterkaart, aapje-figuur, de boom, klim-animaties   ✅ fase 2 (boom fase 16)
│   ├── raketje.css            som, invulvak, niveau, kralen, raket-animatie        ✅ fase 3 (kralen fase 8)
│   ├── vis.css                woordkaart, plaatjes- en woordkeuzes, visje, vis-animaties ✅ fase 12
│   ├── mier.css               plaatjeskaart, klankvakjes, voorbeeldwoord, mier-animaties ✅ fase 14
│   ├── fonts.css              @font-face base64 + .schrijfletter en .blokletter   ✅ fase 1 (blok fase 8)
│   └── mobiel.css             aanraakstand (body.aanraak) en media queries voor smalle/lage schermen ✅ fase 10 (Vis fase 12, Mier fase 14)
├── js/
│   ├── app.js                 schermwisseling, globale toetsafhandeling, geluid aan/uit, aanraakstand ✅ fase 0 (geluid fase 5, aanraak fase 10)
│   ├── audio.js               Web Audio geluidseffecten (globaal object `Geluid`)  ✅ fase 5 (blub fase 12, vijf geluiden fase 16)
│   ├── icons.js               SVG-iconen als strings: Icons.svg('huisje'), Icons.vul() ✅ fase 4 (45 iconen)
│   ├── plaatjes.js            de 168 woordplaatjes van Vis als SVG-strings: Plaatjes.svg('kat') ✅ fase 12
│   ├── decor.js               de 53 decor-tekeningen van de werelden: Decor.svg('planeetRing') ✅ fase 16
│   ├── keyboardHint.js        hint-toetsenbord; in de aanraakstand tikbaar (tik = keydown) ✅ fase 2 (tikbaar fase 10)
│   ├── teller.js              sessieteller (bananen/sterren/schelpen, tros + getal > 10) ✅ fase 2
│   ├── letters.js             letters, klinker/medeklinker, shuffle-bag, lettersets ✅ fase 1 (sets fase 8)
│   ├── woorden.js             woordenlijst (3 niveaus), letterkleuren, afleiders, opgavezak (pure functies) ✅ fase 12; klanken + woordzak ✅ fase 14
│   ├── aapje.js               spel Aapje                                          ✅ fase 2
│   ├── sommen.js              somgenerator (3 niveaus), auto-controle (pure functies) ✅ fase 3 (super fase 9)
│   ├── kralen.js              Montessori-kralen: model + weergave (pure functies)  ✅ fase 8
│   ├── wereld.js              meegroeiende werelden: Wereld.stand + decor per onderdeel ✅ fase 16
│   ├── raketje.js             spel Raketje                                        ✅ fase 3
│   ├── vis.js                 spel Vis                                            ✅ fase 12
│   ├── mier.js                spel Mier                                           ✅ fase 14
│   └── animaties.js           beloningsanimaties: 3 reisvarianten per figuur, 10 miekunstjes, 4 finales, effectenlaag ✅ fase 5 (vis fase 12, mier fase 14, werelden en finales fase 16)
├── assets/
│   ├── font/                  lusletters.ttf + LICENTIE-Lusletters-OFL.txt       ✅ fase 1
│   └── icoon/                 icoon-180/192/512.png voor beginscherm en tabblad   ✅ fase 10
└── test/
    ├── test.html              244 tests: letters.js, woorden.js, plaatjes.js, sommen.js, kralen.js, wereld.js, decor.js, animaties.js, keyboardHint.js, icons ✅ fase 1, 3, 5, 8, 9, 10, 12, 14, 15, 16
    ├── fontproef.html         alle letters per letterset naast letters.png        ✅ fase 1 (sets fase 8)
    ├── plaatjesproef.html     alle 168 woordplaatjes per niveau, met het woord in schrijf- en blokletters ✅ fase 12
    └── klankproef.html        alle 168 woorden in klankvakjes, zoals Mier ze toont ✅ fase 14
```

Het ontwikkelplan staat sinds fase 11 **in** de repo, in de hoofdmap, net als `letters.png` (beide staan in `git ls-files`; de eerdere tekst in dit plan dat ze buiten de repo zouden blijven is op 10 september gecorrigeerd). `test/fontproef.html` verwijst naar `../letters.png`. De map `assets/svg/` uit het oorspronkelijke plan is weggelaten: alle iconen en woordplaatjes zijn rechtstreeks in `js/icons.js` en `js/plaatjes.js` getekend, er zijn geen losse werkbestanden.

### 4.3 Font voor de schrijfletters

Kandidaten (alle gratis, TrueType, geschikt voor `@font-face`):

| Font | Licentie | Kenmerken | Bron |
|------|----------|-----------|------|
| **Lusletters** (aanbevolen als eerste te proberen) | SIL Open Font License 1.1 | Verbonden schrift met lussen, drie hellingen (standaard, bijna recht, recht). Stylistic set 1 geeft aanhalen vanaf de grondlijn. | syboor.eu/fonts/lusletters/ |
| **Cogncur** | SIL Open Font License | Volledig verbonden lopend schrift met lussen; Regular, Vertical, Oblique. Open source op GitHub. | github.com/syboor/cogncur |
| **Schoolschrift (LG / 03)** | Gratis niet-commercieel | Voorganger van Lusletters, kortere lussen. | syboor.eu/fonts/schoolschrift03/ |
| Sylvia | Gratis (via juf-sites) | Past bij methode Pennenstreken. | juffrouwfemke.com |

Werkwijze in fase 1 (uitgevoerd op 8 sept 2026):

1. ✅ Lusletters (3 hellingen) en Cogncur (Regular, Oblique, Vertical) gedownload; alle 26 letters in een proefpagina naast `letters.png` gezet, inclusief alle stylistic sets.
2. ✅ Gelet op `a` (aanhaal), `f`, `k`, `z`, `r`, `s`, `t`, `v`/`w`.
3. ✅ Keuze: **Lusletters, standaardhelling, met `ss01`**. Vastgelegd in `css/fonts.css` (klasse `.schrijfletter`).
4. ✅ `.ttf` als base64 in `fonts.css`; origineel en OFL-licentie in `assets/font/`.
5. ✅ Niet nodig: alle 26 letters komen goed genoeg overeen, geen eigen SVG-letters.

**Bevindingen fontproef** (zie `test/fontproef.html`):

| Aspect | Lusletters | Cogncur |
|--------|-----------|---------|
| Lettervormen t.o.v. `letters.png` | Kloppen voor alle 26 letters: `f` met twee lussen, `k`/`z` met lus, korte `t`, `r` en `s` in de klassieke schrijfvorm, `p` met rechte stok. | `r` lijkt op een `n`, `p` heeft een lus, `t` krijgt in isolatie een afwijkende vorm (te herstellen met `ss08`), `x` en `z` hebben extra haaltjes. |
| Aanhaal vanaf de grondlijn | Alleen met stylistic set **`ss01`**; zonder ss01 begint een losse letter zonder aanhaal. | Standaard aanwezig. |
| Lijndikte | Dun; in de app verdikt met `-webkit-text-stroke: 0.028em` (werkt in Chrome, Edge en Firefox). | Al dikker. |
| Licentie | SIL OFL 1.1 | SIL OFL 1.1 |

Let op bij het testen van OpenType-features in HTML: schrijf `font-feature-settings: 'ss01'` met enkele aanhalingstekens in een `style`-attribuut; dubbele aanhalingstekens breken het attribuut en de feature wordt dan stil genegeerd.

Omdat we steeds één losse letter tonen, zijn de verbindingen tussen letters (waar deze fonts hun kracht hebben) niet relevant; alleen de vorm van de losse letter telt.

### 4.4 Toetsenbordafhandeling

- Luisteren op `keydown` op `document`; `event.key` gebruiken (niet `keyCode`).
- Hoofd- en kleine letters gelijk behandelen (Caps Lock of Shift mag geen fout geven).
- Cijfers van het numerieke blok en van de bovenste rij gelijk behandelen.
- Herhaalde toetsaanslagen (`event.repeat`) en toetsen met Ctrl/Alt/Meta negeren.
- Tijdens een animatie worden toetsen genegeerd (of gebufferd: eerste toets na animatie telt) om per ongeluk doortikken te voorkomen.
- `Escape` = terug naar hoofdmenu (hetzelfde als de terugknop). `F11`/fullscreen-icoon = volledig scherm.
- Browser-sneltoetsen die het spel verstoren (Backspace = terug-navigatie, spatie = scrollen) worden met `preventDefault` afgevangen.

### 4.5 Aanraakstand: tablet en telefoon (fase 10) ✅

Dezelfde app en dezelfde bestanden werken ook in de browser van een iPad, iPhone of Android-toestel.
Op de pc verandert er niets: alle aanpassingen zitten in `css/mobiel.css` (alleen actief via
`body.aanraak` of via media queries voor smalle en lage schermen) en in een paar extra functies in
`app.js` en `keyboardHint.js`. Gemeten op 1024×768, 1366×768 en 1920×1080: posities en maten van
balk, knoppen, letterkaart, som, teller, hint en figuur zijn gelijk aan fase 9; alleen het menu heeft
rechtsboven een knop extra.

- **Toetsenbord op het scherm.** Een tablet heeft geen toetsenbord, en het systeemtoetsenbord komt
  alleen bij een invoerveld (dat bedekt de som en corrigeert mee). Daarom wordt het bestaande
  hint-toetsenbord in de aanraakstand permanent getoond en tikbaar. Een tik stuurt via
  `KeyboardHint.tik()` een echte `keydown` (`new KeyboardEvent`) naar `document`; `app.js` en de
  spellen zien geen verschil met een echte toets, dus alle regels (hoofd- en kleine letter gelijk,
  negeren tijdens de animatie, hint na twee fouten, dubbelklik-bescherming) gelden onveranderd.
  Achter de cijferrij staat een wistoets (⌫ = Backspace), alleen zichtbaar in de aanraakstand.
- **Aan en uit.** Bij het opstarten aan als de primaire aanwijzer een vinger is
  (`matchMedia('(pointer: coarse)')`): tablet of telefoon. Een laptop met aanraakscherm heeft muis of
  trackpad als primaire aanwijzer en houdt de pc-stand. Handmatig te wisselen met de toetsenbordknop
  rechtsboven in het menu (toets `T`); de stand geldt voor beide spellen. Er wordt niets opgeslagen (§2).
- **Opmaak.** Tot 1000 px breed krimpen de knoppen (`--knop-min: clamp(50px, 7.2vw, 76px)`) zodat de
  tien knoppen van Raketje op een iPad rechtop (768 px) passen. Tot 700 px (telefoon rechtop) staan
  terugknop en geluid op de eerste rij en alle schakelaars op een tweede rij die mag omlopen; de
  menuknoppen staan onder elkaar; letterkaart (`min(64vw, 36vh)`) en som (`min(12vh, 13vw)`, zodat
  `100 − 37 = ___` past) volgen de breedte; het figuur wordt kleiner en het speelveld krijgt onderaan
  ruimte zodat kaart en figuur elkaar niet raken. Tot 520 px hoog (telefoon liggend) wordt alles een
  slag lager en reserveert Raketje één toetsenrij in plaats van drie. Toetsen zijn in de aanraakstand
  minstens 44 px hoog. De cijfers staan in twee groepjes (1-5 en 6-0 met de wistoets): op een breed
  scherm naast elkaar als één rij, tot 700 px breed onder elkaar in twee rijen met vierkante toetsen.
- **Aanraakdetails.** `touch-action: manipulation` (geen dubbeltik-zoom, geen tikvertraging), geen
  `:hover`-effect op apparaten zonder muis (blijft anders "hangen"), `position: fixed` op body bij
  `pointer: coarse` tegen het stuiteren van Safari, `env(safe-area-inset-*)` op de schermen voor
  telefoons met een inkeping, `viewport-fit=cover`.
- **Op het beginscherm.** `manifest.webmanifest` (`display: standalone`, iconen 192 en 512 px) plus
  `apple-touch-icon` (180 px) en de `apple-mobile-web-app-*`-meta's. Via "Zet op beginscherm" opent
  de app zonder browserbalken. Dat is op de iPhone de enige vorm van volledig scherm: Safari op de
  iPhone kent de Fullscreen API niet voor webpagina's, de knop verbergt zichzelf daar. Op de iPad
  werkt de fullscreen-knop wel; `app.js` gebruikt ook de `webkit`-variant voor oudere iPadOS-versies.
  De iconen zijn met headless Chrome gerenderd uit de bestaande SVG's (aapjeskop en raket).
- **Hosting.** Dubbelklikken op `index.html` kan niet op een telefoon: de map moet op een webadres
  staan. Elke statische host volstaat, er is geen servercode. ✅ Fase 11: de repo staat via GitHub
  Pages op `https://psohl.github.io/letter-en-reken-app/` (branch `main`, hoofdmap); elke push naar
  `main` zet de nieuwe versie online. Netlify Drop, zoals beschreven in `README.md`, blijft een
  alternatief. Op de pc blijft `file://` werken; het manifest wordt daar genegeerd.
- **Geluid.** Web Audio start ook op iOS pas na een tik; de bestaande `pointerdown`-ontgrendeling dekt
  dat. De stil-schakelaar van een iPhone dempt Web Audio wel.
- **Nog niet gedaan:** proberen op een echte iPad en iPhone via het GitHub Pages-adres. Headless
  Chrome kan tikken en maten meten, maar geen iOS-Safari nabootsen.

---

## 5. Functioneel ontwerp

### 5.1 Schermen

**Hoofdmenu**

- Vier zeer grote knoppen in een **2×2-raster** (sinds fase 14; vier naast elkaar past op geen enkel pc-scherm, want 4 × 26vw is breder dan het venster): **Aapje** (aapje met letter-blokje), **Raketje** (raket met cijfers), **Vis** (visje met het woordje *vis* in schrijfletters, fase 12) en **Mier** (mier met een blaadje, en drie kleine klankvakjes met *m-ie-r*). Op een smal scherm (telefoon rechtop) staan ze onder elkaar.
- Kleine knoppen rechtsboven: toetsenbord op het scherm aan/uit (aanraakstand, §4.5; toets `T`, fase 10), geluid aan/uit (luidspreker-icoon), volledig scherm (pijltjes-icoon).
- Toetsenbord: `A` of `1` → Aapje, `R` of `2` → Raketje, `V` of `3` → Vis, `M` of `4` → Mier; pijltjes links/rechts lopen één knop op, omhoog/omlaag een rij (2×2), Enter kiest.
- Kleine animaties in rust ("idle"): aapje knippert met de ogen, raketje wiegt, visje zwaait met zijn staart, de mier trippelt en beweegt zijn voelsprieten.

**Aapje**

- Midden: één grote letter (klinker blauw, medeklinker rood/roze) op een licht "schuurpapier"-kaartje.
- Bovenaan: vier letterset-schakelaars met de lettervorm zelf als icoon (kleine/hoofd schrijfletter, kleine/hoofd blokletter); aan = bruin, uit = grijs. Alle vier zijn vrij te combineren, ook de schrijfletter mag uit; alleen de laatste aangezette soort kan niet uit (dan gebeurt er niets). Bij het opstarten staat de kleine schrijfletter aan. Toetsen `1` t/m `4`.
- Linksboven: terugknop (huisje/pijl). Rechtsboven: geluid-icoon.
- Onderin: rij bananen als sessieteller (max. 10 zichtbaar, daarna een bananentros met getal).
- Onderin, standaard verborgen: klein virtueel toetsenbord voor de hint. In de aanraakstand (§4.5) staat het altijd in beeld en is het tikbaar.
- Het aapje zit in een hoek en wacht; bij goed antwoord speelt een animatie (§7).
- ✅ *Fase 16 (§7.6):* langs de rechterrand staat een boom met tien takken. Bij elk goed antwoord klimt het aapje een tak hoger en blijft daar zitten; bij het tiende pakt het de bananentros in de top en begint een nieuwe ronde bij een andere boom.

**Raketje**

- Midden: de som groot in beeld, bijv. `3 + 4 = _` met een invulvakje dat de getypte cijfers toont.
- Bovenaan staan alle instellingen in de middenbalk, in drie groepen met een scheidingslijntje ertussen:
  1. vier operator-toggles met icoon (`+`, `−`, `×`, `÷`); aan = gekleurd, uit = grijs. Alle vier zijn vrij aan en uit te zetten (ook de `+`, sinds fase 13); er moet er alleen altijd minstens één aan staan: klikken op de laatst aangezette soort doet niets.
  2. drie niveau-toggles: klein / groot / superraketje, in drie duidelijk verschillende maten (klein = t/m 10, groot = t/m 20, super = plus en min t/m 100). Net als de operatoren zijn ze sinds 14 sept 2026 vrij te combineren: **meerdere niveaus tegelijk** mag, aan = rode ring, er blijft er altijd minstens één aan.
  3. schakelaar voor de Montessori-kralen als visueel hulpmiddel (§5.3), standaard uit.
- Rechtsboven blijft alleen het geluid-icoon staan (sinds fase 9; het niveau stond daar eerst).
- Onderin: sterren als sessieteller; hint-toetsenbord met cijfers 0-9 (in de aanraakstand met een wistoets ⌫).
- Toetsen: `Backspace` wist het laatste cijfer, `Escape` = terug. Toggles ook via `+`, `-`, `*` (of `x`), `/` (of `:`) op het toetsenbord; niveau aan/uit via `K` (klein), `G` (groot) en `S` (super); kralen via `H` (hulp).
- ✅ *Fase 16 (§7.6):* langs de rechterrand een lichte sterrenhemel met de planeten onder elkaar. Bij elk goed antwoord vliegt de raket omhoog naar de volgende planeet en zakt de hemel een station; bij het tiende komt de raket thuis op aarde.

**Vis** (fase 12, zie §5.5)

- Midden, boven: de **opgave** op een kaart met zeegroene rand: een woord (brede kaart, letters in klinker-/medeklinkerkleur) of een plaatje (vierkante kaart).
- Daaronder: drie **keuzekaarten** naast elkaar, met plaatjes (bij een woord als opgave) of woorden (bij een plaatje als opgave). Klikken of tikken kiest; er is geen toetsenbord nodig, ook niet in de aanraakstand.
- Bovenaan in de middenbalk drie groepen met een scheidingslijntje:
  1. twee spelvorm-toggles: *woord in beeld, plaatje kiezen* en *plaatje in beeld, woord kiezen*; beide vrij aan/uit, minstens één aan (zoals de lettersets van Aapje). Toetsen `W` en `P`.
  2. drie niveau-toggles: kleine vis, grote vis, haai (drie duidelijk verschillende visjes, de haai grijs met rugvin); sinds 14 sept 2026 vrij te combineren, **meerdere niveaus tegelijk** mag, aan = zeegroene ring, minstens één aan. Toetsen `K`, `G`, `H`.
  3. twee lettersoort-toggles: schrijfletters (`a` in Lusletters) en blokletters (`a` in drukletters), dezelfde iconen als bij Aapje; sinds 14 sept 2026 ook **allebei tegelijk** aan te zetten, minstens één aan. Toetsen `S` en `B`.
- Linksboven terugknop, rechtsboven geluid. Onderin: schelpen als sessieteller; boven tien schelpen een schatkist met getal. Geen hint-toetsenbord.
- Het visje zit rechtsonder en wiegt; bij een goed antwoord springt het, zwemt het naar de goede kaart of blaast het bubbels (§7.4).
- Toetsen: `1`, `2`, `3` kiezen de linker, middelste of rechter kaart; pijltjes links/rechts verplaatsen de focus over de kaarten en Enter of spatie kiest; `Escape` = terug.
- ✅ *Fase 16 (§7.6):* achter het visje een zeebodem met koraal en waterplanten. Bij elk goed antwoord zwemt het visje een rifstuk verder en schuift het rif mee; bij het tiende vindt het de schatkist.

**Mier** (fase 14, zie §5.6)

- Midden, boven: het **plaatje** op een vierkante kaart met grasgroene rand. Daaronder (als het hulpmiddel aan staat) het **voorbeeldwoord** klein, en daaronder de rij **klankvakjes**: één vakje per klank, met een grasgroene rand om het vakje waar het kind nu in typt.
- Linksboven terugknop, rechtsboven geluid. Onderin: blaadjes als sessieteller (boven tien een mierenhoop met een getal) en het hint-toetsenbord met letters.
- Bovenaan in de middenbalk drie groepen met een scheidingslijntje:
  1. drie niveau-toggles: kleine mier, grote mier, puike mier (drie mieren in drie maten), met de woordenlijsten van Vis; vrij te combineren, aan = grasgroene ring, minstens één aan. Toetsen `1`, `2`, `3`.
  2. twee lettersoort-toggles: schrijfletters en blokletters, dezelfde iconen als bij Aapje en Vis; allebei tegelijk mag, minstens één aan. Toetsen `4` en `5`.
  3. schakelaar voor het **voorbeeldwoord** als hulpmiddel (§5.6), standaard uit. Toets `6`.
- Toetsen: alle **letters** zijn antwoord (het kind typt het woord), `Backspace` legt de laatste klank terug, `Escape` = terug. De schakelaars staan daarom op de **cijfers** `1` t/m `6`, net zoals de lettersets bij Aapje op `1` t/m `4` staan. Dit is de bij de bouw gemaakte keuze in plaats van het voorstel `K`/`G`/`P` en `S`/`B` uit §5.6: die letters zijn hier gewoon antwoord (*kip*, *geit*, *pop*, *sok*, *bus*).
- De mier zit rechtsonder en trippelt; bij een afgemaakt woord draagt hij het weg, loopt hij met een blaadje over het scherm of klimt hij op de laatste klank (§7.5).
- ✅ *Fase 16 (§7.6):* onderin het scherm ligt een doorsnede van het **ondergrondse nest**: kamers met gangen ertussen, onder een grasrand. Bij elk afgemaakt woord loopt de mier een kamer verder terwijl hij een kunstje doet (koprol, balanceren op een zaadje, door de wortelboog, jongleren, koorddansen, handstand, trapeze), en elk tiende woord komt hij aan in de koninginnenkamer met een grote finale.

### 5.2 Spelregels

**Aapje (letters)**

1. Letters komen uit een *shuffle-bag*: alle 26 letters in willekeurige volgorde, pas als de zak leeg is opnieuw schudden. Zo komt elke letter even vaak en niet twee keer achter elkaar.
2. Juiste toets → goed-geluid, banaan erbij, aapje-animatie (~1,5 s), volgende letter.
3. Foute toets → letterkaartje schudt zachtjes, kort neutraal geluidje. Geen rood kruis, geen aftrek.
4. Na 2 foute pogingen op dezelfde letter → hint-toetsenbord schuift omhoog en de juiste toets pulseert. Na een goed antwoord verdwijnt het weer.
5. Doorlopen tot het kind op terug klikt of `Escape` drukt.
6. **Lettersets** (uitbreiding, 8 sept 2026): vier sets, met een schakelaar per set in de bovenbalk,
   in dezelfde vorm als de operator-toggles bij Raketje:

   | Set | Vorm | Schakelaar |
   |-----|------|------------|
   | `schrijf-klein` | kleine schrijfletter (Lusletters + ss01) | aan/uit, toets `1`; staat aan bij het opstarten |
   | `schrijf-hoofd` | hoofdletter in schrijfletters | aan/uit, toets `2` |
   | `blok-klein` | kleine blokletter (drukletter, §6.4) | aan/uit, toets `3` |
   | `blok-hoofd` | hoofdletter in blokletters | aan/uit, toets `4` |

   De vier sets zijn vrij te combineren; er moet er alleen minstens één aan blijven staan, welke
   maakt niet uit (alleen hoofdletters oefenen kan dus ook). Klikken op de laatst aangezette soort
   doet niets. Dezelfde regel geldt sinds fase 13 voor de operatoren bij Raketje.

   De letter komt uit de shuffle-bag over de 26 letters, de set uit een tweede shuffle-bag over de
   aangezette sets (`Letters.Kaartenzak`): alle letters én alle aangezette vormen komen even vaak.
   Het antwoord blijft altijd de kleine letter, dus een hoofdletter op de kaart wordt met dezelfde
   toets beantwoord. Gaat de set van de letter in beeld uit, dan komt er meteen een nieuwe letter.

**Raketje (sommen)**

1. Actieve operatoren bepalen de kansverdeling: elke actieve operator even vaak. Alle vier zijn vrij
   te combineren (sinds fase 13 ook de `+`); er staat altijd minstens één aan: de laatst aangezette
   operator is niet uit te zetten (klik of toets doet dan niets). Bij het opstarten staat alleen `+` aan.
   Gaat de operator van de som in beeld uit, dan komt er meteen een nieuwe som.
2. Generatorregels per niveau:

   | Operator | Niveau klein | Niveau groot | Niveau super (fase 9) |
   |----------|--------------|--------------|------------------------|
   | `+` | a + b, a,b ∈ 0..10, uitkomst ≤ 10 | a,b ∈ 0..10, uitkomst ≤ 20 | a,b ∈ 0..100, uitkomst ≤ 100 |
   | `−` | a − b, a ≤ 10, b ≤ a (nooit negatief) | a ≤ 20, b ≤ 10, b ≤ a | a ≤ 100, b ≤ a |
   | `×` | tafels 1-5: a ∈ 1..5, b ∈ 1..10 | tafels 1-10: a,b ∈ 1..10 | gelijk aan groot: 10 × 10 = 100 is al de bovengrens |
   | `÷` | omgekeerde tafel: (a·b) ÷ a met a ∈ 1..5, b ∈ 1..10 | a,b ∈ 1..10 | gelijk aan groot |

   In `sommen.js` staat dit als `maxTerm` (grootste getal in een plussom en grootste aftrekgetal),
   `maxUitkomst`, `maxAftrektal` en `maxTafel` per niveau.

   De niveaus zijn sinds 14 sept 2026 net zo vrij te combineren als de operatoren: staan er meerdere
   aan, dan wordt per som eerst een niveau geloot (elk even waarschijnlijk) en daarna de som binnen
   de regels van dát niveau. Elke som draagt zijn niveau mee (`som.niveau`), zodat Raketje meteen een
   nieuwe som kan tonen als het niveau van de som in beeld wordt uitgezet. Er blijft altijd minstens
   één niveau aan; een lege lijst wordt geweigerd.

   Extra regels: niet twee keer dezelfde som achter elkaar; bij `+` en `×` beide volgordes toestaan (3 + 4 én 4 + 3); triviale sommen (× 0, ÷ 1, + 0) hoogstens af en toe.
3. **Automatisch controleren**: na elke cijfertoets wordt de invoer `s` vergeleken met het antwoord `A` (als string):
   - `s === A` → goed.
   - `A` begint met `s` (bijv. `s = "1"`, `A = "15"`) → wachten op volgend cijfer.
   - anders → fout: invoer schudt en wordt leeggemaakt, foutteller +1.
   - Bijzonder geval `A = "0"` (bijv. 4 − 4): alleen `"0"` is goed.
4. Hint na 2 fouten: het eerste nog te typen cijfer pulseert op het hint-toetsenbord.
5. Goed antwoord → ster erbij, raketje-animatie (~1,5 s), volgende som.
6. Optioneel hulpmiddel: de Montessori-kralen onder de som (§5.3), met een eigen schakelaar; standaard uit.

### 5.3 Montessori-kralen als hulpmiddel bij Raketje

Optioneel hulpmiddel, met een eigen schakelaar in de bovenbalk (standaard **uit**). Onder de som
verschijnt dezelfde som in kralenstaafjes, in de kleuren van de Montessori-kralentrap:
1 rood, 2 groen, 3 roze, 4 geel, 5 lichtblauw, 6 paars, 7 wit, 8 bruin, 9 donkerblauw, 10 goud.

| Som | Wat de kralen laten zien |
|-----|--------------------------|
| `a + b` | een staafje van `a` en een staafje van `b` naast elkaar, met het plusteken ertussen |
| `a − b` | één staafje van `a` waarvan de laatste `b` kralen doorgestreept zijn; wat blijft staan is het antwoord |
| `a × b` | `a` staafjes van `b`: de klassieke rechthoek |
| `a ÷ b` | de `a` kralen eerlijk verdeeld over `b` staafjes; een staafje lang is het antwoord |

Regels: een staafje is nooit langer dan tien kralen (14 wordt 10 + 4, zoals het echte materiaal),
een getal 0 is een leeg (gestippeld) rondje, en het kind telt en typt het antwoord nog steeds zelf.
`js/kralen.js` maakt het model als pure functie (`Kralen.model(som)`); de CSS rekent de kraalgrootte
uit `--rijen` en `--kolommen`, zodat ook 10 × 10 = 100 kralen binnen het speelveld past.

### 5.4 Wat we bewust *niet* doen

- Geen tijdsdruk, geen countdown, geen "game over".
- Geen tekstuele meldingen; alleen iconen, kleur, beweging en geluid. (De woorden van Vis zijn de opgave zelf, geen melding.)
- Geen opslag, geen accounts, geen internetverbinding.

### 5.5 Vis: woorden lezen (fase 12)

Vis is de volgende stap na Aapje: het kind kent de letters en gaat nu **woorden lezen**. Het kind
typt niet, maar kiest uit drie kaarten; zo blijft het tempo hoog en telt alleen het lezen.

**Twee spelvormen** (schakelaars in de balk, beide vrij te combineren, minstens één aan):

| Vorm | In beeld | Keuzes | Wat het kind doet |
|------|----------|--------|-------------------|
| `woord` | één woord (brede kaart) | drie plaatjes | het woord lezen en het bijbehorende plaatje kiezen |
| `plaatje` | één plaatje (vierkante kaart) | drie woorden | het plaatje benoemen en het bijbehorende woord lezen en kiezen |

Staan beide vormen aan, dan komt de vorm uit een shuffle-bag over de aangezette vormen (om en om,
nooit twee keer dezelfde). Gaat de vorm van de opgave in beeld uit, dan komt meteen een nieuwe opgave.

**Drie niveaus** (toggles in de balk; §3 en `woordenlijst-vis.md`), elk **56 woorden**, allemaal
concrete, klankzuivere zelfstandige naamwoorden uit de woordenschat van een 6-7-jarige:

| Niveau | Woordtype (leerlijn groep 3) | AVI | Voorbeelden |
|--------|------------------------------|-----|-------------|
| **kleine vis** | (m)k(m)-woorden met één klinkerteken: a, e, i, o, u, aa, ee, oo, uu, oe, ie | Start / M3 | vis, kip, zon, bus, maan, boom, koe, mier |
| **grote vis** | eenlettergrepig met tweetekenklank (ui, ij, ei, eu, ou, au, eeuw) en/of medeklinkercluster (mmkm, mkmm, mmkmm), sch-, -ng, -nk | M3 / E3 | muis, ijs, geit, deur, touw, stoel, hond, schaap, kwast |
| **haai** | twee- en drielettergrepige woorden en samenstellingen | E3 / M4 | konijn, paraplu, olifant, voetbal, tandenborstel, vuurtoren |

De niveaus zijn sinds 14 sept 2026 net als de spelvormen vrij te combineren: **meerdere tegelijk aan**
mag, er blijft altijd minstens één aan. Het niveau komt dan uit een shuffle-bag over de aangezette
niveaus (om en om, nooit twee keer hetzelfde), zodat ze elkaar netjes afwisselen. Gaat het niveau van
de opgave in beeld uit, dan komt meteen een nieuwe opgave.

**Opgavezak** (`Woorden.Opgavezak`, pure functies in `js/woorden.js`): het woord komt uit een
shuffle-bag **per niveau** over alle woorden van dat niveau (elk woord even vaak, nooit twee keer
achter elkaar); die zakken blijven staan als een niveau tussendoor uit en weer aan gaat.
De twee **afleiders** komen uit hetzelfde niveau als het woord — ook met meerdere niveaus aan, zodat
de drie kaarten altijd even moeilijk zijn: bij kleine vis willekeurig, bij grote vis en haai
met voorrang voor woorden die op het doelwoord lijken (zelfde beginletter telt 2, zelfde lengte 1,
zelfde eindletter 1; de meest gelijkende plus één willekeurige uit de top zes). Zo moet het kind het
hele woord lezen en niet alleen naar de eerste letter kijken. De drie kaarten staan in willekeurige
volgorde; het goede antwoord staat even vaak links, midden en rechts.

**Letters en kleuren.** Elke letter staat in een eigen `<span>` met klasse `klinker` (blauw) of
`medeklinker` (rood), volgens `Letters.isKlinker`; de **ij** telt als één klinker en is dus in zijn
geheel blauw. Chrome, Edge en Firefox vormen de schrijfletters ook over die span-grenzen heen
verbonden (gecontroleerd met een screenshot van *tandenborstel*), zodat het woord er als één
geschreven woord uitziet. De lettergrootte volgt uit de kaartbreedte en het aantal letters
(`--letters`, met een gemeten gemiddelde letterbreedte van 0,28 em voor Lusletters), zodat ook
*tandenborstel* op een kaart past. **Lettersoort**: schrijfletters (Lusletters + ss01, standaard) en
blokletters (de drukletter-fontstapel van §6.4), altijd kleine letters. Sinds 14 sept 2026 zijn het
twee losse toggles die **allebei tegelijk** aan mogen staan (minstens één aan): staan ze allebei aan,
dan komt de soort per opgave uit een shuffle-bag, dus om en om. Zo ziet het kind dat *vis* in
schrijfletters en `vis` in blokletters hetzelfde woord is. Een net aangezette soort komt meteen in
beeld (zodat zichtbaar is wat de knop doet); gaat de soort in beeld uit, dan neemt de andere het over.

**Goed en fout.** Goed → kaart wordt groen, goed-geluid plus *blub*, schelp erbij, visanimatie
(1,4 s, invoer geblokkeerd), nieuwe opgave. Fout → de kaart schudt, klinkt het zachte fout-geluidje
en de kaart vervaagt en doet niet meer mee (geen rood kruis, geen aftrek). Na twee fouten is er nog
één kaart over: die pulseert zachtjes als hint. Klikken op een vervaagde kaart doet niets.

**Plaatjes.** Elk woord heeft een eigen tekening in `js/plaatjes.js` (168 SVG's in de stijl van
`js/icons.js`: dikke ronde omtreklijn, vlakke zachte kleuren, geen tekst, geen `id`'s of `<defs>`,
zodat er honderden op één pagina kunnen staan). Woorden binnen één niveau die op elkaar lijken
(*kip*/*haan*, *boom*/*bos*, *dolfijn*/*walvis*/*zeehond*) zijn zo getekend dat ze duidelijk
verschillen; synoniemen (*kat*/*poes*) zitten niet samen in één niveau. `test/plaatjesproef.html`
toont alle plaatjes per niveau ter beoordeling.

### 5.6 Mier: woorden bouwen (fase 14) ✅

**Waarom dit onderdeel.** De Montessori-taallijn loopt van de schuurpapieren letters via het
**bewegend alfabet** (de letterdoos) naar de leeskaartjes. Aapje is de eerste stap en Vis de derde;
de middelste ontbreekt. Dat is geen detail: in de methode *schrijft* het kind eerder dan het leest —
het legt met losse letters de klanken die het in een woord hoort, en dat is de oefening die het lezen
op gang brengt. In de app doet het kind nu overal hetzelfde soort handeling: herkennen en kiezen.
Mier is het eerste onderdeel waarin het kind zelf iets **produceert**.

**De opgave.** Er staat één plaatje in beeld (uit de bestaande 168 van `js/plaatjes.js`). Daaronder
staat een rij lege vakjes en het kind **typt het woord**, van links naar rechts. De getypte letters
verschijnen in schrijf- of blokletters, klinkers blauw en medeklinkers roze — dezelfde kleuren als de
letters in de echte letterdoos.

**Eén vakje per klank, niet per letter.** In het bewegend alfabet is *maan* drie kaartjes: `m`, `aa`,
`n`. Dat is de kern van het materiaal: het kind ontleedt het woord in *klanken*. Mier doet hetzelfde:
een tweetekenklank (`aa ee oo uu oe ie ui ij ei eu ou au ch ng nk` en `eeuw`/`ieuw`/`aai`/`ooi`/`oei`)
krijgt één vakje waarin het kind twee (of drie) toetsen na elkaar typt. Hiermee wordt meteen de
openstaande wens uit §9.1 ingevuld. `sch` blijft `s` + `ch`, twee vakjes.

Dit vraagt de enige echt nieuwe logica van deze fase: `Woorden.klanken(woord)` splitst een woord in
klankdelen met een greedy match van links naar rechts op de geordende tekenlijst `Woorden.KLANKEN`
(van lang naar kort: `eeuw ieuw aai ooi oei ouw auw`, dan `aa ee oo uu oe ie ui ij ei eu ou au ch
ng nk`). Wat niet in de lijst staat, is één losse letter; `sch` staat er bewust niet in, dat blijft
s + ch.

**Uitkomst bij de bouw:** van de 168 woorden gaat er precies **één** mis met de greedy match,
*pannenkoek*: de n en de k staan daar toevallig naast elkaar zonder samen de klank *nk* te zijn
(pannen-koek). Daarvoor is `Woorden.SPLITSINGEN` gemaakt, waarin per woord een handmatige splitsing
staat; voor dit woord is dat `p-a-n-n-e-n-k-oe-k`. De terugvaloptie "één vakje per letter" was dus
niet nodig. `test/klankproef.html` toont alle 168 splitsingen ter beoordeling (zoals
`test/plaatjesproef.html` dat voor de plaatjes doet), met een groene rand om de handmatige
splitsing. Het langste woord is *tandenborstel* met 13 vakjes, het kortste *ui* en *ei* met één.

**Spelregels**

1. Het woord komt uit `Woorden.Woordzak`: een shuffle-bag per niveau (elk woord even vaak, nooit twee
   keer achter elkaar) en een shuffle-bag over de aangezette niveaus — dezelfde aanpak als de
   `Opgavezak` van Vis, maar zonder afleiders en zonder spelvorm. Beide zakken delen sinds fase 14 de
   niveau-afhandeling in `js/woorden.js`.
2. Goede letter → hij verschijnt in het vakje met een zachte pop en een klikje; is het vakje vol, dan
   springt de invoer naar het volgende. Het kind hoeft niets te bevestigen.
3. Foute letter → het vakje schudt, zacht fout-geluidje, de letter verschijnt **niet**. Wat al goed
   staat blijft staan: het materiaal blijft liggen. (Bewust anders dan Raketje, waar één fout cijfer
   de hele invoer wist — bij een woord van acht klanken zou dat ontmoedigen.)
4. `Backspace` wist de laatste ingevulde klank, zodat het kind zelf kan terugleggen: staat er een
   halve klank in het vakje (de eerste `a` van `aa`), dan gaat die er eerst uit, en anders komt het
   vorige vakje weer leeg.
5. Na 2 foute pogingen op hetzelfde vakje pulseert de juiste toets op het hint-toetsenbord
   (hetzelfde mechanisme als Aapje en Raketje; in de aanraakstand staat dat toetsenbord al in beeld).
6. Woord af → goed-geluid plus *trippel*, blaadje erbij, alle vakjes groen, mier-animatie
   (1,4 s, invoer geblokkeerd), nieuw woord.
7. Geen aftrek, geen kruis, geen tijd.

**Schermindeling**

- Midden boven: het plaatje op een vierkante kaart met grasgroene rand (dezelfde kaart als de
  plaatje-opgave van Vis).
- Daaronder: het voorbeeldwoord (als het aan staat) en de klankvakjes. De vakgrootte volgt uit het
  aantal vakjes (`--vakjes`), zoals de woordkaart van Vis dat van `--letters` afleidt, zodat ook
  *tandenborstel* met 13 vakjes op één rij past; de klank in het vakje schaalt op zijn beurt mee met
  het aantal tekens, zodat *eeuw* er net zo goed in staat als *m*.
- Linksboven terugknop, rechtsboven geluid. Onderin: blaadjes als sessieteller (boven tien een
  mierenhoop met getal) en het hint-toetsenbord met letters.
- Bovenbalk, drie groepen met een scheidingslijntje, zoals Raketje en Vis:

  | Groep | Knoppen | Toetsen |
  |-------|---------|---------|
  | Niveau | kleine mier / grote mier / puike mier — drie mieren in drie maten, met de woordenlijsten van Vis (§5.5) | `1` `2` `3` |
  | Lettersoort | schrijfletters en blokletters; dezelfde iconen als Aapje en Vis | `4` `5` |
  | Hulpmiddel | **voorbeeldwoord** aan/uit, standaard uit | `6` |

  Niveaus en lettersoorten zijn hier net als bij Vis losse schakelaars die vrij te combineren zijn
  (meerdere tegelijk aan, minstens één aan; sinds fase 15, §5.5). Bij Mier hoort daar één keuze bij
  die Vis niet heeft: als beide lettersoorten aan staan, bepaalt de soort alleen hoe het getypte
  woord in de vakjes wordt getoond — het kind typt sowieso gewone lettertoetsen.

  **Toetsen: opgelost met cijfers.** Het ontwerp stelde `K`/`G`/`P` voor de niveaus en `S`/`B` voor de
  lettersoort voor, zodat `S` in elk taalonderdeel de schrijfletter zou zijn. Bij de bouw bleek dat
  niet te kunnen: bij Mier zijn **alle 26 letters antwoord**, dus een druk op `k` moet de letter `k`
  in het vakje zetten en niet het niveau omzetten (denk aan *kip*, *geit*, *pop*, *sok*, *bus*).
  Daarom staan de schakelaars op de cijfers `1` t/m `6` — precies de oplossing die Aapje al gebruikt
  voor zijn vier lettersets, en om dezelfde reden. Cijfers zijn bij Mier nooit antwoord.

- **Voorbeeldwoord** is het hulpmiddel van Mier, wat de kralen zijn voor Raketje (§5.3): staat het
  aan, dan staat het woord klein boven de vakjes en schrijft het kind het over. Standaard uit; aan te
  zetten door de ouder of leerkracht voor een kind dat nog niet zelf spelt, en weer uit zodra het
  hoeft. Het vangt ook het geval op dat een plaatje niet eenduidig te benoemen is.

**Lege vakjes verraden het aantal klanken.** Dat is een bewuste keuze: het kind ziet waar het aan
begint en wanneer het klaar is, net zoals de letterdoos met zijn vakjes een overzichtelijk kader
geeft. Wie het strenger wil, kan later een schakelaar toevoegen die de vakjes weglaat.

**Wat er nieuw bij kwam.** `js/mier.js` (spelloop), `css/mier.css`, een vijfde scherm in
`index.html`, `Woorden.klanken`, `Woorden.klankKlasse` en `Woorden.Woordzak` in `js/woorden.js`,
drie mier-animaties in `js/animaties.js`, het geluid *trippel* in `js/audio.js`, en acht iconen:
mier klein/groot/puik, blaadje, mierenhoop, voorbeeldwoord, de mier als speelfiguur en de mier met
blaadje voor het menu (het ontwerp telde er zeven; het menu-icoon kwam erbij, net als bij Vis, dat
naast `visFiguur` een eigen menu-icoon met bubbels heeft). Hergebruikt zijn de 168 plaatjes, de drie
woordenlijsten, het hint-toetsenbord, de teller, de letterkleuren en beide lettersoorten. Het menu
kreeg een vierde knop en daarmee een 2×2-raster (§11).

**Animaties** (1,4 s, drie varianten zoals de andere onderdelen)

1. De mier tilt het afgemaakte woord op, draagt het naar rechts weg en een blaadje vliegt naar de teller.
2. De mier loopt met een blaadje boven zijn kop over het scherm.
3. De mier klimt op de laatste klank en zwaait met zijn voelsprieten.

Rust-animatie: de voelsprieten bewegen, de mier trippelt op zijn plaats (ook in het menu).

---

## 6. Visueel ontwerp

### 6.1 Stijl

- Cartoonesk, dikke ronde lijnen, felle maar zachte kleuren, veel wit/crèmekleurige ruimte.
- Alles groot: knoppen 96 × 96 px, de letter/som vult ~40 % van de schermhoogte. Sinds fase 8 schaalt de knopmaat mee met de vensterbreedte (`clamp(76px, 7.5vw, 96px)`): vanaf 1280 px breed is dat de volle 96 px, op 1024 px 77 px, zodat alle schakelaars in de bovenbalk zichtbaar blijven.
- Responsief van 1024 px breed tot 4K; layout op basis van `vh`/`vw` en `clamp()`.

### 6.2 Kleurenpalet (voorstel)

| Rol | Kleur | Hex |
|-----|-------|-----|
| Achtergrond | Warm crème | `#FFF8E7` |
| Klinker | Montessori-blauw | `#2F6FB5` |
| Medeklinker | Montessori-roze/rood | `#E8607A` |
| Aapje | Bruin / lichtbruin | `#8B5A2B` / `#D9A066` |
| Raketje | Rood / grijs / oranje vlam | `#E63946` / `#B8C0CC` / `#FF9F1C` |
| Goed | Frisgroen | `#4CAF50` |
| Neutraal / uit | Lichtgrijs | `#C8C8C8` |
| Accent (sterren, bananen) | Zonnig geel | `#FFD23F` |
| Vis (rand opgavekaart, niveau-ring, spelvorm-iconen) | Zeegroen / licht zeegroen | `#2A9D8F` / `#D9F2EA` |
| Visje | Oranje / donkeroranje | `#FF9F1C` / `#B85C00` |
| Mier (rand plaatjeskaart, actief klankvakje, niveau-ring, blaadje) | Grasgroen / licht grasgroen | `#6AA84F` / `#E4F1DA` (donker `#3F7A2E`) |
| De mier zelf | Roodbruin / donkerbruin | `#A0522D` / `#5A2D12` |
| ✅ Boom (Aapje, fase 16) | Bladgroen / licht bladgroen; de stam in aapjebruin | `#7CB86A` / `#CFE8C3`; stam `#8B5A2B` |
| ✅ Ruimte (Raketje, fase 16) | Hemel heel licht lavendel (géén donkere nacht: de achtergrond blijft crème en de som blijft het contrastrijkste in beeld); planeten in zachte paletkleuren | `#ECEBFA` hemel; planeten o.a. `#E8607A` `#FFD23F` `#8FD3FF` `#B39DDB` |
| ✅ Rif (Vis, fase 16) | Water lichtblauw, zand, koraal roze en paars, waterplanten grasgroen | `#DFF3FB` / `#F3E3B8` / `#FF6F91` `#9B5DE5` / `#6AA84F` |
| ✅ Nest (Mier, fase 16) | Aarde en uitgegraven kamers; per ronde een laag dieper; confetti in de paletkleuren | `#C9A882` / `#B08D63` aarde, `#F6E7C8` kamer |

### 6.3 Iconenlijst (alle als eigen SVG) ✅ allemaal getekend in `js/icons.js` (fase 4; toetsenbord fase 10; Vis fase 12; Mier fase 14 — 45 iconen)

| Icoon | Betekenis | Waar |
|-------|-----------|------|
| Aapje met letterblokje | Start taalspel | Hoofdmenu |
| Raket met cijfers | Start rekenspel | Hoofdmenu |
| Huisje met pijl | Terug naar menu | Aapje, Raketje |
| Luidspreker / luidspreker-doorgestreept | Geluid aan/uit | Overal |
| Vier pijltjes naar buiten | Volledig scherm | Hoofdmenu |
| Toetsenbord (blauw, toetsenrijen en spatiebalk) | Toetsenbord op het scherm aan/uit (aanraakstand) | Hoofdmenu |
| `+` `−` `×` `÷` in gekleurde cirkels | Operator aan/uit | Raketje |
| Slotje | Vergrendelde schakelaar (stond t/m fase 12 op de `+`; sinds fase 13 nergens meer in gebruik, het icoon staat nog in `icons.js`) | – |
| Klein / groot / superraketje (drie maten) | Niveau klein / groot / super | Raketje |
| Banaan, bananentros | Sessieteller | Aapje |
| Ster | Sessieteller | Raketje |
| Toets-blokjes | Hint-toetsenbord | Beide |
| `a` `A` in schrijfletters, `a` `A` in blokletters (bruine cirkels) | Letterset aan/uit | Aapje |
| Kralentrap 1-2-3 | Montessori-kralen aan/uit | Raketje |
| Visje met bubbels | Start woordenspel | Hoofdmenu |
| Visje (klein, groot) en haai | Niveau kleine vis / grote vis / haai | Vis |
| Kaartje met woordlijn en drie plaatjes; kaartje met plaatje en drie regels (zeegroene cirkels) | Spelvorm woord → plaatje / plaatje → woord aan/uit | Vis |
| `a` in schrijfletters, `a` in blokletters | Lettersoort (dezelfde iconen als bij Aapje) | Vis |
| Schelp, schatkist | Sessieteller | Vis |
| Visje met staart en vin (klassen voor animatie) | Speelfiguur | Vis |
| Mier met blaadje | Start woorden-bouwen | Hoofdmenu |
| Mier klein / groot / puik (drie maten) | Niveau kleine / grote / puike mier | Mier |
| Blaadje, mierenhoop | Sessieteller | Mier |
| Kaartje met woordlijn boven drie lege vakjes (grasgroene cirkel) | Voorbeeldwoord aan/uit | Mier |
| Mier met voelsprieten en poten (klassen voor animatie) | Speelfiguur | Mier |
| ✅ Boom met tien takken (drie varianten: loofboom, palm, apenbroodboom) en de bananentros in de top | Wereld van Aapje (fase 16) | Aapje |
| ✅ Tien planeten (maan met kraters, rode planeet, ringplaneet, gestreepte gasreus, ijsblauwe planeet, groene planeet met één boom, planeet met een gezichtje, komeet, paarse planeet met twee maantjes, aarde), zachte sterren, vlaggetje | Wereld van Raketje (fase 16) | Raketje |
| ✅ Rifstukken (rood koraal, paars waaierkoraal, waterplanten, zeewier, anemoon met clownvisje, zeester, rots met krab, schelpenbank, luchtbellen uit het zand, scheepswrak) en de schatkist die opengaat | Wereld van Vis (fase 16) | Vis |
| ✅ Tien nestkamers (zaden, eitjes, larven, paddenstoelen, water, bladeren, afval, slapende mier, wortel, werkmieren) en de koninginnenkamer; grasrand; zaadje, wortelboog, wortelvezel met balanceerstokje, kroontje, stofwolk, confetti, twee kleine mieren | Wereld en kunstjes van Mier (fase 16) | Mier |

Daarnaast bevat `js/plaatjes.js` de 168 woordplaatjes van Vis (§5.5), in dezelfde stijl maar los van de iconenlijst. De decor-tekeningen van fase 16 (drie bomen, tien planeten, tien rifstukken met de schatkist, en de circusattributen) staan net zo in een eigen bestand `js/decor.js` ✅ — 33 tekeningen.

### 6.4 Typografie

- **Schrijfletters**: gekozen schoolschrift-font (§4.3), alleen voor de te raden letter; hoofdletters komen uit hetzelfde font.
- **Blokletters** (drukletters, letterset 3 en 4): een geometrische schreefloze letter *van de computer zelf*, met de enkelvoudige `a` en `g` van het Montessori-drukletteralfabet. Fontstapel in `fonts.css`: `Century Gothic` (staat op Windows-pc's met Office), dan `Futura`, `Avenir Next`, `Questrial`, `Verdana`, `Segoe UI`, `Arial`, `sans-serif`. Bewust niet ingesloten: Century Gothic mag niet meegeleverd worden en een tweede base64-font zou de app onnodig zwaar maken. Zonder een van deze fonts kiest de browser een eigen schreefloze letter (dan is de `a` dubbel); de schrijfletters, de standaardkeuze, staan daar los van.
- **Cijfers en operatoren**: een ronde, duidelijke sans-serif zonder verwarrende vormen (open `4`, `1` zonder voet, duidelijk verschil `6`/`9`). Voorkeur voor een gebundeld OFL-font (bijv. Nunito of Fredoka, base64 in CSS). Systeemterugval: `Segoe UI Rounded`, `Arial Rounded MT Bold`, sans-serif.

---

## 7. Animaties en geluid

### 7.1 Aapje-animaties (SVG + CSS keyframes, ~1,5 s) ✅ fase 5: alle vier gebouwd, duur 1,4 s

Willekeurig één van de varianten, zodat het niet verveelt:

1. Aapje springt op en juicht, banaan vliegt naar de teller.
2. Aapje slingert aan een liaan over het scherm.
3. Aapje maakt een salto en landt op de letter.
4. Aapje eet een banaan en klopt op zijn buik.

Rust-animaties: knipperen, staart wiegt.

✅ *Fase 16 (§7.6):* de varianten 1 t/m 3 zijn de *manier* waarop het aapje naar de volgende tak van de boom klimt (springen, slingeren, salto); variant 4 (*eten*) is opgegaan in de finale `tros` in de top, bij de bananentros.

### 7.2 Raketje-animaties (~1,5 s) ✅ fase 5: alle drie gebouwd, duur 1,4 s

1. Raket stijgt op met rook en vlam, ster valt naar de teller.
2. Raket maakt een looping.
3. Raket vliegt langs een planeet of maan.

✅ *Fase 16 (§7.6):* de drie varianten zijn de manier waarop de raket naar de volgende planeet vliegt; de losse maan van variant 3 komt alleen nog in beeld als er geen wereld is (de proefpagina), want in het spel staat de volgende planeet er al. De vierde variant is de finale `thuis`: landen op de aarde in een sterrenregen.

### 7.4 Vis-animaties (~1,4 s) ✅ fase 12: alle drie gebouwd

1. Visje springt op uit het water (boog met draai), spetters bij de start; schelp vliegt naar de teller.
2. Visje zwemt naar de goede kaart, keert om (spiegelt) en zwemt terug.
3. Visje blaast zes bubbels die opstijgen en wiebelt van plezier.

Rust-animatie: wiegt zachtjes, staart zwaait heen en weer (ook in het menu).

✅ *Fase 16 (§7.6):* de drie varianten zijn de manier waarop het visje naar het volgende rifstuk zwemt (springend, zwemmend, bubbels blazend). De vierde is de finale `schat`: een rol van plezier met glinstersterretjes bij de schatkist.

### 7.5 Mier-animaties (1,4 s) ✅ fase 14: alle drie gebouwd

1. De mier tilt het afgemaakte woord op en draagt het naar rechts het beeld uit; blaadje vliegt naar de teller.
2. De mier loopt met een blaadje boven zijn kop naar de vakjes en weer terug.
3. De mier klimt op de laatste klank en zwaait met zijn voelsprieten.

Rust-animatie: trippelt op zijn plaats, voelsprieten bewegen (ook in het menu).

✅ *Fase 16 (§7.6):* er zijn zeven kunstjes bij gekomen (tien varianten in totaal). Ze zijn tegelijk de manier waarop de mier een kamer verder komt: de grond schuift mee, dus een koprol rolt vooruit en een handstand is lopen op je voorpoten. Elk tiende woord is de grote finale `finale`, de elfde variant.

### 7.3 Geluid (Web Audio, gesynthetiseerd) ✅ fase 5: zeven geluiden in `js/audio.js`; fase 12: *blub* erbij; fase 14: *trippel* erbij

| Moment | Geluid |
|--------|--------|
| Goed | Korte vrolijke drieklank omhoog (do-mi-sol) |
| Fout | Zacht, laag "boing", nooit hard of schril |
| Animatie | Korte "whoosh" (raket), aapje-"oe-oe" (synthetische toon met vibrato), "blub" (vis: twee korte bubbeltoontjes omhoog) of "trippel" (mier: drie heel korte tikjes, als pootjes) |
| Knop klikken, en bij Mier elke goede letter in een vakje | Zachte klik/pop |
| Toggle aan/uit | Toon omhoog / omlaag |
| ✅ Reisstap en aankomst (fase 16) | *klim* (aapje: drie zachte plopjes omhoog), *aankomst* (raket: korte glijtoon omhoog met een tik bij de landing), *plons* (vis: de bestaande *blub* een toon lager, bij het nieuwe rifstuk) |
| ✅ Kunstje en finale (fase 16) | *tromroffel* (mier: acht heel korte tikjes, verwant aan *trippel*) bij elk kunstje; *tada* (drieklank omhoog met een hoge slottoon) bij elke finale, bij alle vier de onderdelen. `Geluid.speel(naam, na)` kreeg er een tweede argument bij: het aankomstgeluid klinkt 0,6-0,75 s later, precies als de figuur bij zijn nieuwe station aankomt. |

Standaard staat geluid aan; het luidspreker-icoon onthoudt de stand alleen binnen de sessie (geen opslag, conform keuze).

### 7.6 Meegroeiende werelden (fase 16) ✅ gebouwd 21 sept 2026

**Idee.** Tot nu toe is de beloning bij elk goed antwoord telkens hetzelfde soort ding: de figuur doet
1,4 s iets leuks en staat daarna weer op zijn plek; alleen de teller onderin groeit. In fase 16 krijgt
elk onderdeel een **wereld die meegroeit** met de goede antwoorden, zodat het kind ziet dat het ergens
komt: het aapje klimt steeds een tak hoger in een boom, de raket vliegt van planeet naar planeet, het
visje zwemt steeds verder door een rif met koraal en waterplanten, en de mier doet bij elk goed
antwoord loopt de mier een kamer verder door zijn ondergrondse nest, terwijl hij een kunstje doet.
De beloning blijft kort (1,4 s, invoer geblokkeerd) en rustig; de kaart met de opgave blijft het
middelpunt van het scherm.

**Gedeelde regels**

- **Rondes van tien.** Een wereld heeft tien *stations* (takken, planeten, rifstukken): precies de
  tien losse iconen van de sessieteller (`Teller.MAX_LOS`). Het tiende goede antwoord is een
  **finale**: het aapje pakt de bananentros in de top, de raket komt weer thuis op aarde, het visje
  vindt de schatkist, de mier doet het grote slotnummer. Daarna begint een nieuwe ronde in een nét
  andere wereld (een andere boom, een ander stuk heelal, een ander stuk rif), zodat het ook na twintig
  of vijftig antwoorden niet stilstaat en nooit van het scherm af raakt. De finale valt samen met het
  moment dat de teller vol is: teller en wereld vertellen hetzelfde verhaal. (De tros en de schatkist
  *op de teller* verschijnen bij het elfde antwoord, als de tien losse iconen niet meer passen.)
- **De stand volgt uit de teller.** De wereld heeft geen eigen toestand; de stand is een pure functie
  van het aantal goede antwoorden: `Wereld.stand(n)` geeft `{ aantal: n, station: n % 10,
  ronde: ⌊n / 10⌋, finale: n > 0 && n % 10 === 0 }`. Zo blijft de wereld staan na een bezoek aan het menu (net als de
  teller), kan `Escape` tijdens een stap niets kapotmaken (bij `binnen()` wordt de wereld opnieuw uit
  de teller gezet) en is alles zonder DOM te testen. Er wordt nog steeds niets opgeslagen: elke start
  begint bij station 0.
- **De reis is de beloning.** Bij Aapje, Raketje en Vis is de 1,4 s-animatie de **stap naar het
  volgende station**. De bestaande varianten blijven bestaan als de *manier* van reizen: het aapje
  springt, slingert aan een liaan of maakt een salto naar de volgende tak; de raket vliegt recht, met
  een looping of langs de maan naar de volgende planeet; het visje springt, zwemt of blaast bubbels
  onderweg naar het volgende rifstuk; de mier komt met zijn kunstje vooruit — omdat de grond onder
  hem meeschuift, rolt een koprol vooruit, rolt hij mee op het zaadje en is een handstand lopen op
  zijn voorpoten. Nooit twee keer dezelfde manier achter elkaar (`Animaties.kies`). Het
  beloningsicoon vliegt zoals nu naar de teller.
- **De wereld schuift, de figuur blijft in beeld.** Bij Raketje en Vis blijft de figuur ongeveer op
  zijn plek rechtsonder en schuift het decor één station naar links (de camera volgt de figuur); zo
  raakt de figuur nooit de som of de kaarten en past het op elk schermformaat. Bij Aapje klimt het
  aapje wél echt omhoog, langs een boom aan de rechterrand; de boom is zo getekend dat tien takken
  tussen de onderrand en ongeveer 12 vh onder de geluidsknop passen.
- **Decor achter, figuur voor.** Het decor komt in een nieuwe laag `.wereld` (`position: absolute`,
  achter `.figuur` en `.effecten`, `aria-hidden`), in zachte lichte kleuren (§6.2: pastel, lage
  dekking), zodat de opgavekaart het contrastrijkste ding in beeld blijft (Montessori: rustige
  beloning, §1). Het decor beweegt alleen tijdens de stap; in rust staat het stil, op de bestaande
  rust-animatie van de figuur en een paar kleine sfeerdetails na (een wiegend waterplantje, een
  twinkelende ster), allemaal langzamer dan 0,5 Hz (§8: nooit sneller dan 3 Hz).
- **De layout-eis blijft.** Figuur, boom, planeten en rif mogen de opgavekaart, de som, de
  keuzekaarten, de klankvakjes, de teller en de hint niet raken: dezelfde eis als in fase 4, te meten
  op de negen formaten uit fase 14. Op een telefoon rechtop wordt het decor smaller (`css/mobiel.css`);
  past het écht niet, dan wordt de wereld daar verborgen en blijft alleen de stap-animatie van de
  figuur over.
- **Geen schakelaar.** De balken van Raketje en Vis zijn met acht en zeven knoppen vol (§11). Het
  decor staat altijd aan. Wijst de kindtest uit dat het afleidt, dan komt er een knop in het menu
  naast geluid en volledig scherm (toets `W`), standaard aan.

**Aapje: de boom** (`wereld: 'boom'`)

Een boom aan de rechterrand van het speelveld, met tien takken om en om links en rechts van de stam
en in de top een bananentros. Het aapje zit bij de start onder aan de stam, op zijn huidige plek. Bij
elk goed antwoord klimt het één tak hoger (springend langs de stam met zwaaiende armen en benen,
slingerend aan een liaan naar de volgende tak, of met een salto omhoog en een landing op de tak) en
blijft daar zitten, met zijn rust-animatie (knipperen, staart wiegt) op de nieuwe plek. Bij het tiende
antwoord pakt het de bananentros (die is dan ook op de teller verschenen), eet een banaan (bestaande
variant *eet*) en glijdt langs de stam terug naar beneden, terwijl de boom van vorm wisselt voor de
volgende ronde: loofboom, palm, apenbroodboom met rode blaadjes (drie varianten, om de beurt). De
positie van tak `k` staat in `Wereld.BOOM.takken[k]` als fractie van de hoogte plus links/rechts van
de stam; `animaties.js` zet daaruit `--dx`/`--dy` voor de klim, en het aapje krijgt zijn
**thuispositie** via `--thuis-x`/`--thuis-y` in plaats van de vaste hoek. In de boom is het aapje een
slag kleiner (13 vh in plaats van 17 vh), zodat tien takken passen.

**Raketje: de planetenreis** (`wereld: 'ruimte'`)

Een smalle strook lichte sterrenhemel langs de **rechterrand**, met de planeten onder elkaar: de
planeet waar de raket nu is onderin bij de raket, de volgende erboven. Bij elk goed antwoord vliegt de
raket (recht, met een looping, of langs de maan) **omhoog** naar de planeet erboven, terwijl de hemel
één station **zakt**; zo komt de bereikte planeet bij de raket uit, krijgt hij een klein vlaggetje en
blijft de raket ervoor wiegen.

*Bij de bouw anders gelopen dan in het ontwerp:* het ontwerp zette de planeten naast elkaar en liet de
hemel naar links schuiven. De som staat echter middenin het scherm en is bij het superraketje breed
(`100 − 37 = 100`); een horizontale strook zou daar dwars doorheen lopen. De rechterrand is de enige
strook die op elk schermformaat vrij blijft — en een raket die omhoog vliegt is bovendien
natuurlijker, want hij staat al met zijn neus omhoog. Alleen de richting is dus veranderd, niet het
idee. Bij Vis kon de horizontale strook wél: daar was de onderste 18 vh al voor het visje
gereserveerd.

Tien stations per ronde: maan met kraters, rode planeet, ringplaneet, gestreepte gasreus, ijsblauwe
planeet, kleine groene planeet met één boom, planeet met een gezichtje, komeet met staart, paarse
planeet met twee maantjes, en als tiende **de aarde**. De aarde is tegelijk het beginpunt van de
ronde (station 0) en de thuiskomst aan het eind ervan: `RUIMTE.planeetVoor(ronde, station)` geeft op
station 0 dus de aarde. De negen fantasieplaneten schuiven per ronde één plaats op, zodat elke ronde
anders begint. De planeten zijn eenvoudige SVG-cirkels met een paar details, in de stijl van de
bestaande `maan`; alleen maan, ringplaneet en aarde zijn herkenbaar getekend.

**Vis: het rif** (`wereld: 'rif'`)

Achter het visje een zeebodem: een lichtblauwe waterlijn boven, zand onder, en een rij **rifstukken**
die per stap één positie naar links schuiven. Elke stap brengt een nieuw stuk uit een shuffle-bag
(`Wereld.RIF.stukken`): rood koraal met vertakkingen, paars waaierkoraal, groene waterplanten die
wiegen, lang zeewier, een anemoon met een klein clownvisje, een zeester op het zand, een rots met een
krab, een schelpenbank, een stroom luchtbelletjes uit het zand, een scheepswrak. Bij het tiende
station staat altijd de **schatkist**, die opengaat en glinstert wanneer het visje aankomt. Het rif
schuift bij elke stap één plaats naar links: het stuk waar het visje nu is staat nét links van hem,
het volgende wacht half buiten beeld rechts. Het visje zelf blijft op zijn plek en doet zijn gewone
sprong, zwemslag of bubbels.

Omdat het rif naar links schuift, komt het visje naar **rechts** vooruit. De tekening in `icons.js`
kijkt naar links, dus de speelfiguur wordt gespiegeld (`.figuur-vis > svg { transform: scaleX(-1) }`);
anders lijkt het visje achteruit te zwemmen. De spiegeling staat op de `<svg>` en niet op de `<div>`,
zodat alle animaties ongewijzigd op de div blijven staan. Bij de zwem-variant draait het visje op de
heenweg naar de kaart om (`--heen`) en komt het met de neus naar rechts weer thuis; de bubbels komen
uit zijn mond aan de rechterkant. De niveau-iconen in de balk (kleine vis, grote vis, haai) blijven
naar links kijken: dat zijn symbolen op een knop, geen zwemmend visje. De waterplanten wiegen zachtjes in rust (langzame `rotate`, ≤ 0,5 Hz). Per ronde
verandert de tint van het water iets (ondiep licht, dieper turquoise, weer licht), zodat te zien is
dat er een nieuwe ronde begint.

**Mier: het ondergrondse nest** (`wereld: 'nest'`)

Onderin het speelveld, in dezelfde strook die al voor de mier gereserveerd was, ligt een **doorsnede
van zijn nest**: uitgegraven kamers met gangen ertussen, onder een grasrand. De mier kijkt naar links
(zo is hij getekend, met zijn kop naar de klankvakjes), dus hij loopt naar links en het nest schuift
naar **rechts** — spiegelbeeldig aan het rif van Vis, zodat de twee werelden niet op elkaar lijken.
De kamers zijn even breed als de strook hoog is, zodat ze naadloos op elkaar aansluiten, en de strook
loopt rond: er staat precies één ronde in beeld, als een kaart van het nest.

Negen kamers komen uit een shuffle-bag (voorraadkamer met zaden, kraamkamer met eitjes, larvenkamer,
paddenstoeltuin, waterkamer, bladerkamer, afvalkamer, een slapende mier, een wortel die door het
plafond groeit, en twee werkmieren); op station 0 staat altijd de **koninginnenkamer**. Elke ronde
ligt het nest een laag dieper: de aarde wordt donkerder (drie tinten).

Bij elk afgemaakt woord loopt de mier een kamer verder en doet daarbij een **kunstje**. De drie
bestaande animaties (dragen, lopen, klimmen) blijven, en er zijn zeven kunstjes bij gekomen, zodat er
tien varianten zijn: nooit twee keer dezelfde achter elkaar, en het tiende woord van een ronde is
altijd de **grote finale** in de koninginnenkamer.

| # | Kunstje | Wat er te zien is (1,4 s) | Effecten (laag `.effecten`) |
|---|---------|---------------------------|------------------------------|
| 1 | Koprol | de mier maakt een salto voorover en landt weer op zijn zes poten | stofwolkje bij de landing |
| 2 | Balanceren op een zaadje | een rond zaadje rolt onder de mier heen en weer, de mier wiegt mee met zwaaiende voelsprieten | zaadje |
| 3 | Door de wortelboog | een boog van een plantenwortel staat in de gang, de mier springt er in een boog doorheen | wortelboog; een paar sterretjes |
| 4 | Jongleren | drie blaadjes gaan in een boog van poot naar poot boven zijn kop | drie `blaadje`-iconen op een ellipsbaan |
| 5 | Koorddansen | een wortelvezel loopt van de mier naar de rij klankvakjes; de mier trippelt er wiebelend overheen en terug | vezel en een balanceerstokje |
| 6 | Handstand | de mier gaat op zijn voorpoten staan, de achterpoten wapperen | – |
| 7 | Trapeze | de mier slingert aan een draadje aan het plafond van de gang heen en weer (zoals de liaan van het aapje) | draadje |
| 8 | Draag (bestaand) | tilt het woord op en draagt het weg | blaadje naar de teller |
| 9 | Loop (bestaand) en Klim (bestaand) | loopt met een blaadje over het scherm / klimt op de laatste klank | blaadje |
| 10 | **Grote finale** (elk tiende woord) | in de koninginnenkamer komen twee kleine mieren aanlopen en vormen met de mier een piramide; de bovenste maakt een buiging en tilt het kroontje op | twee extra mieren, kroontje, confettiregen in de paletkleuren |

Geluid: bij elk kunstje een korte *tromroffel* en bij de finale een *tada* (§7.3). De finale is ook
bij de andere drie onderdelen het moment voor de *tada*.

**Wat ervoor nodig is (code)**

- Nieuw `js/wereld.js`: `Wereld.stand(n)`, de stationslijsten per wereld (`BOOM.takken` en de drie
  boomvarianten, `RUIMTE.planeten` met de volgorde per ronde, `RIF.stukken` als shuffle-bag met de
  schatkist vast op station 10), `Wereld.maak(container, naam)` met `zetStand(stand)` (tekent het
  decor voor die stand, zonder animatie) en `stap(van, naar)` (de schuif- of klimanimatie van 1,4 s).
  De pure functies staan los van de DOM, zodat ze in `test/test.html` te testen zijn.
- Nieuw `js/decor.js`: de SVG-tekeningen van de bomen (3), planeten (10), rifstukken (10 plus de
  schatkist), de elf nestkamers met hun gangen, de grasrand en de attributen voor de kunstjes
  (zaadje, wortelboog, wortelvezel, balanceerstokje, kroontje, stofwolk, sterretje), in de stijl van
  `js/icons.js`: dikke ronde lijn, vlakke zachte kleuren, geen `id`'s, geen tekst. Vis en Mier delen
  de schuiflogica in `wereld.js` (`maakStrook`); alleen de richting, de lijst en de tekeningen
  verschillen.
- `js/animaties.js`: `speel` krijgt `wereld` en `stand` mee en kiest per figuur de reisvariant (of de
  finale); zeven nieuwe mier-varianten in `VARIANTEN.mier`; `kies` geeft bij `stand.finale` altijd
  de finale; `stop` ruimt ook een lopende wereld-stap op.
- `css/aapje.css`, `raketje.css`, `vis.css`, `mier.css`: de laag `.wereld`, de thuispositie via
  `--thuis-x`/`--thuis-y`, de nieuwe keyframes; `css/mobiel.css`: smaller of verborgen decor op een
  telefoon.
- `js/aapje.js`, `raketje.js`, `vis.js`, `mier.js`: in `goed()` de stand uit `teller.waarde()`
  doorgeven aan `Animaties.speel`; in `binnen()` de wereld op de stand van de teller zetten.
- `js/audio.js`: *klim*, *aankomst*, *plons*, *tromroffel* en *tada* (§7.3).
- `index.html`: één `<div class="wereld" id="…-wereld" aria-hidden="true">` per speelveld, vóór de
  laag `.effecten`.
- `test/test.html`: zie §10, fase 16.
- `README.md`: een alinea per onderdeel over de wereld, bij oplevering.

**Volgorde van bouwen.** De vier stappen 16a t/m 16d zijn in één keer gebouwd en samen opgeleverd
(21 sept 2026); zie het bouwverslag in §13. De opdeling bleef wel zichtbaar in de code: `wereld.js` en
`decor.js` zijn per wereld gescheiden en elk kunstje van Mier staat los in `VARIANTEN.mier`, zodat er
later een kunstje of een wereld bij kan zonder de rest te raken.

---

## 8. Toegankelijkheid en kindveiligheid

- Alles met toetsenbord bedienbaar; zichtbare focusring in kindvriendelijke stijl (dikke gele rand).
- Kleur nooit het enige signaal: klinker/medeklinker ook herkenbaar aan het kaartje (blauwe vs. roze rand), goed/fout ook via beweging en geluid.
- Geen knipperende beelden sneller dan 3 Hz.
- Geen externe links, geen netwerkverzoeken, geen tracking.
- `aria-label`s op alle iconenknoppen (voor ouders/leerkracht met schermlezer).
- Bedienbaar met muis, toetsenbord én aanraakscherm (fase 10): tiktoetsen minstens 44 px hoog, geen functie die van `:hover` afhangt.

---

## 9. Fasering en planning

| Fase | Inhoud | Resultaat / acceptatie |
|------|--------|------------------------|
| **0. Opzet** (½ dag) ✅ **klaar 8 sept 2026** | Mappenstructuur, `index.html` met drie schermen, `base.css`, schermwisseling in `app.js`, terugknop en `Escape`. Menu: `A`/`1`, `R`/`2`, pijltjes + Enter, muisklik. Backspace en spatie afgevangen. | ✅ Menu → Aapje → menu → Raketje → menu werkt met muis en toetsen (geautomatiseerd gecontroleerd in Chrome vanaf `file://`; handmatige check in Edge en Firefox nog doen). |
| **1. Font en letters** (½-1 dag) ✅ **klaar 8 sept 2026** | Fonts gedownload, proefpagina `test/fontproef.html` naast `letters.png`, keuze Lusletters + ss01, base64 in `fonts.css`, `letters.js` met klinker/medeklinker en shuffle-bag, tests in `test/test.html`. | ✅ Alle 26 letters in de goede vorm en kleur zichtbaar in de proefpagina; 13 tests voor `letters.js` slagen. |
| **2. Aapje speelbaar** (1 dag) ✅ **klaar 8 sept 2026** | Letter tonen, toetsafhandeling, goed/fout, schudden, bananenteller, hint-toetsenbord na 2 fouten, placeholder-animatie (aapje springt, 1,3 s). | ✅ Spelloop werkt; Shift/hoofdletter geeft goed antwoord; cijfers tellen niet als poging; toetsen tijdens animatie genegeerd (geautomatiseerd gecontroleerd in Chrome). |
| **3. Raketje speelbaar** (1 dag) ✅ **klaar 8 sept 2026** | `sommen.js` met 45 tests, operator-toggles (+ vergrendeld met slotje; slot eraf in fase 13), niveau-schakelaar, automatisch controleren, sterrenteller, hint, placeholder-animatie (raket stijgt op, 1,3 s). | ✅ Alle generatorregels uit §5.2 aangetoond via `test/test.html` (10.000 sommen per operator en niveau); spelloop werkt, dubbelklik op toggle geeft geen dubbele actie. |
| **4. Iconen en visueel** (1-2 dagen) ✅ **klaar 8 sept 2026** | Alle 21 SVG-iconen getekend (§6.3), kleurenpalet en zachte stippenachtergrond, layout op 1024×768 t/m 2560×1440 en half scherm, idle-animaties (aapje knippert en wiegt met zijn staart, raket wiegt met flakkerende vlam, ook in het menu). | ✅ Geen tekst nodig (alleen cijfers in het sommetje); alle knoppen ≥ 96 px op alle geteste formaten, niets buiten beeld, figuur overlapt kaart/som niet. |
| **5. Animaties en geluid** (1-2 dagen) ✅ **klaar 8 sept 2026** | Aapje: spring, liaan, salto, eet. Raket: lancering (met rook), looping, langs de maan. Banaan/ster vliegt naar de teller. Zeven Web Audio-geluiden, luidsprekerknop op elk scherm, fullscreen-knop in het menu. | ✅ Alle varianten 1,4 s; toetsen tijdens animatie worden genegeerd; nooit twee keer dezelfde variant achter elkaar (getest). |
| **6. Testen met kind** (½ dag + iteratie) ✅ **klaar 8 sept 2026** | Sessie met het kind (6 jaar); geluiden en animaties beoordeeld. | ✅ Volgens de observatie van Peter: geluiden en animaties werken goed en het kind begrijpt de app. Geen aanpassingen nodig gebleken. |
| **7. Oplevering** ✅ **klaar 8 sept 2026** | Map opgeschoond (lege `assets/svg/` weg), handleiding `LEESMIJ.md` geschreven (sinds fase 11 `README.md`), zip van de app gemaakt (22 bestanden, 352 KB; sinds fase 11 vervangen door de GitHub-repo). | ✅ Uitgepakte kopie van de zip: 65 tests groen en `index.html` zonder consolefouten in Chrome; in Firefox tests groen, menu en schrijfletters correct. Edge kon niet geautomatiseerd worden gestart; handmatig openen in Edge op de doel-pc blijft aan te raden. |
| **8. Hoofdletters, blokletters en kralen** (½ dag) ✅ **klaar 8 sept 2026** | Vier letterset-schakelaars bij Aapje (§5.2), Montessori-kralen als visueel hulpmiddel bij Raketje (§5.3), nieuw `js/kralen.js`, vijf nieuwe iconen, meeschalende knopmaat. | ✅ 89 tests groen (24 nieuwe); 23 gedragschecks in Chrome (klikken en toetsen); layout gemeten op 1024×768, 1366×768 en 1920×1080 met 100 kralen en hint in beeld: niets buiten beeld. |
| **9. Superraket en vrije lettersets** (¼ dag) ✅ **klaar 8 sept 2026** | Derde niveau bij Raketje (superraketje: plus en min t/m 100), alle instellingen in de middenbalk; de vier lettersets bij Aapje vrij te combineren (ook alleen hoofdletters), alleen de laatste blijft aan. | ✅ 109 tests groen (20 nieuwe); 27 gedragschecks in Chrome; gemeten op 1024×768 en 1366×768 met de langste som (`100 − 0 = 100`) en 100 kralen: niets buiten beeld, som overlapt de raket niet. |
| **10. Tablet en telefoon** (½ dag) ✅ **klaar 9 sept 2026** | Aanraakstand (§4.5): hint-toetsenbord permanent en tikbaar, wistoets bij de cijfers, automatisch aan op tablet/telefoon, toetsenbordknop in het menu (`T`); `css/mobiel.css` voor smalle en lage schermen; `manifest.webmanifest` en iconen voor het beginscherm; hosting-uitleg in de handleiding. | ✅ 121 tests groen (12 nieuwe); 36 gedragschecks in Chrome; pc-opmaak op 1024, 1366 en 1920 px gemeten gelijk aan fase 9; op 390×844, 360×780, 844×390, 768×1024, 820×1180 en 1180×820 niets buiten beeld. Nog te doen: op een echte iPad en iPhone proberen. |
| **11. GitHub-repo en naam** (¼ dag) ✅ **klaar 9 sept 2026, plan bijgewerkt 10 sept** | App onder de naam **Letter en Cijfer-app** (titel, manifest, README) in de openbare repo `psohl/letter-en-reken-app`; `LEESMIJ.md` hernoemd naar `README.md`; `letters.png` en de zip-opleveringen niet in de repo; GitHub Pages aan op `main`. | ✅ 27 bestanden in de repo, precies de structuur van §4.2; 121 tests groen vanaf `file://` in Chrome (10 sept 2026); `https://psohl.github.io/letter-en-reken-app/` antwoordt met de app; README en app.js-commentaar op 10 sept bijgewerkt (zie §13). |
| **12. Vis: woorden lezen** (1 dag) ✅ **klaar 10 sept 2026** | Derde onderdeel naast Aapje en Raketje (§5.5): twee spelvormen (woord → plaatje, plaatje → woord), drie niveaus (kleine vis, grote vis, haai) volgens de leerlijn lezen van groep 3, 56 woorden per niveau met onderbouwing in `woordenlijst-vis.md`, 168 eigen SVG-plaatjes in `js/plaatjes.js`, schrijf- of blokletters, klinkers blauw en medeklinkers rood, schelpenteller, drie visanimaties, negen nieuwe iconen, menu met drie knoppen. | ✅ 152 tests groen (31 nieuwe); 37 gedragschecks in Chrome; layout gemeten op 1024×768 en 1366×768 en op telefoon- en tabletformaten: niets buiten beeld, visje raakt de kaarten niet; alle 168 plaatjes visueel beoordeeld op contactbladen. |
| **13. Plus vrij uit te zetten** (< ¼ dag) ✅ **klaar 10 sept 2026** | Bij Raketje is de `+` niet meer vergrendeld: alle vier de operatoren zijn los aan en uit te zetten, met als enige regel dat er minstens één aan blijft (zoals de lettersets bij Aapje sinds fase 9). Slotje weg uit `index.html`. | ✅ 154 tests groen (5 nieuwe, 3 oude vervangen); 22 gedragschecks in Chrome; screenshot met alleen `÷` aan: drie grijze schakelaars, geen slotje, deelsom in beeld. |
| **14. Mier: woorden bouwen** (1 dag) ✅ **klaar 14 sept 2026** | Vierde onderdeel (§5.6): het bewegend alfabet. Plaatje in beeld, kind typt het woord in klankvakjes (één vakje per klank, tweetekenklanken bij elkaar); drie niveaus met de woordenlijsten van Vis; voorbeeldwoord als hulpmiddel, standaard uit; blaadjesteller, drie mier-animaties, acht nieuwe iconen, geluid *trippel*, menu met vier knoppen in een 2×2-raster. Nieuw in de code: `Woorden.klanken`, `Woorden.SPLITSINGEN`, `Woorden.Woordzak` en de proefpagina `test/klankproef.html`. Schakelaars op de cijfers `1`-`6`, want alle letters zijn antwoord. | ✅ 196 tests groen (28 nieuwe); 64 gedragschecks in Chrome; alle 168 woorden gesplitst met één handmatige uitzondering (*pannenkoek*), beoordeeld op `test/klankproef.html`; layout gemeten op 1024×768, 1366×768 en 1920×1080 en op telefoon- en tabletformaten (390×844, 360×780, 844×390, 768×1024, 820×1180, 1180×820) met *tandenborstel* (13 vakjes), het voorbeeldwoord en de hint in beeld: niets buiten beeld, de rij vakjes raakt de mier en de teller niet; menu met vier knoppen op alle formaten in beeld. |
| **15. Niveaus en lettersoorten vrij te combineren** (< ¼ dag) ✅ **klaar 14 sept 2026** | Bij Raketje zijn de drie raketjes en bij Vis de drie vissen niet langer één keuze maar losse schakelaars: **meerdere niveaus tegelijk** aan mag, met als enige regel dat er minstens één aan blijft (zoals de operatoren sinds fase 13). Bij Vis geldt hetzelfde voor schrijf- en blokletters: allebei tegelijk aan kan, de opgaven wisselen dan af. | ✅ 168 tests groen (14 nieuwe); 21 gedragschecks in Chrome; screenshots met drie raketjes aan, drie vissen aan en allebei de lettersoorten aan. |
| **16. Meegroeiende werelden en circuskunstjes** (1 dag) ✅ **klaar 21 sept 2026** | Per onderdeel een wereld die met de goede antwoorden meegroeit, in rondes van tien (§7.6). Vier losse stappen: **16a** gedeelde basis (`js/wereld.js`, `js/decor.js`, laag `.wereld`, `Wereld.stand`, vijf geluiden) plus **Aapje** klimt in de boom (tien takken, drie bomen, bananentros als finale); **16b Raketje** reist van planeet naar planeet (tien planeten, aarde als finale); **16c Vis** zwemt door het rif (tien rifstukken uit een shuffle-bag, schatkist als finale); **16d Mier** loopt door zijn ondergrondse nest (elf kamers, koninginnenkamer als finale) terwijl hij een kunstje doet (zeven nieuwe varianten, grote finale met mierenpiramide en confetti). | ✅ 254 tests groen (58 nieuwe); 53 gedragschecks in Chrome, waaronder de layout op de negen formaten uit fase 14 (§10); screenshots van de vier werelden op 1366×768. Kindtest staat nog open. |

Totaal ca. 8-10 werkdagen doorlooptijd bij deeltijdinzet voor alle fases; de fases 2 en 3
zijn onafhankelijk en kunnen parallel. Fase 15 is een kleine uitbreiding die niet op fase 14 hoefde
te wachten en daarom eerder is gebouwd; fase 14 is daarna afgerond. Fase 16 kostte één dag in plaats
van de geraamde 2-3: de vier werelden delen zo veel (`Wereld.stand`, de decorlaag, de manier van
stappen) dat de laatste drie elk nog maar weinig eigen code nodig hadden.

### 9.1 Latere uitbreidingen (buiten fase 1)

- Tweetekenklanken (ee, oo, oe, eu, ui, ij, au, ou, ei, ie, ng, ch) met aan/uit-icoon; kind typt twee toetsen. ✅ *Gedaan in fase 14*: in Mier is een tweetekenklank één klankvakje waarin het kind twee (of drie) toetsen typt (§5.6). Een aan/uit-icoon was niet nodig: de klanken volgen uit het woord.
- ✅ *Gedaan in fase 8:* hoofdletters en blokletters als alternatieve lettersets (§5.2).
- Voortgang opslaan in `localStorage` met avatar-keuze voor meerdere kinderen.
- Woordjes typen (klankzuivere mkm-woorden: b-oo-m) als tweede taalspel. ✅ *Gedaan in fase 12 en 14*: Vis laat het kind woorden **lezen** en kiezen uit drie (§5.5), Mier laat het kind bij een plaatje het woord **intoetsen** in klankvakjes, met dezelfde woordenlijsten (§5.6).
- 📋 *Overwogen als vierde onderdeel, niet gekozen (14 sept 2026):* een rekenspel met het **gouden materiaal** (losse kraal = 1, staafje = 10, plaat = 100, kubus = 1000): hoeveelheid omzetten in een getal en omgekeerd. Dat vult het andere gat in de app — Raketje oefent bewerkingen, geen getalbegrip en plaatswaarde — en zou de app op twee taal- en twee rekenonderdelen brengen. De kraalweergave uit `js/kralen.js` en de cijferinvoer met auto-controle uit Raketje zijn herbruikbaar; nieuw zijn de gouden vormen als SVG en een generator. Blijft de sterkste kandidaat voor een vijfde onderdeel.
- Vis: eigen klankopnames of voorgelezen woorden; een vierde niveau met niet-klankzuivere woorden (groep 4); de woordenlijst uitbreiden of per kind aanpassen.
- ✅ *Gedaan in fase 8:* Montessori-kralen als visueel hulpmiddel bij de sommen (§5.3). Een getallenlijn is niet gemaakt.
- Eigen klankopnames per letter (Montessori-klank) als geluid later toch gewenst is.
- ✅ *Gedaan in fase 16 (21 sept 2026):* een wereld die met de goede antwoorden meegroeit (boom, planeten, rif) en circuskunstjes voor de mier (§7.6). Denkbare vervolgstappen: de wereld ook klein in het menu tonen (een boompje bij de aapjeknop met het aapje op de bereikte tak), en de bereikte ronde onthouden in `localStorage` als de voortgang toch ooit wordt opgeslagen.

---

## 10. Testplan

**Automatisch (test/test.html, draait in browser)**

- ✅ 10.000 gegenereerde sommen per operator en per niveau (klein, groot, super): nooit negatief, nooit boven het maximum, delingen altijd opgaand, nooit twee keer dezelfde som achter elkaar, beide volgordes bij + en ×, triviale sommen < 4 %. Extra voor super: uitkomsten komen boven 20 en boven 50, aftrektallen boven 20 en aftrekgetallen boven 10, en nooit boven 100.
- ✅ Shuffle-bag: na 26 trekkingen is elke letter precies één keer voorgekomen; nooit dezelfde letter twee keer achter elkaar.
- ✅ Auto-controle: tabel met 14 invoerreeksen (`"1"` → wacht, `"15"` → goed, `"2"` → fout, `"0"` bij antwoord 0 → goed, `"07"` → fout, ...).
- ✅ Kaartenzak (fase 8/9): met alle vier de lettersets aan komt over 1040 kaartjes elke letter 40× en elke set 260× voorbij, nooit dezelfde letter twee keer achter elkaar, en de getoonde vorm hoort altijd bij de set; elke set kan ook los aan staan, en de laatst aangezette set is niet uit te zetten.
- ✅ Kralen (fase 8/9): over 30.000 gegenereerde sommen (4 operatoren × 3 niveaus) klopt het kralenmodel altijd met de som (wat blijft staan is het antwoord; bij delen `a` kralen in `b` staafjes), nooit een staafje langer dan tien kralen, hoogstens 10 rijen en 22 kolommen.
- ✅ keyboardHint.js (fase 10): 26 lettertoetsen in drie rijen, 10 cijfertoetsen in de groepjes 1-5 en 6-0 plus wistoets; in de pc-stand stuurt een klik niets; in de aanraakstand komt een tik aan als `keydown` met de juiste `key` (letter, cijfer, `Backspace`), een tik naast de toetsen doet niets, en `zetTikbaar(false)` maakt het weer een stille hint.
- ✅ woorden.js en plaatjes.js (fase 12): drie niveaus met minstens 50 woorden, geen dubbele, alleen a-z; kleine vis voldoet aan het (m)k(m)-patroon met één klinkerteken, grote vis heeft een tweetekenklank of cluster en één lettergreep, haai minstens twee lettergrepen; elk woord heeft een plaatje en geen plaatje bevat tekst, `id`, `<use>` of externe verwijzingen; letterkleuren (ij als klinker); opgavezak over 1120 opgaven: drie verschillende keuzes uit het niveau met het woord op de plek van `antwoord`, elk woord even vaak, nooit hetzelfde woord twee keer achter elkaar, goede antwoord op alle drie de plekken; beide vormen aan → om en om; lege of onbekende vormen en niveaus genegeerd; afleiders bij haai lijken altijd op het woord.
- ✅ Klanken en woordzak (fase 14, Mier): `Woorden.klanken` splitst alle 168 woorden zo dat samenvoegen het woord teruggeeft en elk deel één letter is of in de tekenlijst `KLANKEN` staat; de bekende gevallen zijn los getest (*maan* = m-aa-n, *sneeuwpop* met eeuw, *touw* met ouw, *konijn* met ij, *papegaai* met aai, *bank*/*ring* met nk en ng, *schaap* als s + ch, en *pannenkoek* uit `SPLITSINGEN`); elke handmatige splitsing hoort bij een woord uit de lijst en levert dat woord op; het langste woord heeft 13 vakjes; `klankKlasse` geeft klinkers (ook aa, oe, eeuw, ij) blauw en ch/ng/nk rood. De `Woordzak` geeft elk woord even vaak, nooit twee keer hetzelfde achter elkaar, altijd met de klanken van dat woord; met twee niveaus aan wisselen die om en om (300/300 over 600), een lege of alleen-onbekende niveaulijst wordt geweigerd en `zetNiveau` zet er precies één aan.
- ✅ Meerdere niveaus tegelijk (fase 15): bij `Sommen.Generator` met klein én super aan komen beide niveaus ongeveer even vaak voorbij, nooit een derde, en elke som blijft binnen het maximum van *zijn eigen* niveau; bij `Woorden.Opgavezak` met klein én haai aan wisselen de niveaus elkaar om en om af (300/300 over 600 opgaven), komen de afleiders altijd uit het niveau van het woord en komt nooit twee keer hetzelfde woord achter elkaar. Bij allebei: een lege of alleen-onbekende niveaulijst wordt geweigerd (de stand blijft staan), de lijst staat altijd in de vaste volgorde klein-groot-super/haai, en `zetNiveau(naam)` zet er precies één aan.
- ✅ Fase 16, `wereld.js`, `decor.js` en `animaties.js` (58 tests): `Wereld.stand(n)` geeft voor n = 0..35 station `n % 10`, ronde `⌊n / 10⌋` en `finale` alleen bij 10, 20 en 30, en vangt een negatieve of lege waarde op; het aantal stations is gelijk aan `Teller.MAX_LOS`; de tien takposities liggen binnen 0..1, lopen op en liggen om en om links en rechts van de stam; de boomvarianten en de watertinten wisselen per ronde en herhalen zich pas na alle drie; elke ronde van de planetenreis heeft alle tien planeten precies één keer met de aarde als tiende én op station 0, en de rondes beginnen niet allemaal hetzelfde; de rifzak geeft over tien rondes (90 stukken) elk rifstuk precies negen keer, nooit twee keer hetzelfde achter elkaar, en de schatkist alleen op het tiende station; hetzelfde geldt voor de kamers van het mierennest met de koninginnenkamer, waarbij het nest de andere kant op schuift dan het rif en de hele strook vult; alle 33 decor-tekeningen bestaan en bevatten geen tekst, `id` of externe verwijzing; `Animaties.kies('mier')` geeft over 1000 lotingen alle tien kunstjes, nooit twee keer dezelfde achter elkaar, en met een finale-stand altijd de finale van die figuur (en nooit bij een gewone stand); `Animaties.speel` met een wereld erbij duurt nog steeds 1400 ms, zet de afstand naar de volgende tak, en `Animaties.stop` laat geen effect, geen animatieklasse en geen lopende wereld-stap achter; de vier werelden bouwen hun decor (tien takken plus kruin en tros, vier planeten met één vlaggetje, vier rifstukken met zand en water, de piste).

**Handmatig (checklist)**

- ✅ Chrome en Firefox: start vanaf `file://` zonder foutmeldingen (headless gecontroleerd). Edge: niet geautomatiseerd te controleren op deze pc; op de doel-pc handmatig openen.
- Toetsenbord: letters, Shift + letter, Caps Lock, numpad, bovenste cijferrij, Backspace, Escape, F11.
- Muis: alle knoppen; dubbelklik geeft geen dubbele actie.
- ✅ Gedragstest fase 8/9 (geautomatiseerd in Chrome, 27 checks): letterset-schakelaars via klik en toets `1`-`4`, basisset niet uit te zetten, dubbelklik geeft één actie, hoofdletter op de kaart wordt met de kleine letter goed beantwoord, kralen aan/uit via klik en `H`, kralen kloppen met plus/min/keer/deel-sommen en blijven staan na een bezoek aan het menu. Fase 9 erbij: de schrijfletter kan uit zolang er een andere soort aan staat, de laatste soort blijft altijd aan (klik en toets), de drie niveauknoppen werken via klik en `K`/`G`/`S`, supersommen blijven onder 100 en het niveau blijft staan na een bezoek aan het menu.
- ✅ Gedragstest fase 10 (geautomatiseerd in Chrome, 36 checks): aanraakstand uit op een pc; aan via de menuknop en via `T`, dubbelklik geeft één actie; bij Aapje staat het toetsenbord meteen in beeld, een foute tik geeft nog geen hint, twee foute tikken laten de juiste toets pulseren, een goede tik telt een banaan, tikken tijdens de animatie worden genegeerd, na de animatie komt een nieuwe letter en blijft het toetsenbord staan; bij Raketje is de wistoets zichtbaar, een juist eerste cijfer blijft staan, de wistoets wist het, na twee fouten pulseert het eerste cijfer en springt de hint naar het tweede, het volledige antwoord geeft een ster; in de pc-stand doet een tik niets en is de wistoets weg.
- ✅ Gedragstest fase 12 (geautomatiseerd in Chrome, 37 checks): `V` en `3` openen Vis, pijltjes in het menu lopen over drie knoppen; beginstand woord-vorm / kleine vis / schrijfletters; opgave toont het woord met gekleurde letters en drie plaatjeskaarten; foute klik vervaagt de kaart en schakelt hem uit, geen hint na één fout, tweede fout via cijfertoets laat de goede kaart pulseren; goed via toets telt een schelp, start een visanimatie, toetsen tijdens de animatie worden genegeerd, daarna nieuwe opgave met schone kaarten en opgeruimde effecten; pijltjes verplaatsen de focus; `P`/`W` en klikken schakelen de vormen (laatste blijft aan, dubbelklik één actie), `B`/`S` de lettersoort, `H`/`G`/`K` en klikken het niveau; Escape tijdens de animatie ruimt op, instellingen en schelpen blijven staan na een bezoek aan het menu.
- ✅ Gedragstest fase 13 (geautomatiseerd in Chrome, 22 checks): beginstand alleen `+` aan, zonder slotje of `aria-disabled`; klik en toets `+` op de enige aanstaande soort doen niets; `−` erbij en dan `+` uit laat alleen `−` over en geeft meteen een minsom; klik en toets op de laatste soort doen niets en de som blijft staan; via `*` en `-` alleen `×` over, drie goed beantwoorde sommen zijn allemaal keersommen en geven drie sterren; dubbele toets `+` geeft één actie; alle vier aan en dan alle vier uit klikken laat de laatste (`÷`) aan met een deelsom; de stand blijft na een bezoek aan het menu.
- ✅ Gedragstest fase 14 (geautomatiseerd in Chrome, 64 checks): het menu heeft vier knoppen in een 2×2-raster, `M` en `4` openen Mier, pijltje rechts loopt over alle vier en omhoog gaat een rij terug; beginstand kleine mier / schrijfletters / voorbeeldwoord uit; de opgave toont een plaatje met één leeg vakje per klank en het eerste vakje is actief; een goede letter verschijnt en de invoer springt door, een foute letter laat het vakje schudden zonder te verschijnen en wist niet wat al goed staat, na één fout nog geen hint en na twee fouten pulseert de juiste toets; een tweetekenklank neemt twee toetsen in één vakje en houdt één kleur; Backspace haalt eerst de halve klank weg en daarna het vorige vakje; een afgemaakt woord geeft een blaadje, groene vakjes en een mier-animatie waarin toetsen genegeerd worden, daarna een nieuw woord met lege vakjes en opgeruimde effecten; de letters `k`, `g`, `s`, `b` en `h` schakelen niets (ze zijn antwoord), de cijfers `1`-`6` wel; het laatste niveau en de laatste lettersoort zijn niet uit te zetten, een dubbelklik telt één keer, het niveau van het woord in beeld uitzetten geeft meteen een nieuw woord, met beide lettersoorten aan wisselen de woorden af, het voorbeeldwoord komt boven de vakjes; Escape tijdens de animatie ruimt op en instellingen en blaadjes blijven staan; boven tien blaadjes komt de mierenhoop met een getal; layout op negen formaten met *tandenborstel* in beeld.
- ✅ Gedragstest fase 16 (geautomatiseerd in Chrome, 53 checks): bij Aapje staat het aapje na één goed antwoord hoger in de boom, met zijn voeten precies op de tak (gemeten op ±8 px), en na tien antwoorden weer op de onderste tak van een andere boom; het tiende antwoord speelt de finale `tros`; toetsen tijdens de stap geven geen tweede banaan; `Escape` tijdens een stap ruimt de effecten op en na terugkomst klopt de boom weer met de teller. Bij Raketje staan er vier planeten in beeld met één vlaggetje, zakt de hemel tijdens de stap één station, staat de raket daarna bij de volgende planeet, en is het tiende antwoord de thuiskomst op aarde. Bij Vis schuift het rif tijdens de stap naar links, komt er per antwoord een nieuw rifstuk bij het visje, komen er negen verschillende stukken in een ronde voorbij, gaat de schatkist open bij het tiende en verandert daarna de watertint. Bij Mier staat het nest over de hele breedte in beeld, staat de mier met zijn pootjes op de vloer van de kamer waar hij is, schuift het nest tijdens de stap naar rechts, brengt elk antwoord hem in een volgende kamer (negen verschillende in een ronde), komt hij bij het tiende en twintigste antwoord in de koninginnenkamer die dan oplicht, ligt het nest in ronde drie een laag dieper, en komen over twintig woorden minstens acht verschillende kunstjes voorbij zonder herhaling achter elkaar, met de grote finale op woord tien en twintig. Layout op de negen formaten uit fase 14: decor en figuur blijven in beeld en raken kaart, som, keuzekaarten, klankvakjes, teller en hint niet. Geen consolefouten.
- 📋 Kindtest fase 16: kijkt het kind na het antwoord naar de wereld of blijft het bij de opgave? Leidt het decor af tijdens het typen (dan schakelaar in het menu, §7.6)? Begrijpt het kind de finale bij tien en wil het doorspelen voor de volgende ronde?
- ✅ Gedragstest fase 15 (geautomatiseerd in Chrome, 21 checks): Raketje begint met alleen het kleine raketje aan, groot en super erbij geven drie rode ringen en `aria-pressed="true"` op alle drie, de generator kent alle drie, de som in beeld hoort altijd bij een aangezet niveau, klein er weer uit laat groot en super staan en de laatste is niet uit te zetten; Vis begint met alleen de kleine vis, haai en grote vis erbij geven drie groene ringen en de opgavezak kent alle drie, de laatste vis blijft aan; de blokletterknop erbij zet allebei de lettersoorten aan en zet het woord in beeld meteen in blokletters (geen `schrijfletter`-klasse meer over), hem weer uit zetten brengt de schrijfletters terug, de laatste soort is niet uit te zetten, en met allebei aan wisselen zes opeenvolgende opgaven netjes af (blok, schrijf, blok, ...).
- Tijdens animatie tikken: geen dubbele beloning, geen overgeslagen opgave. ✅ Ook getikt (fase 10).
- ✅ Geluid: beoordeeld tijdens de kindtest, werkt goed.
- Schermformaten: 1366×768 laptop, 1920×1080, 2560×1440, venster half scherm. ✅ Fase 10 (headless, niets buiten beeld): 390×844 en 360×780 (telefoon rechtop), 844×390 (telefoon liggend), 768×1024 en 820×1180 (tablet rechtop), 1180×820 (tablet liggend).
- Op een echte iPad en iPhone (Safari) en een Android-telefoon (Chrome), via het GitHub Pages-adres (§4.5): tikken, wistoets, "Zet op beginscherm", geluid na de eerste tik. Nog niet gedaan.
- ✅ Observatie met kind (6 jaar, 8 sept 2026): begrijpt de app; animaties en geluiden goed bevonden.

---

## 11. Risico's en aandachtspunten

| Risico | Maatregel |
|--------|-----------|
| Geen font komt goed genoeg overeen met `letters.png` | ✅ Opgelost: Lusletters + ss01 komt goed overeen; terugvaloptie (eigen SVG-letters) niet nodig. |
| Font laadt niet vanaf `file://` | ✅ Gedaan: font als base64 in `fonts.css`; werkt in Chrome vanaf `file://`. |
| Web Audio start niet zonder gebruikersactie | ✅ Gedaan: `Geluid.ontgrendel()` bij de eerste pointerdown/keydown; `speel` maakt anders alsnog de context aan vanuit de toets-handler. |
| Browser vangt toetsen af (Backspace, spatie, F-toetsen) | `preventDefault` op relevante toetsen in het spel; fullscreen-icoon aanbieden. |
| Kind tikt te snel door tijdens animatie | Invoer negeren tot animatie klaar is (of alleen de laatste toets bufferen). |
| Antwoord `0` of één cijfer bij niveau groot | Auto-controle op prefix maakt dit eenduidig, getest in `test.html`. |
| Sommen tot 100 zijn te moeilijk voor het kind | Het superraketje is een keuze van de ouder/leerkracht en staat nooit standaard aan; klein en groot blijven ernaast staan. Bij plussen en minnen over het tiental helpen de kralen (§5.3). |
| Acht knoppen in de middenbalk van Raketje wordt onoverzichtelijk | Drie groepen met een scheidingslijntje ertussen (sommen / niveau / hulpmiddel); rechtsboven staat alleen nog het geluid. Gemeten: past vanaf 1024 px breed. |
| Blokletters hangen af van de fonts op de pc | Fontstapel met `Century Gothic` vooraan (§6.4); de schrijfletters zitten ingesloten en blijven de standaardkeuze. Op een nieuwe pc `test/fontproef.html` openen en kijken of de blokletter-`a` enkelvoudig is. |
| Hoofdletters in schrijfschrift wijken af van wat de klas schrijft | De hoofdletters komen ongewijzigd uit Lusletters en zijn niet nagetekend; ze staan in `test/fontproef.html` naast `letters.png`. Klopt een vorm niet, dan die set uitlaten. |
| Vijf schakelaars in de bovenbalk passen niet op 1024 px breed | ✅ Opgelost in fase 8: `--knop-min` schaalt met `clamp(76px, 7.5vw, 96px)`; gemeten op 1024, 1366 en 1920 px: niets buiten beeld. |
| Kralen vullen bij 10 × 10 het hele speelveld | ✅ Opgelost: de kraalgrootte volgt uit `--rijen`/`--kolommen`, de som wordt kleiner als de kralen aan staan; gemeten met hint in beeld op 1024×768. |
| Zelf tekenen van alle iconen kost meer tijd dan gepland | ✅ Alle iconen zijn getekend als eenvoudige vormen met dikke lijnen; verdere verfijning is optioneel na de kindtest. |
| Op een tablet of telefoon is er geen toetsenbord | ✅ Fase 10: aanraakstand met een tikbaar toetsenbord op het scherm (§4.5). Geen invoerveld, dus geen systeemtoetsenbord dat de som bedekt. |
| Safari op de iPhone kent geen volledig scherm voor webpagina's | ✅ De knop verbergt zichzelf; via "Zet op beginscherm" (manifest) opent de app zonder browserbalken. |
| De app moet online staan om op een telefoon te werken | ✅ Fase 11: de repo staat via GitHub Pages online (§4.5); `file://` op de pc blijft werken. Netlify Drop als alternatief staat in `README.md`. |
| Test op een echt apparaat ontbreekt nog | Headless Chrome meet tikken en maten, maar bootst iOS-Safari niet na. Op een iPad en iPhone het GitHub Pages-adres openen; let op geluid na de eerste tik en op de wistoets. |
| `letters.png` in de repo | Staat er wel in (zie §4.2). De klasreferentie is geen onderdeel van de app; wil Peter hem er niet in, dan `git rm letters.png` en `test/fontproef.html` toont een leeg plaatje bij "Referentie". |
| Een woordplaatje van Vis is niet duidelijk voor het kind | Alle 168 plaatjes zijn op contactbladen beoordeeld; de minst sterke (mug, jas, zak, reus, neus, touw, egel, pauw) staan in het voortgangslog. `test/plaatjesproef.html` toont ze per niveau. Bij de kindtest letten op welke plaatjes twijfel geven en die hertekenen of het woord vervangen in `js/woorden.js`. |
| Twee woorden in één niveau passen bij hetzelfde plaatje | Synoniemen (*kat*/*poes*) zijn uit één niveau gehouden; lookalikes (*kip*/*haan*, *boom*/*bos*) zijn verschillend getekend. De afleiders komen alleen uit het eigen niveau. |
| De haai is te moeilijk of te makkelijk | Het niveau is een keuze van de ouder/leerkracht; de drie niveaus volgen de leerlijn van groep 3 (`woordenlijst-vis.md`) en zijn zo in de code (`Woorden.LIJST`) aan te passen. |
| Zeven schakelaars in de balk van Vis passen niet op 1024 px | Gemeten: past (kleinste knop 77 px), net als de acht van Raketje. |
| Kindtest voor Vis en Mier ontbreekt nog | Zoals bij fase 8-10 nog niet gedaan; zie §13. Bij Mier vooral letten op de tweetekenklank in één vakje. |
| **Fase 14:** een woord automatisch in klanken splitsen lukt niet voor alle 168 woorden | ✅ Opgelost: de greedy match op de geordende tekenlijst dekt 167 van de 168 woorden. Alleen *pannenkoek* ging mis (pannen-koek werd p-a-n-n-e-**nk**-oe-k) en staat nu met de hand in `Woorden.SPLITSINGEN`. *touw* (ouw), *sneeuwpop* (eeuw), *schaap* (s + ch), *konijn* (ij), *papegaai* (aai), *bank* (nk) en *ring* (ng) gaan vanzelf goed. Alle splitsingen staan op `test/klankproef.html` en in de tests; de terugvaloptie (één vakje per letter) was niet nodig. |
| **Fase 14:** het plaatje is niet eenduidig te benoemen, en anders dan bij Vis bepalen de keuzes het woord niet | Het hulpmiddel **voorbeeldwoord** (§5.6) zet het woord in beeld en is daarmee ook de uitweg bij een onduidelijk plaatje; daarnaast pulseert na twee fouten de juiste toets. Bij de kindtest noteren welke plaatjes twijfel geven (nog te doen, zie §13). |
| **Fase 14:** vier menuknoppen passen niet naast elkaar op 1024 px | ✅ Opgelost: het menu is altijd een 2×2-raster (vier naast elkaar past op geen enkel pc-scherm) en blijft één kolom op een telefoon rechtop (≤ 700 px). Knopmaat `min(30vw, 30vh, 380px)`, zodat ook twee rijen in de hoogte passen; op een telefoon liggend is de minimummaat 110 px. Gemeten op negen formaten: niets buiten beeld. |
| **Fase 14:** toetsbotsing tussen de onderdelen | ✅ Opgelost, maar anders dan voorgesteld: bij Mier zijn *alle* letters antwoord, dus `K`/`G`/`P` en `S`/`B` konden niet. De schakelaars staan op de cijfers `1` t/m `6` (§5.1, §5.6), net als de lettersets van Aapje; cijfers zijn bij Mier nooit antwoord. Vastgelegd in §5.1 en in de README-toetsentabel. |
| **Fase 14:** het langste woord (*tandenborstel*, 13 vakjes) past niet op een klein scherm | ✅ Opgelost: de vakgrootte volgt uit `--vakjes` en de schermbreedte, de klank in het vakje schaalt mee met het aantal tekens. Gemeten met 13 vakjes: 67 px per vakje op 1024×768, 26 px op een telefoon rechtop; de rij raakt de mier noch de teller. Op een telefoon liggend (844×390) zijn kaart, vakjes en de mier daarvoor een slag kleiner (`css/mobiel.css`). |
| **Fase 16:** het decor leidt af van de opgave (Montessori: rustige beloning) — *nog te beoordelen bij de kindtest* | Decor in lichte pastelkleuren met lage dekking, beweegt alleen tijdens de 1,4 s-stap en staat in rust stil (alleen de figuur en een wiegend plantje of twinkelende ster bewegen, ≤ 0,5 Hz); de opgavekaart blijft het contrastrijkste in beeld. Wijst de kindtest anders uit: schakelaar in het menu naast geluid (niet in de volle balken), standaard aan. |
| **Fase 16:** de figuur raakt na een paar stappen de kaart, de som of de knoppen | ✅ Opgelost: bij Raketje en Vis schuift de wereld en blijft de figuur op zijn plek; bij Aapje lopen de tien takken tot 70 % van de hoogte en is het aapje in de boom een slag kleiner (13 vh). Daar bovenop houdt `Wereld.maak` de figuur altijd binnen het speelveld: klimmen tot buiten de boven- of rechterrand wordt afgekapt. Gemeten op de negen formaten uit fase 14 met het aapje op de hoogste tak: niets buiten beeld. *Wel blijven staan:* op een telefoon rechtop stond het aapje al vóór fase 16 met zijn schouder voor de hoek van de letterkaart (39 px op 390×844); dat is nu 31 px, dus iets minder. |
| **Fase 16:** eindeloze groei: na vijftig antwoorden is er geen boom of hemel meer over | ✅ Opgelost: rondes van tien met een finale, daarna een nieuwe ronde in een andere variant van de wereld; de stand is `n % 10`, dus het scherm raakt nooit vol. |
| **Fase 16:** de stand van de wereld en de teller lopen uit elkaar (`Escape` tijdens een stap, bezoek aan het menu) | ✅ Opgelost: geen eigen toestand, de wereld wordt bij `binnen()` en na elke stap uit `teller.waarde()` gezet (`Wereld.stand`); `Animaties.stop` ruimt ook een lopende wereld-stap op. Getest met `Escape` midden in een stap. |
| **Fase 16:** veel SVG in beeld maakt de app traag op een oudere tablet | Er staan hoogstens vier planeten of vier rifstukken tegelijk in de DOM en er wordt alleen met `transform` en `opacity` geanimeerd; de boom is één stam, tien takken en een kruin. In headless Chrome geen merkbare vertraging bij twintig antwoorden achter elkaar. Op een echte iPad nog te proberen (stond al open, §10). |
| **Fase 16:** tien kunstjes tekenen en animeren kost meer tijd dan gepland | ✅ Niet nodig gebleken: alle zeven nieuwe kunstjes en de finale zijn gebouwd. De opzet blijft staan: elk kunstje is een losse regel in `VARIANTEN.mier` met een eigen `@keyframes`, dus er kan er later een bij of af. |
| **Fase 16:** de finale wil meer tijd dan 1,4 s | De duur is 1,4 s gebleven, zodat het tempo van het spel gelijk blijft (§3) en alle vier de onderdelen hetzelfde ritme houden. Bij de kindtest letten op of de finale gehaast oogt; dan alsnog een `DUUR_FINALE` van 2,0 s, apart getest. |

---

## 12. Bronnen

- Tikketakketoetsenbord (Schoolit, letters herkennen en typen voor kleuters): https://schoolit.be/nieuws/platform/webtool-helpt-kinderen-spelenderwijs-met-toetsenbord-leren-typen/
- Montessori schuurpapieren letters, schrijfschrift (Heutink/Nienhuis): https://www.heutink.nl/product/schuurpapieren-letters-nienhuis-montessori-schrijfschrift/100_591144
- Montessoriwerkjes, schrijfletters of drukletters: https://montessoriwerkjes.nl/schrijfletters-of-drukletters/
- Fonts voor handschriftonderwijs (overzicht): https://syboor.eu/fonts/
- Lusletters (SIL OFL): https://syboor.eu/fonts/lusletters/
- Cogncur (open source, GitHub): https://github.com/syboor/cogncur
- Schoolschrift: https://syboor.eu/fonts/schoolschrift03/
- Welk font past bij welke schrijfmethode: https://syboor.eu/handschrift/artikelen/welk_font_welke_schrijfmethode
- Lettertypes zoals handschriften op school (Juffrouw Femke): https://juffrouwfemke.com/2021/01/27/lettertypes-zoals-handschriften-op-school/
- Letterapps voor groep 3 (Juf Jannie): https://www.jufjannie.nl/onderwijs-app-reviews/apps-per-leerlijn/lezen/
- Lollige Letters (letters en toetsenbord, 3-6 jaar): https://gamemeester.nl/games-en-applicaties/lollige-letters
- Rekenraket (gratis rekenen oefenen): https://www.rekenraket.com/
- Rekenkoning: https://rekenkoning.nl/
- Top 100 leerzame apps, rekenen (Meester Sander): https://meestersander.nl/meester-sanders-apps/top-100-leerzame-apps-voor-de-basisschool-versie-2018/nr-11-t-m-30-rekenen-top-100-leerzame-apps-voor-de-basisschool/

Leerlijn lezen groep 3 (fase 12, Vis); de volledige lijst staat in `woordenlijst-vis.md`:

- Syboor, decodeerbare woorden per kern bij Veilig leren lezen kim-versie: https://syboor.eu/woordjes/lijsten/kim_maan
- Syboor, decodeerbare woorden bij Lijn 3: https://syboor.eu/woordjes/lijsten/lijn3
- Beter leren lezen, AVI M3 en E3: https://www.beterlerenlezen.nl/page/leesniveau-m3 · https://www.beterlerenlezen.nl/page/leesniveau-e3
- Leerlijnen taal, tussendoelen technisch lezen start en vervolg: https://www.leerlijnentaal.nl/page/150/technisch-lezen-en-schrijven-start-en-vervolg.html
- Taal-oefenen.nl, klankzuivere mkm-woorden: https://www.taal-oefenen.nl/ondersteunende-materialen/spelling/woordkaarten/klankwoorden/klankzuivere-mkm-woorden
- Leerlijn maan technisch lezen, Veilig leren lezen kim-versie (pdf): https://obspwa.nl/wp-content/uploads/2018/04/vllkim-art-leerlijn-maan-technisch-lezen.pdf

---

## 13. Voortgangslog

### 8 september 2026 · Fase 0 en 1 afgerond

**Gemaakt**

- `taal-en-rekenapp/index.html`: drie schermen (menu, Aapje, Raketje) met placeholder-iconen (inline SVG) en terugknoppen; scripts zonder modules.
- `css/base.css` (kleurenpalet uit §6.2 als CSS-variabelen, knoppen ≥ 96 px, gele focusring, klinker-/medeklinkerkleuren), `css/menu.css`, `css/aapje.css` (letterkaart met gekleurde rand), `css/raketje.css` (som + invulvak).
- `js/app.js`: `App.registreer(naam, {binnen, buiten, toets})`, `App.toon(naam)`, globale `keydown`-afhandeling (§4.4): `event.key`, `repeat`/Ctrl/Alt/Meta genegeerd, `Escape` = menu, Backspace en spatie met `preventDefault`. Menu: `A`/`1`, `R`/`2`, pijltjes + Enter.
- `js/letters.js`: `Letters.LETTERS`, `isKlinker`, `kleurKlasse`, `schud` (Fisher-Yates, injecteerbare random), `ShuffleBag` (eerste letter van een nieuwe zak is nooit de laatste van de vorige), `nieuweLetterzak`.
- `css/fonts.css`: Lusletters als base64 plus klasse `.schrijfletter` (ss01 + text-stroke). `assets/font/`: origineel `lusletters.ttf` en `LICENTIE-Lusletters-OFL.txt`.
- `test/test.html`: 13 tests voor `letters.js` (elke letter precies één keer per zak, nooit twee keer dezelfde letter achter elkaar over 200 seeds × 20 zakken, zak met één item, `schud` laat origineel intact). `test/fontproef.html`: 26 letters in app-stijl naast `letters.png`.

**Gecontroleerd**

- Alle 13 tests groen in Chrome (headless, `file://`).
- Navigatie met toetsen en muis geautomatiseerd doorlopen: `a` → Aapje, `Escape` → menu, `2` → Raketje, Backspace geblokkeerd, terugknop → menu, `R` → Raketje, pijltje rechts verplaatst focus, klik op gefocuste knop opent Raketje, Ctrl+A en herhaalde toetsen genegeerd.
- Screenshots van menu, Aapje en Raketje op 1366×768 en van de fontproef bekeken.

**Nog te doen / aandachtspunten voor volgende fases**

- Handmatig openen in Edge en Firefox vanaf `file://` (console zonder fouten) staat nog open; alleen Chrome is geautomatiseerd getest.
- Bij het openen krijgt de eerste knop van een scherm programmatische focus, zodat Enter en pijltjes direct werken. Chrome toont daarbij de gele focusring ook bij muisgebruik; in fase 4 beoordelen of dat gewenst is.
- Placeholder-iconen (aapje, raket, huisje) zijn eenvoudige vormen; definitieve iconen in fase 4 (§6.3).
- `letters.png` is gekopieerd naar `taal-en-rekenapp/` zodat `test/fontproef.html` het kan tonen; het origineel staat één map hoger.

### 8 september 2026 · Fase 2 en 3 afgerond

**Gemaakt**

- `js/aapje.js`: spelloop Aapje. Letter uit de shuffle-bag, kaartkleur per klinker/medeklinker, goed → banaan + spring-animatie (1,3 s, invoer geblokkeerd), fout → kaart schudt, na 2 fouten pulseert de juiste toets op het hint-toetsenbord. Alleen letters a-z tellen als poging; hoofdletters gelden als kleine letters.
- `js/sommen.js`: `Sommen.maak(op, niveau, random)`, `Sommen.Generator` (actieve operatoren even vaak, plus altijd aan, nooit dezelfde som twee keer achter elkaar, triviale sommen meestal overgeslagen) en `Sommen.controleer(invoer, antwoord)` → `goed` / `wacht` / `fout`.
- `js/raketje.js`: spelloop Raketje met automatisch controleren, Backspace, operator-toggles (muis en toetsen `+ - * /`, ook `x` en `:`), niveau klein/groot (muis en toetsen `K`/`G`), sterrenteller, hint (eerste nog te typen cijfer pulseert en verspringt bij elk goed cijfer), raket-animatie. Als de operator van de huidige som wordt uitgezet, komt meteen een nieuwe som. Tweede klik op dezelfde toggle binnen 300 ms wordt genegeerd (dubbelklik).
- `js/keyboardHint.js` (QWERTY-rijen of cijferrij, hoofdletters zoals op de echte toetsen), `js/teller.js` (t/m 10 losse iconen, daarna tros/ster met getal), `js/icons.js` (alle iconen uit §6.3 als eenvoudige SVG, `Icons.vul()` vult `data-icoon`-elementen), `js/audio.js` (stub `Geluid.speel(naam)`; de aanroepen staan al in de spellen).
- CSS: gedeelde teller-, hint- en figuurstijlen plus schud/puls/pop-animaties in `base.css`; ruimte voor het hint-toetsenbord is altijd gereserveerd zodat het speelveld niet verspringt. Rustanimaties: aapje knippert, raket wiegt met flakkerende vlam.
- `app.js`: spelschermen krijgen focus op het scherm zelf (niet op de terugknop), zodat Enter/spatie tijdens het typen niet per ongeluk terug naar het menu gaat. Iconen worden bij start ingevuld.
- `test/test.html`: 58 tests (13 letters, 45 sommen) allemaal groen.

**Gecontroleerd**

- Geautomatiseerde spelsimulatie in Chrome: hint na 2 fouten met juiste puls, hoofdletter telt goed, cijfer telt niet als letterpoging, teller loopt op, toetsen tijdens animatie genegeerd, terug tijdens animatie sluit netjes af; Raketje: plus niet uit te zetten, alle toggles via toetsen, niveau wisselen geeft nieuwe som, klik + directe tweede klik geeft één actie, prefix-controle met tweecijferig antwoord, Backspace, fout schudt en wist, hint verspringt naar het tweede cijfer, teller toont ster met getal boven 10.
- Layout gemeten (header + speelveld + onderbalk = schermhoogte) op vensters van 1366×768, 1366×660 en 1920×1080: alles past, hint-toetsenbord valt niet buiten beeld.
- Screenshots van Aapje met hint, Raketje met hint en Raketje met 12 sterren bekeken.

**Nog te doen / aandachtspunten**

- Handmatige check in Edge en Firefox en met een echt toetsenbord (numpad, Caps Lock) staat nog open.
- Bij vensters lager dan ongeveer 550 px past de letterkaart (minimaal 260 px) niet meer naast header en onderbalk; het plan gaat uit van 1024 px breed en laptop-hoogtes, dus voorlopig geen actie.
- Geluid is nog een stub; fase 5 vult `audio.js` met Web Audio en voegt het luidspreker-icoon en fullscreen toe.
- Iconen zijn bewust simpel gehouden (§11); fase 4 tekent ze uit.

### 8 september 2026 · Fase 4 en 5 afgerond

**Gemaakt**

- `js/icons.js`: alle 21 iconen uit §6.3 in één stijl (aapjeskop, raket, huisje, luidspreker aan/uit, fullscreen aan/uit, banaan, bananentros, ster, vier operatoren, slotje, klein/groot raketje, maan, liaan, aapje-figuur met armen en staart, raket-figuur). Ogen, armen, staart en vlam hebben klassen zodat CSS ze kan animeren.
- Menu: luidspreker- en fullscreen-knop rechtsboven; blokje met schrijfletter `a` en blokje `1+2` op de grote knoppen; aapje knippert, raket wiegt.
- `js/animaties.js`: `Animaties.speel(figuur, opties)` kiest een variant (nooit dezelfde als de vorige), zet `--dx/--dy/--r` op de figuur, maakt tijdelijke effecten in een effectenlaag (vliegend beloningsicoon, liaan, banaan-hapje, vier rookwolken, maan) en ruimt na 1,4 s op. `Animaties.stop` ruimt direct op bij verlaten van het scherm. Varianten: aapje spring / liaan / salto / eet, raket lancering / looping / maan.
- CSS-keyframes per variant in `aapje.css` en `raketje.css`; de looping draait om een punt links van de raket met de neus steeds vooruit; salto landt op de letterkaart en eindigt op -360° zodat hij niet terugdraait.
- `js/audio.js`: Web Audio-synthese zonder bestanden: goed (do-mi-sol), fout (zachte lage boing), whoosh (ruis door glijdend bandfilter), oe-oe (twee stijgende tonen), klik, toggle aan/omlaag. AudioContext pas na eerste klik of toets; fouten in geluid kunnen het spel nooit breken.
- `js/app.js`: geluid aan/uit met drie gesynchroniseerde luidsprekerknoppen (stand alleen binnen de sessie), fullscreen aan/uit met wisselend icoon (knop verborgen als de browser het niet ondersteunt), klikgeluid bij navigatie.
- Layout: maten in `vh`/`vw` met `min()`/`clamp()`; letterkaart `min(40vh, 36vw)`; hint-toetsenbord en teller schalen mee; zachte stippen op de achtergrond, korrel op de letterkaart.
- `test/test.html`: 65 tests (7 nieuwe: varianten ≥ 3 per figuur, duur ≤ 1,5 s, nooit dezelfde variant achter elkaar, alle iconen bestaan).

**Gecontroleerd**

- 65 tests groen in Chrome vanaf `file://`.
- Op 1024×768, 1366×768, 1920×1080, 2560×1440 en 960×1040 (half scherm): alle knoppen ≥ 96 px, niets buiten beeld, balk + speelveld + onderbalk = schermhoogte, figuur overlapt kaart/som niet, geen JS-fouten.
- Alle zeven animatievarianten afgedwongen en halverwege bevroren gescreenshot; effecten (liaan, hapje, rook, maan, vliegend icoon) verschijnen op de juiste plek en zijn na terugkeer naar het menu opgeruimd. Twee gebreken hersteld: liaan werd te kort getekend (SVG `preserveAspectRatio="none"`), banaan bij "eet" zat achter het aapje (effectenlaag tijdelijk naar voren).
- Geluid: knop wisselt de stand op alle drie de schermen, `speel` met geluid uit is stil, alle zeven geluiden spelen zonder fout in headless Chrome (AudioContext beschikbaar).

**Nog te doen / aandachtspunten**

- Geluiden zijn nog niet met het oor beoordeeld; volume en klankkleur (`VOLUME` in `audio.js`) afstemmen tijdens de kindtest (fase 6).
- Fullscreen en `Escape`: in volledig scherm sluit de browser met Escape eerst het volledig scherm; daarna gaat een tweede Escape terug naar het menu. Dat is browsergedrag en is acceptabel.
- Handmatige controle in Edge en Firefox vanaf `file://` staat nog steeds open (fase 7).
- Fase 6 (observatie met het kind) en fase 7 (`LEESMIJ.md`, opschonen, zip) resteren.

### 8 september 2026 · Fase 6 en 7 afgerond: opgeleverd

**Fase 6 (kindtest)**

- Peter heeft geluiden en animaties met het kind (6 jaar) getest: alles werkt goed en het kind begrijpt de app. Geen wijzigingen nodig.

**Fase 7 (oplevering)**

- Map opgeschoond: lege map `assets/svg/` verwijderd (iconen staan in `js/icons.js`); geen tijdelijke bestanden meer.
- `LEESMIJ.md` toegevoegd voor ouders en leerkracht (sinds fase 11 `README.md`): starten, wat Aapje en Raketje doen, toetsen, geluid en volledig scherm, hulp bij problemen, fontlicentie.
- Zip van de app gemaakt in de map boven de app-map (22 bestanden, 352 KB, inclusief font, licentie, tests en fontproef). Sinds fase 11 vervangen door de GitHub-repo.
- Controle van de **uitgepakte** zip: 65 tests groen en `index.html` zonder consolefouten in Chrome (headless, `file://`). In Firefox (headless, eigen profiel): alle tests groen, menu correct, schrijfletters met aanhaal en verdikte lijn correct weergegeven.
- Edge headless levert op deze pc geen uitvoer (ook niet in fase 1-5); Edge is dus alleen indirect gedekt via dezelfde Chromium-basis. Op een nieuwe pc: dubbelklik op `index.html` in Edge en kijk of het menu verschijnt.

**Afgerond.** Ideeën voor later staan in §9.1.

### 8 september 2026 · Fase 8: hoofdletters, blokletters en Montessori-kralen

Twee wensen van Peter, beide uit de lijst met latere uitbreidingen (§9.1).

**Gemaakt: lettersets bij Aapje (§5.1, §5.2)**

- Vier schakelaars in de bovenbalk van Aapje, in dezelfde vorm als de operator-toggles bij Raketje:
  kleine schrijfletter (vergrendeld met slotje), hoofdletter in schrijfletters, kleine blokletter,
  hoofdletter in blokletters. Aan = bruin, uit = grijs. Toetsen `1` t/m `4`; de vergrendelde set
  reageert niet, net als `+` bij Raketje.
- `js/letters.js`: `Letters.SETS`, `Letters.vorm(letter, set)`, `Letters.vormKlassen(set)` en
  `Letters.Kaartenzak` - een shuffle-bag over de 26 letters gecombineerd met een tweede shuffle-bag
  over de aangezette sets. De bestaande `nieuweLetterzak` is ongewijzigd gebleven.
- Het antwoord blijft de kleine letter: staat er een **A** op de kaart, dan is de `a`-toets goed
  (dat werkte al zo voor Shift en Caps Lock). Gaat de set van de letter in beeld uit, dan komt er
  meteen een nieuwe letter.
- Blokletters komen van de computer zelf: `.blokletter` in `css/fonts.css` met `Century Gothic`
  vooraan (enkelvoudige `a` en `g`, staat op Windows-pc's met Office). Zie de afweging in §6.4.
- Elke letterset heeft zijn eigen lettergrootte in `css/aapje.css`: het schrijffont heeft hoge
  lussen, de blokletter vult zijn regel veel voller, en hoofdletters zijn hoger dan kleine letters.
- Vijf nieuwe iconen in `js/icons.js`: de vier lettervormen als `<text>` in een bruine cirkel
  (dus rechtstreeks uit dezelfde fonts als de kaart) en de kralentrap.

**Gemaakt: Montessori-kralen bij Raketje (§5.3)**

- Nieuwe schakelaar in de bovenbalk, achter een scheidingslijntje bij de operatoren; toets `H`.
  Standaard **uit**, want het is een hulpmiddel, geen vast onderdeel.
- Nieuw `js/kralen.js`: `Kralen.model(som)` is een pure functie (dus testbaar) die de som omzet in
  groepen kralenstaafjes; `Kralen.maak(container)` tekent ze en zet `--rijen`/`--kolommen`, waarna
  de CSS de kraalgrootte uitrekent. Staafjes zijn nooit langer dan tien kralen (14 = 10 + 4),
  de kleuren volgen de Montessori-kralentrap, 0 is een gestippeld leeg rondje en bij minsommen
  blijven de kralen die eraf gaan doorgestreept staan.
- `css/raketje.css`: som en kralen in één kolom; met de kralen aan wordt de som iets kleiner.

**Gedeeld**

- De toggle-stijl (aan/uit/vergrendeld, slotje) stond in `raketje.css` en staat nu als
  `.knop-toggle` in `base.css`, zodat Aapje en Raketje er hetzelfde uitzien. In `index.html` zijn de
  knoppen in `.knopgroep`-groepen gezet met een scheidingslijntje ertussen.
- `--knop-min` schaalt mee: `clamp(76px, 7.5vw, 96px)`. Met vijf schakelaars in de balk van Raketje
  paste 5 × 96 px niet meer op 1024 px breed; vanaf 1280 px is het weer de volle 96 px.

**Gecontroleerd**

- `test/test.html`: 89 tests groen in Chrome vanaf `file://` (24 nieuwe: 11 voor de lettersets en
  de kaartenzak, 13 voor de kralen, plus de vijf nieuwe iconen in de icooncontrole).
- Gedragstest in de echte DOM (tijdelijke pagina, 23 checks, alle groen): klikken en toetsen op alle
  schakelaars, basisset niet uit te zetten, dubbelklik geeft één actie, hoofdletter beantwoorden met
  de kleine letter, toetsen tijdens de animatie genegeerd, kralen kloppen met plus/min/keer/deel en
  blijven staan na een bezoek aan het menu.
- Layout gemeten op 1024×768, 1366×768 en 1920×1080, in het zwaarste geval (10 × 10 = 100 kralen,
  niveau groot, hint-toetsenbord in beeld): geen horizontale overloop, geen knop buiten beeld,
  kleinste knop 77 px op 1024 px en 96 px daarboven, figuur overlapt de som niet.
- Screenshots bekeken van de vier lettervormen op de kaart en van de kralen bij plus, min, keer,
  deel, 0 + 7 en 10 × 10. Twee dingen bijgesteld: de kralen waren te klein (nu tot 46 px, met meer
  ruimte tussen de staafjes) en het draadje van een korte staaf stak uit (staafjes links uitlijnen).
- `index.html`, `test/test.html` en `test/fontproef.html` starten zonder consolefouten in Chrome.
- `test/fontproef.html` toont nu ook de hoofdletters en de blokletters, zodat de vormen naast
  `letters.png` te beoordelen zijn.

**Nog te doen / aandachtspunten**

- **Hoofdletters in schrijfschrift**: die komen ongewijzigd uit Lusletters. Beoordeel in
  `test/fontproef.html` of ze overeenkomen met wat de klas schrijft; zo niet, laat die set uit.
- **Blokletters** zien er alleen zoals bedoeld uit als er een geschikt font op de pc staat (§6.4).
  Op de doel-pc de fontproef openen en kijken of de `a` enkelvoudig is.
- De kindtest (fase 6) is niet herhaald: de nieuwe schakelaars zijn voor de ouder/leerkracht, maar
  het is de vraag of het kind bij vier lettersets aan niet te veel wisseling krijgt.
- Handmatige controle in Edge en Firefox vanaf `file://` staat nog open, zoals bij fase 7.

### 8 september 2026 · Fase 9: superraket en vrij instelbare lettersoorten

Twee vervolgwensen van Peter, direct na fase 8.

**Gemaakt: derde niveau bij Raketje (§5.1, §5.2)**

- Naast het kleine en het grote raketje staat nu een **superraketje**: plussen en minnen tot en met
  100 (bijvoorbeeld 63 + 37 en 100 − 37). Toets `S`; klein en groot blijven `K` en `G`.
- `js/sommen.js` heeft per niveau een `maxTerm` gekregen (grootste getal in een plussom en grootste
  aftrekgetal). Klein en groot houden `maxTerm: 10` en gedragen zich dus precies als eerst; super
  krijgt `maxTerm: 100`, `maxUitkomst: 100` en `maxAftrektal: 100`.
- Keer en delen blijven bij super de tafels 1 t/m 10: 10 × 10 = 100 is daar al de bovengrens, dus
  dat is hetzelfde bereik als bij groot. Dat staat zo in de tabel in §5.2 en in `LEESMIJ.md`.
- De drie niveau-iconen hebben nu duidelijk verschillende maten: `raketLijf(0.5)`, `(0.72)` en
  `(0.95)`; het vorige kleine (0,55) en grote (0,95) raketje zaten te dicht bij elkaar voor drie
  stappen.
- Balkindeling: met een derde niveauknop paste `1fr auto 1fr` niet meer (de rechterkolom telt in dat
  raster dubbel). Alle instellingen staan nu in de middenbalk in drie groepen met een
  scheidingslijntje: sommen | niveau | kralen. Rechtsboven blijft alleen het geluid staan.
- De som is iets smaller gezet (`min(16vh, 9.5vw, 220px)`), zodat ook de langste som
  `100 − 0 = 100` op 1024 px breed naast het raketje past.

**Gemaakt: lettersoorten bij Aapje vrij te combineren (§5.2)**

- De kleine schrijfletter zat op slot (zoals de `+` bij Raketje). Dat slot is eraf: alle vier de
  soorten zijn nu los aan en uit te zetten, dus je kunt bijvoorbeeld **alleen hoofdletters** laten
  oefenen. De regel is nu "er moet er minstens één aan staan"; klikken op de laatst aangezette
  soort doet niets.
- `Letters.Kaartenzak.zetSets` dwingt de basisset niet meer af, maar weigert een lege lijst
  (dan blijft de huidige stand staan). `BASISSET` is nu alleen nog de stand bij het opstarten.
- `js/aapje.js`: `wisselSet` controleert eerst of dit de laatste aangezette soort is en heeft, net
  als Raketje, een eigen `dubbelklik`-hulpfunctie gekregen.

**Gecontroleerd**

- `test/test.html`: 109 tests groen (20 nieuwe). Nieuw voor super: 10.000 sommen per operator ook op
  het superniveau binnen de regels van §5.2, uitkomsten die echt boven 20 en 50 komen, aftrekgetallen
  boven 10, nooit boven 100, en de drie niveaus met maxima 10/20/100. Nieuw voor de lettersets: één
  set los aanzetten, onbekende namen negeren, de laatste set blijft staan, en met alleen
  `blok-hoofd` aan zijn alle 100 getrokken kaartjes hoofdletters.
- De kralentest loopt nu over 30.000 sommen (drie niveaus); ook bij 100 kralen blijft het binnen
  tien staafjes van tien.
- Gedragstest in de echte DOM (tijdelijke pagina, 27 checks, alle groen): de schrijfletter kan uit
  zodra er een andere soort aan staat, de laatste soort blijft aan (klik én toets), de kaart springt
  meteen naar een letter uit een aangezette soort, de drie niveauknoppen werken via klik en
  `K`/`G`/`S`, supersommen blijven onder 100 met kloppende kralen, en niveau en kralen blijven staan
  na een bezoek aan het menu. Onderweg bevestigd dat toetsen tijdens de beloningsanimatie worden
  genegeerd - ook de instellingstoetsen, net als bij Raketje.
- Gemeten op 1024×768 en 1366×768: geen horizontale overloop, geen knop buiten beeld, kleinste knop
  77 px op 1024 px en 96 px daarboven; bij `100 − 0 = 100` houdt de som 36 px afstand tot het
  raketje (1024 px) en 153 px (1366 px).
- Screenshots bekeken: superraket met `100 − 37` in 100 kralen (37 doorgestreept), de langste som
  met invoer, en Aapje met alleen de blokletter-hoofdletter aan (drie grijze schakelaars, geen
  slotje meer).
- `index.html`, `test/test.html` en `test/fontproef.html` starten zonder consolefouten in Chrome;
  de zip opnieuw gebouwd en de uitgepakte kopie nagelopen.

**Nog te doen / aandachtspunten**

- Bij plussen en minnen over het tiental (63 + 37) helpt hoofdrekenen niet altijd; als het kind
  vastloopt, zet de kralen aan of ga terug naar het grote raketje.
- Met vier lettersoorten aan wisselt de vorm elke letter; voor een beginnend kind is één of twee
  soorten waarschijnlijk rustiger. Dat is nu een keuze van de ouder/leerkracht.
- Kindtest (fase 6) is niet herhaald voor fase 8 en 9.

### 9 september 2026 · Fase 10: tablet en telefoon

Vraag van Peter: kan de app ook op een iPhone, iPad of andere telefoon in de browser? Voorwaarde:
op de pc moet alles blijven werken zoals hij gewend is.

**Gemaakt: aanraakstand (§4.5)**

- `js/keyboardHint.js`: het hint-toetsenbord is tikbaar geworden. Een tik op een toets stuurt met
  `KeyboardHint.tik()` een echte `keydown` (`new KeyboardEvent`) naar `document`, dezelfde weg als een
  echte toets; `aapje.js` en `raketje.js` zijn daarom niet veranderd. Achter de cijferrij staat een
  wistoets (⌫, `Backspace`), klasse `hint-wis`. Tikken werkt alleen als `zetTikbaar(true)` is gezet
  (aanraakstand); in de pc-stand blijft het toetsenbord een stille hint.
- `js/app.js`: aanraakstand (`body.aanraak`) staat aan als `matchMedia('(pointer: coarse)')` waar is
  (tablet/telefoon; een laptop met aanraakscherm niet). Toetsenbordknop rechtsboven in het menu
  (`data-actie="toetsenbord"`, toets `T`, 300 ms dubbelklik-bescherming), `App.zetAanraak`,
  `App.isAanraak`. Volledig scherm gebruikt ook de `webkit`-variant (oudere iPadOS).
- `js/icons.js`: nieuw icoon `toetsenbord` (28 iconen).
- `css/mobiel.css` (nieuw, als laatste geladen): alles voor de aanraakstand en voor smalle/lage
  schermen, met de drempels 1000 px (kleinere knoppen), 700 px (schakelaars op een tweede rij,
  menuknoppen onder elkaar, kaart en som naar de breedte) en 520 px hoog (telefoon liggend). Plus
  `touch-action: manipulation`, geen hover op aanraakschermen, `position: fixed` bij `pointer: coarse`,
  `env(safe-area-inset-*)`.
- `index.html`: `viewport-fit=cover`, `theme-color`, `apple-mobile-web-app-*`, `manifest.webmanifest`,
  `apple-touch-icon` en tabblad-icoon; toetsenbordknop in de menubalk.
- `manifest.webmanifest` en `assets/icoon/icoon-180/192/512.png` (gerenderd uit de eigen SVG's van
  aapjeskop en raket op de crème achtergrond).

**Gecontroleerd**

- `test/test.html`: 121 tests groen (12 nieuwe voor `keyboardHint.js`, zie §10).
- Gedragstest in de echte DOM (tijdelijke kopie, 36 checks, alle groen, zie §10). Leerpunt: onder
  Chrome's `--virtual-time-budget` loopt `Date.now()` met sprongen en lopen CSS-overgangen niet door;
  de test gebruikt daarom een eigen klok en controleert klassen in plaats van `visibility`.
- Pc-opmaak ongewijzigd: de posities en maten van balk, knop, letterkaart, som, teller, hint en figuur
  zijn op 1024×768, 1366×768 en 1920×1080 gemeten in de oude (zip van 8 september) en de nieuwe versie
  en zijn gelijk; alleen in het menu is de eerste knop rechtsboven verschoven door de nieuwe
  toetsenbordknop.
- Mobiele maten (headless Chrome, smalle vensters via een iframe omdat Chrome geen venster onder
  500 px maakt): 390×844, 360×780, 844×390, 768×1024, 820×1180, 1180×820 en 1024×768 in de
  aanraakstand, met superraket, 100 kralen en hint: geen knop, toets, kaart, som of kraal buiten beeld.
  Screenshots bekeken: menu onder elkaar, letterkaart 250 px op een iPhone, `36 + 62` met 98 kralen
  op 390 px breed, toetsen 47 px hoog (29 px breed) rechtop en 34 px liggend.
- `LEESMIJ.md`: nieuw hoofdstuk "Op een tablet of telefoon" (online zetten, beginscherm, toetsenbord,
  liggend/rechtop), toets `T` in de tabel, aangepaste "Scherm past niet?".
- Zip van de app gebouwd naast het plan (28 bestanden, inclusief `letters.png`). Later op 9 september vervangen door de GitHub-repo (fase 11).

**Nog te doen / aandachtspunten**

- Op een echte iPad en iPhone proberen zodra de map online staat; headless Chrome bootst Safari niet na.
- Telefoon liggend is krap (toetsen 34 px): rechtop houden is het advies in de LEESMIJ.

*Aanvulling later op 9 september:* op verzoek van Peter staan de cijfers op smalle schermen (tot 700 px)
in **twee rijen** (1-5 en 6-0 met de wistoets) met vierkante toetsen van 47 px in plaats van één rij
met toetsen van 29 px breed. `keyboardHint.js` bouwt de cijfers nu als twee `.hint-rij`-groepjes;
`base.css` zet `.hint-cijfers` op `flex-direction: row` (op de pc dus nog steeds één rij, met dezelfde
tussenruimte) en `mobiel.css` zet ze onder 700 px onder elkaar. Gemeten: op 1366×768 staat de hint
op dezelfde plek en maat als in fase 9; op 1024 en 1920 zijn breedte en hoogte van de hint en de
positie van de toets binnen de hint gelijk. 121 tests en 36 gedragschecks groen; screenshots op
390×844, 360×780 en 667×375 (iPhone SE liggend) bekeken; zip opnieuw gebouwd.
- Een laptop met aanraakscherm krijgt de pc-stand; de toetsenbordknop in het menu zet de aanraakstand
  daar handmatig aan.

### 9 september 2026 · Fase 11: GitHub-repo en naam (plan bijgewerkt op 10 september)

Peter heeft de app-map op 9 september als Git-repository op GitHub gezet en de teksten aangepast.
Dit plan is op 10 september met de repo in overeenstemming gebracht.

**Gemaakt (in de repo)**

- Openbare repo **`psohl/letter-en-reken-app`** (branch `main`, vijf commits op 9 september). Lokaal
  staat de kloon in `letter-en-reken-app-github/`, naast dit plan. De repo *is* de app-map: er is geen
  aparte zip meer.
- De app heet **Letter en Cijfer-app**: zo staat het in `<title>` van `index.html`, in `name`,
  `short_name` en `description` van `manifest.webmanifest` en als kop van `README.md`. "Aapje" en
  "Raketje" blijven de namen van de twee onderdelen (schermen, `aria-label`s, bestandsnamen
  `aapje.js`/`raketje.js` enzovoort), niet van de app.
- `LEESMIJ.md` is `README.md` geworden (GitHub toont die op de voorpagina van de repo), met dezelfde
  inhoud als in fase 10 en aangescherpte teksten.
- **GitHub Pages** staat aan: `https://psohl.github.io/letter-en-reken-app/` levert de app (titel
  "Letter en Cijfer-app"). Daarmee is de hosting-voorwaarde uit fase 10 vervuld.
- Niet in de repo: `letters.png` (klasreferentie) en de eerdere zip-bestanden. De map `taal-en-rekenapp/`
  en de zips uit fase 7 t/m 10 bestaan lokaal niet meer.

**Gecontroleerd (10 september 2026)**

- 27 bestanden in de repo, precies de boom in §4.2: `index.html`, `README.md`, `manifest.webmanifest`,
  6 css-, 11 js-bestanden, font + licentie, 3 iconen, 2 testpagina's.
- `test/test.html` vanaf `file://` in headless Chrome: **121 goed, 0 fout**. `Icons.namen` telt 28 iconen.
- Het Pages-adres antwoordt met HTTP 200 en de titel "Letter en Cijfer-app".

**Wijzigingen in dit plan**

- Titel en status: appnaam "Letter en Cijfer-app"; de oude werknaam is uit de titel en uit alle
  zip-bestandsnamen gehaald.
- §4.1, §4.2, §4.5, §9, §10, §11: uitlevering via de repo, `README.md` in plaats van `LEESMIJ.md`,
  `letters.png` uit de mappenstructuur, GitHub Pages als gerealiseerde hosting, fase 11 in de tabel.

**Nog te doen / aandachtspunten**

- ✅ *10 sept:* twee tekstverwijzingen in de repo liepen achter op fase 11 en zijn bijgewerkt:
  `README.md` noemde nog de map `taal-en-rekenapp` (nu: het GitHub Pages-adres als snelste start,
  "Download ZIP" van GitHub voor gebruik zonder internet, en de Netlify-stap als optie voor een eigen
  kopie) en het commentaar in `js/app.js` verwees naar `LEESMIJ.md` (nu `README.md`). Alleen tekst,
  geen effect op de werking; nog niet gecommit.
- Op een echte iPad en iPhone proberen via het Pages-adres (open sinds fase 10).
- Handmatige controle in Edge vanaf `file://` staat nog open (sinds fase 7).

### 10 september 2026 · Fase 12: Vis, woorden lezen

Wens van Peter: een nieuwe tak naast Aapje en Raketje waarin het kind een stap verder gaat en
letters én woorden oefent, met twee spelvormen (woord → plaatje, plaatje → woord), drie niveaus
(kleine vis, grote vis, haai), een onderbouwde woordenlijst van minstens 50 woorden per niveau,
een duidelijk plaatje per woord, instelbare lettersoort, klinker-/medeklinkerkleuren en een teller.

**Onderzoek**

- Webonderzoek naar wat kinderen van 6-7 jaar leren lezen (Veilig leren lezen kim-versie, Lijn 3,
  AVI Start/M3/E3/M4, tussendoelen technisch lezen). Conclusie: eerst klankzuivere (m)k(m)-woorden,
  dan tweetekenklanken en medeklinkerclusters, dan meerlettergrepige woorden en samenstellingen. Dat
  is de indeling van de drie niveaus. Samengevat in §3 en uitgewerkt met bronnen in het nieuwe
  `woordenlijst-vis.md` (56 woorden per niveau, per klank/kenmerk gerubriceerd, met de redenen om
  woorden weg te laten: niet-klankzuivere spelling, abstracte woorden, synoniemen binnen een niveau).

**Gemaakt**

- `js/woorden.js`: `Woorden.LIJST` (3 × 56 woorden), `letters()`/`html()` voor de kleuren (ij als één
  klinker), `gelijkenis()`/`afleiders()` (bij grote vis en haai lijken de afleiders op het woord) en
  `Woorden.Opgavezak` (shuffle-bag over de woorden van het niveau plus een tweede over de aangezette
  spelvormen, zoals `Letters.Kaartenzak`). Pure functies, getest.
- `js/plaatjes.js`: 168 eigen SVG-tekeningen, één per woord, in de stijl van `icons.js` (viewBox
  100 × 100, omtreklijn `#3B2A1A`, palet van de app, geen tekst, geen `id`/`<defs>`). Getekend in vier
  parallelle delen met dezelfde stijlgids, elk deel op een contactblad gerenderd met headless Chrome
  en in twee of drie rondes bijgesteld (o.a. kam, vos, rat, leeuw, duif, voet, dolfijn, ijsbeer,
  kabouter, egel). Tijdens de controle bleek *poes* een synoniem van *kat* in hetzelfde niveau; *poes*
  is vervangen door *wip*.
- `js/vis.js`: spelloop (opgave en drie keuzekaarten, foute kaart vervaagt en doet niet meer mee,
  hint na twee fouten = de overgebleven kaart pulseert, goed = schelp + animatie + nieuwe opgave),
  spelvorm-toggles (`W`/`P`, minstens één aan, dubbelklik-bescherming), niveau (`K`/`G`/`H`),
  lettersoort (`S`/`B`), keuze via klik, `1`-`3` of pijltjes + Enter; registratie bij `App` als
  scherm `vis`.
- `css/vis.css`: opgavekaart (breed voor een woord, vierkant voor een plaatje) met zeegroene rand,
  keuzekaarten, lettergrootte uit kaartbreedte en `--letters`, visje met staart-animatie, drie
  beloningsanimaties (sprong met spetters, zwem heen en terug met spiegeling, bubbels) en de
  effecten `spat` en `bubbel`. `css/mobiel.css`: menu met drie knoppen onder elkaar, woordkaarten
  onder elkaar en plaatjes naast elkaar op een telefoon, lagere kaarten op een liggende telefoon.
- `js/icons.js`: negen nieuwe iconen (vis, visFiguur, visKlein, visGroot, haai, vormWoord,
  vormPlaatje, schelp, schatkist; totaal 37). `js/animaties.js`: varianten `vis: sprong, zwem,
  bubbels` met effecten. `js/audio.js`: geluid `blub`. `js/app.js`: `V`/`3` in het menu.
  `index.html`: derde menuknop (visje met het woordje *vis*), scherm Vis, scripts en stylesheet;
  `manifest.webmanifest`: beschrijving "Letters intoetsen, woorden lezen en sommetjes maken".
- `css/menu.css`: drie knoppen van `min(26vw, 58vh, 460px)`; `css/base.css`: `--kleur-vis`.
- `test/test.html`: 31 nieuwe tests (§10); `test/plaatjesproef.html`: alle plaatjes per niveau met
  het woord in schrijf- en blokletters. `README.md`: hoofdstuk "Woorden", toetsen, menu.

**Gecontroleerd**

- `test/test.html`: 152 tests groen in Chrome vanaf `file://`.
- Gedragstest in de echte DOM (headless Chrome via het DevTools-protocol, 37 checks, alle groen;
  zie §10). Geen consolefouten bij `index.html`, `test/test.html` en `test/plaatjesproef.html`.
- Layout gemeten: op 1366×768 en 1024×768 staan alle negen knoppen in de balk (96 resp. 77 px), de
  woordkaart met *tandenborstel*, drie plaatjeskaarten of drie woordkaarten en het visje zonder
  overlap (na een correctie: het speelveld houdt onderaan ruimte voor het visje, want de derde
  woordkaart raakte het). Op 390×844 (telefoon rechtop, beide vormen), 844×390 (telefoon liggend) en
  768×1024 (tablet rechtop) niets buiten beeld en geen overlap met het visje; de drie menuknoppen
  passen onder elkaar op 390×844. De drie visanimaties zijn halverwege bevroren en gescreenshot:
  het visje bereikt de goede kaart (zwem), de spetters en de schelp verschijnen (sprong), de bubbels
  stijgen op (bubbels). Blokletter-woorden (Century Gothic) passen ook bij *tandenborstel* in de kaart.
- Verbonden schrijfletters: Chrome vormt Lusletters ook over de gekleurde `<span>`-grenzen heen als
  één verbonden woord (screenshot van *tandenborstel*). De gemiddelde letterbreedte is gemeten
  (0,28 em) en gebruikt om de lettergrootte uit de kaartbreedte te berekenen.
- Alle 168 plaatjes op vier contactbladen bekeken (en de vervanger *wip*). Minder sterk, maar
  herkenbaar: mug (druk), jas (lijkt op een shirt), zak, reus (man naast klein huisje), neus, touw,
  egel, pauw. Kandidaten om te hertekenen na de kindtest.

**Nog te doen / aandachtspunten**

- Kindtest met Vis: begrijpt het kind de twee spelvormen zonder uitleg? Welke plaatjes geven twijfel?
- De blokletter-woorden hangen, net als bij Aapje, af van het font op de pc (§6.4).
- Op een echte iPad en iPhone proberen (open sinds fase 10); Edge handmatig (open sinds fase 7).
- Niet gecommit: alle wijzigingen van fase 12 staan lokaal klaar; Peter commit en pusht zelf.

### 10 september 2026 · Fase 13: plus bij Raketje vrij uit te zetten

Wens van Peter: de `+` bij Raketje moet ook uit kunnen, met de vanzelfsprekende regel dat er altijd
minstens één van de vier soorten (`+`, `−`, `×`, `÷`) aan blijft staan. Wie de laatst aangezette
soort uit wil zetten, krijgt niets: geen geluid, geen wissel, de som blijft staan.

**Gemaakt (§5.2, §6.3)**

- `js/sommen.js`: `Generator.zetOperators` dwingt `plus` niet meer af, maar weigert een lege lijst
  (of een lijst met alleen onbekende operatoren): de huidige stand blijft dan staan. Bij het
  opstarten zonder operatoren valt hij terug op `plus`. Dezelfde constructie als
  `Letters.Kaartenzak.zetSets` sinds fase 9.
- `js/raketje.js`: `wisselOperator` heeft geen uitzondering voor `plus` meer; nieuw is de regel "de
  laatste soort blijft aan" (klik of toets op de enige aanstaande operator doet niets, ook geen
  geluid), net als `wisselSet` bij Aapje. De dubbelklik-bescherming en het meteen wisselen van de som
  als zijn operator uitgaat blijven zoals ze waren.
- `index.html`: de plusknop heeft geen `vergrendeld`-klasse, slotje en `aria-disabled` meer; het
  `aria-label` is nu "Plussommen aan of uit". De CSS voor `.vergrendeld` en `.slotje` in `base.css`
  en het slot-icoon in `icons.js` staan er nog (nergens meer in gebruik), voor het geval een schakelaar
  later toch weer op slot moet.
- `test/test.html`: de drie tests "plus staat altijd aan" zijn vervangen door vijf nieuwe (alleen
  `maal` aan kan en geeft alleen keersommen; lege lijst en onbekende operatoren worden geweigerd;
  starten zonder operatoren valt terug op `plus`). Totaal 154 tests.
- `README.md`: hoofdstuk "Sommen" (plus kan uit, laatste blijft aan) en dit plan (§5.1, §5.2, §6.3,
  §9, §10).

**Gecontroleerd**

- `test/test.html`: 154 goed, 0 fout in Chrome vanaf `file://`, geen consolemeldingen.
- Gedragstest in de echte DOM (headless Chrome via het DevTools-protocol, 22 checks, alle groen; zie
  §10): klikken én toetsen, laatste soort blijft aan, som wisselt meteen als zijn operator uitgaat,
  dubbelklik geeft één actie, stand blijft staan na een bezoek aan het menu.
- Screenshot op 1366×768 met alleen `÷` aan: `+`, `−` en `×` grijs, `÷` gekleurd, geen slotje,
  som `25 ÷ 5`.

**Nog te doen / aandachtspunten**

- Niet gecommit; Peter commit en pusht zelf.

### 14 september 2026 · Fase 15: niveaus en lettersoorten vrij te combineren

Wens van Peter: bij Raketje en Vis moeten **meerdere niveaus tegelijk** aangezet kunnen worden
(kleine, middelgrote en grote raket respectievelijk vis), en bij Vis moeten ook de schrijfletter en
de blokletter tegelijk aan kunnen. Tot nu toe was het niveau één keuze uit drie en de lettersoort
één keuze uit twee. Ze worden nu wat de operatoren bij Raketje en de spelvormen bij Vis al waren:
losse schakelaars met de enige regel dat er minstens één aan blijft staan. Voor een kind dat net van
het ene niveau naar het andere gaat, is dat prettiger dan een harde overstap: de makkelijke en de
moeilijkere opgaven komen dan door elkaar.

**Gemaakt (§3, §5.1, §5.2, §5.5)**

- `js/sommen.js`: `Generator` heeft `zetNiveaus(lijst)` en `niveaus()` gekregen, met dezelfde
  weiger-een-lege-lijst-constructie als `zetOperators`. `zetNiveau(naam)` en `niveau()` blijven
  bestaan als gemak voor één niveau tegelijk. In `volgende()` wordt per som eerst een niveau geloot
  en daarna de som gemaakt; met maar één niveau aan wordt er géén toevalsgetal opgemaakt, zodat de
  reeks bij een vaste seed precies hetzelfde blijft en alle bestaande tests blijven kloppen. Nieuw:
  `Sommen.NIVEAUNAMEN` (vaste volgorde klein-groot-super) en `som.niveau` op elke som.
- `js/raketje.js`: `zetNiveau` is `wisselNiveau` geworden, gebouwd als kopie van `wisselOperator`
  (laatste blijft aan, dubbelklik-bescherming, toggle-geluid). Gaat het niveau van de som in beeld
  uit, dan komt er meteen een nieuwe som — dat kan nu dankzij `som.niveau`.
- `js/woorden.js`: `Opgavezak` houdt een shuffle-bag **per niveau** bij plus een shuffle-bag over de
  aangezette niveaus; de woordzakken blijven staan als een niveau tussendoor uit en weer aan gaat.
  De afleiders komen uit het niveau van het getrokken woord, niet uit een gemengde lijst, zodat de
  drie kaarten even moeilijk blijven. `zetNiveaus`/`niveaus()` erbij, `zetNiveau`/`niveau()` blijven.
  De constructor accepteert zowel een lijst als één losse naam.
- `js/vis.js`: `zetNiveau` → `wisselNiveau` en `zetSchrift` → `wisselSchrift`, allebei in de vorm van
  `wisselVorm`. De lettersoort in beeld komt per opgave uit een shuffle-bag over de aangezette
  soorten; staat er maar één aan, dan komt daar altijd dezelfde uit. Een net aangezette soort komt
  meteen in beeld (anders lijkt de knop niets te doen tot de volgende opgave); gaat de soort in beeld
  uit, dan neemt de andere het over.
- `index.html`: de `aria-label`s van de zes niveauknoppen en de twee lettersoortknoppen zijn
  "... aan of uit" geworden, en de groepen heten nu "Niveaus" en "Soorten letters". De CSS hoefde
  niet mee: `.niveau-knop.aan` en `.knop-toggle:not(.aan)` werkten al per knop.
- `test/test.html`: 14 nieuwe tests (§10), totaal 168.
- `README.md`: hoofdstukken "Sommen" en "Woorden" en de toetsentabel.

**Gecontroleerd**

- `test/test.html`: 168 goed, 0 fout in headless Chrome vanaf `file://`.
- Gedragstest in de echte DOM (headless Chrome via het DevTools-protocol, 21 checks, alle groen;
  zie §10): klikken op de niveauknoppen van Raketje en Vis, de laatste blijft aan, `aria-pressed`
  klopt, de som/opgave in beeld hoort altijd bij een aangezet niveau, en de lettersoorten wisselen
  elkaar over opeenvolgende opgaven af zodra ze allebei aan staan.
- Screenshots op 1280×800: Raketje met alle drie de raketjes rood omringd en een supersom in beeld,
  Vis met alle drie de vissen groen omringd, en Vis met allebei de lettersoortknoppen aan en
  *ballon* in blokletters.

**Nog te doen / aandachtspunten**

- De dubbelklik-bescherming van 300 ms geldt nu ook voor de niveau- en lettersoortknoppen. Wie snel
  twee keer op dezelfde knop klikt, krijgt één actie; dat is gewenst, maar het maakt "even aan en
  meteen weer uit" wel traag. Bij de kindtest kijken of dat stoort.
- Niet gecommit; Peter commit en pusht zelf.

### 14 september 2026 · Fase 14: Mier, woorden bouwen

Het vierde onderdeel uit §5.6 is gebouwd: het **bewegend alfabet**. Er staat een plaatje in beeld en
het kind typt het woord in een rij klankvakjes — één vakje per *klank*, dus *maan* is m + aa + n. Dit
is het eerste onderdeel waarin het kind zelf iets produceert in plaats van herkent en kiest. De app
heeft daarmee vier onderdelen en het menu een 2×2-raster.

**Gemaakt (§5.1, §5.6, §6.2, §6.3, §7.5)**

- `js/woorden.js`: `Woorden.KLANKEN` (geordende tekenlijst van lang naar kort), `Woorden.klanken(woord)`
  (greedy match van links naar rechts), `Woorden.SPLITSINGEN` (handmatige splitsing per woord),
  `Woorden.klankKlasse` (één kleur per klank; een klank die met een klinker begint is blauw, en de ij
  ook) en `Woorden.Woordzak` (woorden uit de aangezette niveaus, met hun klanken, zonder afleiders).
  De niveau-afhandeling die `Opgavezak` en `Woordzak` delen staat nu één keer in `zetNiveausOp`.
- `js/mier.js`: de spelloop. Per vakje wordt de eerstvolgende letter van de klank verwacht; goed →
  de letter verschijnt met een pop en een klikje, vakje vol → door naar het volgende, fout → het
  vakje schudt en wat goed staat blijft staan, `Backspace` → eerst de halve klank, anders het vorige
  vakje. Na twee fouten op hetzelfde vakje pulseert de juiste toets op het hint-toetsenbord. Woord af
  → blaadje, groene vakjes, mier-animatie van 1,4 s met geblokkeerde invoer, nieuw woord.
- `css/mier.css` en een vijfde scherm in `index.html`: plaatjeskaart met grasgroene rand, het
  voorbeeldwoord, de rij klankvakjes (vakgrootte uit `--vakjes`, letters uit het aantal tekens), de
  drie mier-animaties en de rust-animatie.
- `js/icons.js`: acht iconen erbij (mier voor het menu, mier als speelfiguur, mier klein/groot/puik,
  blaadje, mierenhoop, voorbeeldwoord); `js/animaties.js`: drie mier-varianten (dragen, lopen,
  klimmen); `js/audio.js`: het geluid *trippel*.
- `css/menu.css`: het menu is een 2×2-raster geworden met knoppen van `min(30vw, 30vh, 380px)`; de
  blokjes in de hoek zijn met de knop meegekrompen. `js/app.js`: `M` en `4` openen Mier, en de
  pijltjes omhoog/omlaag springen een rij in het raster.
- `css/mobiel.css`: Mier op telefoon en tablet, en het menu als één kolom op een telefoon rechtop.
- `test/test.html`: 28 nieuwe tests (§10), totaal 196. `test/klankproef.html`: alle 168 woorden in
  klankvakjes, ter beoordeling zoals `plaatjesproef.html` dat voor de plaatjes doet.
- `README.md`: hoofdstuk "Woorden bouwen", de toetsentabel en de stukjes over het menu en de tablet.

**Twee keuzes die tijdens de bouw anders zijn gelopen dan in het ontwerp**

- **Toetsen op cijfers, niet op letters.** §5.6 stelde `K`/`G`/`P` voor de niveaus en `S`/`B` voor de
  lettersoort voor. Dat kan hier niet: bij Mier zijn alle 26 letters antwoord, dus `k` moet gewoon
  een `k` in het vakje zetten (*kip*, *geit*, *pop*, *sok*, *bus*). De schakelaars staan daarom op
  `1` t/m `6`, dezelfde oplossing die Aapje al gebruikt voor zijn vier lettersets.
- **Eén handmatige splitsing.** De greedy match doet 167 van de 168 woorden goed. Alleen
  *pannenkoek* ging mis: daar staan een n en een k naast elkaar zonder samen *nk* te zijn. Dat woord
  staat nu in `SPLITSINGEN`. De terugvaloptie (één vakje per letter) was niet nodig.

**Gecontroleerd**

- `test/test.html`: 196 goed, 0 fout in headless Chrome vanaf `file://`.
- Gedragstest in de echte DOM (headless Chrome via het DevTools-protocol, 64 checks, alle groen; zie
  §10), inclusief de layout met *tandenborstel* (13 vakjes), het voorbeeldwoord en de hint in beeld
  op 1024×768, 1366×768, 1920×1080, 390×844, 360×780, 844×390, 768×1024, 820×1180 en 1180×820, en het
  menu met vier knoppen op diezelfde formaten. Telefoon- en tabletformaten zijn in de aanraakstand
  gemeten, pc-formaten in de pc-stand.
- Korte regressietest van Aapje, Raketje en Vis (7 checks): spelloop, tellers, animaties, toetsen en
  schakelaars werken onveranderd; geen consolefouten.
- `test/klankproef.html` bekeken: alle 168 splitsingen kloppen, *pannenkoek* staat er groen omrand in
  als handmatige splitsing.
- Screenshots op 1366×768 (menu met vier knoppen; *maan* half ingetypt met het voorbeeldwoord aan;
  *tandenborstel* met alle 13 vakjes), op 390×844 en op 844×390.

**Nog te doen / aandachtspunten**

- Kindtest voor Mier: let vooral op of het kind begrijpt dat een tweetekenklank in één vakje hoort
  (typt het `aa` in twee vakjes of in één?), en welke plaatjes twijfel geven — het voorbeeldwoord is
  daarvoor de uitweg.
- Op een telefoon liggend (844×390) is Mier krap: kaart, vakjes en de mier zijn daar een slag
  kleiner. Rechtop of op een tablet is het ruimer.
- De lege vakjes verraden het aantal klanken. Dat is een bewuste keuze (§5.6); een schakelaar die de
  vakjes weglaat, is een mogelijke latere uitbreiding.
- Niet gecommit; Peter commit en pusht zelf.

### 21 september 2026 · Plan uitgebreid: fase 16, meegroeiende werelden en circuskunstjes

Peter wil de beloningen uitbreiden met animaties die *ergens naartoe gaan*: het aapje klimt bij elk
goed antwoord een stukje hoger in een boom, de raket vliegt steeds naar een volgende planeet, het
visje zwemt steeds verder door een omgeving met koraal en waterplanten, en de mier doet bij elk goed
antwoord een ander circusachtig kunstje. Dat is in het plan uitgewerkt als **fase 16**; er is nog
niets gebouwd.

**Toegevoegd in het plan**

- §7.6: het ontwerp. Gedeelde regels (rondes van tien, stand uit de teller, de reis is de beloning,
  de wereld schuift en de figuur blijft in beeld, decor achter de figuur, layout-eis, geen schakelaar),
  daarna per onderdeel de wereld: de boom van Aapje, de planetenreis van Raketje, het rif van Vis en
  het circus van Mier met een tabel van tien kunstjes. Tot slot wat ervoor nodig is in de code
  (`js/wereld.js`, `js/decor.js`, aanpassingen in `animaties.js`, de vier spellen, CSS, audio,
  `index.html`, tests) en de volgorde van bouwen (16a t/m 16d).
- §2 (keuzetabel), §5.1 (één regel per scherm), §6.2 (kleuren van boom, ruimte, rif en circus),
  §6.3 (decor-tekeningen), §7.1/7.2/7.4/7.5 (hoe de bestaande varianten meegaan), §7.3 (vijf nieuwe
  geluiden), §9 (fase 16 met acceptatie), §9.1, §10 (tests en kindtest) en §11 (zeven risico's met
  maatregel).

**Keuzes in het ontwerp**

- **Rondes van tien**, gelijk aan de tien losse iconen van de teller: het tiende antwoord is een
  finale (bananentros, aarde, schatkist, mierenpiramide) en daarna begint een nieuwe ronde in een
  andere variant van de wereld. Zo raakt niets van het scherm af en vertellen teller en wereld
  hetzelfde verhaal.
- **De stand volgt uit de teller** (`Wereld.stand(n)`, pure functie), niets opslaan. Daarmee blijft
  de wereld staan na een bezoek aan het menu en kan `Escape` tijdens een stap niets kapotmaken.
- **De reis is de beloning.** De bestaande varianten blijven als *manier* van reizen (springen,
  slingeren, salto; recht, looping, langs de maan; springen, zwemmen, bubbels), zodat de variatie
  blijft en de duur 1,4 s blijft.
- **De wereld schuift** bij Raketje en Vis (de camera volgt de figuur); alleen het aapje klimt echt
  omhoog, langs een boom aan de rechterrand, en is daar een slag kleiner.
- **Mier reist niet** maar doet kunstjes: zeven nieuwe (koprol, bal, hoepel, jongleren, koorddansen,
  handstand, trapeze) naast de drie bestaande, met de grote finale als tiende.
- **Geen schakelaar** voor het decor: de balken zijn vol. Als de kindtest uitwijst dat het afleidt,
  komt er een knop in het menu.
- **Bouwen in vier stappen**: 16a (gedeelde basis plus Aapje) eerst, want daar ontstaat de gedeelde
  code; 16b, 16c en 16d daarna in willekeurige volgorde, elk apart op te leveren.

**Nog te beslissen door Peter, vóór de bouw**

- Fantasieplaneten (voorstel) of echte planeten met namen? Het plan gaat uit van fantasie, met een
  herkenbare maan, ringplaneet en aarde.
- Mag de finale langer duren dan 1,4 s? Voorstel: nee; alleen als het bij de kindtest gehaast blijkt
  (§11).
- Moet de wereld ook in het menu te zien zijn (een boompje bij de aapjeknop)? Voorstel: niet in fase
  16, staat als vervolgstap in §9.1.
- Niet gecommit; Peter commit en pusht zelf.

### 21 september 2026 · Fase 16: meegroeiende werelden en circuskunstjes

Het ontwerp uit §7.6 is gebouwd. Elk onderdeel heeft nu een **wereld die meegroeit** met de goede
antwoorden, in rondes van tien: het aapje klimt een tak hoger in de boom, de raket vliegt naar de
volgende planeet, het visje zwemt naar het volgende rifstuk en de mier doet een ander circuskunstje.
Elk tiende antwoord is een finale en daarna begint een nieuwe ronde in een nét andere wereld.

**Gemaakt (§7.6)**

- `js/wereld.js`: `Wereld.stand(n)` (pure functie van de teller), de stationslijsten per wereld
  (`BOOM.takken` en drie bomen, `RUIMTE.volgorde`/`planeetVoor` met de aarde als tiende, `RIF.ronde`
  uit een shuffle-bag met de schatkist op station 0, drie watertinten) en `Wereld.maak(container,
  naam, figuur)` met `zetStand`, `stap` en `stop`. De wereld houdt zelf niets bij: de stand komt
  altijd uit `teller.waarde()`.
- `js/decor.js`: 33 eigen SVG-tekeningen in de stijl van `icons.js` — drie bomen (stam, tak, kruin
  voor loofboom, palm en apenbroodboom), de sterrenhemel, tien planeten, een vlaggetje, de zandbodem,
  tien rifstukken plus de schatkist met een deksel dat opengaat, en de circusattributen (piste, bal,
  hoepel, balanceerstokje, hoge hoed, draad, stofwolk, sterretje).
- `js/animaties.js`: `speel` krijgt `wereld` en `stand` mee en laat de wereld de stap doen; `kies`
  geeft bij een finale-stand altijd de finale-variant (`FINALES`). Zeven nieuwe mier-kunstjes erbij
  (koprol, bal, hoepel, jongleren, koorddansen, handstand, trapeze), dus tien in totaal, plus vier
  finales: `tros`, `thuis`, `schat` en `finale`.
- `css/base.css`: de laag `.wereld` (achter de opgave, `z-index: -1` in een eigen stapelcontext).
  `css/aapje.css`, `raketje.css`, `vis.css` en `mier.css`: het decor en de nieuwe keyframes;
  `css/mobiel.css`: smaller decor op telefoon en tablet.
- `js/audio.js`: *klim*, *aankomst*, *plons*, *tromroffel* en *tada*, en een tweede argument bij
  `Geluid.speel(naam, na)` zodat het aankomstgeluid klinkt op het moment dat de figuur landt.
- `index.html`: een lege `.wereld`-laag per speelveld en de twee nieuwe scripts.
- `test/test.html`: 48 nieuwe tests (§10), totaal 244. `README.md`: het hoofdstuk "Elk goed antwoord
  brengt het kind verder".

**Drie keuzes die tijdens de bouw anders zijn gelopen dan in het ontwerp**

- **De planetenreis gaat omhoog, niet opzij.** Het ontwerp zette de planeten naast elkaar met een
  hemel die naar links schuift. Maar de som staat middenin het scherm en is bij het superraketje
  breed; een horizontale strook loopt daar dwars doorheen. De rechterrand is de enige strook die op
  elk schermformaat vrij blijft. De raket vliegt nu omhoog naar de volgende planeet en de hemel zakt
  — wat ook natuurlijker is, want de raket staat al met zijn neus omhoog. Bij Vis kon de horizontale
  strook wél, want daar was de onderste 18 vh al voor het visje gereserveerd.
- **De thuisplek van het aapje wordt vanaf zijn *natuurlijke* plek gerekend.** De eerste versie mat
  zijn huidige plek en telde daar het verschil bij op. Dat ging mis omdat de klim-animatie de figuur
  aan het eind precies op de nieuwe tak houdt (`animation-fill-mode: both`): de meting zag hem al
  boven zitten en de klim liep een tak achter, één pixel per keer. Nu meet `natuurlijkeRect()` hem
  even zonder verschuiving en zonder animatie, zodat de takplek altijd absoluut te rekenen is.
  Daarbij zit meteen een begrenzing: hij kan nooit tot buiten de boven- of rechterrand van het
  speelveld klimmen.
- **Geen `DUUR_FINALE`.** De finale duurt net als alle andere varianten 1,4 s; het verschil zit in de
  choreografie, niet in de lengte. Blijkt dat bij de kindtest te gehaast, dan kan het alsnog (§11).

**Gecontroleerd**

- `test/test.html`: 244 goed, 0 fout in headless Chrome vanaf `file://` (48 nieuwe tests, §10).
- Gedragstest in de echte DOM (headless Chrome via het DevTools-protocol, 45 checks, alle groen, §10),
  inclusief de layout op 1024×768, 1366×768, 1920×1080, 390×844, 360×780, 844×390, 768×1024, 820×1180
  en 1180×820 met de figuur op het hoogste station.
- Screenshots van de vier werelden op 1366×768 beoordeeld. Daar kwamen drie dingen uit die meteen zijn
  verholpen: de boom werd aan de rechterrand afgeknipt (takken nu 46 % per kant in plaats van 52 %),
  het rifstuk waar het visje is stond achter het visje (de rij staat nu 1,4 station opgeschoven), en
  de sterrenhemel zag eruit als een aangeplakte rechthoek (nu ronde hoek en vervagende boven- en
  onderrand).
- **Na oplevering opgemerkt door Peter en meteen verholpen:** het visje zwom achteruit. Het rif schuift
  naar links, dus het visje komt naar rechts vooruit, maar de tekening kijkt naar links. De
  speelfiguur is nu gespiegeld en de zwem-variant en de bubbels zijn daarop aangepast (§7.6). De
  gedragstest controleert sindsdien ook de kijkrichting: 45 checks in plaats van 44.
- Twee dingen die de nieuwe layoutmeting aan het licht bracht, zijn **niet** door fase 16 veroorzaakt:
  het aapje stond op een telefoon rechtop al vóór deze fase met zijn schouder voor de hoek van de
  letterkaart (39 px, nu 31 px), en de omhullende rechthoek van de raket en de vis komt 2 tot 4 px
  onder het speelveld doordat ze in rust wiegen. Beide gemeten op de versie van vóór fase 16 en daar
  precies hetzelfde. Ze staan genoteerd in §11 als aandachtspunt, niet als regressie.
- De app blijft ES5 en zonder externe bronnen; Firefox kon in deze omgeving niet headless renderen
  (grafische fout), dus daar is alleen op taal- en CSS-niveau naar gekeken: alles wat nieuw is
  (`aspect-ratio`, `mask-image`, variabelen in `@keyframes`) wordt door Firefox ondersteund. Handmatig
  openen in Firefox en Edge blijft aan te raden.

**Nog te doen / aandachtspunten**

- Kindtest voor fase 16: kijkt het kind na het antwoord naar de wereld of blijft het bij de opgave?
  Leidt het decor af tijdens het typen (dan een schakelaar in het menu, §7.6)? Begrijpt het kind dat
  de finale bij tien een ronde afsluit, en wil het doorspelen voor de volgende ronde?
- Op een echte iPad kijken of twintig antwoorden achter elkaar vlot blijven lopen.
- Niet gecommit; Peter commit en pusht zelf.

### 21 september 2026 · Mier krijgt een bewegende wereld: het ondergrondse nest

Peter wilde dat ook Mier, net als de andere drie dieren, een wereld krijgt die meebeweegt in plaats
van een kunstje op zijn plek. Van de drie voorstellen (tuinpad met circusattributen naar de
mierenhoop, circusterrein, ondergronds nest) koos hij het **ondergrondse nest**.

**Wat er veranderd is**

- De piste is vervangen door een **doorsnede van het mierennest** in de strook onderin: elf kamers
  met gangen ertussen, onder een grasrand. De mier kijkt naar links, dus hij loopt naar links en het
  nest schuift naar rechts — precies andersom dan het rif van Vis.
- De tien kunstjes zijn gebleven en zijn nu tegelijk de *manier van vooruitkomen*, zoals de drie
  klimstijlen van het aapje: omdat de grond meeschuift, rolt een koprol vooruit, rolt hij mee op het
  zaadje en is een handstand lopen op zijn voorpoten.
- Drie attributen zijn hertekend zodat ze onder de grond passen: de gestreepte circusbal werd een
  **zaadje**, de hoepel een **wortelboog** en de hoge hoed het **kroontje** van de koningin. De draad
  van het koorddansen is nu een wortelvezel. `draag` loopt niet meer naar rechts het beeld uit maar
  naar links, de kant waar de mier naartoe loopt.
- `wereld.js`: de schuiflogica van het rif is een gedeeld onderdeel geworden (`maakStrook`). Vis en
  Mier delen nu dezelfde code; alleen de lijst, de richting, de tekeningen en of de strook de hele
  breedte vult verschillen. Daarbij is de strook ook **rond** geworden: station 10 is weer station 0.
  Dat was nodig omdat het nest de hele breedte vult — anders stond de halve strook vol met
  koninginnenkamers. Voordeel: er staat nu precies één ronde in beeld, als een kaart van het nest.
- De maten van Mier volgen nu één variabele `--nest-h`: de strook, de kamers (even breed als de
  strook hoog is, zodat ze naadloos aansluiten) en de mier zelf, die op de vloer van zijn kamer staat.

**Gecontroleerd**

- `test/test.html`: 254 goed, 0 fout (10 nieuwe tests voor het nest).
- Gedragstest in Chrome: 53 checks, alle groen, twee keer achter elkaar gedraaid.
- Screenshot beoordeeld. Daar kwam één fout uit die meteen is verholpen: links stonden allemaal
  koninginnenkamers, doordat elk station voorbij het tiende als finale werd getekend. Sindsdien loopt
  de strook rond.
- De klankvakjes raakten precies de grasrand van het nest (nul pixels ruimte), waardoor de
  layoutmeting wisselend uitsloeg. Er zit nu een randje van 1,4 vh tussen.

**Nog te doen**

- Kindtest: nu ook kijken of het kind de kamers herkent en of het doorspeelt om bij de koningin te
  komen.
- Niet gecommit; Peter commit en pusht zelf.
