from pathlib import Path

code = """document.addEventListener("DOMContentLoaded", function () {

    const donorData = localStorage.getItem("bloodConnectDonor");
    const donorTable = document.getElementById("donorTable");

    if (!donorData) {
        donorTable.innerHTML = `
            <tr>
                <td colspan="5">No donors registered yet.</td>
            </tr>
        `;
        return;
    }

    const donor = JSON.parse(donorData);

    // Display total donor count
    document.getElementById("totalDonors").textContent = "1";

    // Display blood group count
    const bloodGroupIds = {
        "A+": "aPositive",
        "A-": "aNegative",
        "B+": "bPositive",
        "B-": "bNegative",
        "O+": "oPositive",
        "O-": "oNegative",
        "AB+": "abPositive",
        "AB-": "abNegative"
    };

    const bloodGroup = donor.bloodGroup;

    if (bloodGroupIds[bloodGroup]) {
        document.getElementById(bloodGroupIds[bloodGroup]).textContent = "1";
    }

    // Display donor details
    donorTable.innerHTML = `
        <tr>
            <td>${donor.name || "N/A"}</td>
            <td>${donor.age || "N/A"}</td>
            <td>${donor.bloodGroup || "N/A"}</td>
            <td>${donor.location || "N/A"}</td>
            <td>
                <span class="status-online">Available</span>
            </td>
        </tr>
    `;
});
"""

path = Path("/mnt/data/donors.js")
path.write_text(code, encoding="utf-8")
print(f"Created: {path}")
