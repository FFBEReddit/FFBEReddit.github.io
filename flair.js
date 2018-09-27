/* FLAIR MASTER CONFIG */ 
flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                unit_id: data[2],
                orig_id: orig_id,
                unit_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [FFBE Original (be)] */
	"001 be 001": "Rain",
	"005 be 005": "Lasswell",
	"009 be 009": "Fina",
	"013 be 013": "(Disabled) Rizer",
	"015 be 015": "(Disabled) Leah",
	"017 be 017": "(Disabled) Tronn",
	"019 be 019": "(Disabled) Eldin",
	"021 be 021": "(Disabled) Baurg",
	"023 be 023": "(Disabled) Gimlee",
	"025 be 025": "(Disabled) Maxell",
	"027 be 027": "(Disabled) Liza",
	"053 be 053": "Shiki",
	"055 be 055": "Mizell",
	"057 be 057": "Ronaldo",
	"059 be 059": "Mel",
	"103 be 103": "(Disabled) Clyne",
	"105 be 105": "Anselm",
	"107 be 107": "Luna",
	"109 be 109": "Bedile",
	"149 be 149": "Duane",
	"152 be 152": "Cerius",
	"155 be 155": "Roselia",
	"158 be 158": "Medius",
	"161 be 161": "(Disabled) Sarai",
	"163 be 163": "(Disabled) Paula",
	"165 be 165": "(Disabled) Kenyu",
	"167 be 167": "(Disabled) Ollie",
	"169 be 169": "Carrie",
	"171 be 171": "Skaha",
	"173 be 173": "Montana",
	"175 be 175": "Russell",
	"177 be 177": "Miyuki",
	"185 be 185": "Xiao",
	"191 be 191": "Artemios",
	"203 be 203": "(Disabled) Gilbert",
	"214 be 214": "(Disabled) Rakshasa",
	"217 be 217": "Chizuru",
	"219 be 219": "Hayate",
	"240 be 240": "Lid",
	"251 be 251": "Ludmille",
	"254 be 254": "Charlotte",
	"304 be 304": "Nichol",
	"365 be 365": "Mercedes",
	"385 be 385": "Dark Fina",
	"387 be 387": "Elle",
	"390 be 390": "Luka",
	"393 be 393": "Jake",
	"401 be 401": "Soleil",
	"404 be 404": "Lawrence",
	"409 be 409": "Shine",
	"412 be 412": "Shiera",
	"415 be 415": "Marie",
	"445 be 445": "Emperor Soze",
	"448 be 448": "Heltich",
	"451 be 451": "Eileen",
	"453 be 453": "Ulrika",
	"464 be 464": "Sakura",
	"469 be 469": "Wilhelm",
	"471 be 471": "Grace",
	"474 be 474": "Abel",
	"477 be 477": "Jean",
	"493 be 493": "Summer Fina",
	"496 be 496": "Summer Dark Fina",
	"498 be 498": "Summer Lid",
	"513 be 513": "(SE#01) Fohlen",
	"515 be 515": "(SE#01) Amelia",
	"518 be 518": "(SE#01) Ilias",
	"521 be 521": "(SE#01) Camille",
	"540 be 540": "(SE#02) Runera",
	"542 be 542": "(SE#02) Blanc",
	"545 be 545": "(SE#02) Helena",
	"548 be 548": "(SE#02) Ruggles",
	"573 be 573": "(SE#03) Dark Veritas",
	"575 be 575": "(SE#03) Fire Veritas",
	"577 be 577": "(SE#03) Earth Veritas",
	"580 be 580": "(SE#03) Victoria",
	"583 be 583": "(SE#03) Tim",
	"586 be 586": "Moogle",
	"600 be 600": "(SE#04) Light Veritas",
	"602 be 602": "(SE#04) Wind Veritas",
	"605 be 605": "(SE#04) Water Veritas",
	"610 be 610": "(SE#04) Aura",
	"613 be 613": "(SE#04) Grom",
	"649 be 649": "(EX) Lorraine",
	"651 be 651": "(SE#05) Ayaka",
	"653 be 653": "(SE#05) Gouken",
	"656 be 656": "(SE#05) Sylvia",
	"659 be 659": "(SE#05) Kamui",
	"662 be 662": "(SE#05) Yuri",
	"683 be 683": "Elfried",
	"685 be 685": "Conrad",
	"688 be 688": "William",
	"691 be 691": "(SE#06) Roy",
	"693 be 693": "(SE#06) Chloe",
	"696 be 696": "(SE#06) Amy",
	"699 be 699": "Kelsus",
	"701 be 701": "Ashterose",
	"704 be 704": "Nyarl",
	"707 be 707": "Kupolukan",
	"710 be 710": "Sandy",
	"713 be 713": "Grinfield",
	"724 be 724": "(SE#07) Duke",
	"726 be 726": "(SE#07) Orif",
	"729 be 729": "(SE#07) Mistair",
	"732 be 732": "(SE#07) Shaly",
	"735 be 735": "(SE#07) Ryunan",
	"761 be 761": "(SE#08) Jiraiya",
	"763 be 763": "(SE#08) Kaede",
	"766 be 766": "(SE#08) Ouga",
	"769 be 769": "(SE#08) Otogiri",
	"772 be 772": "(SE#08) CG Lasswell",
	"793 be 793": "(SE#09) CG Sakura",
	"795 be 795": "(SE#09) Vern",
	"798 be 798": "(SE#09) Sedona",
	"815 be 815": "(SE#10) CG Fina",
	"817 be 817": "(SE#10) Kunshira",
	"819 be 819": "(SE#10) Wado",
	"822 be 822": "(SE#10) Erwin/Hauyn",
	"843 be 843": "(SE#11) CG Jake",
	"845 be 845": "(SE#11) Emperor Shiera",
	"847 be 847": "(SE#11) Emilia",
	"850 be 850": "(SE#11) Ozetta",
	"853 be 853": "(SE#11) Riley",
	"886 be 886": "(SE#12) CG Lid",
	"888 be 888": "(SE#12) Killian",
	"904 be 904": "(EX) Medina",
	"908 be 908": "Lila",
	"910 be 910": "Silt",
	"913 be 913": "Mim",
	"916 be 916": "(SE#13) CG Nichol",
	"918 be 918": "(SE#13) Lekisa",
	"921 be 921": "(SE#13) Elvis",
	"924 be 924": "(SE#13) Merald",
	"941 be 941": "(SE#14) CG Reagan",
	"943 be 943": "(SE#14) Luminui",
	"946 be 946": "(SE#14) Xyle",
	"949 be 949": "(SE#14) Lucille",
	"952 be 952": "(2nd Anni) Wandering Rain",
	"954 be 954": "Awakened Rain",
	"965 be 965": "Lamira",
	"989 be 989": "(SE#15) Naru/Nal",
	"992 be 992": "(SE#15) Pezzotta",
	"995 be 995": "(SE#15) Shinju",
	"998 be 998": "(SE#15) Ryuka",
	"1038 be 1038": "(SE#16) CG Hyou",
	"1041 be 1041": "(SE#16) Shatal",
	"1044 be 1044": "(SE#16) Domino",
	"1050 be 1050": "Ukiyo",
	"1086 be 1086": "(SE#17) CG Citra",
	"1089 be 1089": "(SE#17) Makumedi",
	"1092 be 1092": "(SE#17) Lottie",
	"1137 be 1137": "(SE#18) Elfim",
	"1140 be 1140": "(SE#18) Leopold",
	"1143 be 1143": "(SE#18) Magna",
	"1146 be 1146": "(SE#18) Forelske",	
	"1171 be 1171": "(SE#19) CG Sieghart (Sieghard)",
	"1174 be 1174": "(SE#19) Dietlinde",
	"1177 be 1177": "(SE#19) Theobalt",
	"1180 be 1180": "(SE#19) Kanon",
	"1185 be 1185": "Yuraisha",
	"1188 be 1188": "Franis",
	"1191 be 1191": "Ishil",
	"1207 be 1207": "(SE#20) CG Folka",
	"1210 be 1210": "(SE#20) Yubel",
	"1213 be 1213": "(SE#20) Kihana",
	"1216 be 1216": "(SE#20) Ekor",
	"1249 be 1249": "(SE#21) CG Ignacio",
	"1252 be 1252": "(SE#21) Suzume",
	"1255 be 1255": "(SE#21) PNK-2",
	"1258 be 1258": "(SE#21) Weyham",
	"1282 be 1282": "(SE#22) CG Cid",
	"1285 be 1285": "(SE#22) Melete",
	"1288 be 1288": "(SE#22) Nagulfa",
	"1291 be 1291": "(SE#22) Farma",
	"1294 be 1294": "(EX) Karlotte",
	"1297 be 1297": "(Raid) Nagi",
	"1300 be 1300": "(Raid) Yego (イーゴ)",
	"1303 be 1303": "(Raid) Zolulu & Delulu (ゾルル＆デルル)",
	"1306 be 1306": "(Raid) Galas (ガーラス)",
	"1324 be 1324": "(SE#23) CG Akstar",
	"1327 be 1327": "(SE#23) Gravie",
	"1330 be 1330": "(SE#23) Tomoe",
	"1333 be 1333": "(SE#23) Majora",
	"1361 be 1361": "CG Summer Fina & Lid 2018",
	"1364 be 1364": "(SE#24) Crimson",
	"1367 be 1367": "(SE#24) Kyanos",
	"1370 be 1370": "(SE#24) Milfas",
	"1392 be 1392": "CG Summer Folka & Citra 2018",
	"1395 be 1395": "(SE#25) Regina",
	"1398 be 1398": "(SE#25) Amber",
	"1401 be 1401": "(SE#25) Vesuvia",
	"1404 be 1404": "(SE#25) Chrowa",
