const filename = '../data.json'
let transactions = require(filename)
const helper = require('../helper/helper')

function getTransactions() {
    return new Promise((resolve, reject) => {
        if (transactions.length === 0) {
            reject({
                message: 'No Transactions',
                status: 202
            })
        }
        resolve(transactions)
    })
}

function insertTransaction(payload) {
    return new Promise((resolve, reject) => {
        newTransaction = 
        { 
            "payer": payload["payer"],
            "points": payload["points"],
            "timestamp": payload["timestamp"],
        }
        transactions.push(newTransaction)
        helper.writeJSONFile(transactions)
        resolve(newTransaction)
    })
}

function pointsBalances() {
    return new Promise((resolve, reject) => {
        if (transactions.length === 0) {
            reject({
                message: 'No Transactions',
                status: 202
            })
        }
        const pointsBalances = {}
        transactions.forEach(transaction => {
            if (Object.keys(pointsBalances).includes(transaction.payer)) {
                pointsBalances[transaction.payer] += transaction.points
            } else {
                pointsBalances[transaction.payer] = transaction.points
            }
        })
        resolve(pointsBalances)
    })
}

function deleteAllTransactions() { 
    return new Promise((resolve, reject) => {
        helper.writeJSONFile([])
        resolve(true)
    })
}

function totalPoints() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const pointsTotal = transactions.map(transaction => transaction.points).reduce(reducer)
    return pointsTotal
}

function spendPoints(payload) {
    let pointsToSpend = payload.points
    return new Promise((resolve, reject) => {

        // If there is not enough points to spend 
        if (pointsToSpend > totalPoints()) {
            reject({
                message: 'Not enough points to spend',
                status: 202
            })
        }

        // Spent points
        let spentPoints = {}
        transactions.sort(helper.dynamicSort("timestamp"))
        transactions.forEach(transaction => {
            if (Object.keys(spentPoints).includes(transaction.payer) && pointsToSpend > 0) {
                if (pointsToSpend < transaction.points) {
                    spentPoints[transaction.payer] -= pointsToSpend
                    transaction.points -= pointsToSpend
                    pointsToSpend = 0
                } else {
                    spentPoints[transaction.payer] -= transaction.points
                    pointsToSpend -= transaction.points
                    transaction.points = 0
                }
            } else if (pointsToSpend > 0) {
                if (pointsToSpend < transaction.points) {
                    spentPoints[transaction.payer] = -pointsToSpend
                    transaction.points -= pointsToSpend
                    pointsToSpend = 0
                }
                else {
                    spentPoints[transaction.payer] = -transaction.points
                    pointsToSpend -= transaction.points
                    transaction.points = 0
                }
            }
        })

        // Write the edited transactions to the data file
        helper.writeJSONFile(transactions)
        
        resolve(spentPoints)
    })
}

module.exports = {
    insertTransaction,
    getTransactions,
    pointsBalances,
    spendPoints,
    deleteAllTransactions
}