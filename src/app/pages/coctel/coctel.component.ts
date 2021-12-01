import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.scss']
})
export class CoctelComponent implements OnInit {

  id:any;

  cocktail:any;

  constructor(
    private _cocktail:CocktailService,
    private actRoute:ActivatedRoute
  ) { 
    const {id}=actRoute.snapshot.params;
    console.log(id);
    this.id=id;
  }

  ngOnInit(): void {
      this._cocktail.getCocktail(this.id).subscribe(
        res=>{
          this.cocktail=res;
        }
      );
  }
}
