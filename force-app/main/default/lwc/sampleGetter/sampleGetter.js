import { LightningElement } from 'lwc';

export default class SampleGetter extends LightningElement {
    users = ["a","b"];
    get firstUser(){
        return this.users[0]="dee".toUpperCase();
    }
    num1=10
    num2=5
    get sumofNumber(){
        return this.num1 + this.num2
    }
}