const HumanVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-normal text-amber-600">Let's confirm you are human</h1>

        <div className="text-sm text-gray-700 max-w-sm mx-auto">
          <p>
            Complete the security check before continuing. This step verifies that you are not a bot, which helps to
            protect your account and prevent spam.
          </p>
        </div>

        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded flex items-center justify-center mx-auto">
          Begin <span className="ml-1">›</span>
        </button>

        <div className="pt-8">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm" defaultValue="English">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>中文</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default HumanVerification
