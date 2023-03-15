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
            `===========BEFORE SALES=========== \nProductcode : ${this.productcode} \nProductname : ${this.productname}\nStock : ${this.stock}\nPrice : ${this.price}`
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
        //NO STOCKS, REQUIRED STOCKS, LIMITED STOCKS
        console.log("===========SALES DETAILS===========");
        if (this.getstock == 0) {
            console.log("NO STOCKS LEFT :( " + this.customername);
        } else if (this.getstock >= this.quantitysold) {
            console.log("WE HAVE THE REQUIRED STOCK-- " + this.customername);
        } else if (this.getstock < this.quantitysold) {
            console.log("'SORRY' " + this.customername + " WE HAVE ONLY LIMITED STOCKS");
        }
        // QUANTITY SOLD, TOTAL AMOUNT
        if (this.quantitysold <= this.getstock) {
            console.log("QUANTITY SOLD -- " + this.quantitysold);
            console.log("TOTAL QUANTITY PRICE -- " + (this.quantitysold * this.price));
        } else {
            console.log("THE ONLY AVAILABLE STOCK WE HAVE IS -- " + this.getstock);
            console.log("YET TO BE SOLD!! -- "+(this.quantitysold - this.getstock))
            console.log("QUANTITY SOLD -- " + this.getstock);
            console.log("TOTAL QUANTITY PRICE -- " + (this.getstock * this.price));
        }
        //AFTER SALES
        console.log("===========AFTER SALES===========");
        console.log("Productcode : " + this.productcode);
        console.log("Productname : " + this.productname);
        if (this.quantitysold > this.getstock) {
            console.log("Stock : " + (0));
        } else {
            console.log("Stock Remaining: " + (this.getstock - this.quantitysold));
        }
        console.log("Price : " + this.price);


    }
}
let stock = new Activity(110, "GIFT-BOX", 50, 10, "RAM", 70);
stock.display();
stock.sales();
