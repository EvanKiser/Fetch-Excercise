const express = require('express')
const Transactions = require('../models/Transaction')
const router = express.Router()

/* GET All transactions */
router.get('/', async (req, res) => {
    await Transactions.getTransactions()
    .then(transactions => res.json(transactions))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* POST A transaction */
router.post('/', async (req, res) => {
    await Transactions.insertTransaction(req.body)
    .then(transaction => res.status(201).json({
        message: `The transaction has been created`,
        content: transaction
    }))
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

/* DELETE All transactions */
router.delete('/', async (req, res) => {
    Transactions.deleteAllTransactions()
    .then(Boolean => res.status(201).json({
        message: `All transactions deleted`,
    }))
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

/* POST A transaction */
router.post('/bulk', async (req, res) => {
    await Transactions.insertMultipleTransactions(req.body)
    .then(transactions => res.status(201).json({
        message: `All transactions have been created`,
        content: transactions
    }))
    .catch(err => {
        res.status(400).json({ error: err })
    })
})


module.exports = router