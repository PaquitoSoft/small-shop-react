import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomeInfo from '../../../../../src/js/components/catalog/home/home-info';

describe('<HomeInfo />', function() {

	const mockA = {
		"title": "100% Original",
		"message": "We guarantee you the sale of Original Brands.",
		"icon": "icon-thumbs-up2"
	};

	const mockB = {
		"title": "Payment Options",
		"message": "We accept Visa, MasterCard and American Express.",
		"icon": "icon-credit-cards"
	};

	function checkInfoRendering(infoMock, isLast) {
		const wrapper = shallow(<HomeInfo info={infoMock} isLast={isLast} />);
		expect(wrapper.text()).to.contains(infoMock.title);
		expect(wrapper.text()).to.contains(infoMock.message);
		expect(wrapper.find(`.${infoMock.icon}`)).to.have.length(1);
		expect(wrapper.find('.col_last')).to.have.length(isLast ? 1 : 0);
	}

	it('Should render the rigth info', function() {
		checkInfoRendering(mockA, false);
		checkInfoRendering(mockB, true);
	});

});
