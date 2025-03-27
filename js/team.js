document.addEventListener("DOMContentLoaded", function () {
    fetch("jsons/team.json")
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById("team-container");

            data.forEach(org => {
                // Create a team group
                const teamGroup = document.createElement("div");
                teamGroup.className = "team-group";

                // Organization title
                const orgTitle = document.createElement("h3");
                orgTitle.textContent = org.org;
                teamGroup.appendChild(orgTitle);

                // Members container
                const membersContainer = document.createElement("div");
                membersContainer.className = "team-members";

                org.members.forEach(member => {
                    // Individual member card
                    const memberDiv = document.createElement("div");
                    memberDiv.className = "team-member";

                    // Avatar
                    const img = document.createElement("img");
                    img.src = `images/${member.avatar}`;
                    img.alt = member.name;
                    memberDiv.appendChild(img);

                    // Name
                    const name = document.createElement("h4");
                    name.textContent = member.name;
                    memberDiv.appendChild(name);

                    // Social Links
                    const socialLinks = document.createElement("div");
                    socialLinks.className = "social-links";

                    // X (Twitter)
                    if (member.x) {
                        const xLink = document.createElement("a");
                        xLink.href = member.x;
                        xLink.target = "_blank";
                        const xImg = document.createElement("img");
                        xImg.src = "images/x_icon.png";
                        xImg.alt = "X";
                        xLink.appendChild(xImg);
                        socialLinks.appendChild(xLink);
                    }

                    // LinkedIn
                    if (member.linkedin) {
                        const linkedinLink = document.createElement("a");
                        linkedinLink.href = member.linkedin;
                        linkedinLink.target = "_blank";
                        const linkedinImg = document.createElement("img");
                        linkedinImg.src = "images/linkedin_icon.png";
                        linkedinImg.alt = "LinkedIn";
                        linkedinLink.appendChild(linkedinImg);
                        socialLinks.appendChild(linkedinLink);
                    }

                    memberDiv.appendChild(socialLinks);
                    membersContainer.appendChild(memberDiv);
                });

                teamGroup.appendChild(membersContainer);
                teamContainer.appendChild(teamGroup);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
