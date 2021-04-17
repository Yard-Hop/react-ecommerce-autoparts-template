import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useStateValue } from '../../StateProvider';

const clientId = '936510919687-ggck6cs201dedk2pafg9r0kpts99cht9.apps.googleusercontent.com';

function GoogleLoginButton() {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  const onSuccess = (res) => {
    const { name, googleId } = res.profileObj;
    dispatch({
      type: 'AUTH_USER',
      item: {
        name,
        id: `GOOGLE${googleId}`,
      },
    });
    history.push('/dashboard');
  };

  const onFailure = (res) => {
    // eslint-disable-next-line no-console
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        style={
                {
                  width: '300px',
                  height: 'fit-content',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '3px',
                  padding: '20px',
                }
              }
        isSignedIn
      />
    </div>
  );
}

export default GoogleLoginButton;
