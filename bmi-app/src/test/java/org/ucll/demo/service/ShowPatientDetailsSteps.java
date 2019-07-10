package org.ucll.demo.service;

import cucumber.api.CucumberOptions;
import cucumber.api.Format;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.ucll.demo.domain.Examination;
import org.ucll.demo.domain.Gender;
import org.ucll.demo.service.api.java.PersonServiceJavaApi;
import org.ucll.demo.service.api.java.to.ExaminationDetail;
import org.ucll.demo.service.api.java.to.PersonDetail;
import org.ucll.demo.service.api.java.to.PersonOverview;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(Cucumber.class)
@CucumberOptions
        (
                features = {"src/test/resources/org/ucll/demo/service/ShowPatientDetails.feature"},
                plugin = {"html:target/cucumber", "json:target/cucumber.json"}
        )
public class ShowPatientDetailsSteps
{
    private String socialSecurityNumber;
    private Gender gender;
    private Date birthDate;
    private PersonDetail patient;

    private Date examinationDate;
    private int lengthAtExamination;
    private int weightAtExamination;
    private ExaminationDetail examination;
    private PersonServiceJavaApi personServiceApi;
    private PersonDetail registeredPatient;
    private ExaminationDetail registeredExamination;
    private Exception error;
    private String secondSocialSecurityNumber;
    private PersonDetail secondPatient;
    private List<PersonOverview> patientList;

    @Before
    public void setup()
    {
        this.personServiceApi = new PersonServiceJavaApi();
    }

    @After
    public void teardown()
    {
        if (this.error == null)
        {
            if (this.socialSecurityNumber != null)
            {
                this.personServiceApi.deletePerson(this.socialSecurityNumber);
            }
            if (this.secondSocialSecurityNumber != null)
            {
                this.personServiceApi.deletePerson(this.secondSocialSecurityNumber);
            }
        }
    }

    @Given("^a patient with the social security number \"([^\"]*)\", gender \"([^\"]*)\" and birthdate \"([^\"]*)\"$")
    public void a_patient_with_the_social_security_number_gender_male_and_birthdate(String socialSecurityNumber, String gender, @Format("yyyy-MM-dd") Date birthDate) throws Throwable
    {
        this.socialSecurityNumber = socialSecurityNumber;
        this.gender = Gender.valueOf(gender.toUpperCase());
        this.birthDate = birthDate;
        this.patient = new PersonDetail(this.socialSecurityNumber, this.gender, this.birthDate);
//                throw new PendingException();
    }

    @Given("^on \"([^\"]*)\" the patient had a length of (\\d+) cm and a weight of (\\d+) gr$")
    public void on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(@Format("yyyy-MM-dd") Date date, int length, int weigth) throws Throwable
    {
        this.examinationDate = date;
        this.lengthAtExamination = length;
        this.weightAtExamination = weigth;
        this.examination = new ExaminationDetail(this.lengthAtExamination, this.weightAtExamination, this.examinationDate);
    }

    @Given("^the patient is registered$")
    public void the_patient_is_registered() throws Throwable
    {
        this.patient.setExaminationDetail(this.examination);
        this.personServiceApi.addPerson(this.patient);
    }

    @When("^I ask for the details of the patient using his social security number$")
    public void i_ask_for_the_details_of_the_patient_using_his_social_security_number() throws Throwable
    {
        try
        {
            this.registeredPatient = this.personServiceApi.getPerson(this.patient.getSocialSecurityNumber());
        }
        catch (Exception e)
        {
            this.error = e;
        }
    }

    @Then("^the personal details social security number, gender and birthdate are given$")
    public void the_personal_details_social_security_number_gender_and_birthdate_are_given() throws Throwable
    {
        assertEquals(this.patient.getSocialSecurityNumber(), this.registeredPatient.getSocialSecurityNumber());
        assertEquals(this.patient.getGender(), this.registeredPatient.getGender());
        assertEquals(this.patient.getBirthdate(), this.registeredPatient.getBirthdate());
    }

    @Then("^the examination details length, weight and last examination date are given$")
    public void the_examination_details_length_weight_and_last_examination_date_are_given() throws Throwable
    {
        this.registeredExamination = this.registeredPatient.getExaminationDetail();
        // Int conversion because java gets confused whether we want to compare Objects or Longs
        assertEquals(this.lengthAtExamination, this.registeredExamination.getLength());
        assertEquals(this.weightAtExamination, this.registeredExamination.getWeight());
        assertEquals(this.examinationDate, this.registeredExamination.getExaminationDate());
    }

    @Then("^the calculated bmi \"([^\"]*)\" is given$")
    public void the_calculated_bmi_is_given(double bmi) throws Throwable
    {
        assertEquals(this.registeredPatient.getBmi(), bmi, 0.0);
    }

    // -------------------------------------------------------------------------------------------------------------------------------

