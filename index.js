// // const express = require('express');
// // const app = express();
// // const port = process.env.PORT || 5000;
// // const cors = require('cors');
// // const { ObjectId } = require('mongodb');

// // const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// // const uri = "mongodb://localhost:27017/";

// // // middleware
// // app.use(cors());
// // app.use(express.json());



// // const client = new MongoClient(uri, {
// //     serverApi: {
// //         version: ServerApiVersion.v1,
// //         strict: true,
// //         deprecationErrors: true,
// //     }
// // });
// // app.get('/', (req, res) => {
// //     res.send("Coffee Store server running succesfully !");
// // })

// // // practice without wifi :) 21th April , 2024 start

// // async function run() {
// //     try {
// //         await client.connect();

// //         const database = client.db('coffeeDB').collection('coffeCollection');
// //         // gettting all the datas from the database P1
// //         app.get('/coffees', async (req, res) => {
// //             const cursor = database.find();
// //             const result = await cursor.toArray(cursor);

// //             res.send(result);

// //         })
// //         // getting al the data form the database P2
// //         app.get('/coffees', async (req, res) => {
// //             const choice = database.find();
// //             const result = await cursor.toArray(cursor);

// //             res.send(result);
// //         })
// //         // getting al the data form the database P3

// //         app.get('/', async (req, res) => {
// //             const cursor = database.find();
// //             const result = await cursor.toArray(cursor);

// //             res.send(result); // shows all data in the website in json format
// //             console.log(result); //shows all the data in the command panel
// //         })

// //         // getting single data form id P1  */*\/*\/*\/*\/*\/*\/*\/*\/*\*
// //         app.get('/coffee/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const query = { _id: new ObjectId(id) };
// //             const singleCoffee = await database.findOne(query);

// //             res.send(singleCoffee); // sends the data in the ui of the server
// //             console.log(singleCoffee); // shows data in teh command panel
// //         })
// //         //getting single coffee data practice P2.
// //         app.get('/coffee/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const query = { _id: new ObjectId(id) };
// //             const result = await database.findOne(query);

// //             res.send(result);
// //             console.log(result);
// //         })
// //         // getting data by id practice 3 p3.

// //         app.get('/coffee/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const query = { _id: new ObjectId(id) };
// //             const result = await database.findOne(query);

// //             res.send(result);

// //         })

// //         // inserting data to the database P1.

// //         app.post('/coffees', async (req, res) => {
// //             const coffee = req.body;
// //             const result = await database.insertOne(coffee);
// //             res.send(result);
// //             console.log(result);
// //         })

// //         // inserting data to the database P2.

// //         app.post('/coffees', async (req, res) => {
// //             const coffee = req.body;
// //             const result = await database.insertOne(coffee);

// //             res.send(result);
// //             console.log(result);
// //         })

// //         // deleting single data from the database by _id P1.

// //         app.delete('/coffees/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const query = { _id: new ObjectId(id) };
// //             const result = await database.deleteOne(query);

// //             res.send(result);
// //         })

// //         // deleting single data from the database by _id P2.

// //         app.delete('/coffee/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const query = { _id: new ObjectId(id) };
// //             const result = await database.deleteOne(query);
// //             res.send(result); 
// //             console.log(result);
// //         })

// //         // updating existing coffee by id P1. (self___trial)
// //         app.put('/coffee/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const specificCoffee = req.body;
// //             const options = { upsert: true };
// //             const query = { _id: new ObjectId(id) };
// //             const requiredCoffee_Updated = {
// //                 $set: {
// //                     name: specificCoffee.name,
// //                     price: specificCoffee.price
// //                 }
// //             }

// //             const result = await database.updateOne(query, requiredCoffee_Updated, options);
// //             res.send(result);
// //             console.log(result);

// //             await client.db("admin").command({ ping: 1 });
// //             console.log("Pinged your deployment. You successfully connected to MongoDB!");
// //         })

// //         // updating existing coffee by id P2.

// //         app.get('/coffee/:id', async (req, res) => {
// //             const id = req.params.id;
// //             const coffee = req.body;

// //             const options = {upsert:true};
// //             const query = {_id : new ObjectId(id)};

// //             const requiredUpdate_coffee = {
// //                 $set:{
// //                     name: coffee.name,
// //                     price:coffee.price
// //                 }
// //             }

// //             const result = await database.updateOne(query , requiredUpdate_coffee , options);

// //             res.send(result);
// //             console.log(result);
// //         })
// //     }


// //     finally {
// //         console.log("nothing is being done here !");
// //     }
// // }
// // run().catch(console.dir);

// // // practice without wifi :) 21th April , 2024 end


// // app.listen(port, (req, res) => {
// //     console.log(`Coffee store server running on port ${port}`);
// // })


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb://localhost:27017/";

// // middleware
// app.use(cors());
// app.use(express.json());



// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {

//         await client.connect();

//         const database = client.db("coffeeData").collection("coffeeCollection");

//         app.get('/users', async (req, res) => {
//             const cursor = database.find();
//             const result = await cursor.toArray(cursor);
//             res.send(result);
//         })
//         app.get('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) };
//             const result = await database.findOne(query);

//             res.send(result);
//         })

//         app.post('/users', async (req, res) => {
//             const user = req.body;
//             console.log('new user added details :', user);
//             const result = await database.insertOne(user);
//             res.send(result);

//             console.log(`new user added . details : ${result}`);
//         })

//         app.put('/users/:id',async(req,res)=>{
//             const id = req.params.id;
//             const user = req.body;
//             const filter = {_id: new ObjectId(id)};
//             const options ={upsert : true};
//             const updateUser = {
//                 $set:{
//                     name:user.name,
//                     email:user.email
//                 }
//             }

//             const result = await database.updateOne(filter , updateUser , options);
//             res.send(result);
//         })

//         app.delete('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) };
//             console.log(`delete button presseed for ${id}`);
//             const result = await database.deleteOne(query);
//             res.send(result);
//         })
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {

//         // await client.close();
//     }
// }
// run().catch(console.dir);


// app.get('/', (req, res) => {
//     res.send("Crud Practice server is running succesfuly !!");
// })

// app.listen(port, (req, res) => {
//     console.log(`CRUD server running on port : ${port}`);
// })

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/";
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const coffeeCollection = client.db('coffeeDB').collection('coffee'); 
        const userCollection = client.db('coffeeDB').collection('users');

        app.get('/coffee', async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        })

        app.post('/coffee', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee);
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        })

        app.put('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)}
            const options = { upsert: true };
            const updatedCoffee = req.body;

            const coffee = {
                $set: {
                    name: updatedCoffee.name, 
                    quantity: updatedCoffee.quantity, 
                    supplier: updatedCoffee.supplier, 
                    taste: updatedCoffee.taste, 
                    category: updatedCoffee.category, 
                    details: updatedCoffee.details, 
                    photo: updatedCoffee.photo
                }
            }

            const result = await coffeeCollection.updateOne(filter, coffee, options);
            res.send(result);
        })

        app.delete('/coffee/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        })


        app.get('/users',async(req,res)=>{
            const cursor = userCollection.find();
            const result = await cursor.toArray(cursor);
            res.send(result);
        })
        app.post('/users' , async(req,res)=>{
            const user = req.body;
            const id = req.params.id;
            const result = await userCollection.insertOne(user);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Coffee making server is running')
})

app.listen(port, () => {
    console.log(`Coffee Server is running on port: ${port}`)
})