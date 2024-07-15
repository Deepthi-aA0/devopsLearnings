import { LightningElement,track,api,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createContacts from '@salesforce/apex/addContactController.createContacts';

export default class AddContactsToAccount extends LightningElement {

    @track contacts = [{ key: 0 , rowId: this.generateRandomId() }];

    // Function to generate a random ID
    generateRandomId() {
        // Generate a random number
        const randomNumber = Math.random().toString(36).substring(2, 15);
        // Combine with a prefix to ensure uniqueness
        return 'row_' + randomNumber;
    }

    @api recordId;
    @track showTable = false;
    @track contactDetail={
        accId :'' ,
        lastName : '',
        email :'',
        phone : '',
        rowId : '0035g00001Bv2XRAAZ',
    }

    handleClick(){
        this.showTable=true;
    }
    handleCloseUpload(){
        this.showTable=false;
    }

    connectedCallback(){
        console.log('inside connnected '+JSON.stringify(this.contactDetail) +' contact list :'+JSON.stringify(this.contacts)+'record Id ;'+this.recordId);
        this.contactDetail.accId=this.recordId;
        console.log('chanhged acc id'+JSON.stringify(this.contactDetail));
        }
    handleChange(event){
        const fieldName = event.target.fieldName;
        //const rowId = fieldId.split('-')[1];
        if(fieldName == "LastName" ){
            this.contactDetail.lastName = event.target.value;
            console.log('id '+this.rowId);
            console.log('lastName '+this.contactDetail.lastName);
            console.log('last name list ',JSON.stringify(this.contactDetail));
        }
        if(fieldName == "Email" ){
            this.contactDetail.email = event.target.value;
            console.log('email '+this.contactDetail.email);
        }
        if(fieldName == "Phone" ){
            this.contactDetail.phone = event.target.value;
            console.log('phone '+this.contactDetail.phone);
        }
    }
    @track stringContactDetail;

    handleSave() {
        console.log('called handle save');
        console.log('this.contactDetail',this.contactDetail);
        console.log('this.contactDetail',JSON.stringify(this.contactDetail));

        createContacts({ contactdetail :this.contactDetail })
            .then(result => {
                console.log('result '+result);
                this.showToastMessage('Success', 'Record created successfully', 'success');
            })
            .catch(error => {
                console.log('error',error.message,JSON.stringify(error));
                this.showToastMessage('Error', 'Record is not created', 'error');
            });
    }
    
    addRow() {
        const newRow = { key: this.contacts.length, rowId: this.generateRandomId()};
        this.contacts.push(newRow);
        console.log('newRow '+newRow);
    }

    deleteRow(event) {
        const index = event.currentTarget.dataset.index;
        this.contacts.splice(index, 1);
    }

    handleCancel(){
        this.showTable=false;
        // Reset account name and contacts array
        this.accountName = '';
        this.contacts = [{ key: 0 }];
    }

    handleSuccess(event) {
        console.log('Contact created with Id: ', event.detail.id);
    }

    showToastMessage(title, message, varient) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: varient
        });
        this.dispatchEvent(evt);
    }
    
}