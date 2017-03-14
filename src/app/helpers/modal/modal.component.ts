import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalContent: string = '';  
  @Input() showModal: boolean = true; 
  @Input() title: string = '';
 
  hasClose: boolean = false;
  hasSave: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
