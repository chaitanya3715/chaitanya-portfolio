// import { motion } from 'framer-motion';

// export default function About() {
//   const certifications = [
//     {
//       name: "AWS Certified Solutions Architect",
//       issuer: "Amazon Web Services",
//       date: "2023",
//       link: "#"
//     },
//     {
//       name: "Meta Frontend Developer",
//       issuer: "Meta",
//       date: "2023",
//       link: "#"
//     },
//     {
//       name: "Google Cloud Professional",
//       issuer: "Google",
//       date: "2023",
//       link: "#"
//     }
//   ];

//   return (
//     <div className="min-h-screen pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
//                 Background
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 [Your background story and professional journey]
//               </p>
              
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
//                 Education
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 [Your educational background]
//               </p>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-6"
//               >
//                 <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
//                   Resume
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6">
//                   Download my resume to learn more about my experience, skills, and educational background.
//                 </p>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href="/path-to-your-resume.pdf"
//                   className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
//                   download
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                     />
//                   </svg>
//                   Download Resume
//                 </motion.a>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
//                 Certifications
//               </h2>
//               <div className="space-y-4">
//                 {certifications.map((cert, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 + index * 0.1 }}
//                     className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                   >
//                     <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
//                     <p className="text-gray-600 dark:text-gray-300 text-sm">
//                       {cert.issuer} • {cert.date}
//                     </p>
//                     <a
//                       href={cert.link}
//                       className="text-primary hover:text-secondary text-sm inline-block mt-2"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Certificate →
//                     </a>
//                   </motion.div>
//                 ))}
//               </div>

//               <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800 dark:text-gray-200">
//                 Skills
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
//                     Frontend
//                   </h3>
//                   <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
//                     <li>React</li>
//                     <li>JavaScript</li>
//                     <li>HTML/CSS</li>
//                     <li>Tailwind CSS</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
//                     Backend
//                   </h3>
//                   <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
//                     <li>Node.js</li>
//                     <li>Python</li>
//                     <li>SQL</li>
//                     <li>MongoDB</li>
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import { motion } from 'framer-motion';


export default function About() {
  const certifications = [
    {
      name: "Java & DSA Certificate",
      issuer: "Elshad Karimov",
      date: "2024",
      link: "https://drive.google.com/file/d/1tUzzXX-rJB7aqcPYFvCXoVn-OVIpIw4j/view"
    },
    {
      name: "Java & Networking Certificate",
      issuer: "OCSALY Academy",
      date: "2023",
      link: "https://drive.google.com/file/d/1WULoeEhegZYW5R4VcQsOwmq-CAJELsJm/view"
    },
    // {
    //   name: "Web Development Certificate",
    //   issuer: "Google",
    //   date: "2023",
    //   link: "#"
    // },
    // {
    //   name: "AndroidsDevelopment Certificate",
    //   issuer: "Google",
    //   date: "2023",
    //   link: "#"
    // }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
             <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Background
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                I am a motivated fresher with a strong foundation in software development and a passion for building innovative solutions. Through academic <strong> <a 
                href="/projects" 
                className="text-blue-600 hover:underline dark:text-blue-400">
                projects
                </a></strong>, I have gained hands-on experience with technologies like Node.js, React, MongoDB, and Socket.IO. These experiences have sharpened my problem-solving skills. I am eager to contribute to dynamic teams and grow in a challenging environment by applying my knowledge and further developing my expertise in Computer Science Field.
              </p>


              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Education
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Bachelor of Technology - <strong>(7.76 Cgpa)</strong>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Computer Science and Engineering</p>
                    <p className="text-gray-600 dark:text-gray-400">Indian Institute of Information Technology Pune</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">2021 - present</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Senior Secondary School (Class 12) - <strong>(98%)</strong>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Zila Parishad Junior Science College </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">2019</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Secondary School (Class 10) - <strong>(93.80%)</strong>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Zila Parishad High School</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400"> 2017</p>
                </div>
              </div>
              <br />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-6"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                  Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  View my resume to learn more about my experience, skills, and educational background.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/12mQO8EwCUa4cUscIXjm67C5NiTABCHzi/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5c-5.5 0-10 7-10 7s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 10a3 3 0 100-6 3 3 0 000 6z"
                    />
                    </svg>
                    View Resume
                  </motion.a>
                </div>
                
              </motion.div>
            </motion.div>
            

            {/* Right Section (Certifications and Skills) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                    <a
                      href={cert.link}
                      className="text-primary hover:text-secondary text-sm inline-block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate →
                    </a>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800 dark:text-gray-200">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Frontend
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Backend
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Languages
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Java, C++, Python, JavaScript, Kotlin.</li>
                  </ul>
                  
                </div>
                <br />
                <div>
                  <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Core Subjects
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Computer Networks</li>
                    <li>DBMS</li>
                    <li>Operating Systems</li>
                    <li>OOPS</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                   Interested Fields
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Software Engineering</li>
                    <li>Machine Learning</li>
                    <li>Gen AI</li>
                    <li>DevOps</li>
                    <li>Android Developement</li>
                    

                  </ul>
                </div>
               
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