/* [Final Fantasy (ff)] */
	"029 ff 029": "(FF6) Wedge",
	"031 ff 031": "(FF6) Biggs",
	"033 ff 033": "(FF2) Paul",
	"037 ff 037": "(FF12) Anastasis",
	"049 ff 049": "(FF1) Sarah",
	"051 ff 051": "(FF4) Giotto King",
	"079 ff 079": "(FF9) Vivi",
	"081 ff 081": "(FF12) Penelo",
	"083 ff 083": "(FF2) Maria",
	"085 ff 085": "(FF6) Sabin",
	"087 ff 087": "(FF6) Shadow",
	"089 ff 089": "(FF5) Krile",
	"091 ff 091": "(FF4) Kain",
	"093 ff 093": "(FF6) Edgar",
	"095 ff 095": "(FF12) Fran",
	"097 ff 097": "(FF11) Shantotto",
	"099 ff 099": "(FF4) Rydia",
	"101 ff 101": "(FF6) Cyan",
	"111 ff 111": "(FF1) Garland",
	"117 ff 117": "(FF5) Exdeath",
	"123 ff 123": "(FF9) Kuja",
	"126 ff 126": "(FF3) Cloud of Darkness",
	"129 ff 129": "(FF4) Cecil",
	"132 ff 132": "(FF6) Terra",
	"135 ff 135": "(FF6) Magitek Terra",
	"137 ff 137": "(FF5) Bartz",
	"140 ff 140": "(FF2) Firion",
	"143 ff 143": "(FF9) Zidane",
	"146 ff 146": "(FF12) Vaan",
	"180 ff 180": "(FF4) Golbez",
	"183 ff 183": "(FF5) Galuf",
	"194 ff 194": "(FF6) Locke",
	"197 ff 197": "(FF6) Leo",
	"206 ff 206": "(FF6) Celes",
	"209 ff 209": "(FF6) Kefka",
	"222 ff 222": "(FF1) Warrior of Light",
	"224 ff 224": "(FF4) Tellah",
	"227 ff 227": "(FF5) Lenna",
	"230 ff 230": "(FF9) Garnet",
	"232 ff 232": "(FF9) Freya",
	"235 ff 235": "(FF9) Amarant",
	"238 ff 238": "(FF9) Lani",
	"257 ff 257": "(FF13) Lightning",
	"273 ff 273": "(FF13) Snow",
	"276 ff 276": "(FF13) Vanille",
	"278 ff 278": "(FF13) Sazh",
	"281 ff 281": "(FF13) Hope",
	"283 ff 283": "(FF13) Fang",
	"292 ff 292": "(FF4) Rosa",
	"294 ff 294": "(FF4) Dark Knight Cecil",
	"296 ff 296": "(FF4) Edge",
	"318 ff 318": "(FF3) Luneth",
	"320 ff 320": "(FF3) Arc",
	"323 ff 323": "(FF3) Refia",
	"326 ff 326": "(FF3) Ingus",
	"360 ff 360": "(FF5) Faris",
	"363 ff 363": "(FF5) Gilgamesh",
	"417 ff 417": "(FF2) Guy",
	"420 ff 420": "(FF2) Leon",
	"422 ff 422": "(FF2) Emperor",
	"467 ff 467": "(FF10) Tidus",
	"485 ff 485": "(FF14) Y'shtola",
	"487 ff 487": "(FF14) Thancred",
	"490 ff 490": "(FF14) Minfilia",
	"503 ff 503": "(FF6) Trance Terra",
	"505 ff 505": "(FF6) Setzer",
	"508 ff 508": "(FF6) Gau",
	"524 ff 524": "(FF10) Rikku",
	"527 ff 527": "(FF10) Wakka",
	"530 ff 530": "(FF12) Balthier",
	"532 ff 532": "(FF12) Ashe",
	"535 ff 535": "(FF12) Rasler",
	"552 ff 552": "(FF11) Werei",
	"555 ff 555": "(FF11) Kupipi",
	"558 ff 558": "(FF11) Prishe",
	"589 ff 589": "(FF3) Onion Knight",
	"591 ff 591": "(FF3) Aria",
	"594 ff 594": "(FF3) Desch",
	"597 ff 597": "(FF3) Sara",
	"616 ff 616": "(FF15) Noctis",
	"638 ff 638": "(FF15) Nyx",
	"640 ff 640": "(FF15) Glauca",
	"643 ff 643": "(FF15) Crowe",
	"646 ff 646": "(FF15) Libertus",
	"681 ff 681": "(FF7) Cloud",
	"716 ff 716": "(FF15) Gladio",
	"718 ff 718": "(FF15) Cor",
	"721 ff 721": "(FF15) Iris",
	"738 ff 738": "(FF14) Yda",
	"741 ff 741": "(FF14) Papalymo",
	"749 ff 749": "(FF9) Beatrix",
	"751 ff 751": "(FF9) Steiner",
	"754 ff 754": "(FF9) Eiko",
	"756 ff 756": "(FF9) Black Waltz 3",
	"785 ff 785": "(FF10) Yuna",
	"787 ff 787": "(FF10) Lulu",
	"789 ff 789": "(FF10) Seymour",
	"825 ff 825": "(FF15) Aranea",
	"827 ff 827": "(FF15) Prompto",
	"830 ff 830": "(FF12) Basch",
	"832 ff 832": "(FF12) Gabranth",
	"834 ff 834": "(FF12) Vayne",
	"837 ff 837": "(FF12) Drace",
	"840 ff 840": "(FF12) Larsa",
	"875 ff 875": "(FF4) Kid Rydia",
	"877 ff 877": "(FF4) Helmless Kain",
	"879 ff 879": "(FF4) Yang",
	"882 ff 882": "(FF4) Edward",
	"906 ff 906": "(FF7) Sephiroth",
	"956 ff 956": "(FF8) Squall",
	"959 ff 959": "(FF8) Rinoa",
	"962 ff 962": "(FF8) Zell",
	"1017 ff 1017": "(FF11) Shantotto II",
	"1020 ff 1020": "(FF11) Shadowlord",
	"1023 ff 1023": "(FF11) Joachim",
	"1052 ff 1052": "(FF15) Ignis",
	"1055 ff 1055": "(FF15) Ravus",
	"8059 ff 8059": "(FF12) Zargabaath",
	"8073 ff 8073": "(FF4) Scarmiglione",
	"8076 ff 8076": "(FF4) Cagnazzo",
	"8091 ff 8091": "(FF4) Barbariccia",
	"8094 ff 8094": "(FF4) Rubicante",
	"ur01 ff ur01": "(FF2) Leila *Unreleased",
	"ur02 ff ur02": "(FF3) Doga *Unreleased",
	"ur03 ff ur03": "(FF5) Mid Previa *Unreleased",
	"ur04 ff ur04": "(FF9) Quina *Unreleased",
	"ur05 ff ur05": "(FF12) Reddas *Unreleased", 
	"ur06 ff ur06": "(FF3) Onion Knight *Beta",
	"ur07 ff ur07": "(FF6) Relm *Unreleased",
	"ur08 ff ur08": "(FF6) Umaro *Unreleased",
	"1110 ff 1110": "(FF7) Tifa",
	"1113 ff 1113": "(FF7) Vincent",
	"1116 ff 1116": "(FF7) Barret",
	"1119 ff 1119": "(FF7) Cait Sith",
	"1194 ff 1194": "(FF3) Onion Knight Refia",
	"1197 ff 1197": "(FF3) Dark Knight Luneth",
	"1200 ff 1200": "(FF3) Doga",
	"1203 ff 1203": "(FF3) Unei",
	"1237 ff 1237": "(FF10) Jecht",
	"1240 ff 1240": "(FF10) Auron",
	"1243 ff 1243": "(FF10) Belgemine",
	"1246 ff 1246": "(FF10) Brother",
	"1309 ff 1309": "(FF4) Dark Mage Golbez",
	"1355 ff 1355": "(FF7) Aerith",
	"1358 ff 1358": "(FF7) Red XIII",
	"1373 ff 1373": "(FF7) Zack",
	"1376 ff 1376": "(FF7) Yuffie",
	"1379 ff 1379": "(FF6) King Edgar",
	"1382 ff 1382": "(FF6) Fighter Sabin",
