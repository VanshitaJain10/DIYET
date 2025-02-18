import { NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	let links = [
		{ name: "Home", to: "/" },
		{ name: "About", to: "/#about" },
		{ name: "Form", to: "/form" },
		{ name: "Contact", to: "/#contact" },
	];
	// const handleclick = () => {
	// 	console.log("cllicled");
	// };

	return (
		<div className="flex shadow-lg md:px-20 py-4 text-primary font-bold font-Playfair tracking-wider z-50 relative bg-[#80ED99]  ">
			<Leaf className="ml-2" />
			<div className="md:px-3 px-1">DIYET</div>
			<div
				className="ml-auto mr-4 md:hidden cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <X /> : <Menu />}
			</div>

			<div
				className={`top-14 bg-[#80ED99] w-full md:w-fit px-3 py-3 gap-2 md:p-0 flex flex-col md:flex-row md:gap-6 absolute md:static md:ml-auto ${
					isOpen ? " block " : "hidden md:flex"
				}`}
			>
				{links.map((link) => (
					<div
						key={link.name}
						onClick={() => setIsOpen(false)}
						className=" hover:scale-110 duration-300"
					>
						<NavLink to={link.to}>{link.name}</NavLink>
					</div>
				))}
			</div>
		</div>
	);
};

export default Navbar;
