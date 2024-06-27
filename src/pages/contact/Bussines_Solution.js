import React from "react";
import "../../Components/styles/Contact/Bussines_Solution.css"
const Bussines_Solution = () => {
  return (
    <>
      <section className="CSolution bg-blend-darken">
        <h4>Get a solutions to your businesses</h4>
        <p>
          Demesne far hearted suppose venture excited see had has. Dependent on
          so extremely delivered by. Yet no jokes worse her why. Bed one
          supposing breakfast day fulfilled off depending questions. Whatever
          boy her exertion his extended. Ecstatic followed handsome drawings
          entirely mrs one yet outweigh.
        </p>
      </section>
      <section className="FormMapMain">
        <section className="form">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Your name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Your message (optional)
              </label>
              <textarea className="w-full mt-1 p-2 border border-gray-300 rounded-md h-32"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="form">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.869564851063!2d-74.00156758459496!3d40.74881797932711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a637e7%3A0xe4b0c4b0a95a7d85!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620410465056!5m2!1sen!2sus"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Bussines_Solution;
