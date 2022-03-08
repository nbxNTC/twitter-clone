import { usersMock, sessionMock, postsMock, followingUsers } from 'helpers/mocks'

export const seedDatabase = () => {
  const seeds = [
    { name: 'users', mock: usersMock },
    { name: 'session', mock: sessionMock },
    { name: 'posts', mock: postsMock },
    { name: 'followingUsers', mock: followingUsers },
  ]

  seeds.forEach((item) => {
    const localData = localStorage.getItem(item.name)
    if (!localData) localStorage.setItem(item.name, JSON.stringify(item.mock))
  })
}
