export class Product {
    constructor(
        public id: number,
        public code: string,
        public name: string,
        public description: string,
        public price: number,
        public urlImage: string,
        public stock: number,
        public stock_min: number,
        public stock_max: number,
        public dateCreated: Date,
        public dateUpdated: Date,
        public categoryId: number
    ){}
}
