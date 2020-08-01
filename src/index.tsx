import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/demo/Hello'
import HelloClass from './components/demo/HelloClass'
import HelloHoc from './components/demo/HelloHoc'
import HelloHooks from './components/demo/HelloHooks'

ReactDOM.render(
	<HelloHooks name="TypeScript" />,
	document.querySelectorAll('#root')[0]
)