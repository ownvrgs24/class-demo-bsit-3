import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly dataService = inject(DataService);
  private readonly userData = JSON.parse(window.sessionStorage.getItem('user') || '{}');

  tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    const { user_id } = this.userData;
    this.dataService.getRequest('task/' + user_id).subscribe({
      next: (data: any | Task[]) => {
        this.tasks = data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  addTask() {
    const task = window.prompt('Enter task');
    if (task) {
      const { user_id } = this.userData;
      this.dataService.postRequest('task', { user_id, title: task }).subscribe({
        next: (data) => {
          console.log(data);
          this.tasks.push({
            id: this.tasks.length + 1,
            title: task
          });
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          alert('Task added successfully');
        }
      })


    }
  }

  deleteTask(index: number) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      this.dataService.deleteRequest('task/' + this.tasks[index].id).subscribe({
        next: () => {
          this.getTasks();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          alert('Task deleted successfully');
        }
      });

      this.tasks.splice(index, 1);
    }
  }

  editTask(index: number) {
    const task = window.prompt('Edit task', this.tasks[index].title);

    if (task) {
      this.dataService.putRequest('task/' + this.tasks[index].id, { title: task }).subscribe({
        next: () => {
          this.tasks[index].title = task;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          alert('Task edited successfully');
        }
      });

    }
  }

  logout() {
    if (window.confirm('Are you sure you want to logout?')) {
      this.router.navigate(['/login']);
      window.sessionStorage.removeItem('user');
    }
  }

  get userFullName() {
    const { first_name, middle_name, last_name, suffix } = this.userData;
    return `${first_name} ${middle_name || ''} ${last_name} ${suffix || ''}`;
  }

}
