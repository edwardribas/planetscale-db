"use client";

import { CgDatabase } from "react-icons/cg"
import { FormModal } from "../FormModal"
import styles from './PageHeader.module.scss';
import { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext";

export const PageHeader = () => {
	const { modalContextInfo, setModalContextInfo } = useContext(ModalContext);

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
					onClick={() => setModalContextInfo({
						active: !modalContextInfo.active && true,
					mode: !modalContextInfo.active ? "add" : modalContextInfo.mode,
					})}
				>
					New offer
				</button>
			</header>

			<FormModal/>
		</>
	)
}