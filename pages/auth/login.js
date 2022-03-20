import AuthPage from "../../components/AuthPage";
import { AiOutlineMail } from 'react-icons/ai'
import InputAuth from "../../components/InputAuth";
import { VscLock } from 'react-icons/vsc';
import styles from '../../styles/Auth.module.css';
import Link from 'next/link';
import ButtonComp from "../../components/ButtonComp";

const Login = () => {
  return (
    <AuthPage
    form={
      <>
      <form>
        <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute text-primary`}/>} type='text' placehld='e-mail' />
        <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='password'  />
      </form>
      <Link href='/auth/forgot-password'>
        <a className='d-flex justify-content-end text-decoration-none my-5'>Forgot password?</a>
      </Link>
      <div className="my-5">
        <ButtonComp block cls='mt-5'>Login</ButtonComp>
      </div>
      <div className="d-flex justify-content-end">
          Dont have an account? Lets
          <Link href='/auth/register'>
            <a className="fw-bold text-decoration-none ps-1"> Signup</a>
          </Link>
        </div>
      </>
    }
    />
  )
}

export default Login
