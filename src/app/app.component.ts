import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  person={Name: "Muller",
  Vorname: "Max",
  "E-mail":"m@gmail.com",
  Telefon: "+ 31 11 123"};
  
  constructor(private modalService: NgbModal) {}
  open() {
    
    const modalRef = this.modalService.open(ChildComponent, { size: 'lg', backdrop: 'static' });

    modalRef.componentInstance.data.subscribe((receivedEntry) => {
      this.person=receivedEntry
      })
}

}
