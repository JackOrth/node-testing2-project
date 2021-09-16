// const db = require('../../data/dbConfig')
const Users = require('./users-model')

test('sanity', () => {
    
})

// beforeAll(async () => {
//     await db.migrate.rollback()
//     await db.migrate.latest()
// })
// beforeEach(async () => {
//     await db.seed.run()
// })

describe('User db access functions', ()=> {
    describe('Users.getAll', () => {
        it('resolves to all users in the users table', async () => {
            const users = await Users.getAll()
            expect(users.length).toBe(5)
        })
        it('resolves to the correct users shapes', async () => {
            const users = await Users.getAll()
            expect(users[0]).toHaveProperty([], 1)
            expect(users[0]).toHaveProperty('name', 'sam')
        })
    })
    describe('Users.insert', () => {
        // it('adds a new user to the table', async () => {
        //     await Users.insert({ name: 'bilbo' })
        //     const rows = await db('users')
        //     expect(rows).toHaveLength(5)
        // })
        it('resolves to the newly inserted user', async () => {
            const users = { name: "Jack"}
            const newUser = await Users.insert(users)
            expect (newUser).toMatchObject({ id:5, name: "Jack"})
        })
    })
})