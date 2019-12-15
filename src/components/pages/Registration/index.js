import React from 'react';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import InputPassword from '../../modules/InputPassword';

import './styles.scss';

const Registration = () => {


  return (
    <div className="registration">
      <Container maxWidth="sm">
        <h1>Registration page</h1>
        <form
          className="registration__form"
          noValidate
          autoComplete="off"
        >
          <TextField
            className="registration__text"
            label="Login"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon />
                </InputAdornment>
              ),
            }}

          />
          <TextField
            className="registration__text"
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <InputPassword
            className="registration__text"
            classIconName="registration__visability"
          />

          <Button
            className="registration__btn"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon />}
          >
            Registration
          </Button>
        </form>
      </Container>
    </div>
  )

};

export default Registration;