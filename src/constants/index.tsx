import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faPersonBiking,
  faUmbrellaBeach,
  faMugHot
} from '@fortawesome/free-solid-svg-icons'

interface dataShowcase {
  [index: string]: Array<object>
}
const dataShowcase: dataShowcase = {
  exploreData: [
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Osaka',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    },
    {
      title: 'Tokyo',
      subtitle: '5,656 properties',
      url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
    }
  ],
  destinationData: [
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    },
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    },
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    },
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    },
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    },
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    },
    {
      title: 'Boracay, Philippines',
      url: 'https://ac-a.static.booking.cn/xdata/images/city/300x240/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o='
    }
  ],
  connectData: [
    {
      title: 'Poland',
      url: 'https://cf.bstatic.com/static/img/communities/cover-photo/300x300/poland/ebe3b6b2312591d1c23376692acbd828dd47bcfc.jpg',
      subtitle: '\nTravel community\n',
      subtitle2: '\n147,681 travellers\n'
    },
    {
      title: 'Spain',
      url: 'https://cf.bstatic.com/static/img/communities/cover-photo/300x300/spain/cc1ffd8d818fde071e1562140a2b5a2d00915679.jpg',
      subtitle: '\nTravel community\n',
      subtitle2: '\n954,447 travellers\n'
    },
    {
      title: 'Hungary',
      url: 'https://cf.bstatic.com/static/img/communities/cover-photo/300x300/hungary/24b3801b606a591e26ac43ec098d9e92fe6f1472.jpg',
      subtitle: '\nTravel community\n',
      subtitle2: '\n89,744 travellers\n'
    },
    {
      title: 'Travel Discussions',
      url: 'https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/f43b42664bbf44f174b44c64fd71440b4af56888.jpg',
      subtitle: '\nView forum\n',
      subtitle2: '\n559,436 travellers\n'
    },
    {
      title: 'More communities',
      url: 'https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/592ac5a7bbd5433c1aba6f1afdea794e572c9a69.png',
      subtitle: '\nView all\n',
      subtitle2: '\n9,894,940 travellers\n'
    }
  ],
  plannerData: [
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    },
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    },
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    },
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    },
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    },
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    },
    {
      title: 'Suzhou',
      subtitle: '191 km away',
      url: 'https://ac-a.static.booking.cn/xdata/images/xphoto/300x240/140046085.jpg?k=50f84d6388c242c58de20428624d2bc16c1f24b8e20420dbd655e74196c18f12&o='
    }
  ],
  uniqueData: [
    {
      title: 'La Roulotte de Ciney',
      subtitle: 'Belgium, Ciney',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
      score: 8.2,
      comment: 'Very good',
      reviews: 145
    },
    {
      title: 'La Roulotte de Ciney',
      subtitle: 'Belgium, Ciney',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
      score: 8.2,
      comment: 'Very good',
      reviews: 145
    },
    {
      title: 'La Roulotte de Ciney',
      subtitle: 'Belgium, Ciney',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
      score: 8.2,
      comment: 'Very good',
      reviews: 145
    },
    {
      title: 'La Roulotte de Ciney',
      subtitle: 'Belgium, Ciney',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
      score: 8.2,
      comment: 'Very good',
      reviews: 145
    },
    {
      title: 'La Roulotte de Ciney',
      subtitle: 'Belgium, Ciney',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
      score: 8.2,
      comment: 'Very good',
      reviews: 145
    },
    {
      title: 'La Roulotte de Ciney',
      subtitle: 'Belgium, Ciney',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
      score: 8.2,
      comment: 'Very good',
      reviews: 145
    }
  ],
  loveData: [
    {
      title: 'Aparthotel Stare Miasto',
      subtitle: 'Old Town, Poland, Kraków',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
      score: 8.7,
      comment: 'Fabulous',
      reviews: 2171,
      price: 1197
    },
    {
      title: 'Aparthotel Stare Miasto',
      subtitle: 'Old Town, Poland, Kraków',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
      score: 8.7,
      comment: 'Fabulous',
      reviews: 2171,
      price: 1197
    },
    {
      title: 'Aparthotel Stare Miasto',
      subtitle: 'Old Town, Poland, Kraków',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
      score: 8.7,
      comment: 'Fabulous',
      reviews: 2171,
      price: 1197
    },
    {
      title: 'Aparthotel Stare Miasto',
      subtitle: 'Old Town, Poland, Kraków',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
      score: 8.7,
      comment: 'Fabulous',
      reviews: 2171,
      price: 1197
    },
    {
      title: 'Aparthotel Stare Miasto',
      subtitle: 'Old Town, Poland, Kraków',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
      score: 8.7,
      comment: 'Fabulous',
      reviews: 2171,
      price: 1197
    },
    {
      title: 'Aparthotel Stare Miasto',
      subtitle: 'Old Town, Poland, Kraków',
      url: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
      score: 8.7,
      comment: 'Fabulous',
      reviews: 2171,
      price: 1197
    }
  ],
  tripHead: [
    {
      title: "Europe's finest and most scenic train journeys",
      subtitle:
        'From the snow-capped peaks of the Alps to vast, navy blue Norwegian fjords.',
      url: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/225084278.webp?k=ffc3291f7c36f8f0c8d245e83a22350ca05b8a7f94bf1f51447a02787b42d699&o='
    }
  ],
  tripData: [
    {
      title: '6 inspiring sabbaticals in the Asia-Pacific region',
      subtitle:
        'From a mindful stay in a Japanese temple to a cookery course in Vietnam.',
      url: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/223110036.webp?k=dee0537605f9e2377deca151eb89be76ef24e35f4d91ab7eb397625af8cb6cec&o='
    },
    {
      title: '6 best summer music festivals in South Korea',
      subtitle:
        'From dancing to K-hip hop in Seoul to a classical music festival in the mountains.',
      url: 'https://cf.bstatic.com/xdata/images/xphoto/720x405/223600156.webp?k=dd6dcf8fc8d528ea747cb3f0fbb5da8b2832e7548dcc25497cd90cc7318f058e&o='
    },
    {
      title: 'Northern Italian holiday homes with amazing views',
      subtitle:
        'From a historic villa on Lake Como to an Italian Riviera bungalow overlooking the sea.',
      url: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/219730590.webp?k=10a70a5982bc3bc2661b2d8ac142f3320bb52acedd32130504c192975a8d9b47&o='
    },
    {
      title: '10 incredible music festivals in Asia',
      subtitle:
        'From water fights with incredible music in Bangkok to a festival on a ship. ',
      url: 'https://cf.bstatic.com/xdata/images/xphoto/720x405/217716417.webp?k=cae30f9d656d0c9b9247f640770bf8b1d5469c2f81bb4ee80d8d7d33abca664b&o='
    }
  ],
  destinationList: [
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },

    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },
    { title: 'Hawaii', subtitle: '5518 properties' },

    { title: 'Hawaii', subtitle: '5518 properties' }
  ]
}

const longButtonInfos = [
  {
    text: 'Romance',
    icon: <FontAwesomeIcon icon={faHeart} />
  },
  {
    text: 'Outdoors',
    icon: <FontAwesomeIcon icon={faPersonBiking} />
  },
  {
    text: 'Relax',
    icon: <FontAwesomeIcon icon={faMugHot} />
  },
  {
    text: 'Beach',
    icon: <FontAwesomeIcon icon={faUmbrellaBeach} />
  }
]
const midButtonInfos = [
  { text: 'Regions' },
  { text: 'Cities' },
  { text: 'Places of interest' }
]
const shortButtonInfos = [
  { text: 'April' },
  { text: 'May' },
  { text: 'June' },
  { text: 'July' },
  { text: 'August' },
  { text: 'September' }
]

export { dataShowcase, shortButtonInfos, longButtonInfos, midButtonInfos }
