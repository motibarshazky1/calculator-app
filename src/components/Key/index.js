import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../actions/userActions';

import './index.css';

const Key = ({ value }) => {
	return <div className="key">{value}</div>;
};

export default Key;
