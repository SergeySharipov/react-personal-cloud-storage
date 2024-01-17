import React from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link } from 'react-router-dom'
// import { ClipboardCheck } from 'lucide-react'
import { AuthCard } from "../components/AuthCard";
import { AuthBottomRedirect } from "../components/AuthBottomRedirect";
import { AuthHeader } from "../components/AuthHeader";

export default function ForgotPassword() {
  // const emailRef = useRef()
  // const { resetPassword } = useAuth()
  // const [error, setError] = useState("")
  // const [message, setMessage] = useState("")
  // const [loading, setLoading] = useState(false)

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   try {
  //     setMessage("")
  //     setError("")
  //     setLoading(true)
  //     await resetPassword(emailRef.current.value)
  //     setLoading(false)
  //     setMessage("Check your inbox for further instructions")
  //   } catch {
  //     setLoading(false)
  //     setError("Failed to reset password")
  //   }
  // }

  return (
    // <>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Password Reset</h2>
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       {message && <Alert variant="success">{message}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control type="email" ref={emailRef} required />
    //         </Form.Group>
    //         <Button disabled={loading} className="w-100 mt-4" type="submit">
    //           Reset Password
    //         </Button>
    //       </Form>
    //       <div className="w-100 text-center mt-3">
    //         <Link to="/login">Login</Link>
    //       </div>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Need an account? <Link to="/signup">Sign Up</Link>
    //   </div>
    // </>

    <AuthCard>
      <AuthHeader
        title="Reset password"
        subtitle="Fill up the form to get instructions"
      />

      <form className="space-y-5">
        <div>
          <label className="label">
            <span className="label-text text-base">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />
        </div>

        <button className="btn btn-primary btn-block">Reset Password</button>

        <AuthBottomRedirect
          text="Remember your password?"
          linkText="Login here"
          linkTo="/login"
        />
      </form>
    </AuthCard>
  );
}
