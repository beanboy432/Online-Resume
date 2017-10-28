/*
This is empty on purpose! Your code to build the resume will go here.
 */
function formatAttributeItems(format, attribute) {
    var array = [];
    attribute.forEach(function(item) {
        array.push(format.replace("%data%", item));
    });
    return array;
}

var bio = {
    "name": "Tomas Rodriguez",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "510-375-1038",
        "email": "tprodriguez432@gmail.com",
        "github": "beanboy432",
        "location": "El Cerrito, CA 94530"
    },
    "welcomeMessage": '"Pleasure to meet you! Here is some information about me, my skills, my education and my work experience!"',
    "skills": ["HTML", "CSS", "JavaScript", "Python"],
    "biopic": "images/me.jpg",
    "display": function() {
        $("#banner").append(
            HTMLheaderName.replace("%data%", bio.name),
            HTMLheaderRole.replace("%data%", bio.role)
        );
        $("#topContacts, #footerContacts").append(
            HTMLmobile.replace("%data%", bio.contacts.mobile),
            HTMLemail.replace("%data%", bio.contacts.email),
            HTMLgithub.replace("%data%", bio.contacts.github)
        );
        $("#header").append(
            HTMLbioPic.replace("%data%", bio.biopic),
            HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
        );
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }
        $("#skills").append(formatAttributeItems(HTMLskills, bio.skills));
    }
};

var education = {
    "schools": [{
        "name": "Saint Mary's College of California",
        "location": "Moraga, CA",
        "degree": "Bachelor's Degree",
        "majors": ["Philosophy"],
        "dates": "August 2011 - May 2016",
        "url": "https://www.stmarys-ca.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "October 2017",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }],
    "display": function() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
        }
        education.schools.forEach(function(school) {
            $(".education-entry:last").append(
                HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree),
                HTMLschoolDates.replace("%data%", school.dates),
                HTMLschoolLocation.replace("%data%", school.location),
                HTMLschoolMajor.replace("%data%", school.majors)
            );
        });
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLonlineClasses);
            $(".online-entry:last").append(
                HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school),
                HTMLonlineDates.replace("%data%", course.dates),
                HTMLonlineURL.replace("%data%", course.url)
            );
        });
    }
};

var work = {
    "jobs": [{
            "employer": "Saint Leo the Great Elementary School",
            "title": "Extended Care Assistant",
            "location": "Oakland, CA",
            "dates": "August 2016 - in progress",
            "description": "Supervision of Elementary students from Kindergarten to Eighth Grade after school"
        },
        {
            "employer": "Freelance",
            "title": "Latin Teacher",
            "location": "Bay Area, CA",
            "dates": "January 2015 - in progress",
            "description": "Formal Ecclesiatic Latin instruction of Elementary, High School and adult students."
        }
    ],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append([
                HTMLworkEmployer.replace("%data%", job.employer) +
                HTMLworkTitle.replace("%data%", job.title),

                HTMLworkLocation.replace("%data%", job.location),
                HTMLworkDates.replace("%data%", job.dates),
                HTMLworkDescription.replace("%data%", job.description)
            ]);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Sign-in Sheet Producer (SISP)",
        "dates": "September 2017",
        "description": "SISP is a Google Spreadsheet that takes in the month, year, and grade and produces a sign in sheet.",
        "images": [
            "images/sign-in.png",
            "images/sign-in(1).png"
        ]
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
            if (projects.length > 0) {
                $("#projects").append(HTMLprojectStart);
            }
            $(".project-entry:last").append(
                HTMLprojectTitle.replace("%data%", project.title),
                HTMLprojectDates.replace("%data%", project.dates),
                HTMLprojectDescription.replace("%data%", project.description)
            );
            project.images.forEach(function(image) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images.image));
            });
        });
    }
};


function inName() {
    var newNames = bio.name.trim().split(" ");
    newNames[0] = newNames[0][0].toUpperCase() + newNames[0].slice(1).toLowerCase();
    newNames[1] = newNames[1].toUpperCase();
    var in_name = newNames[0] + " " + newNames[1];
    return in_name;
}

bio.display();
education.display();
work.display();
projects.display();
