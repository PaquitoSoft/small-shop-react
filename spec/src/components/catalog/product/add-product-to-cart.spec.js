import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddProductToCartButton from '../../../../../src/js/components/catalog/product/add-product-to-cart';

const noop = () => true;
const eventMock = {
	preventDefault: noop
};

describe('Product Page', function() {

	describe('AddProductToCartButton', function() {

		it('Should add quantity', function() {
			const wrapper = shallow(<AddProductToCartButton onAddProduct={noop} />);
			expect(wrapper.state('quantity')).to.equals(1);
			wrapper.find('.plus').simulate('click');
			expect(wrapper.state('quantity')).to.equals(2);
			expect(wrapper.find('.qty').text()).to.equals('2');
			wrapper.find('.plus').simulate('click');
			expect(wrapper.state('quantity')).to.equals(3);
			expect(wrapper.find('.qty').text()).to.equals('3');
		});

		it('Should substract quantity', function() {
			const wrapper = shallow(<AddProductToCartButton onAddProduct={noop} />);
			
			expect(wrapper.state('quantity')).to.equals(1);
			
			wrapper.find('.plus').simulate('click');
			wrapper.find('.plus').simulate('click');
			expect(wrapper.state('quantity')).to.equals(3);
			expect(wrapper.find('.qty').text()).to.equals('3');

			wrapper.find('.minus').simulate('click');
			expect(wrapper.state('quantity')).to.equals(2);
			wrapper.find('.minus').simulate('click');
			expect(wrapper.state('quantity')).to.equals(1);
			expect(wrapper.find('.qty').text()).to.equals('1');
		});

		it('Should not go lower than quantity value 1', function() {
			const wrapper = shallow(<AddProductToCartButton onAddProduct={noop} />);
			
			expect(wrapper.state('quantity')).to.equals(1);
			
			wrapper.find('.minus').simulate('click');
			expect(wrapper.state('quantity')).to.equals(1);
			expect(wrapper.find('.qty').text()).to.equals('1');
		});

		it('Should call onProductAdd callback', function() {
			const spy = sinon.spy();
			const wrapper = shallow(<AddProductToCartButton onAddProduct={spy} />);

			wrapper.find('.add-to-cart').simulate('click', eventMock);
			expect(spy.calledOnce).to.equals(true);
		});

		it('Should call onProductAdd callback with the right quantity', function() {
			const spy = sinon.spy();
			const wrapper = shallow(<AddProductToCartButton onAddProduct={spy} />);

			wrapper.find('.plus').simulate('click');
			
			wrapper.find('.add-to-cart').simulate('click', eventMock);

			expect(spy.calledWith(2)).to.equals(true);
		});

		it('Should display label on product addition for a fixed time', function(done) {
			const mockCallback = (qty, done) => done();
			const wrapper = shallow(<AddProductToCartButton successMessageVisibleTime={200} onAddProduct={mockCallback} />);
			
			expect(wrapper.state('successMessageHidden')).to.equals(true);
			
			wrapper.find('.add-to-cart').simulate('click', eventMock);
			
			expect(wrapper.state('successMessageHidden')).to.equals(false);
			
			setTimeout(function() {
				expect(wrapper.state('successMessageHidden')).to.equals(true);
				done();
			}, 200);
		});

	});

});
