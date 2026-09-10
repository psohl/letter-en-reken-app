# Woordenlijst voor het spel Vis

Versie 1.0 · 10 september 2026 · hoort bij `taal-en-reken-app-ontwikkelplan.md` §5.5

Het spel **Vis** laat het kind woorden lezen: bij een woord het juiste plaatje kiezen, of bij een
plaatje het juiste woord. De woorden staan in `js/woorden.js`, de bijbehorende tekeningen in
`js/plaatjes.js`. Dit document legt vast **welke woorden** in welk niveau zitten en **waarom**.

## 1. Wat kinderen van 6-7 jaar leren lezen (onderzoek)

Kinderen van 6-7 jaar zitten in groep 3 en leren daar technisch lezen. Alle Nederlandse
leesmethodes (Veilig leren lezen kim-versie, Lijn 3) en de AVI-niveaus bouwen dat op dezelfde
manier op:

| Moment in groep 3 | AVI | Woordtype | Voorbeelden uit de bronnen |
|-------------------|-----|-----------|----------------------------|
| Start tot halverwege (kern start t/m 6 van Veilig leren lezen) | Start, M3 | **Klankzuivere mkm-woorden**: medeklinker-klinker-medeklinker, ook km en mk. Eerst de korte klinkers (a, e, i, o, u) en de lange klinkers met twee tekens (aa, ee, oo, uu, oe, ie); daarna komen de tweetekenklanken ij, eu, ou, ui, au, ei erbij. | ik, kim, kip, aap, vis, maan, pet, boot, doos, zon, bus, jas, ziek, vuur |
| Halverwege tot einde (kern 7 t/m 11) | M3, E3 | **Medeklinkerclusters**: mmkm (stoel, druif), mkmm (kast, melk), mmkmm (kwast, sterk); woorden met sch-, -ng, -nk, -cht; woorden op -d of -b; alle tweetekenklanken | klap, strand, lamp, kast, stop, druif, berg, bank, school |
| Einde groep 3 en begin groep 4 (kern 11-12) | E3, M4 | **Twee- en drielettergrepige woorden**: samenstellingen (voetbal, zakmes), verkleinwoorden (-je, -tje), woorden met open lettergreep (bo-men), minder frequente tweelettergrepige woorden en eenvoudige drielettergrepige woorden | voetbal, klimrek, zakmes, konijn, paraplu |

Kernpunten uit de bronnen:

- Veilig leren lezen kim-versie biedt in kern start de letters i, k, m, s aan; kern 1: p, aa, r, e, v;
  kern 2: n, t, ee, b, oo; kern 3: d, oe, z, ij, h; kern 4: w, o, a, u, j; kern 5: eu, ie, l, ou, uu;
  kern 6: g, ui, au, f, ei. Na kern 6 kent het kind alle letters en klanken en gaat het door met
  clusters, samenstellingen en meerlettergrepige woorden (kern 7-12).
- AVI M3: korte zinnen met klankzuivere woorden zoals *vis, maan, boom*, maar ook al woorden met
  twee medeklinkers voor of achter (*klap, strand, lamp*) en de klanken sch- en -ng.
- AVI E3: tweelettergrepige woorden komen erbij; AVI M4: ook minder gangbare tweelettergrepige en
  eenvoudige drielettergrepige woorden.
- Tussendoelen technisch lezen groep 3 (leerlijnentaal.nl): start = klankzuivere km-, mk- en
  mkm-woorden (*ik, ja, vis*) zonder spellend lezen; vervolg = mmkm, mkmm en mmkmm (*stip, kast,
  kwast*) en korte meerlettergrepige woorden.

Daaruit volgen de drie niveaus van Vis. Elk niveau heeft **56 woorden**. Voor alle woorden geldt:

