
document.addEventListener("DOMContentLoaded", () => {
const departments=["CSE","ECE","EE","ME","CE","PHY","HUM","CHEM"];
const browseDepartmentContainer=document.getElementById("browse-department");
const recentContainer = document.getElementById("recent-uploads");
const filterResultContainer=document.getElementById("filter-result");
const mobileMenuBtn=document.getElementById("mobile-menu-btn");
const uploads = [
  {
    title: "Data Structures Mid-Semester 2023",
    subject: "CSE",
    uploadedBy: "Alex Chen",
    time: "2 hours ago"
  },
  {
    title: "Digital Signal Processing Final 2022",
    subject: "ECE",
    uploadedBy: "Priya Singh",
    time: "1 day ago"
  },
  {
    title: "Thermodynamics Mid-semester 2023",
    subject: "ME",
    uploadedBy: "Michael Low",
    time: "3 days ago"
  },
  {
  title: "Structural Analysis end-semester 2024",
  subject: "CE",
  uploadedBy: "Tanvi Roy",
  time: "4 days ago"
},
{
  title: "Power Systems Mid-semester 2023",
  subject: "EE",
  uploadedBy: "Raj Mehta",
  time: "5 days ago"
},
{
  title: "Physics end-semester 2024",
  subject: "PHY",
  uploadedBy: "Nina Das",
  time: "6 days ago"
},
{
  title: "Organic Chemistry Final 2023",
  subject: "CHEM",
  uploadedBy: "Amar Yadav",
  time: "1 week ago"
},
{
  title: "Communication Skills end-semester 2023",
  subject: "HUM",
  uploadedBy: "Reema Nair",
  time: "2 weeks ago"
}
];

const subjectHues = {
  CSE: 220,
  ECE: 140,
  EE: 110,
  ME: 45,
  CE: 0,
  PHY: 200,
  HUM: 320,
  CHEM: 25
};

if(browseDepartmentContainer){
departments.forEach((dept)=>{
  const card =document.createElement("div");
  card.className="dept-card";
  card.textContent=dept;
  browseDepartmentContainer.appendChild(card);
});}


if(recentContainer){
uploads.forEach(upload => {
  const card = document.createElement("div");
  card.className = "upload-card";
  card.innerHTML = `
  <div class="first-row">
    <span class="subject">${upload.subject}</span>
    <span class="time">${upload.time}</span>
  </div>
    <h3 class="title" >${upload.title}</h3>
    <span class="uploader" >Uploaded by ${upload.uploadedBy}</span>
  `;
  
  const subjectSpan=card.querySelector(".subject");
  const hue=subjectHues[upload.subject]??210;
  subjectSpan.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
  subjectSpan.style.color = `hsl(${hue}, 80%, 25%)`;
  recentContainer.appendChild(card);
});}

if(mobileMenuBtn){
  mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    mobileMenuBtn.classList.toggle('rotate');
  });}
  

//filter result
if(filterResultContainer){
uploads.forEach(upload => {
  const card = document.createElement("div");
  card.className = "filters-card";
  card.innerHTML = `
  <div>
    <span class="subject">${upload.subject}</span>
  </div>
  
    <h3 class="title" >${upload.title}</h3>
    <div class="last-row">
      <span class="uploader" >Uploaded by ${upload.uploadedBy}</span>
      <span class="time" >${upload.time}</span>
    </div>
  `;
  
  const subjectSpan=card.querySelector(".subject");
  const hue=subjectHues[upload.subject]??210;
  subjectSpan.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
  subjectSpan.style.color = `hsl(${hue}, 80%, 25%)`;
  filterResultContainer.appendChild(card);
});}
  
});