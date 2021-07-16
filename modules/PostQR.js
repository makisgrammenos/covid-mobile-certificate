import React from 'react';
import 'axios'
import axios from 'axios';
function PostQR(data){
    var broken_link = data.split('/')

    var requestURL = `https://dilosi.services.gov.gr/api/declarations/${broken_link[broken_link.length-1]}/`
    console.log(requestURL)
    
    axios.get(requestURL).then(response =>{
        console.log(response)
    }).catch(err=>{
        console.log(err)
    })
}

export default PostQR;