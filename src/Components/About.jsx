import about from "../assets/Images/about.jpeg";
const About = () => {
	return (
		<section id="about">
			<div className="relative w-full h-screen md:h-[400px] overflow-hidden">
				<img className="w-full h-full object-cover" src={about} alt="" />
				<div className="absolute inset-0 bg-black bg-opacity-70 ">
					<div className="text-white text-center md:pt-14 px-2 md:px-52 flex items-center flex-col h-screen md:h-fit md:text-start justify-center md:items-start md:flex-col gap-y-2 font-Playfair ">
						<div className="text-white  text-7xl font-extrabold">About Us</div>
						<div className="py-6 md:py-0">
							Welcome to DIYET, your personal guide to a healthier lifestyle!
							🌿🥗 Whether you're aiming to lose weight, build muscle , or
							improve overall well-being, our smart planning tool is here to
							guide you.
						</div>
						<div>
							Powered by Gemini AI, we provide tailored meal recommendations
							based on your preferences and goals. No more guesswork—just clear,
							practical advice designed for you!
						</div>
						<div>
							Start your journey today and discover how small changes can lead
							to big results.
						</div>
						<div>Eat well. Live well. Feel amazing.🚀✨ 💚</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
