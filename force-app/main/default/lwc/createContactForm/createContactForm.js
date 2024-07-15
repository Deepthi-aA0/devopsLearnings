import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import contact from '@salesforce/schema/Contact';
import fName from '@salesforce/schema/Contact.FirstName';
import lName from '@salesforce/schema/Contact.LastName';
import email from '@salesforce/schema/Contact.Email';
import deptt from '@salesforce/schema/Contact.Department';
import birthdate from '@salesforce/schema/Contact.Birthdate';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateContactForm extends LightningElement {
    firstName;
    lastName;
    email;
    dept;
    bday;
    handleChange(event){
        if(event.target.label=="First Name"){
            this.firstName=event.target.value;
        }
        if(event.target.label=="Last Name"){
            this.lastName=event.target.value;
        }
        if(event.target.label=="Email"){
            this.email=event.target.value;
        }
        if(event.target.label=="Department"){
            this.dept=event.target.value;
        }
    }
    handleClick(){
        const fields={};
        fields[fName.fieldApiName]=this.firstName;
        fields[lName.fieldApiName]=this.lastName;
        fields[email.fieldApiName]=this.email;
        fields[deptt.fieldApiName]=this.dept;
        fields[birthdate.fieldApiName]=this.bday;

        const recordInput={apiName:contact.objectApiName,fields};
        createRecord(recordInput)
        .then(contactObj=>{
            this.contactId=contactObj.Id;
            this.dispatchEvent(
                new showToastEvent({
                    title:"Success",
                    message:"Record created successfully",
                    variant:"Success",
                }),
            );
        })

        .catch(error=>{
            this.dispatchEvent(
                new showToastEvent({
                    title:"Error",
                    message:"error.body.message",
                    variant:"Error",
                }),
            );
        });
    }
}