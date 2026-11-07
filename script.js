/* ===================================
   NOVA NINE MEMBER DATABASE
=================================== */

const members = {

    NN001: {
        name: "Ayush Arjun Rachalwar",
        role: "Founder & Innovation Lead",
        image: "images/ayush.jpg",

        about:
        "A technology enthusiast passionate about innovation, software development and building impactful solutions.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "C"
        ],

        achievements: [
            "First Prize in DTIL Project",
            "Startup Competition Participant",
            "NOVA NINE Team Member"
        ],

        links: {
            linkedin: "#",
            github: "#"
        }
    },


    NN002: {
        name: "Member Two",
        role: "Technology Specialist",
        image: "images/member-placeholder.jpg",

        about:
        "A passionate member of NOVA NINE working on technology and innovative solutions.",

        skills: [
            "Python",
            "Technology",
            "Problem Solving"
        ],

        achievements: [
            "NOVA NINE Team Member"
        ],

        links: {
            linkedin: "#",
            github: "#"
        }
    },


    NN003: {
        name: "Member Three",
        role: "Creative & Design Specialist",
        image: "images/member-placeholder.jpg",

        about:
        "Focused on creativity, design and transforming innovative ideas into impactful experiences.",

        skills: [
            "Design",
            "Creativity",
            "UI/UX"
        ],

        achievements: [
            "NOVA NINE Team Member"
        ],

        links: {}
    },


    NN004: {
        name: "Member Four",
        role: "Research & Strategy Specialist",
        image: "images/member-placeholder.jpg",

        about:
        "Supports NOVA NINE through research, strategy and problem analysis.",

        skills: [
            "Research",
            "Strategy",
            "Analysis"
        ],

        achievements: [
            "NOVA NINE Team Member"
        ],

        links: {}
    },


    NN005: {
        name: "Member Five",
        role: "Development Specialist",
        image: "images/member-placeholder.jpg",

        about:
        "Works on developing innovative digital solutions for NOVA NINE.",

        skills: [
            "Programming",
            "Development",
            "Technology"
        ],

        achievements: [
            "NOVA NINE Team Member"
        ],

        links: {}
    },


    NN006: {
        name: "Member Six",
        role: "Operations Specialist",
        image: "images/member-placeholder.jpg",

        about:
        "Helps manage team activities and supports the execution of NOVA NINE projects.",

        skills: [
            "Management",
            "Planning",
            "Communication"
        ],

        achievements: [
            "NOVA NINE Team Member"
        ],

        links: {}
    },


    NN007: {
        name: "Member Seven",
        role: "Innovation Specialist",
        image: "images/member-placeholder.jpg",

        about:
        "Contributes new ideas and innovative approaches to NOVA NINE projects.",

        skills: [
            "Innovation",
            "Problem Solving",
            "Creativity"
        ],

        achievements: [
            "NOVA NINE Team Member"
        ],

        links: {}
    }

};


/* ===================================
   DISPLAY MEMBERS ON HOME PAGE
=================================== */

const teamGrid = document.getElementById("teamGrid");

if (teamGrid) {

    Object.keys(members).forEach(memberId => {

        const member = members[memberId];

        const card = document.createElement("div");

        card.className = "member-card";

        card.innerHTML = `

            <img
                src="${member.image}"
                alt="${member.name}"
            >

            <h3>${member.name}</h3>

            <div class="member-role">
                ${member.role}
            </div>

            <p>
                ${member.about}
            </p>

            <a
                href="profile.html?id=${memberId}"
                class="view-profile"
            >
                View Profile
            </a>

        `;

        teamGrid.appendChild(card);

    });

}


/* ===================================
   DISPLAY INDIVIDUAL PROFILE
=================================== */

const profileContainer =
    document.getElementById("profileContainer");


if (profileContainer) {

    /* Get ID from URL */

    const parameters =
        new URLSearchParams(window.location.search);

    const memberId =
        parameters.get("id");


    /* Find member */

    const member =
        members[memberId];


    /* If member exists */

    if (member) {

        /* Create skills */

        const skillsHTML =
            member.skills
            .map(skill =>
                `<span class="skill">${skill}</span>`
            )
            .join("");


        /* Create achievements */

        const achievementsHTML =
            member.achievements
            .map(achievement =>
                `<li>🏆 ${achievement}</li>`
            )
            .join("");


        /* Create social links */

        let linksHTML = "";

        if (member.links.linkedin) {

            linksHTML += `
                <a
                    href="${member.links.linkedin}"
                    target="_blank"
                >
                    LinkedIn
                </a>
            `;

        }


        if (member.links.github) {

            linksHTML += `
                <a
                    href="${member.links.github}"
                    target="_blank"
                >
                    GitHub
                </a>
            `;

        }


        /* Display profile */

        profileContainer.innerHTML = `

            <div class="profile-card">

                <div class="profile-header">

                    <img
                        src="${member.image}"
                        alt="${member.name}"
                        class="profile-image"
                    >

                    <h1>
                        ${member.name}
                    </h1>

                    <div class="profile-role">
                        ${member.role}
                    </div>

                    <div class="member-id">
                        NOVA NINE MEMBER • ${memberId}
                    </div>

                </div>


                <div class="profile-content">

                    <h2>About</h2>

                    <p>
                        ${member.about}
                    </p>


                    <h2>Skills & Expertise</h2>

                    <div class="skills-container">

                        ${skillsHTML}

                    </div>


                    <h2>Achievements & Contributions</h2>

                    <ul class="achievement-list">

                        ${achievementsHTML}

                    </ul>


                    ${
                        linksHTML
                        ?
                        `
                        <h2 style="margin-top:30px;">
                            Connect
                        </h2>

                        <div class="social-links">

                            ${linksHTML}

                        </div>
                        `
                        :
                        ""
                    }

                </div>

            </div>

        `;

    }

    /* Member not found */

    else {

        profileContainer.innerHTML = `

            <div class="error-box">

                <h2>
                    Member Not Found
                </h2>

                <p>
                    This NOVA NINE member profile
                    does not exist.
                </p>

                <br>

                <a
                    href="index.html"
                    class="view-profile"
                >
                    Return to Team
                </a>

            </div>

        `;

    }

}