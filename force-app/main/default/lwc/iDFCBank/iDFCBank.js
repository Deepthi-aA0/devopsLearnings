import { LightningElement } from 'lwc';
import idfc from '@salesforce/resourceUrl/idfcimg';
import notifyMe from '@salesforce/resourceUrl/Notification';

export default class IDFCBank extends LightningElement {
    idfcimg = idfc;
    notification =notifyMe;
}