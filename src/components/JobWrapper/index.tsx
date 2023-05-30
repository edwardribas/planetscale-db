"use client";

import { deleteJob } from '@/api/controller';
import styles from './JobWrapper.module.scss';
import { useEffect, useState } from 'react';
import { JobWrapperProps } from './JobWrapper.types';

export const JobWrapper = ({
	country,
	createdAt,
	description,
	name,
	wage,
	id,
}: JobWrapperProps) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const formattedWage = parseFloat(String(wage)).toLocaleString('pt-br', {
		style: "currency",
		currency: "USD",
	})

	const formattedDate = createdAt.toLocaleDateString('en-us', {
		month: 'long',
		day: "2-digit",
		year: "numeric",
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
				<span>{formattedDate}</span>
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
				<button>
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