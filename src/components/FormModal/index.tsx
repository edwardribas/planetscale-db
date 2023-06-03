"use client";

import { addJob, updateJob } from "@/api/controller";
import styles from './FormModal.module.scss';
import { InputBoxProps } from "./FormModal.types";
import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "@/contexts/ModalContext";
import { AddJobInterface } from "@/api/models";

const InputBox = ({
	label,
	name,
	defaultValue,
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
					defaultValue={defaultValue || ""}
					maxLength={maxLength}
				/>
			)}

			{type !== "textarea" && (
				<input
					autoComplete="off"
					type={type}
					id={name}
					step={0.01}
					defaultValue={defaultValue || ""}
					name={name}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			)}
		</fieldset>
	)
}

export const FormModal = () => {
	const {modalContextInfo, setModalContextInfo} = useContext(ModalContext);
	const formRef = useRef<HTMLFormElement>(null);

	const backdropClassName = modalContextInfo.active
		? `${styles.backdrop} ${styles.active}`
		: styles.backdrop

	const handleSubmit = async (formData: FormData) => {
		const inputNames = ['jobName', 'jobCountry', 'jobWage', 'jobDesc'];
		
		const [
			name,
			country,
			wage,
			description
		] = inputNames.map(item => formData.get(item)?.valueOf().toString().trim());

		setModalContextInfo({
			active: false,
			mode: modalContextInfo.mode,
		});

		if (!name || !country || !wage) return;

		const newJobData: AddJobInterface = {
			name: name,
			country: country,
			wage: +Number(wage).toFixed(2),
			description: description || null
		}
		
		if (modalContextInfo.mode === "add") {
			await addJob(newJobData);
		} else {
			if (!modalContextInfo.currentData?.id) return;

			await updateJob({
				id: modalContextInfo.currentData.id,
				data: newJobData,
			})
		}

		formRef.current?.reset();
	}

	return (
		<div className={backdropClassName}>
			<div className={styles.modal}>
				<h2>
					{modalContextInfo.mode === "add"
						? "Adding a new offer"
						: "Editing an existing offer"
					}
				</h2>

				<form action={handleSubmit} ref={formRef}>
					<InputBox
						label="Job's title"
						name="jobName"
						placeholder="Enter the job's title"
						defaultValue={modalContextInfo.currentData?.data.name}
						type="text"
					/>

					<InputBox
						label="Country"
						name="jobCountry"
						defaultValue={modalContextInfo.currentData?.data.country}
						placeholder="Enter the job's country"
						type="text"
					/>

					<InputBox
						label="Wage"
						name="jobWage"
						defaultValue={modalContextInfo.currentData?.data.wage}
						placeholder="Enter the job's wage"
						type="text"
						maxLength={10}
					/>

					<InputBox
						label="Description"
						name="jobDesc"
						defaultValue={modalContextInfo.currentData?.data.description ?? ""}
						placeholder="Enter the job's description"
						type="textarea"
						maxLength={255}
					/>

					<fieldset className={styles.buttons}>
						<button>
							Save changes
						</button>
						
						<button
							type='button'
							onClick={() => setModalContextInfo({
								active: false,
								mode: modalContextInfo.mode,
							})}	
						>
							Cancel
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	)
}