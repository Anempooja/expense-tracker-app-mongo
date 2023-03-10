
const express = require('express');
const dotenv=require('dotenv')

const bodyParser = require('body-parser');
//const helmet=require('helmet')

//const accessLogStream=fs.createWriteStream(path.join(__dirname,'accessLog'),{flags:'a'})
//const morgan=require('morgan')
const mongoose=require('mongoose')
var cors = require('cors')
// const Expense=require('./ExpenseAppModels/expense')
// const User=require('./ExpenseAppModels/user')
// const Order=require('./ExpenseAppModels/orders')
// const forgotPasswordRequests=require('./ExpenseAppModels/forgotPasswordRequests')


 const userRoutes=require('./ExpenseAppRoutes/signUp')
const expenseRoutes=require('./ExpenseAppRoutes/addexpense')
const purchaseRoutes=require('./ExpenseAppRoutes/purchase')
const forgotPasswordRoutes=require('./ExpenseAppRoutes/forgotPassword')




// User.hasMany(Expense)
// Expense.belongsTo(User)

// User.hasMany(Order)
// Order.belongsTo(User)

// User.hasMany(forgotPasswordRequests)
// forgotPasswordRequests.belongsTo(User)

const app = express();
dotenv.config()
//app.use(helmet())
//app.use(morgan('combined',{stream:accessLogStream}))
app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use('/user',userRoutes)
app.use('/expense',expenseRoutes)
app.use('/purchase',purchaseRoutes)
app.use('/forgotPassword',forgotPasswordRoutes)

mongoose.connect('mongodb://localhost:27017/expensetracker')
.then(result=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})

// .then(()=>{
//     app.listen(3000)
// })
// .catch(err=>console.log(err));