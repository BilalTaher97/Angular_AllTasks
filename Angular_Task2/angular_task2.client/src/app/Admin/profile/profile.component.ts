import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  User_ = {
    Name: 'John Doe',
    Email: 'johndoe@example.com'
  };

  constructor(private _ser: SerCategoryService, private _router: ActivatedRoute, private modalService: NgbModal) { }

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

  openEditProfileModal(editProfileModal: any) {
    const modalRef = this.modalService.open(editProfileModal);
  }

  saveChanges(modal: any) {
    console.log('User Data:', this.User);
    modal.close();
  }
}
