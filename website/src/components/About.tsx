export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Zoe Axford
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With years of experience in professional print finishing, Zoe Axford founded SE Finishers 
              to provide specialized, high-quality finishing services with a personal touch. Every project 
              receives expert attention and care to ensure exceptional results.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality and precision has made us a trusted partner for print companies, 
              design agencies, and businesses requiring premium finishing services. We specialize in 
              foiling and die cutting up to SRA3 format, ensuring we can handle your most demanding projects.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Quality Focused</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Personal Service</h3>
                  <p className="text-gray-600 text-sm">Direct communication with Zoe throughout your project</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Technical Expertise</h3>
                  <p className="text-gray-600 text-sm">Specialized knowledge in foiling and die cutting techniques</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">Rigorous quality control for every finished project</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white font-bold">ZA</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Zoe Axford</h3>
                <p className="text-gray-600">Founder & Print Finishing Expert</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-blue-600 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Services Philosophy */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h4>
              <p className="text-gray-600">Every project is treated with the utmost care and attention to detail, ensuring professional results every time.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Reliable Delivery</h4>
              <p className="text-gray-600">Consistent turnaround times and reliable service delivery you can count on for your deadlines.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Personal Communication</h4>
              <p className="text-gray-600">Direct access to Zoe throughout your project ensures clear communication and satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}