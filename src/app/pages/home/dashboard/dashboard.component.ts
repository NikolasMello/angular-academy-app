import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent implements OnInit {


  constructor(
    private router: Router
  ){
    console.log(this.router.url)
    console.log('1')
  }

  ngOnInit(): void {
      
  }

}
