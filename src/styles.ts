import tw from 'twin.macro'
interface CommonStyles {
  bg: '#003580'
  text: 'white'
}
const commonStylesObj: CommonStyles = {
  bg: '#003580',
  text: 'white'
}
export const commonStyles = (attr: keyof CommonStyles) => commonStylesObj[attr]
