class Product {
    constructor(productcode, productname, stock, price) {
        this.productcode = productcode;
        this.productname = productname;
        this.stock = stock;
        this.price = price;
    }
    get getstock() {
        return this.stock;
    }
    display() {
        console.log(
            `Productcode : ${this.productcode} \nProductname : ${this.productname}\nStock : ${this.stock}\nPrice : ${this.price}`
        );
    }
}
class Activity extends Product {
    constructor(
        productcode,
        productname,
        stock,
        price,
        customername,
        quantitysold,
        totalamount,
        Neededstock
    ) {
        super(productcode, productname, stock, price);
        this.customername = customername;
        this.quantitysold = quantitysold;
        this.totalamount = totalamount;
        this.Neededstock = Neededstock;
    }
    sales() {
        if (this.getstock == 0) {
            console.log("NO STOCKS LEFT :( " + this.customername);
        } else if(this.getstock >= this.quantitysold){
            console.log("WE HAVE THE REQUIRED STOCK-- " + this.customername);
        } else if(this.getstock < this.quantitysold){
            console.log("'SORRY' WE HAVE ONLY LIMITED STOCKS")
        }
        //-----------------------
        if (this.quantitysold <= this.getstock ) {
            console.log("AFTRE DEDUCTING THE QUANTITY SOLD-- " + (this.quantitysold * this.price));
        }else{
            console.log("SORRY "+this.customername+" THE ONLY AVAILABLE STOCK WE HAVE IS-- "+this.getstock)
            console.log()
        }

    }
}
let stock = new Activity(110, "GIFT-BOX", 50, 10, "RAM", 40);
stock.display();
stock.sales();