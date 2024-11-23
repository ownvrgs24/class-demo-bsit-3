import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface Task {
  recno: number;
  task_name: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {


  private readonly dataService = inject(DataService);
  private readonly router = inject(Router);

  tasks: Task[] = [];

  userData = JSON.parse(window.sessionStorage.getItem('user') || '{}');

  ngOnInit(): void {
    this.getUserTask();
  }

  getUserTask() {
    this.dataService.getMethod(`tasks/${this.userData.account_id}`).subscribe({
      next: (response: any) => {
        this.tasks = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addTask() {
    const task = prompt('Enter task');

    if (task) {
      this.dataService.postMethod('tasks', { task_name: task, account_id: this.userData.account_id })
        .subscribe({
          next: (response: any) => {
            this.tasks.push({
              recno: response.recno,
              task_name: response.task_name
            });
          },
          error: (error) => {
            window.alert(error.error.message);
          }
        });
    }
  }


  deleteTask(index: number) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      this.dataService.deleteMethod(`tasks/${this.tasks[index].recno}`).subscribe({
        next: () => {
          this.tasks.splice(index, 1);
          this.getUserTask();
        },
        error: (error) => {
          window.alert(error.error.message);
        }
      });
    }
  }

  editTask(index: number) {
    const task_name = prompt('Enter new task name', this.tasks[index].task_name);
    if (task_name) {
      this.dataService.putMethod('tasks', { id: this.tasks[index].recno, task_name }).subscribe({
        next: () => {
          this.tasks[index].task_name = task_name;
        },
        error: (error) => {
          window.alert(error.error.message);
        }
      });
    }
  }

  logout() {

    if (window.confirm('Are you sure you want to logout?')) {
      window.sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
    }

  }

  get userFullname() {
    return `${this.userData.first_name} ${this.userData.middle_name || ''} ${this.userData.last_name} ${this.userData.suffix || ''}`;
  }

}
