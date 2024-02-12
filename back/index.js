const {application} = require("express")
const cors = require('cors')
const exp = require("express")
const {Web3} = require("Web3")
const app = exp()
app.use(cors())
const apiKey = "https://mainnet.infura.io/v3/d2ccdf6f95824556a5a4c7ca95fd6251"
const web3 = new Web3(apiKey)


function serializeBigInt(key, value) {
    if (typeof value === 'bigint') {
        return value.toString(); // convert BigInt to string and append 'n'
    } else {
        return value;
    }
}
/*
BigInt.prototype.toJSON = function () {
    return this.toString();
};*/

app.get("/", async (req, res) => {
    const bloque = await web3.eth.getBlockNumber();
    res.send(JSON.stringify(bloque))
})

app.get("/bloque/:bloque", async (req, res) => {
    try {
        const bloque = await web3.eth.getBlock(req.params.bloque)
        const serializedBlock = JSON.stringify(bloque, serializeBigInt);
        res.send(JSON.stringify(serializedBlock))
    } catch (error) {
        res.status(500).send({mensaje: error})
    }
})

app.get("/tx/:tx", async (req, res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx)
        const serializedBlock = JSON.stringify(tx, serializeBigInt);
        res.send(JSON.stringify(serializedBlock))
    } catch (error) {
        res.status(500).send({mensaje: error})
    }
})

app.get("/balance/:address", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.address)
        const serializedBlock = JSON.stringify(balance, serializeBigInt);
        res.send(serializedBlock)
        //res.send({balance, ethers:balance, ethers2: web3.utils.fromWei(balance, 'ether')})
    } catch (error) {
        res.status(500).send({mensaje: error})
    }
})


app.listen("5000")


