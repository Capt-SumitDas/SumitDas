

// Define the coordinates as variables for easy modification
const CybersecurityStart = { x: 400, y: 230 };
const subCybersecurity1Start = { x: 700, y: 110 };
const subCybersecurity2Start = { x: 730, y: 160 };
const subCybersecurity3Start = { x: 700, y: 210 };
const subCybersecurity4Start = { x: 730, y: 260 };
const subCybersecurity5Start = { x: 700, y: 310 };
const subCybersecurity6Start = { x: 730, y: 360 };
const subCybersecurity7Start = { x: 700, y: 410 };
const subCybersecurity8Start = { x: 730, y: 460 };
const subCybersecurity9Start = { x: 700, y: 510 };
const subCybersecurity10Start = { x: 730, y: 560 };


const webdevStart = { x: 400, y: 330 };
const subwebdev1Start = { x: 700, y: 160 };
const subwebdev2Start = { x: 730, y: 210 };
const subwebdev3Start = { x: 700, y: 260 };
const subwebdev4Start = { x: 730, y: 310 };
const subwebdev5Start = { x: 700, y: 360 };
const subwebdev6Start = { x: 730, y: 410 };
const subwebdev7Start = { x: 700, y: 460 };

const ProgramingStart = { x: 400, y: 430 };
const subPrograming1Start = { x: 700, y: 310 };
const subPrograming2Start = { x: 730, y: 360 };
const subPrograming3Start = { x: 700, y: 410 };
const subPrograming4Start = { x: 730, y: 460 };
const subPrograming5Start = { x: 700, y: 510 };

const NetworkingStart = { x: 400, y: 530 };
const subNetworking1Start = { x: 700, y: 410 };

const OSStart = { x: 400, y: 630 };
const subOS1Start = { x: 700, y: 510 };
const subOS2Start = { x: 730, y: 560 };
const subOS3Start = { x: 700, y: 610 };

const PsychologyStart = { x: 400, y: 730 };
const subPsychology1Start = { x: 700, y: 610 };
const subPsychology2Start = { x: 730, y: 660 };
const subPsychology3Start = { x: 700, y: 710 };
const subPsychology4Start = { x: 730, y: 760 };
const subPsychology5Start = { x: 700, y: 810 };

const InternalsecurityStart = { x: 400, y: 830 };
const subInternalsecurity1Start = { x: 700, y: 710 };

const VersionControlStart = { x: 400, y: 930 };
const subVersionControl1Start = { x: 700, y: 710 };


function drawCurvedLineWithAdjustedArrow(lineGroup, pointA, pointB) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Calculate the control points for the two Bezier curves
    const controlPoint1X = pointA.x + (pointB.x - pointA.x) / 4;
    const controlPoint1Y = pointA.y;
    const controlPoint2X = pointB.x - (pointB.x - pointA.x) / 4;
    const controlPoint2Y = pointB.y;

    const d = `M ${pointA.x} ${pointA.y} Q ${controlPoint1X} ${controlPoint1Y} ${pointA.x + (pointB.x - pointA.x) / 2} ${(pointA.y + pointB.y) / 2} Q ${controlPoint2X} ${controlPoint2Y} ${pointB.x} ${pointB.y}`;

    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "white"); // Change the line color here
    path.setAttribute("stroke-width", "2"); // Change the line thickness here

    lineGroup.appendChild(path);

    // Animate the drawing of the line
    path.style.strokeDasharray = path.getTotalLength(); // Set the length of the line
    path.style.strokeDashoffset = path.getTotalLength(); // Set the offset to the length of the line
    path.style.animation = "drawLine 2s linear forwards"; // Use CSS keyframes to animate the line drawing

    
}

function hideAllSubsections() {
    const subsections = document.querySelectorAll("[data-section]");
    subsections.forEach(subsection => {
        subsection.style.display = "none";
    });
}

function hideAllSubsectionNames() {
    const subsectionNames = document.querySelectorAll("[data-section] text");
    subsectionNames.forEach(subsectionName => {
        subsectionName.style.display = "none";
    });
}

function showSubsections(sectionId) {
    hideAllSubsections();
    hideAllSubsectionNames(); // Hide all subsection names before showing the relevant ones

    const subsections = document.querySelectorAll(`[data-section="${sectionId}"]`);
    subsections.forEach(subsection => {
        subsection.style.display = "block";
    });

    const subsectionNames = document.querySelectorAll(`[data-section="${sectionId}"] text`);
    subsectionNames.forEach(subsectionName => {
        subsectionName.style.display = "block";
    });

    // Remove existing lines from the line group
    const lineGroup = document.getElementById("lineGroup");
    while (lineGroup.firstChild) {
        lineGroup.removeChild(lineGroup.firstChild);
    }

    // Draw the lines for the current section and its subsections
    if (sectionId === "Cybersecurity") {
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity1Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity2Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity3Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity4Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity5Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity6Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity7Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity8Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity9Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, CybersecurityStart, subCybersecurity10Start);
    } else if (sectionId === "webdev") {
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev1Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev2Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev3Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev4Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev5Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev6Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, webdevStart, subwebdev7Start);
    } else if (sectionId === "Programing") {
        drawCurvedLineWithAdjustedArrow(lineGroup, ProgramingStart, subPrograming1Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, ProgramingStart, subPrograming2Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, ProgramingStart, subPrograming3Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, ProgramingStart, subPrograming4Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, ProgramingStart, subPrograming5Start);
    } else if (sectionId === "Networking") {
        drawCurvedLineWithAdjustedArrow(lineGroup, NetworkingStart, subNetworking1Start);

    }
    else if (sectionId === "OS") {
        drawCurvedLineWithAdjustedArrow(lineGroup, OSStart, subOS1Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, OSStart, subOS2Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, OSStart, subOS3Start);
    }
    else if (sectionId === "Psychology") {
        drawCurvedLineWithAdjustedArrow(lineGroup, PsychologyStart, subPsychology1Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, PsychologyStart, subPsychology2Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, PsychologyStart, subPsychology3Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, PsychologyStart, subPsychology4Start);
        drawCurvedLineWithAdjustedArrow(lineGroup, PsychologyStart, subPsychology5Start);
    }
    else if (sectionId === "Internalsecurity") {
        drawCurvedLineWithAdjustedArrow(lineGroup, InternalsecurityStart, subInternalsecurity1Start);
    }
    else if (sectionId === "VersionControl") {
        drawCurvedLineWithAdjustedArrow(lineGroup, VersionControlStart, subVersionControl1Start);
    }
}
