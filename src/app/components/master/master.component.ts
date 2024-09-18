import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
type SelectionTabs = 'ROLES' | 'DESIGNATIONS' | 'EMPLOYEES';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent,DesignationComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentSelection: SelectionTabs = 'ROLES';

  toggleSelection(selection: SelectionTabs): void {
    this.currentSelection = selection;
  }
}
