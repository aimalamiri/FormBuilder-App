export default function Login() {
  return (
    <>
      <div className="card w-1/3 mx-auto">
        <h1 className="text-xl text-center mb-9">Login</h1>
        <form action="">
          <label for="email" className="label">
            Email
            <input type="email" placeholder="Enter your email" className="input" />
          </label>
          <label for="password" className="label my-4">
            Password
            <input type="password" placeholder="Enter your password" className="input" />
          </label>
          <button className="btn btn-success" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
