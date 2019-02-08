import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $;
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any;
  @Input() person: Object;
  @Output() data = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit() {
    // this.dtOption = {
    //   "paging": false,
    //   "ordering": true,
    //   "searching": false,
    //   "info": false,
    //   "processing": false,
    //   "serverSide": false
    // };
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.dataTable(this.dtOption);



    var dataSet = [
      ["Muller", "Max", "m@gmail.com", "+ 31 11 123"],
      ["Linder", "Daniel", "d@gmail.com", "+ 31 11 123"],
      ["Muller", "Radolf", "ra@gmail.com", "+ 31 11 123"],
      ["Muller", "Muster", "mu@gmail.com", "+ 31 11 123"]
    ]

    let that = this

    $(document).ready(function () {
      let table = $('#dataTable').DataTable({
        data: dataSet,
        "searching": false,
        "ordering": true,
        "info": false,
        "paging": false,
        columns: [
          { title: "Name" },
          { title: "Vorname" },
          { title: "E-mail" },
          { title: "Telefon." }
        ],

      });
      $('#dataTable tbody').on('dblclick', 'tr', function () {
       let p = table.row(this).data()
        that.data.emit(p)
        that.modalService.dismissAll();
      });

    });

  }
  // refreshParent(selected) {
  //   this.data.emit(selected)
  //   this.modalService.dismissAll();
  // }

  closeModal() {
    this.modalService.dismissAll();
  }
}
