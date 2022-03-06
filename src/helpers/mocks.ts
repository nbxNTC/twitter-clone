import { PostInterface, SessionInterface } from 'helpers/types'

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
    message:
      'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
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
    type: 'REPOST',
    message: 'What is this?',
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
]
