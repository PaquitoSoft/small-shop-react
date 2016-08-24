import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';

import HomePage from '../../../../../src/js/components/catalog/home/home-page';

const banner = '<div class="home-banner"><h1>HOME BANNER</h1></div>';
const featuredProducts = [{"_id":"570a643cbb6e21a605b0ae80","__v":0,"categoryId":2,"colors":[{"_id":"570a643cbb6e21a605b0ae86","id":"0355569001","imageUrl":"ca2a4ce070cb5f2ce19c307141ccecb1","name":"Black","sizes":[""]}],"id":"0355569011","imagesUrls":["23c4df56441a75799400b21721aadd81","eccf2d2d54a9f7d05ae62fe40958bdd6","b81406812bf6704cc17b8dcb587ed422"],"name":"Long jersey strappy top","price":3.99,"sizes":[{"_id":"570a643cbb6e21a605b0ae85","id":"002","name":"XS"},{"_id":"570a643cbb6e21a605b0ae84","id":"003","name":"S"},{"_id":"570a643cbb6e21a605b0ae83","id":"004","name":"M"},{"_id":"570a643cbb6e21a605b0ae82","id":"005","name":"L"},{"_id":"570a643cbb6e21a605b0ae81","id":"006","name":"XL"}]},{"_id":"570a643cbb6e21a605b0ae87","__v":0,"categoryId":2,"colors":[{"id":"0200727022","imageUrl":"048e840cd460831d91f27cd6ae346a27","name":"Rust","sizes":[""],"_id":"570a643cbb6e21a605b0ae8d"}],"id":"0200727024","imagesUrls":["3ce38d142aa88f22fe6191563cf2cd28","1e42a53a2832c5d617c2c984977a3f33","191db4a6b68b61539290579883cf5f41"],"name":"Top in slub jersey","price":3.99,"sizes":[{"name":"XS","_id":"570a643cbb6e21a605b0ae8c","id":"002"},{"_id":"570a643cbb6e21a605b0ae8b","id":"003","name":"S"},{"id":"004","name":"M","_id":"570a643cbb6e21a605b0ae8a"},{"_id":"570a643cbb6e21a605b0ae89","id":"005","name":"L"},{"name":"XL","_id":"570a643cbb6e21a605b0ae88","id":"006"}]},{"_id":"570a643dbb6e21a605b0ae8e","__v":0,"categoryId":2,"colors":[{"_id":"570a643dbb6e21a605b0ae94","id":"0129393011","imageUrl":"22aa3ece85745eeb3663e73252018c74","name":"Black","sizes":[""]}],"id":"0129393036","imagesUrls":["e45ae049467ebff46d1f1c41b56a14d8","83eadf17329025bd9ffe2eb9fb7191eb","c6238dc49d69083da830c245f00952ec"],"name":"Fine-knit cardigan","price":12.99,"sizes":[{"_id":"570a643dbb6e21a605b0ae93","id":"002","name":"XS"},{"id":"003","name":"S","_id":"570a643dbb6e21a605b0ae92"},{"name":"M","_id":"570a643dbb6e21a605b0ae91","id":"004"},{"_id":"570a643dbb6e21a605b0ae90","id":"005","name":"L"},{"id":"006","name":"XL","_id":"570a643dbb6e21a605b0ae8f"}]},{"_id":"570a643dbb6e21a605b0ae95","__v":0,"categoryId":2,"colors":[{"_id":"570a643dbb6e21a605b0ae9b","id":"0381419001","imageUrl":"9275d68f24ae8afad70dd0b465baccd8","name":"Black","sizes":[""]}],"id":"0381419004","imagesUrls":["bcf50b0ac135e55519c1e4b4bdf344af","ad03cad0361eb215d8e538fc7962e329","20e70139f43f68fdd307b5949260c618"],"name":"Jersey maxi dress","price":14.99,"sizes":[{"_id":"570a643dbb6e21a605b0ae9a","id":"002","name":"XS"},{"_id":"570a643dbb6e21a605b0ae99","id":"003","name":"S"},{"_id":"570a643dbb6e21a605b0ae98","id":"004","name":"M"},{"_id":"570a643dbb6e21a605b0ae97","id":"005","name":"L"},{"_id":"570a643dbb6e21a605b0ae96","id":"006","name":"XL"}]},{"_id":"570a643dbb6e21a605b0ae9c","__v":0,"categoryId":2,"colors":[{"_id":"570a643dbb6e21a605b0aea2","id":"0376334004","imageUrl":"5b366b08de8da58e25f237d1d0e9eb4a","name":"White","sizes":[""]}],"id":"0376334007","imagesUrls":["085fb4e1417649d22b5426110b531e67","1a3e665fd1349267f978397fe0476895","b433b5e93d0d4b97978eeefc93193c87"],"name":"Sleeveless jersey top","price":7.99,"sizes":[{"_id":"570a643dbb6e21a605b0aea1","id":"002","name":"XS"},{"_id":"570a643dbb6e21a605b0aea0","id":"003","name":"S"},{"_id":"570a643dbb6e21a605b0ae9f","id":"004","name":"M"},{"_id":"570a643dbb6e21a605b0ae9e","id":"005","name":"L"},{"_id":"570a643dbb6e21a605b0ae9d","id":"006","name":"XL"}]},{"_id":"570a643ebb6e21a605b0aea3","__v":0,"categoryId":2,"colors":[{"imageUrl":"1020aa2c8881bea1fcd57e45d728cc6a","name":"Black","sizes":[""],"_id":"570a643ebb6e21a605b0aea9","id":"0307325001"}],"id":"0307325006","imagesUrls":["663e328e10a8a709af14f7211f18b02d","9991049062003050a0e475695331b475","cfca95f84b0327a2ab8cec7934a86fb5"],"name":"A-line dress","price":12.99,"sizes":[{"_id":"570a643ebb6e21a605b0aea8","id":"002","name":"XS"},{"id":"003","name":"S","_id":"570a643ebb6e21a605b0aea7"},{"_id":"570a643ebb6e21a605b0aea6","id":"004","name":"M"},{"name":"L","_id":"570a643ebb6e21a605b0aea5","id":"005"},{"_id":"570a643ebb6e21a605b0aea4","id":"006","name":"XL"}]},{"_id":"570a643ebb6e21a605b0aeaa","__v":0,"categoryId":2,"colors":[{"imageUrl":"5aecb25df3317c4c119b7922342cbcb8","name":"Black","sizes":[""],"_id":"570a643ebb6e21a605b0aeb0","id":"0281407001"}],"id":"0281407015","imagesUrls":["d8822ba1f40f036e26423e21ae17af64","dfc655f1fda06c5bc91572984d3a85c9","b588181d8f82acf54e60a1baf19e3032"],"name":"V-neck jersey top","price":9.99,"sizes":[{"_id":"570a643ebb6e21a605b0aeaf","id":"002","name":"XS"},{"id":"003","name":"S","_id":"570a643ebb6e21a605b0aeae"},{"_id":"570a643ebb6e21a605b0aead","id":"004","name":"M"},{"name":"L","_id":"570a643ebb6e21a605b0aeac","id":"005"},{"_id":"570a643ebb6e21a605b0aeab","id":"006","name":"XL"}]},{"_id":"570a643ebb6e21a605b0aeb1","__v":0,"categoryId":2,"colors":[{"_id":"570a643fbb6e21a605b0aeb7","id":"0357192001","imageUrl":"d601d531ddc64487682bfa2bf82b82aa","name":"Dark blue","sizes":[""]}],"id":"0357192003","imagesUrls":["964c587330069bd6145ba07be16a962f","47804c7c57aecdbc43eb1637a6137899","c48df9befc722bd63d9664a041005157","afd3ea59029a3f1ba1fdf4cb2bb87bf3"],"name":"V-neck jersey top","price":7.99,"sizes":[{"_id":"570a643ebb6e21a605b0aeb6","id":"002","name":"XS"},{"_id":"570a643ebb6e21a605b0aeb5","id":"003","name":"S"},{"_id":"570a643ebb6e21a605b0aeb4","id":"004","name":"M"},{"id":"005","name":"L","_id":"570a643ebb6e21a605b0aeb3"},{"name":"XL","_id":"570a643ebb6e21a605b0aeb2","id":"006"}]}];
const shopInfo = [
	{
		"title": "100% Original",
		"message": "We guarantee you the sale of Original Brands.",
		"icon": "icon-thumbs-up2"
	},
	{
		"title": "Payment Options",
		"message": "We accept Visa, MasterCard and American Express.",
		"icon": "icon-credit-cards"
	},
	{
		"title": "Free Shipping",
		"message": "Free Delivery to 100+ Locations on orders above $40.",
		"icon": "icon-truck2"
	},
	{
		"title": "30-Days Returns",
		"message": "Return or exchange items purchased within 30 days.",
		"icon": "icon-undo"
	}
];

function createMock() {
	return {
		banner,
		featuredProducts,
		shopInfo
	};
}

describe('<HomePage />', function() {

	it('Should render home banner', function() {
		const wrapper = render(<HomePage pageData={createMock()} />);
		expect(wrapper.find('.home-banner')).to.have.length(1);
	});

	it('Should render featured products', function() {
		const wrapper = shallow(<HomePage pageData={createMock()} />);
		expect(wrapper.find('ProductSummary')).to.have.length(8);
	});

	it('Should render store infos', function() {
		const wrapper = shallow(<HomePage pageData={createMock()} />);
		expect(wrapper.find('HomeInfo')).to.have.length(4);
	});

});
