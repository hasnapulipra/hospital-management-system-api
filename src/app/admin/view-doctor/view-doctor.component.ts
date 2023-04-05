import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
  doctorlist : any
  constructor(private api : ApiService ,private router:Router) {}
  ngOnInit(){
   this.displayDoctors() 
  }
  displayDoctors(){
    this.api.getdoctors().subscribe(res=>{
      console.log(res)
      this.doctorlist=res
    })
  }
  // dataset = [
  //   {doctorName: "Dr. Ananya",specialization: "ENT",desc: "Dr. Ananya is an ENT Specialist with 10 years of experience.",image:"/assets/images/doctor-profile.jpg",schedule:"Mon:2:30PM-4:00PM,Wed:12:00PM-3:00PM"},
  //   {doctorName: "Dr. Mohit",specialization: "General Medicine",desc: "Dr. Mohit is a GM Specialist with 20 years of experience.",image:"/assets/images/mohit.jpg",schedule:"Tues:2:30PM-4:00PM,Fri:12:00PM-3:00PM"},
  //   {doctorName: "Dr. Raju",specialization: "Pediatrician",desc: "Dr. Raju is a Pediatrician with 12 years of experience.",image:"/assets/images/Raju.jpg",schedule:"Wed:10:30PM-3:00PM,Sat:12:00PM-3:00PM"},
  //   {doctorName: "Dr. Abid",specialization: "Cardiologist",desc: "Dr. Abid is a Cardiologist with 15 years of experience.",image:"/assets/images/abid.jpg",schedule:"Thurs:2:30PM-4:00PM,Fri:12:00PM-3:00PM"},
  //   {doctorName: "Dr. Kavitha",specialization: "Psychiatrist",desc: "Dr. Kavitha is a Psychiatrist with 8 years of experience.",image:"/assets/images/kavitha.jpg",schedule:"Mon:2:30PM-4:00PM,Fri:10:00PM-2:00PM"},
    
  // ]

  // searchText: string = '';
  // onSearchTextEntered(searchValue: string){
  //   this.searchText = searchValue;
  //   console.log(this.searchText);
  // }
    
  }
  




