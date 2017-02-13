import {Component} from '@angular/core'
import {Contact} from './contact'

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})
export class ContactForm{
    
    model = new Contact('Juan', 'Perez', '2332-3445');

    active = true;
    submitted = false;

    onSubmit(){
        this.submitted = true;
    }

    newModel(){
        this.model = new Contact('', '', '');
        this.active = false;
        this.submitted = false;
        setTimeout(()=> this.active = true, 0);
    }

    back(){
        this.submitted = false;
    }

    get diagnostic(){
        return JSON.stringify(this.model);
    }
}