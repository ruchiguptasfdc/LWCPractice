import { LightningElement } from 'lwc';

export default class C2pChildModel extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            detail: {
                msg:"Close Model Succesfully"}
        })
        this.dispatchEvent(myEvent) 
    }
}