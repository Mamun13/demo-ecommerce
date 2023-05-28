import React from 'react';
import BannerDemo from './BannerDemo';
import SideBanner from './SideBanner';


const Banner = () => {
  
	return (
		<>
			<section className="banner-part">
				<div className="row">
					<div className="col-lg-3 pe-0 side-bg-part">
						<div className="side-banner p-3">
							<h2 className="text-center fw-bold pb-3 mb-0">Special Deal</h2>
              <div className="side-banner-div" >
                <SideBanner/>
              </div>
						</div>
					</div>
					<div className="col-lg-9 p-0">
						<div className="big-banner">
							<BannerDemo/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
