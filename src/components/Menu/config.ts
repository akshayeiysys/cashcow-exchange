import { MenuEntry } from 'cashcow-exchange-ui'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://3.143.197.157/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: 'http://3.143.197.157:8000/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://3.143.197.157:8000/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://3.143.197.157/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://3.143.197.157/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://3.143.197.157/lottery',
    status: {
      text: 'WIN',
      color: 'warning',
    },
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'http://3.143.197.157/collectibles',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'http://3.143.197.157/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'http://3.143.197.157/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'http://3.143.197.157/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'http://3.143.197.157/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'http://3.143.197.157:9000/',
      },
      // {
      //   label: 'Tokens',
      //   href: 'https://pancakeswap.info/tokens',
      // },
      // {
      //   label: 'Pairs',
      //   href: 'https://pancakeswap.info/pairs',
      // },
      // {
      //   label: 'Accounts',
      //   href: 'https://pancakeswap.info/accounts',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'http://3.143.197.157/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Contact',
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://docs.pancakeswap.finance',
      // },
      {
        label: 'Blog',
        href: 'https://medium.com/@CashCowDefi',
      },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
