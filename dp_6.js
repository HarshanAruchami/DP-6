class Product {
    constructor(productcode, productname, stock, price) {
        this.productcode = productcode;
        this.productname = productname;
        this.stock = stock;
        this.price = price;


    }
    display() {
        document.getElementById("output").innerHTML = ("Productcode : " + this.productcode + "<br>" + "Productname : " + this.productname + "<br>" + "Stock : " + this.stock + "<br>" + "Price : " + this.price);
    }
}
class Activity extends Product {
    constructor(productcode, productname, stock, price, customername, quantitysold, totalamount) {
        super(productcode, productname, stock, price);
        this.customername = customername;
        this.quantitysold = quantitysold;
        this.totalamount = totalamount;

    }
    sales(){

    }
    print() {
        document.getElementById("output").innerHTML = ("Productcode : " + this.productcode + "<br>" + "Productname : " + this.productname + "<br>" + "Stock : " + this.stock + "<br>" + "Price : " + this.price + "<br>" + "Customer Name : " + this.customername + "<br>" + "Product Code :"+ this.productcode+"<br>"+"Quantity Sold :");
    }

}

