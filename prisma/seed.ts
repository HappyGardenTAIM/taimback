import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const plantData: Prisma.PlantCreateInput[] = [
  {
    name: 'Basiilik',
    minGrowthTime: 35,
    maxGrowthTime: 84,
    difficulty: 'EASY',
    maintenance: 'Vajab pidevalt niisket mulda ja palju päikest. Õied näpista ära, et soodustada lehtede kasvu.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Ocimum_basilicum_8zz.jpg',
  },
  {
    name: 'Piparmünt',
    minGrowthTime: 35,
    maxGrowthTime: 84,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja poolvarjulist kasvukohta. Kärpimine mõjub talle hästi.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Starr_080117-1594_Mentha_x_piperita.jpg',
  },
  {
    name: 'Maasikas',
    minGrowthTime: 84,
    maxGrowthTime: 126,
    difficulty: 'MEDIUM',
    maintenance: 'Tahab palju päikesevalgust ja sagedast kastmist. Viljade saamiseks tubastes tingimustes võib vaja minna käsitsi tolmeldamist.',
    type: 'FOOD',
    image: 'https://live.staticflickr.com/5279/5859532475_887cd2f427_b.jpg'
  },
  {
    name: 'Lehtsalat',
    minGrowthTime: 35,
    maxGrowthTime: 42,
    difficulty: 'EASY',
    maintenance: 'Muld peab olema parajalt niiske, aga mitte vettinud, ja päikest parasjagu. Kasvu edendamiseks korja välimised lehed valmides ära.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Lettuce_Cultivars_by_David_Shankbone.JPG',
  },
  {
    name: 'Tomat',
    minGrowthTime: 98,
    maxGrowthTime: 126,
    difficulty: 'MEDIUM',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
  },
  {
    name: 'Lutsern',
    minGrowthTime: 4,
    maxGrowthTime: 5,
    difficulty: 'EASY',
    maintenance: 'Loputa ja nõruta seemneid hoolikalt igal hommikul ja õhtul. Taga piisav õhuringlus.',
    type: 'SPROUT',
    image: 'https://c.pxhere.com/photos/56/b9/alfalfa_sprouts_seedlings_sprout_salad_healthy_delicious_gourmet_nutrition_food-547412.jpg!d',
  },
  {
    name: 'Munguba',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'EASY',
    maintenance: 'Loputa ja nõruta hoolikalt igal hommikul ja õhtul.',
    type: 'SPROUT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Mung_bean_sprouts%2C_close-up.jpg',
  },
  {
    name: 'Läätsed',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'HARD',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
    image: 'https://live.staticflickr.com/688/21186442492_be23bdf37d_b.jpg',
  },
  {
    name: 'Redis',
    minGrowthTime: 4,
    maxGrowthTime: 5,
    difficulty: 'MEDIUM',
    maintenance: 'Tahab alguses olla pimedas, pärast valges. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
    image: 'https://live.staticflickr.com/5478/10951951054_2f4d0a1276_b.jpg',
  },
  {
    name: 'Brokoli',
    minGrowthTime: 3,
    maxGrowthTime: 5,
    difficulty: 'MEDIUM',
    maintenance: 'Loputa ja nõruta hoolikalt, taga piisav õhuringlus.',
    type: 'SPROUT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Brokkolisprossen-schale-knolle.jpg',
  },
  {
    name: 'Võõrasema',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Ilusate värviliste õitega lill. Ei karda külma. Sobib hästi nii potti, rõdukasti kui peenrale. Kasta ja väeta regulaarselt. Närbunud õied nopi ära, et soodustada uute õite kasvu.',  
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Viola_%C3%97_wittrockiana_001.jpg/640px-Viola_%C3%97_wittrockiana_001.jpg',
  },
  {
    name: 'Rukkilill',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Kergesti kasvatatav lill. Nõuab vähe hoolt. Armastab valgust, kuid talub ka varjulist kasvukohta. Kasta mõõdukalt.',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CentaureaCyanus-bloem-kl.jpg/800px-CentaureaCyanus-bloem-kl.jpg',
  },
  {
    name: 'Virk-Liisu',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Ilus värvikirevate õitega lill. Armastab sooja, poolvarjulist kasvukohta. Kasta rikkalikult ja väeta igal kastmiskorral.  ',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2020-11-17_14_33_20_Impatiens_walleriana_with_red-purple_flowers_blooming_in_late_autumn_along_Metrotech_Drive_at_the_Sully_Place_Shopping_Center_in_Chantilly%2C_Fairfax_County%2C_Virginia.jpg/640px-thumbnail.jpg',
  },
  {
    name: 'Saialill',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Vähenõudlik lill. Eelistab valguseküllast kasvukohta. Ei armasta liigset niiskust.',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cal%C3%A8ndula.jpg/640px-Cal%C3%A8ndula.jpg',
  },
  {
    name: 'Mururoos',
    minGrowthTime: 50,
    maxGrowthTime: 65,
    difficulty: 'EASY',
    maintenance: 'Värvirohkete õitega lill. Armastab väga sooja ja päikeselist kasvukohta, on väga põuakindel. Kasta ja väeta harva.',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Portulaca_grandiflora%2C_Burdwan%2C_30032014_%287%29.jpg/640px-Portulaca_grandiflora%2C_Burdwan%2C_30032014_%287%29.jpg',
  },
]

