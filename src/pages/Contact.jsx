import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-white px-4 py-20 lg:px-8 lg:py-32">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have questions, feedback, or a project idea? We’d love to hear from
            you. Get in touch with our team using the form below or through our
            contact details.
          </p>
        </div>

        {/* Contact Details + Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <ContactItem
              icon={<Mail size={20} />}
              label="Email"
              value="hello@audiocraftstudio.com"
            />
            <ContactItem
              icon={<Phone size={20} />}
              label="Phone"
              value="+1 (555) 123-4567"
            />
            <ContactItem
              icon={<MapPin size={20} />}
              label="Location"
              value="San Francisco, CA"
            />

            {/* Google Map Embed (Optional) */}
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0852934080934!2d-122.41941508468176!3d37.77492977975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f7e4b4bff%3A0x0!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1675555555555"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
          >
            <InputField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <InputField
              label="Your Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full text-white hover:scale-105 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Let’s Make Something Great Together
          </h2>
          <p className="text-gray-400">
            We’re here to help you bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const InputField = ({ label, type = "text", name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
      placeholder={label}
    />
  </div>
);

export default Contact;
