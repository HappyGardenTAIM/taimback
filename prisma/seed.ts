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

const taskDetailData: Prisma.TaskDetailCreateInput[] = [
  {
    description: 'Leota seemneid üleöö vees, et kiirendada idanemisprotsessi.',
    taskType: 'SOAK',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://hilahcooking.com/wp-content/uploads/2014/01/soaking-seeds.jpg',
  },
  {
    description: 'Loputa seemneid hommikul ja õhtul, et vältida hallituse teket.',
    taskType: 'RINSE',
    difficulty: 'EASY',
    phase: 'SOAKING',
    picture: 'https://2.bp.blogspot.com/-khRqIxk4kS8/UtWutF-C6fI/AAAAAAAAFGU/Ik0Y-NMBkqI/s1600/DSC_0001.JPG',
  },
  {
    description: 'Kasta taimi regulaarselt, hoides mulla niiskust tasakaalus.',
    taskType: 'WATER',
    difficulty: 'EASY',
    phase: 'GROWING',
    picture: 'https://thisismygarden.com/wp-content/uploads/2018/05/Watering-the-garden.jpg',
  },
  {
    description: 'Väeta taimi, et toetada nende kasvu ja arengut.',
    taskType: 'FERTILIZE',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://www.thespruce.com/thmb/LR7bKlDob-OhmMPp1ZVJDgzxFcA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545582750-61ed3446a17140e48b9dabe3e5c6115c.jpg',
  },
  {
    description: 'Näpista ära üleliigsed võrsed, et soodustada tugevamat kasvu.',
    taskType: 'PRUNE',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ehS39.img?w=768&h=480&m=6',
  },
  {
    description: 'Korista saak, kui taimed on jõudnud täiskasvuni.',
    taskType: 'HARVEST',
    difficulty: 'EASY',
    phase: 'HARVESTING',
    picture: 'https://www.farmersalmanac.com/wp-content/uploads/2020/11/garden-harvest-produce-last-longer-As_305375846.jpeg',
  },
  {
    description: 'Kontrolli taimi regulaarselt, et tuvastada kahjureid või haigusi.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://i.pinimg.com/originals/66/1b/e6/661be6755585c1386e355c806947096f.jpg',
  },
  {
    description: 'Vali sobiv asukoht taimede istutamiseks, arvestades nende valgusvajadusi.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1hBpSK.img?w=1400&h=933&m=4&q=68',
  },
  {
    description: 'Kasuta kvaliteetset mulda, mis toetab taimede kasvu.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://i0.wp.com/blog.backtotheroots.com/wp-content/uploads/2020/10/organic-potting-soil.jpeg?fit=1600%2C1067&ssl=1',
  },
  {
    description: 'Eemalda umbrohud, et taimed saaksid paremini kasvada.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://vlsinc.com/wp-content/uploads/2020/02/weeding-1536x1023.jpg',
  },
  {
    description: 'Jälgi taimede kastmisvajadusi, eriti kuuma ilmaga.',
    taskType: 'WATER',
    difficulty: 'EASY',
    phase: 'GROWING',
    picture: 'https://www.ksre.k-state.edu/news/images/news-stories/2018/ag-natural-resources/DrySoilweb.jpg',
  },
  {
    description: 'Kaalu katteloori kasutamist öökülmade korral.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'GROWING',
    picture: 'https://ak1.ostkcdn.com/images/products/is/images/direct/3ec899b2a541ea89d4711cbb703ba6ce75922d2f/Agfabric-Row-Cover-Fabric-for-Plant-Frost-Protection-Harsh-Weather.jpg?imwidth=714&impolicy=medium',
  },
  {
    description: 'Kaitse taimi kahjurite eest looduslike vahenditega.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/04/Organic-Pesticides-for-Your-Garden-Cover-27-04.jpg',
  },
  {
    description: 'Taga taimedele piisav valgus, kasutades vajadusel lisavalgustust.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'GROWING',
    picture: 'https://www.plantindex.com/wp-content/uploads/2021/04/house-plants-grow-under-normal-led-light.jpg',
  },
  {
    description: 'Väldi taimede ülekastmist, et hoida juured tervena.',
    taskType: 'WATER',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://mag.dibasabz.com/wp-content/uploads/2021/03/HOME_Rain1_1200x785px-e1616447438582-1024x684.jpg',
  },
  {
    description: 'Harvenda tihedalt istutatud taimi, et parandada õhuringlust.',
    taskType: 'PRUNE',
    difficulty: 'MEDIUM',
    phase: 'GROWING',
    picture: 'https://www.thespruce.com/thmb/yV80UGi0MLvDkS3vTdGYcBQVoIU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/154457348-56a6d36b3df78cf7729070e4.jpg',
  },
  {
    description: 'Rakenda kohapeal kompostimist, et rikastada mulda.',
    taskType: 'FERTILIZE',
    difficulty: 'EASY',
    phase: 'PREP',
    picture: 'https://www.bhg.com/thmb/uyoTL0aGgdY_C7JhFnFZxBnxNYw=/1245x0/filters:no_upscale():strip_icc()/compost-soil-shovel-c0bdd251-5a38b6d7d23a4344a9550d3d65da9211.jpg',
  },
  {
    description: 'Valmistu ette talveks, kattes mitmeaastased taimed.',
    taskType: 'CHECK',
    difficulty: 'MEDIUM',
    phase: 'HARVESTING',
    picture: 'https://theworldofsurvival.com/wp-content/uploads/2022/01/The-7-Best-Plant-Covers-for-Winter-Frost.jpg',
  },
  {
    description: 'Säilita saaki õigesti, et pikendada selle säilivusaega.',
    taskType: 'HARVEST',
    difficulty: 'EASY',
    phase: 'HARVESTING',
    picture: 'https://southeastagnet.com/wp-content/uploads/2019/10/food-cellar.shutterstock_1194456010-1024x768.jpg',
  },
  {
    description: 'Analüüsi hooaja lõpus taimede kasvu ja õpi kogemustest.',
    taskType: 'CHECK',
    difficulty: 'EASY',
    phase: 'HARVESTING',
    picture: 'https://cdn2.hubspot.net/hubfs/18130/AdobeStock_102891724-658317-edited.jpeg',
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
  await prisma.journeyTask.deleteMany();
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

  for (const p of plantData) {
    const plant = await prisma.plant.create({
      data: p,
    });
    console.log(`Created plant with id: ${plant.id}`);

    const randomTaskDetails = allTaskDetails.sort(() => 0.5 - Math.random()).slice(0, 5);

    for (const td of randomTaskDetails) {
      await prisma.plantToTaskDetail.create({
        data: {
          plantId: plant.id,
          taskDetailId: td.id,
          order: randomTaskDetails.indexOf(td),
        },
      });
    }
  }

  for (const s of sproutData) {
    const sprout = await prisma.sprout.create({
      data: s,
    });
    console.log(`Created sprout with id: ${sprout.id}`);

    const randomTaskDetails = allTaskDetails.sort(() => 0.5 - Math.random()).slice(0, 5);

    for (const td of randomTaskDetails) {
      await prisma.sproutToTaskDetail.create({
        data: {
          sproutId: sprout.id,
          taskDetailId: td.id,
          order: randomTaskDetails.indexOf(td),
        },
      });
    }
  }

  for (const e of foodData) {
    const food = await prisma.food.create({
      data: e,
    });
    console.log(`Created food with id: ${food.id}`);

    const randomTaskDetails = allTaskDetails.sort(() => 0.5 - Math.random()).slice(0, 5);

    for (const td of randomTaskDetails) {
      await prisma.foodToTaskDetail.create({
        data: {
          foodId: food.id,
          taskDetailId: td.id,
          order: randomTaskDetails.indexOf(td),
        },
      });
    }
  }

  for (const f of flowerData) {
    const flower = await prisma.flower.create({
      data: f,
    });
    console.log(`Created flower with id: ${flower.id}`);

    const randomTaskDetails = allTaskDetails.sort(() => 0.5 - Math.random()).slice(0, 5);

    for (const td of randomTaskDetails) {
      await prisma.flowerToTaskDetail.create({
        data: {
          flowerId: flower.id,
          taskDetailId: td.id,
          order: randomTaskDetails.indexOf(td),
        },
      });
    }
  }

  console.log(`Seeding finished.`)
}

clearDatabase()
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })