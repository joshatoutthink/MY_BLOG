import React from "react"
import styled from "styled-components"

import TitleRow from "../components/layoutHelpers/TitleRow"
import ContentRow from "../components/layoutHelpers/ContentRow"
import Layout from "../components/layout"
import { grey3, blue2, blue1, blue3 } from "../components/designSystem"

const contact = () => {
  return (
    <Layout showTitle={true} pageTitle={"Contact"}>
      <TitleRow>
        <h1>Contact Me</h1>
      </TitleRow>
      <ContentRow>
        <ContactForm
          data-netlify={true}
          name="contact"
          method="post"
          action="/contact/?success"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-group">
            <label htmlFor="name">
              <input type="text" name="name" id="name" placeholder="&nbsp;" />
              <span className="label-text">Name</span>
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="&nbsp;"
              />
              <span className="label-text">Email</span>
            </label>
          </div>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="&nbsp;"
            ></textarea>
            <span className="label-text">Message</span>
          </label>
          <button type="submit" value="Submit" />
        </ContactForm>
      </ContentRow>
    </Layout>
  )
}

const ContactForm = styled.form`
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  flex-direction: column;
  .input-group {
    flex-direction: row;
    border: none;
    display: flex;
    justify-content: space-between;
    input {
      display: block;
      width: 100%;
    }
    label:last-child {
      margin-left: 20px;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    label {
      order: 1;
    }
    input,
    textarea {
      order: 2;
    }
    * {
      width: 100%;
    }
  }
  .label-text {
    padding-left: 0px;
    transform: translate(10px, 2em);
  }
  input:not([type="submit"]),
  textarea {
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid ${grey3};
    background: #fafafa;
    &:not(:placeholder-shown) ~ .label-text {
    }
    &:active,
    &:focus {
      background: hsl(206, 84%, 90%);
      border-bottom: 2px solid ${blue2};
      outline: 0;
    }
    &:not(:placeholder-shown) ~ .label-text,
    &:active ~ .label-text,
    &:focus ~ .label-text {
      color: ${blue2};
      font-weight: 700;
      transform: translateY(0);
    }
  }

  textarea {
    background: #fafafa;
  }
  input {
    padding: 10px;
  }
  button[type="submit"] {
    width: 200px;
    height: 45px;
    background: ${blue2};
    outline: 0;
    border-color: ${blue2};
    color: ${blue1};
    &:hover {
      border-color: ${blue3};
      background: ${blue3};
      color: ${blue1};
    }
  }
`

export default contact
