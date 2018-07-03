import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Button from "material-ui/Button";
import { navigateTo } from "gatsby-link";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import lang from "../../../content/meta/lang";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const styles = theme => ({
  submit: {
    margin: "3em 0"
    //width: "100%"
  },
  multilineInput: {
    lineHeight: 1.4,
    fontSize: "1.2em"
  },
  singleLineInput: {
    lineHeight: 1.4,
    fontSize: "1.2em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "47%",
      marginLeft: "3%",
      "&:first-child": {
        marginRight: "3%",
        marginLeft: 0
      }
    }
  },
  submitError: {
    background: "red",
    color: "white"
  }
});

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitError: ""
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleNetworkError = e => {
    this.setState({ submitError: lang.network_error });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        console.log("Form submission success");
        navigateTo("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });

    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { email, name, message, submitError } = this.state;

    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
        name="contact"
        ref={f => (this.form = f)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {submitError && <p className={classes.submitError}>{submitError}</p>}
        <TextValidator
          id="name"
          name="name"
          label={lang.contact_name}
          value={name}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={[lang.field_required]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="email"
          name="email"
          label={lang.contact_mail}
          value={email}
          onChange={this.handleChange}
          validators={["required", "isEmail"]}
          errorMessages={[lang.field_required, lang.mail_not_valid]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="message"
          name="message"
          label={lang.contact_message}
          value={message}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={[lang.field_required]}
          multiline
          fullWidth
          margin="normal"
          className={classes.multilineInput}
        />
        <input name="bot-field" style={{ display: "none" }} />
        <div data-netlify-recaptcha></div>
        <Button
          variant="raised"
          color="primary"
          size="large"
          type="submit"
          className={classes.submit}
        >
          {lang.send}
        </Button>
      </ValidatorForm>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(ContactForm);
