import { useState } from "react";
import "./Home.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}
		if (!formData.message) newErrors.message = "Message is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const SubmitForm = async () => {
		const formDataPayload = formData;
		formDataPayload["access_key"] = "963ca303-e1be-49e9-8d5f-7e2820ad87dd";

		const json = JSON.stringify(formDataPayload);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
		}
	};
	const handleOnSubmit = async (event) => {
		event.preventDefault(); // Prevent default form submission

		if (validateForm() == false) {
			alert("Wrong data");
			return;
		}

		try {
			await SubmitForm(); // Call the async API function
			setFormData({ name: "", email: "", message: "" }); // Reset form
			alert("Form submitted successfully!");
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("Something went wrong !");
		}
	};

	return (
		<div className="repeat-bg">
			<div
				id="contact"
				className="md:mx-16 p-6 rounded-lg font-Playfair relative z-10"
			>
				<div className="flex flex-col items-center justify-center gap-y-2">
					<div className="text-4xl font-extrabold text-center">Contact Us</div>
					<div className="font-medium pb-5 tracking-wide text-xl text-center md:text-start">
						Any questions or remarks?Just write us a message!
					</div>
				</div>

				<form onSubmit={handleOnSubmit} className="space-y-4">
					<div className=" grid md:grid-cols-2 gap-6 px-10">
						<div>
							<label
								htmlFor="name"
								className="block text-lg font-bold text-gray-700"
							>
								Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="mt-1 block w-full px-3 py-2 border border-[#92b9d2] rounded-md shadow-md focus:outline-none focus:ring-[#4087b3] focus:border-[#4087b3]"
							/>
							{errors.name && (
								<span className="text-sm text-red-500">{errors.name}</span>
							)}
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-lg font-bold text-gray-700"
							>
								Email:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="mt-1 block w-full px-3 py-2 border border-[#92b9d2] rounded-md shadow-md focus:outline-none focus:ring-[#4087b3] focus:border-[#4087b3]"
							/>
							{errors.email && (
								<span className="text-sm text-red-500">{errors.email}</span>
							)}
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-lg font-bold text-gray-700"
							>
								Message:
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								className="mt-1 block w-full px-3 py-2 border border-[#92b9d2] rounded-md shadow-md focus:outline-none focus:ring-[#4087b3] focus:border-[#4087b3]"
								rows="4"
							/>
							{errors.message && (
								<span className="text-sm text-red-500">{errors.message}</span>
							)}
						</div>
					</div>
					<div className=" flex items-center justify-center">
						<button
							type="submit"
							className="bg-[#80ED99] px-7  py-2 m-3 rounded-md font-semibold hover:bg-[#15364b] hover:text-white duration-300 font-Playfair"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
