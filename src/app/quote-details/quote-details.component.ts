
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  addlike(){
    this.quote.like = this.quote.like+1;
  }

  addislike(){
    this.quote.dislike = this.quote.dislike+1;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
