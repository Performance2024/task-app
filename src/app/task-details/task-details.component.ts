import { Component, Input } from '@angular/core';
import { TaskService } from '../api/task.service';
import { Task } from '../model/task';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { saxAddOutline } from '@ng-icons/iconsax/outline';
import { saxTickCircleBold } from '@ng-icons/iconsax/bold';
import { saxFolderOpenOutline } from '@ng-icons/iconsax/outline';
import { CommonModule } from '@angular/common';
import { saxProfile2userOutline } from '@ng-icons/iconsax/outline';
import { saxClockOutline } from '@ng-icons/iconsax/outline';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { pipe, catchError, Observable, Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [NgIconComponent, CommonModule, ReactiveFormsModule],
  providers: [TaskService],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
  viewProviders: [
    provideIcons({
      saxAddOutline,
      saxTickCircleBold,
      saxFolderOpenOutline,
      saxProfile2userOutline,
      saxClockOutline,
    }),
  ],
})
export class TaskDetailsComponent {
  task: Task = {
    id: 0,
    image: '',
    title: '',
    description: '',
    domain: '',
    nombre_heures: 0,
    progression: 0,
    participants: [],
    essence_of_assessment: [],
  };

  studentForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    photo: new FormControl(''),
  });

  studentFormData = new FormData();

  constructor(
    private taskService: TaskService,
    private toastr: ToastrService
  ) {}

  @Input()
  set id(taskId: number) {
    this.taskService.getATask(`/api/task/${taskId}`).subscribe((data: Task) => {
      this.task = data;
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.studentFormData.append('photo', file);
    }
  }

  createNewStudent() {
    this.studentFormData.append(
      'firstname',
      this.studentForm.value.firstname ?? ''
    );
    this.studentFormData.append(
      'lastname',
      this.studentForm.value.lastname ?? ''
    );

    this.taskService
      .createStudent('/api/create_student', this.studentFormData)
      .pipe(
        catchError((error) => {
          console.log(error);
          return error;
        })
      )
      .subscribe((response: any) => {
        if (response.status === 200) {
          this.toastr.success('Etudiant ajouter avec success');
          this.studentForm.reset();
        }
      });
  }
}
