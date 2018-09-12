const express = require('express');
const router = express.Router();

// this first bit is all taken fromthe firestore docs

const admin = require('firebase-admin');

// hidden the massive json file in process env
const serviceAccount = require(process.env.FIRESTORE_SERVICE_ACCOUNT_KEY_PATH);
// process.env.FIRESTORE_SERVICE_ACCOUNT_KEY_PATH

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const peopleCollection = db.collection('people');


//this should get all the people
router.get('/people',(req, res , next) =>{

  let allPeople = [];

  peopleCollection.get()
    .then(snapshot => {
      //for each document return the data
      snapshot.forEach(doc => {
        allPeople.push({
          'docID': doc.id,
          'peopleData': doc.data()
        });
      });
      //respond with the array created
      //as json
      res.json({
        'statusCode': '200',
        'statusReponse': 'Ok',
        'message': 'All the people',
        'data': allPeople
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});

//this should get a single user by id
router.get('/people/:id', (req, res, next) =>{

  let reqId = req.params.id;

  peopleCollection.doc(reqId).get()
    .then(doc=>{
      if(doc.exists){
        //if the data exists in the database
        res.json({
          'statusCode': '200',
          'statusReponse': 'Ok',
          'message': 'Person found',
          'personData': doc.data()
        });
      }else{
        res.json({
          'statusCode': '404',
          'statusReponse': 'Not found',
          'message': 'Person not found'
        });
      }

    }).catch(err=>{
      console.log(err);

    });
});

module.exports = router;
