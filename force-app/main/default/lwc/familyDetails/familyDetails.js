import { LightningElement } from 'lwc';

export default class FamilyDetails extends LightningElement {
    handleNameChange(event){
        this.template.querySelector('c-child-details').nameToShow(event.target.value);
    }
    handleAgeChange(event){
        this.template.querySelector('c-child-details').ageToShow(event.target.value);
    }
}