/* ══════════════════════════════════════════════════════
   AfroCares – Site JavaScript (Bilingual EN / AR)
   ══════════════════════════════════════════════════════ */

/* ════════════════════════════════════════
   TRANSLATIONS
   ════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    /* Navbar */
    'nav-tagline':  'Medical NGO – India',
    'nav-home':     'Home',
    'nav-about':    'About',
    'nav-services': 'Services',
    'nav-why':      'Why India',
    'nav-hospitals':'Hospitals',
    'nav-process':  'How It Works',
    'nav-stories':  'Stories',
    'nav-cta':      'Get Free Help',
    'lang-label':   'عربي',

    /* Hero */
    'hero-badge': '100% Free · Verified · NGO-Certified',
    'hero-title': 'Your Trusted Bridge to <span class="highlight">World-Class Medical Care</span> in India',
    'hero-sub':   'AfroCares is a registered Indian NGO dedicated to helping African and international patients access genuine, affordable medical treatment in India — completely free of charge. We protect you from scammers and guide you every step of the way.',
    'hero-btn1':  'Get Free Assistance',
    'hero-btn2':  'How It Works',
    'stat1': 'Patients Helped',
    'stat2': 'Partner Hospitals',
    'stat3': 'Countries Served',
    'stat4': 'Our Fee',

    /* Marquee */
    'marquee1': 'SCAM ALERT: Never pay upfront to agents claiming to arrange Indian medical visas or treatment packages without verification.',
    'marquee2': 'AfroCares verifies every hospital — our service is 100% FREE.',
    'marquee3': 'Contact us BEFORE travelling. We save lives and money.',

    /* About */
    'about-label': 'About AfroCares',
    'about-title': 'We Are More Than a Medical Coordinator — We Are Your Guardian',
    'about-p1': 'AfroCares was founded by healthcare professionals and social workers who witnessed the exploitation of African and international patients seeking medical treatment in India. Patients were losing thousands of dollars to fraudulent agents, being sent to unaccredited clinics, and left without support in a foreign land.',
    'about-p2': 'As a registered Non-Governmental Organisation (NGO) in India, we bridge the gap between international patients and India\'s world-class hospitals — <strong>completely free of cost</strong>. We receive no commission from hospitals. Our funding comes from donations and grants, ensuring our advice is always in <em>your</em> best interest.',
    'about-badge-title': 'NGO Registered',
    'about-badge-sub':   'Govt. of India Certified',
    'pillar1': 'Zero fees for patients',
    'pillar2': 'Independent from hospitals',
    'pillar3': 'Multilingual support team',
    'pillar4': 'On-ground India presence',
    'about-btn': 'Talk to Our Team',

    /* Values */
    'values-label': 'Our Mission & Values',
    'values-title': 'Why We Exist',
    'values-desc':  'AfroCares stands on three unshakeable pillars that guide every decision we make.',
    'val1-title': 'Protection',
    'val1-desc':  'We shield patients from fraudulent medical agents, overpriced packages, and unaccredited facilities that prey on vulnerable patients seeking care abroad.',
    'val2-title': 'Quality Care',
    'val2-desc':  'We connect patients only to NABH-accredited and JCI-certified hospitals with proven track records in the specific treatments patients need.',
    'val3-title': 'Access for All',
    'val3-desc':  'Medical tourism should not be a luxury. We advocate for affordable treatment options and help patients find the right care regardless of their budget.',

    /* Scam */
    'scam-title': '⚠️ Know the Signs of Medical Tourism Scams in India',
    'scam1': 'Agents demanding large upfront payments before you arrive',
    'scam2': 'Unverifiable hospital accreditation or credentials',
    'scam3': 'No written treatment plans or cost estimates',
    'scam4': 'Pressure to decide quickly or "lose the spot"',
    'scam5': 'No physical address or India-registered contact number',
    'scam6': 'Promising unrealistic cure rates for serious conditions',
    'scam-cta': 'If you\'ve experienced any of the above — <strong>contact AfroCares immediately</strong> before making any payments.',
    'scam-btn': 'Report a Suspected Scam',

    /* Services */
    'svc-label': 'What We Offer',
    'svc-title': 'Our Free Services for International Patients',
    'svc-desc':  'From your first inquiry to your safe return home — AfroCares supports you at every stage, at zero cost.',
    'svc1-title': 'Hospital Matching',
    'svc1-desc':  'We match you to the best-suited, accredited hospital for your specific medical condition, budget, and location preference within India.',
    'svc2-title': 'Second Medical Opinion',
    'svc2-desc':  'Unsure about a diagnosis? We arrange free virtual consultations with leading Indian specialists to give you a verified second opinion.',
    'svc3-title': 'Medical Visa Guidance',
    'svc3-desc':  'We guide you through the Indian medical visa process, documentation requirements, and invitation letter procedures — step by step.',
    'svc4-title': 'Treatment Cost Estimates',
    'svc4-desc':  'Receive transparent, written cost estimates from multiple hospitals so you can compare and make an informed, pressure-free decision.',
    'svc5-title': 'Arrival & Logistics Support',
    'svc5-desc':  'Airport pickup coordination, accommodation guidance near your hospital, and local SIM/connectivity help on arrival in India.',
    'svc6-title': 'Language & Interpretation',
    'svc6-desc':  'Our multilingual team and network of interpreters help bridge language barriers between you and your medical team throughout treatment.',
    'svc7-title': 'Scam Investigation & Help',
    'svc7-desc':  'If you\'ve been defrauded by an agent or fake hospital, we help you report it to Indian authorities and guide you on next steps.',
    'svc8-title': 'Post-Treatment Follow-Up',
    'svc8-desc':  'We stay with you after treatment — coordinating follow-up care, medical records, and connecting you with doctors for teleconsultations back home.',
    'svc9-title': 'Community & Support Groups',
    'svc9-desc':  'Join our WhatsApp and online communities of verified patients, ask questions, share experiences, and get peer support from people who\'ve been through it.',

    /* Why India */
    'why-label': 'Why Choose India',
    'why-title': 'India – The World\'s Medical Tourism Capital',
    'why-intro': 'India is globally recognised as one of the top destinations for medical treatment, combining international-quality healthcare with costs that are 60–90% lower than Western countries.',
    'why1-title': 'World-Class Technology',
    'why1-desc':  'India\'s top hospitals are equipped with the latest robotic surgery systems, PET-CT scanners, proton therapy, and advanced diagnostics.',
    'why2-title': 'Highly Trained Specialists',
    'why2-desc':  'Many Indian doctors are trained at top institutions in the USA, UK, and Europe, bringing global expertise to affordable treatment.',
    'why3-title': 'Dramatic Cost Savings',
    'why3-desc':  'Heart surgery costing $100,000 in the US may cost $6,000–$10,000 in India — with equal or better outcomes.',
    'why4-title': 'No Long Waiting Lists',
    'why4-desc':  'Unlike public health systems in many countries, India\'s private hospitals can accommodate patients within days, not months.',
    'istat1-num':   '3rd',
    'istat1-label': 'Globally for Medical Tourism',
    'istat2-label': 'Lower Cost vs. Western Nations',
    'istat3-label': 'NABH/JCI Accredited Hospitals',
    'istat4-label': 'Medical Tourists Annually',
    'spec-title': 'Top Treatment Specialties',
    'sp1':  'Cardiac Surgery', 'sp2':  'Oncology',    'sp3':  'Orthopedics',
    'sp4':  'Neurology',       'sp5':  'Kidney Transplant', 'sp6': 'IVF & Fertility',
    'sp7':  'Ayurveda',        'sp8':  'Eye Surgery', 'sp9':  'Spine Surgery', 'sp10': 'Dental',

    /* Hospitals */
    'hosp-label': 'Our Network',
    'hosp-title': 'Verified Partner Hospitals Across India',
    'hosp-desc':  'All our partner hospitals are NABH or JCI accredited. We have zero financial ties — we recommend based solely on what\'s best for you.',
    'city-delhi':     'Delhi / NCR',
    'city-mumbai':    'Mumbai',
    'city-chennai':   'Chennai',
    'city-bangalore': 'Bangalore',
    'city-hyderabad': 'Hyderabad',
    'h-aiims':    'Premier public research hospital · Top cardiac & neurology',
    'h-medanta':  'Multi-speciality · 1600 beds · World-class oncology',
    'h-fortis':   'Bone marrow transplant · Robotics · Liver transplant',
    'h-max':      'Cardiology · Neurosciences · Oncology · Orthopaedics',
    'h-koka':     'Robotics · CyberKnife · Gamma Knife',
    'h-tata':     'India\'s leading cancer hospital',
    'h-lila':     'Cardiac · Kidney · Orthopaedics',
    'h-apollo':   'Heart · Liver · Kidney transplants · Oncology',
    'h-miot':     'Orthopaedics · Joint replacement · Spine',
    'h-shankar':  'India\'s premier eye hospital',
    'h-manipal':  'Neurosurgery · Cardiac · Oncology',
    'h-narayana': 'Heart surgery · Paediatric care · Transplants',
    'h-sakra':    'Stroke · Trauma · Orthopaedics',
    'h-kims':     'Multi-speciality · Cardiac · Neurology',
    'h-yashoda':  'Cancer · Orthopaedics · Liver',
    'h-apolloh':  'All specialities · International patient wing',
    'hosp-note':  'This is a sample of our network. We work with 50+ hospitals across 12 Indian cities. Contact us for a personalised recommendation.',

    /* Process */
    'proc-label': 'The Process',
    'proc-title': 'How AfroCares Works — Step by Step',
    'proc-desc':  'Getting started is simple. We handle the complexity so you can focus on your health.',
    'step1-title': 'Contact Us',
    'step1-desc':  'Reach out via WhatsApp, email, or our contact form. Share basic information about your condition, medical reports, and what kind of treatment you\'re seeking.',
    'step2-title': 'Free Case Assessment',
    'step2-desc':  'Our medical coordination team reviews your case. We may consult with doctors in our network to understand the best specialties and hospitals for your condition.',
    'step3-title': 'Hospital Shortlist & Cost Estimate',
    'step3-desc':  'We share 2–3 verified hospital options with treatment plans and transparent cost estimates. No pressure — you choose what feels right for you.',
    'step4-title': 'Visa & Travel Guidance',
    'step4-desc':  'We provide a medical visa invitation letter and walk you through the Indian medical visa application process for your country.',
    'step5-title': 'Arrive in India — We\'re Here',
    'step5-desc':  'Our team coordinates your airport reception, hospital admission, and local needs. You are never alone on the ground in India.',
    'step6-title': 'Treatment & Support',
    'step6-desc':  'Receive your treatment with our team available 24/7 to assist with communication, hospital liaison, accommodation, and any emergencies.',
    'step7-title': 'Return Home & Follow-Up',
    'step7-desc':  'We help you get discharge documents, medication lists, and connect you with teleconsultation options for continued care in your home country.',

    /* Testimonials */
    'test-label': 'Patient Stories',
    'test-title': 'Lives Changed. Stories Shared.',
    'test-desc':  'Real experiences from real patients who came to India through AfroCares.',
    't1-text': '"I was nearly scammed by an agent who took ₹50,000 from me and disappeared. AfroCares not only helped me report it but arranged my actual liver transplant at Medanta. I am alive because of them."',
    't1-info': 'Nigeria · Liver Transplant Patient',
    't2-text': '"My mother needed a hip replacement. Back home the wait was 2 years. Through AfroCares we came to Chennai — the surgery was done in 10 days at a fraction of the UK cost. The team was with us every step."',
    't2-info': 'Kenya · Hip Replacement',
    't3-text': '"We found AfroCares on a Facebook group. At first I was sceptical — how can it be free? But they genuinely helped us with everything. My son\'s cardiac surgery at Narayana was successful. No words can express our gratitude."',
    't3-info': 'Tanzania · Paediatric Cardiac Surgery',
    't4-text': '"I had been told I needed chemotherapy but wanted a second opinion. AfroCares connected me with an oncologist at Tata Memorial who confirmed a different, less invasive treatment. It changed my life completely."',
    't4-info': 'Zimbabwe · Cancer Second Opinion',

    /* Donate */
    'don-label':        'Support Our Work',
    'don-title':        'Help Us Keep It Free for Every Patient',
    'don-desc':         'AfroCares charges patients nothing. We survive on donations from individuals, corporates, and diaspora communities who believe healthcare guidance should be a right, not a privilege. Your donation directly funds our coordinators, translation services, and emergency patient support.',
    'imp1':             'Funds one patient consultation',
    'imp2':             'Covers interpretation for a full hospital visit',
    'imp3':             'Supports one complete patient journey',
    'don-action-title': 'Every Donation Saves a Life',
    'don-btn':          'Donate or Partner With Us',
    'don-tax':          'Donations may be tax-exempt under Indian 80G and FCRA provisions. Contact us for details.',

    /* Contact */
    'con-label':      'Get In Touch',
    'con-title':      'Start Your Free Consultation Today',
    'con-desc':       'Fill in the form below and our team will respond within 24 hours. All consultations are strictly confidential and completely free.',
    'con-reach':      'Reach Us Directly',
    'con-wa-label':   'WhatsApp (Fastest)',
    'con-email-label':'Email',
    'con-phone-label':'Phone (India)',
    'con-addr-label': 'Office Address',
    'con-addr':       'AfroCares NGO, New Delhi, India – 110001',
    'con-hours':      'Support Available: Mon–Sat, 9 AM – 8 PM IST · Emergency WhatsApp: 24/7',
    'f-name':         'Full Name *',
    'f-name-ph':      'Your full name',
    'f-country':      'Country *',
    'f-country-ph':   'Your country',
    'f-email':        'Email Address *',
    'f-wa':           'WhatsApp Number',
    'f-spec':         'Medical Condition / Treatment Needed *',
    'f-spec-ph':      'Select treatment specialty...',
    'f-opt1':  'Cardiac Surgery / Heart Treatment',
    'f-opt2':  'Cancer / Oncology',
    'f-opt3':  'Orthopaedics / Joint Replacement',
    'f-opt4':  'Neurology / Brain / Spine',
    'f-opt5':  'Kidney / Liver / Organ Transplant',
    'f-opt6':  'IVF / Fertility Treatment',
    'f-opt7':  'Eye Surgery / Ophthalmology',
    'f-opt8':  'Ayurveda / Holistic Treatment',
    'f-opt9':  'Dental Treatment',
    'f-opt10': 'Second Medical Opinion',
    'f-opt11': 'Scam Report / Help',
    'f-opt12': 'Other',
    'f-msg':          'Tell Us About Your Case',
    'f-msg-ph':       'Briefly describe your medical situation, any reports you have, estimated travel dates, etc.',
    'f-consent':      'I understand AfroCares is a free NGO service and my information will be kept confidential and used only to assist me.',
    'f-submit':       'Send Free Enquiry',
    'f-success-title':'Message Sent Successfully!',
    'f-success-desc': 'Our team will contact you within 24 hours. For urgent matters, please WhatsApp us directly.',

    /* Footer */
    'foot-desc':    'Connecting African and international patients with India\'s best hospitals — freely, safely, and transparently.',
    'foot-badge1':  'NGO Registered India',
    'foot-badge2':  '100% Free Service',
    'foot-quick':   'Quick Links',
    'foot-spec':    'Medical Specialties',
    'foot-contact': 'Contact',
    'foot-loc':     'New Delhi, India',
    'foot-copy':    '© 2024 AfroCares. All rights reserved. Registered NGO under the Indian Societies Registration Act.',
    'foot-privacy': 'Privacy Policy',
    'foot-terms':   'Terms of Use',
    'foot-report':  'Report a Scam',
    'wa-float':     'Need Help?',
  },

  ar: {
    /* Navbar */
    'nav-tagline':  'منظمة طبية غير حكومية – الهند',
    'nav-home':     'الرئيسية',
    'nav-about':    'عن المنظمة',
    'nav-services': 'خدماتنا',
    'nav-why':      'لماذا الهند',
    'nav-hospitals':'المستشفيات',
    'nav-process':  'كيف نعمل',
    'nav-stories':  'قصص المرضى',
    'nav-cta':      'احصل على مساعدة مجانية',
    'lang-label':   'English',

    /* Hero */
    'hero-badge': 'مجاني 100% · موثّق · معتمد رسمياً',
    'hero-title': 'جسرك الموثوق نحو <span class="highlight">رعاية طبية عالمية المستوى</span> في الهند',
    'hero-sub':   'أفروكيرز منظمة غير حكومية مسجلة في الهند متخصصة في مساعدة المرضى الأفارقة والدوليين للحصول على علاج طبي حقيقي وبأسعار معقولة في الهند — مجاناً تاماً. نحميك من المحتالين ونرشدك في كل خطوة.',
    'hero-btn1':  'احصل على مساعدة مجانية',
    'hero-btn2':  'كيف نعمل',
    'stat1': 'مريض ساعدناهم',
    'stat2': 'مستشفى شريك',
    'stat3': 'دولة نخدمها',
    'stat4': 'رسومنا',

    /* Marquee */
    'marquee1': 'تحذير من الاحتيال: لا تدفع مبالغ مقدمة لوسطاء يدّعون ترتيب تأشيرات طبية هندية أو حزم علاجية دون التحقق منهم.',
    'marquee2': 'أفروكيرز تتحقق من كل مستشفى — خدمتنا مجانية 100%.',
    'marquee3': 'تواصل معنا قبل السفر. نحن ننقذ الأرواح ونوفر المال.',

    /* About */
    'about-label': 'عن أفروكيرز',
    'about-title': 'نحن أكثر من منسق طبي — نحن حارسك الأمين',
    'about-p1': 'أُسِّست أفروكيرز على يد متخصصين في الرعاية الصحية وعمال اجتماعيين شهدوا استغلال المرضى الأفارقة والدوليين الذين يلتمسون العلاج الطبي في الهند. كان المرضى يخسرون آلاف الدولارات بسبب وسطاء محتالين، ويُرسَلون إلى عيادات غير معتمدة، ويُتركون وحدهم دون أي دعم في أرض غريبة.',
    'about-p2': 'بوصفنا منظمة غير حكومية مسجلة في الهند، نجسر الهوة بين المرضى الدوليين ومستشفيات الهند ذات المستوى العالمي — <strong>مجاناً تاماً</strong>. لا نتلقى أي عمولة من المستشفيات، ومصدر تمويلنا التبرعات والمنح، مما يضمن أن نصيحتنا دائماً في <em>مصلحتك</em> أنت.',
    'about-badge-title': 'منظمة مسجلة',
    'about-badge-sub':   'معتمدة من حكومة الهند',
    'pillar1': 'لا رسوم على المرضى',
    'pillar2': 'مستقلون عن المستشفيات',
    'pillar3': 'فريق دعم متعدد اللغات',
    'pillar4': 'حضور ميداني في الهند',
    'about-btn': 'تحدث مع فريقنا',

    /* Values */
    'values-label': 'مهمتنا وقيمنا',
    'values-title': 'لماذا نوجد',
    'values-desc':  'تقوم أفروكيرز على ثلاثة ركائز راسخة تُوجِّه كل قرار نتخذه.',
    'val1-title': 'الحماية',
    'val1-desc':  'نحمي المرضى من الوسطاء الطبيين المحتالين والحزم مبالغ في أسعارها والمرافق غير المعتمدة التي تستغل المرضى الضعفاء الساعين للحصول على رعاية في الخارج.',
    'val2-title': 'جودة الرعاية',
    'val2-desc':  'نحوّل المرضى فقط إلى مستشفيات حاصلة على اعتماد NABH أو JCI مع سجلات مثبتة في التخصصات العلاجية التي يحتاجها المريض.',
    'val3-title': 'الوصول للجميع',
    'val3-desc':  'لا ينبغي أن تكون السياحة الطبية رفاهية. ندافع عن خيارات علاج ميسورة التكلفة ونساعد المرضى في إيجاد الرعاية المناسبة بغض النظر عن ميزانيتهم.',

    /* Scam */
    'scam-title': '⚠️ تعرّف على علامات الاحتيال في السياحة الطبية بالهند',
    'scam1': 'وسطاء يطلبون مدفوعات ضخمة مقدمة قبل وصولك',
    'scam2': 'اعتماد المستشفى أو مؤهلاتها غير قابل للتحقق',
    'scam3': 'لا توجد خطط علاجية أو تقديرات للتكلفة بشكل مكتوب',
    'scam4': 'ضغط للقرار السريع أو "ستخسر مكانك"',
    'scam5': 'لا عنوان فعلي أو رقم هندي مسجل للتواصل',
    'scam6': 'وعود بمعدلات شفاء غير واقعية لأمراض خطيرة',
    'scam-cta': 'إذا مررت بأي مما سبق — <strong>تواصل مع أفروكيرز فوراً</strong> قبل إجراء أي مدفوعات.',
    'scam-btn': 'الإبلاغ عن احتيال مشتبه به',

    /* Services */
    'svc-label': 'ما نقدمه',
    'svc-title': 'خدماتنا المجانية للمرضى الدوليين',
    'svc-desc':  'من استفسارك الأول حتى عودتك سالماً إلى وطنك — أفروكيرز تدعمك في كل مرحلة، دون أي تكلفة.',
    'svc1-title': 'مطابقة المستشفيات',
    'svc1-desc':  'نطابقك مع أنسب مستشفى معتمدة لحالتك الطبية المحددة وميزانيتك وتفضيلاتك الجغرافية داخل الهند.',
    'svc2-title': 'رأي طبي ثانٍ',
    'svc2-desc':  'غير متأكد من التشخيص؟ نرتب استشارات افتراضية مجانية مع كبار المتخصصين الهنود لمنحك رأياً طبياً ثانياً موثوقاً.',
    'svc3-title': 'إرشاد تأشيرة العلاج',
    'svc3-desc':  'نرشدك خطوة بخطوة عبر إجراءات التأشيرة الطبية الهندية ومتطلبات التوثيق وإجراءات خطاب الدعوة.',
    'svc4-title': 'تقديرات تكلفة العلاج',
    'svc4-desc':  'احصل على تقديرات مكتوبة وشفافة من عدة مستشفيات حتى تقارن وتتخذ قراراً مدروساً دون أي ضغط.',
    'svc5-title': 'دعم الوصول والخدمات اللوجستية',
    'svc5-desc':  'تنسيق الاستقبال في المطار، وإرشاد الإقامة قرب مستشفاك، والمساعدة في الاتصال المحلي عند وصولك إلى الهند.',
    'svc6-title': 'الدعم اللغوي والترجمة',
    'svc6-desc':  'يساعد فريقنا متعدد اللغات وشبكة المترجمين لدينا في تجاوز الحواجز اللغوية بينك وبين فريقك الطبي طوال فترة العلاج.',
    'svc7-title': 'التحقيق في الاحتيال والمساعدة',
    'svc7-desc':  'إذا تعرضت للاحتيال من وسيط أو مستشفى مزيفة، نساعدك في الإبلاغ عنها للسلطات الهندية ونرشدك في الخطوات التالية.',
    'svc8-title': 'المتابعة بعد العلاج',
    'svc8-desc':  'نبقى معك بعد العلاج — نُنسّق متابعة الرعاية والسجلات الطبية ونتواصل مع الأطباء لاستشارات عن بُعد في وطنك.',
    'svc9-title': 'مجتمع ومجموعات دعم',
    'svc9-desc':  'انضم إلى مجتمعاتنا على واتساب وعبر الإنترنت من المرضى الموثوقين، اطرح أسئلتك، شارك تجاربك، واحصل على دعم الأقران.',

    /* Why India */
    'why-label': 'لماذا تختار الهند',
    'why-title': 'الهند — عاصمة السياحة الطبية في العالم',
    'why-intro': 'تُعدّ الهند من أبرز وجهات العلاج الطبي عالمياً، إذ تجمع بين رعاية صحية ذات مستوى دولي وتكاليف أقل بنسبة 60–90% مقارنةً بالدول الغربية.',
    'why1-title': 'تقنيات عالمية المستوى',
    'why1-desc':  'تمتلك أفضل مستشفيات الهند أحدث أنظمة الجراحة الروبوتية وأجهزة PET-CT والعلاج البروتوني والتشخيص المتقدم.',
    'why2-title': 'متخصصون على أعلى مستوى',
    'why2-desc':  'تلقّى كثير من الأطباء الهنود تدريبهم في مؤسسات بارزة في الولايات المتحدة والمملكة المتحدة وأوروبا، مما يجلب خبرات عالمية بتكلفة ميسورة.',
    'why3-title': 'وفورات استثنائية في التكاليف',
    'why3-desc':  'عملية قلب تكلّف 100,000 دولار في أمريكا قد تتراوح بين 6,000 و10,000 دولار في الهند — بنتائج مساوية أو أفضل.',
    'why4-title': 'لا قوائم انتظار طويلة',
    'why4-desc':  'خلافاً لأنظمة الصحة العامة في كثير من الدول، تستطيع مستشفيات الهند الخاصة استقبال المرضى خلال أيام وليس أشهر.',
    'istat1-num':   'المرتبة 3',
    'istat1-label': 'عالمياً في السياحة الطبية',
    'istat2-label': 'تكلفة أقل مقارنةً بالدول الغربية',
    'istat3-label': 'مستشفى معتمدة NABH/JCI',
    'istat4-label': 'سائح طبي سنوياً',
    'spec-title': 'أبرز تخصصات العلاج',
    'sp1':  'جراحة القلب',   'sp2':  'الأورام',        'sp3':  'العظام والمفاصل',
    'sp4':  'الأعصاب',       'sp5':  'زراعة الكلى',    'sp6':  'أطفال الأنابيب والخصوبة',
    'sp7':  'الطب الآيورفيدي','sp8':  'جراحة العيون',  'sp9':  'جراحة العمود الفقري', 'sp10': 'طب الأسنان',

    /* Hospitals */
    'hosp-label': 'شبكتنا',
    'hosp-title': 'مستشفيات شريكة موثّقة في أنحاء الهند',
    'hosp-desc':  'جميع مستشفياتنا الشريكة حاصلة على اعتماد NABH أو JCI. لا توجد أي روابط مالية بيننا وبينها — توصياتنا تُبنى فقط على مصلحتك.',
    'city-delhi':     'دلهي / NCR',
    'city-mumbai':    'مومباي',
    'city-chennai':   'تشيناي',
    'city-bangalore': 'بنغالور',
    'city-hyderabad': 'حيدر آباد',
    'h-aiims':    'مستشفى بحثي عام رائد · قلب وأعصاب على أعلى مستوى',
    'h-medanta':  'متعدد التخصصات · 1600 سرير · أورام عالمية المستوى',
    'h-fortis':   'زراعة نخاع العظام · روبوتيكس · زراعة الكبد',
    'h-max':      'القلب · الأعصاب · الأورام · العظام',
    'h-koka':     'روبوتيكس · سايبر نايف · غاما نايف',
    'h-tata':     'المستشفى الرائد في علاج السرطان في الهند',
    'h-lila':     'القلب · الكلى · العظام',
    'h-apollo':   'زراعة القلب والكبد والكلى · الأورام',
    'h-miot':     'العظام · استبدال المفاصل · العمود الفقري',
    'h-shankar':  'المستشفى الأول للعيون في الهند',
    'h-manipal':  'جراحة الأعصاب · القلب · الأورام',
    'h-narayana': 'جراحة القلب · طب الأطفال · الزراعة',
    'h-sakra':    'السكتة الدماغية · الطوارئ · العظام',
    'h-kims':     'متعدد التخصصات · القلب · الأعصاب',
    'h-yashoda':  'السرطان · العظام · الكبد',
    'h-apolloh':  'جميع التخصصات · جناح المرضى الدوليين',
    'hosp-note':  'هذه عيّنة من شبكتنا. نتعاون مع أكثر من 50 مستشفى في 12 مدينة هندية. تواصل معنا للحصول على توصية مخصصة.',

    /* Process */
    'proc-label': 'خطوات العمل',
    'proc-title': 'كيف تعمل أفروكيرز — خطوة بخطوة',
    'proc-desc':  'البداية بسيطة. نتولى نحن التعقيدات حتى تتفرغ لصحتك.',
    'step1-title': 'تواصل معنا',
    'step1-desc':  'تواصل عبر واتساب أو البريد الإلكتروني أو نموذج الاتصال. شارك معنا معلومات أساسية عن حالتك وتقاريرك الطبية ونوع العلاج الذي تبحث عنه.',
    'step2-title': 'تقييم حالتك مجاناً',
    'step2-desc':  'يستعرض فريق التنسيق الطبي لدينا حالتك. قد نتشاور مع أطباء في شبكتنا لفهم أفضل التخصصات والمستشفيات لحالتك.',
    'step3-title': 'قائمة مختصرة بالمستشفيات وتقدير التكلفة',
    'step3-desc':  'نشاركك 2–3 خيارات مستشفيات موثّقة مع خطط علاجية وتقديرات شفافة للتكلفة. لا ضغط — أنت تختار ما يناسبك.',
    'step4-title': 'إرشاد التأشيرة والسفر',
    'step4-desc':  'نزوّدك بخطاب دعوة للتأشيرة الطبية ونرشدك خطوة بخطوة عبر إجراءات التأشيرة الطبية الهندية لبلدك.',
    'step5-title': 'تصل إلى الهند — نحن هنا',
    'step5-desc':  'ينسق فريقنا استقبالك في المطار وإجراءات القبول في المستشفى واحتياجاتك المحلية. لن تكون وحدك أبداً في الهند.',
    'step6-title': 'العلاج والدعم',
    'step6-desc':  'تلقَّ علاجك وفريقنا متاح 24/7 للمساعدة في التواصل والتنسيق مع المستشفى وترتيبات الإقامة وأي طوارئ.',
    'step7-title': 'العودة إلى الوطن والمتابعة',
    'step7-desc':  'نساعدك في الحصول على وثائق الخروج وقوائم الأدوية، ونربطك بخيارات الاستشارة عن بُعد لمتابعة الرعاية في بلدك.',

    /* Testimonials */
    'test-label': 'قصص المرضى',
    'test-title': 'حياة تغيّرت. قصص تُشارَك.',
    'test-desc':  'تجارب حقيقية لمرضى حقيقيين جاؤوا إلى الهند عبر أفروكيرز.',
    't1-text': '«كدت أقع ضحية احتيال من وسيط أخذ ₹50,000 مني واختفى. أفروكيرز لم تساعدني فقط في الإبلاغ، بل رتّبت لي زراعة كبد فعلية في مستشفى ميدانتا. أنا حيٌّ بفضلهم.»',
    't1-info': 'نيجيريا · مريض زراعة كبد',
    't2-text': '«احتاجت والدتي إلى استبدال مفصل الورك. في بلدنا كان الانتظار سنتين. بفضل أفروكيرز جئنا إلى تشيناي — أُجريت الجراحة في 10 أيام بجزء من تكلفة المملكة المتحدة. الفريق كان معنا في كل خطوة.»',
    't2-info': 'كينيا · استبدال مفصل الورك',
    't3-text': '«وجدنا أفروكيرز في مجموعة على فيسبوك. في البداية كنت متشككاً — كيف يمكن أن تكون مجانية؟ لكنهم ساعدونا بصدق في كل شيء. جراحة قلب ابني في ناراياناكانت ناجحة. لا كلمات تعبّر عن امتناننا.»',
    't3-info': 'تنزانيا · جراحة قلب للأطفال',
    't4-text': '«أُخبرت بأنني بحاجة إلى العلاج الكيميائي لكنني أردت رأياً ثانياً. أفروكيرز وصلتني بطبيب أورام في مركز تاتا الذي أكد علاجاً مختلفاً وأقل توغلاً. غيّر حياتي كلياً.»',
    't4-info': 'زيمبابوي · رأي ثانٍ في السرطان',

    /* Donate */
    'don-label':        'دعم عملنا',
    'don-title':        'ساعدنا في الإبقاء على الخدمة مجانية لكل مريض',
    'don-desc':         'لا تفرض أفروكيرز أي رسوم على المرضى. نعتمد على التبرعات من الأفراد والشركات ومجتمعات الشتات الذين يؤمنون بأن توجيه الرعاية الصحية حق لا امتياز. تبرعك يموّل مباشرة منسقينا وخدمات الترجمة ودعم المرضى في الطوارئ.',
    'imp1':             'يموّل استشارة مريض واحد',
    'imp2':             'يغطي الترجمة لزيارة مستشفى كاملة',
    'imp3':             'يدعم رحلة مريض واحدة كاملة',
    'don-action-title': 'كل تبرع ينقذ حياة',
    'don-btn':          'تبرع أو اشترك معنا',
    'don-tax':          'قد تكون التبرعات معفاة ضريبياً وفق أحكام 80G و FCRA الهندية. تواصل معنا للتفاصيل.',

    /* Contact */
    'con-label':      'تواصل معنا',
    'con-title':      'ابدأ استشارتك المجانية اليوم',
    'con-desc':       'املأ النموذج أدناه وسيرد فريقنا خلال 24 ساعة. جميع الاستشارات سرية تماماً ومجانية بالكامل.',
    'con-reach':      'تواصل معنا مباشرة',
    'con-wa-label':   'واتساب (الأسرع)',
    'con-email-label':'البريد الإلكتروني',
    'con-phone-label':'هاتف (الهند)',
    'con-addr-label': 'عنوان المكتب',
    'con-addr':       'أفروكيرز، نيودلهي، الهند – 110001',
    'con-hours':      'الدعم متاح: الاثنين–السبت، 9 ص – 8 م بتوقيت الهند · واتساب طوارئ: 24/7',
    'f-name':         'الاسم الكامل *',
    'f-name-ph':      'اسمك الكامل',
    'f-country':      'الدولة *',
    'f-country-ph':   'دولتك',
    'f-email':        'البريد الإلكتروني *',
    'f-wa':           'رقم واتساب',
    'f-spec':         'الحالة الطبية / العلاج المطلوب *',
    'f-spec-ph':      'اختر التخصص العلاجي...',
    'f-opt1':  'جراحة القلب / علاج القلب',
    'f-opt2':  'السرطان / الأورام',
    'f-opt3':  'العظام / استبدال المفاصل',
    'f-opt4':  'الأعصاب / الدماغ / العمود الفقري',
    'f-opt5':  'زراعة الكلى / الكبد / الأعضاء',
    'f-opt6':  'أطفال الأنابيب / علاج الخصوبة',
    'f-opt7':  'جراحة العيون / طب العيون',
    'f-opt8':  'الطب الآيورفيدي / الكلي',
    'f-opt9':  'علاج الأسنان',
    'f-opt10': 'رأي طبي ثانٍ',
    'f-opt11': 'الإبلاغ عن احتيال / مساعدة',
    'f-opt12': 'أخرى',
    'f-msg':          'أخبرنا عن حالتك',
    'f-msg-ph':       'صِف باختصار وضعك الطبي وأي تقارير لديك وتواريخ السفر التقريبية.',
    'f-consent':      'أفهم أن أفروكيرز خدمة NGO مجانية وأن معلوماتي ستُحفظ بسرية وتُستخدم فقط لمساعدتي.',
    'f-submit':       'إرسال الاستفسار المجاني',
    'f-success-title':'تم إرسال رسالتك بنجاح!',
    'f-success-desc': 'سيتواصل معك فريقنا خلال 24 ساعة. للأمور العاجلة، تواصل معنا عبر واتساب مباشرة.',

    /* Footer */
    'foot-desc':    'نربط المرضى الأفارقة والدوليين بأفضل مستشفيات الهند — بحرية وأمان وشفافية.',
    'foot-badge1':  'منظمة مسجلة في الهند',
    'foot-badge2':  'خدمة مجانية 100%',
    'foot-quick':   'روابط سريعة',
    'foot-spec':    'التخصصات الطبية',
    'foot-contact': 'تواصل',
    'foot-loc':     'نيودلهي، الهند',
    'foot-copy':    '© 2024 أفروكيرز. جميع الحقوق محفوظة. منظمة مسجلة وفق قانون تسجيل الجمعيات الهندي.',
    'foot-privacy': 'سياسة الخصوصية',
    'foot-terms':   'شروط الاستخدام',
    'foot-report':  'الإبلاغ عن احتيال',
    'wa-float':     'هل تحتاج مساعدة؟',
  }
};

