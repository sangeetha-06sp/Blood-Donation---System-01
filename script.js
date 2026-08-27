/* =====================================
   BLOODCONNECT
   DONOR REGISTRATION + SCREENING
===================================== */


/* =====================================
   PERMANENT DEFERRAL RULES
   ===================================== */

const permanentDeferralRules = [

    {
        id: "bloodborne_disease",
        question: "Have you ever been diagnosed with a blood-borne infection or disease that permanently prevents blood donation?",
        category: "Medical History",
        sourceCriterion: "Permanent-deferral review",
        reason: "History of a condition requiring permanent-deferral review."
    },

    {
        id: "organ_transplant",
        question: "Have you received an organ, tissue, or certain major transplant that requires permanent-deferral review?",
        category: "Medical History",
        sourceCriterion: "Permanent-deferral review",
        reason: "History of transplant requiring permanent-deferral review."
    },

    {
        id: "serious_condition",
        question: "Have you had a serious medical condition that your treating doctor has advised makes you permanently unsuitable for blood donation?",
        category: "Medical History",
        sourceCriterion: "Permanent-deferral review",
        reason: "Medical history requires Medical Officer assessment."
    },

    {
        id: "high_risk_exposure",
        question: "Have you had a medical or exposure history that a qualified healthcare professional has specifically advised requires permanent deferral from blood donation?",
        category: "Risk Assessment",
        sourceCriterion: "Permanent-deferral review",
        reason: "Reported history requires permanent-deferral review."
    },

    {
        id: "previous_rejection",
        question: "Have you previously been permanently deferred from blood donation by a blood centre or qualified Medical Officer?",
        category: "Donation History",
        sourceCriterion: "Permanent-deferral review",
        reason: "Previous permanent deferral requires Medical Officer review."
    }

];


/* =====================================
   CALCULATE AGE FROM DOB
===================================== */

function calculateAge() {

    const dob = document.getElementById("dob");
    const ageField = document.getElementById("age");

    if (!dob || !ageField) {
        return;
    }

    if (!dob.value) {
        ageField.value = "";
        return;
    }

    const birthDate = new Date(dob.value);
    const today = new Date();

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    ageField.value = age + " years";
}


/* =====================================
   REGISTER DONOR
===================================== */

function registerDonor() {

    const name =
        document.getElementById("donorName").value.trim();

    const phone =
        document.getElementById("contactNumber").value.trim();

    const bloodGroup =
        document.getElementById("bloodGroup").value;

    const dob =
        document.getElementById("dob").value;

    const gender =
        document.getElementById("gender").value;

    const weight =
        document.getElementById("weight").value;

    const consent =
        document.getElementById("consent").checked;


    /* REQUIRED FIELD CHECK */

    if (
        !name ||
        !phone ||
        !bloodGroup ||
        !dob ||
        !gender ||
        !weight
    ) {

        showMessage(
            "registrationMessage",
            "⚠️ Please complete all required fields.",
            "warning"
        );

        return;
    }


    /* CONSENT CHECK */

    if (!consent) {

        showMessage(
            "registrationMessage",
            "⚠️ Donor consent is required.",
            "warning"
        );

        return;
    }


    /* GET AGE */

    const ageText =
        document.getElementById("age").value;

    const age =
        parseInt(ageText);


    /* AGE CHECK */

    if (isNaN(age)) {

        showMessage(
            "registrationMessage",
            "⚠️ Please select a valid date of birth.",
            "warning"
        );

        return;
    }


    if (age < 18) {

        showMessage(
            "registrationMessage",
            "🔴 Donor must be at least 18 years old.",
            "danger"
        );

        return;
    }


    if (age > 65) {

        showMessage(
            "registrationMessage",
            "🔴 Donor is above the maximum age limit.",
            "danger"
        );

        return;
    }


    /* CREATE DONOR ID */

    const donorId =
        "DONOR-" + Date.now();


    /* CREATE DONOR RECORD */

    const donor = {

        donorId: donorId,

        name: name,

        contactNumber: phone,

        bloodGroup: bloodGroup,

        dateOfBirth: dob,

        age: age,

        gender: gender,

        weight: Number(weight),

        address:
            document.getElementById("address")
                ? document.getElementById("address").value.trim()
                : "",

        location:
            document.getElementById("location")
                ? document.getElementById("location").value.trim()
                : "",

        donorType:
            document.getElementById("donorType")
                ? document.getElementById("donorType").value
                : "",

        emergencyAvailability:
            document.getElementById("emergency")
                ? document.getElementById("emergency").value
                : "",

        maximumTravelDistance:
            document.getElementById("distance")
                ? document.getElementById("distance").value
                : "",

        consent: true,

        registrationDate:
            new Date().toISOString(),

        permanentDeferral: false,

        temporaryDeferral: false,

        medicalReview: false,

        medicalOfficerReviewRequired: false,

        automaticMatchingBlocked: false,

        permanentDeferralReasons: [],

        permanentDeferralScreeningDate: null

    };


    /* SAVE DONOR */

    localStorage.setItem(
        "bloodConnectDonor",
        JSON.stringify(donor)
    );


    /* SUCCESS MESSAGE */

    showMessage(
        "registrationMessage",

        `
        ✅ Donor registered successfully!

        <br><br>

        Donor ID:
        <strong>${donorId}</strong>
        `,

        "success"
    );


    /* DISPLAY PROFILE */

    displayDonorProfile(donor);

}


