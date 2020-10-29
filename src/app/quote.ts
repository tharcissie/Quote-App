export class Quote {
    showDescription: boolean;

    constructor(
        public id: number, 
        public quote: string, 
        public author: string, 
        public publisher: string, 
        public completeDate: Date,
        public like:number,
        public dislike:number
        )
        {
         this.showDescription=false;
    }
  }
