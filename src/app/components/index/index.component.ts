import { Component, OnInit } from '@angular/core';

import { IndexServiceService } from 'src/app/services/index-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  

  public setup: string ="";
  public delivery : string = "";
  public joke : string = "";

  public language:any;  

  constructor(private IndexService : IndexServiceService) { }

  ngOnInit(): void {
    this.IndexService.getAllJokesConsoleLog().subscribe(
      
      data => {
            console.log(data);
      } 
    )
    
  }


  getAllJokes(){

    
    console.log(this.language);
    if( this.language == "" || this.language == "English"){

      this.IndexService.getAllJokes().subscribe(

        data => {
              this.setup = data.setup,
              this.delivery = data.delivery,
              this.joke = data.joke
        }
      )

    }else{ // it´s Spanish --- this.language == "Spanish"

      this.IndexService.getAllJokesSpanish().subscribe(
        
        data => {
              this.setup = data.setup,
              this.delivery = data.delivery,
              this.joke = data.joke
        }
      )
    }

   
    
  }


  getRadibuttonSelected($event: any){
    this.language = $event.target.value;
    console.log(this.language);
  }
  
  

}
