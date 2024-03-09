import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Modal',
  templateUrl: './Modal.component.html',
  styleUrls: ['./Modal.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ModalComponent {
  @Output() chiudiModale = new EventEmitter<void>();
  @Output() aggiungiCane = new EventEmitter<any>();

  salvaDati() {

    console.log("Salva dati chiamato");

    const nuovaRazza = (document.getElementById('race') as HTMLInputElement).value;
    const nuovaDescrizione = (document.getElementById('text') as HTMLInputElement).value;
    const nuovaImmagine = (document.getElementById('img') as HTMLInputElement).value;

    if (nuovaRazza && nuovaDescrizione && nuovaImmagine) {
      const nuovoCane = {
        razza: nuovaRazza,
        descrizione: nuovaDescrizione,
        immagine: nuovaImmagine
      };

      this.aggiungiCane.emit(nuovoCane);
      this.chiudiModale.emit();
    } else {
      alert("Per favore, compila tutti i campi del form.");
    }
  }
}