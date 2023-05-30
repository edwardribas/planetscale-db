"use client";

import { addJob } from "@/api/controller";
import styles from './FormModal.module.scss';
import { useModalActiveContext } from "@/contexts/ModalActiveContext";

export const FormModal = () => {
	const { setShowFormModal, showFormModal} = useModalActiveContext();

	return (
		<div className={styles.backdrop}>
			<div className={showFormModal ? `${styles.active} ${styles.modal}` : styles.modal}>
				<form action={addJob}>
					<fieldset>
						<label htmlFor="jobName">Job's title</label>
						<input
							type="text"
							id="jobName"
							name='jobName'
							placeholder="Enter the job's title"
						/>
					</fieldset>

					<fieldset>
						<label htmlFor="jobCountry">Country</label>
						<input
							type="text"
							id="jobCountry"
							name='jobCountry'
							placeholder="Enter the job's country"
						/>
					</fieldset>

					<fieldset>
						<label htmlFor="jobWage">Wage</label>
						<input
							type="number"
							id="jobWage"
							name='jobWage'
							placeholder="Enter the job's wage"
						/>
					</fieldset>

					<fieldset>
						<label htmlFor="jobDesc">Description</label>
						<textarea
							id="jobDesc"
							name='jobDesc'
							placeholder="Enter the job's description"
							maxLength={255}
						/>
					</fieldset>

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