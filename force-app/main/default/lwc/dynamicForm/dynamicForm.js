import { LightningElement,track } from 'lwc';

export default class DynamicForm extends LightningElement {
    greet='';
    handleChange(event){
        this.greet = event.target.value;
    }

}