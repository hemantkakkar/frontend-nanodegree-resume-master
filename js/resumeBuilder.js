"use strict"

var bio = {
    "name": "hemant kakkar",
    "role": "web developer",
    "contacts": {
        "mobile": "+917597505840",
        "email": "hemantkakkar77@gmail.com",
        "twitter": "hemantkakkar77",
        "github": "hemantkakkar",
        "location": "jaipur"
    },
    "welcomeMessage": "You are looking at my resume",
    "skills": ["awsomeness", "alertness", "perfection", "punctual"],
    "biopic": "images/fry.jpg"
};




bio.display = function() {

    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedrole);
    $("#header").prepend(formattedname);


    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    $("#topContacts").append(mobile);

    var email = HTMLemail.replace("%data%", bio.contacts.email);

    $("#topContacts").append(email);

    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#topContacts").append(twitter);

    var github = HTMLgithub.replace("%data%", bio.contacts.github);

    $("#topContacts").append(github);

    var loc = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(loc);
	
    $("#footerContacts").append(mobile);

    $("#footerContacts").append(email);

    $("#footerContacts").append(twitter);

    $("#footerContacts").append(github);

    $("#footerContacts").append(loc);

    var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(message);

    var image = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(image);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();



var work = {
    "jobs": [{
        "employer": "Clothing Store",
        "title": "Marketing Intern",
        "location": "Ajmer",
        "dates": "February - April 2014",
        "description": "Conducted a research project on prices of men's clothing"
    }, {
        "employer": "Non Profit",
        "title": "Digital Marketing Specialist",
        "location": "Delhi",
        "dates": "February - April 2015",
        "description": "Manage all digital marketing activities."
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedlocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedlocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();




var projects = {
    "projects": [{
        "title": "Build a website",
        "dates": "2016",
        "description": "Built a static website about a cake recipe.",
        "images": ["http://placekitten.com/200/200", "http://placekitten.com/300/300"]
    }]
};


projects.display = function() {
	projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);


    for (var i = 0; i < projects.projects[0].images.length; i++) {
        var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
        $(".project-entry:last").append(formattedImage);
    }
	});

};

projects.display();

var education = {
    "schools": [{
        "name": "SKIT",
        "degree": "B.Tech",
        "location": "jaipur",
        "dates": "August 2012 - 2016",
        "url": "skit.com",
        "majors": ["Electronics", "communication"]
    }, {
        "name": "Udacity",
        "degree": "Nanodegree",
        "location": "jaipur",
        "dates": "August 2016 - Present",
        "url": "udacity.com",
        "majors": ["Front-End", "Web Developer"]
    }],
    "onlineCourses": [{
        "title": "front-end web developer",
        "school": "udacity",
        "dates": "August 2016 - Present",
        "url": "udacity.com"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedTitle = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolTitle = formattedSchoolName + formattedTitle;
        $(".education-entry:last").append(formattedSchoolTitle);

        var formattedlocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedlocation);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedSchoolURL = HTMLschoolName.replace("%data%", school.url);
        $(".education-entry:last").append(formattedSchoolURL);



        if (school.majors.length > 0) {
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        }
    });
    education.onlineCourses.forEach(function(online) {
    $("#education").append(HTMLonlineClasses);
    var formattedonlineName = HTMLonlineTitle.replace("%data%", online.title);
    var formattedonlineschool = HTMLonlineSchool.replace("%data%", online.school);
    var formattedonlineTitle = formattedonlineName + formattedonlineschool;
    $(".education-entry:last").append(formattedonlineTitle);


    var formattedDates = HTMLprojectDates.replace("%data%", online.dates);
    $(".education-entry:last").append(formattedDates);


    var formattedurl = HTMLonlineURL.replace("%data%", online.url);
    $(".education-entry:last").append(formattedurl);
    });
};
education.display();




$("#mapDiv").append(googleMap);

