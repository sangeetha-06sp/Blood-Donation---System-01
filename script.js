/* =====================================
   BLOODCONNECT
   DONOR REGISTRATION MODULE
===================================== */


/* =====================================
   CALCULATE AGE FROM DOB
===================================== */

function calculateAge() {

    const dob =
        document.getElementById("dob").value;

    const ageField =
        document.getElementById("age");


    if (!dob) {

        ageField.value = "";

        return;

    }


    const birthDate =
        new Date(dob);

    const today =
        new Date();


    let age =
        today.getFullYear()
        -
        birthDate.getFullYear();


    const monthDifference =
        today.getMonth()
        -
        birthDate.getMonth();


    if (

        monthDifference < 0 ||

        (
            monthDifference === 0 &&
            today.getDate() <
            birthDate.getDate()
        )

    ) {

        age--;

    }


    ageField.value =
        age + " years";

}



/* =====================================
   REGISTER DONOR
===================================== */

function registerDonor() {


    const name =
        document
        .getElementById("donorName")
        .value
        .trim();


    const phone =
        document
        .getElementById("contactNumber")
        .value
        .trim();


    const bloodGroup =
        document
        .getElementById("bloodGroup")
        .value;


    const dob =
        document
        .getElementById("dob")
        .value;


    const gender =
        document
        .getElementById("gender")
        .value;


    const weight =
        document
        .getElementById("weight")
        .value;


    const consent =
        document
        .getElementById("consent")
        .checked;



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
        document
        .getElementById("age")
        .value;


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
        "DONOR-" +
        Date.now();



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
            document
            .getElementById("address")
            .value
            .trim(),

        location:
            document
            .getElementById("location")
            .value
            .trim(),

        donorType:
            document
            .getElementById("donorType")
            .value,

        emergencyAvailability:
            document
            .getElementById("emergency")
            .value,

        maximumTravelDistance:
            document
            .getElementById("distance")
            .value,

        consent: true,

        registrationDate:
            new Date().toISOString(),

        permanentDeferral: false,

        temporaryDeferral: false,

        medicalReview: false

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
        <strong>
            ${donorId}
        </strong>
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
        document.getElementById(
            "profileSection"
        );


    const profile =
        document.getElementById(
            "profile"
        );


    profileSection.style.display =
        "block";


    profile.innerHTML = `

        <div class="profile-grid">


            <div class="profile-item">

                <span>
                    Donor ID
                </span>

                <strong>
                    ${donor.donorId}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Full Name
                </span>

                <strong>
                    ${donor.name}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Contact Number
                </span>

                <strong>
                    ${donor.contactNumber}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Blood Group
                </span>

                <strong>
                    ${donor.bloodGroup}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Date of Birth
                </span>

                <strong>
                    ${donor.dateOfBirth}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Current Age
                </span>

                <strong>
                    ${donor.age} years
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Gender
                </span>

                <strong>
                    ${donor.gender}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Weight
                </span>

                <strong>
                    ${donor.weight} kg
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Location
                </span>

                <strong>
                    ${donor.location || "Not provided"}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Donor Type
                </span>

                <strong>
                    ${
                        donor.donorType === "first"
                        ? "First-time Donor"
                        : "Repeat Donor"
                    }
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Emergency Availability
                </span>

                <strong>
                    ${donor.emergencyAvailability}
                </strong>

            </div>


            <div class="profile-item">

                <span>
                    Eligibility
                </span>

                <strong>
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
        document.getElementById(
            elementId
        );


    element.innerHTML = `

        <div class="status ${type}">

            ${message}

        </div>

    `;

}