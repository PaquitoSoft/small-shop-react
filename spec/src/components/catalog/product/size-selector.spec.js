import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SizeSelector from '../../../../../src/js/components/catalog/product/size-selector';

const noop = function(){};

function createMockSizes() {
	return [
		{ id: 1, name: 'S' },
		{ id: 2, name: 'M' },
		{ id: 3, name: 'L' },
	];
}

describe('Product page', function() {

	describe('Size selector', function() {

		it('Should return null if less than two sizes are provided', function() {
			const wrapper = shallow(<SizeSelector sizes={[]} onSizeSelected={noop} />);
			expect(wrapper.type()).to.equals(null);
		});

		it('Should render the right sizes length', function() {
			const wrapper = shallow(<SizeSelector sizes={createMockSizes()} onSizeSelected={noop} />);
			expect(wrapper.find('option')).to.have.length(3);
			expect(wrapper.find('option').at(1).text()).to.contains('M');
		});

		it('Should call provoded callback when a size is selected', function() {
			const spy = sinon.spy();
			const wrapper = shallow(<SizeSelector sizes={createMockSizes()} onSizeSelected={spy} />);
			wrapper.find('select').simulate('change');
			expect(spy.calledOnce).to.equals(true);
		});

	});

});
