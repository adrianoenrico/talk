import { Localized } from "fluent-react/compat";
import React, { Component } from "react";
import { Field, Form } from "react-final-form";

import { OnSubmit } from "coral-framework/lib/form";
import {
  composeValidators,
  required,
  validateEmail,
  validateEqualPasswords,
  validatePassword,
  validateUsername,
} from "coral-framework/lib/validation";
import {
  CallOut,
  Flex,
  FormField,
  HorizontalGutter,
  InputDescription,
  InputLabel,
  TextField,
  Typography,
  ValidationMessage,
} from "coral-ui/components";

import NextButton from "./NextButton";

interface FormProps {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onGoToNextStep: () => void;
  onGoToPreviousStep: () => void;
  data: FormProps;
  onSaveData: (newData: FormProps) => void;
}

class CreateYourAccountStep extends Component<Props> {
  private onSubmit: OnSubmit<FormProps> = async (input, form) => {
    this.props.onSaveData(input);
    return this.props.onGoToNextStep();
  };
  public render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{
          email: this.props.data.email,
          username: this.props.data.username,
        }}
      >
        {({ handleSubmit, submitting, submitError }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <HorizontalGutter size="double">
              <Localized id="install-createYourAccount-title">
                <Typography variant="heading1" align="center">
                  Create an Administrator Account
                </Typography>
              </Localized>

              {submitError && (
                <CallOut color="error" fullWidth>
                  {submitError}
                </CallOut>
              )}

              <Field
                name="email"
                validate={composeValidators(required, validateEmail)}
              >
                {({ input, meta }) => (
                  <FormField>
                    <Localized id="install-createYourAccount-email">
                      <InputLabel>Email</InputLabel>
                    </Localized>
                    <Localized
                      id="install-createYourAccount-emailTextField"
                      attrs={{ placeholder: true }}
                    >
                      <TextField
                        name={input.name}
                        onChange={input.onChange}
                        value={input.value}
                        placeholder="Email"
                        color={
                          meta.touched && (meta.error || meta.submitError)
                            ? "error"
                            : "regular"
                        }
                        disabled={submitting}
                        fullWidth
                      />
                    </Localized>
                    {meta.touched && (meta.error || meta.submitError) && (
                      <ValidationMessage fullWidth>
                        {meta.error || meta.submitError}
                      </ValidationMessage>
                    )}
                  </FormField>
                )}
              </Field>

              <Field
                name="username"
                validate={composeValidators(required, validateUsername)}
              >
                {({ input, meta }) => (
                  <FormField>
                    <Localized id="install-createYourAccount-username">
                      <InputLabel>Username</InputLabel>
                    </Localized>
                    <Localized id="install-createYourAccount-usernameDescription">
                      <InputDescription>
                        An identifier displayed on your comments. You may use
                        “_” and “.”
                      </InputDescription>
                    </Localized>
                    <Localized
                      id="install-createYourAccount-usernameTextField"
                      attrs={{ placeholder: true }}
                    >
                      <TextField
                        name={input.name}
                        onChange={input.onChange}
                        value={input.value}
                        placeholder="Username"
                        color={
                          meta.touched && (meta.error || meta.submitError)
                            ? "error"
                            : "regular"
                        }
                        disabled={submitting}
                        fullWidth
                      />
                    </Localized>
                    {meta.touched && (meta.error || meta.submitError) && (
                      <ValidationMessage fullWidth>
                        {meta.error || meta.submitError}
                      </ValidationMessage>
                    )}
                  </FormField>
                )}
              </Field>

              <Field
                name="password"
                validate={composeValidators(required, validatePassword)}
              >
                {({ input, meta }) => (
                  <FormField>
                    <Localized id="install-createYourAccount-password">
                      <InputLabel>Password</InputLabel>
                    </Localized>
                    <Localized id="install-createYourAccount-passwordDescription">
                      <InputDescription>
                        Must be at least 8 characters
                      </InputDescription>
                    </Localized>
                    <Localized
                      id="install-createYourAccount-passwordTextField"
                      attrs={{ placeholder: true }}
                    >
                      <TextField
                        name={input.name}
                        onChange={input.onChange}
                        value={input.value}
                        placeholder="Password"
                        type="password"
                        color={
                          meta.touched && (meta.error || meta.submitError)
                            ? "error"
                            : "regular"
                        }
                        disabled={submitting}
                        fullWidth
                      />
                    </Localized>
                    {meta.touched && (meta.error || meta.submitError) && (
                      <ValidationMessage fullWidth>
                        {meta.error || meta.submitError}
                      </ValidationMessage>
                    )}
                  </FormField>
                )}
              </Field>
              <Field
                name="confirmPassword"
                validate={composeValidators(required, validateEqualPasswords)}
              >
                {({ input, meta }) => (
                  <FormField>
                    <Localized id="install-createYourAccount-confirmPassword">
                      <InputLabel>Confirm Password</InputLabel>
                    </Localized>
                    <Localized
                      id="install-createYourAccount-confirmPasswordTextField"
                      attrs={{ placeholder: true }}
                    >
                      <TextField
                        name={input.name}
                        onChange={input.onChange}
                        value={input.value}
                        placeholder="Confirm Password"
                        type="password"
                        color={
                          meta.touched && (meta.error || meta.submitError)
                            ? "error"
                            : "regular"
                        }
                        disabled={submitting}
                        fullWidth
                      />
                    </Localized>
                    {meta.touched && (meta.error || meta.submitError) && (
                      <ValidationMessage fullWidth>
                        {meta.error || meta.submitError}
                      </ValidationMessage>
                    )}
                  </FormField>
                )}
              </Field>

              <Flex direction="row-reverse">
                <NextButton submitting={submitting} />
              </Flex>
            </HorizontalGutter>
          </form>
        )}
      </Form>
    );
  }
}

export default CreateYourAccountStep;
