import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
=======
>>>>>>> 7d1e803c11d45452ad0a3cb301572748647b6faf

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
<<<<<<< HEAD
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  User_ = {
    Name: 'John Doe',
    Email: 'johndoe@example.com'
  };

  constructor(private _ser: SerCategoryService, private _router: ActivatedRoute, private modalService: NgbModal) { }
=======
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private _ser: SerCategoryService, private _router: ActivatedRoute) { }
>>>>>>> 7d1e803c11d45452ad0a3cb301572748647b6faf

  ngOnInit() {
    this.ID = this._router.snapshot.paramMap.get("id");
    this.getUsers();
  }

  User: any;
  ID: any;

  getUsers() {
    this._ser.getAllUser().subscribe(data => {
      this.User = data.find((d: any) => d.id == this.ID);
      console.log('User Name : ' + this.User.Name);
    });
  }

<<<<<<< HEAD
  openEditProfileModal(editProfileModal: any) {
    const modalRef = this.modalService.open(editProfileModal);
  }

  saveChanges(modal: any) {
    console.log('User Data:', this.User);
    modal.close();
  }
=======

>>>>>>> 7d1e803c11d45452ad0a3cb301572748647b6faf
}
