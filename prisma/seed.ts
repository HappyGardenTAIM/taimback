import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const plantData: Prisma.PlantCreateInput[] = [
  {
    name: 'Basiilik',
    minGrowthTime: 35,
    maxGrowthTime: 84,
    difficulty: 'EASY',
    maintenance: 'Vajab pidevalt niisket mulda ja palju päikest. Õied näpista ära, et soodustada lehtede kasvu.',
    maturity: 'Lehed on umbes 5 cm pikad, lõhnavad, helerohelised. Taim ei tohi veel õitseda.',
    image: 'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2021/12/potted-basil-harvest.jpg',
  },
  {
    name: 'Piparmünt',
    minGrowthTime: 35,
    maxGrowthTime: 84,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja poolvarjulist kasvukohta. Kärpimine mõjub talle hästi.',
    maturity: 'Varred on 15-20 cm pikad, lehed tumerohelised ja lõhnavad. Õitsemine pole veel alanud.',
    image: 'https://cdn.mos.cms.futurecdn.net/z5EtUHRcBLwPE7yHxqCSBd-1600-80.jpg.webp',
  },
  {
    name: 'Maasikas',
    minGrowthTime: 84,
    maxGrowthTime: 126,
    difficulty: 'MEDIUM',
    maintenance: 'Tahab palju päikesevalgust ja sagedast kastmist. Viljade saamiseks tubastes tingimustes võib vaja minna käsitsi tolmeldamist.',
    maturity: 'Marjad on täiesti punased, aga mitte veel ülipehmed.',
    image: 'https://live.staticflickr.com/5279/5859532475_887cd2f427_b.jpg'
  },
  {
    name: 'Lehtsalat',
    minGrowthTime: 35,
    maxGrowthTime: 42,
    difficulty: 'EASY',
    maintenance: 'Muld peab olema parajalt niiske, aga mitte vettinud, ja päikest parasjagu. Kasvu edendamiseks korja välimised lehed valmides ära.',
    maturity: 'Korja suuremaid väliseid lehti vastavalt vajadusele või korista 5 nädalat päras idanemist kogu taim.',
    image: 'https://www.epicgardening.com/wp-content/uploads/2023/05/lettuce-containers-1200x667.jpeg',
  },
  {
    name: 'Tomat',
    minGrowthTime: 98,
    maxGrowthTime: 126,
    difficulty: 'MEDIUM',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    maturity: 'Viljad on täiesti punased ja parajalt pehmed.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
  },
  {
    name: 'Lutsern',
    minGrowthTime: 4,
    maxGrowthTime: 5,
    difficulty: 'EASY',
    maintenance: 'Loputa ja nõruta seemneid hoolikalt igal hommikul ja õhtul. Taga piisav õhuringlus.',
    maturity: 'Idud on umbes 3 cm pikad.',
    image: 'https://c.pxhere.com/photos/56/b9/alfalfa_sprouts_seedlings_sprout_salad_healthy_delicious_gourmet_nutrition_food-547412.jpg!d',
  },
  {
    name: 'Munguba',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'EASY',
    maintenance: 'Loputa ja nõruta hoolikalt igal hommikul ja õhtul.',
    maturity: 'Idud on umbes 2 cm pikad.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Mung_bean_sprouts%2C_close-up.jpg',
  },
  {
    name: 'Läätsed',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'HARD',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    maturity: 'Idud on umbes 3 cm pikad.',
    image: 'https://live.staticflickr.com/688/21186442492_be23bdf37d_b.jpg',
  },
  {
    name: 'Redis',
    minGrowthTime: 4,
    maxGrowthTime: 5,
    difficulty: 'MEDIUM',
    maintenance: 'Tahab alguses olla pimedas, pärast valges. Loputa igal hommikul ja õhtul.',
    maturity: 'Idud on umbes 3 cm pikad.',
    image: 'https://live.staticflickr.com/5478/10951951054_2f4d0a1276_b.jpg',
  },
  {
    name: 'Brokoli',
    minGrowthTime: 3,
    maxGrowthTime: 5,
    difficulty: 'MEDIUM',
    maintenance: 'Loputa ja nõruta hoolikalt, taga piisav õhuringlus.',
    maturity: 'Idud on umbes 3 cm pikad.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Brokkolisprossen-schale-knolle.jpg',
  },
  {
    name: 'Võõrasema',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Ilusate värviliste õitega lill. Ei karda külma. Sobib hästi nii potti, rõdukasti kui peenrale. Kasta ja väeta regulaarselt. Närbunud õied nopi ära, et soodustada uute õite kasvu.',
    maturity: 'Avaneb esimene õis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Viola_%C3%97_wittrockiana_001.jpg/640px-Viola_%C3%97_wittrockiana_001.jpg',
  },
  {
    name: 'Rukkilill',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Kergesti kasvatatav lill. Nõuab vähe hoolt. Armastab valgust, kuid talub ka varjulist kasvukohta. Kasta mõõdukalt.',
    maturity: 'Avaneb esimene õis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CentaureaCyanus-bloem-kl.jpg/800px-CentaureaCyanus-bloem-kl.jpg',
  },
  {
    name: 'Virk-Liisu',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Ilus värvikirevate õitega lill. Armastab sooja, poolvarjulist kasvukohta. Kasta rikkalikult ja väeta igal kastmiskorral.',
    maturity: 'Avaneb esimene õis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2020-11-17_14_33_20_Impatiens_walleriana_with_red-purple_flowers_blooming_in_late_autumn_along_Metrotech_Drive_at_the_Sully_Place_Shopping_Center_in_Chantilly%2C_Fairfax_County%2C_Virginia.jpg/640px-thumbnail.jpg',
  },
  {
    name: 'Saialill',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Vähenõudlik lill. Eelistab valguseküllast kasvukohta. Ei armasta liigset niiskust.',
    maturity: 'Avaneb esimene õis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cal%C3%A8ndula.jpg/640px-Cal%C3%A8ndula.jpg',
  },
  {
    name: 'Mururoos',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Värvirohkete õitega lill. Armastab väga sooja ja päikeselist kasvukohta, on väga põuakindel. Kasta ja väeta harva.',
    maturity: 'Avaneb esimene õis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Portulaca_grandiflora%2C_Burdwan%2C_30032014_%287%29.jpg/640px-Portulaca_grandiflora%2C_Burdwan%2C_30032014_%287%29.jpg',
  },
]

