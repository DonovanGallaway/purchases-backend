const Purchase = require('../models/purchase')

const {Router} = require('express')
const router = Router()

router.get('/', async (req,res) => {
    try{
        res.status(200).json(await Purchase.find({}))
    } catch (error){
        res.status(400).json({error})
    }
})

router.post('/', async (req,res) => {
    try {
        res.status(200).json(await Purchase.create(req.body))
    } catch (error){
        res.status(400).json({error})
    }
})

router.get('/:id', async (req,res) => {
    try {
        res.status(200).json(await Purchase.findById(id))
    } catch (error) {
        res.status(400).json({error})
    }
})

router.put('/:id', async (req,res) => {
    try {
        res.status(200).json(await Purchase.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error){
        res.status(400).json({error})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        res.status(200).json(await Purchase.findByIdAndRemove(req.params.id))
    } catch (error){
        res.status(400).json({error})
    }
})

module.exports = router