import LeadForm from "../components/LeadForm";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center px-4 py-10 overflow-hidden">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div className="text-center lg:text-left">

          <div className="inline-block px-4 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-white mb-6">
            <p className="text-sm font-semibold text-indigo-600">
              AI Business Automation Platform
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Automate <br className="hidden sm:block" />
            Business Audits <br className="hidden sm:block" />
            With AI
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-7 max-w-xl mx-auto lg:mx-0">
            Generate personalized business audit reports automatically using AI,
            website analysis, PDF generation, and intelligent email workflows.
          </p>

          {/* MOBILE FEATURES */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white rounded-2xl px-5 py-4 shadow-md">

              <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                AI
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  AI-Powered Insights
                </h3>

                <p className="text-sm text-gray-600">
                  Personalized business recommendations
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white rounded-2xl px-5 py-4 shadow-md">

              <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                PDF
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Professional Reports
                </h3>

                <p className="text-sm text-gray-600">
                  Beautiful AI-generated PDF audits
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white rounded-2xl px-5 py-4 shadow-md sm:col-span-2 lg:col-span-1">

              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                Auto
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Automated Workflow
                </h3>

                <p className="text-sm text-gray-600">
                  Complete lead processing and email automation
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM SECTION */}

        <div className="flex justify-center">

          <div className="w-full max-w-lg">
            <LeadForm />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;