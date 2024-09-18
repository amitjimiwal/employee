import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roles: IRole[] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((response: any) => {
      this.roles = this.assignColors(response.data);
    });
  }
  assignColors(roles: IRole[]): IRole[] {
    const colors = [
      'bg-purple-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500'
    ];

    return roles.map((role, index) => ({
      ...role,
      color: role.color || colors[index % colors.length]
    }));




    //data types 
    //explicitly defining the data types
    // firstName: string = "Angular";

    //implicitly typescript picks up the data type
    // angularVersion = 18;

    // versionString: string = "Version 18";

    // currantDate: Date = new Date();
    // inputType: string = "checkbox";
    // selectedState: string = "";

    // showWelcomeMessage():void{
    //   alert("Welcome to Angular 18");
    // }

    // showWelcomeMessageWithParameter(message: string):void{
    //   alert(message);
    // }
  }
}
