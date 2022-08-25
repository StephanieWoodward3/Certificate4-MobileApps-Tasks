import express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Task 01
app.get('/Product/FixedDescription', (req, res) => {

    res.send('Product: Gaming Computer \<br>\  Quantity: 2')

})

//Task 02
app.get('/Product/DynamicDescription', (req, res) => {

    res.send(
        'Product: ' + req.query.name + '\<br>\ Quantity: ' + req.query.quantity
    )

})

//Task 03
app.get('/Product/OldDescription', (req, res) => {
    res.redirect('/Product/NewDescription')
})

app.get('/Product/NewDescription', (req, res) => {
    res.send('You have been redirected to the new description page for a product!”')
})

//Task 04
app.get('/Product/Description', (req, res) => {

    res.send({
        'Product:': req.query.name,
        'Quantity:': req.query.price
    })

})

//Task 05
app.get('/Product/ConditionalTest', (req, res) => {

    let number = Number(req.query.number)
    if(number > 10){
        res.send("The number is greater than ten")
    } else if (number < 10){
        res.send("The number is less than ten")
    } else {
        res.send("The number is equal to ten")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});