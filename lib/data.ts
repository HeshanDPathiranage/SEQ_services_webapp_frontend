export const CONTACT_INFO = {
  phone: "1300 211 231",
  email: "admin@seqservices.com.au",
  address: "274 Beatty Road, Archerfield QLD 4108 Australia",
  accreditations: ["QBCC", "Fair Work Commission", "cm3"],
  socials: {
    facebook: {
      url: "https://www.facebook.com",
      icon: "https://img.magnific.com/premium-vector/vector-facebook-social-media-icon-illustration_534308-21672.jpg?semt=ais_test_b&w=740&q=80"
    },
    instagram: {
      url: "https://www.instagram.com",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4GdWtYVAoBvewzI0WErm4WOuFmqdfjwbSAvm7sBsnw&s=10"
    }
  }
};

export const GROUPED_SERVICES = [
  {
    category: "Construction & Builders Cleaning Services",
    items: [
      { name: "Builders Final & Handover Cleaning", link: "/services/builders-final-handover-cleaning" },
      { name: "Construction Site Cleaning", link: "/services/construction-site-cleaning" },
      { name: "Post-Construction & Renovation Cleaning", link: "/services/post-construction-renovation-cleaning" }
    ]
  },
  {
    category: "Commercial Cleaning Services",
    items: [
      { name: "Carpet Cleaning", link: "/services/commercial-carpet-cleaning" },
      { name: "Pressure Cleaning", link: "/services/commercial-pressure-cleaning" },
      { name: "Event Cleaning", link: "/services/event-cleaning" },
      { name: "Industrial Abseiling", link: "/services/industrial-abseiling" },
      { name: "Sweeping & Scrubbing", link: "/services/sweeping-and-scrubbing" },
      { name: "Office Cleaning", link: "/services/office-cleaning" },
      { name: "Window Cleaning", link: "/services/commercial-window-cleaning" },
      { name: "Warehouse Cleaning", link: "/services/warehouse-cleaning" }
    ]
  },
  {
    category: "Bio Cleaning Services",
    items: [
      { name: "Biohazard & Trauma Cleaning", link: "/services/biohazard-trauma-cleaning" },
      { name: "Property Recovery Services", link: "/services/property-recovery-services" },
      { name: "Environmental Decontamination & Restoration", link: "/services/environmental-decontamination" }
    ]
  },
  {
    category: "Residential Cleaning Services",
    items: [
      { name: "Carpet Cleaning", link: "/services/residential-carpet-cleaning" },
      { name: "Builders Clean (New Home Builds)", link: "/services/builders-clean-new-home-builds" },
      { name: "Driveway & Outdoor Surface Cleaning", link: "/services/driveway-outdoor-surface-cleaning" }
    ]
  }
];

export const HOME_DATA = {
  heroHeadlines: [
    "Trusted to Keep Workplaces Clean, Safe & Ready for Business.",
    "Cleaning Solutions Designed Around Your Business.",
    "Specialists in Commercial & Biohazard Cleaning."
  ],
  heroSubtitles: [
    "Reliable commercial cleaning and facility services delivered with professionalism, consistency and attention to detail.",
    "Every workplace is different. That's why we tailor our services to your industry, schedule and compliance requirements.",
    "Whether it's everyday cleaning or sensitive environments requiring specialist expertise, our trained teams deliver safe, compliant results you can depend on."
  ],
  introText: "More Than Cleaning. Complete Workplace Care. At SEQ Services, we do more than keep workplaces clean—we help organisations create safer, healthier and more productive environments. Combining commercial cleaning, specialist biohazard services and facility support, we deliver reliable solutions backed by experienced professionals, industry best practices and a commitment to exceptional service.",
  logos: Array.from(new Set([
    "https://memarcg.com/wp-content/uploads/2025/09/Memar-Construction-Group.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Colliers_logo.svg/1280px-Colliers_logo.svg.png",
    "https://cdn.worldvectorlogo.com/logos/john-holland.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT4CrvKloEXuNaws6CT0mt7rbaYc5jJHPM96fq5OI2w&s=10",
    "https://coast2coast.com.au/wp/wp-content/uploads/2014/08/00d9b1e39f02d57be65ad2a9a6eaa3b8.jpg",
    "https://media.licdn.com/dms/image/v2/C4D0BAQF0vfoVkn_Q_w/company-logo_200_200/company-logo_200_200/0/1631329812433?e=2147483647&v=beta&t=9i7oza0Ll_REH2YT0pYKYMpO-ZzfnEb-dc9MEqSAe8U",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_Blg0--KR2Es9tBufsdoUi-eOxRp5joFOKLUg4XG4w&s=10"
  ]))
};

export const ABOUT_DATA = {
  intro1: "SEQ Services is a proudly Queensland-owned and operated commercial cleaning company, providing reliable, high-quality cleaning solutions across Australia since 2014. We specialise in commercial cleaning for offices, construction sites, high-rise buildings, apartment complexes, educational facilities, and other commercial properties. Backed by an experienced workforce, we deliver tailored cleaning solutions for projects of all sizes.",
  intro2: "Trusted by businesses, retailers, builders, developers, schools, strata managers, and community organisations, we are committed to delivering exceptional service, outstanding cleaning standards, and dependable results. Every client has unique requirements, which is why we work closely with you to develop a cleaning solution that suits your facility, schedule, and budget. Contact SEQ Services today to discover how our professional team can help create a cleaner, healthier, and more welcoming environment.",
  values: [
    {
      title: "Quality Service",
      points: ["Safety is our priority.", "Exceptional cleaning standards.", "Reliable, consistent results."]
    },
    {
      title: "Communication",
      points: ["Clear and responsive.", "Transparent throughout every project.", "Customer-focused service."]
    },
    {
      title: "Teamwork",
      points: ["Skilled and experienced professionals.", "Working together for better outcomes.", "Flexible and dependable."]
    },
    {
      title: "Integrity",
      points: ["Honest and trustworthy.", "Delivering on our promises.", "Building lasting partnerships."]
    }
  ]
};

