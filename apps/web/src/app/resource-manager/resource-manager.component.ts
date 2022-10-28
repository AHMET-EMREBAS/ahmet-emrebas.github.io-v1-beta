import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.scss'],
})
export class ResourceManagerComponent implements OnInit {
  projects = this.getProjects();
  menu1: MenuItem[] = [{ label: 'New project', icon: 'pi pi-plus' }];

  projectForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  entityForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  createProject() {
    const p = this.projectForm.value;
    if (this.projects.has(this.projectForm.value)) {
      alert(`Project ${p.name} allready exists!`);
    }
    this.projects.add(p);
    this.setProjects();
  }

  getProjects() {
    return new Set(
      JSON.parse(localStorage.getItem('__projects') || '[]') || []
    );
  }

  listOfProjects() {
    return [...this.projects];
  }

  setProjects() {
    localStorage.setItem('__projects', JSON.stringify([...this.projects]));
  }
}
