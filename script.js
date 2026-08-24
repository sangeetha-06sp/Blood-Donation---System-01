/* =====================================
   DONOR REGISTRATION
===================================== */


/* =====================================
   AGE CALCULATION
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
            today.getDate()
            <
            birthDate.getDate()
        )

    ) {

        age--;

    }


    ageField.value =
        age + " years";

}



/* =====================================
   DONOR REGISTRATION
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


    const age =
        document
        .getElementById("age")
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



    /* AGE */

    const numericAge =
        parseInt(age);


    /* AGE CHECK */

    if (numericAge < 18) {

        showMessage(

            "registrationMessage",

            "🔴 Donor must be at least 18 years old.",

            "danger"

        );

        return;

    }


    if (numericAge > 65) {

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



    /* DONOR OBJECT */

    const donor = {

        donorId: donorId,

        name: name,

        contactNumber: phone,

        bloodGroup: bloodGroup,

        dateOfBirth: dob,

        age: numericAge,

        gender: gender,

        weight: Number(weight),

        address:
            document
            .getElementById("address")
            .value,

        location:
            document
            .getElementById("location")
            .value,

        donorType:
            document
            .getElementById("donorType")
            .value,

        emergencyAvailability:
            document
            .getElementById("emergency")
            .value,

        maximumDistance:
            document
            .getElementById("distance")
            .value,

        consent: true,

        registrationDate:
            new Date()
            .toISOString(),

        permanentDeferral: false,

        temporaryDeferral: false,

        medicalReview: false

    };



    /* SAVE LOCALLY */

    localStorage.setItem(

        "bloodConnectDonor",

        JSON.stringify(donor)

    );



    /* SUCCESS */

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



    /* SHOW PROFILE */

    displayDonorProfile(donor);

}



/* =====================================
   DISPLAY PROFILE
===================================== */

function displayDonorProfile(donor) {


    const section =
        document
        .getElementById(
            "profileSection"
        );


    const profile =
        document
        .getElementById(
            "profile"
        );


    section.style.display =
        "block";


    profile.innerHTML = `

        <div class="profile-grid">


            <div class="profile-item">

                <span>Donor ID</span>

                <strong>
                    ${donor.donorId}
                </strong>

            </div>


            <div class="profile-item">

                <span>Name</span>

                <strong>
                    ${donor.name}
                </strong>

            </div>


            <div class="profile-item">

                <span>Contact</span>

                <strong>
                    ${donor.contactNumber}
                </strong>

            </div>


            <div class="profile-item">

                <span>Blood Group</span>

                <strong>
                    ${donor.bloodGroup}
                </strong>

            </div>


            <div class="profile-item">

                <span>Date of Birth</span>

                <strong>
                    ${donor.dateOfBirth}
                </strong>

            </div>


            <div class="profile-item">

                <span>Current Age</span>

                <strong>
                    ${donor.age} years
                </strong>

            </div>


            <div class="profile-item">

                <span>Gender</span>

                <strong>
                    ${donor.gender}
                </strong>

            </div>


            <div class="profile-item">

                <span>Weight</span>

                <strong>
                    ${donor.weight} kg
                </strong>

            </div>


            <div class="profile-item">

                <span>Location</span>

                <strong>
                    ${donor.location || "Not provided"}
                </strong>

            </div>


            <div class="profile-item">

                <span>Emergency Availability</span>

                <strong>
                    ${donor.emergencyAvailability}
                </strong>

            </div>


            <div class="profile-item">

                <span>Registration Date</span>

                <strong>
                    ${new Date(
                        donor.registrationDate
                    ).toLocaleString()}
                </strong>

            </div>


            <div class="profile-item">

                <span>Eligibility Status</span>

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
        document
        .getElementById(
            elementId
        );


    element.innerHTML =

        `
        <div class="status ${type}">
            ${message}
        </div>
        `;

}