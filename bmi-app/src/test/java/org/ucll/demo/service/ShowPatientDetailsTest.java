package org.ucll.demo.service;

import cucumber.api.CucumberOptions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.ucll.demo.domain.Gender;
import org.ucll.demo.service.api.java.to.PersonDetail;

import java.util.Date;

@RunWith(Cucumber.class)
@CucumberOptions
        (
                features = {"src/test/resources/org/ucll/demo/service/ShowPatientDetails.feature" },
                plugin = {"html:target/cucumber", "json:target/cucumber.json"}
        )
public class ShowPatientDetailsTest
{
}