/* [Final Fantasy Spin-offs (spoff)] */
	"259 spoff 259": "(FFT) Ramza",
	"261 spoff 261": "(FFT) Delita",
	"263 spoff 263": "(FFT) Agrias",
	"265 spoff 265": "(FFT) Alma",
	"268 spoff 268": "(FFT) Gaffgarion",
	"270 spoff 270": "(FFT) Mustadio",
	"307 spoff 307": "(Type-0) Ace",
	"309 spoff 309": "(Type-0) Trey",
	"312 spoff 312": "(Type-0) Jack",
	"315 spoff 315": "(Type-0) Seven",
	"372 spoff 372": "(Type-0) Queen",
	"374 spoff 374": "(Type-0) Nine",
	"377 spoff 377": "(Type-0) Cinque",
	"380 spoff 380": "(Type-0) Eight",
	"396 spoff 396": "(FFT) Orlandu",
	"398 spoff 398": "(FFT) Ovelia",
	"456 spoff 456": "(Type-0) Rem",
	"458 spoff 458": "(Type-0) King",
	"461 spoff 461": "(Type-0) Sice",
	"561 spoff 561": "(FFT) Mercenary Ramza",
	"563 spoff 563": "(FFT) Knight Delita",
	"567 spoff 567": "(FFT) Meliadoul",
	"570 spoff 570": "(FFT) Orran",
	"1159 spoff 1159": "(Type-0) Machina",
	"1162 spoff 1162": "(Type-0) Kurasame",
	"1165 spoff 1165": "(Type-0) Deuce",
	"1168 spoff 1168": "(Type-0) Cater",
	"1270 spoff 1270": "(FFT) Ultima/Altima",
	"1273 spoff 1273": "(FFT) Beowulf",
	"1276 spoff 1276": "(FFT) Reis",
	"1279 spoff 1279": "(FFT) Contrust 8/Worker-8/C8",
