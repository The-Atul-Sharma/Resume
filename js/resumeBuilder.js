var bio = {
			"name" : "Atul Sharma",
			"role" : "Front-End Developer",
			"contacts" :{
					"mobile" : "+91-9549021503",
					"email" : "theatsharma@gmail.com",
					"github" : "theatsharma",
					"twitter" : "@atulsharma",
					"location" : "Jaipur"
			},
			"welcomeMessage" : "Hello",
			"skills" : [
			"Front-End Developer", "Java Application Developer", "Android Apps Developer", "Game Developer"
			],
			"bioPic" : "images/fry.jpg"
}

var education = {
	"schools":  [
	{
			"name" : "Govt Engineering College",
			"city" : "Bikaner",
			"degree" : "BTech",
			"branch" : "CS",
			"dates" : "August 2013 - April 2017"
		},
		{
			"name" : "NIIT",
			"city" : "Jaipur",
			"degree" : "Java Programmer",
			"branch" : "CS",
			"dates" : "2017"
		}

	],
	"onlineCourses" : [
		{
			"title" : "Android Developer",
			"school" : "Udacity",
			"dates" : "2015-2016",
			"url" : "http://udacity.com"
		},
		{
			"title" : "Front-End Developer",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://udacity.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Web Developer",
			"title" : "Development Leader",
			"dates" : "2014-2015",
			"location" : "Banglore",
			"description" : "blah blah blah"
		},
		{
			"employer" : "Programmer",
			"title" : "Software Engineer",
			"dates" : "2015-2017",
			"location" : "Mumbai",
			"description" : "blah blah blah"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Student Search Engine",
			"dates" : 2016,
			"description" : "Create a student search engine for help in find anything for a student online",
			"images" : "images/197x148.gif"
		},
		{
			"title" : "WebApp",
			"dates" : 2016,
			"description" : "Create a WebApp And Android App",
			"images" : "images/197x148.gif"
		}
	]
}

var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(formattedName);

var f

var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location)
$("#topContacts").prepend(formattedLocation);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").prepend(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").prepend(formattedGithub);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);


var WelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(WelcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedPic);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);

	var formattedskill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedskill);
}
function displayWorks(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").prepend(formattedLocation);
	}
}

displayWorks();

function SchoolsData(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].city);
		$(".education-entry:last").prepend(formattedLocation);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDegree = HTMLschoolMajor.replace("%data%",education.schools[school].branch);
		$(".education-entry:last").append(formattedDegree);

	}	

	for (course in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}

}

SchoolsData();


function projectsData(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);

		/*if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			}
		}*/
	}
}


projectsData();


/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});*/


function locationizer(work_obj) {
    var myLocations = [];
    for (var i in work_obj.jobs) {
        var loc = work_obj.jobs[i].location;
        myLocations.push(loc);
    }
    return myLocations;
}



function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}


//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);