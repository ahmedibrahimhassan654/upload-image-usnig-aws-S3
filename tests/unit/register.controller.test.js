const { italic } = require('colors')
const {register}=require('../../controllers/auth')
const User =require('../../models/User')

User.create=jest.fn()

describe('register new user',()=>{
    it('shoud register new user api function',()=>{
        expect(typeof register).toBe('function')
    })
    it('should create new user in user model',()=>{
        register()
        expect(User.create).toBeCalled()
    })
})

