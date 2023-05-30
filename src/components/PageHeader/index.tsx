"use client";

import { CgDatabase } from "react-icons/cg"
import { FormModal } from "../FormModal"
import styles from './PageHeader.module.scss';
import { useEffect, useState } from "react";

export const PageHeader = () => {
	const [showFormModal, setShowFormModal] = useState(false);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.title}>
					<span>
						<CgDatabase/>
					</span>
					<h2>PlanetScale DB</h2>
				</div>

				<button
					onClick={() => setShowFormModal(!showFormModal)}
				>
					New offer
				</button>
			</header>

			<FormModal
				showFormModal={showFormModal}
				setShowFormModal={setShowFormModal}
			/>
		</>
	)
}