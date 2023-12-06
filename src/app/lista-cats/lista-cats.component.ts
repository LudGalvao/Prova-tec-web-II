// listaCats.component.ts
import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats.component.html',
  styleUrls: ['./lista-cats.component.css']
})
export class ListaCatsComponent implements OnInit {
  cats!: any[]; // Indique ao TypeScript que esta propriedade será inicializada

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe(data => {
      this.cats = data;
    });
  }
}

