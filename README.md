# Green Earth Alliance Website – README

## Prososal 1 of 2

I find Green Earth Alliance better than HealthBridge Africa because its goals are more in tune with my passion for sustainability, technology, and community development. While HealthBridge Africa is also important in addressing healthcare inequalities all over Africa, Green Earth Alliance focuses on climate change, rejuvenation of biodiversity, and equipping local communities to live in a sustainable manner. This resonates with me because the environment affects every aspect of living, including health, and addressing them at the root helps in creating long-term solutions for future generations. Furthermore, Green Earth Alliance's previous experience in ecosystem restoration, tree planting, and educating schools about climate change reflects an initiative and anticipatory approach to universal challenges.

Another reason I selected Green Earth Alliance is the innovation and youth empowerment potential it provides. The organization not only restores degraded land but also invests in green start-ups and reduces plastic waste with community action. This forward-thinking approach can offer both economic and environmental development and introduce lasting transformation through more than relief alone. HealthBridge Africa is more service-focused and is based on mobile clinics and direct provision of health. Even though that is extremely compelling, I was more drawn to the Green Earth Alliance's holistic vision of unifying education, advocacy, and sustainability to create a sustainable model of African communities. I believe that approaching a project with the Green Earth Alliance provides me with the potential to marry my computer science with meaningful environmental work.



**Github Link:**
https://github.com/VCSTDN2024/wede5020-part-1-assignment-1-Sylvester-N.git 
**Website Name and Domain**
*	Name: Green Earth Alliance
*	Domain: www.greenearthalliance.org
  
## History of the Organization
Green Earth Alliance (GEA) was founded in 2009 in Cape Town by environmental scientists, community activists, and educators who were passionate about tackling climate change and biodiversity loss. It started off as a small grassroots movement with tree planting and education campaigns, but over the years it has grown to support more than 150 projects across Africa and even work with international partners. The organization brings together thousands of volunteers every year to restore ecosystems and promote sustainability.

## Overview

Over the past years, GEA has planted more than 350,000 indigenous trees, restored degraded land, and reached 180 schools with climate awareness programs. They have also supported 75 green startups, empowering young entrepreneurs. Community-driven initiatives have already reduced plastic waste by 20 percent in partner areas.
Looking forward, the organization is aiming to plant 1 million trees by 2030, bring climate education to 500 schools in the next 5 years, support 200 eco-startups by 2028, and reduce plastic waste by 50 percent by 2027.
Goals and Objectives

### Main Goals:
* Restore ecosystems through local, community-driven projects.
*	Educate and empower people with sustainable practices.
*	Advocate for policy change and corporate accountability.
### Objectives:
*	Plant 1 million trees by 2030 through community partnerships and reforestation programs.
*	Reach 500 schools with climate awareness education in the next 5 years.
*	Support 200 eco-friendly startups by 2028 with grants and mentorship.
*	Reduce plastic waste by 50% by 2027 using recycling, clean-up campaigns, and community action.


## Website Functionality

The Green Earth Alliance website is designed to be both informational and interactive.
*	Home Page – Latest campaigns, success stories, and donation/volunteer links.
*	About Us – History, mission, leadership, and partners.
*	Projects Page – Interactive map of active and completed projects with filters.
*	Enquiry Page – Volunteer sign-ups, internships, and partnership opportunities.
*	Donate – Secure one-time and monthly donations with impact tracking.
*	Resources – Downloadable guides, toolkits, and research.
*	Contact Us – Contact forms, social links, office details, and FAQs.

  
## Accessibility

*	Multilingual support.
*	Fully responsive design for smartphones and tablets.
*	Accessibility-friendly with screen reader support, alt-text for images, and proper colour contrast.

## Design and Development Process 

As a student building this website, I designed and structured it using HTML inside Visual Studio Code because it is simple and effective for creating web pages. The process started with creating a folder for the project and saving each webpage as an .html file. I used semantic HTML tags like (header), (section), (article), and (footer) to keep the structure clean and easy to understand.
The navigation bar was created with a table format (table), (tr) and  (td) to make the menu easy to access. I also added images and gave them alt attributes for accessibility. To make sure the site is user-friendly on mobile, I applied the (meta name="viewport") tag in the (head) section so it scales properly on smaller screens.
Working in Visual Studio Code made the process smoother because of its extensions (Live Server), which allowed me to preview my work in real-time. I tested each page step by step, fixed any layout issues, and ensured that all the links between pages worked properly. Overall, the design process focused on simplicity, usability, and accessibility while sticking to the goals of Green Earth Alliance.


## Logo Design
The logo design of Green Earth Alliance reflects its mission of sustainability, community, and growth.

 
Figure 1:Logo