/* ════════════════════════════════════════
   LANGUAGE ENGINE
   ════════════════════════════════════════ */
let currentLang = localStorage.getItem('afrocares-lang') || 'en';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  /* Direction & lang attribute */
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  /* Plain text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* HTML content (hero title, scam-cta, about-p2) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Input / textarea placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Select option text */
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (t[key] !== undefined) opt.textContent = t[key];
  });

  /* Language toggle button label */
  const lbl = document.getElementById('langLabel');
  if (lbl && t['lang-label']) lbl.textContent = t['lang-label'];

  /* Scam CTA (has <strong> inside) */
  const scamCta = document.querySelector('.scam-cta-text');
  if (scamCta && t['scam-cta']) scamCta.innerHTML = t['scam-cta'];

  /* About p2 (has <strong> and <em>) */
  const aboutP2 = document.querySelector('.about-text-col p:last-of-type');
  if (aboutP2 && t['about-p2']) aboutP2.innerHTML = t['about-p2'];

  /* Store preference */
  localStorage.setItem('afrocares-lang', lang);
  currentLang = lang;

  /* Flip quote icons: fa-quote-left ↔ fa-quote-right */
  document.querySelectorAll('.quote-icon i').forEach(icon => {
    if (lang === 'ar') {
      icon.classList.replace('fa-quote-left', 'fa-quote-right');
    } else {
      icon.classList.replace('fa-quote-right', 'fa-quote-left');
    }
  });

  /* Fix mobile nav-cta margin in RTL */
  const navCta = document.querySelector('.nav-links .nav-cta');
  if (navCta) {
    navCta.style.marginLeft  = lang === 'ar' ? '0' : '';
    navCta.style.marginRight = lang === 'ar' ? '0' : '';
  }
}

