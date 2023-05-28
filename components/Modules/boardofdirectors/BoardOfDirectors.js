import Image from 'next/image';
import Directors from '../../../public/bod/Banner.png';
import Chairman from '../../../public/bod/chairman.jpg';
import Chairman2 from '../../../public/bod/Chairman2.png';
import Chairman3 from '../../../public/bod/Chairman3.png';
import Chairman4 from '../../../public/bod/Chairman4.jpg';
import Chairman5 from '../../../public/bod/Chairman5.png';
import Leader from '../../../public/bod/leader.jpg';
import TeamOne from '../../../public/bod/teamone.jpg';
import TeamTwo from '../../../public/bod/teamtwo.jpg';
import TeamThree from '../../../public/bod/teamthree.jpg';
import TeamFour from '../../../public/bod/teamFour.jpg';
import TeamFive from '../../../public/bod/teamFive.jpg';
import TeamSix from '../../../public/bod/teamSix.png';
import TeamSeven from '../../../public/bod/teamseven.jpg';
import TeamEight from '../../../public/bod/teameight.jpg';

const BoardOfDirectors = () => {
	return (
		<>
			<section>
				<div className="">
					<Image src={Directors} alt="" className="bod-img" />
				</div>
				<div className="container">
					<h1 className="text-capitalize font-40 fw-bold text-center py-4 font-inter">board of directors</h1>
					{/* Chirman */}
					<div className="d-flex justify-content-evenly">
						<div className="col-lg-4 mb-4">
							<div className="text-center">
								<Image src={Chairman} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Iftekhar Ahmed Tipu</h2>
								<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
							</div>
						</div>
						<div className="col-lg-4 mb-4">
							<div className="text-center">
								<Image src={Chairman2} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Mrs. Nilufar Ahmed</h2>
								<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-evenly">
						<div className="col-lg-4 mb-4">
							<div className="text-center">
								<Image src={Chairman3} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Iftekhar Ahmed Tipu</h2>
								<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
							</div>
						</div>
						<div className="col-lg-4 mb-4">
							<div className="text-center">
								<Image src={Chairman4} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Mrs. Nilufar Ahmed</h2>
								<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
							</div>
						</div>
						<div className="col-lg-4 mb-4">
							<div className="text-center">
								<Image src={Chairman5} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Mrs. Nilufar Ahmed</h2>
								<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
							</div>
						</div>
					</div>

					<h1 className="text-capitalize font-40 fw-bold text-center py-4 font-inter">leadership team</h1>
					<div className="d-flex justify-content-center">
						<div className="col-lg-4 mb-4">
							<div className="text-center">
								<Image src={Leader} alt="" className="rounded leadership-team" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Iftekhar Ahmed Tipu</h2>
								<p className="position-relative pt-1">Chairman, IFAD Group</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamOne} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Shejuti A. Ahmed</h2>
								<p className="position-relative pt-1">Group Human Resource Director</p>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamTwo} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Mahbub Baset</h2>
								<p className=" position-relative pt-1">Chief Operating Officer</p>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamThree} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Shejuti A. Ahmed</h2>
								<p className="pt-1">Group Human Resource Director</p>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamFour} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Mahbub Baset</h2>
								<p className=" pt-1">Chief Operating Officer</p>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamFive} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Shejuti A. Ahmed</h2>
								<p className="pt-1">Group Human Resource Director</p>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamSix} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Mahbub Baset</h2>
								<p className="pt-1">Chief Operating Officer</p>
							</div>
						</div>

						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamSeven} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Shejuti A. Ahmed</h2>
								<p className="pt-1">Group Human Resource Director</p>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-center">
								<Image src={TeamEight} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Mahbub Baset</h2>
								<p className="pt-1">Chief Operating Officer</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BoardOfDirectors;
