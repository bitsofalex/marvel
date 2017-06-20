import * as React from 'react';
import {AppBar} from 'material-ui';

interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => (
    <AppBar title="Marvel App" />
);

export {NavBar};