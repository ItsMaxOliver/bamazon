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
        connection.end();
    }
})

function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
        }
        console.log("------------------------------------------------\n");
        promptUser(res);
    })
}

function promptUser(res) {
    inquirer.prompt([
        {
        name: "id",
        message: "What is the ID of the product you would like to purchase?"
        },
        {
        name: "quantity",
        message: "\nHow many units of the product would you like to buy?"
        }
    ]).then(function checkStore(answers) {
        for (var i = 0; i < res.length; i++) {
            if (parseInt(answers.id) === res[i].item_id) {
                if (res[i].stock_quantity >= (parseInt(answers.quantity))) {
                    console.log("order processing...");
                }
                else {
                    console.log("\nI'm sorry we don't have that many products in stock.\n");
                    promptUser(res);
                }
            }
        }
    })
        //update sql databse and then log how much the total cost of their order is
    .catch(function(err) {
        if (err) {
            console.log(err);
        }
    })
}