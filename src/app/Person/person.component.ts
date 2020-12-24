import { Component } from '@angular/core';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html'
})
export class PersonComponent {
    title: string = 'PersonComponent Title';

    people: any = [
        {
            firstName: 'Mike',
            lastName: 'Livingston'
        },
        {
            firstName: 'John',
            lastName: 'Livingston'
        }       
    ]
}