export type ServiceData = {
  id: string;
  title: string;
  category: 'commercial' | 'bio' | 'residential' | 'construction';
  categoryTitle: string;
  shortDesc: string;
  image: string;
  longDesc: string[];
  listIntro?: string;
  features: string[];
};

export const SERVICES_DATA: ServiceData[] = [
  // CATEGORY 1: COMMERCIAL SERVICES
  {
    id: "commercial-carpet-cleaning",
    title: "Carpet Cleaning",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "SEQ Services provides professional commercial carpet cleaning services that help maintain clean, hygienic, and welcoming workplaces across Australia.",
    image: "/images/service_carpet_hd.jpg",
    longDesc: [
      "SEQ Services provides professional commercial carpet cleaning services that help maintain clean, hygienic, and welcoming workplaces across Australia. Our experienced team delivers high-quality carpet cleaning solutions for offices, commercial buildings, retail spaces, educational facilities, healthcare environments, and other high-traffic areas, helping extend the life of your carpets while enhancing the appearance of your premises.",
      "Whether you require a one-off deep clean or a scheduled maintenance programme, we tailor our carpet cleaning services to suit your operational requirements, business hours, and budget. Using professional equipment and industry-approved cleaning methods, we effectively remove dirt, stains, allergens, and odours while minimising disruption to your daily operations.",
      "Our fully trained and insured technicians use safe, effective, and environmentally responsible cleaning products to restore the appearance and cleanliness of your carpets. Regular professional carpet cleaning not only improves the presentation of your workplace but also contributes to a healthier indoor environment for employees, customers, and visitors.",
      "Contact SEQ Services today to discuss your commercial carpet cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Carpet Cleaning Services include:",
    features: [
      "Commercial Office Carpet Cleaning",
      "Retail & Shopping Centre Carpet Cleaning",
      "Apartment & Common Area Carpet Cleaning",
      "Healthcare & Medical Facility Carpet Cleaning",
      "Education Facility Carpet Cleaning",
      "Hospitality & Accommodation Carpet Cleaning",
      "Spot & Stain Removal",
      "Deep Carpet Cleaning",
      "Odour Removal & Sanitisation",
      "Scheduled Carpet Maintenance Programmes"
    ]
  },
  {
    id: "commercial-pressure-cleaning",
    title: "Pressure Cleaning",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "Restore the appearance, safety, and value of your property with SEQ Services' professional commercial pressure cleaning services.",
    image: "/images/service_pressure_hd.jpg",
    longDesc: [
      "Pressure Cleaning Brisbane, with a Team you can trust to get it right! Hire SEQ Services for your regular facility maintenance or to achieve a deep clean using a well respected Brisbane commercial cleaning company. If your facility is now due for some TLC, SEQ Services is a reliable high pressure cleaning company that stands out from the rest because we have pride in what we do and enjoy leaving every completed project knowing it’s another job well done!",
      "SEQ Services offer fast pressure cleaning quotes throughout Brisbane, Logan City, Ipswich, Gold Coast and Sunshine Coast. SEQ Services are very organised, and we understand our client’s needs which is why Body Corporate, Estate Owners and Property Developers enjoy dealing with our highly reviewed pressure cleaning services.",
      "SEQ Services manage a professional workforce that is paid above award wages to respectfully take care of all your facility or building maintenance tasks no matter how dangerous or hard to reach they may seem. We pressure clean everything from top to bottom inside and out, so you don’t need to call in anyone else. Regular maintenance is key to keeping that fresh curbside appeal and preventing long term defects that become irreversible if not treated correctly.",
      "Our Business Development Manager will meet you onsite to evaluate your necessities working within strict time frames and budgets. We look forward to trying our pressure cleaning team to work out the most efficient means available that will save you money and keep your building in pristine condition for as long as possible. We clean it like our own, and we look forward to supporting you soon.",
      "Restore the appearance, safety, and value of your property with SEQ Services' professional commercial pressure cleaning services. We provide high-pressure cleaning solutions for commercial, industrial, residential, and public facilities across Australia, helping businesses maintain clean, safe, and well-presented environments.",
      "Whether you require a one-off deep clean or a scheduled maintenance programme, our experienced team delivers reliable, efficient, and high-quality results tailored to your property's specific requirements.",
      "Working with body corporates, property managers, developers, facility managers, and business owners, we clean a wide range of external surfaces using professional equipment and proven cleaning techniques that remove built-up dirt, grime, mould, algae, oil stains, and other contaminants.",
      "Safety is at the core of everything we do. Our fully trained and insured team follows strict safety procedures while delivering exceptional results, even in difficult-to-access locations. We work around your operational requirements to minimise disruption and complete every project safely, efficiently, and to the highest standard.",
      "Whether you're preparing a property for handover, enhancing its presentation, or implementing a preventative maintenance programme, SEQ Services provides dependable pressure cleaning solutions that help protect your investment and maintain its professional appearance.",
      "Contact SEQ Services today to arrange a site inspection and receive a tailored, no-obligation pressure cleaning quote."
    ],
    listIntro: "Our Pressure Cleaning Services include:",
    features: [
      "Building Exteriors",
      "Driveways & Pathways",
      "Car Parks & Basements",
      "Loading Docks",
      "Concrete & Paved Areas",
      "Building Entrances",
      "Public Spaces & Common Areas",
      "Apartment & Strata Complexes",
      "Industrial Facilities",
      "Retail & Commercial Precincts"
    ]
  },
  {
    id: "event-cleaning",
    title: "Event Cleaning",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "SEQ Services provides professional event cleaning and waste management services for events of all sizes across Australia.",
    image: "/images/service_event_hd.jpg",
    longDesc: [
      "Event Clean-Ups you can trust. SEQ Services are professional event cleaners with the ability to deliver hassle-free, high quality, and flexible cleaning & waste management services nationally. Our event clean-up services are tailored to each event and venue to ensure sustainable and low impact cleaning is correctly achieved. Our team is dedicated to help you create a cleaning solution including one or more services from the below or we can package them so you know here is nothing else left to worry about. SEQ Services manage the entire event cleaning process in compliance to what is required giving you the peace of mind everything will be done better than expected.",
      "SEQ Services provides professional event cleaning and waste management services for events of all sizes across Australia. Whether you're organising a community event, festival, sporting event, exhibition, concert, or corporate function, our experienced team delivers reliable, flexible, and hassle-free cleaning solutions before, during, and after your event.",
      "We understand that every event is unique. That's why we work closely with event organisers, venue managers, and local councils to develop tailored cleaning and waste management plans that meet your operational requirements, event schedule, and environmental objectives. Our dedicated team ensures your venue remains clean, safe, and welcoming while allowing you to focus on delivering a successful event.",
      "With a focus on safety, efficiency, and sustainability, SEQ Services delivers professional event cleaning solutions that help maintain a clean environment, enhance the visitor experience, and ensure your venue is restored quickly and efficiently once the event concludes.",
      "Contact SEQ Services today to discuss your event cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Event Cleaning Services include:",
    features: [
      "Event Cleaning Staff",
      "Pre-Event & Post-Event Cleaning",
      "During-Event Cleaning & Support",
      "Event Waste Collection & Disposal",
      "Waste Management Plans",
      "Litter Picking & Grounds Cleaning",
      "Washroom & Shower Facility Cleaning",
      "Sanitisation Services",
      "Servicing of Sanitary & Sharps Bins",
      "24/7 Event Cleaning Support",
      "Event Cleaning Supervision & Management"
    ]
  },
  {
    id: "industrial-abseiling",
    title: "Industrial Abseiling",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "SEQ Services provides professional industrial abseiling and rope access services for high-rise buildings and difficult-to-access structures across Australia.",
    image: "/images/service_abseiling_1784363475346.png",
    longDesc: [
      "Industrial Abseiling Services supplied by SEQ Services for all your High Rise Building duties. We offer accomplished Abseiling Technicians that are qualified tradesmen who are comfortable completing trade services at extreme heights. Our unsung heroes handle all your high rise, multilevel window cleaning, building wash-downs, roof restorations, on any hard to access building exteriors and structures.",
      "SEQ Services provides professional industrial abseiling and rope access services for high-rise buildings and difficult-to-access structures across Australia. Our qualified rope access technicians safely perform a wide range of maintenance, cleaning, and inspection services where traditional access methods are impractical or cost-prohibitive.",
      "Using industry-approved rope access techniques, we help property owners, facility managers, and building managers maintain their assets safely, efficiently, and with minimal disruption to daily operations.",
      "Safety is at the core of everything we do. Our experienced technicians are fully trained, certified, and equipped to work at height, delivering reliable, compliant, and high-quality services for commercial, industrial, and residential high-rise properties.",
      "Contact SEQ Services today to discuss your industrial abseiling requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Industrial Abseiling Services include:",
    features: [
      "High-Rise Window Cleaning",
      "Building Wash-Downs",
      "Building Façade Cleaning",
      "Roof Cleaning & Restoration Support",
      "External Building Maintenance",
      "High-Access Inspections",
      "Difficult Access Cleaning Services",
      "Rope Access Trade Support"
    ]
  },
  {
    id: "sweeping-and-scrubbing",
    title: "Sweeping & Scrubbing",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "Keep your facilities clean, safe, and well-presented with SEQ Services' professional sweeping and scrubbing services.",
    image: "/images/service_sweep_1784363501929.png",
    longDesc: [
      "Sweep & Scrub company, SEQ Services offer professional cleaners with a deep knowledge to complete a thorough surface clean that get noticed.",
      "Our Brisbane Sweeping and Scrubbing Company has completed countless surface cleaning projects in the commercial, construction and industrial space. We are equipped with correct licensing and insured for cleaning projects of any scope. We offer our clients advice on best processes and application to ensure the high standards of workmanship is achieved on your location.",
      "Whether it’s indoors or out, there is never a problem when engaging with our Sweep & Scrub service because we understand what it takes to deliver high standard finishes you can feel. Sweep & Scrub Service by SEQ Services is a quick and cost-effective way to keep your Building, and Carpark Spaces Free of Litter, Dirt and Debris. SEQ Services welcome all new clients to experience our flexible and affordable Sweep & Scrub solutions as we guarantee customer satisfaction is always achieved in every situation.",
      "Our Contracted Sweep and Scrubs cover a wide range of projects throughout Brisbane; Shopping Centres, Apartments, Sporting Events, Hospitals, Warehouses, Industrial Factories you name it we will Sweep & Scrub it.",
      "SEQ Services is a trusted contract car park sweeping company in Brisbane. We handle all types of Sweeping and cleaning duties and do it on budget and within the agreed time frames so you never have to stress about it again. Call SEQ Services Today!",
      "Keep your facilities clean, safe, and well-presented with SEQ Services' professional sweeping and scrubbing services. We provide reliable cleaning solutions for commercial, industrial, construction, and public environments across Australia, helping businesses maintain clean surfaces and a professional appearance.",
      "Whether you require a one-off deep clean or scheduled maintenance, our experienced team uses professional equipment and proven cleaning methods to remove dirt, dust, litter, stains, and debris from both indoor and outdoor surfaces. We tailor our services to suit your operational requirements, ensuring minimal disruption while delivering consistently high-quality results.",
      "Our fully trained and insured team is committed to delivering safe, efficient, and cost-effective cleaning solutions that help extend the life of your surfaces while creating cleaner, safer environments for employees, customers, and visitors.",
      "Contact SEQ Services today to discuss your sweeping and scrubbing requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Sweeping & Scrubbing Services include:",
    features: [
      "Car Parks & Basements",
      "Warehouses & Industrial Facilities",
      "Shopping Centres & Retail Precincts",
      "Apartment & Strata Complexes",
      "Construction Sites",
      "Sporting & Event Venues",
      "Hospitals & Healthcare Facilities",
      "Commercial Buildings",
      "Hard Surface & Pavement Cleaning",
      "Scheduled Sweeping & Scrubbing Maintenance"
    ]
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "A clean, hygienic workplace creates a healthier environment for employees, enhances your professional image, and leaves a lasting impression on clients and visitors.",
    image: "/images/service_office_1784363523583.png",
    longDesc: [
      "Office Cleaning by SEQ Service will leave your office hygienically clean and feel fresh. A clean office is a good office so put your trust into a team of commercial cleaners that understand what it takes to provide exceptional cleaning value.",
      "SEQ Services uses flexible cleaning schedules so all you need to do is pick your best times to have your office cleaned and we will get it done promptly with quality control practices that make a difference.",
      "By engaging with our wide range of cleaning tasks that are tailored to suit office spaces throughout Brisbane, our commercial cleaning company has fast become high achievers in cleanliness standards.",
      "SEQ Services pay their experience hardworking staff award wages so you will always receive a professional contract office cleaning service that is reliable and correctly managed so your workforce becomes more productive and happier team.",
      "Our Office Cleaning Services include Bathroom, Toilets, Telephones, Computers, Office Equipment, Kitchens, we are fussy about the cleaning products we use, non-toxic environmentally friendly products that perform. SEQ Services is passionate about leaving your office feeling fresh and clean every time.",
      "No micromanaging required because our Office Cleaning Service has been running for over a decade and we do whatever it takes to achieve customer satisfaction in every situation. We stand behind our company’s integrity towards achieving results be best sanitised environment for your staff and clients. From what we hear from our clientele there healthy clean office always is noticed by their customers, so first impressions are important. So if you are looking for an office cleaning company you can trust give our friendly and well organised team a call today you will be glad you did..",
      "A clean, hygienic workplace creates a healthier environment for employees, enhances your professional image, and leaves a lasting impression on clients and visitors. SEQ Services provides reliable office cleaning services for businesses of all sizes across Australia, delivering tailored cleaning solutions that keep your workplace looking its best.",
      "We understand that every business operates differently, which is why we offer flexible cleaning schedules designed around your working hours. Whether you require daily, weekly, or customised cleaning programmes, our experienced team delivers consistent, high-quality results with minimal disruption to your operations.",
      "Our fully trained, insured, and professional cleaning team uses high-quality, environmentally responsible cleaning products to create a clean, safe, and welcoming workplace. With a strong focus on quality, reliability, and customer satisfaction, we ensure your office consistently reflects the professional image of your business.",
      "Partner with SEQ Services for dependable office cleaning solutions that support a cleaner, healthier, and more productive workplace. Contact us today for a tailored, no-obligation quote."
    ],
    listIntro: "Our Office Cleaning Services include:",
    features: [
      "Workstations & Office Areas",
      "Reception & Common Areas",
      "Kitchens & Staff Break Rooms",
      "Bathrooms & Amenities",
      "Meeting & Board Rooms",
      "Telephones & High-Touch Surfaces",
      "Computer & Office Equipment Cleaning",
      "Waste Removal & Recycling",
      "Floor Vacuuming & Mopping",
      "Window & Glass Cleaning (Internal)",
      "Sanitisation & Disinfection Services"
    ]
  },
  {
    id: "commercial-window-cleaning",
    title: "Window Cleaning",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "Enhance the appearance of your property with SEQ Services' professional commercial window cleaning services.",
    image: "/images/service_window_1784363598846.png",
    longDesc: [
      "Window Cleaners from Brisbane helping you show off those stunning views on every level. SEQ Services make it easy to have crystal clear views all year round without it blowing your maintenance budget.",
      "Yes we are professional Window Cleaners who take on the important role of making sure your windows are continually maintained inside and out. Windows require proactive attention to ensure they are kept in pristine condition for the entire building to benefit. We help our clients maintain their facility maintenance responsibilities with packaged cleaning services that you know will be done thoroughly using the most efficient cleaning methods that produce the optimal outcome.",
      "SEQ Services have been dedicated since 2014 to deliver a full property maintenance service of the highest standards protecting your asset as best we can.",
      "We clean buildings of all shapes and sizes and package our services so you benefit big using our endless service of facility duties under the one roof.",
      "SEQ Service have many driving reasons to why we enjoy cleaning some of the biggest buildings throughout Brisbane, Gold Coast, Sunshine Coast and Sydney. We understand professional commercial window cleaning so don’t let a few dirty windows spoil your reputation.",
      "Give SEQ services a call for a fully guaranteed window cleaning experience that will leave a lasting impression on your workers and guest. SEQ Services solve your hard to reach window problems, using our Rope Access Cleaners that are cost effective and stealth",
      "Enhance the appearance of your property with SEQ Services' professional commercial window cleaning services. We provide safe, reliable, and high-quality window cleaning solutions for commercial buildings, offices, apartment complexes, retail centres, and high-rise properties across Australia.",
      "Clean windows not only improve the presentation of your building but also create a brighter, more welcoming environment for employees, customers, and visitors. Our experienced team delivers streak-free results using professional equipment and proven cleaning techniques to maintain your property's professional image.",
      "Whether you require a one-off clean or a scheduled maintenance programme, we tailor our services to suit your building, operational requirements, and budget while minimising disruption to your business.",
      "Our fully trained, insured, and certified team uses safe work practices and industry-approved equipment to deliver exceptional results on projects of all sizes. For buildings with difficult access, our qualified rope access technicians provide a safe, efficient, and cost-effective solution without the need for extensive scaffolding or elevated work platforms.",
      "Contact SEQ Services today to arrange a site inspection and receive a tailored, no-obligation window cleaning quote."
    ],
    listIntro: "Our Window Cleaning Services include:",
    features: [
      "Commercial Office Buildings",
      "High-Rise Window Cleaning",
      "Internal & External Window Cleaning",
      "Apartment & Strata Complexes",
      "Retail & Shopping Centres",
      "Building Façade Glass Cleaning",
      "Rope Access Window Cleaning",
      "Hard-to-Reach Window Cleaning",
      "Scheduled Window Maintenance Programmes"
    ]
  },
  {
    id: "warehouse-cleaning",
    title: "Warehouse Cleaning",
    category: "commercial",
    categoryTitle: "Commercial Cleaning Services",
    shortDesc: "SEQ Services provides professional warehouse cleaning services that help businesses maintain clean, safe, and efficient working environments across Australia.",
    image: "/images/service_warehouse.jpg",
    longDesc: [
      "SEQ Services provides professional warehouse cleaning services that help businesses maintain clean, safe, and efficient working environments across Australia. Our experienced team delivers tailored cleaning solutions for warehouses, distribution centres, logistics facilities, storage facilities, and industrial premises, ensuring your operations continue with minimal disruption.",
      "Warehouses experience constant foot traffic, machinery movement, dust accumulation, and debris build-up that can impact safety, productivity, and compliance. We work closely with our clients to develop customised cleaning schedules that suit operational requirements, whether it's a one-off deep clean or an ongoing maintenance programme.",
      "Our fully trained and insured cleaning professionals use commercial-grade equipment and industry-approved cleaning methods to maintain the highest standards of cleanliness, safety, and operational efficiency. We are committed to helping businesses create cleaner, healthier workplaces while supporting workplace health and safety requirements.",
      "Contact SEQ Services today to discuss your warehouse cleaning requirements and receive a tailored, no-obligation quote"
    ],
    listIntro: "Our Warehouse Cleaning Services include:",
    features: [
      "Warehouse Floor Sweeping & Scrubbing",
      "High-Level Dust Removal",
      "Racking & Shelving Cleaning",
      "Loading Dock & Dispatch Area Cleaning",
      "Storage Area Cleaning",
      "Warehouse Office & Amenities Cleaning",
      "Spill Cleanup & Waste Removal",
      "Internal & External Warehouse Cleaning",
      "Pressure Cleaning of Warehouse Exteriors",
      "Scheduled Warehouse Cleaning & Maintenance"
    ]
  },

  // CATEGORY 2: BIO CLEANING SERVICES
  {
    id: "biohazard-trauma-cleaning",
    title: "Biohazard & Trauma Cleaning",
    category: "bio",
    categoryTitle: "Bio Cleaning Services",
    shortDesc: "SEQ Services provides professional biohazard and trauma cleaning services, delivering safe, discreet, and compassionate support during some of life's most difficult situations.",
    image: "/images/biohazard_cleaning.jpg",
    longDesc: [
      "SEQ Services provides professional biohazard and trauma cleaning services, delivering safe, discreet, and compassionate support during some of life's most difficult situations. Our highly trained and certified technicians respond promptly to restore affected areas while helping to minimise further distress for families, property owners, businesses, and emergency service personnel.",
      "Using specialised equipment and industry-approved cleaning methods, we safely remove biohazard materials, disinfect contaminated areas, and restore properties to a clean and safe condition. Every project is completed with strict adherence to Australian health, safety, and environmental regulations, ensuring all hazardous materials are handled and disposed of correctly.",
      "We understand that every situation is unique. Our team works with professionalism, empathy, and complete confidentiality, allowing you to focus on what matters most while we manage the restoration process with care and respect.",
      "Our experienced technicians undergo ongoing specialist training to ensure every cleanup is completed safely, thoroughly, and in accordance with industry best practices. From initial response through to final restoration, we are committed to returning affected environments to a safe, hygienic, and habitable condition with the utmost professionalism and discretion.",
      "If you require immediate assistance, contact SEQ Services for a prompt, confidential, and compassionate response."
    ],
    listIntro: "Our Biohazard & Trauma Cleaning Services include:",
    features: [
      "Biohazard Cleaning",
      "Crime Scene Cleaning",
      "Forensic Cleaning",
      "Trauma & Suicide Scene Cleaning",
      "Blood & Bodily Fluid Cleanup",
      "Biohazard Waste Removal & Disposal",
      "Decontamination & Sanitisation",
      "Property Restoration Support"
    ]
  },
  {
    id: "property-recovery-services",
    title: "Property Recovery Services",
    category: "bio",
    categoryTitle: "Bio Cleaning Services",
    shortDesc: "SEQ Services provides professional property recovery services, helping individuals, families, property managers, and organisations restore properties affected by deceased estates, hoarding, and squalor conditions.",
    image: "/images/service_recovery.jpg",
    longDesc: [
      "SEQ Services provides professional property recovery services, helping individuals, families, property managers, and organisations restore properties affected by deceased estates, hoarding, and squalor conditions. We deliver compassionate, discreet, and respectful services across Australia, supporting our clients through what can often be challenging circumstances.",
      "Our experienced team understands that every situation is unique. We work with care and professionalism to safely restore properties to a clean, hygienic, and habitable condition, allowing families and property owners to focus on what matters most while we manage the recovery process.",
      "Using specialised equipment, industry-approved cleaning methods, and appropriate personal protective equipment (PPE), our trained technicians safely remove biological contaminants, mould, bacteria, waste, and other hazardous materials. Every project is completed with the utmost respect, confidentiality, and attention to detail to ensure the property is restored safely and professionally.",
      "Contact SEQ Services to discuss your property recovery requirements and receive professional, compassionate support tailored to your situation."
    ],
    listIntro: "Our Property Recovery Services include:",
    features: [
      "Deceased Estate Cleaning",
      "Hoarder & Squalor Cleaning",
      "Deep Hygiene Cleaning",
      "Property Decontamination & Sanitisation",
      "Mould & Bacteria Removal",
      "Waste Removal & Responsible Disposal",
      "Odour Elimination",
      "Property Restoration Support"
    ]
  },
  {
    id: "environmental-decontamination",
    title: "Environmental Decontamination & Restoration",
    category: "bio",
    categoryTitle: "Bio Cleaning Services",
    shortDesc: "SEQ Services provides professional environmental decontamination and restoration services to safely restore properties affected by mould, smoke and fire damage, hazardous chemicals, and other environmental contaminants.",
    image: "/images/environmental_restoration.jpg",
    longDesc: [
      "SEQ Services provides professional environmental decontamination and restoration services to safely restore properties affected by mould, smoke and fire damage, hazardous chemicals, and other environmental contaminants. Our specialist team delivers Australia-wide solutions using industry-approved equipment, proven remediation techniques, and strict safety protocols to protect the health of occupants and restore affected environments.",
      "Environmental contamination can pose significant health and safety risks if not managed correctly. Our experienced technicians conduct a thorough assessment of every property to identify the source of contamination and develop a tailored remediation plan that ensures the affected area is cleaned, decontaminated, and restored safely and effectively.",
      "Using specialised equipment and certified remediation processes, we safely remove mould, smoke residue, hazardous chemical contaminants, and other environmental hazards while helping to minimise ongoing health risks and property damage. Every project is completed with the highest standards of safety, professionalism, and environmental compliance.",
      "Whether responding to mould growth, fire damage, or hazardous contamination, SEQ Services provides reliable restoration solutions that help return your property to a safe, clean, and habitable condition.",
      "Contact SEQ Services today to discuss your environmental decontamination requirements and receive professional advice and a tailored, no-obligation assessment."
    ],
    listIntro: "Our Environmental Decontamination & Restoration Services include:",
    features: [
      "Mould Inspection & Removal",
      "Smoke & Fire Damage Restoration",
      "Meth Lab Decontamination",
      "Toxic Waste Cleanup & Disposal",
      "Odour Removal & Air Quality Treatment",
      "Surface Decontamination & Sanitisation",
      "Hazardous Material Removal",
      "Property Restoration Support"
    ]
  },

  // CATEGORY 3: RESIDENTIAL SERVICES
  {
    id: "residential-carpet-cleaning",
    title: "Carpet Cleaning",
    category: "residential",
    categoryTitle: "Residential Cleaning Services",
    shortDesc: "SEQ Services provides professional residential carpet cleaning services that help keep your home fresh, hygienic, and looking its best.",
    image: "/images/service_residential_carpet.jpg",
    longDesc: [
      "SEQ Services provides professional residential carpet cleaning services that help keep your home fresh, hygienic, and looking its best. Our experienced team delivers high-quality carpet cleaning solutions that remove embedded dirt, stains, allergens, and odours, helping extend the life of your carpets while creating a healthier living environment for your family.",
      "Whether you're preparing for a special occasion, moving in or out of your home, or simply looking to refresh your carpets, we tailor our services to suit your needs. Using professional equipment and proven cleaning techniques, we restore the appearance and cleanliness of carpets with minimal disruption to your home.",
      "Our fully trained and insured technicians use safe, effective, and environmentally responsible cleaning products to deliver outstanding results. We are committed to helping homeowners maintain clean, comfortable, and healthy living spaces with reliable, professional carpet cleaning services.",
      "Contact SEQ Services today to discuss your residential carpet cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Residential Carpet Cleaning Services include:",
    features: [
      "Deep Carpet Cleaning",
      "Spot & Stain Removal",
      "Odour Removal & Sanitisation",
      "High-Traffic Area Cleaning",
      "Move In & Move Out Carpet Cleaning",
      "Pre-Sale Property Carpet Cleaning",
      "Post-Renovation Carpet Cleaning",
      "Scheduled Carpet Maintenance"
    ]
  },
  {
    id: "builders-clean-new-home-builds",
    title: "Builders Clean (New Home Builds)",
    category: "residential",
    categoryTitle: "Residential Cleaning Services",
    shortDesc: "SEQ Services provides professional builders cleaning services for newly constructed homes across Australia.",
    image: "/images/service_builders_handover.jpg",
    longDesc: [
      "SEQ Services provides professional builders cleaning services for newly constructed homes across Australia. We work with builders, developers, and homeowners to ensure newly completed properties are presented to the highest standard before handover or occupancy.",
      "Construction projects often leave behind dust, debris, paint residue, adhesives, and building materials that require specialist cleaning. Our experienced team performs a thorough clean using professional equipment and proven processes to ensure your new home is spotless, safe, and ready to move into.",
      "Our fully trained and insured cleaning professionals understand the attention to detail required for new home handovers. We work efficiently to meet construction schedules while delivering exceptional cleaning standards that leave every property ready for its new owners.",
      "Contact SEQ Services today to arrange a professional builders clean for your new home or residential construction project."
    ],
    listIntro: "Our Builders Cleaning Services include:",
    features: [
      "Initial Builders Cleans",
      "Final Handover Cleans",
      "Internal & External Window Cleaning",
      "Removal of Construction Dust & Debris",
      "Floor Cleaning & Surface Polishing",
      "Bathroom & Kitchen Detailing",
      "Fixture & Fitting Cleaning",
      "Garage, Patio & Outdoor Area Cleaning",
      "Final Presentation Cleaning"
    ]
  },
  {
    id: "driveway-outdoor-surface-cleaning",
    title: "Driveway & Outdoor Surface Cleaning",
    category: "residential",
    categoryTitle: "Residential Cleaning Services",
    shortDesc: "SEQ Services provides professional driveway and outdoor surface cleaning services that restore the appearance of your home's exterior.",
    image: "/images/service_pressure_hd.jpg",
    longDesc: [
      "SEQ Services provides professional driveway and outdoor surface cleaning services that restore the appearance of your home's exterior. Using commercial-grade pressure cleaning equipment, we safely remove built-up dirt, mould, mildew, algae, stains, and grime from a wide range of outdoor surfaces.",
      "Regular outdoor surface cleaning not only improves your property's street appeal but also helps maintain safe, slip-resistant surfaces while protecting them from long-term deterioration. Whether you're preparing your home for sale or simply maintaining your property, our team delivers reliable, high-quality results every time.",
      "Our experienced team uses professional equipment and proven cleaning methods to restore outdoor surfaces without causing damage. We tailor every cleaning solution to suit your property, leaving your outdoor areas clean, refreshed, and looking their best.",
      "Contact SEQ Services today to discuss your driveway and outdoor surface cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Driveway & Outdoor Surface Cleaning Services include:",
    features: [
      "Driveway Pressure Cleaning",
      "Pathways & Walkways Cleaning",
      "Patio & Courtyard Cleaning",
      "Concrete Surface Cleaning",
      "Paved Area Cleaning",
      "Outdoor Entertaining Area Cleaning",
      "Garage Floor Cleaning",
      "Pool Surround Cleaning",
      "Mould, Moss & Algae Removal",
      "Pre-Sale Exterior Property Cleaning"
    ]
  },

  // CATEGORY 4: CONSTRUCTION & BUILDERS CLEANING SERVICES
  {
    id: "builders-final-handover-cleaning",
    title: "Builders Final & Handover Cleaning",
    category: "construction",
    categoryTitle: "Construction & Builders Cleaning Services",
    shortDesc: "SEQ Services provides professional builders final and handover cleaning services that prepare newly completed residential, commercial, and industrial properties for practical completion, client inspections, and final handover.",
    image: "/images/service_builders_handover.jpg",
    longDesc: [
      "SEQ Services provides professional builders final and handover cleaning services that prepare newly completed residential, commercial, and industrial properties for practical completion, client inspections, and final handover. Our experienced team works closely with builders, developers, project managers, and contractors to deliver high-quality cleaning solutions that ensure every project is presented to the highest professional standard.",
      "Whether you're completing a new build, fit-out, or refurbishment project, we tailor our builders cleaning services to suit your construction schedule, project milestones, and handover deadlines. Using professional equipment and proven cleaning methods, we remove construction dust, paint residue, adhesives, protective films, and other building debris to leave every space clean, polished, and ready for occupation.",
      "Our fully trained and insured cleaning professionals understand the high standards expected during the final stages of construction. We work efficiently to help builders achieve smooth project handovers while presenting completed properties in the best possible condition for owners, tenants, or purchasers.",
      "Contact SEQ Services today to discuss your builders cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Builders Final & Handover Cleaning Services include:",
    features: [
      "Builders Cleans",
      "New Build Cleaning",
      "Handover Cleaning",
      "Final / Sparkle Cleans",
      "Internal & External Window Cleaning",
      "Floor Cleaning & Surface Finishing",
      "Removal of Construction Dust & Debris",
      "Fixture & Fittings Cleaning",
      "Pre-Occupancy Cleaning"
    ]
  },
  {
    id: "construction-site-cleaning",
    title: "Construction Site Cleaning",
    category: "construction",
    categoryTitle: "Construction & Builders Cleaning Services",
    shortDesc: "SEQ Services provides professional construction site cleaning services that help builders and contractors maintain safe, organised, and compliant worksites throughout every stage of construction.",
    image: "/images/construction.png",
    longDesc: [
      "SEQ Services provides professional construction site cleaning services that help builders and contractors maintain safe, organised, and compliant worksites throughout every stage of construction. Our experienced team delivers reliable cleaning services for commercial, residential, civil, and industrial construction projects, supporting improved site presentation, workplace safety, and operational efficiency.",
      "Whether you require daily, weekly, or scheduled site cleaning, we tailor our services to meet your project requirements and construction programme. Our team works around your site operations to minimise disruption while maintaining clean amenities, work areas, site offices, and common spaces.",
      "Maintaining a clean construction site contributes to a safer working environment while creating a professional impression for workers, clients, inspectors, and visitors. Our fully trained and insured team delivers dependable cleaning services that support productivity and help projects operate efficiently from commencement through to completion.",
      "Contact SEQ Services today to discuss your construction site cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Construction Site Cleaning Services include:",
    features: [
      "Construction Site Cleaning",
      "Site Office Cleaning",
      "Site Amenities Cleaning",
      "Lunchroom & Kitchen Cleaning",
      "Toilet & Washroom Cleaning",
      "Common Area Cleaning",
      "Walkway & Access Area Cleaning",
      "Dust Control & General Site Housekeeping",
      "Scheduled Construction Site Cleaning"
    ]
  },
  {
    id: "post-construction-renovation-cleaning",
    title: "Post-Construction & Renovation Cleaning",
    category: "construction",
    categoryTitle: "Construction & Builders Cleaning Services",
    shortDesc: "SEQ Services provides professional post-construction and renovation cleaning services that transform newly built, renovated, and refurbished properties into clean, safe, and occupancy-ready environments.",
    image: "/images/service_post_renovation.jpg",
    longDesc: [
      "SEQ Services provides professional post-construction and renovation cleaning services that transform newly built, renovated, and refurbished properties into clean, safe, and occupancy-ready environments. Our experienced team delivers detailed cleaning solutions for residential homes, commercial premises, retail fit-outs, office refurbishments, and industrial facilities, ensuring every project is thoroughly cleaned before occupation or handover.",
      "Whether you're completing a renovation, commercial fit-out, extension, or construction project, we tailor our cleaning services to suit your project schedule, deadlines, and specific site requirements. Using professional equipment and industry-approved cleaning methods, we remove construction dust, paint splatter, adhesives, silicone residue, protective films, and other building debris, leaving every space spotless and ready for its intended use.",
      "Our fully trained and insured cleaning professionals understand that every completed project deserves a flawless finish. We take pride in delivering meticulous attention to detail, helping builders, renovators, property owners, and developers present their completed projects in the best possible condition while creating clean, safe, and welcoming environments.",
      "Contact SEQ Services today to discuss your post-construction and renovation cleaning requirements and receive a tailored, no-obligation quote."
    ],
    listIntro: "Our Post-Construction & Renovation Cleaning Services include:",
    features: [
      "Post-Construction Cleaning",
      "Renovation Cleaning",
      "Commercial Fit-Out Cleaning",
      "Office Refurbishment Cleaning",
      "Retail Fit-Out Cleaning",
      "Extension & Alteration Cleaning",
      "Display Home Cleaning",
      "Display Suite Cleaning",
      "Internal Window Cleaning",
      "Detailed Surface Cleaning",
      "Removal of Construction Dust & Debris",
      "Final Presentation Cleaning"
    ]
  }
];

export interface FAQItem {
  id: string;
  category: 'general' | 'commercial' | 'bio' | 'pricing';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    categoryLabel: "General",
    question: "Do You Provide Services Australia-Wide?",
    answer: "Yes. SEQ Services proudly delivers commercial cleaning, residential cleaning, Builders cleaning, bio cleaning, and specialist facility services Australia-wide. From single-site projects to multi-location contracts, our experienced team provides safe, reliable, and professional cleaning solutions tailored to the unique needs of businesses, homeowners, property managers, builders, and organisations."
  },
  {
    id: "faq-2",
    category: "general",
    categoryLabel: "General",
    question: "What Types of Cleaning Services Do You Provide?",
    answer: "SEQ Services offers a comprehensive range of commercial, residential, bio cleaning, and specialist facility services across Australia. Our capabilities include commercial and office cleaning, construction cleaning, carpet cleaning, pressure cleaning, window cleaning, event cleaning, industrial abseiling, biohazard cleaning, mould remediation, property recovery, environmental decontamination, and more. Every service is tailored to meet the unique needs of our clients."
  },
  {
    id: "faq-3",
    category: "general",
    categoryLabel: "General",
    question: "Do You Offer One-Off and Ongoing Cleaning Services?",
    answer: "Yes. We provide both one-off cleaning services and scheduled cleaning programmes. Whether you require a single deep clean, post-construction cleaning, emergency bio cleaning, or a long-term cleaning contract, we can develop a solution that suits your requirements, schedule, and budget."
  },
  {
    id: "faq-4",
    category: "commercial",
    categoryLabel: "Commercial Cleaning",
    question: "Can You Provide a Tailored Cleaning Solution?",
    answer: "Absolutely. We understand that no two sites are the same. Our team will assess your requirements and develop a customised cleaning solution based on your facility, operational needs, frequency, and compliance requirements to ensure the best possible outcome."
  },
  {
    id: "faq-5",
    category: "general",
    categoryLabel: "General",
    question: "Are Your Cleaning Staff Fully Trained and Insured?",
    answer: "Yes. Our team consists of trained, experienced, and fully insured cleaning professionals who follow industry best practices and strict safety procedures. We are committed to delivering high-quality services while maintaining a safe working environment for our clients, staff, and the public."
  },
  {
    id: "faq-6",
    category: "bio",
    categoryLabel: "Biohazard & Specialist",
    question: "Do You Provide Emergency Bio Cleaning Services?",
    answer: "Yes. Our specialist Bio Cleaning team responds to a range of sensitive situations, including biohazard cleaning, trauma and crime scene cleaning, deceased estate cleaning, hoarder and squalor cleaning, mould remediation, smoke and fire damage restoration, and environmental decontamination. We handle every situation with professionalism, discretion, and compassion."
  },
  {
    id: "faq-7",
    category: "commercial",
    categoryLabel: "Commercial Cleaning",
    question: "Which Industries Do You Work With?",
    answer: "SEQ Services supports a diverse range of industries, including commercial offices, construction, retail, healthcare, education, industrial facilities, government organisations, body corporates, property managers, residential clients, and event venues. We tailor our services to meet the operational and compliance requirements of each industry."
  },
  {
    id: "faq-8",
    category: "general",
    categoryLabel: "General",
    question: "Do You Use Safe and Environmentally Responsible Cleaning Products?",
    answer: "Yes. Wherever practical, we use high-quality cleaning products and proven cleaning methods that are safe, effective, and environmentally responsible. Our approach helps maintain healthy environments while delivering outstanding cleaning results."
  },
  {
    id: "faq-9",
    category: "pricing",
    categoryLabel: "Pricing & Quotes",
    question: "How Do I Request a Cleaning Quote?",
    answer: "Getting started is easy. Simply complete our online enquiry form, call our team, or send us an email. We'll discuss your requirements, arrange a site assessment if required, and provide a tailored, no-obligation quotation based on your specific cleaning needs."
  },
  {
    id: "faq-10",
    category: "general",
    categoryLabel: "General",
    question: "Why Choose SEQ Services?",
    answer: "SEQ Services combines industry experience, professional expertise, and a commitment to quality to deliver reliable cleaning solutions across Australia. We pride ourselves on providing tailored services, responsive customer support, trained professionals, and consistent results for commercial, residential, and specialist cleaning projects of every size."
  }
];

