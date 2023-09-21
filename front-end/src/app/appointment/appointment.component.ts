import { Component } from '@angular/core';
import * as $ from 'jquery';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarService } from '../calendar.service';
interface DepartmentDoctors {
  [key: string]: string[];
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent {
  constructor(public calendar : CalendarService){}
  private currentStep : number = 0;
  doctorsByDepartment: DepartmentDoctors = {
    "1": ["Dr. Smith (ED)", "Dr. Jane (ED)"],
    "2": ["Dr. Alice (Pediatrics)", "Dr. Bob (Pediatrics)"],
    "3": ["Dr. Tran (Cardiologics)", "Dr. Nam (Cardiologics)"],
    "4": ["Dr. Thuan (Orthopedics)", "Dr. Hai (Orthopedics)"],
    "5": ["Dr. Hue (OB/GYN)", "Dr. Nguyen (OB/GYN)"],
    "6": ["Dr. John (Neurologics)", "Dr. Wick (Neurologics)"],
    "7": ["Dr. Hung (Oncologic)", "Dr. Cao (Oncologic)"],
    "8": ["Dr. Huyen (GM)", "Dr. Quyen (GM)"],
  };
  ngOnInit(){
    $("#selectedDepartmentId").change(() => {
      let departmentId = $("#selectedDepartmentId").val() as string; // Get the selected department ID
      let doctors = this.doctorsByDepartment[departmentId] || []; // Fetch doctors or default to empty array
      
      let doctorsDropdown = $("#selectedDoctorId");
      doctorsDropdown.empty(); // Clear previous options

      for(let doctor of doctors) {
          doctorsDropdown.append(new Option(doctor, doctor)); // Append each doctor as an option
      }
  });
  }
  setCurrentStep(newStep : number)
  {
    this.currentStep = newStep;
  }
}

