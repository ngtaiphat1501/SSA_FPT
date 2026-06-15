const QUESTIONS = [
  {
    "id": 1,
    "image": "images/image1.png",
    "question": "Why does the author argue that using AI to do the work instead of the student is problematic?",
    "options": {
      "A": "It violates copyright law automatically",
      "B": "It cheats students out of the learning experience",
      "C": "It reduces the accuracy of AI systems",
      "D": "It increases institutional costs and reduces"
    },
    "answer": "B",
    "answerText": "It cheats students out of the learning experience"
  },
  {
    "id": 2,
    "image": "images/image2.png",
    "question": "Why is it important to evaluate bias in sources?",
    "options": {
      "A": "Bias invalidates all arguments and ideas",
      "B": "Bias helps identify the strongest position to debate",
      "C": "Understanding bias helps interpret information critically",
      "D": "Biased sources should never be used"
    },
    "answer": "C",
    "answerText": "Understanding bias helps interpret information critically"
  },
  {
    "id": 3,
    "image": "images/image3.png",
    "question": "Analytical thinking is especially useful when students need to:",
    "options": {
      "A": "Memorize large amounts of information",
      "B": "Understand complex systems arguments",
      "C": "Express personal opinions creatively",
      "D": "Work under strict time pressure"
    },
    "answer": "B",
    "answerText": "Understand complex systems arguments"
  },
  {
    "id": 4,
    "image": "images/image4.png",
    "question": "According to the chapter, the primary goal of learning is to:",
    "options": {
      "A": "Complete assignments as efficiently as possible using available tools",
      "B": "Distill knowledge and skills so they can be applied in new situations",
      "C": "Memorize large amounts of information for examinations",
      "D": "Reduce cognitive effort through automation and technological support"
    },
    "answer": "B",
    "answerText": "Distill knowledge and skills so they can be applied in new situations"
  },
  {
    "id": 5,
    "image": "images/image5.png",
    "question": "A student finds an article that supports their argument but is written by an anonymous author on a personal blog. Based on Chapter 7, what should the student do first?",
    "options": {
      "A": "use the article because it supports the claim",
      "B": "Evaluate the author's credibility and evidence provided",
      "C": "Replace it with any academic article because journal articles are qualified",
      "D": "Ignore online sources entirely"
    },
    "answer": "B",
    "answerText": "Evaluate the author's credibility and evidence provided"
  },
  {
    "id": 6,
    "image": "images/image6.png",
    "question": "Why does Chapter 7 emphasize defining the problem accurately?",
    "options": {
      "A": "It reduces the number of possible solutions",
      "B": "Incorrect problem definition leads to ineffective solutions",
      "C": "It saves time in implementation",
      "D": "It limits creative thinking"
    },
    "answer": "B",
    "answerText": "Incorrect problem definition leads to ineffective solutions"
  },
  {
    "id": 7,
    "image": "images/image7.png",
    "question": "Which statement best reflects how time management in college differs from high school?",
    "options": {
      "A": "College students have fewer deadlines",
      "B": "College schedules are more structured and require more efforts to follow",
      "C": "College requires students to independently plan and allocate time",
      "D": "Time management is less important in college"
    },
    "answer": "C",
    "answerText": "College requires students to independently plan and allocate time"
  },
  {
    "id": 8,
    "image": "images/image8.png",
    "question": "Analytical thinking involves:",
    "options": {
      "A": "Trusting intuition",
      "B": "Breaking a whole into parts",
      "C": "Following emotions",
      "D": "Avoiding structure"
    },
    "answer": "B",
    "answerText": "Breaking a whole into parts"
  },
  {
    "id": 9,
    "image": "images/image9.png",
    "question": "Effective time management in college is important primarily because it:",
    "options": {
      "A": "Reduces the total number of assignments students receive",
      "B": "Helps prevent a chain reaction of academic problems",
      "C": "AIlows students to finish college more quickly",
      "D": "Eliminates the need for prioritization"
    },
    "answer": "B",
    "answerText": "Helps prevent a chain reaction of academic problems"
  },
  {
    "id": 10,
    "image": "images/image10.png",
    "question": "What is one common reason students procrastinate?",
    "options": {
      "A": "Tasks feel unimportant or overwhelming",
      "B": "Instructors assign unclear deadlines",
      "C": "Students lack intelligence and teamwork",
      "D": "College schedules are too flexible"
    },
    "answer": "A",
    "answerText": "Tasks feel unimportant or overwhelming"
  },
  {
    "id": 11,
    "image": "images/image11.png",
    "question": "Which of the following best describes retrieval in learning?",
    "options": {
      "A": "Re-reading notes repeatedly",
      "B": "Accessing and using stored knowledge when needed",
      "C": "Highlighting important sections of a text",
      "D": "Uploading materials to an AI chatbot"
    },
    "answer": "B",
    "answerText": "Accessing and using stored knowledge when needed"
  },
  {
    "id": 12,
    "image": "images/image12.png",
    "question": "Which step typically comes first in effective problem-solving?",
    "options": {
      "A": "Choosing a solution",
      "B": "Identifying and defining the problem clearly",
      "C": "Evaluating results based on criteria",
      "D": "Implementing a strategy using the pwver of teamwork"
    },
    "answer": "B",
    "answerText": "Identifying and defining the problem clearly"
  },
  {
    "id": 13,
    "image": "images/image13.png",
    "question": "A student struggles with word problems in math because they focus on every detail. Based on analytical thinking principles, what should they do first?",
    "options": {
      "A": "Practice more similar problems without reflection and revision",
      "B": "Identify essential information and ignore irrelevant details",
      "C": "Memorize formulas more frequently",
      "D": "Seek help only after failing exams"
    },
    "answer": "B",
    "answerText": "Identify essential information and ignore irrelevant details"
  },
  {
    "id": 14,
    "image": "images/image14.png",
    "question": "Which action best represents effective problem-solving?",
    "options": {
      "A": "Selecting the first solution that seems reasonable",
      "B": "Ignoring alternative approaches",
      "C": "Evaluating possible solutions before implementation",
      "D": "Avoiding feedback after solving the problem"
    },
    "answer": "C",
    "answerText": "Evaluating possible solutions before implementation"
  },
  {
    "id": 15,
    "image": "images/image15.png",
    "question": "Problem-solving is described as:",
    "options": {
      "A": "Finding the fastest solution available based on A. I suggestion",
      "B": "Applying a structured process to address challenges",
      "C": "using intuition to make decisions",
      "D": "Avoiding complex situations"
    },
    "answer": "B",
    "answerText": "Applying a structured process to address challenges"
  },
  {
    "id": 16,
    "image": "images/image16.png",
    "question": "Procrastination is described as:",
    "options": {
      "A": "A harmless habit with minimal consequences that students usually have",
      "B": "A delay that can trigger multiple academic difficulties",
      "C": "A strategy for managing stress effectively",
      "D": "A result of excessive motivation"
    },
    "answer": "B",
    "answerText": "A delay that can trigger multiple academic difficulties"
  },
  {
    "id": 17,
    "image": "images/image17.png",
    "question": "Communication is best described as:",
    "options": {
      "A": "A simple exchange of spoken words",
      "B": "A one-way transfer of information and signals from sender to receiver",
      "C": "A complex process influenced by context, purpose, and participants",
      "D": "A skill used primarily in professional environments"
    },
    "answer": "C",
    "answerText": "A complex process influenced by context, purpose, and participants"
  },
  {
    "id": 18,
    "image": "images/image18.png",
    "question": "Metacognition is best defined as",
    "options": {
      "A": "Thinking critically about academic content",
      "B": "Awareness and regulation of one's own thinking and learning",
      "C": "Memorizing information efficiently",
      "D": "Monitoring other students' performance"
    },
    "answer": "B",
    "answerText": "Awareness and regulation of one's own thinking and learning"
  },
  {
    "id": 19,
    "image": "images/image19.png",
    "question": "Which condition best supports creative thinking?",
    "options": {
      "A": "Strict adherence to one correct answer",
      "B": "Openness to risk and experimentation",
      "C": "Avoidance of uncertainty",
      "D": "Dependence on authority"
    },
    "answer": "B",
    "answerText": "Openness to risk and experimentation"
  },
  {
    "id": 20,
    "image": "images/image20.png",
    "question": "Which question best helps evaluate the credibility of a source?",
    "options": {
      "A": "Is the information easy to read and interpret?",
      "B": "Does the author have relevant expertise?",
      "C": "Is the source visually appealing?",
      "D": "Does the source confirm personal opinions?"
    },
    "answer": "B",
    "answerText": "Does the author have relevant expertise?"
  },
  {
    "id": 21,
    "image": "images/image21.png",
    "question": "Which of the following best defines time-on-task?",
    "options": {
      "A": "The total time spent thinking about an assignment",
      "B": "The actual time required to complete a specific task",
      "C": "The time available before a deadline",
      "D": "The amount of time scheduled for studying each week"
    },
    "answer": "B",
    "answerText": "The actual time required to complete a specific task"
  },
  {
    "id": 22,
    "image": "images/image22.png",
    "question": "Which of the following best describes \"college culture'?",
    "options": {
      "A": "A fixed set of rules identical across all academic institutions",
      "B": "A system focused only on academic performance and science of knowledge",
      "C": "Shared expectations, language, and norms within higher education",
      "D": "A social environment unrelated to learning"
    },
    "answer": "C",
    "answerText": "Shared expectations, language, and norms within higher education"
  },
  {
    "id": 23,
    "image": "images/image23.png",
    "question": "Which activity best demonstrates metacognitive awareness?",
    "options": {
      "A": "Studying longer hours before exams to aim high grades",
      "B": "Recognizing which study strategies work best for you",
      "C": "Highlighting every paragraph in a textbook",
      "D": "Copying notes from slides"
    },
    "answer": "B",
    "answerText": "Recognizing which study strategies work best for you"
  },
  {
    "id": 24,
    "image": "images/image24.png",
    "question": "Metacognition helps students mainly by:",
    "options": {
      "A": "Increasing intelligence",
      "B": "Making learning automatic",
      "C": "AIlowing learners to adjust strategies intentionally",
      "D": "Reducing academic workload"
    },
    "answer": "C",
    "answerText": "AIlowing learners to adjust strategies intentionally"
  },
  {
    "id": 25,
    "image": "images/image25.png",
    "question": "A student avoids sharing unconventional ideas during group discussions. From a creative thinking perspective, what is the main consequence?",
    "options": {
      "A": "Improved efficiency and diverse forms of idea",
      "B": "Reduced originality and idea generation",
      "C": "Stronger analytical reasoning",
      "D": "Clearer communication"
    },
    "answer": "B",
    "answerText": "Reduced originality and idea generation"
  },
  {
    "id": 26,
    "image": "images/image26.png",
    "question": "Which statement best reflects the authors' view of the college transition?",
    "options": {
      "A": "It is primarily academic and rarely emotional",
      "B": "It is uniform for all students",
      "C": "It involves academic, social, and personal change",
      "D": "It ends after the first month"
    },
    "answer": "C",
    "answerText": "It involves academic, social, and personal change"
  },
  {
    "id": 27,
    "image": "images/image27.png",
    "question": "What is one benefit of regularly evaluating your time management habits?",
    "options": {
      "A": "It guarantees higher grades",
      "B": "It allows continuous adjustment and improvement",
      "C": "It eliminates stress permanently",
      "D": "It reduces course workload"
    },
    "answer": "B",
    "answerText": "It allows continuous adjustment and improvement"
  },
  {
    "id": 28,
    "image": "images/image28.png",
    "question": "Which of the following is a key step in analytical thinking?",
    "options": {
      "A": "Accepting information at face value and let it be there",
      "B": "Separating facts from assumptions before drawing conclusions",
      "C": "Generating as many ideas as possible regardless the quality of each idea",
      "D": "Prioritizing emotional responses"
    },
    "answer": "B",
    "answerText": "Separating facts from assumptions before drawing conclusions"
  },
  {
    "id": 29,
    "image": "images/image29.png",
    "question": "What is one major difference between high school and college learning?",
    "options": {
      "A": "College instructors monitor students' progress more closely",
      "B": "College requires greater student responsibility and self-advocacy",
      "C": "College courses require fewer assessments but much more difficult",
      "D": "College learning focuses less on independent work"
    },
    "answer": "B",
    "answerText": "College requires greater student responsibility and self-advocacy"
  },
  {
    "id": 30,
    "image": "images/image30.png",
    "question": "The concept of \"hallucination' in AI refers to:",
    "options": {
      "A": "Visual misinterpretation by humans",
      "B": "AI producing incorrect or fabricated information",
      "C": "Emotional responses to AI feedback",
      "D": "Errors caused only by user prompts"
    },
    "answer": "B",
    "answerText": "AI producing incorrect or fabricated information"
  },
  {
    "id": 31,
    "image": "images/image31.png",
    "question": "Why is transparency in AI systems important?",
    "options": {
      "A": "It increases software profits",
      "B": "It allows users to modify algorithms directly",
      "C": "It enables accountability and trust",
      "D": "It eliminates the need for regulation"
    },
    "answer": "C",
    "answerText": "It enables accountability and trust"
  },
  {
    "id": 32,
    "image": "images/image32.png",
    "question": "Guerrerc-Dib, Portales, and Heredia-Escorza (2020) emphasize that academic integrity extends beyond cheating because it:",
    "options": {
      "A": "Focuses solely on punishment and enforcement",
      "B": "Represents a commitment to the learning process and ethical use of resources",
      "C": "Is mainly concerned with citation formatting and application of formal structure",
      "D": "Applies only to written assignments"
    },
    "answer": "B",
    "answerText": "Represents a commitment to the learning process and ethical use of resources"
  },
  {
    "id": 33,
    "image": "images/image33.png",
    "question": "Creative thinking involves:",
    "options": {
      "A": "Memorization",
      "B": "Generating original ideas",
      "C": "Repeating tradition and exploring art",
      "D": "Avoiding risk"
    },
    "answer": "B",
    "answerText": "Generating original ideas"
  },
  {
    "id": 34,
    "image": "images/image34.png",
    "question": "Why is retrieval practice effective for learning?",
    "options": {
      "A": "It reduces the amount of material and knowledge to study",
      "B": "It strengthens memory storage and retrieval pathways",
      "C": "It replaces the need for review knowledge",
      "D": "It prevents forgetting entirely"
    },
    "answer": "B",
    "answerText": "It strengthens memory storage and retrieval pathways"
  },
  {
    "id": 35,
    "image": "images/image35.png",
    "question": "Studying in college often requires students to:",
    "options": {
      "A": "Study only before exams",
      "B": "Modify old habits to meet new academic demands",
      "C": "Depend on memorization alone",
      "D": "Avoid collaborative learning"
    },
    "answer": "B",
    "answerText": "Modify old habits to meet new academic demands"
  },
  {
    "id": 36,
    "image": "images/image36.png",
    "question": "Why does the book emphasize higher-order thinking in online learning?",
    "options": {
      "A": "Exams are more difficult online",
      "B": "Surface learning is ineffective for long-term learning",
      "C": "Students prefer complex tasks",
      "D": "Memorization is no longer needed"
    },
    "answer": "B",
    "answerText": "Surface learning is ineffective for long-term learning"
  },
  {
    "id": 37,
    "image": "images/image37.png",
    "question": "Which factor most strongly affects how a message is interpreted?",
    "options": {
      "A": "The length of the message",
      "B": "The context in which communication occurs",
      "C": "The communication technology used such as social media",
      "D": "The sender's educational background and attitude"
    },
    "answer": "B",
    "answerText": "The context in which communication occurs"
  },
  {
    "id": 38,
    "image": "images/image38.png",
    "question": "Critical thinkers should:",
    "options": {
      "A": "Accept everything",
      "B": "Question everything",
      "C": "Avoid research",
      "D": "Being smart in all situations"
    },
    "answer": "B",
    "answerText": "Question everything"
  },
  {
    "id": 39,
    "image": "images/image39.png",
    "question": "A student sends an emotional email to a professor late at night and receives a negative response. Based on Chapter 8, what principle was most likely violated?",
    "options": {
      "A": "Choosing the fastest communication method",
      "B": "Considering tone, purpose, and audience before sending",
      "C": "using complete sentences and formal grammar",
      "D": "Providing sufficient background information"
    },
    "answer": "B",
    "answerText": "Considering tone, purpose, and audience before sending"
  },
  {
    "id": 40,
    "image": "images/image40.png",
    "question": "Which question best reflects a critical thinking mindset?",
    "options": {
      "A": "\"DOI agree with this?\"",
      "B": "41s this information popular?\"",
      "C": "'What evidence supports this claim?",
      "D": "'Who benefits from this idea emotionally?\""
    },
    "answer": "C",
    "answerText": "'What evidence supports this claim?"
  },
  {
    "id": 41,
    "image": "images/image41.png",
    "question": "Which behavior most strongly limits creative thinking?",
    "options": {
      "A": "Questioning assumptions",
      "B": "Fear of making mistakes",
      "C": "Generating multiple solutions",
      "D": "Seeking alternative perspectives"
    },
    "answer": "B",
    "answerText": "Fear of making mistakes"
  },
  {
    "id": 42,
    "image": "images/image42.png",
    "question": "A student accepts an online claim because it aligns with their beliefs. Which critical thinking skill is missing?",
    "options": {
      "A": "Creativity and problem solving",
      "B": "Logical reasoning",
      "C": "Evaluation of evidence",
      "D": "Time management"
    },
    "answer": "C",
    "answerText": "Evaluation of evidence"
  },
  {
    "id": 43,
    "image": "images/image43.png",
    "question": "Which skill is NOT explicitly included in digital literacy as described in the book?",
    "options": {
      "A": "Evaluating online information",
      "B": "Communicating through digital platforms and social media",
      "C": "Understanding neural network architecture in depth",
      "D": "Responsible engagement with digital content"
    },
    "answer": "C",
    "answerText": "Understanding neural network architecture in depth"
  },
  {
    "id": 44,
    "image": "images/image44.png",
    "question": "Why does the author warn against confusing opinion with evidence?",
    "options": {
      "A": "Opinions are always incorrect and being more effected by emotions",
      "B": "Evidence-based reasoning leads to stronger conclusions",
      "C": "Opinions slow down decision-making",
      "D": "Evidence is difficult to interpret"
    },
    "answer": "B",
    "answerText": "Evidence-based reasoning leads to stronger conclusions"
  },
  {
    "id": 45,
    "image": "images/image45.png",
    "question": "Why should we review outcomes after implementing a solution?",
    "options": {
      "A": "To assign blame",
      "B": "To determine whether adjustments are needed",
      "C": "To prove effort was sufficient and possible",
      "D": "To avoid repeating the process"
    },
    "answer": "B",
    "answerText": "To determine whether adjustments are needed"
  },
  {
    "id": 46,
    "image": "images/image46.png",
    "question": "Problem-solving is best described as:",
    "options": {
      "A": "Finding the quickest answer to a difficulty",
      "B": "Applying a structured process to address challenges",
      "C": "Relying on intuition and experience to address normal issues",
      "D": "Avoiding situations that seem complex"
    },
    "answer": "B",
    "answerText": "Applying a structured process to address challenges"
  },
  {
    "id": 47,
    "image": "images/image47.png",
    "question": "A student fails an exam and immediately blames lack of ability. From a problem-solving perspective, what should the student do instead?",
    "options": {
      "A": "Accept failure and move on, hope for better results",
      "B": "Clearly identify contributing factors and possible changes",
      "C": "Change majors immediately",
      "D": "Increase study time without reflection and teamwork"
    },
    "answer": "B",
    "answerText": "Clearly identify contributing factors and possible changes"
  },
  {
    "id": 48,
    "image": "images/image48.png",
    "question": "Which step typically comes first in effective problem-solving?",
    "options": {
      "A": "Selecting a solution",
      "B": "Clearly defining the problem",
      "C": "Evaluating outcomes",
      "D": "Implementing a plan immediately"
    },
    "answer": "B",
    "answerText": "Clearly defining the problem"
  },
  {
    "id": 49,
    "image": "images/image49.png",
    "question": "A student struggles with word problems in math because they focus on every detail. Based on analytical thinking principles, what should they do first?",
    "options": {
      "A": "Practice more similar problems without reflection and revision",
      "B": "Identify essential information and ignore irrelevant details",
      "C": "Memorize formulas more frequently",
      "D": "Seek help only after failing exams"
    },
    "answer": "B",
    "answerText": "Identify essential information and ignore irrelevant details"
  },
  {
    "id": 50,
    "image": "images/image50.png",
    "question": "Which is a characteristic of analytical thinking?",
    "options": {
      "A": "Guessing outcomes",
      "B": "Ignoring evidence",
      "C": "Verifying sources",
      "D": "Avoiding comparison"
    },
    "answer": "C",
    "answerText": "Verifying sources"
  },
  {
    "id": 51,
    "image": "images/image51.png",
    "question": "Why is using AI for personalized feedback considered ethically problematic in some cases?",
    "options": {
      "A": "AI feedback is always inaccurate or inclined towards complementation",
      "B": "It may replace meaningful instructor-student learning relationships",
      "C": "Students prefer automated feedback",
      "D": "AI cannot process written language"
    },
    "answer": "B",
    "answerText": "It may replace meaningful instructor-student learning relationships"
  },
  {
    "id": 52,
    "image": "images/image52.png",
    "question": "Why is relying solely on search engine rankings problematic?",
    "options": {
      "A": "High-ranking results are always outdated",
      "B": "Rankings prioritize academic sources only",
      "C": "Popularity does not equal accuracy or reliability",
      "D": "Search engines limit access to peer-reviewed material"
    },
    "answer": "C",
    "answerText": "Popularity does not equal accuracy or reliability"
  },
  {
    "id": 53,
    "image": "images/image53.png",
    "question": "Which type of memory is primarily responsible for temporarily holding information while processing it?",
    "options": {
      "A": "Long-term memory",
      "B": "Sensory memory",
      "C": "Working memory",
      "D": "Episodic memory"
    },
    "answer": "C",
    "answerText": "Working memory"
  },
  {
    "id": 54,
    "image": "images/image54.png",
    "question": "Information literacy is defined as the ability to:",
    "options": {
      "A": "Memorize academic content efficiently",
      "B": "Locate, evaluate, and use information effectively",
      "C": "Rely on digital sources for research and study",
      "D": "Avoid biased information entirely and consistently"
    },
    "answer": "B",
    "answerText": "Locate, evaluate, and use information effectively"
  },
  {
    "id": 55,
    "image": "images/image55.png",
    "question": "Effective time management in college is important primarily because it:",
    "options": {
      "A": "Reduces the total number of assignments students receive",
      "B": "Helps prevent a chain reaction of academic problems",
      "C": "AIlows students to finish college more quickly",
      "D": "Eliminates the need for prioritization"
    },
    "answer": "B",
    "answerText": "Helps prevent a chain reaction of academic problems"
  },
  {
    "id": 56,
    "image": "images/image56.png",
    "question": "Which situation would most clearty violate ethical guidelines when using AI for assessment?",
    "options": {
      "A": "using AI to grade multiple-choice quizzes",
      "B": "using AI to provide grammar suggestions",
      "C": "using AI to evaluate student work without students' consent or awareness",
      "D": "using AI to help manage gradebooks"
    },
    "answer": "C",
    "answerText": "using AI to evaluate student work without students' consent or awareness"
  },
  {
    "id": 57,
    "image": "images/image57.png",
    "question": "Which practice best demonstrates responsible use of information?",
    "options": {
      "A": "Copying text when sources are cited without any form of paraphrasing",
      "B": "Paraphrasing without attribution",
      "C": "Integrating sources while acknowledging original authors",
      "D": "using only one strong source"
    },
    "answer": "C",
    "answerText": "Integrating sources while acknowledging original authors"
  },
  {
    "id": 58,
    "image": "images/image58.png",
    "question": "Which concept focuses on identifying what tasks truly matter?",
    "options": {
      "A": "Multitasking",
      "B": "Time blocking",
      "C": "Prioritization",
      "D": "Delegation"
    },
    "answer": "C",
    "answerText": "Prioritization"
  },
  {
    "id": 59,
    "image": "images/image59.png",
    "question": "Which of the following best describes retrieval in learning?",
    "options": {
      "A": "Re-reading notes repeatedly",
      "B": "Accessing and using stored knowledge when needed",
      "C": "Highlighting important sections of a text",
      "D": "Uploading materials to an AI chatbot"
    },
    "answer": "B",
    "answerText": "Accessing and using stored knowledge when needed"
  },
  {
    "id": 60,
    "image": "images/image60.png",
    "question": "Goal setting is most effective when goals are:",
    "options": {
      "A": "Ambitious and open-ended",
      "B": "Flexible and undefined",
      "C": "Specific, realistic, and measurable",
      "D": "Focused only on long-term outcomes"
    },
    "answer": "C",
    "answerText": "Specific, realistic, and measurable"
  },
  {
    "id": 61,
    "image": "images/image61.png",
    "question": "Cognitive presence in the Community of Inquiry refers mainly to:",
    "options": {
      "A": "Emotional engagement",
      "B": "Knowledge construction through thinking",
      "C": "Instructor authority",
      "D": "Social interaction"
    },
    "answer": "B",
    "answerText": "Knowledge construction through thinking"
  },
  {
    "id": 62,
    "image": "images/image62.png",
    "question": "Which Bloom's level requires learners to break information into parts?",
    "options": {
      "A": "Understand",
      "B": "Apply",
      "C": "Analyze",
      "D": "Remember"
    },
    "answer": "C",
    "answerText": "Analyze"
  },
  {
    "id": 63,
    "image": "images/image63.png",
    "question": "Analytical thinking involves:",
    "options": {
      "A": "Trusting intuition",
      "B": "Breaking a whole into parts",
      "C": "Follm•.'ing emotions",
      "D": "Avading structure"
    },
    "answer": "B",
    "answerText": "Breaking a whole into parts"
  },
  {
    "id": 64,
    "image": "images/image64.png",
    "question": "AI can support memory formation primarily by:",
    "options": {
      "A": "Replacing reading and note-taking entirely by provide main content of every document",
      "B": "Providing metaphors, emotional connections, and multisensory learning ideas",
      "C": "Automatically storing information in long-term memory",
      "D": "Eliminating the need for attention and focus"
    },
    "answer": "B",
    "answerText": "Providing metaphors, emotional connections, and multisensory learning ideas"
  },
  {
    "id": 65,
    "image": "images/image65.png",
    "question": "Which activity best demonstrates analytical thinking?",
    "options": {
      "A": "Brainstorming multiple possible essay topics quickly and productively",
      "B": "Identifying relevant data while ignoring unnecessary details in a problem",
      "C": "Agreeing with the most popular interpretation of an issue",
      "D": "Responding emotionally to complex situations"
    },
    "answer": "B",
    "answerText": "Identifying relevant data while ignoring unnecessary details in a problem"
  },
  {
    "id": 66,
    "image": "images/image66.png",
    "question": "Why is intentional choice of communication method important?",
    "options": {
      "A": "Different methods require different levels of formality and clarity",
      "B": "Face-to-face communication is always superior and productive",
      "C": "Digital communication reduces misunderstandings",
      "D": "Informal methods save time"
    },
    "answer": "A",
    "answerText": "Different methods require different levels of formality and clarity"
  },
  {
    "id": 67,
    "image": "images/image67.png",
    "question": "What is one common reason students procrastinate?",
    "options": {
      "A": "Tasks feel unimportant or overwhelming",
      "B": "Instructors assign unclear deadlines",
      "C": "Students lack intelligence and teamwork",
      "D": "College schedules are too flexible"
    },
    "answer": "A",
    "answerText": "Tasks feel unimportant or overwhelming"
  },
  {
    "id": 68,
    "image": "images/image68.png",
    "question": "Why should encourage combining creative and analytical thinking be encouraged?",
    "options": {
      "A": "They are interchangeable skills and it is possible to replaced each other",
      "B": "Creativity generates ideas, while analysis refines them",
      "C": "Creativity replaces logic",
      "D": "Analysis limits imagination"
    },
    "answer": "B",
    "answerText": "Creativity generates ideas, while analysis refines them"
  },
  {
    "id": 69,
    "image": "images/image69.png",
    "question": "Which statement best reflects how time management in college differs from high school?",
    "options": {
      "A": "College students have fewer deadlines",
      "B": "College schedules are more structured and require more efforts to follow",
      "C": "College requires students to independently plan and allocate time",
      "D": "Time management is less important in college"
    },
    "answer": "C",
    "answerText": "College requires students to independently plan and allocate time"
  },
  {
    "id": 70,
    "image": "images/image70.png",
    "question": "According to the chapter, the primary goal of learning is to:",
    "options": {
      "A": "Complete assignments as efficiently as possible using available tools",
      "B": "Distill knowledge and skills so they can be applied in new situations",
      "C": "Memorize large amounts of information for examinations",
      "D": "Reduce cognitive effort through automation and technological support"
    },
    "answer": "B",
    "answerText": "Distill knowledge and skills so they can be applied in new situations"
  },
  {
    "id": 71,
    "image": "images/image71.png",
    "question": "Communication is best described as:",
    "options": {
      "A": "A simple exchange of spoken words",
      "B": "A one-way transfer of information and signals from sender to receiver",
      "C": "A complex process influenced by context, purpose, and participants",
      "D": "A skill used primarily in professional environments"
    },
    "answer": "C",
    "answerText": "A complex process influenced by context, purpose, and participants"
  },
  {
    "id": 72,
    "image": "images/image72.png",
    "question": "Which statement best reflects the authors' view of the college transition?",
    "options": {
      "A": "It is primarily academic and rarely emotional",
      "B": "It is uniform for all students",
      "C": "It involves academic, social, and personal change",
      "D": "It ends after the first month"
    },
    "answer": "C",
    "answerText": "It involves academic, social, and personal change"
  },
  {
    "id": 73,
    "image": "images/image73.png",
    "question": "A student feels overwhelmed during their first semester and avoids contacting professors. Based on Chapter 1, what is the best recommended action?",
    "options": {
      "A": "Focus only on independent study",
      "B": "Wait until grades are released",
      "C": "Seek support from faculty, advisors, and campus resources",
      "D": "Reduce course load immediately"
    },
    "answer": "C",
    "answerText": "Seek support from faculty, advisors, and campus resources"
  },
  {
    "id": 74,
    "image": "images/image74.png",
    "question": "What role does environment play in effective studying?",
    "options": {
      "A": "It has minimal impact",
      "B": "It only matters for group study",
      "C": "It can significantly affect focus and memory",
      "D": "It replaces good study strategies and techniques"
    },
    "answer": "C",
    "answerText": "It can significantly affect focus and memory"
  },
  {
    "id": 75,
    "image": "images/image75.png",
    "question": "Which type of memory is primarily responsible for temporarily holding information while processing it?",
    "options": {
      "A": "Long-term memory",
      "B": "Sensory memory",
      "C": "Working memory",
      "D": "Episodic memory"
    },
    "answer": "C",
    "answerText": "Working memory"
  },
  {
    "id": 76,
    "image": "images/image76.png",
    "question": "Which factor most strongly affects how a message is interpreted?",
    "options": {
      "A": "The length of the message",
      "B": "The context in which communication occurs",
      "C": "The communication technology used such as social media",
      "D": "The sender's educational background and attitude"
    },
    "answer": "B",
    "answerText": "The context in which communication occurs"
  },
  {
    "id": 77,
    "image": "images/image77.png",
    "question": "Which of the following is NOT a component of metacognition?",
    "options": {
      "A": "Planning how to approach a task",
      "B": "Monitoring understanding during learning",
      "C": "Evaluating outcomes after completing a task",
      "D": "Memorizing facts without reflection"
    },
    "answer": "D",
    "answerText": "Memorizing facts without reflection"
  },
  {
    "id": 78,
    "image": "images/image78.png",
    "question": "One ethical concern about using AI as a grading tool is that it may:",
    "options": {
      "A": "Improve consistency too much",
      "B": "Breach students' intellectual property by uploading their work to AI systems",
      "C": "Reduce grading speed",
      "D": "Require excessive faculty training"
    },
    "answer": "B",
    "answerText": "Breach students' intellectual property by uploading their work to AI systems"
  },
  {
    "id": 79,
    "image": "images/image79.png",
    "question": "Creative thinking is described in as the ability to:",
    "options": {
      "A": "Follow established rules precisely",
      "B": "Produce original ideas by making new connections",
      "C": "Evaluate information objectively and systematically",
      "D": "Solve problems using fixed procedures"
    },
    "answer": "B",
    "answerText": "Produce original ideas by making new connections"
  },
  {
    "id": 80,
    "image": "images/image80.png",
    "question": "According to Long & Magerko (2020), AI literacy enables individuals to:",
    "options": {
      "A": "Fully automate decision-making",
      "B": "Critically evaluate AI technologies",
      "C": "Eliminate bias in all AI systems",
      "D": "Replace teachers with AI"
    },
    "answer": "B",
    "answerText": "Critically evaluate AI technologies"
  },
  {
    "id": 81,
    "image": "images/image81.png",
    "question": "Successful students typically view challenges as:",
    "options": {
      "A": "Signs they chose the wrong major",
      "B": "Evidence of instructor bias",
      "C": "Opportunities for growth and adjustment",
      "D": "Reasons to withdraw from courses"
    },
    "answer": "C",
    "answerText": "Opportunities for growth and adjustment"
  },
  {
    "id": 82,
    "image": "images/image82.png",
    "question": "Why is metacognition considered a self-regulation skill?",
    "options": {
      "A": "It controls classroom behavior and course expectation",
      "B": "It allows students to manage and direct their learning",
      "C": "It reduces dependence on instructors",
      "D": "It improves memorization speed"
    },
    "answer": "B",
    "answerText": "It allows students to manage and direct their learning"
  },
  {
    "id": 83,
    "image": "images/image83.png",
    "question": "Chapter 7 emphasizes that critical thinking requires students to:",
    "options": {
      "A": "Avoid questioning authority and forms of powers",
      "B": "Consider multiple perspectives before judging",
      "C": "Focus on speed rather than accuracy",
      "D": "Rely on intuition"
    },
    "answer": "B",
    "answerText": "Consider multiple perspectives before judging"
  },
  {
    "id": 84,
    "image": "images/image84.png",
    "question": "Creativity is needed:",
    "options": {
      "A": "Mostly in art and science",
      "B": "In all occupations",
      "C": "Only in childhood",
      "D": "In entertainment industry"
    },
    "answer": "B",
    "answerText": "In all occupations"
  },
  {
    "id": 85,
    "image": "images/image85.png",
    "question": "Which question reflects a metacognitive approach to learning?",
    "options": {
      "A": "\"How many pages do I need to read?'",
      "B": "\"What strategy am I using, and is it effective?\"",
      "C": "\"Will this be on the exam and how can I have support?\"",
      "D": "UHo•w' long is this assignment?\""
    },
    "answer": "B",
    "answerText": "\"What strategy am I using, and is it effective?\""
  },
  {
    "id": 86,
    "image": "images/image86.png",
    "question": "Which strategy is recommended for managing test anxiety?",
    "options": {
      "A": "Avoiding preparation to reduce stress",
      "B": "Relying on last-minute cramming",
      "C": "using preparation and familiarity to reduce fear",
      "D": "Studying only the night before"
    },
    "answer": "C",
    "answerText": "using preparation and familiarity to reduce fear"
  },
  {
    "id": 87,
    "image": "images/image87.png",
    "question": "Why is multitasking a bad habit for learning?",
    "options": {
      "A": "It increases creativity in complex tasks",
      "B": "It often reduces efficiency and quality of work",
      "C": "It saves time when deadlines overlap",
      "D": "It improves long-term memory"
    },
    "answer": "B",
    "answerText": "It often reduces efficiency and quality of work"
  },
  {
    "id": 88,
    "image": "images/image88.png",
    "question": "According to the American Library Association (2011), digital literacy primarily refers to the ability to:",
    "options": {
      "A": "Program artificial intelligence systems to get the most productive information system",
      "B": "use information and communication technologies to find, evaluate, create, and communicate information",
      "C": "Detect AI-generated content",
      "D": "Replace human judgment with algorithms"
    },
    "answer": "B",
    "answerText": "use information and communication technologies to find, evaluate, create, and communicate information"
  },
  {
    "id": 89,
    "image": "images/image89.png",
    "question": "According to the International Society of Academic Integrity (2021), academic integrity is best defined as:",
    "options": {
      "A": "Compliance with university assessment rules only",
      "B": "A promise to uphold honesty, fairness, respect, responsibility, and courage",
      "C": "The ability to avoid plagiarism through software tools and institutional policies",
      "D": "A system of penalties designed to discourage cheating and misconduct"
    },
    "answer": "B",
    "answerText": "A promise to uphold honesty, fairness, respect, responsibility, and courage"
  },
  {
    "id": 90,
    "image": "images/image90.png",
    "question": "Why should we review outcomes after implementing a solution?",
    "options": {
      "A": "To assign blame",
      "B": "To determine whether adjustments are needed",
      "C": "To prove effort was sufficient and possible",
      "D": "To avoid repeating the process"
    },
    "answer": "B",
    "answerText": "To determine whether adjustments are needed"
  },
  {
    "id": 91,
    "image": "images/image91.png",
    "question": "Why does the book emphasize higher-order thinking in online learning?",
    "options": {
      "A": "Exams are more difficult online",
      "B": "Surface learning is ineffective for long-term learning",
      "C": "Students prefer complex tasks",
      "D": "Memorization is no longer needed"
    },
    "answer": "B",
    "answerText": "Surface learning is ineffective for long-term learning"
  },
  {
    "id": 92,
    "image": "images/image92.png",
    "question": "Which skill is NOT explicitly included in digital literacy as described in the book?",
    "options": {
      "A": "Evaluating online information",
      "B": "Communicating through digital platforms and social media",
      "C": "Understanding neural network architecture in depth",
      "D": "Responsible engagement with digital content"
    },
    "answer": "C",
    "answerText": "Understanding neural network architecture in depth"
  },
  {
    "id": 93,
    "image": "images/image93.png",
    "question": "According to the text, a major concern for graduate students regarding AI grading tools is that:",
    "options": {
      "A": "AI grading is smarter than human grading and could overshade human's ability in grading",
      "B": "AI systems may use their work as training data, affecting future publication",
      "C": "AI cannot understand complex arguments",
      "D": "AI always produces biased feedback"
    },
    "answer": "B",
    "answerText": "AI systems may use their work as training data, affecting future publication"
  },
  {
    "id": 94,
    "image": "images/image94.png",
    "question": "Which situation would most clearly violate ethical guidelines when using AI for assessment?",
    "options": {
      "A": "Using AI to grade multiple-choice quizzes",
      "B": "IJsing AI to provide grammar suggestions",
      "C": "using AI to evaluate student work without students' consent or awareness",
      "D": "using AI to help manage gradebooks"
    },
    "answer": "C",
    "answerText": "using AI to evaluate student work without students' consent or awareness"
  },
  {
    "id": 95,
    "image": "images/image95.png",
    "question": "Which habit most weakens critical thinking?",
    "options": {
      "A": "Seeking evidence",
      "B": "Reflecting on assumptions and preconceptions",
      "C": "Accepting information without evaluation",
      "D": "Comparing multiple sources"
    },
    "answer": "C",
    "answerText": "Accepting information without evaluation"
  },
  {
    "id": 96,
    "image": "images/image96.png",
    "question": "In the Plan-Monitor-Evaluate cycle, monitoring mainly focuses on:",
    "options": {
      "A": "Setting learning goals",
      "B": "Checking understanding during learning",
      "C": "Grading performance",
      "D": "Comparing results with peers"
    },
    "answer": "B",
    "answerText": "Checking understanding during learning"
  },
  {
    "id": 97,
    "image": "images/image97.png",
    "question": "Problem-solving is best described as:",
    "options": {
      "A": "Finding the quickest answer to a difficulty",
      "B": "Applying a structured process to address challenges",
      "C": "Relying on intuition and experience to address normal issues",
      "D": "Avoiding situations that seem complex"
    },
    "answer": "B",
    "answerText": "Applying a structured process to address challenges"
  },
  {
    "id": 98,
    "image": "images/image98.png",
    "question": "Why does Chapter 7 emphasize defining the problem accurately?",
    "options": {
      "A": "It reduces the number of possible solutions",
      "B": "Incorrect problem definition leads to ineffective solutions",
      "C": "It saves time in implementation",
      "D": "It limits creative thinking"
    },
    "answer": "B",
    "answerText": "Incorrect problem definition leads to ineffective solutions"
  },
  {
    "id": 99,
    "image": "images/image99.png",
    "question": "Which Bloom's level requires learners to break information into parts?",
    "options": {
      "A": "Understand",
      "B": "Apply",
      "C": "Analyze",
      "D": "Remember"
    },
    "answer": "C",
    "answerText": "Analyze"
  },
  {
    "id": 100,
    "image": "images/image100.png",
    "question": "Procrastination is described as:",
    "options": {
      "A": "A harmless habit with minimal consequences that students usually have",
      "B": "A delay that can trigger multiple academic difficulties",
      "C": "A strategy for managing stress effectively",
      "D": "A result of excessive motivation"
    },
    "answer": "B",
    "answerText": "A delay that can trigger multiple academic difficulties"
  },
  {
    "id": 101,
    "image": "images/image101.png",
    "question": "A student accepts an online claim because it aligns with their beliefs. Which critical thinking skill is missing?",
    "options": {
      "A": "Creativity and problem solving",
      "B": "Logical reasoning",
      "C": "Evaluation of evidence",
      "D": "Time management"
    },
    "answer": "C",
    "answerText": "Evaluation of evidence"
  },
  {
    "id": 102,
    "image": "images/image102.png",
    "question": "Critical thinking",
    "options": {
      "A": "Guessing outcomes based on personal experiences",
      "B": "Weighing options and data",
      "C": "Emotional reactions",
      "D": "Blind trust"
    },
    "answer": "B",
    "answerText": "Weighing options and data"
  },
  {
    "id": 103,
    "image": "images/image103.png",
    "question": "Which statement best reflects how time management in college differs from high school?",
    "options": {
      "A": "College students have fewer deadlines",
      "B": "College schedules are more structured and require more efforts to follow",
      "C": "College requires students to independently plan and allocate time",
      "D": "Time management is less important in college"
    },
    "answer": "C",
    "answerText": "College requires students to independently plan and allocate time"
  },
  {
    "id": 104,
    "image": "images/image104.png",
    "question": "Which of the following best describes encoding in the learning process?",
    "options": {
      "A": "Storing information permanently without effort using long-term memory",
      "B": "Processing new information deeply so that memories are formed",
      "C": "Recalling information during an exam",
      "D": "Translating information into digital formats"
    },
    "answer": "B",
    "answerText": "Processing new information deeply so that memories are formed"
  },
  {
    "id": 105,
    "image": "images/image105.png",
    "question": "Which step typically comes first in effective problem-solving?",
    "options": {
      "A": "Selecting a solution",
      "B": "Clearly defining the problem",
      "C": "Evaluating outcomes",
      "D": "Implementing a plan immediately"
    },
    "answer": "B",
    "answerText": "Clearly defining the problem"
  },
  {
    "id": 106,
    "image": "images/image106.png",
    "question": "Analytical thinking is especially useful when students need to:",
    "options": {
      "A": "Memorize large amounts of information",
      "B": "Understand complex systems arguments",
      "C": "Express personal opinions creatively",
      "D": "Work under strict time pressure"
    },
    "answer": "B",
    "answerText": "Understand complex systems arguments"
  },
  {
    "id": 107,
    "image": "images/image107.png",
    "question": "Critical thinkers should:",
    "options": {
      "A": "Accept everything",
      "B": "Question everything",
      "C": "Avoid research",
      "D": "Being smart in all situations"
    },
    "answer": "B",
    "answerText": "Question everything"
  },
  {
    "id": 108,
    "image": "images/image108.png",
    "question": "Why is the process in analytical thinking important?",
    "options": {
      "A": "Because outcomes matter more than understanding",
      "B": "Because understanding how parts connect leads to better conclusions",
      "C": "Because analytical thinking is slower than other thinking types",
      "D": "Because it reduces creativity"
    },
    "answer": "B",
    "answerText": "Because understanding how parts connect leads to better conclusions"
  },
  {
    "id": 109,
    "image": "images/image109.png",
    "question": "Which of the following is a key step in analytical thinking?",
    "options": {
      "A": "Accepting information at face value and let it be there",
      "B": "Separating facts from assumptions before drawing conclusions",
      "C": "Generating as many ideas as possible regardless the quality of each idea",
      "D": "Prioritizing emotional responses"
    },
    "answer": "B",
    "answerText": "Separating facts from assumptions before drawing conclusions"
  },
  {
    "id": 110,
    "image": "images/image110.png",
    "question": "Why is intentional choice of communication method important?",
    "options": {
      "A": "Different methods require different levels of formality and clarity",
      "B": "Face-to-face communication is always superior and productive",
      "C": "Digital communication reduces misunderstandings",
      "D": "Informal methods save time"
    },
    "answer": "A",
    "answerText": "Different methods require different levels of formality and clarity"
  },
  {
    "id": 111,
    "image": "images/image111.png",
    "question": "Why is multitasking a bad habit for learning?",
    "options": {
      "A": "It increases creativity in complex tasks",
      "B": "It often reduces efficiency and quality of work",
      "C": "It saves time when deadlines overlap",
      "D": "It improves long-term memory"
    },
    "answer": "B",
    "answerText": "It often reduces efficiency and quality of work"
  },
  {
    "id": 112,
    "image": "images/image112.png",
    "question": "According to Chapter 7, analytical thinking primarily involves:",
    "options": {
      "A": "Generating original ideas through imagination and brainstorming techniques",
      "B": "Breaking information into components to understand relationships and patterns",
      "C": "Evaluating arguments based on personal beliefs and values",
      "D": "Solving problems through trial and error without structured steps"
    },
    "answer": "B",
    "answerText": "Breaking information into components to understand relationships and patterns"
  },
  {
    "id": 113,
    "image": "images/image113.png",
    "question": "Goal setting is most effective when goals are:",
    "options": {
      "A": "Ambitious and open-ended",
      "B": "Flexible and undefined",
      "C": "Specific, realistic, and measurable",
      "D": "Focused only on long-term outcomes"
    },
    "answer": "C",
    "answerText": "Specific, realistic, and measurable"
  },
  {
    "id": 114,
    "image": "images/image114.png",
    "question": "Which study habit is least effective for long-term learning?",
    "options": {
      "A": "Self-testing with flashcards, quiz and teaching others",
      "B": "Spaced practice combined with interleaving",
      "C": "Re-reading notes repeatedly without engagement",
      "D": "Reviewing mistakes"
    },
    "answer": "C",
    "answerText": "Re-reading notes repeatedly without engagement"
  },
  {
    "id": 115,
    "image": "images/image115.png",
    "question": "Why is relying solely on search engine rankings problematic?",
    "options": {
      "A": "High-ranking results are always outdated",
      "B": "Rankings prioritize academic sources only",
      "C": "Popularity does not equal accuracy or reliability",
      "D": "Search engines limit access to peer-reviewed material"
    },
    "answer": "C",
    "answerText": "Popularity does not equal accuracy or reliability"
  },
  {
    "id": 116,
    "image": "images/image116.png",
    "question": "Which strategy is recommended for managing test anxiety?",
    "options": {
      "A": "Avoiding preparation to reduce stress",
      "B": "Relying on last-minute cramming",
      "C": "using preparation and familiarity to reduce fear",
      "D": "Studying only the night before"
    },
    "answer": "C",
    "answerText": "using preparation and familiarity to reduce fear"
  },
  {
    "id": 117,
    "image": "images/image117.png",
    "question": "What is one common reason students procrastinate?",
    "options": {
      "A": "Tasks feel unimportant or overwhelming",
      "B": "Instructors assign unclear deadlines",
      "C": "Students lack intelligence and teamwork",
      "D": "College schedules are too flexible"
    },
    "answer": "A",
    "answerText": "Tasks feel unimportant or overwhelming"
  },
  {
    "id": 118,
    "image": "images/image118.png",
    "question": "Which of the following is identified as a common barrier to effective communication?",
    "options": {
      "A": "Clear purpose and using technologies",
      "B": "Cultural awareness and prejudice",
      "C": "Assumptions and misinterpretations",
      "D": "Active listening strategies"
    },
    "answer": "C",
    "answerText": "Assumptions and misinterpretations"
  },
  {
    "id": 119,
    "image": "images/image119.png",
    "question": "Which of the following best describes \"college culture'?",
    "options": {
      "A": "A fixed set of rules identical across all academic institutions",
      "B": "A system focused only on academic performance and science of knowledge",
      "C": "Shared expectations, language, and norms within higher education",
      "D": "A social environment unrelated to learning"
    },
    "answer": "C",
    "answerText": "Shared expectations, language, and norms within higher education"
  },
  {
    "id": 120,
    "image": "images/image120.png",
    "question": "Why is understanding why you are in college considered foundational for success?",
    "options": {
      "A": "It helps students choose easier and low-cost courses",
      "B": "It clarifies long-term goals and increases motivation",
      "C": "It allows students to reduce academic workload",
      "D": "It guarantees higher grades"
    },
    "answer": "B",
    "answerText": "It clarifies long-term goals and increases motivation"
  },
  {
    "id": 121,
    "image": "images/image121.png",
    "question": "Which of the following best describes retrieval in learning?",
    "options": {
      "A": "Re-reading notes repeatedly",
      "B": "Accessing and using stored knowledge when needed",
      "C": "Highlighting important sections of a text",
      "D": "Uploading materials to an AI chatbot"
    },
    "answer": "B",
    "answerText": "Accessing and using stored knowledge when needed"
  },
  {
    "id": 122,
    "image": "images/image122.png",
    "question": "Which concept focuses on identifying what tasks truly matter?",
    "options": {
      "A": "Multitasking",
      "B": "Time blocking",
      "C": "Prioritization",
      "D": "Delegation"
    },
    "answer": "C",
    "answerText": "Prioritization"
  },
  {
    "id": 123,
    "image": "images/image123.png",
    "question": "AI can support memory formation primarily by:",
    "options": {
      "A": "Replacing reading and note-taking entirely by provide main content of every document",
      "B": "Providing metaphors, emotional connections, and multisensory learning ideas",
      "C": "Automatically storing information in long-term memory",
      "D": "Eliminating the need for attention and focus"
    },
    "answer": "B",
    "answerText": "Providing metaphors, emotional connections, and multisensory learning ideas"
  },
  {
    "id": 124,
    "image": "images/image124.png",
    "question": "A student sends an emotional email to a professor late at night and receives a negative response. Based on Chapter 8, what principle was most likely violated?",
    "options": {
      "A": "Choosing the fastest communication method",
      "B": "Considering tone, purpose, and audience before sending",
      "C": "using complete sentences and formal grammar",
      "D": "Providing sufficient background information"
    },
    "answer": "B",
    "answerText": "Considering tone, purpose, and audience before sending"
  },
  {
    "id": 125,
    "image": "images/image125.png",
    "question": "Creative thinking is described in as the ability to:",
    "options": {
      "A": "Follow established rules precisely",
      "B": "Produce original ideas by making new connections",
      "C": "Evaluate information objectively and systematically",
      "D": "Solve problems using fixed procedures"
    },
    "answer": "B",
    "answerText": "Produce original ideas by making new connections"
  },
  {
    "id": 126,
    "image": "images/image126.png",
    "question": "Which condition best supports creative thinking?",
    "options": {
      "A": "Strict adherence to one correct answer",
      "B": "Openness to risk and experimentation",
      "C": "Avoidance of uncertainty",
      "D": "Dependence on authority"
    },
    "answer": "B",
    "answerText": "Openness to risk and experimentation"
  },
  {
    "id": 127,
    "image": "images/image127.png",
    "question": "According to the chapter, creativity is:",
    "options": {
      "A": "A talent only some people are born with",
      "B": "Limited to artistic disciplines",
      "C": "A skill that can te developed and practiced",
      "D": "Incompatible with analytical thinking"
    },
    "answer": "C",
    "answerText": "A skill that can te developed and practiced"
  },
  {
    "id": 128,
    "image": "images/image128.png",
    "question": "The concept of \"hallucination\" in AI refers to:",
    "options": {
      "A": "Visual misinterpretation by humans",
      "B": "AI producing incorrect or fabricated information",
      "C": "Emotional responses to AI feedback",
      "D": "Errors caused only by user prompts"
    },
    "answer": "B",
    "answerText": "AI producing incorrect or fabricated information"
  },
  {
    "id": 129,
    "image": "images/image129.png",
    "question": "Why does the author warn against confusing opinion with evidence?",
    "options": {
      "A": "Opinions are always incorrect and being more effected by emotions",
      "B": "Evidence-based reasoning leads to stronger conclusions",
      "C": "Opinions slow' dow'n decision-making",
      "D": "Evidence is difficult to interpret"
    },
    "answer": "B",
    "answerText": "Evidence-based reasoning leads to stronger conclusions"
  },
  {
    "id": 130,
    "image": "images/image130.png",
    "question": "According to the American Library Association (2011), digital literacy primarily refers to the ability to:",
    "options": {
      "A": "Program artificial intelligence systems to get the most productive information system",
      "B": "use information and communication technologies to find, evaluate, create, and communicate information",
      "C": "Detect AI-generated content",
      "D": "Replace human judgment with algorithms"
    },
    "answer": "B",
    "answerText": "use information and communication technologies to find, evaluate, create, and communicate information"
  },
  {
    "id": 131,
    "image": "images/image131.png",
    "question": "Why is metacognition considered a self-regulation skill?",
    "options": {
      "A": "It controls classroom behavior and course expectation",
      "B": "It allows students to manage and direct their learning",
      "C": "It reduces dependence on instructors",
      "D": "It improves memorization speed"
    },
    "answer": "B",
    "answerText": "It allows students to manage and direct their learning"
  },
  {
    "id": 132,
    "image": "images/image132.png",
    "question": "Successful students typically view challenges as:",
    "options": {
      "A": "Signs they chose the wrong major",
      "B": "Evidence of instructor bias",
      "C": "Opportunities for growth and adjustment",
      "D": "Reasons to withdraw from courses"
    },
    "answer": "C",
    "answerText": "Opportunities for growth and adjustment"
  },
  {
    "id": 133,
    "image": "images/image133.png",
    "question": "Which skill is NOT explicitly included in digital literacy as described in the book?",
    "options": {
      "A": "Evaluating online information",
      "B": "Communicating through digital platforms and social media",
      "C": "Understanding neural network architecture in depth",
      "D": "Responsible engagement with digital content"
    },
    "answer": "C",
    "answerText": "Understanding neural network architecture in depth"
  },
  {
    "id": 134,
    "image": "images/image134.png",
    "question": "Which of the following is NOT a component of metacognition?",
    "options": {
      "A": "Planning how to approach a task",
      "B": "Monitoring understanding during learning",
      "C": "Evaluating outcomes after completing a task",
      "D": "Memorizing facts without reflection"
    },
    "answer": "D",
    "answerText": "Memorizing facts without reflection"
  },
  {
    "id": 135,
    "image": "images/image135.png",
    "question": "What is the main purpose of self-directed learning in online education?",
    "options": {
      "A": "To reduce instructor workload",
      "B": "To help students take control of their learning",
      "C": "To eliminate group work",
      "D": "To replace assessments with self-study activities"
    },
    "answer": "B",
    "answerText": "To help students take control of their learning"
  },
  {
    "id": 136,
    "image": "images/image136.png",
    "question": "Chapter 7 emphasizes that critical thinking requires students to:",
    "options": {
      "A": "Avoid questioning authority and forms of powers",
      "B": "Consider multiple perspectives before judging",
      "C": "Focus on speed rather than accuracy",
      "D": "Rely on intuition"
    },
    "answer": "B",
    "answerText": "Consider multiple perspectives before judging"
  },
  {
    "id": 137,
    "image": "images/image137.png",
    "question": "Why is retrieval practice effective for learning?",
    "options": {
      "A": "It reduces the amount of material and knowledge to study",
      "B": "It strengthens memory storage and retrieval pathways",
      "C": "It replaces the need for review knowledge",
      "D": "It prevents forgetting entirely"
    },
    "answer": "B",
    "answerText": "It strengthens memory storage and retrieval pathways"
  },
  {
    "id": 138,
    "image": "images/image138.png",
    "question": "Why is using AI for personalized feedback considered ethically problematic in some cases?",
    "options": {
      "A": "AI feedback is always inaccurate or inclined towards complementation",
      "B": "It may replace meaningful instructor-student learning relationships",
      "C": "Students prefer automated feedback",
      "D": "AI cannot process written language"
    },
    "answer": "B",
    "answerText": "It may replace meaningful instructor-student learning relationships"
  },
  {
    "id": 139,
    "image": "images/image139.png",
    "question": "According to the International Society of Academic Integrity (2021), academic integrity is best defined as:",
    "options": {
      "A": "Compliance with university assessment rules only",
      "B": "A promise to uphold honesty, fairness, respect, responsibility, and courage",
      "C": "The ability to avoid plagiarism through software tools and institutional policies",
      "D": "A system of penalties designed to discourage cheating and misconduct"
    },
    "answer": "B",
    "answerText": "A promise to uphold honesty, fairness, respect, responsibility, and courage"
  },
  {
    "id": 140,
    "image": "images/image140.png",
    "question": "In the Plan-Monitor-Evaluate cycle, monitoring mainly focuses on:",
    "options": {
      "A": "Setting learning goals",
      "B": "Checking understanding during learning",
      "C": "Grading performance",
      "D": "Comparing results with peers"
    },
    "answer": "B",
    "answerText": "Checking understanding during learning"
  },
  {
    "id": 141,
    "image": "images/image141.png",
    "question": "Creative thinking involves:",
    "options": {
      "A": "Memorization",
      "B": "Generating original ideas",
      "C": "Repeating tradition and exploring art",
      "D": "Avoiding risk"
    },
    "answer": "B",
    "answerText": "Generating original ideas"
  },
  {
    "id": 142,
    "image": "images/image142.png",
    "question": "Which question best helps evaluate the credibility of a source?",
    "options": {
      "A": "Is the information easy to read and interpret?",
      "B": "Does the author have relevant expertise?",
      "C": "Is the source visually appealing?",
      "D": "Does the source confirm personal opinions?"
    },
    "answer": "B",
    "answerText": "Does the author have relevant expertise?"
  },
  {
    "id": 143,
    "image": "images/image143.png",
    "question": "Digital literacy is described as important because it:",
    "options": {
      "A": "Is only useful for students in technology majors",
      "B": "Helps individuals critically evaluate online content",
      "C": "Removes the need for critical thinking and metacognition",
      "D": "Guarantees employment"
    },
    "answer": "B",
    "answerText": "Helps individuals critically evaluate online content"
  },
  {
    "id": 144,
    "image": "images/image144.png",
    "question": "Which question best reflects a critical thinking mindset?",
    "options": {
      "A": "\"Do I agree with this?'",
      "B": "\"Is this information popular?\"",
      "C": "\"What evidence supports this claim?\"",
      "D": "\"Who benefits from this idea emotionally?\""
    },
    "answer": "C",
    "answerText": "\"What evidence supports this claim?\""
  },
  {
    "id": 145,
    "image": "images/image145.png",
    "question": "Which practice best demonstrates responsible use of information?",
    "options": {
      "A": "Copying text when sources are cited without any form of paraphrasing",
      "B": "Paraphrasing without attribution",
      "C": "Integrating sources while acknowledging original authors",
      "D": "using only one strong source"
    },
    "answer": "C",
    "answerText": "Integrating sources while acknowledging original authors"
  },
  {
    "id": 146,
    "image": "images/image146.png",
    "question": "One ethical concern about using AI as a grading tool is that it may:",
    "options": {
      "A": "Improve consistency too much",
      "B": "Breach students' intellectual property by uploading their work to AI systems",
      "C": "Reduce grading speed",
      "D": "Require excessive faculty training"
    },
    "answer": "B",
    "answerText": "Breach students' intellectual property by uploading their work to AI systems"
  },
  {
    "id": 147,
    "image": "images/image147.png",
    "question": "Which Bloom's level requires learners to break information into parts?",
    "options": {
      "A": "Understand",
      "B": "Apply",
      "C": "Analyze",
      "D": "Remember"
    },
    "answer": "C",
    "answerText": "Analyze"
  },
  {
    "id": 148,
    "image": "images/image148.png",
    "question": "Which activity best demonstrates metacognitive awareness?",
    "options": {
      "A": "Studying longer hours before exams to aim high grades",
      "B": "Recognizing which study strategies work best for you",
      "C": "Highlighting every paragraph in a textbook",
      "D": "Copying notes from slides"
    },
    "answer": "B",
    "answerText": "Recognizing which study strategies work best for you"
  },
  {
    "id": 149,
    "image": "images/image149.png",
    "question": "Critical thinking involves:",
    "options": {
      "A": "Guessing outcomes based on personal experiences",
      "B": "Weighing options and data",
      "C": "Emotional reactions",
      "D": "Blind trust"
    },
    "answer": "B",
    "answerText": "Weighing options and data"
  }
];