- het zijn **concrete zelfstandige naamwoorden** die duidelijk te tekenen zijn (geen *lief*, *daar*);
- ze zijn **klankzuiver** en bestaan alleen uit kleine letters a-z (geen c, q, x, y, geen trema's);
- ze komen voor in de woordenschat van een kind van 6-7 jaar (dieren, eten, speelgoed, huis, school, natuur);
- geen woord komt in twee niveaus voor.

De kleuren volgen Aapje: klinkers (a, e, i, o, u) blauw, medeklinkers rood. De **ij** telt als één
klinker en is dus in zijn geheel blauw, omdat het kind de ij als één klank leert.

## 2. Niveau 1 · kleine vis (56 woorden)

Klankzuivere (m)k(m)-woorden met één klinker(teken): de korte klinkers a, e, i, o, u en de lange
klinkers aa, ee, oo, uu, oe, ie. Precies de woorden van AVI Start en M3 en van kern start t/m 5.

| Klank | Woorden |
|-------|---------|
| a | bal, kat, jas, zak, pan, kam, rat, tas |
| e | pen, bed, hek, mes, pet |
| i | vis, kip, wip |
| o | zon, pop, vos, bos, tol, mol, rok, sok, pot |
| u | bus, mug, put, mus, hut |
| aa | maan, aap, haan, kaas, raam, vaas, zaag |
| ee | beer, peer, zeep, fee |
| oo | boom, boot, roos, doos |
| uu | vuur, muur |
| oe | boek, koe, doek, hoed, voet, koek, boer |
| ie | mier, wiel |

## 3. Niveau 2 · grote vis (56 woorden)

Eenlettergrepige woorden met een **tweetekenklank** (ui, ij, ei, eu, ou, au, eeuw) en/of een
**medeklinkercluster** (mmkm, mkmm, mmkmm), en de klanken sch-, -ng en -nk. Dit is AVI M3/E3 en
kern 6 t/m 10.

| Kenmerk | Woorden |
|---------|---------|
| ui | muis, huis, duif, trui, ui |
| ij | ijs, bij, pijl |
| ei | ei, geit, trein |
| eu / eeuw | reus, deur, neus, leeuw |
| ou / au | touw, hout, pauw |
| cluster vooraan (mmkm) | bril, vlag, slak, spin, kraan, trap, klok, stoel, brood, fles, bloem, kroon, draak, zwaan, knoop, plant, spook, snoep, broek, vlieg |
| sch- | schoen, schaap, schip |
| cluster achteraan (mkmm) | hond, kast, lamp, tent, bank, ring, tand, melk, worst, berg, mand, fiets, wolk, vork |
| cluster voor en achter (mmkmm) | kwast |

## 4. Niveau 3 · haai (56 woorden)

Twee- en drielettergrepige woorden en samenstellingen: AVI E3/M4, kern 11-12 en het begin van
groep 4. De afleiders lijken hier bewust op het woord (zelfde beginletter, lengte of eindletter),
zodat het kind het hele woord moet lezen.

| Kenmerk | Woorden |
|---------|---------|
| tweelettergrepig, klemtoon voor | appel, vlinder, panda, wortel, kikker, tijger, vogel, auto, tafel, robot, egel, spiegel, ladder, emmer, schommel, dolfijn, kameel, zebra, sleutel, trommel, molen, toren, prinses, ballon |
| tweelettergrepig, klemtoon achter | banaan, konijn, tomaat, kasteel, piraat, raket, gitaar |
| drielettergrepig | olifant, paraplu, kabouter, krokodil, papegaai, telefoon |
| samenstelling | voetbal, aardbei, tandenborstel, vliegtuig, schildpad, eekhoorn, zeehond, walvis, regenboog, sneeuwpop, zonnebril, pannenkoek, boterham, paddenstoel, glijbaan, potlood, rugzak, vuurtoren, ijsbeer |

## 5. Bewust niet opgenomen

- Woorden met c, q, x, y of een niet-klankzuivere spelling (*giraf*, *citroen*, *cadeau*, *chocolade*):
  die horen bij de spellingcategorieën van groep 4 en later.
- Abstracte woorden en werkwoorden (*lief*, *lopen*): er is geen eenduidig plaatje van te maken.
- Synoniemen binnen één niveau (*kat* en *poes*): bij een plaatje van een kat zouden dan twee woorden
  goed zijn. Daarom zit alleen *kat* in de lijst. Woorden die op elkaar lijken maar wel allebei
  nodig zijn (*boom* en *bos*, *kip* en *haan*, *beer* en *ijsbeer*) hebben plaatjes die duidelijk
  verschillen of zitten in verschillende niveaus.

## 6. Bronnen

- Syboor, decodeerbare woorden per kern bij Veilig leren lezen (kim-versie): https://syboor.eu/woordjes/lijsten/kim_maan
- Syboor, decodeerbare woorden bij Lijn 3: https://syboor.eu/woordjes/lijsten/lijn3
- Taal-oefenen.nl, klankzuivere mkm-woorden: https://www.taal-oefenen.nl/ondersteunende-materialen/spelling/woordkaarten/klankwoorden/klankzuivere-mkm-woorden
- Beter leren lezen, AVI M3 en E3 (kenmerken en voorbeeldwoorden): https://www.beterlerenlezen.nl/page/leesniveau-m3 en https://www.beterlerenlezen.nl/page/leesniveau-e3
- Leerlijnen taal (SLO/Expertisecentrum Nederlands), tussendoelen technisch lezen start en vervolg: https://www.leerlijnentaal.nl/page/150/technisch-lezen-en-schrijven-start-en-vervolg.html
- Leerlijn maan technisch lezen, Veilig leren lezen kim-versie (woordtypen per kern): https://obspwa.nl/wp-content/uploads/2018/04/vllkim-art-leerlijn-maan-technisch-lezen.pdf
- Zwijsen, Veilig leren lezen kim-versie: https://www.zwijsen.nl/lesmethodes/veilig-leren-lezen-kim-versie/
- Educatheek, alles over AVI-niveaus: https://www.educatheek.nl/alles-over-avi-lezen-en-avi-niveaus
- Juf Milou, leren lezen met de letters eu, ie, oe, ou, ui (werkbladen groep 3): https://www.juf-milou.nl/
- De Kleine g, leren lezen in groep 3: https://www.dekleineg.nl/schrijfsels/hoe-je-je-kind-kunt-ondersteunen-bij-het-leren-lezen-in-groep-3/
