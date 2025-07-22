import React from 'react';
import { Tabs } from "radix-ui";
import Login from './Login';
import Register from './Register';

const UserAuth = () => {
  return (
    <div className='text-[4vw] md:text-[2.2vw]'>
      <Tabs.Root defaultValue="login" orientation="vertical">
		<Tabs.List aria-label="tabs ">
			<Tabs.Trigger value="login">Login</Tabs.Trigger>
			<Tabs.Trigger value="register">Register</Tabs.Trigger>
			
		</Tabs.List>
		<Tabs.Content value="login">
            <Login />
        </Tabs.Content>
		<Tabs.Content value="register">
            <Register />
        </Tabs.Content>
		
	</Tabs.Root>
    </div>
  )
}

export default UserAuth