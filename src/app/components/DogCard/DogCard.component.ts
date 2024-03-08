import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-DogCard',
  templateUrl: './DogCard.component.html',
  styleUrls: ['./DogCard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DogCardComponent implements OnInit {

@Input() data: any;

constructor() { }

ngOnInit(): void {
  console.log(this.data)
}

}
