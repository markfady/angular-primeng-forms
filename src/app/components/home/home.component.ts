import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

import { Sidebar } from 'primeng/sidebar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  sidebarVisible: boolean = true; // Keep the sidebar open by default
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  isReportsOpen: boolean = false;
  toggleReports() {
    this.isReportsOpen = !this.isReportsOpen;
  }

  closeCallback(event: Event) {
    this.sidebarVisible = false;
  }

constructor(private route:Router){}
  logout(){
    sessionStorage.clear()
    this.route.navigate(['/login'])
  }
}
