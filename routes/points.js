const express = require('express')
const Transactions = require('../models/Transaction')
const router = express.Router()

// @route GET Total Point Balance
router.get('/', async (req, res) => {
    await Transactions.pointsBalances()
    .then(balance => res.json(balance))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

// @route PUT Spend Points
router.patch('/spend', async (req, res) => {
    await Transactions.spendPoints(req.body)
    .then(spentPoints => res.json( spentPoints ))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

module.exports = router