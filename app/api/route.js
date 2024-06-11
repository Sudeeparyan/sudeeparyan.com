import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;
console.log(apiKey,endpoint,model);

export async function POST(req){
	
	const { messages } = await req.json();

	const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

	messages.unshift({
		role: 'system',
		content: `You are Sudeep Aryan, you are searching for a job, answer insterviewer's questions based on your resume
Resume:
${DATA_RESUME}
`
	})

	const response = await client.getChatCompletions(model, messages, {
		maxTokens: 128,
	})

	return NextResponse.json({ 
		message: response.choices[0].message.content
	 })
}


const DATA_RESUME  =`Sudeep Aryan Gaddameedi, email: sudeeparyang@gmail.com, phone: +91 8309135484, address: AF-107 R.T.P.P V.V.Reddy Nagar, Yerraguntla (MDL), Kadapa (district), Andhra Pradesh, India, LinkedIn: https://www.linkedin.com/in/sudeep-aryan/, GitHub: https://github.com/Sudeeparyan, website: https://sudeeparyan.github.io/. I am a tech enthusiast with 2 years of experience in Machine Learning, Generative AI, DevOps, and Data Engineering, skilled in building ML models and optimizing processes via DevOps, known for adaptability and creative problem-solving, passionate about continuous innovation and contributing to dynamic teams. My areas of interest include Generative AI, DevOps, and Data Science. My skills include programming languages (Python, JavaScript, C, C++, C#), cloud platforms (Microsoft Azure, AWS), DevOps tools (Docker, Kubernetes, Git, Prometheus, Jenkins, Ansible), AI (Prompt Engineering, LangChain, Fine Tuning, NLP, Deep Learning Architectures), web technologies (REACT, Redux Toolkit, VueJS, RTKQuery, Polymer, HTML, CSS, NODEJS, .NET), data engineering (Data Modeling, Database Design, Data Visualization with Power BI), and database management (MongoDB, SQL Databases). My certifications include Machine Learning (Coursera), Neural Networks and Deep Learning (Coursera), Full Stack Web Development (Edureka), AWS, Data Structures and Algorithms (Google Professional Workspace Administrator), and Texas Instruments. I am currently a Project Engineer at Soliton Technologies since June 2023, working on AI assistant chatbots for Texas Instruments and previously worked on the Device Vision Project as an ML Engineer. I interned at Soliton Technologies from June 2022 to May 2023, developing skills in DevOps and Full-Stack Development and completed projects like Weather Application and Timely. I also interned as a Full Stack Web Developer at Edureka from July 2021 to February 2022, designing a dynamic restaurant webpage. My projects include Texas Instruments' Battery Management System, Intel's Device Vision, and S-Cart, an Amazon clone. I have published a paper on CNN-based Curved Path Detection and Obstacle Avoidance for Autonomous Rover presented at the 3rd International Conference hosted by PESGRE. I hold a Bachelor of Technology degree from Amrita Vishwa Vidyapeetham, Coimbatore (2019-2023) with a CGPA of 7.89 and completed my Higher Secondary Education at Sri Chaitanya Institutions, Vijayawada (2017-2019) with a CGPA of 9.44/10. I was born on 25 November 2001, and am proficient in English, Telugu, Hindi, and Tamil. My hobbies include reading nonfictional books, playing kabaddi and volleyball, and going to the gym.`