const sproutData: Prisma.SproutCreateInput[] = [
  {
    usage: 'Lutserni idud sobivad oma õrna maitsega suurepäraselt salatitesse ja võileibadele.',
    benefits: 'Lutsernis on rohkesti C-vitamiini ja kiudaineid ning ta aitab alandada kolesterooli.',
    plant: {
      connect: {
        name: 'Lutsern',
      },
    },
  },
  {
    usage: 'Mungoa idud sobivad suurepäraselt salatitesse ja suppidesse.',
    benefits: 'Munguba sisaldab rohkelt valku ja kiudaineid. Toetab seedimist ja tugevdab immuunsüsteemi.',
    plant: {
      connect: {
        name: 'Munguba',
      },
    },
  },
  {
    usage: 'Läätseidud maitsevad hästi salatites ja valgurikka lisandina erinevates roogades.',
    benefits: 'Läätsedes on palju kiudaineid ja valku, nad mõjuvad hästi südame tervisele ja veresuhkrule.',
    plant: {
      connect: {
        name: 'Läätsed',
      },
    },
  },
  {
    usage: 'Rediseidud annavad vürtsika noodi salatitele ja võileibadele.',
    benefits: 'Redises on ohtralt C-vitamiini ja mineraalaineid ning ta parandab seedimist ja immuunsust',
    plant: {
      connect: {
        name: 'Redis',
      },
    },
  },
  {
    usage: 'Brokoli idud lisavad hõrku pähklist maitset salatitele, võileibadele ja kaunistusena pearoogadele.',
    benefits: 'Täis vitamiine ja hea südamele.',
    plant: {
      connect: {
        name: 'Brokoli',
      },
    },
  },
];

