import { User } from './../../model/user.model';
import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shared: SharedService;

  constructor() { 
    this.shared = SharedService.getInstance();
    this.shared.user = new User('', '', '', '');
  }

  ngOnInit(): void {
  }

  signOut(): void {
    this.shared.token = null;
    this.shared.user = null;
    window.location.href = '/login';
    window.location.reload();
  }

}
