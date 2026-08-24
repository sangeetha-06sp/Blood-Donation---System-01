/*
====================================================
 BLOODCONNECT
 PERMANENT DEFERRAL SCREENING RULES

 SOURCE:
 Guidelines for Blood Donor Selection and
 Blood Donor Deferral 2025

 IMPORTANT:
 These are screening flags only.
 Final donor-selection decision requires
 Medical Officer assessment.
====================================================
*/

const permanentDeferralRules = [

    {
        id: "respiratory_severe",
        category: "Respiratory Diseases",
        question:
            "Does the donor have severe obstructive or restrictive respiratory disease?",
        sourceCriterion: "23",
        reason:
            "Severe obstructive or restrictive respiratory disease"
    },

    {
        id: "open_heart_surgery",
        category: "Surgical Procedures",
        question:
            "Has the donor undergone open-heart surgery, including bypass surgery?",
        sourceCriterion: "27",
        reason:
            "Open-heart / bypass surgery"
    },

    {
        id: "cancer_surgery",
        category: "Surgical Procedures",
        question:
            "Has the donor undergone cancer surgery?",
        sourceCriterion: "28",
        reason:
            "Cancer surgery"
    },

    {
        id: "active_cardiac_symptoms",
        category: "Cardio-Vascular Diseases",
        question:
            "Does the donor currently have active cardiac symptoms such as chest pain, shortness of breath or swelling of the feet?",
        sourceCriterion: "30",
        reason:
            "Active cardiac symptoms"
    },

    {
        id: "myocardial_infarction",
        category: "Cardio-Vascular Diseases",
        question:
            "Has the donor had a myocardial infarction (heart attack)?",
        sourceCriterion: "31",
        reason:
            "Myocardial infarction"
    },

    {
        id: "cardiac_medication",
        category: "Cardio-Vascular Diseases",
        question:
            "Is the donor taking the cardiac medications specified in the guideline (Digitalis or Nitro-glycerine)?",
        sourceCriterion: "32",
        reason:
            "Specified cardiac medication"
    },

    {
        id: "hypertensive_heart_disease",
        category: "Cardio-Vascular Diseases",
        question:
            "Does the donor have hypertensive heart disease?",
        sourceCriterion: "33",
        reason:
            "Hypertensive heart disease"
    },

    {
        id: "coronary_artery_disease",
        category: "Cardio-Vascular Diseases",
        question:
            "Does the donor have coronary artery disease?",
        sourceCriterion: "34",
        reason:
            "Coronary artery disease"
    },

    {
        id: "angina",
        category: "Cardio-Vascular Diseases",
        question:
            "Does the donor have angina pectoris?",
        sourceCriterion: "35",
        reason:
            "Angina pectoris"
    },

    {
        id: "rheumatic_heart",
        category: "Cardio-Vascular Diseases",
        question:
            "Does the donor have rheumatic heart disease with residual damage?",
        sourceCriterion: "36",
        reason:
            "Rheumatic heart disease with residual damage"
    },

    {
        id: "organic_epilepsy",
        category: "Central Nervous System",
        question:
            "Does the donor have convulsions or epilepsy with an organic cause?",
        sourceCriterion: "38",
        reason:
            "Convulsions/epilepsy with organic cause"
    },

    {
        id: "schizophrenia",
        category: "Psychiatric Diseases",
        question:
            "Does the donor have schizophrenia?",
        sourceCriterion: "39",
        reason:
            "Schizophrenia"
    },

    {
        id: "insulin",
        category: "Endocrine Disorders",
        question:
            "Does the donor require insulin for diabetes?",
        sourceCriterion: "41",
        reason:
            "Diabetes requiring insulin"
    },

    {
        id: "diabetes_multiorgan",
        category: "Endocrine Disorders",
        question:
            "Does the donor have diabetes with multi-organ complications?",
        sourceCriterion: "41",
        reason:
            "Diabetes with multi-organ complications"
    },

    {
        id: "thyrotoxicosis",
        category: "Endocrine Disorders",
        question:
            "Does the donor have thyrotoxicosis?",
        sourceCriterion: "42",
        reason:
            "Thyrotoxicosis"
    },

    {
        id: "malignant_thyroid_tumour",
        category: "Endocrine Disorders",
        question:
            "Does the donor have a history of malignant thyroid tumour?",
        sourceCriterion: "42",
        reason:
            "History of malignant thyroid tumour"
    },

    {
        id: "other_endocrine",
        category: "Endocrine Disorders",
        question:
            "Does the donor have another endocrine disorder that the guideline classifies for permanent deferral?",
        sourceCriterion: "44",
        reason:
            "Other endocrine disorder"
    },

    {
        id: "hepatitis_bc",
        category: "Liver Diseases / Hepatitis",
        question:
            "Is the donor a known case of Hepatitis B or Hepatitis C?",
        sourceCriterion: "45",
        reason:
            "Known Hepatitis B/C"
    },

    {
        id: "unknown_hepatitis",
        category: "Liver Diseases / Hepatitis",
        question:
            "Does the donor have hepatitis of unknown type?",
        sourceCriterion: "45",
        reason:
            "Unknown hepatitis"
    },

    {
        id: "hepatitis_contact",
        category: "Liver Diseases / Hepatitis",
        question:
            "Is the donor a spouse, partner or close contact of an individual suffering from Hepatitis B or C?",
        sourceCriterion: "46",
        reason:
            "Close contact of Hepatitis B/C case"
    },

    {
        id: "chronic_liver",
        category: "Liver Diseases",
        question:
            "Does the donor have chronic liver disease or liver failure?",
        sourceCriterion: "50",
        reason:
            "Chronic liver disease / liver failure"
    },

    {
        id: "hiv_risk",
        category: "HIV Infection / AIDS",
        question:
            "Does the donor fall within an HIV-risk category listed in the guideline?",
        sourceCriterion: "51",
        reason:
            "HIV-risk category specified by guideline"
    },

    {
        id: "hiv_positive",
        category: "HIV Infection / AIDS",
        question:
            "Is the donor a known HIV-positive person?",
        sourceCriterion: "52",
        reason:
            "Known HIV-positive status"
    },

    {
        id: "hiv_partner",
        category: "HIV Infection / AIDS",
        question:
            "Is the donor a spouse/partner of a person living with HIV/AIDS?",
        sourceCriterion: "52",
        reason:
            "Spouse/partner of PLHA"
    },

    {
        id: "aids_symptoms",
        category: "HIV Infection / AIDS",
        question:
            "Does the donor have symptoms suggestive of AIDS as described in the guideline?",
        sourceCriterion: "53",
        reason:
            "Symptoms suggestive of AIDS"
    },

    {
        id: "syphilis",
        category: "Sexually Transmitted Infections",
        question:
            "Does the donor have syphilis?",
        sourceCriterion: "54",
        reason:
            "Syphilis"
    },

    {
        id: "gonorrhoea",
        category: "Sexually Transmitted Infections",
        question:
            "Does the donor have gonorrhoea?",
        sourceCriterion: "55",
        reason:
            "Gonorrhoea"
    },

    {
        id: "leishmaniasis",
        category: "Other Infectious Diseases",
        question:
            "Does the donor have a history of leishmaniasis?",
        sourceCriterion: "61",
        reason:
            "Leishmaniasis"
    },

    {
        id: "leprosy",
        category: "Other Infectious Diseases",
        question:
            "Does the donor have leprosy?",
        sourceCriterion: "62",
        reason:
            "Leprosy"
    },

    {
        id: "chronic_kidney",
        category: "Kidney Diseases",
        question:
            "Does the donor have chronic kidney infection, kidney disease or renal failure?",
        sourceCriterion: "67",
        reason:
            "Chronic kidney disease / renal failure"
    },

    {
        id: "stomach_ulcer",
        category: "Digestive System",
        question:
            "Does the donor have a stomach ulcer with symptoms or recurrent bleeding?",
        sourceCriterion: "70",
        reason:
            "Symptomatic or recurrently bleeding stomach ulcer"
    },

    {
        id: "autoimmune",
        category: "Autoimmune Disorders",
        question:
            "Does the donor have one of the specified autoimmune disorders such as SLE, scleroderma, dermatomyositis, ankylosing spondylitis or severe rheumatoid arthritis?",
        sourceCriterion: "71",
        reason:
            "Specified autoimmune disorder"
    },

    {
        id: "polycythemia_vera",
        category: "Blood Disorders",
        question:
            "Does the donor have primary Polycythemia Vera?",
        sourceCriterion: "72",
        reason:
            "Primary Polycythemia Vera"
    },

    {
        id: "bleeding_disorder",
        category: "Blood Disorders",
        question:
            "Does the donor have a bleeding disorder or unexplained bleeding tendency?",
        sourceCriterion: "73",
        reason:
            "Bleeding disorder / unexplained bleeding tendency"
    },

    {
        id: "malignancy",
        category: "Cancer",
        question:
            "Does the donor have malignancy?",
        sourceCriterion: "74",
        reason:
            "Malignancy"
    },

    {
        id: "donation_allergy",
        category: "Allergic Disorders",
        question:
            "Does the donor have an allergy to a substance used in the blood donation process?",
        sourceCriterion: "75",
        reason:
            "Allergy to substance used in donation process"
    },

    {
        id: "cold_urticaria",
        category: "Allergic Disorders",
        question:
            "Does the donor experience cold urticaria?",
        sourceCriterion: "75",
        reason:
            "Cold urticaria"
    },

    {
        id: "severe_allergy",
        category: "Allergic Disorders",
        question:
            "Does the donor have a history of severe allergy?",
        sourceCriterion: "75",
        reason:
            "History of severe allergy"
    },

    {
        id: "haemoglobinopathy",
        category: "Blood Disorders",
        question:
            "Does the donor have a haemoglobinopathy or red-cell enzyme deficiency with anemia as described in the guideline?",
        sourceCriterion: "76",
        reason:
            "Haemoglobinopathy / red-cell enzyme deficiency with anemia"
    },

    {
        id: "etretinate",
        category: "Medication",
        question:
            "Has the donor used Etretinate?",
        sourceCriterion: "92",
        reason:
            "Etretinate"
    },

    {
        id: "malignant_radioactive",
        category: "Medication / Radioactive Materials",
        question:
            "Has the donor received radioactive material for a malignant condition?",
        sourceCriterion: "94",
        reason:
            "Radioactive material for malignant condition"
    },

    {
        id: "insulin_medication",
        category: "Medication",
        question:
            "Is the donor taking insulin?",
        sourceCriterion: "98",
        reason:
            "Insulin"
    },

    {
        id: "permanent_medication",
        category: "Medication",
        question:
            "Is the donor taking any of the medications listed for permanent deferral: anti-arrhythmic, anti-convulsant, anticoagulant, anti-thyroid, cytotoxic or cardiac-failure drugs (Digitalis)?",
        sourceCriterion: "99",
        reason:
            "Medication listed for permanent deferral"
    },

    {
        id: "organ_transplant",
        category: "Transplantation",
        question:
            "Has the donor received an allogenic or autologous organ/stem-cell transplant?",
        sourceCriterion: "100",
        reason:
            "Organ/stem-cell transplant"
    },

    {
        id: "repeated_faint",
        category: "Donation Complications",
        question:
            "Has the donor had an unexplained delayed faint, delayed faint with injury, or two consecutive faints following blood donation?",
        sourceCriterion: "101",
        reason:
            "Specified repeated/delayed fainting after donation"
    }

];
