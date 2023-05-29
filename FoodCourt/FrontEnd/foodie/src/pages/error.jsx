import React from 'react'

function ErrorPage() {
  return (
    <div className="container-fluid">
      <div className="row shadow shadow p-3 bg-dark">
       <div className="col-md-12">
        <h2 className='error'>404!<br/>Page Not Found</h2>
       </div>
      </div>
    </div>
  )
}

export default ErrorPage