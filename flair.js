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
/*Global: 5-23*/
	"1327 be 1327": "(SE#23) Gravey",
	"1330 be 1330": "(SE#23) Tomoe",
	"1333 be 1333": "(SE#23) Majora",
/*Global: 5-30*/
	"1297 be 1297": "(Raid) Nagi",
	"1300 be 1300": "(Raid) Yego",
	"1303 be 1303": "(Raid) Zolulu & Delulu",
	"1306 be 1306": "(Raid) Galas",
/*Global: 5-24*/
	"1379 ff 1379": "(FF6) King Edgar",
	"1382 ff 1382": "(FF6) Fighter Sabin",
/*Global: 6-20*/
	"1395 be 1395": "(SE#25) Regina",
	"1398 be 1398": "(SE#25) Amber",
	"1401 be 1401": "(SE#25) Vesvia",
	"1404 be 1404": "(SE#25) Krowa",
/*Global: 6-27*/
	"1355 ff 1355": "(FF7) Aerith",
	"1358 ff 1358": "(FF7) Red XIII",
/*Global: 7-18*/
	"1425 be 1425": "(SE#26) Friese",
	"1428 be 1428": "(SE#26) Shepard",
/*Global: 7-31*/
	"1434 be 1434": "Kimono Ayaka",
	"1437 be 1437": "Dress up Aileen",
/*Global: 8-1*/
	"8235 glex 8235": "(Empress of Virtue/SE#38) Morgana",
	"8256 glex 8256": "(Empress of Virtue/SE#38) Elena",
/*Global: 8-8*/
	"8259 glex 8259": "(Bomb Rush) Rivera",
	"1361 be 1361": "CG Summer Fina & Lid 2018",
	"1373 ff 1373": "(FF7) Zack",
	"1392 be 1392": "CG Summer Folka & Citra 2018",
/*Global: 8-15*/
	"1445 ff 1445": "(FF13) CG Lightning",
	"1448 ff 1448": "(FF13) Future Hope",
/*Global: 8-30*/
	"8238 be 8238": "(Demon Parade) Tsukiko",
	"8262 be 8262": "(Demon Parade) Kaito",
/*Global: 9-13*/
	"1481 ff 1481": "(FF5) CG Warrior of Light Bartz",
	"1484 ff 1484": "(FF5) Warrior of Light Lenna",
	"1487 be 1487": "Atlie",
	"1490 be 1490": "Tessen",
/*Global: 9-27*/
	"1460 be 1460": "(SE#27) Sol",
	"1463 be 1463": "(SE#27) Heliarc",
	"1466 be 1466": "(SE#27) Eclipsa",
	"1469 be 1469": "(SE#27) Pertira",
/*Global: 9-30*/
	"8247 glex 8247": "(Katy Perry) A.I. Katy",
	"8250 glex 8250": "(Katy Perry) Lovely Katy",
/*Global: 10-18*/
	"1535 ff 1535": "(FF2) Wild Rose Firion",
	"1538 ff 1538": "(FF2) Dark Knight Leon",
/*Global: 10-30*/
	"1493 be 1493": "(3rd Anni) Chocobo Fina",
	"1472 ff 1472": "(FF5) Warrior of Light Krile",
	"1475 ff 1475": "(FF5) Dark Mage Exdeath",
	"1478 ff 1478": "(FF5) Warrior of Dawn Galuf",
/*Global: 11/6*/
	"8241 glex 8241": "(Halloween 2019) Karten",
	"8268 glex 8268": "(Halloween 2019) Godrea",
/*Halloween*/
	"8000 glex 8000": "(Halloween 2016) Demon Rain",
	"8003 glex 8003": "(Halloween 2016) Dracu Lasswell",
	"8006 glex 8006": "(Halloween 2016) White Witch Fina",
	"8009 glex 8009": "(Halloween 2016) Black Cat Lid",
	"8082 glex 8082": "(Halloween 2017) Grim Lord Sakura",
	"8085 glex 8085": "(Halloween 2017) Illusionist Nichol",
	"8088 glex 8088": "(Halloween 2017) Pirate Jake",
	"8199 glex 8199": "(Halloween 2018) Lilith",
	"8202 glex 8202": "(Halloween 2018) Lucius",
/*Global: 11/13*/
	"1529 ff 1529": "(FF6) Assassin Shadow",
	"1532 ff 1532": "(FF6) Archmage Kefka",
