import { LightningElement,wire } from 'lwc';
import getAccountWithContact from '@salesforce/apex/wrapperComponenetController.getAccountWithContact';

export default class WrapperComponent extends LightningElement {
    @wire(getAccountWithContact) wrapperList;
}