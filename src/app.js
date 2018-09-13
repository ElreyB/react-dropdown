import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/Dropdown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

library.add(fab, faAngleUp, faAngleDown, faCheck);

ReactDOM.render(<Dropdown />, document.getElementById('app'));
