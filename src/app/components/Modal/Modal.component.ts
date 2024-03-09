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
    const inputImmagine = document.getElementById('img') as HTMLInputElement;

    if (nuovaRazza && nuovaDescrizione && inputImmagine && inputImmagine.files && inputImmagine.files.length > 0) {
      const nuovaImmagine = inputImmagine.files[0];

      const nuovoCane = {
        razza: nuovaRazza,
        descrizione: nuovaDescrizione,
        immagine: nuovaImmagine
      };

      this.aggiungiCane.emit(nuovoCane);
      this.chiudiModale.emit();
    } else {
      alert("Per favore, compila tutti i campi del form e carica un'immagine.");
    }
  }
}