const foodData: Prisma.FoodCreateInput[] = [
  {
    usage: 'Annab maitset pitsadele, pastaroogadele ja suppidele. Sobib hästi ka pesto valmistamiseks.',
    benefits: 'Hea K-vitamiini allikas.',
    light: 'FULL_SUN',
    watering: 1,
    harvesting: 3,
    pruning: 1,
    plant: {
      connect: {
        name: 'Basiilik',
      },
    },
  },
  {
    usage: 'Väga mitmekesine: sobib nii teeks kui magustoitude, aga ka näiteks suppide ja marinaadide maitsestamiseks.',
    benefits: 'Rahustava ja puhastava toimega, sisaldab ohtralt eeterlikke õlisid.',
    light: 'PARTIAL_SUN',
    watering: 1,
    harvesting: 3,
    pruning: null,
    plant: {
      connect: {
        name: 'Piparmünt',
      },
    },
  },
  {
    usage: 'Kõige parem on marjad otse suhu pista või kaunistada nendega kooke ja magustoite.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    light: 'FULL_SUN',
    watering: 1,
    harvesting: 3,
    pruning: null,
    plant: {
      connect: {
        name: 'Maasikas',
      },
    },
  },
  {
    usage: 'Sobib hästi salatitesse ja võileivakatteks.',
    benefits: 'Kalorivaene, aitab kaalulangetamisel.',
    light: 'PARTIAL_SUN',
    watering: 1,
    harvesting: 3,
    pruning: null,
    plant: {
      connect: {
        name: 'Lehtsalat',
      },
    },
  },
  {
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks või niisama näksimiseks.',
    benefits: 'Rohkelt vitamiine, kiudaineid ja antioksüdante.',
    light: 'FULL_SUN',
    watering: 1,
    harvesting: 3,
    plant: {
      connect: {
        name: 'Tomat',
      },
    },
  },
]

