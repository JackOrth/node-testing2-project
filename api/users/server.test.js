const request = require('supertest')
const server = require ('../server')

// beforeAll(async () => {
//     await db.migrate.rollback()
//     await db.migrate.latest()
// })
// beforeEach(async () => {
//     await db.seed.run()
// })
// afterAll(async () => {
//     await db.destroy()
// })

describe('[GET] /users', () => {
    it('should return a 200 OK status', async () => {
        const res = await request(server).get('/users')
        expect(res.status).toBe(200)
    })
    it('should return JSON', async () => {
        const res = await request(server).get('/users')
        expect(res.type).toBe('application/json')
    })
    it('should return a list of users', async () => {
        const res = await request(server).get('/users')
        expect(res.body).toHaveLength(4)
    })
})

describe('[POST] /users', () => {
    it('responds with a 422 if no name in payload', async () => {
        const res = await request(server).post('/users').send({})
        expect(res.status).toBe(422)
    })
    it('should return a 201 OK status', async () => {
        const res = await request(server).post('/users').send({name: 'jack'})
        expect(res.status).toBe(201)
    })
    it('responds with a newly created hobbit', async () => {
        const res = await request(server).post('/users').send({name: 'justin'})
        expect(res.body).toMatchObject({name : 'justin'})
    })
})