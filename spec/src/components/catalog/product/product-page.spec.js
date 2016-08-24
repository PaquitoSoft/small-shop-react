import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProductPage from '../../../../../src/js/components/catalog/product/product-page';

describe('Product page', function() {

	const pageDataMock = {
		product: {"_id":"570a656ebb6e21a605b0b671","__v":0,"categoryId":5,"colors":[{"sizes":[""],"_id":"570a656ebb6e21a605b0b67a","id":"0364141006","imageUrl":"c7ed2548f0d36ec3be1cf35bf751fa83","name":"White/Patterned"}],"id":"0364141006","imagesUrls":["7e3ac92a9abceea3cd6d1d699d38fece","e742e43f73b517fb49aa59a6e247db9e","4dc5019a6442919a697cce20addf2095"],"name":"Sleeveless maxi dress","price":29.99,"sizes":[{"_id":"570a656ebb6e21a605b0b679","id":"001","name":"6"},{"_id":"570a656ebb6e21a605b0b678","id":"002","name":"8"},{"_id":"570a656ebb6e21a605b0b677","id":"003","name":"10"},{"_id":"570a656ebb6e21a605b0b676","id":"004","name":"12"},{"_id":"570a656ebb6e21a605b0b675","id":"005","name":"14"},{"_id":"570a656ebb6e21a605b0b674","id":"006","name":"16"},{"id":"007","name":"18","_id":"570a656ebb6e21a605b0b673"},{"_id":"570a656ebb6e21a605b0b672","id":"008","name":"20"}]};
	};

	it('Should render product details');
	it('Shold call onColorSelected when a product color is selected');
	it('Should call onSizeSelected when a product size is selected');
	it('Should call onAddToCart when a product is requested to be added to the cart');
	
});