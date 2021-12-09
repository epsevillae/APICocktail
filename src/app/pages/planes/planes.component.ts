import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  planes:any;

  constructor(
    private _planes:PlanesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getPlanes();
  }

  getPlanes(){
    this._planes.getPlanes().subscribe((res:any)=>{
      console.log(res);
      
    })
  }
 
}