/*Global: 11/20*/
	"1559 be 1559": "(SE#30) Aldore King Rain",
	"1562 be 1562": "(SE#30) Diezell",
	"1565 be 1565": "(SE#30) Maisie",
/*Global: 12/11*/
	"8271 glex 8271": "(Black Friday) Doctor Aiden",
	"8280 glex 8280": "(Black Friday) Operative Zyrus",
	"8274 glex 8274": "(Black Friday) Agent Olive",
	"8277 glex 8277": "(Black Friday) Mastermind Xon",
/*Global: 12/18*/
	"1496 be 1496": "(SE#28) Physalis",
	"1499 be 1499": "(SE#28) Juraga of the Nu Star",
	"1502 be 1502": "(SE#28) Gudon of the Xi Star",
/*Global: 12/25*/
	"1604 ff 1604": "(FF15) Crown Prince Noctis",
	"1610 ff 1610": "(FF15) Lunafreya",
	"1607 ff 1607": "(FF15) Gentiana",
	"1613 ff 1613": "(FF15) Kenny Crow",
/*Global: 1/1/20*/
	"1511 be 1511": "(Christmas 2018) Holy Night Amelia & Emilia",
	"1047 glex 1047": "(Christmas 2016) Santa Roselia",
	"8015 glex 8015": "(Christmas 2016) White Knight Noel",
	"8109 glex 8109": "(Christmas 2017) Kryla",
	"8112 glex 8112": "(Christmas 2017) Tinkerer Carrie",
	"8208 glex 8208": "(Christmas 2018) Tiana",
	"8211 glex 8211": "(Christmas 2018) Felix",
	"8283 glex 8283": "(Christmas 2019) Lucas",
	"8286 glex 8286": "(Christmas 2019) Levinson",
/*Global: 1/8/20*/
	"1541 be 1541": "(SE#29) CG White Lily Dark Fina",
/*Global: 1/15/20*/
	"1550 ff 1550": "(FF1) CG Warrior of Light",
	"1553 ff 1553": "(FF1) Immortal Knight Garland",
/*Global: 1/29/20*/
	"1586 be 1586": "(SE#31) Hess King Lasswell",
	"1592 be 1592": "(SE#31) Scartio",
	"1595 be 1595": "(SE#31) Sister",
/*Global: 2/12/20*/
	"895 glex 895": "Ling",
	"8026 glex 8026": "Yun",
	"8128 glex 8128": "Ang",
	"8134 glex 8134": "Yan",
	"8218 glex 8218": "Qin",
	"8226 glex 8226": "Bai Hu & Zhu Que",
	"8289 glex 8289": "(LNY2020) Emperor Foo",
	"8292 glex 8292": "(LNY2020) Xuan Wu & Qing Long",
/*Global: 4/8/20*/
	"8301 glex 8301": "(Full Metal Alchemist) King Bradley",
/*========================*/
/*Japan: 5-20*/
	"1619 be 1619": "(SE#32) Madam Edel",
	"1622 be 1622": "(SE#32) Almers",
	"1625 be 1625": "(SE#32) Winkle",
	"1639 be 1639": "(Season 3) Blue Mage Fina",
	"8214 collab 8214": "(Star Ocean 3) Sophia",
/*Japan: 5-31*/
	"1633 ff 1633": "(FF15) Ardyn",
	"1636 ff 1636": "(FF15) Regis",
/*Japan: 6-10*/
	"1642 ff 1642": "(FF4) Paladin Cecil",
	"1645 ff 1645": "(FF4) Palom & Porom",
	"1648 ff 1648": "(FF4) Cid",
	"1651 ff 1651": "(FF4) White Mage Rosa",
/*Japan: 6-16*/
	"1654 be 1654": "(SE#33) Elnath",
	"1657 be 1657": "(SE#33) Alde",
	"1660 be 1660": "(SE#33) Timorus",
/*Japan: 6-22*/
	"1663 collab 1663": "(Seiken Densetsu 3) Duran",
	"1666 collab 1666": "(Seiken Densetsu 3) Angela",
/*Japan: 6-30*/
	"1669 spoff 1669": "(FFIVTAY) Ceodore",
	"1672 spoff 1672": "(FFIVTAY) Ursula",
