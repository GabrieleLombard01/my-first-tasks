import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Modal',
  templateUrl: './Modal.component.html',
  styleUrls: ['./Modal.component.css'],
  standalone: true
})
export class ModalComponent implements OnInit {
  
  @Output() chiudiModale = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
