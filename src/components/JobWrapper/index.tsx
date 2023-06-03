"use client";

import { deleteJob } from '@/api/controller';
import styles from './JobWrapper.module.scss';
import { useContext, useState } from 'react';
import { Jobs } from '@prisma/client';
import { ModalContext } from '@/contexts/ModalContext';

export const JobWrapper = ({
	country,
	createdAt,
	updatedAt,
	description,
	name,
	wage,
	id,
}: Jobs) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const isRoleUpdated = new Date(createdAt).toISOString() !== new Date(updatedAt).toISOString();
	const { modalContextInfo, setModalContextInfo } = useContext(ModalContext);

	const formattedWage = parseFloat(String(wage)).toLocaleString('pt-br', {
		style: "currency",
		currency: "USD",
	})

	const formattedCreatedAt = createdAt.toLocaleDateString('en-us', {
		month: 'long',
		day: "2-digit",
		year: "numeric",
		hour: "numeric",
		minute: "numeric"
	})

	const formattedUpdatedAt = updatedAt.toLocaleDateString('en-us', {
		month: 'long',
		day: "2-digit",
		year: "numeric",
		hour: "numeric",
		minute: "numeric"
	})

	const handleDeleteJob = async () => {
		setIsDeleting(true)
		await deleteJob(id);
	}

	return (
		<div className={styles.job}>
			<h2>{name}</h2>

			<div className={styles.info_label}>
				<b>{country}</b> {" "}
				
				<span>
					Created at {formattedCreatedAt}
				</span>
				
				{isRoleUpdated && 
					<span>Updated at {formattedUpdatedAt}</span>
				}
			</div>


			{description && (
				<p className={styles.description}>
					{description}
				</p>
			)}

			<p className={styles.wage}>
				{formattedWage} <span>/month</span>
			</p>
			
			
			<div className={styles.buttons}>
				<button onClick={() => setModalContextInfo({
					active: !modalContextInfo.active && true,
					mode: !modalContextInfo.active ? "edit" : modalContextInfo.mode,
					currentData: {
						id: id,
						data: { country, description, name, wage, }
					}
				})}>
					Edit
				</button>
				<button onClick={handleDeleteJob}>
					{isDeleting
						? "Deleting..."
						: "Delete"}
				</button>
			</div>
		</div>
	)
}