/*Japan: 7-14*/
	"1675 ff 1675": "(FF9) CG Zidane",
	"1678 ff 1678": "(FF9) Burmecian Dragoon Freya",
	"1681 ff 1681": "(FF9) Black Mage Vivi",
	"1684 ff 1684": "(FF9) Fratley",
	"1687 ff 1687": "(FF9) Zorn & Thorn",
	"1690 ff 1690": "(FF9) Quina",
/*Japan: 7-21*/
	"1693 be 1693": "(SE#34) Sakura of the Delta Star",
	"1696 be 1696": "(SE#34) Nichol of the Epsilon Star",
	"1699 be 1699": "(SE#34) Colundo",
	"1702 be 1702": "(SE#34) Caroline",
/*Japan: 7-31*/
	"1705 collab 1705": "(Valkyrie Profile) Lezard Valeth",
	"1708 collab 1708": "(Valkyrie Profile) Mystina",
	"1711 collab 1711": "(Valkyrie Profile) Aelia",
/*Japan: 8-12*/
	"1714 ff 1714": "(FFXIV) Witch Y'shtola",
	"1717 ff 1717": "(FF10) CG Tidus",
	"1720 ff 1720": "(FF10) Yunalesca",
	"1723 ff 1723": "(FF10) Isaaru",
	"1726 ff 1726": "(FF10) Kimahri",
/*Japan: 8-22*/
	"1741 ff 1741": "(FF10-2) Yuna",
	"1744 ff 1744": "(FF10-2) Rikku",
	"1747 ff 1747": "(FF10-2) Paine",
/*Japan: 8-31*/
	"1750 collab 1750": "(Kingdom Hearts) Riku",
	"1753 collab 1753": "(Kingdom Hearts) Sephiroth",
/*Japan: 9-20*/
	"1756 collab 1756": "(DQXI S) Mordegon",
	"1759 collab 1759": "(DQXI S) Jasper Unbound",
	"1762 collab 1762": "(DQXI S) Great Dragon",
	"1765 collab 1765": "(DQXI S) Luminary",
	"1768 collab 1768": "(DQXI S) Veronica",
	"1771 collab 1771": "(DQXI S) Serena",
	"1774 collab 1774": "(DQXI S) Erik",
/*Japan: 9-23*/
	"1780 collab 1780": "(SINoALICE) Alice",
	"1783 collab 1783": "(SINoALICE) Snow White",
	"1786 collab 1786": "(SINoALICE) Gretel",
/*Japan: 9-23*/
	"1777 be 1777": "(SE#36) Jean-Pignon",
/*Japan: 9-30*/
	"1789 ff 1789": "(FF11) CG Shantotto",
	"1792 ff 1792": "(FF11) Lilisette",
	"1795 ff 1795": "(FF11) Zeid",
/*Japan: 10-13*/
	"1801 be 1801": "(4th Anniversary) Ifrit Rain",
	"1804 be 1804": "(4th Anniversary) Bahamut Fina",
	"1807 be 1807": "(4th Anniversary) Diabolos Sol",
	"1810 be 1810": "(4th Anniversary) Asura Akstar",
/*Japan: 10-25*/
	"1813 be 1813": "(4th Anniversary/SE#37) Alexander Charlotte",
	"1816 be 1816": "(4th Anniversary/SE#37) Shiva Lasswell",
	"1819 be 1819": "(4th Anniversary/SE#37) Odin Raegen",
	"1822 be 1822": "(4th Anniversary) Fenrir Edel",
	"1825 be 1825": "(4th Anniversary/SE#37) Tetra Sylphid Physalis",
	"1831 be 1831": "(4th Anniversary) Thanksgiving Moogle",
	"1834 be 1834": "(4th Anniversary) Anniversary Moogle",
	"1828 be 1828": "(Family Mart) FamilyMart Physalis",
/*Japan: 10-31*/
	"1837 collab 1837": "(DQXI S #2) Lord of Shadows",
	"1840 collab 1840": "(DQXI S #2) Jade",
	"1843 collab 1843": "(DQXI S #2) Sylvando",
	"1846 collab 1846": "(DQXI S #2) Rab",
/*Japan: 11-15*/
	"1849 ff 1849": "(FF7 AC) CG Cloud",
	"1852 ff 1852": "(FF7 AC) Tifa",
	"1855 ff 1855": "(FF7 AC) Yazoo & Loz",
	"1858 ff 1858": "(FF7 AC) Kadaj",
