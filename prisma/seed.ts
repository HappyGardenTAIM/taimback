import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const plantData: Prisma.PlantCreateInput[] = [
  {
    name: 'Basiilik',
    minGrowthTime: 20,
    maxGrowthTime: 40,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja vähemalt 6 tundi päikesevalgust päevas. Õied näpistada ära, et soodustada lehtede kasvu.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Ocimum_basilicum_8zz.jpg',
  },
  {
    name: 'Kurgirohi',
    minGrowthTime: 15,
    maxGrowthTime: 30,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja poolvarjulist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
    image: 'https://bs.plantnet.org/image/o/2c5f4952702d2a3b4bd997a90c5c63a5feb108e5',
  },
  {
    name: 'Petersell',
    minGrowthTime: 20,
    maxGrowthTime: 40,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja poolvarjulist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Petroselinum_crispum_002.JPG'
  },
  {
    name: 'Lehtsalat',
    minGrowthTime: 25,
    maxGrowthTime: 35,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja päikeselist kasvukohta. Sobib hästi maitsetaimena kasutamiseks.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Lettuce_Cultivars_by_David_Shankbone.JPG',
  },
  {
    name: 'Tomat',
    minGrowthTime: 40,
    maxGrowthTime: 60,
    difficulty: 'MEDIUM',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
  },
  {
    name: 'Päevalill',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'EASY',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
    image: 'https://live.staticflickr.com/65535/50535635376_b1a551ecbf_6k.jpg',
  },
  {
    name: 'Munguba',
    minGrowthTime: 2,
    maxGrowthTime: 3,
    difficulty: 'MEDIUM',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Mung_bean_sprouts%2C_close-up.jpg',
  },
  {
    name: 'Kikerhernes',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'MEDIUM',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Sprouted-chickpea.jpg',
  },
  {
    name: 'Päevalill2',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'EASY',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
    
  },
  {
    name: 'Brokoli',
    minGrowthTime: 7,
    maxGrowthTime: 10,
    difficulty: 'EASY',
    maintenance: 'Vajavad iga päev loputamist ja idandamist. Kasvavad kiiresti ja on rikkad toitainete poolest.',
    type: 'SPROUT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Brokkolisprossen-schale-knole.jpg',
  },
  {
    name: 'Peiulill',
    minGrowthTime: 10,
    maxGrowthTime: 20,
    difficulty: 'EASY',
    maintenance: 'Water once a week',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Tagetes_erecta_03.JPG',
  },
  {
    name: 'Pelargoon',
    minGrowthTime: 30,
    maxGrowthTime: 45,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja päikeselist kasvukohta. Õitseb rikkalikult suvekuudel.',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Pelargonium_x_hortorum_Rocky_Mountain_Light_Pink_1zz.jpg',
  },
  {
    name: 'Nasturtium',
    minGrowthTime: 20,
    maxGrowthTime: 35,
    difficulty: 'EASY',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Õitseb erksate lilledega.',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Nasturtium_tropaeolum_flores.jpg',
  },
  {
    name: 'Tulp',
    minGrowthTime: 60,
    maxGrowthTime: 120,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja päikeselist kasvukohta. Õitseb rikkalikult suvekuudel.',
    type: 'FLOWER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Tulp.jpg',
  },
  {
    name: 'Kassinaeris',
    minGrowthTime: 15,
    maxGrowthTime: 25,
    difficulty: 'EASY',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FLOWER',
    image: 'https://bs.plantnet.org/image/o/8b0d4b9751d8980977a0487ee15bb02dd0e98e85',
  },
]

const sproutData: Prisma.SproutCreateInput[] = [
  {
    sproutLength: 3,
    benefits: 'Rohkesti C-vitamiini ja kiudaineid.',
    plant: {
      connect: {
        name: 'Päevalill',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Munguba idud sobivad suurepäraselt salatitesse ja suppidesse!',
    plant: {
      connect: {
        name: 'Munguba',
      },
    },
  },
  {
    sproutLength: 3,
    plant: {
      connect: {
        name: 'Kikerhernes',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Päevalille idud on suurepärased lisandid võileibadele ja rohelisele salatile!',
    benefits: 'Tervislikud ja pakatavad kasulikest toitainetest.',
    plant: {
      connect: {
        name: 'Päevalill2',
      },
    },
  },
  {
    sproutLength: 7,
    usage: 'Brokoli idud lisavad hõrku maitset salatitele ja pearoogadele!',
    benefits: 'Toetavad tugevat immuunsüsteemi ja on rikkad vitamiinide poolest.',
    plant: {
      connect: {
        name: 'Brokoli',
      },
    },
  },
];

const foodData: Prisma.FoodCreateInput[] = [
  {
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehed vähemalt 2 cm pikad.',
    harvesting: 3,
    pruning: 1,
    plant: {
      connect: {
        name: 'Basiilik',
      },
    },
  },
  {
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehti saab koristada 3–4 nädala möödumisel idanemisest.',
    harvesting: 3,
    pruning: null,
    plant: {
      connect: {
        name: 'Kurgirohi',
      },
    },
  },
  {
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehti saab koristada 3–4 nädala möödumisel idanemisest.',
    harvesting: 3,
    pruning: null,
    plant: {
      connect: {
        name: 'Petersell',
      },
    },
  },
  {
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehti saab koristada 3–4 nädala möödumisel idanemisest.',
    harvesting: 3,
    pruning: null,
    plant: {
      connect: {
        name: 'Lehtsalat',
      },
    },
  },
  {
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehti saab koristada 3–4 nädala möödumisel idanemisest.',
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
    maturity: 'Lehed vähemalt 2 cm pikad.',
    appearance: 'Kollased õied.',
    plant: {
      connect: {
        name: 'Peiulill',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehed vähemalt 2 cm pikad.',
    appearance: 'Kollased õied.',
    plant: {
      connect: {
        name: 'Pelargoon',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehed vähemalt 2 cm pikad.',
    appearance: 'Kollased õied.',
    plant: {
      connect: {
        name: 'Nasturtium',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehed vähemalt 2 cm pikad.',
    appearance: 'Kollased õied.',
    plant: {
      connect: {
        name: 'Tulp',
      },
    },
  },
  {
    light: 'FULL_SUN',
    watering: 1,
    maturity: 'Lehed vähemalt 2 cm pikad.',
    appearance: 'Kollased õied.',
    plant: {
      connect: {
        name: 'Kassinaeris',
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
