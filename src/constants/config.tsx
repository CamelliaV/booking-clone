interface sliceConfig {
  [index: string]: { slidesToScroll: number; slideSize: string }
}

const sliceConfig: sliceConfig = {
  explore: {
    // 276 : 221
    slideSize: '16%',
    slidesToScroll: 6
  },
  property: {
    // 263 : 210
    slideSize: '25%',
    slidesToScroll: 4
  },
  destination: {
    // 276 : 221
    slideSize: '16%',
    slidesToScroll: 6
  },
  planner: {
    // 276 : 221
    slideSize: '16%',
    slidesToScroll: 6
  },
  unique: {
    // 263 : 210
    slideSize: '25%',
    slidesToScroll: 4
  },
  love: {
    slideSize: '25%',
    slidesToScroll: 4
  },
  connect: {
    slideSize: '25%',
    slidesToScroll: 4
  },
  trip: {
    slideSize: '25%',
    slidesToScroll: 3
  }
}

export { sliceConfig }