/* =====================================
   DISPLAY DONOR PROFILE
===================================== */

function displayDonorProfile(donor) {

    const profileSection =
        document.getElementById("profileSection");

    const profile =
        document.getElementById("profile");


    if (!profileSection || !profile) {
        return;
    }


    profileSection.style.display = "block";


    profile.innerHTML = `

        <div class="profile-grid">

            <div class="profile-item">
                <span>Donor ID</span>
                <strong>${donor.donorId}</strong>
            </div>

            <div class="profile-item">
                <span>Full Name</span>
                <strong>${donor.name}</strong>
            </div>

            <div class="profile-item">
                <span>Contact Number</span>
                <strong>${donor.contactNumber}</strong>
            </div>

            <div class="profile-item">
                <span>Blood Group</span>
                <strong>${donor.bloodGroup}</strong>
            </div>

            <div class="profile-item">
                <span>Date of Birth</span>
                <strong>${donor.dateOfBirth}</strong>
            </div>

            <div class="profile-item">
                <span>Current Age</span>
                <strong>${donor.age} years</strong>
            </div>

            <div class="profile-item">
                <span>Gender</span>
                <strong>${donor.gender}</strong>
            </div>

            <div class="profile-item">
                <span>Weight</span>
                <strong>${donor.weight} kg</strong>
            </div>

            <div class="profile-item">
                <span>Location</span>
                <strong>${donor.location || "Not provided"}</strong>
            </div>

            <div class="profile-item">
                <span>Donor Type</span>
                <strong>
                    ${
                        donor.donorType === "first"
                        ? "First-time Donor"
                        : "Repeat Donor"
                    }
                </strong>
            </div>

            <div class="profile-item">
                <span>Emergency Availability</span>
                <strong>
                    ${donor.emergencyAvailability || "Not provided"}
                </strong>
            </div>

            <div class="profile-item">
                <span>Eligibility</span>
                <strong id="profileEligibility">
                    Pending Screening
                </strong>
            </div>

        </div>

    `;

}


/* =====================================
   MESSAGE FUNCTION
===================================== */

function showMessage(
    elementId,
    message,
    type
) {

    const element =
        document.getElementById(elementId);

    if (!element) {
        return;
    }

    element.innerHTML = `

        <div class="status ${type}">
            ${message}
        </div>

    `;
}


/* =====================================
   LOAD PERMANENT DEFERRAL QUESTIONS
===================================== */

