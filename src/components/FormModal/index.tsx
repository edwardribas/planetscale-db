"use client";

import { addJob } from "@/api/controller";
import styles from './FormModal.module.scss';
import { FormModalProps, InputBoxProps } from "./FormModal.types";
import { useRef } from "react";

const InputBox = ({
	label,
	name,
	placeholder,
	type,
	maxLength = 191,
}: InputBoxProps) => {
	return (
		<fieldset>
			<label htmlFor={name}>{label}</label>

			{type === "textarea" && (
				<textarea
					id={name}
					name={name}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			)}

			{type !== "textarea" && (
				<input
					autoComplete="off"
					type={type}
					id={name}
					step={0.01}
					name={name}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			)}
		</fieldset>
	)
}

export const FormModal = ({
	showFormModal,
	setShowFormModal,
}: FormModalProps) => {
	const formRef = useRef<HTMLFormElement>(null);

	const backdropClassName = !showFormModal
		? styles.backdrop
		: `${styles.backdrop} ${styles.active}`;

	const handleSubmit = async (formData: FormData) => {
		const inputNames = ['jobName', 'jobCountry', 'jobWage', 'jobDesc'];
		
		const [
			name,
			country,
			wage,
			description
		] = inputNames.map(item => formData.get(item)?.valueOf().toString().trim());

		const data = {
			name: String(name),
			country: String(country),
			wage: +Number(String(wage)).toFixed(2) || 0,
			description: description || null
		};

		setShowFormModal(false);
		await addJob(data);
		formRef.current?.reset();
	}

	return (
		<div className={backdropClassName}>
			<div className={styles.modal}>
				<h2>Adding a new offer</h2>

				<form action={handleSubmit} ref={formRef}>
					<InputBox
						label="Job's title"
						name="jobName"
						placeholder="Enter the job's title"
						type="text"
					/>

					<InputBox
						label="Country"
						name="jobCountry"
						placeholder="Enter the job's country"
						type="text"
					/>

					<InputBox
						label="Wage"
						name="jobWage"
						placeholder="Enter the job's wage"
						type="text"
						maxLength={10}
					/>

					<InputBox
						label="Description"
						name="jobDesc"
						placeholder="Enter the job's description"
						type="textarea"
						maxLength={255}
					/>

					<fieldset className={styles.buttons}>
						<button>
							Submit offer
						</button>
						
						<button
							type='button'
							onClick={() => setShowFormModal(false)}	
						>
							Cancel
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	)
}