import { motion } from 'motion/react';
import { LayoutDashboard, DollarSign, BookOpen, Users, Bell, GraduationCap, ArrowRight } from 'lucide-react';
import cap5 from '../../assets/cap5.jpg';
import cap6 from '../../assets/cap6.jpg';
import cap7 from '../../assets/cap7.jpg';
import './ProductCardsSection.css';

const products = [
	{
		id: 'admin',
		title: 'Dashboard Administrateur',
		description:
			'Gérez toute l\'école depuis un tableau de bord centralisé. Élèves, enseignants, finances et emploi du temps.',
		buttonText: 'Découvrir le Dashboard',
		image: cap5,
		imageAlt: 'Dashboard Administrateur',
		imageFit: 'contain' as const,
		imageMaxWidth: 520,
		imagePadding: 18,
		imagePosition: 'center',
		badges: [
			{ icon: LayoutDashboard, position: 'top-4 left-4' },
			{ icon: DollarSign, position: 'bottom-4 right-4' },
		],
	},
	{
		id: 'teacher',
		title: 'Application Enseignant',
		description:
			'Présences intelligentes, notes, devoirs et syllabus — tout ce dont l\'enseignant a besoin sur mobile.',
		buttonText: "Découvrir l'App Enseignant",
		image: cap6,
		imageAlt: 'Application Enseignant',
		imageFit: 'contain' as const,
		imageMaxWidth: 500,
		imagePadding: 18,
		imagePosition: 'center',
		badges: [
			{ icon: BookOpen, position: 'top-4 right-4' },
			{ icon: Users, position: 'bottom-4 left-4' },
		],
	},
	{
		id: 'parent',
		title: 'Application Parent',
		description:
			'Suivez la scolarité de votre enfant en temps réel. Notes, absences et actualités scolaires.',
		buttonText: "Découvrir l'App Parent",
		image: cap7,
		imageAlt: 'Application Parent',
		imageFit: 'contain' as const,
		imageMaxWidth: 510,
		imagePadding: 18,
		imagePosition: 'center',
		badges: [
			{ icon: Bell, position: 'top-4 left-4' },
			{ icon: GraduationCap, position: 'bottom-4 right-4' },
		],
	},
];

export function ProductCardsSection() {
	return (
		<section className="os-product-section py-20 px-6">
			<div className="max-w-[1200px] mx-auto">
				{/* Section Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="os-product-title"
				>
					Nos Applications
				</motion.h2>

				{/* 3 Product Cards */}
				<div className="os-product-grid">
					{products.map((product) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -8, scale: 1.02 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
							className="os-card"
						>
							{/* Card Top - Screenshot Area */}
							<div
								className="os-media"
								style={{
									padding: `${product.imagePadding}px`,
								}}
							>
								<img
									src={product.image}
									alt={product.imageAlt}
									className="os-mediaImage os-mediaImage--contained"
									style={{
										objectFit: product.imageFit,
										objectPosition: product.imagePosition,
										maxWidth: `${product.imageMaxWidth}px`,
										margin: '0 auto',
										borderRadius: '14px',
										boxShadow: '0 14px 30px rgba(0,0,0,0.10)',
										background: 'transparent',
									}}
								/>

								{/* Soft gradient for readability */}
								<div className="os-mediaOverlay" />

								{/* Floating Icon Badges (equal circles) */}
								{product.badges.map((badge, i) => (
									<div key={i} className={`os-badge ${badge.position}`}>
										<badge.icon size={18} className="os-badgeIcon" />
									</div>
								))}
							</div>

							{/* Card Bottom - Text Area */}
							<div className="os-cardBody">
								<h3 className="os-cardTitle">{product.title}</h3>
								<p className="os-cardDesc">{product.description}</p>

								<div className="os-cardFooter">
									<button className="os-cardCta">
										{product.buttonText}
										<ArrowRight size={16} />
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
