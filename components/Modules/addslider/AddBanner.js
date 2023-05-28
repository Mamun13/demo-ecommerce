import React from 'react';
import DividerBanner from '../../../public/slidertwo.png'
import Image from 'next/image'

const AddBanner = () => {
	return (
		<>
			<section>
				<div className="container p-0">
					<div className="">
						<Image src={DividerBanner} className="img-fluid mt-2 small-banner" alt="..." />
					</div>
				</div>
			</section>
		</>
	);
};

export default AddBanner;
