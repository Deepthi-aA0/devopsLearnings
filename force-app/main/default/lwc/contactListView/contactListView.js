import { LightningElement,api,wire } from 'lwc';
import getContacts from "@salesforce/apex/contactController.getContacts";
import { refreshApex } from "@salesforce/apex";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import updateContacts from "@salesforce/apex/contactController.updateContacts";
import { RefreshEvent } from 'lightning/refresh';

const COLS = [
  { label: "First Name", fieldName: "FirstName", editable: true },
  { label: "Last Name", fieldName: "LastName", editable: true },
  { label: "Title", fieldName: "Title" },
  { label: "Phone", fieldName: "Phone", type: "phone" },
  { label: "Email", fieldName: "Email", type: "email" }
];

export default class ContactListView extends LightningElement {
    @api recordId;
  columns = COLS;
  draftValues = [];

  @wire(getContacts, { accId: "$recordId" })
  contact;

  async handleSave(event) {
    const updatedFields = event.detail.draftValues;
    try {
      // Pass edited fields to the updateContacts Apex controller
      const result = await updateContacts({ data: updatedFields });
      this.dispatchEvent(
        new ShowToastEvent({
          title: "Success",
          message: "Contact updated",
          variant: "success"
        })
      );
        
      //Trigger RefreshView APIs
        this.dispatchEvent(new RefreshEvent());  
      // Display fresh data in the datatable
      refreshApex(this.contact).then(() => {
        // Clear all draft values in the datatable
        this.draftValues = [];
      });
    } catch (error) {
      console.log("###Error : " + JSON.stringify(error));
    }
  }
}