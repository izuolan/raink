import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";

import config from "../../content/meta/config";
import lang from "../../content/meta/lang.js";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title={lang.contact} />
        <Content>
          <p>{lang.email_to_me}<Obfuscate email={config.authorEmail} /></p>
          <br/>
          {lang.contact_desc}
        </Content>
        { config.showContactForm && <Form /> }
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
