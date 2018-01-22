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
	"013 be 013": "Rizer",
	"015 be 015": "Leah",
	"017 be 017": "Tronn",
	"019 be 019": "Eldin",
	"021 be 021": "Baurg",
	"023 be 023": "Gimlee",
	"025 be 025": "Maxell",
	"027 be 027": "Liza",
	"053 be 053": "Shiki",
	"055 be 055": "Mizell",
	"057 be 057": "Ronaldo",
	"059 be 059": "Mel",
	"103 be 103": "Clyne",
	"105 be 105": "Anselm",
	"107 be 107": "Luna",
	"109 be 109": "Bedile",
	"149 be 149": "Duane",
	"152 be 152": "Cerius",
	"155 be 155": "Roselia",
	"158 be 158": "Medius",
	"161 be 161": "Sarai",
	"163 be 163": "Paula",
	"165 be 165": "Kenyu",
	"167 be 167": "Ollie",
	"169 be 169": "Carrie",
	"171 be 171": "Skaha",
	"173 be 173": "Montana",
	"175 be 175": "Russell",
	"177 be 177": "Miyuki",
	"185 be 185": "Xiao",
	"191 be 91": "Artemios",
	"203 be 03": "Gilbert",
	"214 be 214": "Rakshasa",
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
	"513 be 513": "Fohlen",
	"515 be 515": "Amelia",
	"518 be 518": "Ilias",
	"521 be 521": "Camille",
	"540 be 540": "Runera",
	"542 be 542": "Blanc",
	"545 be 545": "Helena",
	"548 be 548": "Ruggles",
	"573 be 573": "Dark Veritas",
	"575 be 575": "Fire Veritas",
	"577 be 577": "Earth Veritas",
	"580 be 580": "Victoria",
	"583 be 583": "Tim",
	"586 be 586": "Moogle",
	"600 be 600": "Light Veritas",
	"602 be 602": "Wind Veritas",
	"605 be 605": "Water Veritas",
	"610 be 610": "Aura",
	"613 be 613": "Grom",
	"649 be 649": "Lorraine",
	"651 be 651": "Ayaka",
	"653 be 653": "Gouken",
	"656 be 656": "Sylvia",
	"659 be 659": "Kamui",
	"662 be 662": "Yuri",
	"683 be 683": "Elfried",
	"685 be 685": "Conrad",
	"688 be 688": "William",
	"691 be 691": "Roy",
	"693 be 693": "Chloe",
	"696 be 696": "Amy",
	"699 be 699": "Kupolukan",
	"701 be 701": "Ashterose",
	"704 be 704": "Kelsus",
	"707 be 707": "Nyarl",
	"710 be 710": "Sandy",
	"713 be 713": "Grinfield",
	"724 be 724": "Duke",
	"726 be 726": "Orif",
	"729 be 729": "Mistair",
	"732 be 732": "Shaly",
	"735 be 735": "Ryunan",
	"761 be 761": "Jiraiya",
	"763 be 763": "Kaede",
	"766 be 766": "Ouga",
	"769 be 769": "Otogiri",
	"772 be 772": "CG Lasswell",
	"793 be 793": "CG Sakura",
	"795 be 795": "Vern",
	"798 be 798": "Sedona",
	"815 be 815": "CG Fina",
	"817 be 817": "Kunshira",
	"819 be 819": "Wado",
	"822 be 822": "Hauyn",
	"843 be 843": "CG Jake",
	"845 be 845": "Emperor Shiera",
	"847 be 847": "Emilia",
	"850 be 850": "Ozetta",
	"853 be 853": "Riley",
	"886 be 886": "CG Lid",
	"888 be 888": "Killian",
	"904 be 904": "Medina",
	"908 be 908": "Lila",
	"910 be 910": "Silt",
	"913 be 913": "Mim",
	"916 be 916": "CG Nichol",
	"918 be 918": "Lekisa",
	"921 be 921": "Elvis",
	"924 be 924": "Merald",
	"941 be 941": "CG Reagan",
	"943 be 943": "Luminui",
	"946 be 946": "Xyle",
	"949 be 949": "Lucille",
	"952 be 952": "(2nd Anni) Wandering Rain",
	"954 be 954": "Awakened Rain",
	"965 be 965": "Lamira",
	"989 be 989": "Naru/Nal",
	"992 be 992": "Pezzotta",
	"995 be 995": "Shinju",
	"998 be 998": "Ryuka",
	"1038 be 1038": "CG Hyou",
	"1041 be 1041": "Shatal",
	"1044 be 1044": "Domino",
	"1050 be 1050": "Ukiyo",
	"1086 be 1086": "CG Citra",
	"1089 be 1089": "Makumedi",
	"1092 be 1092": "Lottie",
};