function loadPermanentDeferralQuestions() {

    const container =
        document.getElementById(
            "permanentDeferralQuestions"
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    permanentDeferralRules.forEach(
        (rule, index) => {

            const question =
                document.createElement("div");

            question.className =
                "deferral-question";


            question.innerHTML = `

                <div class="deferral-question-header">

                    <div class="deferral-number">
                        ${index + 1}
                    </div>

                    <div>

                        <div class="deferral-question-text">
                            ${rule.question}
                        </div>

                        <div class="deferral-category">

                            ${rule.category}
                            · Guideline criterion
                            ${rule.sourceCriterion}

                        </div>

                    </div>

                </div>


                <div class="deferral-options">

                    <label>

                        <input
                            type="radio"
                            name="deferral_${rule.id}"
                            value="yes"
                        >

                        Yes

                    </label>


                    <label>

                        <input
                            type="radio"
                            name="deferral_${rule.id}"
                            value="no"
                        >

                        No

                    </label>

                </div>

            `;


            container.appendChild(question);

        }
    );

}


/* =====================================
   SCREEN PERMANENT DEFERRAL
===================================== */

function screenPermanentDeferral() {

    const result =
        document.getElementById(
            "permanentDeferralResult"
        );


    if (!result) {
        return;
    }


    const flaggedRules = [];

    const unansweredRules = [];


    permanentDeferralRules.forEach(
        (rule) => {

            const selected =
                document.querySelector(
                    `input[name="deferral_${rule.id}"]:checked`
                );


            if (!selected) {

                unansweredRules.push(rule);

                return;
            }


            if (selected.value === "yes") {

                flaggedRules.push(rule);

            }

        }
    );


    /* CHECK UNANSWERED */

    if (unansweredRules.length > 0) {

        result.innerHTML = `

            <div class="permanent-result blocked">

                <strong>
                    ⚠️ Screening incomplete
                </strong>

                <p>
                    Please answer all permanent-deferral
                    screening questions before completing
                    this section.
                </p>

            </div>

        `;

        return;
    }


    /* GET DONOR */

    let donor =
        JSON.parse(
            localStorage.getItem(
                "bloodConnectDonor"
            )
        );


    if (!donor) {

        result.innerHTML = `

            <div class="permanent-result blocked">

                <strong>
                    ⚠️ Donor registration required
                </strong>

                <p>
                    Please register the donor before
                    completing permanent-deferral screening.
                </p>

            </div>

        `;

        return;
    }


    /* =================================
       PERMANENT FLAG FOUND
    ================================= */

    if (flaggedRules.length > 0) {

        const reasons =
            flaggedRules.map(
                rule => ({

                    criterion:
                        rule.sourceCriterion,

                    category:
                        rule.category,

                    reason:
                        rule.reason

                })
            );


        donor.permanentDeferral = true;

        donor.medicalOfficerReviewRequired = true;

        donor.automaticMatchingBlocked = true;

        donor.permanentDeferralReasons = reasons;

        donor.permanentDeferralScreeningDate =
            new Date().toISOString();


        localStorage.setItem(
            "bloodConnectDonor",
            JSON.stringify(donor)
        );


        const reasonList =
            flaggedRules
                .map(
                    rule =>
                        `
                        <li>
                            ${rule.reason}
                            <small>
                                (Criterion ${rule.sourceCriterion})
                            </small>
                        </li>
                        `
                )
                .join("");


        result.innerHTML = `

            <div class="permanent-result blocked">

                <strong>
                    🔴 Permanent Deferral Flag Generated
                </strong>

                <p>
                    One or more responses match
                    permanent-deferral review criteria.
                </p>

                <p>

                    <strong>
                        Automatic donor matching is BLOCKED.
                    </strong>

                </p>

                <p>
                    Medical Officer review is required
                    before any final donor-selection decision.
                </p>

                <ul class="flag-list">

                    ${reasonList}

                </ul>

            </div>

        `;


        updateEligibilityDisplay(
            "Medical Officer Review Required"
        );


        return;

    }


    /* =================================
       NO PERMANENT FLAG
    ================================= */

    donor.permanentDeferral = false;

    donor.medicalOfficerReviewRequired = false;

    donor.automaticMatchingBlocked = false;

    donor.permanentDeferralReasons = [];

    donor.permanentDeferralScreeningDate =
        new Date().toISOString();


    localStorage.setItem(
        "bloodConnectDonor",
        JSON.stringify(donor)
    );


    result.innerHTML = `

        <div class="permanent-result clear">

            <strong>
                🟢 No Permanent-Deferral Flag
            </strong>

            <p>
                No "Yes" response was recorded
                for the permanent-deferral
                screening questions.
            </p>

            <p>

                The donor can proceed to the
                <strong>
                    Temporary Deferral Screening
                </strong>
                stage.

            </p>

            <p>

                This is a screening result and
                does not replace Medical Officer
                assessment.

            </p>

        </div>

    `;


    updateEligibilityDisplay(
        "Proceed to Temporary Screening"
    );

}


/* =====================================
   UPDATE PROFILE ELIGIBILITY
===================================== */

function updateEligibilityDisplay(status) {

    const eligibility =
        document.getElementById(
            "profileEligibility"
        );

    if (eligibility) {
        eligibility.textContent = status;
    }

}


/* =====================================
   LOAD EXISTING DONOR PROFILE
===================================== */

function loadExistingDonor() {

    const savedDonor =
        localStorage.getItem(
            "bloodConnectDonor"
        );


    if (!savedDonor) {
        return;
    }


    try {

        const donor =
            JSON.parse(savedDonor);

        displayDonorProfile(donor);

    }
    catch (error) {

        console.error(
            "Unable to load donor profile:",
            error
        );

    }

}


/* =====================================
   START APPLICATION
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadPermanentDeferralQuestions();

        loadExistingDonor();

    }
);