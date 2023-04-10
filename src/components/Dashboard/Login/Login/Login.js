import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { initializeApp } from 'firebase/app';
import Navigation from '../../../Home/Navigation/Navigation';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link } from 'react-router-dom';
import { ContextUser } from '../../../../App';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';


const app = initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        photoURL: ''
    });

    const history = useHistory()
    const location =useLocation()

    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = e => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }

    // const {  formState: {} } = useForm();

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const userInfo = { ...user }
                    setUser(userInfo)
                    updateUserName(user.name)
                    Swal.fire(
                        'Successfully Log In!',
                        '',
                        'success'
                    )
                    setNewUser(!newUser);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)

                });
        }
        if (!newUser && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const userInfo = { ...user }
                    setUser(userInfo)
                    const { displayName, email } = res.user
                    const signedInUser = { name: displayName, email }
                    setLoggedInUser(signedInUser)
                    Swal.fire(
                        'Successfully Log In!',
                        '',
                        'success'
                    )
                    history.replace(from);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)

                });
        }
        e.preventDefault();
    }
    const updateUserName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('updated')

        }).catch((error) => {

        });
    }

    // Google sign IN
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const {displayName,email}=user;
                const signedInUser = {name:displayName,email}
                setLoggedInUser(signedInUser)
                history.replace(from);
                
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorMessage,email)  
            });

    }

    return (
        <section>
            <div className='mb-5 pb-5'>
                <Navigation></Navigation>
            </div>
            <div className='container text-center mt-5 pt-5'>
                <div className='shadow p-5 col-md-6 m-auto'>
                    <h2 className='mb-4'>{newUser ? 'Sign Up' : 'LogIn'}</h2>
                    <form onSubmit={handleSubmit}>
                        {newUser && <input type="text" onBlur={handleBlur} name='name' placeholder='Name' className='form-control ' required />}
                        <br />
                        <input type="email" onBlur={handleBlur} placeholder='Email' className='form-control' name='email' required />
                        <br />
                        <input type="password" onBlur={handleBlur} placeholder='Password' className='form-control' name='password' required />
                        <br />
                        <input className='form-control btn btn-danger' type="submit" value={newUser? 'SignUp':'LogIn'}/>
                        <p className='mt-3'>{newUser ? 'Have you already an account?' : "Don't have an account?"} <Link onClick={() => setNewUser(!newUser)}>{newUser ? 'Login' : 'SignUp'}</Link></p>

                    </form>
                    <h4>OR</h4>
                    <button onClick={handleGoogleSignIn} style={{fontSize:'20px'}} className='btn btn-outline-secondary form-control fw-bold p-2'><FontAwesomeIcon style={{ color: 'red', marginRight: '12px' }} icon={faGoogle} size='1x' /> SignIn With Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;