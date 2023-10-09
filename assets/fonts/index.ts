import localFont from 'next/font/local'

export const ProximaNova = localFont({
  src: [
    {
      path: 'ProximaNova-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'ProximaNova-Bold.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: 'ProximaNova-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: 'ProximaNova-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})