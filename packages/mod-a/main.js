import { getMyHref } from '@someone/mod-b'

export const getHref = () => {
  console.log(location.href)
  return location.href
}

export const getModuleHref = () => {

  return getMyHref()
}
