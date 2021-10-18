import React from 'react';
import 'axios'
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
 async function PostQR(data){
    var broken_link = data.split('/')
    var showLink = `https://dilosi.services.gov.gr/show/${broken_link[broken_link.length-1]}`
    var requestURL = `https://dilosi.services.gov.gr/api/declarations/${broken_link[broken_link.length-1]}/`
   
    var info;
   await  axios.get(requestURL).then(function(response){
    
        // console.log(response.data.step_info.fields.event_1_date.value,response.data.step_info.fields.vaccine_type.value)
        const {first_name_el,last_name_el,first_name_en,last_name_en} = response.data.extracted_step_info.fields;
        const first_dose = response.data.step_info.fields.event_1_date.value;
        const second_dose = response.data.step_info.fields.event_2_date.value;
        const vaccine_type = response.data.step_info.fields.vaccine_type.value;
      
        return {
            'first_name_el':first_name_el.value,
            'last_name_el':last_name_el.value,
            'first_name_en':first_name_en.value,
            'last_name_en':last_name_en.value,
            'first_dose':first_dose,
            'second_dose':second_dose,
            'vaccine_type':vaccine_type

        
        }
        
    }).then(data=> {
       
        info = data}).catch(err=>{
        alert(err)
    })
    
   
    return {'data':info,'qr':showLink}
}

export default PostQR;