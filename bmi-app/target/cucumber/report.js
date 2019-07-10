$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/org/ucll/demo/service/ShowPatientDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Show patient details",
  "description": "\nIn order to check the physical condition of a patient\nAs a caretaker\nI want to consult his/her personal details",
  "id": "show-patient-details",
  "keyword": "Feature"
});
formatter.before({
  "duration": 726939,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "the personal details of a registered patient are given",
  "description": "",
  "id": "show-patient-details;the-personal-details-of-a-registered-patient-are-given",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "on \"2000-04-10\" the patient had a length of 180 cm and a weight of 75000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the patient is registered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I ask for the details of the patient using his social security number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the personal details social security number, gender and birthdate are given",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the examination details length, weight and last examination date are given",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the calculated bmi \"23.15\" is given",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_male_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 208751445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "180",
      "offset": 44
    },
    {
      "val": "75000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 988572,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.the_patient_is_registered()"
});
formatter.result({
  "duration": 918574,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient_using_his_social_security_number()"
});
formatter.result({
  "duration": 582614,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.the_personal_details_social_security_number_gender_and_birthdate_are_given()"
});
formatter.result({
  "duration": 1985462,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.the_examination_details_length_weight_and_last_examination_date_are_given()"
});
formatter.result({
  "duration": 132979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23.15",
      "offset": 20
    }
  ],
  "location": "ShowPatientDetailsSteps.the_calculated_bmi_is_given(double)"
});
formatter.result({
  "duration": 333268,
  "status": "passed"
});
formatter.after({
  "duration": 88926,
  "status": "passed"
});
formatter.before({
  "duration": 212042,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "the physical data of the most recent examination are given",
  "description": "",
  "id": "show-patient-details;the-physical-data-of-the-most-recent-examination-are-given",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "a patient with the social security number \"93051822361\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "on \"2000-04-17\" the patient had a length of 180 cm and a weight of 80000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the patient is registered",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "on \"2000-04-10\" the patient had a length of 180 cm and a weight of 75000 gr but these data were added later",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I ask for the details of the patient using his social security number",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the length 180, weight 80000, and date of the examination \"2000-04-17\" are given",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the calculated bmi \"24.69\" is based on these data",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number(String)"
});
formatter.result({
  "duration": 159198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-17",
      "offset": 4
    },
    {
      "val": "180",
      "offset": 44
    },
    {
      "val": "80000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 548122,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.the_patient_is_registered()"
});
formatter.result({
  "duration": 74066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "180",
      "offset": 44
    },
    {
      "val": "75000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr_but_these_data_were_added_later(Date,int,int)"
});
formatter.result({
  "duration": 623610,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient_using_his_social_security_number()"
});
formatter.result({
  "duration": 181929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 11
    },
    {
      "val": "80000",
      "offset": 23
    },
    {
      "val": "2000-04-17",
      "offset": 59
    }
  ],
  "location": "ShowPatientDetailsSteps.the_length_weight_and_date_of_the_examination_are_given(int,int,Date)"
});
formatter.result({
  "duration": 591535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24.69",
      "offset": 20
    }
  ],
  "location": "ShowPatientDetailsSteps.the_calculated_bmi_is_based_on_these_data(double)"
});
formatter.result({
  "duration": 194763,
  "status": "passed"
});
formatter.after({
  "duration": 50740,
  "status": "passed"
});
formatter.before({
  "duration": 94027,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "an error message is given if the patient cannot be found",
  "description": "",
  "id": "show-patient-details;an-error-message-is-given-if-the-patient-cannot-be-found",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "a patient that is not registered",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I ask for the details of the patient using his social security number",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "an error message is given",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "no details are given",
  "keyword": "And "
});
formatter.match({
  "location": "ShowPatientDetailsSteps.a_patient_that_is_not_registered()"
});
formatter.result({
  "duration": 54806,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient_using_his_social_security_number()"
});
formatter.result({
  "duration": 109449,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.an_error_message_is_given()"
});
formatter.result({
  "duration": 88298,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.no_details_are_given()"
});
formatter.result({
  "duration": 90776,
  "status": "passed"
});
formatter.after({
  "duration": 46830,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "the bmi is rounded to 2 digits",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "a patient that is registered with a length \u003clength\u003e cm and weight \u003cweight\u003e gr",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I ask for the details of the patient",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the bmi \u003cbmi\u003e is given rounded to two digits",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;",
  "rows": [
    {
      "cells": [
        "length",
        "weight",
        "bmi"
      ],
      "line": 37,
      "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;1"
    },
    {
      "cells": [
        "160",
        "65000",
        "\"25.39\""
      ],
      "line": 38,
      "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;2"
    },
    {
      "cells": [
        "160",
        "65001",
        "\"25.39\""
      ],
      "line": 39,
      "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;3"
    },
    {
      "cells": [
        "160",
        "65009",
        "\"25.39\""
      ],
      "line": 40,
      "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;4"
    },
    {
      "cells": [
        "180",
        "75000",
        "\"23.15\""
      ],
      "line": 41,
      "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;5"
    },
    {
      "cells": [
        "180",
        "75009",
        "\"23.15\""
      ],
      "line": 42,
      "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 123349,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "the bmi is rounded to 2 digits",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "a patient that is registered with a length 160 cm and weight 65000 gr",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I ask for the details of the patient",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the bmi \"25.39\" is given rounded to two digits",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 43
    },
    {
      "val": "65000",
      "offset": 61
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int,int)"
});
formatter.result({
  "duration": 333036,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient()"
});
formatter.result({
  "duration": 184454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25.39",
      "offset": 9
    }
  ],
  "location": "ShowPatientDetailsSteps.the_bmi_is_given_rounded_to_two_digits(double)"
});
formatter.result({
  "duration": 182589,
  "status": "passed"
});
formatter.after({
  "duration": 84992,
  "status": "passed"
});
formatter.before({
  "duration": 138176,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "the bmi is rounded to 2 digits",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "a patient that is registered with a length 160 cm and weight 65001 gr",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I ask for the details of the patient",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the bmi \"25.39\" is given rounded to two digits",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 43
    },
    {
      "val": "65001",
      "offset": 61
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int,int)"
});
formatter.result({
  "duration": 262516,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient()"
});
formatter.result({
  "duration": 149663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25.39",
      "offset": 9
    }
  ],
  "location": "ShowPatientDetailsSteps.the_bmi_is_given_rounded_to_two_digits(double)"
});
formatter.result({
  "duration": 9207856,
  "status": "passed"
});
formatter.after({
  "duration": 53790,
  "status": "passed"
});
formatter.before({
  "duration": 148340,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "the bmi is rounded to 2 digits",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "a patient that is registered with a length 160 cm and weight 65009 gr",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I ask for the details of the patient",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the bmi \"25.39\" is given rounded to two digits",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 43
    },
    {
      "val": "65009",
      "offset": 61
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int,int)"
});
formatter.result({
  "duration": 256305,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient()"
});
formatter.result({
  "duration": 143174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25.39",
      "offset": 9
    }
  ],
  "location": "ShowPatientDetailsSteps.the_bmi_is_given_rounded_to_two_digits(double)"
});
formatter.result({
  "duration": 200380,
  "status": "passed"
});
formatter.after({
  "duration": 49025,
  "status": "passed"
});
formatter.before({
  "duration": 101975,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "the bmi is rounded to 2 digits",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "a patient that is registered with a length 180 cm and weight 75000 gr",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I ask for the details of the patient",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the bmi \"23.15\" is given rounded to two digits",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 43
    },
    {
      "val": "75000",
      "offset": 61
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int,int)"
});
formatter.result({
  "duration": 263690,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient()"
});
formatter.result({
  "duration": 201238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23.15",
      "offset": 9
    }
  ],
  "location": "ShowPatientDetailsSteps.the_bmi_is_given_rounded_to_two_digits(double)"
});
formatter.result({
  "duration": 173375,
  "status": "passed"
});
formatter.after({
  "duration": 53692,
  "status": "passed"
});
formatter.before({
  "duration": 135869,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "the bmi is rounded to 2 digits",
  "description": "",
  "id": "show-patient-details;the-bmi-is-rounded-to-2-digits;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "a patient that is registered with a length 180 cm and weight 75009 gr",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I ask for the details of the patient",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the bmi \"23.15\" is given rounded to two digits",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 43
    },
    {
      "val": "75009",
      "offset": 61
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int,int)"
});
formatter.result({
  "duration": 293303,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_for_the_details_of_the_patient()"
});
formatter.result({
  "duration": 158156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23.15",
      "offset": 9
    }
  ],
  "location": "ShowPatientDetailsSteps.the_bmi_is_given_rounded_to_two_digits(double)"
});
formatter.result({
  "duration": 188155,
  "status": "passed"
});
formatter.after({
  "duration": 46817,
  "status": "passed"
});
formatter.before({
  "duration": 106950,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "In order to navigate to the data of a certain patient As a caretaker I want to see the list of all patients",
  "description": "",
  "id": "show-patient-details;in-order-to-navigate-to-the-data-of-a-certain-patient-as-a-caretaker-i-want-to-see-the-list-of-all-patients",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "a patient with the social security number \"93051822361\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "a second patient with the social security number \"870811220062\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "both patients are registered",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I ask to see a list of all my patients",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "a patient with the social security number \"93051822361\" is given",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "a patient with the social security number \"870811220062\" is given",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number(String)"
});
formatter.result({
  "duration": 122946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "870811220062",
      "offset": 50
    }
  ],
  "location": "ShowPatientDetailsSteps.a_second_patient_with_the_social_security_number(String)"
});
formatter.result({
  "duration": 142126,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.both_patients_are_registered()"
});
formatter.result({
  "duration": 115062,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_to_see_a_list_of_all_my_patients()"
});
formatter.result({
  "duration": 155663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_is_given(String)"
});
formatter.result({
  "duration": 164645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "870811220062",
      "offset": 43
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_is_given(String)"
});
formatter.result({
  "duration": 123280,
  "status": "passed"
});
formatter.after({
  "duration": 54670,
  "status": "passed"
});
formatter.before({
  "duration": 103033,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "When there are no patients i will get an empty list when asking for the list of patients.",
  "description": "",
  "id": "show-patient-details;when-there-are-no-patients-i-will-get-an-empty-list-when-asking-for-the-list-of-patients.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "No patients",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I ask to see a list of all my patients",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I get an emtpy list",
  "keyword": "Then "
});
formatter.match({
  "location": "ShowPatientDetailsSteps.no_patients()"
});
formatter.result({
  "duration": 75052,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_ask_to_see_a_list_of_all_my_patients()"
});
formatter.result({
  "duration": 65600,
  "status": "passed"
});
formatter.match({
  "location": "ShowPatientDetailsSteps.i_get_an_emtpy_list()"
});
formatter.result({
  "duration": 69804,
  "status": "passed"
});
formatter.after({
  "duration": 34518,
  "status": "passed"
});
});