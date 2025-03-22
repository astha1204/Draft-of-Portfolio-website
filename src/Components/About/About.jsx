import React from 'react'

function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          ABOUT ME:
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I am a third-year student at Dr. Akhilesh Das Gupta Institute of Professional Studies, passionate about technology and actively working on web development. Constantly exploring new frameworks and tools, I strive to build efficient and user-friendly solutions.

Beyond coding, I have a keen interest in the managerial aspects of the tech industry. I aim to bridge the gap between technical expertise and strategic decision-making, striving for a balance between both domains.


                      </p>
                      <p className="mt-4 text-gray-600">
                      Eager to learn, collaborate, and contribute to meaningful projects, I am always open to new opportunities and discussions. Let’s connect and explore 
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
export default About
