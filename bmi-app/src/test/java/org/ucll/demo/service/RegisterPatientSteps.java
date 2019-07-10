package org.ucll.demo.service;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
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

import static org.junit.Assert.fail;

@RunWith(Cucumber.class)
@CucumberOptions
        (
                features = {"src/test/resources/org/ucll/demo/service/ShowPatientDetails.feature" },
                plugin = {"html:target/cucumber", "json:target/cucumber.json"}
        )
public class RegisterPatientSteps
{
        private int ssn;
        private String birthdate;
        private String gender;
        private PersonServiceJavaApi service;
    private int errors;

    @Given("^A social security number (\\d+), birthdate \"([^\"]*)\" and gender \"([^\"]*)\"$")
        public void a_social_security_number_birthdate_and_gender(int ssn, String birthdate, String gender) throws Throwable {
            this.ssn = ssn;
            this.birthdate = birthdate;
            this.gender = gender;
        }

        @When("^I register the patient$")
        public void i_register_the_patient() throws Throwable {
            try
            {
                this.service = new PersonServiceJavaApi();
                PersonDetail person = new PersonDetail();
//            person.setBirthdate(this.birthdate);
//            person.setGender(this.gender);
//            person.setSocialSecurityNumber(this.ssn);
                this.service.addPerson(person);

            }
            catch (Exception e)
            {
                this.errors++;
            }
        }

        @Then("^no errors are given$")
        public void no_errors_are_given() throws Throwable {
            if(this.errors != 0)
            {
                fail();
            }
        }

        @Given("^a length (\\d+), weight (\\d+) and date \"([^\"]*)\"$")
        public void a_length_weight_and_date(int arg1, int arg2, String arg3) throws Throwable {
        }

        @When("^i register the examination$")
        public void i_register_the_examination() throws Throwable {
        }

        @Then("^an error is thrown$")
        public void an_error_is_thrown() throws Throwable {
        }

        @When("^i register the patient and first examination$")
        public void i_register_the_patient_and_first_examination() throws Throwable {
        }

        @Then("^an error gets thrown$")
        public void an_error_gets_thrown() throws Throwable {
        }

}
