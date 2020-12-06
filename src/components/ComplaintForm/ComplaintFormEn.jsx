import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from "react";
import classes from "../UI/FormInput.module.css";
import { CustomTextField } from "../UI/FormStyling";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FileDropZone from "../UI/FileDropZone.jsx";
import * as Yup from "yup";
import { 
  complaint_targets_en,
  confirm_options_en, 
  complaint_types_en, 
  document_types_en, 
  regions_en, 
  activities_en, 
  response_types_en,
  initialValuesSchema
} from './constants';
import TextError from "../UI/TextError";
import FormikErrorFocus from 'formik-error-focus';
import axios from "axios";
import Loader from '../UI/Loader/Loader';
import swal from 'sweetalert';

export default function ComplaintForm() {
  const [initialValues, setInitialValues] = useState(initialValuesSchema);
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    complaint_target: Yup.string().required("Required field!"),
    target_org_name: Yup.string().required("Required field!"),
    court_process: Yup.string().required("Required field!"),
    appeal: Yup.string().required("Required field!"),
    one_year: Yup.string().required("Required field!"),
    complaint_type: Yup.string().required("Required field!"),
    region: Yup.string().required("Required field!"),
    activity: Yup.string().required("Required field!"),
    complaint_description: Yup.string().required("Required field!"),
    problem_solve: Yup.string().required("Required field!"),
    our_act: Yup.string().required("Required field!"),
    is_anonymous: Yup.string().required("Required field!"),
    applicant_name: Yup.string().required("Required field!"),
    address: Yup.string().required("Required field!"),
    email: Yup.string().email("Wrong format, enter valid email").required("Required field!"),
    response_type: Yup.string().required("Required field!"),

    complaint_files: Yup.array().min(1, 'There should be at least one file!'),
    term1: Yup.boolean().oneOf([true], 'Required field!'),
    term2: Yup.boolean().oneOf([true], 'Required field!'),
    term3: Yup.boolean().oneOf([true], 'Required field!'),
  });

  const { REACT_APP_API_URL } = process.env;

  const sendFiles = async (complaintId, complaint_files) => {
    complaint_files.forEach(file => {
      let formData = new FormData();
      formData.append('complaint', complaintId)
      formData.append('document', file, file.name);
      axios.post(`${REACT_APP_API_URL}/common/complaint-documents/`, formData)
    });
  }

  const onSubmit = async (values, { resetForm }) => {
    try {
      const { complaint_files, term1, term2, ...sendData } = values;
      setLoading(true);
      const response = await axios.post(`${REACT_APP_API_URL}/common/complaints/`, sendData);
      const complaintId = response.data.id;

      sendFiles(complaintId, values.complaint_files);
      setSubmitted(true);
      setLoading(false);
      swal("Thanks!", "Your comlaint has been sent!", "success");

    } catch (error) {
      console.log(error.response);
    }
    resetForm();
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ handleChange, values, setFieldValue }) => (

        <>

        {isLoading && <Loader/>}

        <Form id="complaint-form" className="complaint-form">
          <label className="standart_p" htmlFor="#">
            You are filling a complaint against?
          </label>
          <div id="complaint_target">
            <FormControl fullWidth>
              <Field
                name="complaint_target"
                onChange={handleChange('complaint_target')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.complaint_target}
                style={{ marginBottom: 15 }}
              >
                {
                  complaint_targets_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="complaint_target" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
              Name of the organization or full name of a person you are filling a complaint against
            </label>

            <Field
              as={CustomTextField}
              placeholder="Name of the organization or full name"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="target_org_name"
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="target_org_name" />


            <label className="standart_p organization" htmlFor="#">
            Is your complaint in the process of court/arbitration proceeding or does it have a court/ arbitration decision?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="court_process"
                onChange={handleChange('court_process')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.court_process}
                style={{ marginBottom: 15 }}
              >
                {
                  confirm_options_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="court_process" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            To solve this issue, have you used at least one instance of administrative appeal available? 
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="appeal"
                onChange={handleChange('appeal')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.appeal}
                style={{ marginBottom: 15 }}
              >
                {
                  confirm_options_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="appeal" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            Has it been 1 year since the violation of your business rights?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="one_year"
                onChange={handleChange('one_year')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.one_year}
                style={{ marginBottom: 15 }}
              >
                {
                  confirm_options_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="one_year" />
            </FormControl>

            <p className="form-header">Information about the complainant</p>

            <label className="standart_p" htmlFor="#">
            You are filling this complaint as
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="complaint_type"
                onChange={handleChange('complaint_type')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.complaint_type}
                style={{ marginBottom: 15 }}
              >
                {
                  complaint_types_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="complaint_type" />
            </FormControl>

            {
              values.complaint_type === 'NP' ? (
                <>
                  <label className="standart_p organization" htmlFor="#">
                  Full name:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Full name"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="full_name_fiz"
                  />

                  <label className="standart_p organization" htmlFor="#">
                  TIN:{" "}
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="TIN"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="iin"
                  />

                  <label className="standart_p" htmlFor="#">
                  Based on what document do You carry out your activities?
                  </label>

                  <FormControl variant="outlined" fullWidth>
                    <Field
                      name="document_type"
                      onChange={handleChange('document_type')}
                      select
                      className={classes.input}
                      component={TextField}
                      inputProps={{ "aria-label": "Without label" }}
                      variant="outlined"
                      value={values.document_type}
                    >
                      {
                        document_types_en.map(option =>
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        )
                      }
                    </Field>
                  </FormControl>

                  {values.document_type === "PATENT" ? (
                    <>
                      <label className="standart_p organization" htmlFor="#">
                      Series/number of patent:{" "}
                      </label>

                      <Field
                        as={CustomTextField}
                        placeholder="Series/number of patent"
                        className={classes.input}
                        fullWidth
                        variant="outlined"
                        name="document_number"
                      />
                    </>
                  ) : (
                      <>
                        <label className="standart_p organization" htmlFor="#">
                        Number of the certificate of the state registration of an individual entrepreneur:{" "}
                        </label>

                        <Field
                          as={CustomTextField}
                          placeholder="Number of the certificate of the state registration of an individual entrepreneur"
                          className={classes.input}
                          fullWidth
                          variant="outlined"
                          name="document_number"
                        />
                      </>
                    )}
                </>
              ) : (
                  <>
                    <label className="standart_p organization" htmlFor="#">
                    Official name of your organization:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Official name"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="full_name_yur"
                    />

                    <label className="standart_p organization" htmlFor="#">
                    Full name of the head of the organization:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Full name of the head"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="head_of_organ"
                    />

                    <label className="standart_p organization" htmlFor="#">
                    Full name of the applicant and the position held  (if the complaint is not filed by Manager)
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Full name of the applicant and the position held  (if the complaint is not filed by Manager)"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="staff_name"
                    />

                    <label className="standart_p organization" htmlFor="#">
                    *If the complaint is not filed by the head of the legal entity, the applicant must provide a power of attorney on behalf of the legal entity for representation to the Business Ombudsman.
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="TIN"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="iin_staff	"
                    />

                    <label className="standart_p organization" htmlFor="#">
                      Registration number of the Ministry of Justice of the KR:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Registration number of the Ministry of Justice of the KR"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="reg_number_min_us	"
                    />
                  </>
                )
            }


            <label className="standart_p" htmlFor="#">
            Region of the country where the violation of business rights, freedoms or legitimate interest took place:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="region"
                onChange={handleChange('region')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.region}
                style={{ marginBottom: 15 }}
              >
                {
                  regions_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="region" />
            </FormControl>

            <label className="standart_p" htmlFor="#">
            Sphere of your activity:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="activity"
                onChange={handleChange('activity')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.activity}
                style={{ marginBottom: 15 }}
              >
                {
                  activities_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="activity" />
            </FormControl>

            {
              values.activity === 'OTHER' ? (
                <>
                  <label className="standart_p organization" htmlFor="#">
                    Other activity:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Other activity..."
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="other_activity"
                  />
                </>
              ) : null
            }

            <label className="standart_p" htmlFor="#">
            Please describe the matter of your complaint
            </label>

            <Field
              as={CustomTextField}
              placeholder="Please describe the matter of your complaint..."
              className={classes.input}
              fullWidth
              variant="outlined"
              name="complaint_description"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="complaint_description" />

            <label className="standart_p" htmlFor="#">
            What attempts have you made to solve the issue?
            </label>

            <Field
              as={CustomTextField}
              placeholder="What attempts have you made to solve the issue...?"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="problem_solve"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="problem_solve" />

            <label className="standart_p" htmlFor="#">
            What are your expectations from the Business-ombudsman in order to fix the situation/solve the problem ?
            </label>

            <Field
              as={CustomTextField}
              placeholder="Your opinion..."
              className={classes.input}
              fullWidth
              variant="outlined"
              name="our_act"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="our_act" />

            <p className="form-header">Contacts details</p>


            <label className="standart_p" htmlFor="#">
              Full name
            </label>

            <Field
              as={CustomTextField}
              placeholder="Full name"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="applicant_name"
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="applicant_name" />


            <label className="standart_p" htmlFor="#">
            Adress
            </label>

            <Field
              as={CustomTextField}
              placeholder="Adress"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="address"
              style={{ marginBottom: 15 }}
            />

            <ErrorMessage component={TextError} name="address" />

            <label className="standart_p" htmlFor="#">
            Telephone number 
            </label>

            <Field
              as={CustomTextField}
              placeholder="Telephone number"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="telephone_number"
            />

            <label className="standart_p" htmlFor="#">
                Email
            </label>

            <Field
              as={CustomTextField}
              placeholder="Email"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="email"
              style={{ marginBottom: 15 }}
            />

            <ErrorMessage component={TextError} name="email" />

            <FileDropZone 
              setFieldValue={setFieldValue} 
              name="complaint_files"
              value={values.complaint_files}
              isSubmitted={isSubmitted}
              />

            <ErrorMessage component={TextError} name="complaint_files" />

            <label className="standart_p organization" htmlFor="#">
            How would You prefer to receive a response to your complaint:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="response_type"
                onChange={handleChange('response_type')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.response_type}
                style={{ marginBottom: 15 }}
              >
                {
                  response_types_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="response_type" />

            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            Would you like to remain anonymous for public authorities, local governments, public sector companies, as well as civil servants of officials you are complaining against ?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="is_anonymous"
                onChange={handleChange('is_anonymous')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.is_anonymous}
              >
                {
                  confirm_options_en.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
            </FormControl>

            {
              values.is_anonymous === 'YES' ? (
                <>
                  <label className="standart_p" htmlFor="#">
                  If yes, could You please specify the reason:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Укажите причину"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="reason_of_anonymity"
                    multiline
                    rows={8}
                  />
                </>
              ) : null
            }


            <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: 50, marginTop: 50 }}>
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                I, as the applicant, bear full responsibility for the accuracy and completeness of the information provided and I am notified that in the event of providing false or incomplete information, the Business Ombudsman may decide to terminate consideration of the complaint
                <br />
                <br />
                <ErrorMessage component={TextError} name="term1" />
              </p>
            
              <Field name="term1">
                {({form}) => {
                  const { setFieldValue } = form;
                  return (
                    <Checkbox
                    color="primary"
                    checked={values.term1}
                    onChange={() => setFieldValue('term1', !values.term1)}
                  />
                  )
                }}
              </Field>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: 50,
                justifyContent: 'space-between',
                alignItems: "flex-end",
              }}
            >
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                I am familiar with the rights of the holder (owner) of the personal data in accordance with the law of the Kyrgyz Republic <a
                  className="standart_p"
                  href="http://cbd.minjust.gov.kg/act/view/ru-ru/202269"
                  style={{ color: "var(--primary)" }}
                >“On personal information”</a>, I consent to the collection and proceeding of my personal data and I confirm that I have been notified that my personal data will be included to the database of the Business Ombudsman Institute.
                <br />
                <br />
                <ErrorMessage component={TextError} name="term2" />
              </p>
              <Field name="term2">
                {({form}) => {
                  const { setFieldValue } = form;
                  return (
                    <Checkbox
                    color="primary"
                    checked={values.term2}
                    onChange={() => setFieldValue('term2', !values.term2)}
                  />
                  )
                }}
              </Field>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: 50,
                justifyContent: 'space-between',
                alignItems: "flex-end",
              }}
            >
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                I agree that if further consideration of my complaint is not possible without disclosure of my identity, Business Ombudsman may decide to stop consideration of the complaint any time
                <br />
                <br />
                <ErrorMessage component={TextError} name="term3" />
              </p>
              <Field name="term3">
                {({form}) => {
                  const { setFieldValue } = form;
                  return (
                    <Checkbox
                    color="primary"
                    checked={values.term3}
                    onChange={() => setFieldValue('term3', !values.term3)}
                  />
                  )
                }}
              </Field>
            </div>
          </div>

          <button
            id="submit-btn"
            type="submit"
            className="form-button"
          >
            Apply
          </button>

          <FormikErrorFocus
            offset={0}
            align={'top'}
            focusDelay={100}
            ease={'linear'}
            duration={700}
          />

        </Form>
        </>
      )}
    </Formik>
  );
}
