import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  numberToDisplay = '';

  standard = {
    firstName: 'chris',
    lastName: 'titi',
    role: 'Acceuil',
    award: '',
    phoneNumber: '01-20-52-59-95'
  };

  sommelier = {
    firstName: 'dave',
    lastName: 'bibi',
    role: 'Sommeiler',
    award: 'Meilleur Ouvrier de France 2002',
    phoneNumber: '01-20-52-59-98'
  };

  boucher = {
    firstName: 'boeuf',
    lastName: 'vian',
    role: 'Boucher',
    award: 'Meilleur Ouvrier de France 2000',
    phoneNumber: '01-20-52-58-98'
  };
  constructor() {}

  ngOnInit() {}

  displayBig(phoneNumber) {
    this.numberToDisplay = phoneNumber;
  }
}