/*Japan: 11-30*/
	"1867 collab 1867": "(Full Metal Alchemist) Edward Elric",
	"1870 collab 1870": "(Full Metal Alchemist) Alphonse Elric",
	"1873 collab 1873": "(Full Metal Alchemist) Roy Mustang",
	"1876 collab 1876": "(Full Metal Alchemist) Riza Hawkeye",
	"1879 collab 1879": "(Full Metal Alchemist) Winry Rockbell",
/*Japan: 12-15*/
	"1882 ff 1882": "(FF13-2) Serah",
	"1885 ff 1885": "(FF13-2) Noel",
	"1888 ff 1888": "(FF13-2) Hope",
	"1891 ff 1891": "(FF13-2) Lightning",
/*Japan: 12-26*/
	"1894 be 1894": "(JP Christmas 2019) Christmas Ayaka",
	"1897 be 1897": "(JP Christmas 2019) Santa Lotti",
/*Japan: 12-20*/
	"1900 be 1900": "(SE#39) Daisy",
	"1903 be 1903": "(SE#39) Milietta",
	"1906 be 1906": "(SE#39) Cocotto",
/*Japan: 12-26*/
	"1909 collab 1909": "(War of the Visions) Gilgamesh",
/*Japan: 12-31*/
	"1912 ff 1912": "(FF13) Hecatoncheir Vanille",
	"1915 ff 1915": "(FF13) Bahamut Fang",
/*Japan: 1-15*/
	"1918 ff 1918": "(FF8) CG Squall",
	"1921 ff 1921": "(FF8) Seifer",
	"1924 ff 1924": "(FF8) Fujin & Raijin",
	"1927 ff 1927": "(FF8) Quistis",
/*Japan: 1-16*/
	"1930 be 1930": "(New Year 2020) Green Mage Marie (Rat)",
/*Japan: 1-21*/
	"1933 be 1933": "(SE#40) CG Kalmia",
	"1936 be 1936": "(SE#40) Audrey",
	"1939 be 1939": "(SE#40) Wallner",
/*Japan: 1-31*/
	"1942 ff 1942": "(FF8) Selphie",
	"1945 ff 1945": "(FF8) Irvine",
	"1948 ff 1948": "(FF8) Edea",
/*Japan: 2-16*/
	"1951 spoff 1951": "(Type-0) CG Class Zero Ace",
	"1954 spoff 1954": "(Type-0) Beloved Girl Rem",
	"1957 spoff 1957": "(Type-0) Tenacious Warrior Machina",
	"1960 spoff 1960": "(Type-0) Celestia",
/*Japan: 2-20*/
	"1963 be 1963": "(SE#41) CG Pone",
	"1966 be 1966": "(SE#41) Luciano",
	"1969 be 1969": "(SE#41) Pietro",
	"1972 be 1972": "(SE#41) Dario",
/*Japan: 2-24*/
	"1975 be 1975": "(VDay 2020) Sieghard & Ignacio",
	"1978 be 1978": "(VDay 2020) Sakura & Ayaka",
	"1981 collab 1981": "(FFRK) Tyro",
/*Japan: 2-29*/
	"1984 be 1984": "(Special Raid) Bahamut Dark Fina",
	"1987 be 1987": "(Special Raid) Lakshmi Lid",
	"1990 be 1990": "(Special Raid) Phoenix Jake",
/*Japan: 3-15*/
	"1993 ff 1993": "(FF12) Freedom Seeker Vaan",
	"1996 ff 1996": "(FF12) Dancer Penelo",
	"2002 ff 2002": "(FF12) Reks",
	"2005 ff 2005": "(FF12) Forest Beauty Fran",
/*Japan: Boss Rush / 3-6*/
	"2008 be 2008": "(Musical) Musical Moogle",
	"2011 be 2011": "(Boss Rush #1) Zenaida",
/*Japan: 3-23*/
	"2014 be 2014": "(SE#42) CG Nerine",
	"2017 be 2017": "(SE#42) Owl",
	"2020 be 2020": "(SE#42) Swan",
/*Japan: 3-31*/
	"2023 collab 2023": "(War of the Visions) Sterne",
	"2026 collab 2026": "(War of the Visions) Kitone",
	"2029 collab 2029": "(War of the Visions) Mont",
/*Japan: 3-31*/
	"2032 ff 2032": "(FF12) Princess Ashe",
	"2035 ff 2035": "(FF12) Vossler",
	"2038 ff 2038": "(FF12) Bergan",