/* [Collaborations (collab)] */
	"212 collab 212": "(Terra Battle) Samatha",
	"243 collab 243": "(Imperial Saga) Adel",
	"245 collab 245": "(Brave Frontier) Karl",
	"247 collab 247": "(Brave Frontier) Seria",
	"249 collab 249": "(Brave Frontier) Tilith",
	"286 collab 286": "(Crystal Defenders) Juggler",
	"288 collab 288": "(Crystal Defenders) Thief",
	"290 collab 290": "(Crystal Defenders) Fencer",
	"330 collab 330": "(Seiken Densetsu 2) Randi",
	"332 collab 332": "(Seiken Densetsu 2) Primm",
	"335 collab 335": "(Seiken Densetsu 2) Popoi",
	"425 collab 425": "(DQMSL) Dragonlord",
	"427 collab 427": "(DQMSL) Killing Machine",
	"429 collab 429": "(DQMSL) Slime",
	"432 collab 432": "(DQMSL) Golem",
	"435 collab 435": "(DQMSL) Orochi",
	"438 collab 438": "(DQMSL) Liquid Metal Slime",
	"440 collab 440": "(DQMSL) Robbin' 'ood",
	"481 collab 481": "(Brave Frontier) Vargas",
	"483 collab 483": "(Brave Frontier) Maxwell",
	"618 collab 618": "(MHXR) Hunter Rain",
	"620 collab 620": "(MHXR) Hunter Lasswell",
	"623 collab 623": "(MHXR) Hunter Fina",
	"626 collab 626": "(MHXR) Hunter Nichol",
	"629 collab 629": "(MHXR) Hunter Lid",
	"631 collab 631": "(MHXR) Hunter Sakura",
	"634 collab 634": "(MHXR) Hunter Jake",
	"665 collab 665": "(Romancing Saga 3) Julian",
	"667 collab 667": "(Romancing Saga 3) Katrina",
	"669 collab 669": "(Romancing Saga 3) Harid",
	"672 collab 672": "(Romancing Saga 3) Robin",
	"675 collab 675": "(Imperial Saga) Demigod Adel",
	"774 collab 774": "(Nier) 2B",
	"776 collab 776": "(Nier) 9S",
	"779 collab 779": "(Nier) Adam",
	"782 collab 782": "(Nier) 21O",
	"804 collab 804": "(Seiken Densetsu 3) Riesz",
	"806 collab 806": "(Seiken Densetsu 3) Hawkeye",
	"808 collab 808": "(Seiken Densetsu 3) Kevin",
	"810 collab 810": "(Seiken Densetsu 3) Carlie",
	"813 collab 813": "(Seiken Densetsu) Hero",
	"857 collab 857": "(Bravely Default) Tiz",
	"859 collab 859": "(Bravely Default) Agnes",
	"861 collab 861": "(Bravely Default) Bunny Agnes",
	"863 collab 863": "(Bravely Default) Edea",
	"866 collab 866": "(Bravely Default) Yu",
	"869 collab 869": "(Bravely Default) Magnolia",
	"872 collab 872": "(Bravely Default) Rinne",
	"928 collab 928": "(Star Ocean) Fayt",
	"930 collab 930": "(Star Ocean) Rena",
	"932 collab 932": "(Star Ocean) Fidel",
	"935 collab 935": "(Star Ocean) Reimi",
	"938 collab 938": "(Star Ocean) Roddick",
	"1002 collab 1002": "(DQMSL) Estark",
	"1005 collab 1005": "(DQMSL) Marquis de leon",
	"1008 collab 1008": "(DQMSL) Uberkilling Machine",
	"1011 collab 1011": "(DQMSL) Slime Knight",
	"1014 collab 1014": "(DQMSL) Dracky",
	"1059 collab 1059": "(King's Knight) Ray Jack",
	"1062 collab 1062": "(King's Knight) Kaliva",
	"1065 collab 1065": "(King's Knight) Toby",
	"1068 collab 1068": "(King's Knight) Barusa",
	"8012 collab 8012": "(Brave Frontier) Elza",
	"8062 collab 8062": "(Nier) A2",
	"8065 collab 8065": "(Nier) Eve",
	"1095 collab 1095": "(Valkyrie Profile) Lenneth",
	"1098 collab 1098": "(Valkyrie Profile) Freya",
	"1101 collab 1101": "(Valkyrie Profile) Arngrim",
	"1104 collab 1104": "(Valkyrie Profile) Lucian",
	"1107 collab 1107": "(Valkyrie Profile) Jelanda",
	"1149 collab 1149": "(Seiken Densetsu 2) Flammie",
	"1156 collab 1156": "(Seiken Densetsu 2) Rabbie",
	"8143 collab 8143": "(Tomb Raider) Lara Croft",
	"1219 collab 1219": "(Xenogears) Fei",
	"1222 collab 1222": "(Xenogears) Elly",
	"1225 collab 1225": "(Xenogears) Emeralda",
	"1228 collab 1228": "(Xenogears) Bart",
	"1231 collab 1231": "(Xenogears) Rico",
	"1234 collab 1234": "(Xenogears) Chu-Chu",
	"1261 collab 1261": "(Xenogears) Citan",
	"1264 collab 1264": "(Xenogears) Maria",
	"1267 collab 1267": "(Xenogears) Billy",
	"1336 collab 1336": "(Octopath Traveler) Primrose",
	"1339 collab 1339": "(Octopath Traveler) Olberic",
	"1342 collab 1342": "(Octopath Traveler) Therion",
	"1345 collab 1345": "(Octopath Traveler) Tressa",
	"1348 collab 1348": "(RikoDoki) Riko",
