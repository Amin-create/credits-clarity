import React from 'react'
import { Footer, Header, } from '../../components';
import { SignupForm } from '../../components/signup';

function SignUpPage() {
    return (
        <main className="bg-signup">
            <Header />
            <SignupForm />
            <Footer />
        </main>
    )
}

export default SignUpPage