/*Japan: 4-15*/
	"2041 ff 2041": "(FF9) CG Kuja",
	"2044 ff 2044": "(FF9) Garland(FF9)",
	"2047 ff 2047": "(FF9) Mikoto",
	"2050 ff 2050": "(FF9) Pluto Knight Zidane",
/*Japan: 4-23*/
	"2053 collab 2053": "(Seiken Densetsu 3) Divine Fist Kevin",
	"2056 collab 2056": "(Seiken Densetsu 3) Warlock Charlotte",
	"2059 collab 2059": "(Seiken Densetsu 3) Fenrir Knight Riesz",
/*Japan: 4-21*/
	"2062 be 2062": "(SE#43) CG Cleome",
	"2065 be 2065": "(SE#43) Ambie",
	"2068 be 2068": "(SE#43) Acele",
/*Japan: 4-30*/
	"2071 ff 2071": "(FF9) Dagger",
	"2074 ff 2074": "(FF9) Summoner Scion Eiko",
	"2077 ff 2077": "(FF9) Queen Brahne",
/*========================*/
/*Popular 7-30*/
	"451 be 451": "Eileen",
	"469 be 469": "Wilhelm",
	"772 be 772": "(SE#08) CG Lasswell",
	"793 be 793": "(SE#09) CG Sakura",
	"916 be 916": "(SE#13) CG Nichol",
	"1038 be 1038": "(SE#16) CG Hyoh",
	"1171 be 1171": "(SE#19) CG Sieghart (Sieghard)",
	"1324 be 1324": "(SE#23) CG Akstar",
	"1422 be 1422": "(SE#26) CG Charlotte",
	"206 ff 206": "(FF6) Celes",
	"467 ff 467": "(FF10) Tidus",
	"503 ff 503": "(FF6) Trance Terra",
	"589 ff 589": "(FF3) Onion Knight",
	"616 ff 616": "(FF15) Noctis",
	"681 ff 681": "(FF7) Cloud",
	"906 ff 906": "(FF7) Sephiroth",
	"956 ff 956": "(FF8) Squall",
	"8059 ff 8059": "(FF12) Zargabaath",
	"8091 ff 8091": "(FF4) Barbariccia",
	"ur04 ff ur04": "(FF9) Quina *Alpha*",
	"1110 ff 1110": "(FF7) Tifa",
	"1237 ff 1237": "(FF10) Jecht",
	"1240 ff 1240": "(FF10) Auron",
	"1376 ff 1376": "(FF7) Yuffie",
	"1517 ff 1517": "(FF6) CG Magitek Warrior Terra",
	"396 spoff 396": "(FFT) Orlandu",
	"561 spoff 561": "(FFT) Mercenary Ramza",
	"1162 spoff 1162": "(Type-0) Kurasame",
	"330 collab 330": "(Seiken Densetsu 2) Randi",
	"438 collab 438": "(DQMSL) Liquid Metal Slime",
	"774 collab 774": "(Nier) 2B",
	"8012 collab 8012": "(Brave Frontier) Elza",
	"8062 collab 8062": "(Nier) A2",
	"1095 collab 1095": "(Valkyrie Profile) Lenneth",
	"1222 collab 1222": "(Xenogears) Elly",
	"1505 collab 1505": "(Kingdom Hearts) Sora",
	"1508 collab 1508": "(Kingdom Hearts) Cloud",
	"893 glex 893": "Reberta",
	"8039 glex 8039": "Olive",
	"8042 glex 8042": "(Easter) Fryevia",
	"8082 glex 8082": "(Halloween 2017) Grim Lord Sakura",
	"8106 glex 8106": "(Christmas 2017) Christine",
	"8131 glex 8131": "(Festival of Love) Chow",
	"8184 glex 8184": "(Fan Contest 2017) Malphasie",
	"8193 glex 8193": "(Fan Contest 2017) Ellesperis",
	"8196 glex 8196": "(Fan Contest 2017) Beryl",
	"8187 glex 8187": "(Fan Contest 2017) Circe",
	"8190 glex 8190": "(Fan Contest 2017) Myra",
	"8229 glex 8229": "(Easter 2019) Esther",
	"8253 glex 8253": "(SE#23) Zeno of the Beta Star",
	"ms04 other ms04": "Metal Gigantuar",
	"ms05 other ms05": "Moogle",
/*Temp|Extra Room*/
	"1156 collab 1156": "(Seiken Densetsu 2) Rabbie",
	"230 ff 230": "(FF9) Garnet",
};
