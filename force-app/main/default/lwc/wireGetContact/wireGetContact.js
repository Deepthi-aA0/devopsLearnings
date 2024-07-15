import { LightningElement,api,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
// import { getRecords } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Contact.Name';
import EMAIL from '@salesforce/schema/Contact.Email';

export default class WireGetContact extends LightningElement {
    @api recordId;
    data;
    // outputs;
    error;
    @wire(getRecord,{recordId:'$recordId',fields:[NAME,EMAIL]}) // for single record
    //@wire(getRecords,{records:[{recordIds:["0035g000007PGW8AAO","0035g000007PGW8AAO"],fields:[NAME]},{recordId:["0035g000007PGW8AAO"],fields:[EMAIL]}]}) //for multiple records
    wiredContact({data,error}){
        if(data){
            console.log("data",data);
            // this.outputs=data; //for multiple records
            this.data=data;
            this.error=undefined;
        }else if (error){
            console.log("error",error);
            this.error=error;
            this.data=undefined;
        }
    }
    get name(){
        return getFieldValue(this.data,NAME);
    }
    get email(){
        let result='not yet loaded';
        if(this.data && this.data.fields){
            result=this.data.fields.Email.value;
        }
        return result;
    }

}