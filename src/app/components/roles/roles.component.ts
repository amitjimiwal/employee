import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  //data types 

  //explicitly defining the data types
  firstName: string = "Angular";

  //implicitly typescript picks up the data type
  angularVersion = 18;

  versionString: string = "Version 18";

  currantDate: Date = new Date();
  inputType: string = "checkbox";
  selectedState: string = "";

  showWelcomeMessage():void{
    alert("Welcome to Angular 18");
  }

  showWelcomeMessageWithParameter(message: string):void{
    alert(message);
  }
}
