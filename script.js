const express = require ('express');
const app = express()
const  bcrypt = require("bcrypt");
const saltRounds = 10;
const cors = require ('cors');
const knex = require('knex')

const signin = require ('./controller/signin');
const register = require ('./controller/register');
const profile = require ('./controller/profile');
const image = require ('./controller/image')

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'Kimchipie1.',
		database: 'smartbrain'
	}
});

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res) => {res.send (database.users)})
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfile (db))
app.put('/image', image.handleImage(db))
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})


app.listen(3001, ()=> {
	console.log('app is running')
})