import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

// export type PlantCreateInput = {
//   name: string
//   minGrowthTime: number
//   maxGrowthTime: number
//   difficulty: $Enums.Difficulty
//   maintenance: string
//   type: $Enums.PlantType
//   sprout?: SproutCreateNestedOneWithoutPlantInput
//   food?: FoodCreateNestedOneWithoutPlantInput
//   flower?: FlowerCreateNestedOneWithoutPlantInput
//   journeys?: JourneyCreateNestedManyWithoutPlantInput
// }

const plantData: Prisma.PlantCreateInput[] = [
  {
    name: 'Basiilik',
    minGrowthTime: 20,
    maxGrowthTime: 40,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja vähemalt 6 tundi päikesevalgust päevas. Õied näpistada ära, et soodustada lehtede kasvu.',
    type: 'FOOD',
  },
  {
    name: 'Kurgirohi',
    minGrowthTime: 15,
    maxGrowthTime: 30,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja poolvarjulist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
  },
  {
    name: 'Petersell',
    minGrowthTime: 20,
    maxGrowthTime: 40,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja poolvarjulist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
  },
  {
    name: 'Salat',
    minGrowthTime: 25,
    maxGrowthTime: 35,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja päikeselist kasvukohta. Sobib hästi maitsetaimena kasutamiseks.',
    type: 'FOOD',
  },
  {
    name: 'Tomat',
    minGrowthTime: 40,
    maxGrowthTime: 60,
    difficulty: 'MEDIUM',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FOOD',
  },
  {
    name: 'Päevalill',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'EASY',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
  },
  {
    name: 'Mungoa',
    minGrowthTime: 2,
    maxGrowthTime: 3,
    difficulty: 'MEDIUM',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
  },
  {
    name: 'Kikerhernes',
    minGrowthTime: 3,
    maxGrowthTime: 4,
    difficulty: 'MEDIUM',
    maintenance: 'Leota üleöö seemneid vees, seejärel nõruta. Loputa igal hommikul ja õhtul.',
    type: 'SPROUT',
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
  },
  {
    name: 'Peiulill',
    minGrowthTime: 10,
    maxGrowthTime: 20,
    difficulty: 'EASY',
    maintenance: 'Water once a week',
    type: 'FLOWER',
  },
  {
    name: 'Harilik Pelargoonium',
    minGrowthTime: 30,
    maxGrowthTime: 45,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja päikeselist kasvukohta. Õitseb rikkalikult suvekuudel.',
    type: 'FLOWER',
  },
  {
    name: 'Nasturtium',
    minGrowthTime: 20,
    maxGrowthTime: 35,
    difficulty: 'EASY',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Õitseb erksate lilledega.',
    type: 'FLOWER',
  },
  {
    name: 'Tulp',
    minGrowthTime: 60,
    maxGrowthTime: 120,
    difficulty: 'EASY',
    maintenance: 'Vajab regulaarset kastmist ja päikeselist kasvukohta. Õitseb rikkalikult suvekuudel.',
    type: 'FLOWER',
  },
  {
    name: 'Kassinaeris',
    minGrowthTime: 15,
    maxGrowthTime: 25,
    difficulty: 'EASY',
    maintenance: 'Vajab mõõdukat kastmist ja päikeselist kasvukohta. Sobib hästi rõdukasti või aknalauale.',
    type: 'FLOWER',
  },
]

// export type SproutCreateInput = {
//   sproutLength: number
//   usage?: string | null
//   benefits?: string | null
//   plant: PlantCreateNestedOneWithoutSproutInput
// }

const sproutData: Prisma.SproutCreateInput[] = [
  {
    sproutLength: 3,
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    plant: {
      connect: {
        name: 'Päevalill',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    plant: {
      connect: {
        name: 'Mungoa',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    plant: {
      connect: {
        name: 'Kikerhernes',
      },
    },
  },
  {
    sproutLength: 3,
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    plant: {
      connect: {
        name: 'Päevalill2',
      },
    },
  },
  {
    sproutLength: 7,
    usage: 'Sobib hästi salatitesse ja võileibadele lisamiseks.',
    benefits: 'Rohkelt C-vitamiini ja kiudaineid.',
    plant: {
      connect: {
        name: 'Brokoli',
      },
    },
  },
]

//   export type FoodCreateInput = {
//   light: $Enums.Light
//   watering: number
//   harvesting?: number | null
//   pruning?: number | null
//   maturity: string
//   usage?: string | null
//   benefits?: string | null
//   plant: PlantCreateNestedOneWithoutFoodInput
// }

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
        name: 'Salat',
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
        name: 'Harilik Pelargoonium',
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
