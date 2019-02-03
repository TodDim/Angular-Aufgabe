import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Persons} from '../data';
declare var $;
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption:any;
  persons : any[]=Persons;
  @Input() person:Object;
  @Output() data=new EventEmitter<any>();
  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit(){
    this.dtOption={
      "paging": false,
      "ordering": true,
      "searching": false,
      "info": false,
      "processing": false,
        "serverSide": false
    };
    this.dataTable=$(this.table.nativeElement);
    this.dataTable.dataTable(this.dtOption);
     
           
     }
     refreshParent(selected){
      this.data.emit(selected)
      this.modalService.dismissAll();
     }
}
