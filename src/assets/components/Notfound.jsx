
export default function Notfound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl text-gray-700 font-extrabold">404</h1>
      <p className="text-2xl text-gray-600">Page Not Found</p>
      <p className="text-gray-600">Sorry, the page you are looking for could not be found.</p>
      <a href="/" className="text-blue-500 hover:underline">Return to the homepage</a>
    </div>
  </div>


  )
}