This simple but meaningful logo design ensures that the identity of the organisation is clear: protecting the Earth through alliances and sustainability.

## Sitemap
Below is the structure of the Green Earth Alliance website:

 



## Wireframe 
The wireframe shows the basic structure of each page before adding design and content. This helped me plan where elements like navigation, content, and footers go.

 
Figure 2: Wireframe

This wireframe guided me in organising the layout to make sure everything is accessible and easy for users to find. Later, styling was applied to make it visually appealing and responsive for mobile devices.
 
Figure 3:Homepage
 
Figure 4:About Us
 
Figure 5: Contact Us
 
Figure 6:Enquiry Page
 
Figure 7:Project Page


## Budget Estimate

Category	Estimated Cost
Domain registration & hosting	R2,000 annually
Website design & development	R40,000 one-time
Content creation (text, photos)	R10,000
Online donation system setup	R8,000
SEO & Digital Marketing (6 months)	R15,000
Accessibility compliance tools	R3,500
Maintenance & updates (annual)	R6,000
Staff training for content mgmt	R5,000
Total	R89,500

## Conclusion
The Green Earth Alliance website was designed to be more than just an online presence it is a tool for education, community involvement, and environmental action. As a first-year Computer Science student, working on this project gave me valuable practice in building websites using HTML and understanding how design choices can impact accessibility and usability. The site reflects the mission of Green Earth Alliance by being simple, user-friendly, and inclusive, while also supporting key features like donations, volunteer registration, and project tracking. Overall, this project not only helped me grow my technical skills but also showed me how technology can be used to support meaningful causes like sustainability and climate action.


# Green Earth Alliance Website

## Part 2 – CSS Styling and Responsive Design

### Introduction

The following report outlines the design process, CSS styling, and responsive design decisions made for the **Green Earth Alliance** site. It is a continuation of Part 1 work, with feedback included and a shared external stylesheet applied to all pages.

---

## CSS Styling

### External Stylesheets

Each page is linked to its respective external stylesheet (index.css, projects.css, get-involved.css) to enhance modularity. Updates and refinements can then be made easily without replicating inline styles.

### Base Styles

* **Background**: White for a clean and minimalistic look.
* **Reset**: Margins reset to "margin: 0px" everywhere and padding normalized.
* **Font Family**: (Franklin Gothic Medium, Arial Narrow, Arial, sans-serif) for title cases and **Arial/Helvetica** for body text.

css
body {
  background-color: white;

margin: 0px;}

### Typography

* **Headings** (h1, h2): Black text, font-sized using "rem" units for accessibility.
* **Paragraphs**: Mainly black text ("color: black") or green highlighting "rgb(18, 120, 23)" depending on the situation.
* **Font Sizes**: Defined using percentages and "rem" for responsive scaling.

css
h1 {
  color: black;
  font-size: 1.8rem;
}
p {
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
}


### Navigation Bar

The ".navbar" has a **green background** and links floated horizontally to the right.

* Links are block-level with "padding: 15px".
* Links switch color from black to **white** when hovered for contrast.

css
.navbar ul {
  list-style-type: none;
  background-color: rgb(18, 120, 23);
}
.navbar a:hover {
  color: white;
}


### Layout

* **Header & Footer**: White background, padded for spacing, and text aligned left.
* **Sections**: Content is padded ("padding: 10px") for readability.
* **Tables & Images**: Center-aligned with equal sizing; images anchored with "max-width: 100%" for responsiveness.

### Buttons

Styled with a **green color background** to match the navbar. Hover and active states lightly increase font size for interactivity.

css
button {
  background-color: rgb(18, 120, 23);
}
button:hover, button:active {
  font-size: 1.1rem;
}


---

## Responsive Design

### Breakpoints

* **Mobile (≤ 550px)**:

  * All structural elements (header, section, footer) span "100%" width.
* Navigation is divided into tiered links.
  * Images are resized with "max-width: 100%".

css
@media screen and (max-width:550px) {
  footer, section, header {
    width: 100%;
  }
}


### Relative Units

* Fonts utilize "rem" and "%" units in order to scale properly across devices.
* Layout widths are percentages so as not to have fixed pixel layouts.

### Responsive Images

* All images utilize "max-width: 100%" to encourage scaling without warping.

---

## Changes from Part 1

* **Inline styles removed** and substituted with external CSS for uniformity.
* **Navigation bar normalized** across all pages.
* **Typography tuned** to improve readability and uniformity.
* **Responsive rules added** for mobiles and small-screen devices.

---

## Screenshots


---

## Changelog

