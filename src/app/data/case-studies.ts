// src/data/case-studies.ts
export const caseStudies: CaseStudy[] = [
	{
		id: "zerofill-machines",
		title: "ZeroFill Machines",
		client: "Unilever",
		thumbnail: "/case-studies/zerofill-2.jpeg",
		background:
			"Unilever's manufacturing facilities required a more efficient way to handle product filling operations. The existing manual processes were leading to inconsistencies in product quantities and significant wastage. As a global leader in consumer goods, maintaining precise control over product quantities while ensuring high-speed operations was crucial for their business efficiency.",
		problem:
			"Traditional filling machines were causing significant product wastage and operational inefficiencies. The manual calibration process was time-consuming and prone to errors, leading to inconsistent fill levels. This resulted in product wastage, increased production costs, and potential compliance issues with product weight regulations.",
		solution: {
			text: "We implemented state-of-the-art ZeroFill technology that utilizes advanced sensors and precise control mechanisms. The system combines real-time weight monitoring with adaptive filling algorithms to ensure accurate product dispensing. The solution includes automated calibration features and predictive maintenance capabilities to minimize downtime.",
			image1: "/case-studies/zerofill-1.jpeg",
			image2: "/case-studies/zerofill-2.jpeg",
		},
		impact: [
			{
				headline: "Reduced Wastage",
				description:
					"Achieved 99.9% filling accuracy, reducing product wastage by 75%",
			},
			{
				headline: "Increased Speed",
				description:
					"Improved filling speed by 40% while maintaining precision",
			},
			{
				headline: "Cost Savings",
				description:
					"Generated annual savings of $2.5M through improved efficiency",
			},
		],
		readTime: "5 min read",
	},
	{
		id: "people-surveillance",
		title: "People Surveillance",
		client: "Bank of Abu Dhabi (FAB)",
		thumbnail: "/case-studies/ps-1.jpeg",
		background:
			"First Abu Dhabi Bank (FAB), the UAE's largest bank, needed to enhance its security infrastructure across multiple branches. The existing surveillance system lacked intelligent monitoring capabilities and real-time threat detection, making it challenging to ensure comprehensive security coverage for their high-value facilities.",
		problem:
			"The bank's traditional surveillance system relied heavily on manual monitoring, making it difficult to track suspicious activities across multiple locations simultaneously. The lack of automated threat detection led to delayed response times and increased security risks. Additionally, the system struggled with accurate facial recognition in diverse lighting conditions.",
		solution: {
			text: "We developed and implemented an AI-powered surveillance system with advanced facial recognition, behavior analysis, and real-time alert capabilities. The solution integrates multiple camera feeds with machine learning algorithms to detect suspicious activities, unauthorized access, and potential security threats. The system includes a centralized monitoring dashboard with instant alert mechanisms for security personnel.",
			image1: "/case-studies/ps-1.jpeg",
			image2: "/case-studies/ps-2.jpeg",
		},
		impact: [
			{
				headline: "Enhanced Security",
				description:
					"Reduced security incidents by 85% through proactive threat detection",
			},
			{
				headline: "Faster Response",
				description:
					"Decreased average response time to security events by 70%",
			},
			{
				headline: "Operational Efficiency",
				description:
					"Reduced security personnel requirements by 30% while improving coverage",
			},
		],
		readTime: "6 min read",
	},
	{
		id: "automatic-alert-system",
		title: "Automatic Alert System",
		client: "BPCL",
		thumbnail: "/case-studies/alert.jpeg",
		background:
			"Bharat Petroleum Corporation Limited (BPCL) sought to modernize their refinery operations with an automated alert system. The manual monitoring of critical parameters and delayed response to anomalies were affecting operational efficiency and safety standards.",
		problem:
			"The existing monitoring system required constant manual supervision and lacked predictive capabilities. This led to delayed responses to critical situations, increased risk of equipment failure, and potential safety hazards. The absence of real-time alerts meant that issues were often discovered after they had already escalated.",
		solution: {
			text: "We implemented an IoT-based automatic alert system that continuously monitors critical parameters across the refinery. The solution uses advanced analytics to predict potential issues before they occur and automatically triggers appropriate alerts to relevant personnel. The system includes mobile notifications, escalation protocols, and detailed incident logging for compliance purposes.",
			image1: "/case-studies/alert.jpeg",
			image2: "/case-studies/alert-2.jpeg",
		},
		impact: [
			{
				headline: "Improved Safety",
				description:
					"Reduced critical incidents by 92% through early detection",
			},
			{
				headline: "Faster Resolution",
				description: "Decreased average incident resolution time by 65%",
			},
			{
				headline: "Cost Reduction",
				description: "Saved ₹15 Cr annually in prevented equipment damage",
			},
		],
		readTime: "5 min read",
	},
	{
		id: "automatic-weight-punching",
		title: "Automatic Weight Punching",
		client: "BPCL",
		thumbnail: "/case-studies/wp-1.jpeg",
		background:
			"BPCL's loading terminals required an automated system for accurate weight measurement and recording. The manual weight punching process was time-consuming and prone to human errors, affecting the efficiency of their distribution operations.",
		problem:
			"Manual weight recording was causing significant delays in vehicle processing and data entry errors. The process required multiple personnel at different points, leading to increased operational costs and inconsistencies in weight records. This affected billing accuracy and compliance reporting.",
		solution: {
			text: "We developed an automated weight punching system that integrates with weighbridge equipment and BPCL's ERP system. The solution includes automatic vehicle recognition, weight capture, and data synchronization. The system features real-time data validation, exception handling, and comprehensive reporting capabilities.",
			image1: "/case-studies/wp-1.jpeg",
			image2: "/case-studies/wp-2.jpeg",
		},
		impact: [
			{
				headline: "Processing Speed",
				description: "Reduced vehicle processing time by 75%",
			},
			{
				headline: "Error Reduction",
				description:
					"Eliminated manual data entry errors, achieving 100% accuracy",
			},
			{
				headline: "Efficiency Gain",
				description: "Increased daily vehicle throughput by 60%",
			},
		],
		readTime: "4 min read",
	},
	{
		id: "leakage-detection",
		title: "Leakage Detection in Water Bed",
		client: "BPCL",
		thumbnail: "/case-studies/ld-1.jpeg",
		background:
			"BPCL needed an advanced system to detect and prevent water bed leakages in their storage facilities. Traditional inspection methods were inefficient and often failed to detect leaks before significant damage occurred.",
		problem:
			"Conventional leak detection methods were unreliable and time-consuming, leading to delayed identification of potential leaks. This resulted in environmental risks, product losses, and costly repairs. Manual inspections were also challenging due to the size and complexity of storage facilities.",
		solution: {
			text: "We implemented an innovative leak detection system using advanced sensors and machine learning algorithms. The solution provides continuous monitoring of water bed integrity through pressure sensors, acoustic detection, and thermal imaging. The system includes predictive maintenance capabilities and automated emergency response protocols.",
			image1: "/case-studies/ld-1.jpeg",
			image2: "/case-studies/ld-2.jpeg",
		},
		impact: [
			{
				headline: "Early Detection",
				description: "Identified 100% of leaks before critical damage occurred",
			},
			{
				headline: "Environmental Safety",
				description: "Reduced environmental incidents by 95%",
			},
			{
				headline: "Maintenance Savings",
				description:
					"Decreased repair costs by 70% through preventive detection",
			},
		],
		readTime: "5 min read",
	},
	{
		id: "smart-scanner",
		title: "Smart Scanner",
		client: "FAB",
		thumbnail: "/case-studies/ss-1.jpeg",
		background:
			"First Abu Dhabi Bank required a sophisticated document scanning and processing system to streamline their customer onboarding and transaction processes. The existing manual document handling was creating bottlenecks in their operations.",
		problem:
			"Manual document processing was time-consuming and error-prone, leading to delays in customer service and increased operational costs. The lack of automated verification capabilities also posed compliance risks and security concerns.",
		solution: {
			text: "We developed a smart scanning solution with advanced OCR capabilities and AI-powered document verification. The system automatically extracts and validates information from various document types, integrates with the bank's existing systems, and provides comprehensive audit trails for compliance purposes.",
			image1: "/case-studies/ss-1.jpeg",
			image2: "/case-studies/ss-2.jpeg",
		},
		impact: [
			{
				headline: "Processing Speed",
				description: "Reduced document processing time by 90%",
			},
			{
				headline: "Accuracy",
				description: "Achieved 99.9% accuracy in data extraction",
			},
			{
				headline: "Cost Efficiency",
				description: "Reduced operational costs by 60%",
			},
		],
		readTime: "4 min read",
	},
];
