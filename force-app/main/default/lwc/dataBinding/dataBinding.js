import { LightningElement,track } from 'lwc';

export default class DataBinding extends LightningElement {
    //local properties cant access outside  
    //data flows from js to html
    name = "deepthi"
    age = 23
    //create an object
    details = {
        tech : "salesforce",
        name : "Lwc"
    }

    //methods and 2 way data binding
    //data flows from html to js 
    title = "aura";
    handleChange(event){
        this.title = event.target.value;
    }

    //track property
    //@track 
    address ={
        city : 'bangalore',
        pin : 560037,
        country : 'india'
    }
    @track userList =["a","b"];
    trackHandler(event){
        //this.address.city = event.target.value
        //use this to avoid track property
        this.address = {...this.address,"city":event.target.value}
        this.userList[0]="dee";
    }
}