/* [Global Exclusives (glex)] */
	"678 glex 678": "Dangerous Ariana",
	"893 glex 893": "Reberta",
	"895 glex 895": "Ling",
	"898 glex 898": "Xon",
	"901 glex 901": "Aiden",
	"1047 glex 1047": "(Christmas) Santa Roselia",
	"8000 glex 8000": "(Halloween) Demon Rain",
	"8003 glex 8003": "(Halloween) Dracu Lasswell",
	"8006 glex 8006": "(Halloween) White Witch Fina",
	"8009 glex 8009": "(Halloween) Black Cat Lid",
	"8015 glex 8015": "(Christmas) White Knight Noel",
	"8026 glex 8026": "(Lunar New Year) Yun",
	"8033 glex 8033": "Cupid Artemios",
	"8036 glex 8036": "Cupid Luna",
	"8039 glex 8039": "Olive",
	"8042 glex 8042": "(Easter) Fryevia",
	"8054 glex 8054": "Zyrus",
	"8057 glex 8057": "(Fan Festa) Artisan Lid",
	"8071 glex 8071": "(Fan Festa) Swordsman Lasswell",
	"8079 glex 8079": "(Fan Festa) Cheerleader Fina",
	"8082 glex 8082": "(Halloween) Grim Lord Sakura",
	"8085 glex 8085": "(Halloween) Illusionist Nichol",
	"8088 glex 8088": "(Halloween) Pirate Jake",
	"8097 glex 8097": "Sportive Ariana",
	"8100 glex 8100": "Charming Kitty Ariana",
	"8102 glex 8102": "(Fan Festa) Maiden Sakura",
	"8104 glex 8104": "(Fan Festa) Cowboy Jake",
	"8106 glex 8106": "(Christmas) Christine",
	"8109 glex 8109": "(Christmas) Kryla",
	"8112 glex 8112": "(Christmas) Tinkerer Carrie",
	"8128 glex 8128": "(Festival of Love) Ang",
	"8131 glex 8131": "(Festival of Love) Chow",
	"8134 glex 8134": "(Festival of Love) Yan",
	"8137 glex 8137": "(TR x FFBE) Explorer Aileen",
	"8140 glex 8140": "(TR x FFBE) Divine Soleil",
	"8146 glex 8146": "(TR x FFBE) Pharaoh Soleil",
	"8158 glex 8158": "(Just Cause 3) Rico Rodriguez",
	"8152 glex 8152": "(Just Cause 3) Mario Frigo",
	"8155 glex 8155": "(Just Cause 3) Annika Svennson",
	"8149 glex 8149": "(Just Cause 3) Teo",
	"8166 glex 8166": "(Deus Ex: MD) Adam Jensen",
	"8169 glex 8169": "(Deus Ex: MD) Viktor",
	"8160 glex 8160": "(Deus Ex: MD) Václav Koller",
	"8163 glex 8163": "(Deus Ex: MD) Frank Pritchard",
	"8172 glex 8172": "(Summer 2018) Aloha Lasswell",
	"8175 glex 8175": "(Summer 2018) Seaside Nichol",
	"8178 glex 8178": "(Summer 2018) Summertime Luka",
	"8181 glex 8181": "(Summer 2018) Tide Rider Skaha",
	"8184 glex 8184": "(Fan Contest 2017) Malphasie",
	"8187 glex 8187": "(Fan Contest 2017) Circe",
/* [Others (other)] */
	"ms01 other ms01": "King Gil Snapper",
	"ms02 other ms02": "Mini Cactuar",
	"ms03 other ms03": "Cactuar",
	"ms04 other ms04": "Metal Gigantuar",
	"ms05 other ms05": "Moogle",
	"ms06 other ms06": "Goblin",
};