/* ════════════════════════════════════════
   DOM READY
   ════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Apply saved / default language */
  applyTranslations(currentLang);

  /* Language toggle button */
  document.getElementById('langToggle').addEventListener('click', () => {
    applyTranslations(currentLang === 'en' ? 'ar' : 'en');
  });

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ── Back to top ── */
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchs = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    navAnchs.forEach(a => {
      a.style.background = '';
      a.style.color = '';
      if (a.getAttribute('href') === '#' + cur) {
        a.style.background = 'var(--primary-light)';
        a.style.color = 'var(--primary)';
      }
    });
  }, { passive: true });

  /* ── Hospital city tabs ── */
  document.querySelectorAll('.city-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.hospital-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.city);
      if (panel) { panel.classList.add('active'); }
    });
  });

  /* ── Testimonial slider ── */
  const cards = document.querySelectorAll('.testimonial-card');
  const dots  = document.querySelectorAll('.dot');
  let cur = 0, timer;
  const goTo = idx => {
    cards[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (idx + cards.length) % cards.length;
    cards[cur].classList.add('active');
    dots[cur].classList.add('active');
  };
  const startAuto = () => { clearInterval(timer); timer = setInterval(() => goTo(cur + 1), 5000); };
  document.getElementById('nextBtn').addEventListener('click', () => { goTo(cur + 1); startAuto(); });
  document.getElementById('prevBtn').addEventListener('click', () => { goTo(cur - 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));
  startAuto();

  /* ── Scroll-reveal ── */
  const revealEls = document.querySelectorAll('.service-card, .value-card, .step, .hosp-card, .india-stat-card, .why-item');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });

  /* ── Counter animation ── */
  const statEls = document.querySelectorAll('.stat strong');
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const raw = el.textContent;
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      if (isNaN(num)) return;
      const prefix = raw.match(/^[^0-9]*/)?.[0] || '';
      const suffix = raw.match(/[^0-9.]+$/)?.[0] || '';
      let startTime = null;
      const step = ts => {
        if (!startTime) startTime = ts;
        const prog = Math.min((ts - startTime) / 1800, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = prefix + (Number.isInteger(num) ? Math.round(ease * num) : (ease * num).toFixed(1)) + suffix;
        if (prog < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(s => cObs.observe(s));

  /* ── Contact form ── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    btn.disabled = true;
    setTimeout(() => {
      success.classList.add('show');
      form.reset();
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span data-i18n="f-submit">' + TRANSLATIONS[currentLang]['f-submit'] + '</span>';
      btn.disabled = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1800);
  });

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    });
  });

});
