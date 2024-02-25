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
