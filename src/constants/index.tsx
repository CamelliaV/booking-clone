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
    }
  ],
  propertyData: [
    {
      title: 'Hotels',
      subtitle: '954,989 hotels',
      url: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o='
    },
    {
      title: 'Hotels',
      subtitle: '954,989 hotels',
      url: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o='
    },
    {
      title: 'Hotels',
      subtitle: '954,989 hotels',
      url: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&'
    },
    {
      title: 'Hotels',
      subtitle: '954,989 hotels',
      url: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o='
    }
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

const shortButtonInfos = [
  { text: 'April' },
  { text: 'May' },
  { text: 'June' },
  { text: 'July' },
  { text: 'August' },
  { text: 'September' }
]
export { dataShowcase, shortButtonInfos, longButtonInfos }