const flowerData: Prisma.FlowerCreateInput[] = [
  {
    light: 'FULL_SUN', 
    watering: 1,
    appearance: 'Õied väga paljudes värvitoonides, võivad olla ka mustrilised.',
    usage: 'Õied on söödavad ja sobivad toitude ning jookide kaunistamiseks.',
    plant: {
      connect: {
        name: 'Võõrasema',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    appearance: 'Sinised või sinivioletsed õied. Harva ka purpurpunased, roosad või valged.',
    usage: 'Õied on söödavad. Kaunista toite ja jooke või valmista teed.',
    plant: {
      connect: {
        name: 'Rukkilill',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    appearance: 'Õite värv punastest toonidest oranži, valge ja lillani.',
    plant: {
      connect: {
        name: 'Virk-Liisu',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    appearance: 'Kollased või oranžid õied.',
    usage: 'Õied on söödavad ja neid kasutatakse ka ravimtaimena. Kaunista nendega toitu, lisa jääkuubikutesse või valmista rahustavat teed.',
    plant: {
      connect: {
        name: 'Saialill',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    appearance: 'Õied punased, roosad, oranžid või kollased.',
    plant: {
      connect: {
        name: 'Mururoos',
      },
    },
  },
]

const taskDetailData: Prisma.TaskDetailCreateInput[] = [
  {
    description: 'Vajad kaaneta klaaspurki, marlit, kummipaela ja idandamiseks mõeldud seemneid.',
    longDescription: 'Hästi sobib pooleliitrine purk. On olemas ka spetsiaalsed idandamisnõud purgi või mitmekorruselise kandiku kujul.\n\nMarli asemel võid kasutada ka muud vett läbilaskvat kangast, kas või vanu sukkpükse.\n\nSeemneid leiab paljudest poodidest, aga mõnel juhul võivad need olla sobimatud, sest on kuumutatud või keemiliselt töödeldud. Kõige kindlam on osta just idandamiseks mõeldud seemned',
    taskType: 'PREP',
    subType: 'SPROUT',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://nami-nami.ee/files/img/idandamine3.jpg',
  },
  {
    description: 'Pane purki 1-2 sl seemneid ja kata veega. Leota üleöö, järgmisel hommikul vala vesi ära.',
    longDescription: 'Võta ühe osa seemnete kohta umbes kaks-kolm osa vett.\n\nLeotada võiks umbes 8-10 tundi, aga ülitäpne aeg pole oluline. Kui jätad seemned vette väga kauaks, lähevad nad lõpuks hallitama ja tuleb ära visata.',
    taskType: 'SOAK',
    subType: 'SPROUT',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://hilahcooking.com/wp-content/uploads/2014/01/soaking-seeds.jpg',
  },
  {
    description: 'Loputa ja nõruta seemneid igal hommikul ja õhtul. Ära pane purki otsese päikese kätte.',
    longDescription: 'Loputa seemneid hoolikalt külma veega.\n\nKata purgi suu marliga ja kinnita kummipaelaga.\n\nPane purk poolkaldu suu allapoole, et liigne vesi saaks välja voolata.\n\nIdudele võivad tekkida juurekarvad, mis meenutavad hallitust, aga on ohutud.',
    taskType: 'RINSE',
    subType: 'SPROUT',
    difficulty: 'EASY',
    phase: 'SOAKING',
    picture: 'https://cdn.shopify.com/s/files/1/0234/7849/files/rinsing-sprouting-lentils.jpg?13558836802249936948',
  },
  {
    description: 'Vajad seemneid, külvimulda ja potti.\nVali potile sobiv asukoht, arvestades taime valgusvajadust.',
    longDescription: 'Kõige kindlam on kasutada spetsiaalset külvimulda.\n\nPoti läbimõõt võiks olla umbes 20 cm. Külvinõuna saab kasutada ka tühje toidupakendeid, nagu erinevad topsid ja tetrapakid, mille põhja on tehtud auk.\n\n',
    taskType: 'PREP',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://www.bobvila.com/wp-content/uploads/2022/11/Handful-of-Potting-Soil.jpg',
  },
  {
    description: 'Täida pott niisutatud mullaga.\nKülva seeme, kata kerge mullakihiga ja vajuta pealt õrnalt kinni.',
    longDescription: 'Muld peaks olema toatemperatuuril. Pane see suuremase anumasse, mulju tükid lahti ja niisuta. Muld on õige niiskusega, kui surud peotäie kokku ja ta ei lirtsu, aga ei pudene ka kohe laiali.\n\nTäida pott mullaga, aga jäta servani mõni sentimeeter ruumi. Ära tambi mulda kõvasti kinni, aga tihenda veidi servadest ja pinnalt.\n\nNiisuta mullapinda veepritsiga, külva seeme ja niisuta uuesti. Kata külv õhukese mullakihiga ja vajuta õrnalt kinni.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://www.mediastorehouse.com/p/617/hand-planting-sunflower-seeds-biodegradable-pots-9533941.jpg.webp',
  },
  {
    description: 'Kasuta kastmiseks alguses veepritsi. Hoia muld parajalt niiske, kuid mitte märg.',
    longDescription: 'Kuni taim pole veel tärganud, kasta külvi veepritsiga. Tugev veejuga võib seemne uhtuda mullapinnalt ära või hoopis liiga sügavale mulda.\n\nKasuta toasooja vett. Kasta siis, kui muld on pealt kuiv, aga mõni sentimeeter sügavamalt veel niiske.\n\nÄra lase taimel läbi kuivada, aga väldi ka liigset kastmist, sest see võib põhjustada juurte mädanemist.',
    taskType: 'WATER',
    difficulty: 'EASY',
    phase: 'GROWING',
    picture: 'https://cdn.mos.cms.futurecdn.net/mxQUAPaFFBH4KoSk7CRLv7-1600-80.jpg.webp',
  },
  {
    description: 'Kui taimel on juba kaks idulehte ja kaks pärislehte, võib ta hakata vajama väetist.',
    longDescription: 'Väetamise vajadus sõltub külvimullast ja taimest. Hästi sobib vedelväetis või väetisepulgad.\n\nJärgi hoolikalt väetise pakendil antud juhendeid ja väldi üleväetamist.',
    taskType: 'FERTILIZE',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://www.bhg.com/thmb/uyoTL0aGgdY_C7JhFnFZxBnxNYw=/1245x0/filters:no_upscale():strip_icc()/compost-soil-shovel-c0bdd251-5a38b6d7d23a4344a9550d3d65da9211.jpg',
  },
  {
    description: 'Kärpimine soodustab paljude taimede kasvu.',
    longDescription: 'Maitsetaimedel tuleks ladvad regulaarselt ära näpistada, et soodustada lehtede kasvu. Samuti tuleks eemalda õied. Kui taim on liiga pikaks kasvanud, võib ülaosa ära lõigata, et ta hakkaks hargnema.\n\nTomatil tuleks pidevalt eemaldada külgvõsusid. Need on võsud, mis kasvavad välja lehekaenlast tomati peavarre ja selle haru vahel.\n\nMaasikal tuleks eemaldada võsundid. Need on pikkad varred, mille otsast hakkab kasvama uus väike taim.',
    taskType: 'PRUNE',
    subType: 'FOOD',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://www.thespruce.com/thmb/rXh8Amt1P1ACXA5LJVK2SsCyaIk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-prune-basil-5222034-05-a66b415fcf4d4fb2b889cee698b4ca66.jpg',
  },
  {
    description: 'Kärbi väljaveninud võrsed. Eemalda närtsinud õied, et soodustada uute õite kasvu.',
    longDescription: 'Väga pikaks veninud, närtsinud või kahjustatud taimeosade eemaldamine paneb taime tihedamaks kasvama ja rikkalikumalt õitsema.',
    taskType: 'PRUNE',
    subType: 'FLOWER',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://www.firmusenergy.co.uk/images/sized/images/uploads/categories/Dead_heading_Petunias_and_other_annuals_is_an_essential_job-582x386.jpg',
  },  
  {
    description: 'Kontrolli taime regulaarselt, et tuvastada kahjurid või haigused.',
    longDescription: 'Suurim oht pisitaimele on tõusmepõletik: varre alumine ots muutub peeneks ja tumedaks, taim lamandub ja hukkub. Selle ärahoidmiseks kasta mõõdukalt ja korrapäraselt ning hoia ühtlast parajalt sooja temperatuuri.\n\nKui avastad kahjurid, eralda saastunud taimed ja pritsi mõne loodusliku vahendiga, näiteks rohelise seebi lahusega. Järgi hoolikalt kasutusjuhendit.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://i.pinimg.com/originals/66/1b/e6/661be6755585c1386e355c806947096f.jpg',
  },
  {
    description: 'Jälgi, et valgust oleks piisavalt.\nVajadusel kasuta lisavalgustust.',
    longDescription: 'Kui kasvatad taimi aknalaual, siis pööra neid regulaarselt, et nad kasvaksid ühtlaselt.\n\nKui taimed on pikad ja hõredad, siis on neil ilmselt valgusepuudus.\n\nEriti talvel võib kasu olla taimelambist.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://hortes.ee/wp-content/uploads/2023/11/6435200292780.jpeg',
  },
  {
    description: 'Jälgi, et taim oleks soojas, aga mitte liiga palavas kohas.',
    longDescription: 'Kõige parem, kui temperatuur on päeval 18-20°C, öösel paar kraadi madalam, kuid mitte alla 15°C. Kui on liiga soe, võib taime kasv pidurduda või lehed muutuda kollaseks. Liiga külmas ei kasva taim samuti hästi ja lehed võivad minna pruuniks.\n\nJälgi ka, et taim ei oleks tuuletõmbuses.\n\nTalvel võib külm aknalual kasvavale taimele liiga teha ka siis, kui praost puhub sisse tuult või lehed puutuvad vastu jäist aknaklaasi.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'GROWING',
    picture: 'https://cdn.shopify.com/s/files/1/0915/1060/files/AdobeStock_486813162_600x600.jpg?v=1702241172',
  },
  {
    description: 'Eemalda närtsinud või kahjustatud taimeosad.',
    longDescription: 'Kui lehed, varred või õied on kollased või pruunid, närtsinud või muul moel kummalise välimusega, tasub need ära lõigata. See soodustab uute lehtede ja õite kasvu ja hoiab ära haiguste leviku.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://www.gardendesign.com/pictures/images/675x529Max/site_3/late-blight-tomato-leaf-tomato-with-late-blight-shutterstock-com_15742.jpg',
  },
  {
    description: 'Väldi taime ülekastmist, et hoida juured tervena.',
    longDescription: 'Kasta ainult siis, kui muld on pealt kuiv, aga mõni sentimeeter sügavamalt veel niiske.\n\nPotil peab kindlasti põhjas olema auk, millest liigne vesi saab välja joosta.\n\nÜlekastetud taime lehed lähevad kollaseks, varrele võivad tekkida mädaplekid ja mullapinnale valkjas kiht.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://mag.dibasabz.com/wp-content/uploads/2021/03/HOME_Rain1_1200x785px-e1616447438582-1024x684.jpg',
  },
  {
    description: 'Märgi üles, mida oled taime vajaduste kohta õppinud.',
    longDescription: 'Kirjuta üles, kuidas kasvatamine õnnestus, mis läks hästi ja kus tekkisid probleemid. Nii oskad järgmise taime eest veelgi paremini hoolitseda.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'HARVESTING',
    picture: 'https://cdn2.hubspot.net/hubfs/18130/AdobeStock_102891724-658317-edited.jpeg',
  },
  {
    description: 'Naudi saaki!',
    longDescription: 'Kui taim on valmis, saad nautida oma töö vilju!',
    taskType: 'HARVEST',
    difficulty: 'EASY',
    phase: 'HARVESTING',
    picture: 'https://www.farmersalmanac.com/wp-content/uploads/2020/11/garden-harvest-produce-last-longer-As_305375846.jpeg',
  },
];

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Helena',
    email: 'helena@taim.io',
  },
  {
    name: 'Daily',
    email: 'daily@taim.io',
  },
  {
    name: 'Peep',
    email: 'peep@taim.io',
  },
]

async function clearDatabase() {
  await prisma.plantToTaskDetail.deleteMany();
  await prisma.foodToTaskDetail.deleteMany();
  await prisma.sproutToTaskDetail.deleteMany();
  await prisma.flowerToTaskDetail.deleteMany();
  await prisma.task.deleteMany();
  await prisma.journey.deleteMany();
  await prisma.sprout.deleteMany();
  await prisma.food.deleteMany();
  await prisma.flower.deleteMany();
  await prisma.plant.deleteMany();
  await prisma.taskDetail.deleteMany();
  await prisma.user.deleteMany();
}

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  for (const td of taskDetailData) {
    const taskDetail = await prisma.taskDetail.create({
      data: td,
    });
    console.log(`Created taskDetail with id: ${taskDetail.id}`);
  }

  const allTaskDetails = await prisma.taskDetail.findMany();
  const plantTaskDetails = allTaskDetails.filter(pt => pt.taskType == 'HARVEST')
  const sproutTaskDetails = allTaskDetails.filter(st => st.subType == 'SPROUT')
  const foodTaskDetails = allTaskDetails.filter(ft => ft.subType == 'FOOD' || ft.subType == null && ft.taskType != 'HARVEST')
  const flowerTaskDetails = allTaskDetails.filter(ft => ft.subType == 'FLOWER' || ft.subType == null && ft.taskType != 'HARVEST')

  for (const p of plantData) {
    const plant = await prisma.plant.create({
      data: p,
    });
    console.log(`Created plant with id: ${plant.id}`);    

    for (const pt of plantTaskDetails) {
      await prisma.plantToTaskDetail.create({
        data: {
          plantId: plant.id,
          taskDetailId: pt.id,
          order: allTaskDetails.length - 1,
        },
      });
    }
  }

  for (const s of sproutData) {
    const sprout = await prisma.sprout.create({
      data: s,
    });
    console.log(`Created sprout with id: ${sprout.id}`);

    const taskTypeOrder = {
      PREP: 0,
      SOAK: 1,
      RINSE: 2,
    };

    for (const st of sproutTaskDetails) {
      await prisma.sproutToTaskDetail.create({
        data: {
          sproutId: sprout.id,
          taskDetailId: st.id,
          order: taskTypeOrder[st.taskType],
        },
      });
    }
  }

  for (const e of foodData) {
    const food = await prisma.food.create({
      data: e,
    });
    console.log(`Created food with id: ${food.id}`);

    const sortedFoodTaskDetails = foodTaskDetails.sort((a, b) => {
      // First, compare by phase
      if (a.phase !== b.phase) {
        if (a.phase === "PREP") return -1;
        if (b.phase === "PREP") return 1;
        if (a.phase === "GROWING") return -1;
        if (b.phase === "GROWING") return 1;
        if (a.phase === "HARVESTING") return -1;
        if (b.phase === "HARVESTING") return 1;
      }
      
      // Within the same phase, compare by task type
      const taskTypeOrder = {
        "PREP": 0,
        "WATER": 1,
        "FERTILIZE": 2,
        "PRUNE": 3,
        "CHECK": 4
      };
    
      const taskTypeComparison = taskTypeOrder[a.taskType] - taskTypeOrder[b.taskType];
      if (taskTypeComparison !== 0) {
        return taskTypeComparison;
      }
    
      // For CHECK tasks, randomize the order
      if (a.taskType === "CHECK") {
        return Math.random() - 0.5;
      }
    
      return 0;
    });

    for (const ed of foodTaskDetails) {
      await prisma.foodToTaskDetail.create({
        data: {
          foodId: food.id,
          taskDetailId: ed.id,
          order: sortedFoodTaskDetails.indexOf(ed) + 1,
        },
      });
    }
  }

  for (const f of flowerData) {
    const flower = await prisma.flower.create({
      data: f,
    });
    console.log(`Created flower with id: ${flower.id}`);

    const sortedFlowerTaskDetails = flowerTaskDetails.sort((a, b) => {
      // First, compare by phase
      if (a.phase !== b.phase) {
        if (a.phase === "PREP") return -1;
        if (b.phase === "PREP") return 1;
        if (a.phase === "GROWING") return -1;
        if (b.phase === "GROWING") return 1;
        if (a.phase === "HARVESTING") return -1;
        if (b.phase === "HARVESTING") return 1;
      }
      
      // Within the same phase, compare by task type
      const taskTypeOrder = {
        "PREP": 0,
        "WATER": 1,
        "FERTILIZE": 2,
        "PRUNE": 3,
        "CHECK": 4
      };
    
      const taskTypeComparison = taskTypeOrder[a.taskType] - taskTypeOrder[b.taskType];
      if (taskTypeComparison !== 0) {
        return taskTypeComparison;
      }
    
      // For CHECK tasks, randomize the order
      if (a.taskType === "CHECK") {
        return Math.random() - 0.5;
      }
    
      return 0;
    });

    for (const fd of flowerTaskDetails) {
      await prisma.flowerToTaskDetail.create({
        data: {
          flowerId: flower.id,
          taskDetailId: fd.id,
          order: sortedFlowerTaskDetails.indexOf(fd) + 1,
        },
      });
    }
  }

  console.log(`Seeding finished.`)
}

// clearDatabase()
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })