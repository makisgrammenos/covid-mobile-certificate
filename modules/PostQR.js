import React from 'react';
import 'axios'
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
 async function PostQR(data){
    var broken_link = data.split('/')
    var showLink = `https://dilosi.services.gov.gr/show/${broken_link[broken_link.length-1]}/`
    var requestURL = `https://dilosi.services.gov.gr/api/declarations/${broken_link[broken_link.length-1]}/`
   
    var info;
   await  axios.get(requestURL).then(function(response){
        const {first_name_el,last_name_el,first_name_en,last_name_en} = response.data.extracted_step_info.fields;
        return {'first_name_el':first_name_el.value,'last_name_el':last_name_el.value,'first_name_en':first_name_en.value,'last_name_en':last_name_en.value}
        
    }).then(data=> info = data).catch(err=>{
        alert(err)
    })
    
    return {'data':info,'qr':showLink}
}

export default PostQR;