import React from 'react'
import { Footer, Header,   } from '../../components';
import { LoginForm } from '../../components/login';
 


function LoginPage() {
    return (
        <main className="bg-login">
            <Header />
            <LoginForm  />          
            <Footer />
        </main>
    )
}

export default LoginPage