* Connected all HTML pages to external stylesheets.
* Applied uniform typography for headings and paragraphs.
* Hovered navigation bar styling.
* Added responsive design breaks at 550px.
* New buttons with interactivity on hover/active state.
* Ensured images scale responsively.

---




## References
*	Greenpeace International. (2023). Environmental Campaigning Best Practices. Retrieved from www.greenpeace.org 
*	Worldwide Fund for Nature (WWF). (2024). Community Conservation Models. Retrieved from www.wwf.org 
*	UNEP Africa Office. (2022). Sustainable Development in African Communities. United Nations Environment Programme.
*	Charity: Water. (2023). How We Use Donor Funds. Retrieved from www.charitywater.org 
*	Green Earth Alliance Internal Report (2024). Annual Impact Summary and Future Strategy (Fictional document).

 
Figure 8:Declaration


## Proposal 2 of 2

**Name of the Website**
Organization Name: HealthBridge Africa
Website Name: HealthBridge Initiative
Domain Name: www.healthbridgeafrica.org

**History of the Organization** 
health Bridge Africa was established in 2015 by a coalition of African health professionals, social workers, and community activists responding to widespread health inequalities in rural and peri-urban areas. The founders recognized the urgent need for accessible primary healthcare, mental health services, and health education.
Starting in Kenya and South Africa, health Bridge launched mobile clinics and wellness workshops that travelled to remote villages, providing essential services. By 2024, the NGO had reached over two hundred communities in eight countries across Sub-Saharan Africa.
Its core philosophy is that everyone deserves access to quality healthcare — regardless of geography, income, or social status.

**Goals and Objectives**
 **Goals:**
•	To increase access to healthcare in disadvantaged African communities.
•	To raise awareness on preventable diseases through education.
•	To reduce stigma surrounding mental health.
 **Objectives:**
•	Deploy twenty-five mobile health clinics across East and Southern Africa by 2026.
•	Train 1,000 community health workers by 2027.
•	Reach one million people with health education campaigns by 2030.
•	Launch free telehealth consultations in ten languages by 2026.



**Website Functionality**
The health Bridge Initiative website will be designed to inform, connect, and mobilize action. Here is what it will offer:

 **Home Page**
 
*	Slideshow with current campaigns.
*	Calls to action: "Donate", "Volunteer", "Request a Mobile Clinic".
*	News ticker with latest field updates.
* About Us
*	Mission, vision, and organizational history.
*	Founders and leadership team.
*	NGO registration and legal compliance info.
  
 **Our Programs**
 
*	Mobile Health Clinics
*	Mental Health & Counselling
*	Maternal Health & Nutrition
*	Youth Health Education
*	Emergency Medical Response
  
Each program page includes:
*	Location map
*	Testimonials
*	Gallery of field work
*	Progress trackers (e.g., “12,300 mothers helped”)
  
 **Get Involved**
*	Volunteer with us (application form).
*	Donate medical supplies or funds.
*	Partner with us (corporate & NGO partnerships).


**Donate**
*	Secure donation platform (Paystack, PayPal, EFT).
*	Recurring donations & crowdfunding drives.
*	Sponsor a clinic program feature.
  
 **Events**
*	Upcoming campaigns, health fairs, fundraisers.
*	Event registration and ticketing integration.
  
**Blog & Media**
*	Stories from the field
*	Medical advice from professionals
*	Videos, press releases, and podcasts
  
 **Contact Us**
*	Offices & regional hubs
*	Contact form with topic selection
*	WhatsApp & emergency hotline integration

 
Figure 9: Healthbridge Sitemap
 
Figure 10: Healthbridge wireframe

## Budget Estimate

Category	Estimated Cost (ZAR)
Domain and Hosting (2 years)	R2,500
Website Design and UX Development	R55,000
Content Creation (images, video, text)	R12,000
Multilingual and Accessibility Setup	R7,500
Online Donation Integration	R5,000
CMS Training for Staff	R4,000
Monthly Maintenance (1 year)	R6,000
Marketing and SEO Campaigns	R10,000
Social media and Newsletter Systems	R3,000
Total Estimated Budget	R105,000



## References
*	World Health Organization (WHO). (2023). Universal Health Coverage and Equity in Africa. Retrieved from www.who.int
*	Doctors Without Borders (MSF). (2024). Mobile Clinics and Crisis Response. Available at www.msf.org 
*	South African Department of Health. (2023). Community Health Strategy 2022–2027. Retrieved from www.health.gov.za 
*	UNICEF. (2023). Youth and Health in Africa: A Decade of Action. Available at www.unicef.org 
*	Health Bridge Africa Internal Planning Guide. (2024). (Fictional Source)

 
Figure 11:Declaration Form
