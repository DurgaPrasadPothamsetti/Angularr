import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  products = [
    {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/41mcurLhVqL._SX466_.jpg"
    },
    {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://images.homedepot-static.com/productImages/b2a0e937-99b7-40bb-a567-8b11a2eb63ef/svn/sontax-yard-carts-73599-64_1000.jpg"
    },
    {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71tTWyypTKL._SL1500_.jpg"
    },
    {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2016",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "https://bit.ly/2YAnwXv"
    },
    {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2015",
    "description": "Standard two-button video game controller",
    "price": 35.95,
    "starRating": 4.6,
    "imageUrl": "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/07/20/goods_img_big-v1/20170720115950_18430.jpg"
    }
    ]
    pid:any;
    pname:any;
    pcode:any;
    pdate:any;
    pdesc:any;
    pprice:any;
    prate:any;
    pimg:any;

  ngOnInit() {
  }
  clickProduct(product){
    this.pid=product.productId;
    this.pname=product.productName;
    this.pcode=product.productCode;
    this.pdate=product.releaseDate;
    this.pdesc=product.description;
    this.pprice="$"+product.price;
    this.prate=product.starRating;
   
  }

 

}
