import { PostInterface } from 'helpers/types'

export const postsMock: PostInterface[] = [
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'RESIDENT EVIL Official',
      nickname: 'resident_evil',
    },
    type: 'POST',
    message:
      'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'RESIDENT EVIL Official',
      nickname: 'resident_evil',
    },
    type: 'POST',
    post: {
      user: {
        photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
        name: 'RESIDENT EVIL Official',
        nickname: 'resident_evil',
      },
      type: 'REPOST',
      message:
        'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
  {
    user: {
      photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
      name: 'RESIDENT EVIL Official',
      nickname: 'resident_evil',
    },
    type: 'POST',
    message: 'What is this?',
    post: {
      user: {
        photoUrl: 'https://pbs.twimg.com/profile_images/1483973266129801221/47PMvWFu_400x400.jpg',
        name: 'RESIDENT EVIL Official',
        nickname: 'resident_evil',
      },
      type: 'REPOST',
      message:
        'Resident Evil 4 in VR on Quest 2 won awards for Best AR/VR Game and Best Remake at the New York Game Awards, and was nominated at the SXSW Gaming Awards',
      createdAt: new Date(),
    },
    createdAt: new Date(),
  },
]
