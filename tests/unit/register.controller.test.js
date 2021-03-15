const { italic } = require('colors')
const {register}=require('../../controllers/auth')

describe('register new user',()=>{
    it('shoud register new user api',()=>{
        expect(typeof register).toBe('function')
    })
})

