export class Quote {
    showDescription: boolean;

    constructor(
        public id: number, 
        public quote: string, 
        public author: string, 
        public published: string, 
        public completeDate: Date
        )
        {
         this.showDescription=false;
    }
  }
