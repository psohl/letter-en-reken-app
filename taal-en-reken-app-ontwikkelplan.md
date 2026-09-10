# Ontwikkelplan: Letter en Cijfer-app

Versie 1.6 · 10 september 2026

> **Status (10 sept 2026):** **Alle fases 0 t/m 12 zijn afgerond** ✅. De app heet **Letter en Cijfer-app** (zo staat het in `index.html`, `manifest.webmanifest` en `README.md`) en staat als Git-repository op GitHub: **github.com/psohl/letter-en-reken-app** (openbaar). Lokaal is dat de map `letter-en-reken-app/`; start met dubbelklik op `index.html`. Online draait dezelfde app via GitHub Pages op **psohl.github.io/letter-en-reken-app/** (voor tablet en telefoon). Fontkeuze: **Lusletters (standaardhelling) met stylistic set ss01**. Fase 12 (10 sept) voegt een derde onderdeel toe: **Vis**, woorden lezen (§5.5, `woordenlijst-vis.md`). Zie §9 en het voortgangslog in §13.
>
> *Aapje*, *Raketje* en *Vis* zijn in dit plan de namen van de drie onderdelen (letters, sommen en woorden); Aapje en Raketje zijn overgenomen van de klasprogramma's, Vis is de eigen naam van het derde onderdeel. Het zijn geen namen van de app.

---

## 1. Doel en doelgroep

Een vrolijke, kleurrijke oefen-app voor kinderen van 6-7 jaar op een Montessori-basisschool: de **Letter en Cijfer-app**.
De app bestaat uit drie onderdelen; de eerste twee sluiten aan bij de programma's die in de klas worden gebruikt, het derde (fase 12) bouwt op Aapje voort:

| Onderdeel | Klasprogramma | Wat het kind oefent |
|-----------|---------------|---------------------|
| **Aapje** | Taal | Letter herkennen (schrijfletter, eventueel hoofdletter of blokletter) en intoetsen op het toetsenbord |
| **Raketje** | Rekenen | Sommen met kleine getallen (+, −, ×, ÷) intoetsen |
| **Vis** | Taal (vervolg op Aapje) | Woorden lezen: bij een woord het juiste plaatje kiezen, of bij een plaatje het juiste woord (§5.5) |

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
| Rekenbereik | Instelbaar niveau: klein / groot / super (fase 9) | Klein: uitkomst t/m 10, tafels 1-5. Groot: uitkomst t/m 20, tafels 1-10. Super: plus en min t/m 100, tafels 1-10. |
| Antwoord bevestigen | Automatisch controleren | Geen Enter nodig; zie §5.2 voor de regels. |
| Fouten | Neutraal schudden, hint na 2 fouten | Hint = juiste toets licht op in een klein virtueel toetsenbord onderin. |
| Voortgang | Sessieteller, niets opslaan | Bananen (Aapje) / sterren (Raketje) tellen op tijdens de sessie. Elke start is schoon. |
| Iconen | Alles zelf tekenen als SVG | Eén consistente stijl, geen licenties van derden, alles animeerbaar. |
| Letterset | 26 letters in vier soorten: kleine/hoofd schrijfletter en kleine/hoofd blokletter | Vier vrij te combineren schakelaars in de balk (§5.2); minstens één soort staat aan, welke maakt niet uit. Later optioneel: tweetekenklanken (ee, oe, ui, ij, ...). |
| Visueel hulpmiddel bij rekenen | Montessori-kralen, met schakelaar, standaard uit (fase 8) | De som in kralenstaafjes onder de som; het kind telt en typt zelf (§5.3). |
| Tablet en telefoon | Dezelfde app, met een aanraakstand: toetsenbord op het scherm (fase 10) | Staat vanzelf aan op een tablet of telefoon, op de pc verandert niets. Voor gebruik op een telefoon moet de map online staan (§4.5). |
| Woorden lezen (Vis, fase 12) | Kiezen uit drie, niet typen | Woord → plaatje en plaatje → woord als twee spelvormen (beide aan/uit, minstens één aan). Drie niveaus (kleine vis, grote vis, haai) volgens de leerlijn lezen van groep 3; 56 woorden per niveau, elk met een eigen SVG-tekening. Schrijf- of blokletters (alleen kleine letters), klinkers blauw en medeklinkers rood. Zie §5.5 en `woordenlijst-vis.md`. |

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
├── index.html                 startpunt, bevat de vier schermen (menu, Aapje, Raketje, Vis); titel "Letter en Cijfer-app"
├── README.md                  uitleg voor ouders/leerkracht (heette t/m fase 10 LEESMIJ.md) ✅ fase 7 (tablet/telefoon fase 10, hernoemd fase 11, Vis fase 12)
├── manifest.webmanifest       web-app-manifest: naam, iconen, standalone (beginscherm) ✅ fase 10
├── taal-en-reken-app-ontwikkelplan.md   dit plan
├── woordenlijst-vis.md        de 168 woorden van Vis per niveau, met onderbouwing en bronnen ✅ fase 12
├── letters.png                referentie-afbeelding van de schrijfletters uit de klas (voor test/fontproef.html)
├── css/
│   ├── base.css               reset, kleuren, typografie, grote knoppen           ✅ fase 0
│   ├── menu.css               hoofdmenu met drie grote knoppen                    ✅ fase 0 (drie knoppen fase 12)
│   ├── aapje.css              letterkaart, aapje-figuur, spring-animatie          ✅ fase 2
│   ├── raketje.css            som, invulvak, niveau, kralen, raket-animatie        ✅ fase 3 (kralen fase 8)
│   ├── vis.css                woordkaart, plaatjes- en woordkeuzes, visje, vis-animaties ✅ fase 12
│   ├── fonts.css              @font-face base64 + .schrijfletter en .blokletter   ✅ fase 1 (blok fase 8)
│   └── mobiel.css             aanraakstand (body.aanraak) en media queries voor smalle/lage schermen ✅ fase 10 (Vis fase 12)
├── js/
│   ├── app.js                 schermwisseling, globale toetsafhandeling, geluid aan/uit, aanraakstand ✅ fase 0 (geluid fase 5, aanraak fase 10)
│   ├── audio.js               Web Audio geluidseffecten (globaal object `Geluid`)  ✅ fase 5 (blub fase 12)
│   ├── icons.js               SVG-iconen als strings: Icons.svg('huisje'), Icons.vul() ✅ fase 4 (37 iconen)
│   ├── plaatjes.js            de 168 woordplaatjes van Vis als SVG-strings: Plaatjes.svg('kat') ✅ fase 12
│   ├── keyboardHint.js        hint-toetsenbord; in de aanraakstand tikbaar (tik = keydown) ✅ fase 2 (tikbaar fase 10)
│   ├── teller.js              sessieteller (bananen/sterren/schelpen, tros + getal > 10) ✅ fase 2
│   ├── letters.js             letters, klinker/medeklinker, shuffle-bag, lettersets ✅ fase 1 (sets fase 8)
│   ├── woorden.js             woordenlijst (3 niveaus), letterkleuren, afleiders, opgavezak (pure functies) ✅ fase 12
│   ├── aapje.js               spel Aapje                                          ✅ fase 2
│   ├── sommen.js              somgenerator (3 niveaus), auto-controle (pure functies) ✅ fase 3 (super fase 9)
│   ├── kralen.js              Montessori-kralen: model + weergave (pure functies)  ✅ fase 8
│   ├── raketje.js             spel Raketje                                        ✅ fase 3
│   ├── vis.js                 spel Vis                                            ✅ fase 12
│   └── animaties.js           beloningsanimaties: 4 aapje-, 3 raket- en 3 visvarianten, effectenlaag ✅ fase 5 (vis fase 12)
├── assets/
│   ├── font/                  lusletters.ttf + LICENTIE-Lusletters-OFL.txt       ✅ fase 1
│   └── icoon/                 icoon-180/192/512.png voor beginscherm en tabblad   ✅ fase 10
└── test/
    ├── test.html              152 tests: letters.js, woorden.js, plaatjes.js, sommen.js, kralen.js, animaties.js, keyboardHint.js, icons ✅ fase 1, 3, 5, 8, 9, 10, 12
    ├── fontproef.html         alle letters per letterset naast letters.png        ✅ fase 1 (sets fase 8)
    └── plaatjesproef.html     alle 168 woordplaatjes per niveau, met het woord in schrijf- en blokletters ✅ fase 12
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

- Drie zeer grote knoppen naast elkaar: **Aapje** (aapje met letter-blokje), **Raketje** (raket met cijfers) en **Vis** (visje met het woordje *vis* in schrijfletters, fase 12). Op een smal scherm staan ze onder elkaar.
- Kleine knoppen rechtsboven: toetsenbord op het scherm aan/uit (aanraakstand, §4.5; toets `T`, fase 10), geluid aan/uit (luidspreker-icoon), volledig scherm (pijltjes-icoon).
- Toetsenbord: `A` of `1` → Aapje, `R` of `2` → Raketje, `V` of `3` → Vis; pijltjes links/rechts + Enter werkt ook.
- Kleine animaties in rust ("idle"): aapje knippert met de ogen, raketje wiegt, visje zwaait met zijn staart.

**Aapje**

- Midden: één grote letter (klinker blauw, medeklinker rood/roze) op een licht "schuurpapier"-kaartje.
- Bovenaan: vier letterset-schakelaars met de lettervorm zelf als icoon (kleine/hoofd schrijfletter, kleine/hoofd blokletter); aan = bruin, uit = grijs. Alle vier zijn vrij te combineren, ook de schrijfletter mag uit; alleen de laatste aangezette soort kan niet uit (dan gebeurt er niets). Bij het opstarten staat de kleine schrijfletter aan. Toetsen `1` t/m `4`.
- Linksboven: terugknop (huisje/pijl). Rechtsboven: geluid-icoon.
- Onderin: rij bananen als sessieteller (max. 10 zichtbaar, daarna een bananentros met getal).
- Onderin, standaard verborgen: klein virtueel toetsenbord voor de hint. In de aanraakstand (§4.5) staat het altijd in beeld en is het tikbaar.
- Het aapje zit in een hoek en wacht; bij goed antwoord speelt een animatie (§7).

**Raketje**

- Midden: de som groot in beeld, bijv. `3 + 4 = _` met een invulvakje dat de getypte cijfers toont.
- Bovenaan staan alle instellingen in de middenbalk, in drie groepen met een scheidingslijntje ertussen:
  1. vier operator-toggles met icoon (`+`, `−`, `×`, `÷`); aan = gekleurd, uit = grijs. Alle vier zijn vrij aan en uit te zetten (ook de `+`, sinds fase 13); er moet er alleen altijd minstens één aan staan: klikken op de laatst aangezette soort doet niets.
  2. drie niveauknoppen: klein / groot / superraketje, in drie duidelijk verschillende maten (klein = t/m 10, groot = t/m 20, super = plus en min t/m 100).
  3. schakelaar voor de Montessori-kralen als visueel hulpmiddel (§5.3), standaard uit.
- Rechtsboven blijft alleen het geluid-icoon staan (sinds fase 9; het niveau stond daar eerst).
- Onderin: sterren als sessieteller; hint-toetsenbord met cijfers 0-9 (in de aanraakstand met een wistoets ⌫).
- Toetsen: `Backspace` wist het laatste cijfer, `Escape` = terug. Toggles ook via `+`, `-`, `*` (of `x`), `/` (of `:`) op het toetsenbord; niveau via `K` (klein), `G` (groot) en `S` (super); kralen via `H` (hulp).

**Vis** (fase 12, zie §5.5)

- Midden, boven: de **opgave** op een kaart met zeegroene rand: een woord (brede kaart, letters in klinker-/medeklinkerkleur) of een plaatje (vierkante kaart).
- Daaronder: drie **keuzekaarten** naast elkaar, met plaatjes (bij een woord als opgave) of woorden (bij een plaatje als opgave). Klikken of tikken kiest; er is geen toetsenbord nodig, ook niet in de aanraakstand.
- Bovenaan in de middenbalk drie groepen met een scheidingslijntje:
  1. twee spelvorm-toggles: *woord in beeld, plaatje kiezen* en *plaatje in beeld, woord kiezen*; beide vrij aan/uit, minstens één aan (zoals de lettersets van Aapje). Toetsen `W` en `P`.
  2. drie niveauknoppen: kleine vis, grote vis, haai (drie duidelijk verschillende visjes, de haai grijs met rugvin). Toetsen `K`, `G`, `H`.
  3. twee lettersoortknoppen (precies één aan): schrijfletters (`a` in Lusletters) of blokletters (`a` in drukletters), dezelfde iconen als bij Aapje. Toetsen `S` en `B`.
- Linksboven terugknop, rechtsboven geluid. Onderin: schelpen als sessieteller; boven tien schelpen een schatkist met getal. Geen hint-toetsenbord.
- Het visje zit rechtsonder en wiegt; bij een goed antwoord springt het, zwemt het naar de goede kaart of blaast het bubbels (§7.4).
- Toetsen: `1`, `2`, `3` kiezen de linker, middelste of rechter kaart; pijltjes links/rechts verplaatsen de focus over de kaarten en Enter of spatie kiest; `Escape` = terug.

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

**Drie niveaus** (knoppen in de balk; §3 en `woordenlijst-vis.md`), elk **56 woorden**, allemaal
concrete, klankzuivere zelfstandige naamwoorden uit de woordenschat van een 6-7-jarige:

| Niveau | Woordtype (leerlijn groep 3) | AVI | Voorbeelden |
|--------|------------------------------|-----|-------------|
| **kleine vis** | (m)k(m)-woorden met één klinkerteken: a, e, i, o, u, aa, ee, oo, uu, oe, ie | Start / M3 | vis, kip, zon, bus, maan, boom, koe, mier |
| **grote vis** | eenlettergrepig met tweetekenklank (ui, ij, ei, eu, ou, au, eeuw) en/of medeklinkercluster (mmkm, mkmm, mmkmm), sch-, -ng, -nk | M3 / E3 | muis, ijs, geit, deur, touw, stoel, hond, schaap, kwast |
| **haai** | twee- en drielettergrepige woorden en samenstellingen | E3 / M4 | konijn, paraplu, olifant, voetbal, tandenborstel, vuurtoren |

**Opgavezak** (`Woorden.Opgavezak`, pure functies in `js/woorden.js`): het woord komt uit een
shuffle-bag over alle woorden van het niveau (elk woord even vaak, nooit twee keer achter elkaar).
De twee **afleiders** komen uit hetzelfde niveau: bij kleine vis willekeurig, bij grote vis en haai
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
*tandenborstel* op een kaart past. **Lettersoort**: schrijfletters (Lusletters + ss01, standaard) of
blokletters (de drukletter-fontstapel van §6.4), altijd kleine letters; één knop is aan.

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

### 6.3 Iconenlijst (alle als eigen SVG) ✅ allemaal getekend in `js/icons.js` (fase 4; toetsenbord fase 10; Vis fase 12)

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

Daarnaast bevat `js/plaatjes.js` de 168 woordplaatjes van Vis (§5.5), in dezelfde stijl maar los van de iconenlijst.

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

### 7.2 Raketje-animaties (~1,5 s) ✅ fase 5: alle drie gebouwd, duur 1,4 s

1. Raket stijgt op met rook en vlam, ster valt naar de teller.
2. Raket maakt een looping.
3. Raket vliegt langs een planeet of maan.

### 7.4 Vis-animaties (~1,4 s) ✅ fase 12: alle drie gebouwd

1. Visje springt op uit het water (boog met draai), spetters bij de start; schelp vliegt naar de teller.
2. Visje zwemt naar de goede kaart, keert om (spiegelt) en zwemt terug.
3. Visje blaast zes bubbels die opstijgen en wiebelt van plezier.

Rust-animatie: wiegt zachtjes, staart zwaait heen en weer (ook in het menu).

### 7.3 Geluid (Web Audio, gesynthetiseerd) ✅ fase 5: zeven geluiden in `js/audio.js`; fase 12: *blub* erbij

| Moment | Geluid |
|--------|--------|
| Goed | Korte vrolijke drieklank omhoog (do-mi-sol) |
| Fout | Zacht, laag "boing", nooit hard of schril |
| Animatie | Korte "whoosh" (raket), aapje-"oe-oe" (synthetische toon met vibrato) of "blub" (vis: twee korte bubbeltoontjes omhoog) |
| Knop klikken | Zachte klik/pop |
| Toggle aan/uit | Toon omhoog / omlaag |

Standaard staat geluid aan; het luidspreker-icoon onthoudt de stand alleen binnen de sessie (geen opslag, conform keuze).

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

Totaal ca. 7-9 werkdagen doorlooptijd bij deeltijdinzet; de fases 2 en 3 zijn onafhankelijk en kunnen parallel.

### 9.1 Latere uitbreidingen (buiten fase 1)

- Tweetekenklanken (ee, oo, oe, eu, ui, ij, au, ou, ei, ie, ng, ch) met aan/uit-icoon; kind typt twee toetsen.
- ✅ *Gedaan in fase 8:* hoofdletters en blokletters als alternatieve lettersets (§5.2).
- Voortgang opslaan in `localStorage` met avatar-keuze voor meerdere kinderen.
- Woordjes typen (klankzuivere mkm-woorden: b-oo-m) als tweede taalspel. ✅ *Grotendeels gedaan in fase 12*, maar anders: Vis laat het kind woorden **lezen** en kiezen uit drie (§5.5), niet typen. Woorden typen (bij een plaatje het woord intoetsen, met de woordenlijst van Vis) blijft een mogelijke vierde spelvorm.
- Vis: eigen klankopnames of voorgelezen woorden; een vierde niveau met niet-klankzuivere woorden (groep 4); de woordenlijst uitbreiden of per kind aanpassen.
- ✅ *Gedaan in fase 8:* Montessori-kralen als visueel hulpmiddel bij de sommen (§5.3). Een getallenlijn is niet gemaakt.
- Eigen klankopnames per letter (Montessori-klank) als geluid later toch gewenst is.

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

**Handmatig (checklist)**

- ✅ Chrome en Firefox: start vanaf `file://` zonder foutmeldingen (headless gecontroleerd). Edge: niet geautomatiseerd te controleren op deze pc; op de doel-pc handmatig openen.
- Toetsenbord: letters, Shift + letter, Caps Lock, numpad, bovenste cijferrij, Backspace, Escape, F11.
- Muis: alle knoppen; dubbelklik geeft geen dubbele actie.
- ✅ Gedragstest fase 8/9 (geautomatiseerd in Chrome, 27 checks): letterset-schakelaars via klik en toets `1`-`4`, basisset niet uit te zetten, dubbelklik geeft één actie, hoofdletter op de kaart wordt met de kleine letter goed beantwoord, kralen aan/uit via klik en `H`, kralen kloppen met plus/min/keer/deel-sommen en blijven staan na een bezoek aan het menu. Fase 9 erbij: de schrijfletter kan uit zolang er een andere soort aan staat, de laatste soort blijft altijd aan (klik en toets), de drie niveauknoppen werken via klik en `K`/`G`/`S`, supersommen blijven onder 100 en het niveau blijft staan na een bezoek aan het menu.
- ✅ Gedragstest fase 10 (geautomatiseerd in Chrome, 36 checks): aanraakstand uit op een pc; aan via de menuknop en via `T`, dubbelklik geeft één actie; bij Aapje staat het toetsenbord meteen in beeld, een foute tik geeft nog geen hint, twee foute tikken laten de juiste toets pulseren, een goede tik telt een banaan, tikken tijdens de animatie worden genegeerd, na de animatie komt een nieuwe letter en blijft het toetsenbord staan; bij Raketje is de wistoets zichtbaar, een juist eerste cijfer blijft staan, de wistoets wist het, na twee fouten pulseert het eerste cijfer en springt de hint naar het tweede, het volledige antwoord geeft een ster; in de pc-stand doet een tik niets en is de wistoets weg.
- ✅ Gedragstest fase 12 (geautomatiseerd in Chrome, 37 checks): `V` en `3` openen Vis, pijltjes in het menu lopen over drie knoppen; beginstand woord-vorm / kleine vis / schrijfletters; opgave toont het woord met gekleurde letters en drie plaatjeskaarten; foute klik vervaagt de kaart en schakelt hem uit, geen hint na één fout, tweede fout via cijfertoets laat de goede kaart pulseren; goed via toets telt een schelp, start een visanimatie, toetsen tijdens de animatie worden genegeerd, daarna nieuwe opgave met schone kaarten en opgeruimde effecten; pijltjes verplaatsen de focus; `P`/`W` en klikken schakelen de vormen (laatste blijft aan, dubbelklik één actie), `B`/`S` de lettersoort, `H`/`G`/`K` en klikken het niveau; Escape tijdens de animatie ruimt op, instellingen en schelpen blijven staan na een bezoek aan het menu.
- ✅ Gedragstest fase 13 (geautomatiseerd in Chrome, 22 checks): beginstand alleen `+` aan, zonder slotje of `aria-disabled`; klik en toets `+` op de enige aanstaande soort doen niets; `−` erbij en dan `+` uit laat alleen `−` over en geeft meteen een minsom; klik en toets op de laatste soort doen niets en de som blijft staan; via `*` en `-` alleen `×` over, drie goed beantwoorde sommen zijn allemaal keersommen en geven drie sterren; dubbele toets `+` geeft één actie; alle vier aan en dan alle vier uit klikken laat de laatste (`÷`) aan met een deelsom; de stand blijft na een bezoek aan het menu.
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
| Kindtest voor Vis ontbreekt nog | Zoals bij fase 8-10 nog niet gedaan; zie §13. |

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
