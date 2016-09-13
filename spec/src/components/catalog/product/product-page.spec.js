import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';

import ProductPage from '../../../../../src/js/components/catalog/product/product-page';
import SizeSelector from '../../../../../src/js/components/catalog/product/size-selector';
import * as catalogApi from '../../../../../src/js/api/catalog';
import * as shopCartApi from '../../../../../src/js/api/shop';
import * as loader from '../../../../../src/js/plugins/loader';
import events from '../../../../../src/js/plugins/events-bus';

describe('Product page', function() {

	const _addLastViewedProducts = catalogApi.addLastViewedProducts;

	const pageDataMock = {
		product: {"_id":"570a656ebb6e21a605b0b671","__v":0,"categoryId":5,"colors":[{"sizes":[""],"_id":"570a656ebb6e21a605b0b67a","id":"0364141006","imageUrl":"c7ed2548f0d36ec3be1cf35bf751fa83","name":"White/Patterned"}, {"sizes":[""],"_id":"570a6721bb6e21a605b0c3b5","id":"0301204004","imageUrl":"eadc7985e4d5f3f5c599de14e43a6e04","name":"White/Feather"}],"id":"0355141007","imagesUrls":["7e3ac92a9abceea3cd6d1d699d38fece","e742e43f73b517fb49aa59a6e247db9e","4dc5019a6442919a697cce20addf2095"],"name":"Sleeveless maxi dress","price":29.99,"sizes":[{"_id":"570a656ebb6e21a605b0b679","id":"001","name":"6"},{"_id":"570a656ebb6e21a605b0b678","id":"002","name":"8"},{"_id":"570a656ebb6e21a605b0b677","id":"003","name":"10"},{"_id":"570a656ebb6e21a605b0b676","id":"004","name":"12"},{"_id":"570a656ebb6e21a605b0b675","id":"005","name":"14"},{"_id":"570a656ebb6e21a605b0b674","id":"006","name":"16"},{"id":"007","name":"18","_id":"570a656ebb6e21a605b0b673"},{"_id":"570a656ebb6e21a605b0b672","id":"008","name":"20"}]},
		popularProducts: [],
		categories: [],
		category: {
			id: -1,
			name: 'Coats'
		},
		categoryProducts: []
	};

	const alternativeProductMock = {"_id":"570a6646bb6e21a605b0bad8","__v":0,"categoryId":7,"colors":[{"sizes":[""],"_id":"570a6646bb6e21a605b0badf","id":"0364854001","imageUrl":"995738ec7bf1a46075ae278ae2ff478c","name":"Black"}],"id":"0364854007","imagesUrls":["045deb1b8b5f5cd34c273b5fbb8ee8dd","59134a672202e1de7a95415fcad2c302","5513ada9d1192162e501f32e07a8be59","c6b6cd1ac9448ffb8bf53b25fe70de0d","50e0a122a40ad60c6e8f9f6ea924507c"],"name":"Super Skinny Ankle Jeans","price":19.99,"sizes":[{"_id":"570a6646bb6e21a605b0bade","id":"001","name":"6"},{"_id":"570a6646bb6e21a605b0badd","id":"002","name":"8"},{"_id":"570a6646bb6e21a605b0badc","id":"003","name":"10"},{"_id":"570a6646bb6e21a605b0badb","id":"004","name":"12"},{"_id":"570a6646bb6e21a605b0bada","id":"005","name":"14"},{"_id":"570a6646bb6e21a605b0bad9","id":"006","name":"16"}]};

	function createMock() {
		return Object.assign({}, pageDataMock);
	}

	beforeEach(function() {
		sinon.spy(catalogApi, 'addLastViewedProducts');
	});

	afterEach(function() {
		catalogApi.addLastViewedProducts.restore();
	});

	it('Should render product details', function() {
		const wrapper = shallow(<ProductPage pageData={createMock()} />);
		
		// Check main component CSS class
		expect(wrapper.find('.product-page')).to.have.lengthOf(1);
		
		// Check sub-components
		expect(wrapper.find('ProductDetailGallery')).to.have.lengthOf(1);
		expect(wrapper.find('ProductNavigationLinks')).to.have.lengthOf(1);
		expect(wrapper.find('ProductDetailMainInfo')).to.have.lengthOf(1);
		expect(wrapper.find('ColorSelector')).to.have.lengthOf(1);
		expect(wrapper.find('SizeSelector')).to.have.lengthOf(1);
		expect(wrapper.find('AddProductToCart')).to.have.lengthOf(1);
		expect(wrapper.find('LastViewedProducts')).to.have.lengthOf(1);

		// TODO: This component is wrapped in a HOC so it's not found directly
		// in the tested component. Which is the best practice here?
		// expect(wrapper.find('Sidebar')).to.have.lengthOf(1, 'Sidebar component not found!');

		// Check default state
		expect(wrapper.state('selectedColor')).to.equals('0364141006');
		expect(wrapper.state('selectedSize')).to.equals('001');
		expect(wrapper.state('lastViewedProducts')).to.have.lengthOf(0);

		expect(catalogApi.addLastViewedProducts.calledOnce).to.equals(false);
	});

	it('Should set product info into state on component mount', function() {
		const wrapper = mount(<ProductPage pageData={createMock()} />);
		// Twice becouse mount fires componentDidMount and componentDidUpdate
		expect(catalogApi.addLastViewedProducts.calledTwice).to.equals(true);
	});

	it('Should update state and reset selected size when new product is received', function() {
		sinon.spy(SizeSelector.prototype, 'reset');
		
		const wrapper = mount(<ProductPage pageData={createMock()} />);

		expect(wrapper.state('selectedColor')).to.equals('0364141006');
		expect(wrapper.state('selectedSize')).to.equals('001');

		const newPageData = Object.assign({}, createMock(), { product: alternativeProductMock });
		wrapper.setProps({ pageData: newPageData });

		expect(wrapper.state('selectedColor')).to.equals('0364854001');
		expect(SizeSelector.prototype.reset.calledOnce).to.equals(true);

		SizeSelector.prototype.reset.restore();
	});

	it('Shold call onColorSelected when a product color is selected', function() {
		
		// Option A
		const wrapper = mount(<ProductPage pageData={createMock()} />);
		expect(wrapper.state('selectedColor')).to.equals('0364141006');
		wrapper.find('.product-color').at(1).simulate('click');
		expect(wrapper.state('selectedColor')).to.equals('0301204004');
		
		// Option B
		const _wrapper = shallow(<ProductPage pageData={createMock()} />);
		const instance = _wrapper.instance();
		expect(_wrapper.state('selectedColor')).to.equals('0364141006');
		instance.onColorSelected({ id: -100 });
		expect(_wrapper.state('selectedColor')).to.equals(-100);
	});

	it('Should call onSizeSelected when a product size is selected', function() {
		const wrapper = shallow(<ProductPage pageData={createMock()} />);
		const instance = wrapper.instance();
		expect(wrapper.state('selectedSize')).to.equals('001');
		instance.onSizeSelected({ target: { value: -100 } });
		expect(wrapper.state('selectedSize')).to.equals(-100);
	});

	it('Should call onAddToCart when a product is requested to be added to the cart', function() {
		sinon.stub(shopCartApi, 'addProductToCart', () => Promise.resolve({ id: -200 }));

		const wrapper = shallow(<ProductPage pageData={createMock()} />);
		const instance = wrapper.instance();

		instance.onAddToCart(10, () => true);

		expect(shopCartApi.addProductToCart.firstCall.args[0]).to.deep.equals({
			productId: '0355141007',
			colorId: '0364141006',
			sizeId: '001',
			quantity: 10
		});

		shopCartApi.addProductToCart.restore();
	});

	it('Should execute success handler when adding product to cart completes ok', function(done) {
		sinon.stub(shopCartApi, 'addProductToCart', () => Promise.resolve({ id: -200 }));
		sinon.spy(loader, 'hide');
		sinon.spy(events.bus, 'emit');

		const callback = () => {
			expect(loader.hide.calledOnce).to.equals(true, 'loader');
			expect(events.bus.emit.firstCall.args[0]).to.deep.equals('SHOP_CART_UPDATED', 'events-type');
			expect(events.bus.emit.firstCall.args[1]).to.deep.equals({ id: -200 }, 'events-data');
			shopCartApi.addProductToCart.restore();
			loader.hide.restore();
			events.bus.emit.restore();

			done();
		};

		const wrapper = shallow(<ProductPage pageData={createMock()} />);
		const instance = wrapper.instance();
		instance.onAddToCart(10, callback);
	});
	
	it('Should execute error handler when adding a product to cart fails', function(done) {
		sinon.stub(shopCartApi, 'addProductToCart', () => Promise.reject(new Error('[Mock] Adding product error.')));
		sinon.spy(loader, 'hide');
		sinon.stub(events.bus, 'emit', (eventName, eventData) => {
			expect(loader.hide.calledOnce).to.equals(true, 'loader');
			expect(eventName).to.equals('SHOW_MODAL');
			expect(eventData).to.equals('There was a problem adding this product to shop cart');

			shopCartApi.addProductToCart.restore();
			loader.hide.restore();
			events.bus.emit.restore();

			done();
		});

		const wrapper = shallow(<ProductPage pageData={createMock()} />);
		const instance = wrapper.instance();
		instance.onAddToCart(10);
	});

});