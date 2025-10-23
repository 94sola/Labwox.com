import { useRef, useState } from "react";
import { MessageSquare } from "lucide-react";
import { toast } from "react-toastify";
import ReactGA from "react-ga4";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = "service_shxinxg";
const YOUR_TEMPLATE_ID = "template_zcgkuvc";
const USER_TEMPLATE_ID = "template_ngm7tjh";
const YOUR_PUBLIC_KEY = "-Vb1ZN6OEP6VGOrMn";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  // const handleInputChange = (e) => {
  //   e.preventDefault()
  //   // const { name, value } = e.target;
  //   // setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple validation
    // if (
    //   !formData.name.trim() ||
    //   !formData.email.trim() ||
    //   !formData.message.trim()
    // ) {
    //   return;
    // }
    // const re = /.+@.+\..+/;
    // if (!re.test(formData.email)) {
    //   return;
    // }
    setIsLoading(true);

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent!\n We will get back to you shortly!");
          console.log(result.text);
        },
        (error) => {
          toast.error("Message not sent");
          console.log(error.text);
        }
      );

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        USER_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          toast.error("Message not sent");
          console.log(error.text);
        }
      );

      form.current.reset();
      setIsLoading(false)

    // try {
    //   const res = await fetch("https://mail.labwox.com.ng/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   console.log(await res.json());
    //   toast.success("Message sent successfully!")
    //   ReactGA.event({
    //   category: 'User',
    //   action: 'Clicked Download Button',
    //   label: 'Download_PDF',
    // });
    //   setFormData({ name: "", email: "", message: "" });
    // } catch (err) {
    //   console.error(err.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  // const isFormValid = formData.name && formData.email && formData.message;

  // service_lpj6na5
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f7f7f8]">
      <div className="max-w-[1440px] mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="font-sans text-5xl/[60px] font-semibold text-gray-600">
            Reach Out to Us!
          </h1>
          <p className="text-gray-600 text-xl/6">
            Fill the form below and we will get back to you shortly.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-8 max-w-[768px] w-full mx-auto"
          id="contact-form"
        >
          <div>
            <label className="text-label block mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleInputChange}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white border border-[rgba(14,31,61,0.1)] rounded-[10px] text-sm text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0e1f3d]"
              required
            />
          </div>

          <div>
            <label className="text-label block mb-2">Email</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-white border border-[rgba(14,31,61,0.1)] rounded-[10px] text-sm text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0e1f3d]"
              required
            />
          </div>

          <div>
            <label className="text-label block mb-2">Your Message</label>
            <textarea
              name="message"
              // value={formData.message}
              // onChange={handleInputChange}
              placeholder="How can we help you?"
              rows="6"
              className="w-full px-4 py-3 bg-white border border-[rgba(14,31,61,0.1)] rounded-[10px] text-sm text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0e1f3d] resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full inline-flex items-center justify-center gap-2 text-sm font-bold py-4 rounded-[10px] transition-colors ${
              isLoading
                ? "bg-[#b98551] text-gray-900 hover:bg-[rgba(14,31,61,0.9)]"
                : "bg-gray-300 text-gray-900 cursor-not-allowed"
            }`}
          >
            <MessageSquare size={16} />
            {isLoading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
