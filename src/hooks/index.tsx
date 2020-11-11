import React from 'react';

import { AuthProvider } from './auth';

const AppProdiver: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProdiver;
