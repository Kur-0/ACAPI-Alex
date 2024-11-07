import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.page.html',
  styleUrls: ['./personagem-detalhe.page.scss'],
})
export class PersonagemDetalhePage implements OnInit {

  character: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://rickandmortyapi.com/api/character/${id}`).subscribe(res => {this.character = res;});
  }
}
