import { formData } from "../Form";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const FormPlan = () => {
	const navigate = useNavigate(); // React Router navigation hook
	const [formDic, setFormDic] = useState({}); // Store form data

	const formAnswers = (event) => {
		event.preventDefault();

		let updatedFormDic = {};
		let flag = true;
		formData.forEach((data) => {
			updatedFormDic[data.label] = event.target[data.label]?.value || "";
			console.log(event.target[data.label]?.value);
			if (event.target[data.label]?.value == "") {
				flag = false;
			}
		});

		if (!flag) {
			alert("Please Fill all options");
			return;
		}
		setFormDic(updatedFormDic);
		navigate("/result", {
			state: {
				form: updatedFormDic,
			},
		});
	};

	return (
		<div className="repeat-bg">
			<div className="flex flex-row justify-center items-cente w-fit px-6 md:px-20 py-12 bg-white shadow-primary shadow-2xl mx-auto z-20 relative">
				<form onSubmit={formAnswers}>
					<h1 className="text-center pt-4 text-primary font-Playfair text-xl font-semibold uppercase tracking-wider">
						Create Your Ideal Diet Plan...
					</h1>
					{formData.map((data) => {
						return (
							<div key={data.id} className="flex flex-col pt-8 ">
								<label className="text-primary font-Playfair text-lg  font-bold">
									{data.label}
								</label>
								<select
									className="mt-1 p-2 text-sm font-Playfair font-medium border border-primary-400 rounded-lg h-10 shadow-md focus:ring-primary focus:border-primary"
									name={data.label}
								>
									<option value={""}>-- Select an Option --</option>
									{data.options.map((opt) => (
										<option key={opt} value={opt} className="font-Playfair">
											{opt}
										</option>
									))}
								</select>
							</div>
						);
					})}
					<div className="flex justify-center mt-6">
						<button className="bg-[#80ED99] px-7 py-2  rounded-md font-semibold hover:text-white duration-300 hover:bg-primary font-Playfair">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
FormPlan.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default FormPlan;
