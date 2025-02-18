import { createPromt } from "./promt";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const Output = () => {
	const location = useLocation();
	console.log(location.state);

	const [data, setData] = useState(null);
	const handleSubmit = async (formData) => {
		const result = await createPromt(formData); // Fetch API data
		setData(result); // Update state
	};

	useEffect(() => {
		if (location.state?.form) {
			handleSubmit(location.state?.form);
		}
	}, [location]);

	if (!data) {
		return (
			<div
				className="fixed inset-0 flex items-center justify-center bg-white"
				style={{ top: "20px" }}
			>
				<div className="w-12 h-12 border-4 border-dashed border-primary rounded-full animate-spin"></div>
			</div>
		);
	}

	return (
		<div className="repeat-bg ">
			<div className="z-20 relative px-6 md:px-44 flex flex-col font-Playfair gap-3 text-[#15364b] py-10">
				<div className=" font-bold text-xl  underline underline-offset-2">
					Gist :
				</div>
				<div className="font-medium">
					<ul>
						<li>Activity Level: {data.Gist?.ActivityLevel}</li>
						<li>Dietary Restrictions: {data.Gist?.DietaryRestrictions}</li>
						<li>Goal: {data.Gist?.Goal} </li>
						<li> Medical Condition :{data.Gist?.MedicalConditions}</li>
						<li>Meal Style: {data.Gist?.MealStyle}</li>
					</ul>
				</div>
				<div className=" font-bold text-xl  underline underline-offset-2">
					Key Considerations :
				</div>
				<div className="font-medium">{data.KeyConsiderations}</div>
				<div className=" font-bold text-xl  underline underline-offset-2">
					Meal Plan :
				</div>
				<div className="font-medium">
					<div>
						<ul>
							<li>Breakfast : {data.MealPlan?.Breakfast}</li>
							<li>Lunch : {data.MealPlan?.Lunch}</li>
							<li>Dinner : {data.MealPlan?.Dinner}</li>
							<li>Snacks : {data.MealPlan?.Snacks}</li>
						</ul>
					</div>
				</div>
				<div className=" font-bold text-xl  underline underline-offset-2">
					Food Alternatives :
				</div>
				<div className="font-medium">{data.FoodAlternatives}</div>
				<div className=" font-bold text-xl  underline underline-offset-2">
					Motivation :
				</div>
				<div className="font-medium">{data.Motivation}</div>
				<div className=" font-bold text-xl  underline underline-offset-2">
					Note :
				</div>
				<div className="font-medium">{data.Note}</div>
				<div className=" font-bold text-xl  underline underline-offset-2">
					Disclaimer :
				</div>
				<div className="font-medium">{data.Disclaimer}</div>
			</div>
		</div>
	);
};
Output.propTypes = {
	data: PropTypes.shape({
		Gist: PropTypes.shape({
			ActivityLevel: PropTypes.string,
			DietaryRestrictions: PropTypes.string,
			Goal: PropTypes.string,
			MedicalConditions: PropTypes.string,
			MealStyle: PropTypes.string,
		}),
		KeyConsiderations: PropTypes.string,
		MealPlan: PropTypes.shape({
			Breakfast: PropTypes.string,
			Lunch: PropTypes.string,
			Dinner: PropTypes.string,
			Snacks: PropTypes.string,
		}),
		FoodAlternatives: PropTypes.string,
		Motivation: PropTypes.string,
		Note: PropTypes.string,
		Disclaimer: PropTypes.string,
	}),
};
export default Output;
