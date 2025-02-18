import Homeimg from "../assets/Images/Homeimg.jpeg";
import About from "./About";
import "./Home.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Contact from "./Contact";

const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	// useEffect(() => {
	// 	if (location.hash) {
	// 		const element = document.getElementById(location.hash.replace("#", ""));
	// 		if (element) {
	// 			element.scrollIntoView({ behavior: "smooth" });
	// 		}
	// 		navigate("/", {
	// 			replace: false,
	// 		});
	// 	}
	// }, [location.hash]);
	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.replace("#", ""));
			if (element) {
				const offset = 90; // Adjust the offset value as needed
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - offset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
			navigate("/", {
				replace: false,
			});
		}
	}, [location.hash]);
	return (
		<div className="overflow-hidden">
			<div className="repeat-bg ">
				<div className="md:grid md:grid-cols-2 place-items-center md:mx-auto md:py-14 z-20 relative md:h-fit h-screen">
					<div className="">
						<img
							className=" hidden md:block md:w-[400px] md:h-[400px] border-8 md:border-primary"
							src={Homeimg}
							alt=""
						/>
					</div>
					<div className="flex flex-col gap-8 md:gap-3 items-center justify-center h-screen md:h-fit md:flex-col  md:items-start font-Playfair">
						<div className="text-5xl text-center md:text-left md:text-7xl text-[#15364b] uppercase leading-[1.15]">
							Craft a Diet That Fits Your Lifestyle !
						</div>
						<div>
							<button
								onClick={() => navigate("/Form")}
								className="bg-[#80ED99] px-7  py-2 m-3 rounded-md font-semibold hover:bg-[#15364b] hover:text-white duration-300 font-Playfair"
							>
								Let&apos;s build
							</button>
						</div>
					</div>
				</div>
			</div>
			<About />
			<Contact />
		</div>
	);
};

export default Home;
