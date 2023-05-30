import { JobWrapper } from '@/components/JobWrapper';
import styles from './home.module.scss';
import { getJobs } from '@/api/controller';
import { TbBrandPrisma, TbBrandPlanetscale } from 'react-icons/tb';
import { SiNextdotjs } from 'react-icons/si';
import { PageHeader } from '@/components/PageHeader';

export const Home = async () => {
	const jobs = await getJobs();

	return (
		<main className={styles.main}>
			<PageHeader/>

			{!jobs.length && (
				<p>No jobs returned.</p>
			)}

			<div className={styles.container}>
				{jobs?.map(job => (
					<JobWrapper
						key={job.id}
						{...job}
					/>
				))}
			</div>

			<div className={styles.disclaimer}>
				<p>A simple CRUD application using Next <SiNextdotjs/>, Prisma <TbBrandPrisma/> and PlanetScale <TbBrandPlanetscale/>.</p>
			</div>
		</main>
	)
}

export default Home;