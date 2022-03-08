import { PostInterface, SessionInterface, FollowsType } from 'helpers/types'

export const followsMock: FollowsType = ['marionbx', 'meta', 'elon musk']

export const sessionMock: SessionInterface = {
  user: {
    photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
    name: 'Mario Nbx',
    nickname: 'marionbx',
  },
}

export const postsMock: PostInterface[] = [
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'Mario Nbx',
      nickname: 'marionbx',
    },
    type: 'POST',
    message: 'Hello my friends.',
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png',
      name: 'Meta',
      nickname: 'meta',
    },
    type: 'POST',
    message:
      'We have been closely following the invasion in Ukraine and taking steps to help protect and support our community. Below are a few of the actions we’ve already taken.',
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg',
      name: 'Elon Musk',
      nickname: 'elonmusk',
    },
    type: 'POST',
    message: 'Even some of the best AI software engineers in the world don’t realize how advanced Tesla AI has become',
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg',
      name: 'Twitter',
      nickname: 'Twitter',
    },
    type: 'POST',
    message: 'we asked the engineers if we could pin a DM and they said NO! YOU CAN PIN SIX!',
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'Mario Nbx',
      nickname: 'marionbx',
    },
    type: 'REPOST',
    post: {
      user: {
        photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
        name: 'Mario Nbx',
        nickname: 'marionbx',
      },
      type: 'POST',
      message:
        'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'Mario Nbx',
      nickname: 'marionbx',
    },
    type: 'QUOTE',
    message: 'What is this?',
    post: {
      user: {
        photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
        name: 'Resident Evil',
        nickname: 'resident_evil',
      },
      type: 'POST',
      message:
        'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'Mario Nbx',
      nickname: 'marionbx',
    },
    type: 'REPOST',
    post: {
      user: {
        photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
        name: 'Mario Nbx',
        nickname: 'marionbx',
      },
      type: 'QUOTE',
      message: 'What is this?',
      post: {
        user: {
          photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
          name: 'Resident Evil',
          nickname: 'resident_evil',
        },
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
