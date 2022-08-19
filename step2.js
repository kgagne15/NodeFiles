const fs = require('fs');
const process = require('process');
const axios = require('axios');


function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log('ERROR: ', err)
            process.kill(1)
        } else {
            console.log("DATA: ", data)
        }
    })
}



async function webCat(url) {
    let res = await axios.get(url)
    console.log(res.data)
}



let path = process.argv[2];
if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