    @Given("^a patient with the social security number \"([^\"]*)\"$")
    public void a_patient_with_the_social_security_number(String socialSecurityNumber) throws Throwable
    {
        this.socialSecurityNumber = socialSecurityNumber;
        this.patient = new PersonDetail(this.socialSecurityNumber, Gender.MALE, new Date());
    }

    @Given("^on \"([^\"]*)\" the patient had a length of (\\d+) cm and a weight of (\\d+) gr but these data were added later$")
    public void on_the_patient_had_a_length_of_cm_and_a_weight_of_gr_but_these_data_were_added_later(@Format("yyyy-MM-dd") Date date, int length, int weight) throws Throwable
    {
        this.examination = new ExaminationDetail(length, weight, date);
        this.personServiceApi.addExamination(this.examination, this.socialSecurityNumber);
    }

    @Then("^the length (\\d+), weight (\\d+), and date of the examination \"([^\"]*)\" are given$")
    public void the_length_weight_and_date_of_the_examination_are_given(int length, int weigth, @Format("yyyy-MM-dd") Date date) throws Throwable
    {
        this.registeredExamination = this.registeredPatient.getExaminationDetail();
        assertEquals(length, this.registeredExamination.getLength());
        assertEquals(weigth, this.registeredExamination.getWeight());
        assertEquals(date, this.registeredExamination.getExaminationDate());
    }

    @Then("^the calculated bmi \"([^\"]*)\" is based on these data$")
    public void the_calculated_bmi_is_based_on_these_data(double bmi) throws Throwable
    {
        assertEquals(this.registeredPatient.getBmi(), bmi, 0.0);
    }

    // -----------------------------------------------------------------------------------------------------------------------------------
    @Given("^a patient that is not registered$")

    public void a_patient_that_is_not_registered() throws Throwable
    {
        this.patient = new PersonDetail("aaaaaaaaa", Gender.MALE, new Date());
    }

    @Then("^an error message is given$")
    public void an_error_message_is_given() throws Throwable
    {
        assertNotNull(this.error);
    }

    @Then("^no details are given$")
    public void no_details_are_given() throws Throwable
    {
        assertNull(this.registeredExamination);
    }

//-----------------------------------------------------------------------------------------------

    @Given("^a patient that is registered with a length (\\d+) cm and weight (\\d+) gr$")
    public void a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int length, int weigth) throws Throwable
    {
        this.socialSecurityNumber = "test";
        this.patient = new PersonDetail(this.socialSecurityNumber, Gender.MALE, new Date());
        this.patient.setExaminationDetail(new ExaminationDetail(length, weigth, new Date()));
        this.personServiceApi.addPerson(this.patient);
    }

    @When("^I ask for the details of the patient$")
    public void i_ask_for_the_details_of_the_patient() throws Throwable
    {
        this.registeredPatient = this.personServiceApi.getPerson(this.socialSecurityNumber);
    }

    @Then("^the bmi \"([^\"]*)\" is given rounded to two digits$")
    public void the_bmi_is_given_rounded_to_two_digits(double bmi) throws Throwable
    {
        assertEquals(this.registeredPatient.getBmi(), bmi, 0.0);
    }

    // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    @Given("^a second patient with the social security number \"([^\"]*)\"")
    public void a_second_patient_with_the_social_security_number(String secondSocialSecurityNumber) throws Throwable
    {
        this.secondSocialSecurityNumber = secondSocialSecurityNumber;
        this.secondPatient = new PersonDetail(this.secondSocialSecurityNumber, Gender.MALE, new Date());
    }

    @Given("^both patients are registered$")
    public void both_patients_are_registered() throws Throwable
    {
        ExaminationDetail dummyExamination = new ExaminationDetail(Examination.MINIMUM_LENGTH, Examination.MINIMUM_WEIGHT, new Date());
        this.patient.setExaminationDetail(dummyExamination);
        this.secondPatient.setExaminationDetail(dummyExamination);
        this.personServiceApi.addPerson(this.patient);
        this.personServiceApi.addPerson(this.secondPatient);
    }

    @When("^I ask to see a list of all my patients$")
    public void i_ask_to_see_a_list_of_all_my_patients() throws Throwable
    {
        this.patientList = this.personServiceApi.getPersons();
    }

    @Then("^a patient with the social security number \"([^\"]*)\" is given$")
    public void a_patient_with_the_social_security_number_is_given(String socialSecurityNumber) throws Throwable
    {
        int found = 0;
        for (PersonOverview patient : this.patientList)
        {
            if (patient.getSocialSecurityNumber().equals(socialSecurityNumber))
            {
                found++;
            }
        }
        assertEquals(1, found);
    }

    @Given("^No patients$")
    public void no_patients() throws Throwable
    {
    }

    @Then("^I get an emtpy list$")
    public void i_get_an_emtpy_list() throws Throwable
    {
        assertTrue(this.patientList.isEmpty());
    }

}

