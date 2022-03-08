import { PostInterface, SessionInterface, FollowingUsersInterface, UserInterface } from 'helpers/types'

export const followingUsers: FollowingUsersInterface[] = [
  {
    id: '0',
    following: ['1', '2'],
  },
  {
    id: '1',
    following: ['0', '2', '3', '4'],
  },
  {
    id: '2',
    following: ['0'],
  },
  {
    id: '3',
    following: ['0'],
  },
  {
    id: '4',
    following: [],
  },
]

export const usersMock: UserInterface[] = [
  {
    id: '0',
    photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
    name: 'Mario Nbx',
    nickname: 'marionbx',
    createdAt: new Date(),
  },
  {
    id: '1',
    photoUrl: 'https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png',
    name: 'Meta',
    nickname: 'meta',
    createdAt: new Date(),
  },
  {
    id: '2',
    photoUrl: 'https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg',
    name: 'Elon Musk',
    nickname: 'elonmusk',
    createdAt: new Date(),
  },
  {
    id: '3',
    photoUrl: 'https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg',
    name: 'Twitter',
    nickname: 'Twitter',
    createdAt: new Date(),
  },
  {
    id: '4',
    photoUrl: 'https://pbs.twimg.com/profile_images/1271208359316742144/00byin3N_400x400.jpg',
    name: 'Resident Evil',
    nickname: 'RE_Games',
    createdAt: new Date(),
  },
]

export const sessionMock: SessionInterface = {
  user: usersMock[0],
}

export const postsMock: PostInterface[] = [
  {
    user: usersMock[0],
    type: 'POST',
    message: 'Hello my friends.',
    createdAt: new Date(),
  },
  {
    user: usersMock[1],
    type: 'POST',
    message:
      'We have been closely following the invasion in Ukraine and taking steps to help protect and support our community. Below are a few of the actions we’ve already taken.',
    createdAt: new Date(),
  },
  {
    user: usersMock[2],
    type: 'POST',
    message: 'Even some of the best AI software engineers in the world don’t realize how advanced Tesla AI has become',
    createdAt: new Date(),
  },
  {
    user: usersMock[2],
    type: 'POST',
    message: 'we asked the engineers if we could pin a DM and they said NO! YOU CAN PIN SIX!',
    createdAt: new Date(),
  },
  {
    user: usersMock[3],
    type: 'REPOST',
    post: {
      user: usersMock[0],
      type: 'POST',
      message:
        'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
  {
    user: usersMock[3],
    type: 'QUOTE',
    message: 'What is this?',
    post: {
      user: usersMock[4],
      type: 'POST',
      message:
        'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
  {
    user: usersMock[4],
    type: 'REPOST',
    post: {
      user: usersMock[0],
      type: 'QUOTE',
      message: 'What is this?',
      post: {
        user: usersMock[4],
        type: 'POST',
        message:
          'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
        createdAt: new Date(),
      },
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
]
