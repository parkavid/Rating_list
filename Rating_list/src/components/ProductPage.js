import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./ProductPage.css";

import * as userActions from "../actionCreators/products";

class ProductPage extends Component {
  componentDidMount() {
    const products = {
      "products": [
        {
          "reviewURL": "assets/images/rating-4_0.gif",
          "imageUrl": "//pics.drugstore.com/prodimg/389604/450.jpg",
          "prodId": "1",
          "productDisplayName": "Herbal Essences Body Envy Volumizing Shampoo Citrus",
          "reviewHoverMessage": "4.5 out of 5",
          "priceInfo": {
            "regularPrice": "$3.99",
            "unitPrice": "$0.39"
          },
          "shippingChargeMsg": "FREE shipping on orders of $35 or more.",
          "prodDescription": "Body Envy Volumizing Shampoo will help show you the difference between body and big hair.  It's all about body with a lightweight formula fused with passion flower sunrise and pearl.  This exhilarating clean will help lift you up."
        },
        {
          "reviewURL": "assets/images/rating-2_1.gif",
          "imageUrl": "https://pics.drugstore.com/prodimg/397325/900.jpg",
          "prodId": "prod6013608",          
          "productDisplayName": "Boost Original, Complete Nutritional Drink Rich Chocolate",
          "reviewHoverMessage": "2.0 out of 5",
          "priceInfo": {
            "regularPrice": "$8.49",
            "unitPrice": "$0.30",
            "unitPriceSize": "oz."
          },
          "shippingChargeMsg": " Ship to Store FREE! ",
          "prodDescription": "This drink contains Prebio1 blend which is a proprietary blend of prebiotic fibers designed to help promote the growth of beneficial intestinal bacteria and support a healthy digestive system."
        },
        {
          "reviewURL": "assets/images/rating-2_9.gif",
          "imageUrl": "//pics.drugstore.com/prodimg/345542/450.jpg",
          "prodId": "prod6013608",          
          "productDisplayName": "Head & Shoulders Classic Clean Dandruff Shampoo",
          "reviewHoverMessage": "3.0 out of 5",
          "priceInfo": {
            "regularPrice": "$5.26",
            "unitPrice": "$0.30",
            "unitPriceSize": "oz."
          },
          "shippingChargeMsg": "Buy 1, Get 1 50% OFF",
          "prodDescription": "Benefits: removes flakes*, calms itching*, relieves irritation*, reduces redness.*, great scent, fights dryness, leaves hair beautiful."
        },
        {
          "reviewURL": "assets/images/rating-1_0.gif",
          "imageUrl": "//pics.drugstore.com/prodimg/28117/900.jpg",
          "prodId": "prod6013608",          
          "productDisplayName": "Nature Made Calcium, Magnesium &  Zinc, Tablets",
          "reviewHoverMessage": "1.0 out of 5",
          "priceInfo": {
            "regularPrice": "$6.82",
            "unitPrice": "$0.30",
            "unitPriceSize": "oz."
          },
          "shippingChargeMsg": " Ship to home FREE at $35! ",
          "prodDescription": "   Take one tablet up to three times daily with meals. Keep bottle tightly closed. Store in a cool, dry place, out of reach of children. © Pharmavite Corporation"
        }
      ]
    }
    this.props.actions.getProductsSuccess(products);
  }
  openDetailsOverlay(index) {
    this.props.actions.setDetails(index);
  }
  render() {
    const { productCard, detailsIndex } = this.props.products;
    const { products } = productCard;
    let prodArr = [];
    if (productCard && productCard.products && productCard.products.length > 0) {
      prodArr = productCard.products;
    }
    return <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id={"pic-"+detailsIndex}><img alt={detailsIndex} src={products && products[detailsIndex].imageUrl} /></div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                {prodArr.map((item, index) => <li onClick={() => this.openDetailsOverlay(index)} key={index}><a data-target={"#pic-" + index}  data-toggle="tab"><img alt={index} src={item.imageUrl} style={{
                  'width': '89px', 'height': '89px'
                }} /></a></li>)}
              </ul>
            </div>
            <div className="details col-md-6 " >
              <h3 className="product-title">{products && products[detailsIndex].productDisplayName}</h3>
              <div className="rating">
                <div className="stars">
                  <img alt={detailsIndex} src={products && products[detailsIndex].reviewURL} />
                </div>
                <span className="review-no">{products && products[detailsIndex].reviewHoverMessage}</span>
              </div>
              <p className="product-description">{products && products[detailsIndex].prodDescription}</p>
              <h4 className="price">current price: <span>{products && products[detailsIndex].priceInfo.regularPrice}</span></h4>
              <p className="vote"><strong>{products && products[detailsIndex].shippingChargeMsg}</strong></p>
              <h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
                <span className="size" data-toggle="tooltip" title="medium">m</span>
                <span className="size" data-toggle="tooltip" title="large">l</span>
                <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
              </h5>
              <h5 className="colors">colors:
							<span className="color orange" data-toggle="tooltip" title="Not In store"></span>
                <span className="color green" data-toggle="tooltip" title="In store"></span>
                <span className="color blue" data-toggle="tooltip" title="Available"></span>
              </h5>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