const sproutData: Prisma.SproutCreateInput[] = [
  {
    sproutLength: 3,
    usage: 'Lutserni idud sobivad oma õrna maitsega suurepäraselt salatitesse ja võileibadele.',
    benefits: 'Lutsernis on rohkesti C-vitamiini ja kiudaineid ning ta aitab alandada kolesterooli.',
    plant: {
      connect: {
        name: 'Lutsern',
      },
    },
  },
  {
    sproutLength: 2,
    usage: 'Mungoa idud sobivad suurepäraselt salatitesse ja suppidesse.',
    benefits: 'Munguba sisaldab rohkelt valku ja kiudaineid. Toetab seedimist ja tugevdab immuunsüsteemi.',
    plant: {
      connect: {
        name: 'Munguba',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Läätseidud maitsevad hästi salatites ja valgurikka lisandina erinevates roogades.',
    benefits: 'Läätsedes on palju kiudaineid ja valku, nad mõjuvad hästi südame tervisele ja veresuhkrule.',
    plant: {
      connect: {
        name: 'Läätsed',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Rediseidud annavad vürtsika noodi salatitele ja võileibadele.',
    benefits: 'Redises on ohtralt C-vitamiini ja mineraalaineid ning ta parandab seedimist ja immuunsust',
    plant: {
      connect: {
        name: 'Redis',
      },
    },
  },
  {
    sproutLength: 3,
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
    maturity: 'Lehed umbes 5 cm pikad, lõhnavad, helerohelised. Taim ei tohi veel õitseda.',
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
    maturity: 'Varred on 15-20 cm pikad, lehed tumerohelised ja lõhnavad. Õitsemine pole veel alanud.',
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
    maturity: 'Korja marju, kui need on täiesti punased, aga mitte veel ülipehmed.',
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
    maturity: 'Korista kas kogu taim umbes 5 nädala möödumisel idanemisest või korja suuremaid väliseid lehti vastavalt vajadusele.',
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
    maturity: 'Korja viljad, kui need on täiesti punased ja parajalt pehmed.',
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
    maturity: 'Kõrgus umbes 20-30 cm. Lehed ümarad ja rohelised, õitel on viis kroonlehte.',
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
    maturity: 'Kõrgus 15-100 cm. Lehed valkjashallid.',
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
    maturity: 'Kõrgus 10-35 cm. Lehed on tumerohelised, läikivad ja ovaalsed.',
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
    maturity: 'Kõrgus 50-60 cm. Lehe pind on ereroheline ning veidi kare ja kleepuv. ',
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
    maturity: 'Kõrgus 8-20 cm. Varred lihakad ja lamanduvad.',
    appearance: 'Õied punased, roosad, oranžid või kollased.',
    plant: {
      connect: {
        name: 'Mururoos',
      },
    },
  },
]

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

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  for (const p of plantData) {
    const plant = await prisma.plant.create({
      data: p,
    });
    console.log(`Created plant with id: ${plant.id}`);
  }

  for (const s of sproutData) {
    const sprout = await prisma.sprout.create({
      data: s,
    });
    console.log(`Created sprout with id: ${sprout.id}`);
  }

  for (const e of foodData) {
    const food = await prisma.food.create({
      data: e,
    });
    console.log(`Created food with id: ${food.id}`);
  }

  for (const f of flowerData) {
    const flower = await prisma.flower.create({
      data: f,
    });
    console.log(`Created flower with id: ${flower.id}`);
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })