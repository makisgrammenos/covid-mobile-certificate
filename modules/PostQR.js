import React from 'react';
import 'axios'
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
function KeyCheck(key,check,alternative = ""){
       
    
        if(key in check){
            
            return check[key].value // first_shot_date,second_shot_date
        }
        else{
           
                if(alternative in check){
                   
                    return check[alternative].value; //event_1_date ,event_2_date JJ Vaccine Template
                }
                else{
                    return "Not Found"
                }
            
            
        }
       
    
    
}
async function PostQR(data){
    var broken_link = data.split('/')
    var showLink = `https://dilosi.services.gov.gr/show/${broken_link[broken_link.length-1]}`
    var requestURL = `https://dilosi.services.gov.gr/api/declarations/${broken_link[broken_link.length-1]}/`
   
    var info;
   await  axios.get(requestURL).then(async function(response){
    
        console.log(response.data)
        const {first_name_el,last_name_el,first_name_en,last_name_en} = response.data.extracted_step_info.fields;
        const first_dose = await KeyCheck("first_shot_date",response.data.step_info.fields,"event_1_date");
        const second_dose = await KeyCheck("second_shot_date",response.data.step_info.fields,"event_2_date");
        const vaccine_type = response.data.step_info.fields.vaccine_type.value;
        console.log(first_dose,second_dose)
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