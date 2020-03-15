import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  private id: any;

  constructor(activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}
