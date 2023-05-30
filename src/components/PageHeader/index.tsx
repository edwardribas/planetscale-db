"use client";

import { useModalActiveContext } from "@/contexts/ModalActiveContext"
import { CgDatabase } from "react-icons/cg"
import { FormModal } from "../FormModal"
import styles from './PageHeader.module.scss';

export const PageHeader = () => {
	const { setShowFormModal, showFormModal} = useModalActiveContext()
	
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
					onClick={() => setShowFormModal(true)}
				>
					New offer
				</button>
			</header>

			<FormModal/>
		</>
	)
}