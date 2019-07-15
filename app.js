const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express .static('public'))
const path = require('path');
const router = express.Router();
router.get('/external', function (req, res) {
res.sendFile(path.join(__dirname + '/views/external.html'));
//__dirname : It will resolve to your project folder.
});


router.get('/style1', function (req, res) {
    res.sendFile(path.join(__dirname + '/StyleSheet 1.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/style2', function (req, res) {
    res.sendFile(path.join(__dirname + '/StyleSheet 2.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/style3', function (req, res) {
    res.sendFile(path.join(__dirname + '/StyleSheet 3.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/style4', function (req, res) {
    res.sendFile(path.join(__dirname + '/StyleSheet 4.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/nostyle', function (req, res) {
    res.sendFile(path.join(__dirname + '/noStyleSheet.html'));
    //__dirname : It will resolve to your project folder.
    });            

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))