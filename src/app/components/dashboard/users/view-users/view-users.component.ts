import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  displayedColumns: string[] = ['fullname', 'email', 'grade', 'action'];
  dataSource = new MatTableDataSource();


  constructor(

    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog

  ) { }

  ngOnInit() {

    this.findUsers();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findUsers(){
    this.usersService.findUsers().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }



  public UpdateUser(id: string) {
    this.router.navigate(['../signup'], { queryParams: { id } });
    
  }





  DeleteUser(id: String){
    this.usersService.DeleteUser(id).subscribe(response => {
      this.findUsers();
      console.log(response);
      this.snackBar.open('User has been successfully deleted', null, { duration : 2000});
     
    }, err => {
      this.snackBar.open('User could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }


  openDeleteUser(_id: string) {
    const dialogRef = this.dialog.open(DeleteUserDialogBox);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.DeleteUser(_id);
      }
    });
  }


}


@Component({
  selector: 'deleteuser',
  templateUrl: 'deleteuser.html',
})
export class DeleteUserDialogBox {

  constructor (

  ){}

  public DeleteUser() {}

}


