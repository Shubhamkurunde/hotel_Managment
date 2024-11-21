import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // const sidebarToggle = document.querySelector('#sidebar-toggle');
  // sidebarToggle.addEventListener("click",function(){
  //   document.querySelector("Sidebar")?.classList.toggle("collapsed")
  // });

  isSidebarCollapsed = false;

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

}
