import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../model/interface/designation';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designations: IDesignation[] = [];
  http = inject(HttpClient);
  masterService = inject(MasterService);

  isLoading: boolean = true;

  ngOnInit(): void {
    this.getAllDesignations();
  }
  getAllDesignations(): void {
    this.masterService.getDesignations().subscribe((response: any) => {
      this.isLoading = false;
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
