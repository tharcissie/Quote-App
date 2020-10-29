
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','Janet', new Date(2020,3,14),6,8),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot','Naomy',new Date(2020,6,9),9,2),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon','Tina', new Date(2020,1,12),8,2),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks','Tharcissie',new Date(2020,0,18),8,5),
    new Quote(5,'Solve math homework','Damn Math','Lyse', new Date(2020,2,14),0,0),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord','Divine',new Date(20,3,14),0,5),
  ];

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
