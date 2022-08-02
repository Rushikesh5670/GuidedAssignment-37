export class Product {

    constructor(public product_id : number,
        public product_name : string,
        public description : string,
        public unit_price : number,
        public image_url : string,
        public units_in_stock : number,
        public date_created : Date,
        public last_updated : Date,
        public category_id : number
){}
}
