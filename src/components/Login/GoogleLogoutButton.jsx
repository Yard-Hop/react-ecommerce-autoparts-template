import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId = '936510919687-ggck6cs201dedk2pafg9r0kpts99cht9.apps.googleusercontent.com';

function GoogleLogoutButton() {
  const history = useHistory();
  const onSuccess = () => {
    history.go('/');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default GoogleLogoutButton;
