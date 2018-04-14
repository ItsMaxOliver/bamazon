var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }
    else{
        queryAllProducts();
        promptUser();
    }
})

function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
        }
        console.log("------------------------------------------------\n");
    })
}

function promptUser() {
    inquirer.prompt([
        {
        name: "id",
        message: "What is the ID of the product you would like to purchase?"
        },
        {
        name: "quantity",
        message: "\nHow many units of the product would you like to buy?"
        },
        {
        type: "confirm",
        name: "confirm",
        message: "\nWould you like to place your order?"
        }
    ]).then(function checkStore(answers){
        //check the database to see if answers.quantity is more than or equal to what we have
        //if true fulfill the customer's order (update sql databse) and then log how much the total cost of their order is
        //if not log "I'm sorry we don't have that many in stock." and prevent order from going through
    }).then(function () {
        endConnection();
    }).catch(function(err) {
        if (err) throw err;
    })
}

function endConnection() {
    connection.end();
}