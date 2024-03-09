import { Component, OnInit } from '@angular/core';
import { DogCardComponent } from '../DogCard/DogCard.component';
import { ModalComponent } from '../Modal/Modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Gallery',
  templateUrl: './Gallery.component.html',
  styleUrls: ['./Gallery.component.css'],
  standalone: true,
  imports: [DogCardComponent, ModalComponent, CommonModule, FormsModule]
})
export class GalleryComponent implements OnInit {

    // DATA:
  dogs = [
    {
        "id": 1,
        "razza": "Labrador Retriever",
        "immagine": "../../../assets/images/dogs/img1.jpg",
        "descrizione": "Il Labrador Retriever è noto per la sua intelligenza, amabilità e versatilità. È un eccellente cane da compagnia e un ottimo lavoratore nei campi come cane da riporto."
    },
    {
        "id": 2,
        "razza": "Pastore Tedesco",
        "immagine": "../../../assets/images/dogs/img2.jpg",
        "descrizione": "Il Pastore Tedesco è un cane coraggioso, intelligente e devoto. È spesso impiegato come cane da lavoro, da guardia e come compagno fedele."
    },
    {
        "id": 3,
        "razza": "Beagle",
        "immagine": "../../../assets/images/dogs/img3.jpg",
        "descrizione": "Il Beagle è un cane vivace e amichevole, con un grande senso dell'olfatto. È spesso utilizzato nella caccia, ma è anche un ottimo animale domestico."
    },
    {
        "id": 4,
        "razza": "Bulldog Francese",
        "immagine": "../../../assets/images/dogs/img4.jpg",
        "descrizione": "Il Bulldog Francese è un piccolo cane robusto con un carattere affettuoso. È noto per le sue orecchie a forma di pipa e il muso schiacciato."
    },
    {
        "id": 5,
        "razza": "Golden Retriever",
        "immagine": "../../../assets/images/dogs/img5.jpg",
        "descrizione": "Il Golden Retriever è un cane affettuoso, intelligente e socievole. È spesso utilizzato come cane guida, da ricerca e soccorso e come compagno di famiglia."
    },
    {
        "id": 6,
        "razza": "Chihuahua",
        "immagine": "../../../assets/images/dogs/img6.jpg",
        "descrizione": "Il Chihuahua è una delle razze più piccole al mondo, ma con un carattere coraggioso. È un compagno ideale per chi cerca un cane da appartamento."
    },
    {
        "id": 7,
        "razza": "Boxer",
        "immagine": "../../../assets/images/dogs/img7.jpg",
        "descrizione": "Il Boxer è un cane robusto, energico e leale. È noto per il suo temperamento giocoso e atletico, rendendolo un ottimo compagno per le famiglie attive."
    },
    {
        "id": 8,
        "razza": "Dalmata",
        "immagine": "../../../assets/images/dogs/img8.jpg",
        "descrizione": "Il Dalmata è famoso per il suo mantello a pois. È un cane vivace, intelligente e amichevole, ideale per famiglie dinamiche."
    },
    {
        "id": 9,
        "razza": "Pomerania",
        "immagine": "../../../assets/images/dogs/img9.jpg",
        "descrizione": "Il Pomerania è un piccolo cane con una pelliccia folta e una coda sovrapposta. È affettuoso, vivace e ama attirare l'attenzione."
    },
    {
        "id": 10,
        "razza": "Husky Siberiano",
        "immagine": "../../../assets/images/dogs/img10.jpg",
        "descrizione": "L'Husky Siberiano è noto per la sua bellezza e resistenza. È un cane energico, amichevole e ama il lavoro all'aria aperta."
    },
    {
        "id": 11,
        "razza": "Bassotto",
        "immagine": "../../../assets/images/dogs/img11.jpg",
        "descrizione": "Il Bassotto è un cane di piccola taglia con un corpo lungo e orecchie pendenti. È coraggioso, intelligente e ama essere coinvolto nelle attività familiari."
    },
    {
        "id": 12,
        "razza": "Pug",
        "immagine": "../../../assets/images/dogs/img12.jpg",
        "descrizione": "Il Pug è noto per il suo muso schiacciato e gli occhi espressivi. È un cane affettuoso, amichevole e adora stare al centro dell'attenzione."
    },
    {
        "id": 13,
        "razza": "Rottweiler",
        "immagine": "../../../assets/images/dogs/img13.jpg",
        "descrizione": "Il Rottweiler è un cane forte, coraggioso e leale. È spesso utilizzato come cane da guardia, ma è anche un compagno devoto per la famiglia."
    },
    {
        "id": 14,
        "razza": "Shih Tzu",
        "immagine": "../../../assets/images/dogs/img14.jpg",
        "descrizione": "Lo Shih Tzu è un cane di piccola taglia con una lunga pelliccia setosa. È un compagno dolce, affettuoso e ama essere coccolato."
    },
    {
        "id": 15,
        "razza": "Collie",
        "immagine": "../../../assets/images/dogs/img15.jpg",
        "descrizione": "Il Collie è noto per il suo mantello lungo e folto. È un cane intelligente, fedele e si adatta bene alla vita familiare."
    },
    {
        "id": 16,
        "razza": "Dachshund",
        "immagine": "../../../assets/images/dogs/img16.jpg",
        "descrizione": "Il Dachshund, o Bassotto, è noto per il suo corpo lungo e orecchie lunghe. È coraggioso, affettuoso e ama scavare."
    },
    {
        "id": 17,
        "razza": "Shetland Sheepdog",
        "immagine": "../../../assets/images/dogs/img17.jpg",
        "descrizione": "Lo Shetland Sheepdog è un cane di taglia media con un mantello lungo e folto. È intelligente, leale e si adatta bene alla vita familiare."
    },
    {
        "id": 18,
        "razza": "Bulldog Inglese",
        "immagine": "../../../assets/images/dogs/img18.jpg",
        "descrizione": "Il Bulldog Inglese è noto per il suo muso piegato e la postura massiccia. È un cane dolce, calmo e ama trascorrere del tempo con la famiglia."
    },
    {
        "id": 19,
        "razza": "Cavalier King Charles Spaniel",
        "immagine": "../../../assets/images/dogs/img19.jpg",
        "descrizione": "Il Cavalier King Charles Spaniel è un cane affettuoso, allegro e adora la compagnia umana. È una scelta popolare come cane da compagnia."
    },
    {
        "id": 20,
        "razza": "Bichon Frise",
        "immagine": "../../../assets/images/dogs/img20.jpg",
        "descrizione": "Il Bichon Frise è noto per il suo mantello riccio e la personalità vivace. È un cane socievole, affettuoso e ama giocare."
    },
]
    // Logica per modale:
    mostraModale = false;

    apriModale() {
    this.mostraModale = true;
    }

    chiudiModale() {
    this.mostraModale = false;
    }

    aggiungiCane(nuovoCane: any) {
        nuovoCane.id = this.dogs.length + 1; // Assegna un nuovo ID univoco
        this.dogs.push(nuovoCane);
      }
      
      

  constructor() { }

  ngOnInit() {
  }

}