const express = require('express');
const router = express.Router();

// this first bit is all taken fromthe firestore docs

const admin = require('firebase-admin');

//Firestore is asking me to add the following but not working
// const firestore = new Firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings)

// hidden the massive json file in process env
const serviceAccount = require('../tryingtohide');
// process.env.FIRESTORE_SERVICE_ACCOUNT_KEY_PATH

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.settings({ timestampsInSnapshots: true });

const peopleCollection = db.collection('people');


//this should get all the people
router.get('/people',(req, res , next) =>{

 const allPeople = [];

  peopleCollection.get()
    .then(snapshot => {
      //for each document return the data
      snapshot.forEach(doc => {
        allPeople.push({
          'docID': doc.id,
          'personData': doc.data()
        });
      });
      // respond with the array created
      // as json
      res.json(
        allPeople
      );
    })
    .catch(next);
});

//this should get a single user by id
router.get('/people/:id', (req, res, next) =>{

  peopleCollection.doc(req.params.id).get()
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

    })
    .catch(next);
});

module.exports = router;
