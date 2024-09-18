import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../model/interface/designation';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
  designations: IDesignation[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllDesignations();
  }
  getAllDesignations(): void {
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation').subscribe((response: any) => {
      this.designations = this.assignColors(response.data);
    });
  }

  assignColors(roles: IDesignation[]): IDesignation[] {
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
  }
}
