import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../menu-item.service';
import { Hotel } from '../Models/hotel.model';
import { HotelService } from '../Services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  HotelList: Hotel[]=[];

  constructor(private menuItemService: MenuItemService,private service:HotelService, private router: Router) { }

  ngOnInit() {
    this.service.Getitems().subscribe((data:Hotel[])=>{
      this.HotelList = data; 
    });
  }


  // getMenuItems() {
  //   this.menuItemService.Getitems().subscribe(data => {
  //     this.menuItems = data;
  //   });
  // }
}
