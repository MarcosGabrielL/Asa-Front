import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';


@Component({
  selector: 'app-torrents-modal',
  templateUrl: './torrents-modal.component.html',
  styleUrls: ['./torrents-modal.component.css']
})
export class TorrentsModalComponent {
	
	mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }

}
