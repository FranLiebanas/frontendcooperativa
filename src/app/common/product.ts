export class Product {
    constructor(
        public  id :number,
        public name : String,
        public code : String,
        public description : String,
        public urlImage : String,
        public price : number,
        public stock_min : number,
        public stock_max : number,
        public dateCreated: Date,
        public dateUpdated: Date,
        public categoryId: number
    ){}
}
